/**
 * Created by w4995 on 2017/8/8.
 */
import React from 'react'
import { List } from 'antd-mobile';

import NavbarTop from '../../component/navbar_top/index'
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
            }
        };
    }
    /*componentWillMount(){
        ajax('GET','localhost:8333/userinfo')
    }*/
    render() {
        return (<div>
            <List>
                <NavbarTop children={'个人中心'}/>
            </List>
            <List className="my-list">
                <img src={this.state.data.avatar} alt=""/>
                <Item extra={'内容内容'}>标题文字</Item>
            </List>
            <List renderHeader={() => '带副标题'} className="my-list">
                <Item arrow="horizontal" multipleLine>
                    标题文字 <Brief>副标题</Brief>
                </Item>
                <Item arrow="horizontal" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                    标题文字 <Brief>副标题</Brief>
                </Item>
            </List>
            <List renderHeader={() => '右侧自定义（无内容 / 文字 / 图片）'} className="my-list">
                <Item>标题文字</Item>
                <Item arrow="horizontal" onClick={() => {}}>标题文字</Item>
                <Item extra="内容内容" arrow="horizontal" onClick={() => {}}>标题文字</Item>
                <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                    标题文字 <Brief>副标题</Brief>
                </Item>
            </List>
            <List renderHeader={() => '垂直居中对齐'} className="my-list">
                <Item multipleLine extra="内容内容">
                    标题文字 <Brief>副标题</Brief>
                </Item>
            </List>
            <List renderHeader={() => '左侧带图标'}>
                <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    arrow="horizontal"
                    onClick={() => {}}
                >我的钱包</Item>
                <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">我的花销占比</Item>
            </List>
        </div>);
    }
}