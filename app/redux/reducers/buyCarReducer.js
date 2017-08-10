import * as types from '../actionTypes/buyCarActionTypes';

let initstate={
    buyCarList:[],
    totalPrice: 0,
    load:false,
};

let buyCarData = function (state = initstate, actions) {
    switch (actions.type){
        case types.SAVE_COMMODITY:
            return{
                buyCarList: [...actions.buyCarList],
                totalPrice: actions.totalPrice,
                load:true,
            };
        case types.ADD_COMMODITY:
            actions.data.checked = false;
            return{

                buyCarList:[...state.buyCarList,actions.data],
                totalPrice: state.totalPrice,

                buyCarList:[...state.buyCarList.map(item=>item),actions.data],
                totalPrice: state.totalPrice,
                load:true,

            };
        default:
            return state;

    }

};





export default {
    buyCarData,
};