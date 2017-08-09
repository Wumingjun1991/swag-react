import React, {Component} from 'react';
import { List, InputItem, Button, NavBar, Toast } from 'antd-mobile';
import userInfo from "../../util/userInfo";


// 登录
export default class Signin extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    constructor () {
        super();
        this.state = {
            username : "",
            password : "",
            affirmPassword : "",
            signin: false,
            signup: true
        }
    }

    showToastNoMask = (text) => {
        Toast.info(text, 2, null, false);
    };

    changeUsername = (value) => {
        console.log(value);
        this.setState({
            username: value
        })
    };

    password = (value) => {
        this.setState({
            password: value
        });
    };

    handleSignin = () => {
        let username = this.state.username;
        let password = this.state.password;
        let users = userInfo.readUser();
        if (username === "") {
            this.showToastNoMask("请输入用户名～");
            return;
        }
        if (password === "") {
            this.showToastNoMask("请输入用户密码～");
            return;
        }
        let flag = false;
        users.forEach( item => {
            if (item.username === username && item.password === password) {
                localStorage.setItem("LOGINSTATE", "true");
                flag = true;
                this.context.router.history.push("/");
                return;
            }
        });
        if (!flag) {
            this.showToastNoMask("sorry, 亲 该用户名不存在哦。");
        }
    };

    handleSignup = () => {
        this.context.router.history.push("/signup");
    };

    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    iconName = "search"
                >登录</NavBar>
                <List style={{marginTop: "40px"}}>
                    <InputItem
                        clear
                        placeholder="请输入用户名"
                        autoFocus
                        value={this.state.username}
                        onChange={(value) => this.changeUsername(value)}
                    >用户名</InputItem>
                    <InputItem
                        type="password"
                        placeholder="****"
                        value={this.state.password}
                        onChange={ (value) => this.password(value)}
                    >密码</InputItem>
                    <div className="csl_btnWrap">
                        <Button type="ghost" size="small" inline onClick={() => this.handleSignin()}>登录</Button>
                        <Button type="ghost" size="small" inline onClick={() => this.handleSignup()}>注册</Button>
                    </div>
                </List>
            </div>
        );
    }
}

import "./index.less";

