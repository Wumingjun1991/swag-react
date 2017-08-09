import React, {Component} from 'react';
import { List, InputItem, Button, NavBar, Toast, WhiteSpace, WingBlank, Icon, Modal } from 'antd-mobile';
import userInfo from "../../util/userInfo";


// 注册
export default class Signin extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    constructor () {
        super();
        this.state = {
            username : "",
            password : "",
            affirmPassword : ""
        }
    }

    offline = (text) => {
        Toast.offline(text, 2);
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

    affirmPassword = (value) => {
        this.setState({
            affirmPassword: value
        });
    };

    handleSignup = () => {
        let username = this.state.username;
        let password = this.state.password;
        let affirmPassword = this.state.affirmPassword;
        if (username === "" || password === "" || affirmPassword === "") {
            if (username === "") {
                this.offline("请输入用户名");
                return;
            }
            if (password === "") {
                this.offline("请输入用户名密码");
                return;
            }
            // if (password === "") {
            //     this.offline("请重新输入用户名密码");
            //     return;
            // }
        }
        if (password !== affirmPassword) {
            this.offline("密码不一致， 请重新输入");
            this.setState({
                password : "",
                affirmPassword: ""
            });
            return;
        }
        let users = userInfo.readUser();
        let flag = users.find( item => item.username === username );
        if (flag) {
            this.offline("该用户已存在");
            return;
        }
        userInfo.saveUser({username, password});
        this.context.router.history.push("/signin");
        this.setState({
            password : "",
            affirmPassword: ""
        })
    };

    backSignin = () => {
        this.context.router.history.push("/signin")
    };

    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    // iconName = "nnn"
                    onClick={this.backSignin}
                >注册</NavBar>
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
                    <InputItem
                        type="password"
                        placeholder="****"
                        value={this.state.affirmPassword}
                        onChange={ (value) => this.affirmPassword(value)}
                    >确认密码</InputItem>
                    <div className="csl_btnWrap submitBtn">

                        <Button type="ghost" size="small" inline
                                style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                                onClick={() => this.handleSignup()}
                        >提交</Button>

                        {/*<div className="" onClick={this.backSignin}>回到登录页</div>*/}
                    </div>
                </List>
            </div>
        );
    }
}
import "./index.less";