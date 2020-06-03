import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import { filters } from './filtersReduce';

const rootReducer = combineReducers({ apiReducer, filters });

export default rootReducer;
