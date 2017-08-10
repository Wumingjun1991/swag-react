import * as types from '../actionTypes/buyCarActionTypes';
const save_commodity = (data) => {
    return { type: types.SAVE_COMMODITY,
        buyCarList:data.buyCarList,
        totalPrice:data.totalPrice }

};

const add_commodity = (data) => {
    return {
        type: types.ADD_COMMODITY,
        data
    }
};

export default {
    save_commodity,add_commodity
}