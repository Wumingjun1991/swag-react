/**
 * Created by 96004 on 2017/8/8.
 */
import React,{Component} from 'react';
import {ajax} from '../../util/index';
let port = require('../../../mock/port')
export default class GoodsDetail extends Component{
    constructor() {
        super();
        this.state={goods:{}}
    }
    componentWillMount() {
        ajax({
            url:`http://${port}/detail/123`,
            method: 'GET'
        }).then((res)=>{
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                detail
            </div>
        )
    }
}