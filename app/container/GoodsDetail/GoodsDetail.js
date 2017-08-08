/**
 * Created by 96004 on 2017/8/8.
 */
<<<<<<< HEAD
import React,{Component} from 'react';
import {ajax} from '../../util/index';
let port = require('../../../mock/port')
export default class GoodsDetail extends Component{
    constructor() {
        super();
        this.state={goods:{}}
    }
    componentWillMount() {
        ajax({
            url:`http://${port}/detail/123`,
            method: 'GET'
        }).then((res)=>{
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                detail
=======
import React, {Component} from 'react';
import {ajax} from '../../util/index';
let port = require('../../../mock/port');
import {Carousel,WhiteSpace} from 'antd-mobile';
export default class GoodsDetail extends Component {
    constructor() {
        super();
        this.state = {goods: {}}
    }

    componentWillMount() {
        ajax({
            url: `http://localhost:${port}/detail/123`,
            method: 'GET'
        }).then((res) => {
            console.log(res.data);
            this.setState({goods:res.data})
        })
    }

    render() {
        let {images} = this.state.goods
        return (
            <div>
                <Carousel
                    className="my-carousel"
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                    swipeSpeed={35}
                >
                    {images.map(ii => (
                        <a href="#" key={ii} style={{height:200}}>
                            <img
                                src={ii}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({
                                        initialHeight: null,
                                    });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <WhiteSpace/>
>>>>>>> 262c94e267f7b353dac951bafd46586b53803e60
            </div>
        )
    }
}