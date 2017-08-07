import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router,Route,Switch} from "react-router-dom";

// 引入进来的东西后面备注上自己名字缩写
import Index from './container/index/index'; // wyk

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Index}/>
            </Switch>
        </div>
    </Router>,
    document.querySelector("#app")
);
