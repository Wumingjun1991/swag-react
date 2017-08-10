/**
 * Created by w4995 on 2017/8/10.
 */
import * as types from '../actionTypes/messageActionTypes'

let getMsgList = (msgListObj) =>{
    return {
        type:types.MESSAGE_LIST,
        msgListObj:msgListObj,
    }
};
export default {
    getMsgList,
}