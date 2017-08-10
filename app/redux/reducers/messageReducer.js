/**
 * Created by w4995 on 2017/8/10.
 */
import * as types from '../actionTypes/messageActionTypes'
let msgData = (state={},action) =>{
    switch (action.types){
        case types.MESSAGE_LIST:
            return action.msgData;
        default :
            state
    }
}

export default {
    msgData,
}