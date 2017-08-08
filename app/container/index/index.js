import React from "react";
import {ajax} from '../../util/index';

import { NavBar, SearchBar, Carousel, WhiteSpace, Grid, Icon} from 'antd-mobile';
import NavbarTop from "../../component/navbar_top/index";

export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            data: {
                sliderImgs:[],
                listImgs:[]
            },
            list:[],
            // 是否展示搜索框
            search:false,
        }

    }
    componentWillMount(){
        // 首页slider + bar
        ajax({
          url:'http://localhost:8333/index',
          method:'GET',
        }).then((data)=>{
          this.setState({
              data:data.data
          })
        }).catch((err)=>{
          console.log(err);
        });
        // 商品列表
        ajax({
            url:'http://localhost:8333/search/a',
            method:'GET',
        }).then((data)=>{
            console.log(data);
            this.setState({
                list:data.data
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return (
            <div>
                <NavbarTop>
                    {!this.state.search?
                        <NavBar
                        iconName={require('../../public/icon/index.svg')}
                        mode="light"
                        rightContent={<Icon
                            onClick={()=>{this.setState({search:true})}}
                            type="search"/>}>
                        SWAG
                        </NavBar>
                      :<SearchBar
                            onBlur={()=>{
                                setTimeout(()=>{
                                    this.setState({search:false})
                                },30)
                            }}
                            focused="true"
                            placeholder="搜索" />
                    }

                </NavbarTop>
                {/*slider*/}
                <Carousel
                    autoplay={true}
                    infinite
                    hasLine={true}
                    selectedIndex={1}
                    swipeSpeed={35}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.sliderImgs.map((item,index) => (
                        <a key={index}>
                            <img style={{width:"100%",height:"4rem"}} src={item} alt="icon"/>
                        </a>
                    ))}
                </Carousel>
                <WhiteSpace size="lg" />
                {/*bar*/}
                <Grid data={this.state.data.listImgs}
                      columnNum={4}
                      renderItem={dataItem => (
                          <div style={{ padding: '0.25rem',border:'2px solid #ccc'  }}>
                              <img src={dataItem.src} style={{ width: '0.8rem', height: '0.8rem' }} alt="icon" />
                              <div style={{ color: '#888', fontSize: '0.28rem', marginTop: '0.14rem' }}>
                                  <span>{dataItem.name}</span>

                              </div>

                          </div>
                      )}
                />
                <WhiteSpace size="lg" />
                <Grid data={this.state.list}
                      columnNum={2}
                      hasLine={true}
                      renderItem={dataItem => (
                          <div style={{ padding: '0.15rem', border:'2px solid #ccc' }}>
                              <img src={dataItem.src} style={{ width: '2.5rem', height: '2.5rem' }} alt="icon" />
                              <div style={{ color: '#000', fontSize: '0.3rem', }}>
                                  <span>{dataItem.name}</span>
                                  <div style={{ padding:'0.1rem 0.5rem',textAlign:'left',height:'0.5rem'}}>
                                      <span style={{ fontSize: '0.3rem' }}>￥{dataItem.rmb}</span><span style={{ lineHeight:'0.3rem',fontSize: '0.23rem', float:'right',color:'red' }}>热度:{dataItem.hot}</span>
                                  </div>
                              </div>
                          </div>
                      )}
                />
            </div>
        )
    }
}
