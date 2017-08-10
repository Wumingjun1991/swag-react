/**
 * Created by w4995 on 2017/8/9.
 */
import React, {Component} from 'react'
import {ajax} from '../../util/index'
import NavbarTop from '../../component/navbar_top/index'
import {NavBar, Icon,TextareaItem} from 'antd-mobile'
import TalkPopover from '../talk_popover/index'
import ip from '../../util/ipLocation';
import './index.less'
export default class ChatInfo extends Component {
    constructor() {
        super();
        this.state = {
           list:[]
        };
    }
    static contextTypes = {
        router: React.PropTypes.object
    };
    handleKeyDown = (e)=>{
        if (e.keyCode === 13){
            let content = e.target.value;
            this.setState({
                list:[...this.state.list,{
                    avatar:this.state.list[0].avatar,
                    content:content,
                    user:'buy'
                }]
            });
            e.target.value = ''
        }
    };
    componentWillMount() {
        ajax({
            method: 'GET',
            url: `http://${ip}:8333/chatinfo`
        }).then((res) => {
            console.log(res);
            setTimeout(()=>{
                this.setState(res)
            },1500)
        });
    }

    render() {
        return (
            <div className="chat-info">
                <NavbarTop>
                    <NavBar iconName="left"
                            onLeftClick={this.context.router.history.goBack}
                            mode="light">金属检测服务</NavBar>
                </NavbarTop>
               {this.state.list.map((item,index)=>(
                   <TalkPopover key={index} user={{
                       avatar: item.avatar,
                       user: item.user,
                       content:item.content
                   }}/>
               ))
                }
                <div className="user-input" onKeyDown={(e)=>this.handleKeyDown(e)}>
                    <TextareaItem placeholder="输入内容" autoHeight="true"></TextareaItem>
                </div>
            </div>
        )
    }
}