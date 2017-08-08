import React from "react";
import {ajax} from '../../util/index';

import { NavBar, Icon } from 'antd-mobile';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';


export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            data: {
                sliderImgs:[]
            }
        }

    }
    componentWillMount(){
      // 首页slider + bar
      ajax({
          url:'http://localhost:8333/index',
          method:'GET',
      }).then((data)=>{
          console.log(data);
          this.setState({
              data:data.data
          })
      }).catch((err)=>{
          console.log(err);
        })
    }

    render(){
        return (
            <div>
              <NavBar mode="dark">
                <input type="text"/>
              </NavBar>
                <Carousel
                    className="my-carousel"
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                    swipeSpeed={35}
                >
                    {this.state.data.sliderImgs.map((item,index) => (
                        <a key={index}>
                            <img style={{width:"100%"}} src={item} alt="icon"/>
                        </a>
                    ))}
                </Carousel>
            </div>
        )
    }
}
