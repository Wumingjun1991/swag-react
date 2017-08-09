import * as types from '../actionTypes/indexActionTypes';
let indexData = function (state = {}, actions) {
    if( actions.type === types.SAVE_DATA ){
        return {
            a:123
        }
    }
    return state;
};
export default {
    indexData,
};