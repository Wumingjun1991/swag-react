import React from "react";
import {ajax} from '../../util/index';
<<<<<<< HEAD
import { NavBar, Icon } from 'antd-mobile';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
=======
import GoodsDetail from "../GoodsDetail/GoodsDetail";
>>>>>>> 655065acd9fcc0d95c0e69a9a6639d58be480e67

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
<<<<<<< HEAD
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
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.sliderImgs.map((item,index) => (
                        <a key={index} >
                            <img src={item} alt="icon"/>
                        </a>
                    ))}
                </Carousel>

=======
            <div>123123123
                <img src={this.state.src} alt=""/>
                <GoodsDetail/>
>>>>>>> 655065acd9fcc0d95c0e69a9a6639d58be480e67
            </div>
        )
    }
}
