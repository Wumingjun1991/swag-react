/**
 * Created by sura.cheng on 2017/8/8.
 */

import React, {Component} from 'react';
import { NavBar, Button, Card, WingBlank, Checkbox, Flex } from 'antd-mobile';
import { ajax } from "../../util/index";
import ip from '../../../mock/ipLocation';

const AgreeItem = Checkbox.AgreeItem;


export default class BuyCar extends Component {
    constructor () {
        super();
        this.state = {
            buyCarList: []
        }
    };
    componentWillMount () {
        ajax({
            url: `http://${ip}:8333/buycar`,
            method: "post",
            data: {
                loged: true
            }
        }).then( (res) => {
            this.setState({
                buyCarList: res.data.buyList
            });
        }).catch( (e) => {
            console.log(e);
        })
    }


    render () {

        return (
            <div className="csl_buyCar">
                {/* nav */}
                <NavBar
                    mode="light"
                    iconName={require("../../public/icon/buyCar.svg")}
                >购物车</NavBar>

                {/* list */}
                <WingBlank size="lg">
                    {
                        this.state.buyCarList.map( (item, index) => (
                            <Card key={index}>
                                <Card.Header title={item.host}/>
                                <span className="edit">编辑</span>
                                <div className="">
                                    <Card.Body>
                                        <Flex>
                                            <Flex.Item>
                                                <AgreeItem data-seed="logId"></AgreeItem>
                                                <a href="#" className="hd_pic"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502169458847&di=04ceb7df91a29dd5fcdecf1d642be352&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110616%2F7177713_105928197391_2.jpg" width="160" height="150"/></a>
                                                <div className="hd_detailsWrap">
                                                    <h4>{item.name}</h4>
                                                    <p className="rmb_color">¥{item.rmb}</p>
                                                </div>
                                            </Flex.Item>
                                        </Flex>
                                    </Card.Body>
                                </div>
                            </Card>
                        ))
                    }
                    <div style={{height: "184px"}}></div>
                </WingBlank>

                <div className="footer_tipNav">
                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                                <span>全选</span>
                            </AgreeItem>
                            <span className="total">
                                合计：
                                <em>10000</em>
                            </span>
                            {/*<span className="tips">不含运费和进口税</span>*/}
                            <Button className="btn am-button-small" type="ghost">立即付款</Button>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        )
    }
}

import "./buyCar.less";
