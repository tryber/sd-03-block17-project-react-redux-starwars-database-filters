import { combineReducers } from 'redux';
import apiSWReducer from './apiSWReducer';
import filters from './filters';

const rootReducer = combineReducers({ apiSWReducer, filters });

export default rootReducer;
