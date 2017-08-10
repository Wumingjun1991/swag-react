import * as types from '../actionTypes/buyCarActionTypes';

let initstate={
    buyCarList:[],
    totalPrice: 0
};

let buyCarData = function (state = initstate, actions) {
    switch (actions.type){
        case types.SAVE_COMMODITY:
            return{
                buyCarList: [...actions.buyCarList],
                totalPrice: actions.totalPrice,
            };
        case types.ADD_COMMODITY:
            actions.data.checked = false;
            return{
                buyCarList:[...state.buyCarList,...actions.data],
                totalPrice: state.totalPrice
            };
        default:
            return state;

    }

};





export default {
    buyCarData,
};