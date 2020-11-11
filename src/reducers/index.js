import { combineReducers } from 'redux';
import userReducer from './userReducer';
console.disableYellowBox = true;

export default combineReducers({
    userReducer
});