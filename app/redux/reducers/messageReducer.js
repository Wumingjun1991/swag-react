/**
 * Created by w4995 on 2017/8/10.
 */
import * as types from '../actionTypes/messageActionTypes'
let msgData = (state={code:0,data:{}},action) =>{
    switch (action.types){
        case types.MESSAGE_LIST:
            return action.msgListObj;
        default :
            return state;
    }
}

export default {
    msgData,
}