/**
 * Created by w4995 on 2017/8/8.
 */
import React from 'react'
import { List,Card,Icon,Button,NavBar } from 'antd-mobile';
import './index.less'
import NavbarTop from '../../component/navbar_top/index'
import ip from '../../util/ipLocation';
import {ajax} from '../../util/index'


const Item = List.Item;
const Brief = Item.Brief;

export default class Personal extends React.Component {
    constructor(){
        super();
        this.state = {
            disabled: false,
            code:0,
            data:{
                avatar:'',
                name:'',
                username:'',
            },
            flag:false,
        };
    }
    componentWillMount(){
        ajax({
            method:'GET',
            url:`http://${ip}:8333/userinfo`
        }).then((res)=>{
            console.log(res);
            this.setState(res)
        });

    }
    render() {
        return (<div>


            <NavbarTop>
                <NavBar leftContent={null}
                        iconName={null}
                        mode="light">个人中心</NavBar>
            </NavbarTop>

            <List className="user">
                <Card full>
                    <Card.Header
                        title={
                            <div style={{width:'1.5rem',}}>
                                <p style={{marginLeft:'0.5rem',width:'1.5rem',fontSize:'0.4rem'}}>{this.state.data.name}</p>
                                {/*<p style={{marginLeft:'0.1rem',width:'1.5rem',fontSize:'0.23rem',color:'#ccc'}}>会员帐号:{this.state.data.username}</p>*/}
                            </div>
                        }
                        thumb={this.state.data.avatar}
                        thumbStyle={{width:'1.3rem',height:'1.3rem',borderRadius:'50%'}}
                        extra={<Icon type={require('../../public/icon/arrow-right.svg')}/>}
                    />
                </Card>
            </List>
            <List className="user-info">
                <Item thumb={<Icon type={require('../../public/icon/user-info.svg')}/>} multipleLine extra={<Icon type={require('../../public/icon/arrow-right.svg')}/>}>
                    个人信息
                </Item>
            </List>
            <List className="user-order">
                <Item thumb={<Icon type={require('../../public/icon/user-order.svg')}/>} multipleLine extra={<Icon type={require('../../public/icon/arrow-right.svg')}/>}>
                    订单信息
                </Item>

            </List>
            <List className="user-purse">
                <Item thumb={<Icon type={require('../../public/icon/user-purse.svg')}/>} multipleLine extra={<Icon type={require('../../public/icon/arrow-right.svg')}/>}>
                    我的钱包
                </Item>
            </List>
            <List className="user-help">
                <Item thumb={<Icon type={require('../../public/icon/user-help.svg')}/>} multipleLine extra={<Icon type={require('../../public/icon/arrow-right.svg')}/>}>
                    帮助中心
                </Item>
            </List>
            <List>
                <Button className="btn" type="primary">退出登录</Button>
            </List>
        </div>
        );
    }
}