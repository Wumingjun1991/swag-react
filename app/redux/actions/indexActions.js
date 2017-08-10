import * as types from '../actionTypes/indexActionTypes';
export default {
    saveDate(data) {
        return { type: types.SAVE_DATA, data }
    }
}