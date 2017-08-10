import * as types from '../actionTypes/indexActionTypes';
let initData={
    data:{
        sliderImgs:[],
        listImgs:[]
    },
    list:[],
    curP:0
}
let indexData = function (state =initData , actions) {
    if( actions.type === types.SAVE_DATA ){
        return {...state,data:actions.data}
    }
    if(actions.type===types.ADD_LIST_DATA){
        return {...state,list:[...state.list,...actions.nList]}
    }
    if(actions.type===types.CLEAR_LIST_DATA){
        return {...state,list:[]}
    }
    if(actions.type===types.CUR_POSITION) {
        return {...state,curP:actions.curP}
    }
    return state;
};
export default {
    indexData,
};