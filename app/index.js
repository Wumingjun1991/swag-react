import React from "react";
import ReactDOM from "react-dom";

import {HashRouter as Router,Route,Switch,BrowserHistory } from "react-router-dom";

// 引入进来的东西后面备注上自己名字缩写
import GoodsDetail from "./container/GoodsDetail/GoodsDetail";
import Index from './container/index/index'; // wyk
import BuyCar from './container/buyCar/index'; // csl - 购物车
import Signin from "./container/signin/signin";  // csl - 登陆
import Signup from "./container/signin/signup";  // csl - 注册

import Message from './container/message/message'; // gp


import Footer from './component/footer/index'
import Personal from './container/Personal/index'//wmj
import OrderList from './container/orderList'// wyk
import ChatInfo from './component/chat_info/index'// wmj

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
let store = createStore(reducers);

// jump
import jump from './component/jumpcomponent';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/buyCar" component={BuyCar}/>
                    <Route path="/detail/123" component={jump(GoodsDetail)()}/>
                    <Route path='/message' component={Message}/>
                    <Route path='/personal' component={Personal}/>
                    <Route path='/signin' component={Signin}/>
                    <Route path='/signup' component={Signup}/>
                    {/*订单信息*/}
                    <Route path='/orderList' component={jump(OrderList)()}/>
                    {/*聊天信息*/}
                    <Route path='/chatInfo' component={jump(ChatInfo)()}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    </Provider>
    ,
    document.querySelector("#app")
);

