/**
 * Created by sura.cheng on 2017/8/8.
 */

import React, {Component} from 'react';
import { Modal, NavBar, Button, Card, WingBlank, Checkbox, Flex, Icon, Toast } from 'antd-mobile';
const alert = Modal.alert;
import { ajax } from "../../util/index";
import ip from '../../util/ipLocation';

import buyCarActions from '../../redux/actions/buyCarActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const AgreeItem = Checkbox.AgreeItem;


class BuyCar extends Component {
    constructor () {
        super();
        this.state = {
            buyCarList: [],
            totalPrice: 0
        }
    };
    componentDidMount () {
        if(!this.props.data.buyCarList.length
                && !this.props.data.load
        ){
            ajax({
                url: `http://${ip}:8333/buycar`,
                method: "post",
                data: {
                    loged: true
                }
            }).then( (res) => {

                let buyCarList=res.data.buyList.map(item => {
                    item.checked = false;
                    return item;
                });

                this.props.save_commodity({
                    buyCarList:buyCarList,
                    totalPrice:0
                })

            }).catch( (e) => {
                console.log(e);
            })
        }
    }

    // ---wyk--- checked改变
    changeChecked(item,index){
        let flag = item.checked;
        this.props.save_commodity({
            buyCarList:this.props.data.buyCarList.map((prev,inx) => {
                if(inx === index){
                    prev.checked = !prev.checked;
                }
                return prev;
            }),
            totalPrice: flag ? this.props.data.totalPrice - item.rmb
                : this.props.data.totalPrice + item.rmb,
        });
    }

    selectAll = (e) => {
        let toFlag = e.target.checked;
        let total = 0;
        let newList = this.props.data.buyCarList.map((item) => {
            total += item.rmb;
            item.checked = toFlag;
            return item;
        });
        this.props.save_commodity({
            buyCarList: newList,
            totalPrice: toFlag ? total : 0,
        })
    };

    deleteItem(index){
        let change = this.props.data.buyCarList[index].checked ? this.props.data.buyCarList[index].rmb : 0;
        this.props.save_commodity({
            buyCarList:this.props.data.buyCarList.filter((item,inx)=>(
                inx !== index
            )),
            totalPrice:this.props.data.totalPrice - change,
        })
    };

    add



    render () {
        let {buyCarList,totalPrice}=this.props.data;
        return (
            <div className="csl_buyCar">
                {/* nav */}
                <NavBar
                    mode="light"
                    // iconName={require("../../public/icon/buyCar.svg")}
                    iconName = {null}
                >购物车</NavBar>

                {/* list */}
                <WingBlank size="lg">
                    {
                        buyCarList.map( (item, index) => (
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
                                                <a href="#" className="hd_pic"><img src={item.avatar} width="160" height="150"/></a>
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
                                checked={this.props.data.buyCarList.every(item=>item.checked)}
                                data-seed="logId"
                                onClick={this.selectAll}>
                                <span>全选</span>
                            </AgreeItem>
                            <span className="total">
                                合计：
                                <em>￥{this.props.data.totalPrice}</em>
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

let mapStateToProps = state =>({
    data:state.buyCarData,
});

let mapDisPatchToProps = dispatch =>bindActionCreators(
    buyCarActions,dispatch
);

export default connect(
    mapStateToProps,mapDisPatchToProps,
)(BuyCar)

