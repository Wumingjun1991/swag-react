/**
 * Created by sura.cheng on 2017/8/8.
 */

import React, {Component} from 'react';
import { Modal, NavBar, Button, Card, WingBlank, Checkbox, Flex, Icon, Toast } from 'antd-mobile';
const alert = Modal.alert;
import { ajax } from "../../util/index";
import ip from '../../util/ipLocation';

const AgreeItem = Checkbox.AgreeItem;


export default class BuyCar extends Component {
    constructor () {
        super();
        this.state = {
            buyCarList: [],
            totalPrice: 0
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
                // buyCarList: res.data.buyList
                // ----- wyk 添加选择属性 -----
                buyCarList: res.data.buyList.map(item => {
                    item.checked = false;
                    return item;
                })
            });
        }).catch( (e) => {
            console.log(e);
        })
    }

    // ---wyk--- checked改变
    changeChecked(item,index){
        let flag = item.checked;
        this.setState({
            buyCarList:this.state.buyCarList.map((prev,inx) => {
                if(inx === index){
                    prev.checked = !prev.checked;
                }
                return prev;
            }),
            totalPrice: flag ? this.state.totalPrice - item.rmb
                : this.state.totalPrice + item.rmb,
        })
    }

    selectAll = (e) => {
        let toFlag = e.target.checked;
        let total = 0;
        let newList = this.state.buyCarList.map((item) => {
            total += item.rmb;
            item.checked = toFlag;
            return item;
        });
        this.setState({
            buyCarList: newList,
            totalPrice: toFlag ? total : 0,
        })
    };

    deleteItem(index){
        let change = this.state.buyCarList[index].checked ? this.state.buyCarList[index].rmb : 0;
        this.setState({
            buyCarList:this.state.buyCarList.filter((item,inx)=>(
                inx !== index
            )),
            totalPrice:this.state.totalPrice - change,
        })
    }


    render () {

        return (
            <div className="csl_buyCar">
                {/* nav */}
                <NavBar
                    mode="light"
                    // iconName={require("../../public/icon/buyCar.svg")}
                    iconName = "search"
                >购物车</NavBar>

                {/* list */}
                <WingBlank size="lg">
                    {
                        this.state.buyCarList.map( (item, index) => (
                            <Card key={index}>
                                <Card.Header title={item.host}/>
                                <span
                                    onClick={() => alert('删除', '确定删除么???', [
                                        { text: '取消'},
                                        {
                                            text: '确定',
                                            onPress: this.deleteItem.bind(this,index)
                                        }
                                    ])}
                                    className="edit">
                                    <Icon type={require('../../public/icon/delete.svg')}/>
                                </span>
                                <div className="">
                                    <Card.Body>
                                        <Flex>
                                            <Flex.Item>
                                                <AgreeItem
                                                    onChange={this.changeChecked.bind(this,item,index)}
                                                    checked={item.checked}
                                                    data-seed="logId"></AgreeItem>
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
                            <AgreeItem
                                checked={this.state.buyCarList.every(item=>item.checked)}
                                data-seed="logId"
                                onClick={this.selectAll}>
                                <span>全选</span>
                            </AgreeItem>
                            <span className="total">
                                合计：
                                <em>{this.state.totalPrice}</em>
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
