import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({ apiReducer, filterReducer });

export default rootReducer;
