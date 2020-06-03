import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import { reduceByName } from './reduceByName';

const rootReducer = combineReducers({ apiReducer, reduceByName });

export default rootReducer;
