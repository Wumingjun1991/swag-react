import React from "react";
import {ajax} from '../../util/index';
import GoodsDetail from "../GoodsDetail/GoodsDetail";

export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            src:''
        }
    }
    componentWillMount(){
        ajax({
            url:'http://localhost:8333/messages',
            method:'post',
            data:{
                id:1,
                loged:true,
            }
        }).then((data)=>{
            this.setState({
                src:data.data.avatar
            })
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return (
            <div>123123123
                <img src={this.state.src} alt=""/>
                <GoodsDetail/>
            </div>
        )
    }
}