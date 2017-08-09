import React from "react";
import {WhiteSpace} from 'antd-mobile';

// 过滤组件   头部固定定位
export default class NavbarTop extends React.Component{
    render(){
        return (
            <div>
                <div style={{position:'fixed',top:'0',zIndex:'10',width:'100%'}}>
                    {this.props.children}


                </div>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
            </div>
        )
    }

}