import * as types from '../actionTypes/indexActionTypes';
const saveDate = (data) => {
    return { type: types.SAVE_DATA, data: data }
};

export default {
    saveDate,
}