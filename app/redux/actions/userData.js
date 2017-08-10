/**
 * Created by sura.cheng on 2017/8/10.
 */

import * as types from "../actionTypes/userDataActionTypes";

const userDataActions = (data) => {
    return { type: types.USER_DATA, data: data }
};

export default {
    userDataActions
}
