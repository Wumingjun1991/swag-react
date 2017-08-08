import React from 'react';
import {Link} from 'react-router-dom';
// link中间组件 解决包裹tabbar问题
export default class extends React.Component{
    componentDidMount(){
        console.log(this.props.children);
    }
    render(){
        let Children = this.props.children;
        return (
            <Link to={this.props.to}>

            </Link>
        )
    }
}