import { combineReducers } from 'redux';
import indexReducer from './indexReducer';
import buyCarReducer from './buyCarReducer';

export default combineReducers({
    ...indexReducer,...buyCarReducer,
})