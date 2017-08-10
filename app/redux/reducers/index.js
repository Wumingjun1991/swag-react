import { combineReducers } from 'redux';
import indexReducer from './indexReducer';
import messageReducer from './messageReducer'

export default combineReducers({
    ...indexReducer,
    ...messageReducer
})