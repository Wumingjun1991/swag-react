/**
 * Created by w4995 on 2017/8/10.
 */
import * as types from '../actionTypes/messageActionTypes'
import { combineReducers } from 'redux';
let initData = {
    code:1,
    data:{
        messages:[{avatar:'',sender:'',content:'',time:''}],
        notice:{name:'',msg:''}
    },
}
let msgData = (state={...initData},action) =>{
    switch (action.type){
        case types.MESSAGE_LIST:
            return action.msgListObj;
        default :
            return state;
    }
};
export default {
    msgData,
}