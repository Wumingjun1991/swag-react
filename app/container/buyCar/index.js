/**
 * Created by sura.cheng on 2017/8/8.
 */

import React, {Component} from 'react';
import { NavBar, Icon, Button, Card, WingBlank, List, Checkbox, Flex } from 'antd-mobile';
import { ajax } from "../../util/index";

const AgreeItem = Checkbox.AgreeItem;


export default class App extends Component {

    constructor () {
        super();
        this.state = {
            buyCarList: []
        }
    };

    onChange = () => {
        console.log("😄");
    };
    componentWillMount () {
        ajax({
            url: "http://localhost:8333/buycar",
            method: "post",
            data: {
                loged: true
            }
        }).then( (res) => {

            this.setState({
                buyCarList: res.data.buyList
            });
            console.log(res.data.buyList);

        }).catch( (e) => {
            console.log(e);
        })
    }


    render () {

        return (
            <div className="csl_buyCar">
                {/* nav */}
                <NavBar leftContent="back"
                        mode="light"
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
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
                                                <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}></AgreeItem>
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
                            <span className="tips">不含运费和进口税</span>
                            <Button className="btn am-button-small" type="ghost" activeStyle={false}>立即付款</Button>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        )
    }
}

import "./buyCar.less";







