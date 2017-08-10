import * as types from '../actionTypes/indexActionTypes';
export default {
    saveDate(data) {
        return { type: types.SAVE_DATA, data }
    },
    addListData(nList) {
        return {type: types.ADD_LIST_DATA,nList}
    },
    clearListData() {
        return {type: types.CLEAR_LIST_DATA}
    },
    curPosition(curP) {
        return {type: types.CUR_POSITION,curP}
    }
}