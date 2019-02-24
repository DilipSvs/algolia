import { combineReducers } from 'redux';
import { countB } from './countReducer.js';
import myUserList from './userReducer.js';

const rootReducer = combineReducers({
	countB,
	myUserList
});
export default rootReducer;
