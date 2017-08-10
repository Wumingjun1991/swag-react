/**
 * Created by w4995 on 2017/8/9.
 */
import React, {Component} from 'react'
import './index.less'
export default class TalkPopover extends Component {
    render() {
        return (
            <div className={this.props.user.user}>
                <img src={this.props.user.avatar}/>
                <div>
                    <p>{this.props.user.content}</p>
                    <em></em>
                </div>
            </div>
        )
    }
}