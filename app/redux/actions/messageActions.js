/**
 * Created by w4995 on 2017/8/10.
 */
import * as types from '../actionTypes/messageActionTypes'

export let getMsgList = (msgListObj) =>{
    return {
        type:types.MESSAGE_LIST,
        msgListObj
    }
};
export default {
    getMsgList,
}