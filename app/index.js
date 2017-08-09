import React from "react";
import ReactDOM from "react-dom";

import {HashRouter as Router,Route,Switch} from "react-router-dom";

// 引入进来的东西后面备注上自己名字缩写
import GoodsDetail from "./container/GoodsDetail/GoodsDetail";
import Index from './container/index/index'; // wyk
import BuyCar from './container/buyCar/index'; // csl - 购物车

import JpComponent from './component/jumpcomponent/index';//gp 跳转组件
import Message from './container/message/message'; // gp



import Footer from './component/footer/index'
import Personal from './container/Personal/index'//wmj

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/buyCar" component={BuyCar}/>
                <Route path="/detail/123" component={GoodsDetail}/>
                <Route path='/message' component={Message}/>
                <Route path='/personal' component={Personal}/>
            </Switch>
            <Footer/>
        </div>
        <JpComponent></JpComponent>
    </Router>
    ,
    document.querySelector("#app")
);

