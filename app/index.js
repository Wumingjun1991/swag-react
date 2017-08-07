import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router,Route,Switch} from "react-router-dom";

// 引入进来的东西后面备注上自己名字缩写
import Index from './container/index/index'; // wyk

import Message from './container/message/message'; // gp

ReactDOM.render(
    <div>
        <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Index}/>
            </Switch>
        </div>
    </Router>
    <Router>
        <div>
            <Switch>
                <Route exact path="/messages" component={Message}/>
            </Switch>
        </div>
    </Router>
    </div>
    
    ,
    document.querySelector("#app")
);

