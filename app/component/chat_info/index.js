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
            disabled: false,
            code: 0,
            data: {
                avatar: '',
                name: '',
                username: '',
                sellername: '',
                selleravatar: '',

            }
        };
    }
    static contextTypes = {
        router: React.PropTypes.object
    }
    componentWillMount() {
        ajax({
            method: 'GET',
            url: `http://${ip}:8333/userinfo`
        }).then((res) => {
            console.log(res);
            this.setState(res)
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <NavbarTop>
                    <NavBar leftContent="back"
                            iconName="left"
                            onLeftClick={this.context.router.history.goBack}
                            rightContent="设置"
                            mode="light">{this.state.sellername}</NavBar>
                </NavbarTop>
                <TalkPopover user={{
                    avatar: this.state.data.avatar,
                    user: 'buy'
                }}/>
                <TalkPopover user={{
                    avatar: this.state.data.avatar,
                    user: 'seller'
                }}/>
                <TalkPopover user={{
                    avatar: this.state.data.avatar,
                    user: 'buy'
                }}/>
                <TalkPopover user={{
                    avatar:this.state.data.avatar,
                    user:'buy'
                }}/>
                <div className="user-input">
                    <TextareaItem placeholder="输入内容" autoHeight="true"></TextareaItem>
                </div>
            </div>
        )
    }
}