import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router,Route,Switch} from "react-router-dom";

// 引入进来的东西后面备注上自己名字缩写
import Index from './container/index/index'; // wyk
import Footer from './component/footer/index'
function Message() {
    return <h1>message</h1>
}
ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path='/index' component={Index}/>
                <Route path='/message' component={Message}/>
            </Switch>
            <Footer/>
        </div>
    </Router>,
    document.querySelector("#app")
);

