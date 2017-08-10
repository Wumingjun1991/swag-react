/**
 * Created by sura.cheng on 2017/8/10.
 */

import * as types from "../actionTypes/userDataActionTypes";

let userDateReducer = (state={}, actions) => {
    if ( actions.type === types.USER_DATA) {
        return actions.data
    }
    return state;
};

export default {
    userDateReducer
}

