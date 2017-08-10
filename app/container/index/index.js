import React from "react";
import {ajax} from '../../util/index';

import { NavBar, SearchBar, Carousel, WhiteSpace, Grid, Icon} from 'antd-mobile';
import NavbarTop from "../../component/navbar_top/index";
import ip from '../../util/ipLocation';
import GoodsDetail from '../GoodsDetail/GoodsDetail';
import jumpcomponent from '../../component/jumpcomponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import indexActions from '../../redux/actions/indexActions';
import {Link} from 'react-router-dom';
let jumpWaitFlag = jumpcomponent(GoodsDetail);
class Index extends React.Component{
    constructor(){
        super();
        this.state = {
            // 是否展示搜索框
            search:false,
            scrolling:false,
            hasMore:true,
            getting: false,
            // 弹出
            jumpFlag: false,
        }
    }
    listenLoading=()=>{
        if(this.props.list.length>50){
            setTimeout(()=>{
                this.setState({scrolling:false,hasMore:false})
            },20)
            return;
        }
        this.setState({scrolling:false})
        this.getSeach();
    }
    listenScroll=()=>{
        let scrollHeight=document.body.scrollHeight;
        let scrollTop=document.body.scrollTop;
        if(scrollTop>=scrollHeight-1500&&!this.state.scrolling){
            this.setState({scrolling:true})
            this.listenLoading()
        }
    }
    tStart=(e)=>{
        this.touchY=e.touches[0].clientY;
    }
    tMove=(e)=>{
        let curTouchY=e.touches[0].clientY;
        let scrollTop=document.body.scrollTop;
        if((curTouchY-this.touchY)<0||scrollTop>0){
            return
        }
        if((curTouchY-this.touchY)>300){
            this.setState({getting:true})
        }
        document.body.style.marginTop=(curTouchY-this.touchY)*0.3+'px';
    }
    tEnd=()=>{
        this.setState({getting:false})
        document.body.style.marginTop='0px';
        let scrollTop=document.body.scrollTop;
        this.props.curPosition(scrollTop)
        if(scrollTop>0){
            return
        }
        this.setState({hasMore:true,scrolling:false})
        this.props.clearListData();
        this.getIndex();
        this.getSeach();
    }
    getIndex=()=>{
        ajax({
            url:`http://${ip}:8333/index`,
            method:'GET',
        }).then((data)=>{
            this.props.saveDate(data.data);
        }).catch((err)=>{
            console.log(err);
        });
    };
    getSeach=()=>{
        ajax({
            url:`http://${ip}:8333/search/a`,
            method:'GET',
        }).then((data)=>{
            this.props.addListData(data.data)
        }).catch((err)=>{
            console.log(err);
        })
    }
    componentWillUnmount() {
        let bd=document.body;
        window.removeEventListener('scroll',this.listenScroll);
        bd.removeEventListener('touchstart',this.tStart);
        bd.removeEventListener('touchmove',this.tMove);
        bd.removeEventListener('touchend',this.tEnd);
    }
    componentWillMount(){
        // 首页slider + bar
        let bd=document.body;
        setTimeout(()=>{
            bd.scrollTop=this.props.curP;
        },20)
        this.props.data.listImgs.length===0?this.getIndex():null;
        this.props.list.length===0?this.getSeach():null;
        // 商品列表
        window.addEventListener('scroll',this.listenScroll)
        bd.addEventListener('touchstart',this.tStart);
        bd.addEventListener('touchmove',this.tMove);
        bd.addEventListener('touchend',this.tEnd);
    }
    moveOut = ()=>{
        /*this.setState({
            jumpFlag: true
        })*/
    };
    render(){
        let Jump = jumpWaitFlag(this.state.jumpFlag);
        return (
            <div>
                {/*<Jump/>*/}
                {this.state.getting?<div className="getting">松手刷新</div>:null}
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
                >
                    {this.props.data.sliderImgs.map((item,index) => (
                        <a key= {index}>
                            <img style={{width:"100%",height:"4rem"}} src={item} alt="icon"/>
                        </a>
                    ))}
                </Carousel>
                <WhiteSpace size="lg" />
                {/*bar*/}
                <Grid
                    onClick={this.moveOut}
                    data={this.props.data.listImgs}
                      columnNum={4}
                      renderItem={dataItem => (
                          <div style={{ padding: '0.25rem',border:'1px solid #ccc'  }}>
                              <img src={dataItem.src} style={{ width: '0.8rem', height: '0.8rem' }} alt="icon" />
                              <div style={{ color: '#888', fontSize: '0.28rem', marginTop: '0.14rem' }}>
                                  <span>{dataItem.name}</span>

                              </div>

                          </div>
                      )}
                />
                <WhiteSpace size="lg" />
                <Grid
                    onClick={this.moveOut}
                    data={this.props.list}
                      columnNum={2}
                      hasLine={true}
                      renderItem={dataItem => (
                          <Link to={`/detail/123`}>
                              <div style={{ padding: '0.15rem', border:'2px solid #ccc' }}>
                                  <img src={dataItem.src} style={{ width: '2.5rem', height: '2.5rem' }} alt="icon" />
                                  <div style={{ color: '#000', fontSize: '0.3rem', }}>
                                      <span>{dataItem.name}</span>
                                      <div style={{ padding:'0.1rem 0.5rem',textAlign:'left',height:'0.5rem'}}>
                                          <span style={{ fontSize: '0.3rem' }}>￥{dataItem.rmb}</span><span style={{ lineHeight:'0.3rem',fontSize: '0.23rem', float:'right',color:'red' }}>热度:{dataItem.hot}</span>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                      )}
                />
                {!this.state.hasMore?<div style={{width:'100%',height:'1rem',lineHeight:'1rem',textAlign:'center',paddingBottom:'1rem'}}>没有更多</div>:null}
            </div>
        )
    }
}
let mapStateToProps=state=>({
    data:state.indexData.data,
    list:state.indexData.list,
    curP:state.indexData.curP
});
let mapDispatchToProps=dispatch=>bindActionCreators(indexActions,dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
import './index.less'
