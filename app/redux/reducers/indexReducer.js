import * as types from '../actionTypes/indexActionTypes';
let initData={
    data:{
        sliderImgs:[],
        listImgs:[]
    }
}
let indexData = function (state =initData , actions) {
    if( actions.type === types.SAVE_DATA ){
        return {data:actions.data}
    }
    return state;
};
export default {
    indexData,
};