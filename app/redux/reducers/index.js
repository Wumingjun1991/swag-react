import { combineReducers } from 'redux';
import indexReducer from './indexReducer';
import personalReducer from "./userData";

export default combineReducers({
    ...indexReducer,
    ...personalReducer
});