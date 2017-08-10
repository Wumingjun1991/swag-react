import { combineReducers } from 'redux';
import indexReducer from './indexReducer';

import buyCarReducer from './buyCarReducer';

import personalReducer from "./userData";
import messageReducer from './messageReducer'

export default combineReducers({
    ...indexReducer,
    ...personalReducer,
    ...messageReducer,
    ...buyCarReducer,
});

