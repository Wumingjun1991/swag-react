/**
 * Created by w4995 on 2017/8/9.
 */
import React, {Component} from 'react'
import './index.less'
export default class TalkPopover extends Component {
    constructor() {
        super();
        this.state = {
            user: 'buy',
            avatar: '',
            name: '',
            username: '',
            content: '',
            time: '',
        }
    }

    render() {
        return (
            <div className={this.props.user.user}>
                <img src={this.props.user.avatar}/>
                <div>
                    <p>我是骚猪pdd,赶紧给我打折</p>
                    <em></em>
                </div>
            </div>
        )
    }
}