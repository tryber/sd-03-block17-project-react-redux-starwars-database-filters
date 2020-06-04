import { combineReducers } from 'redux';
import apiSWReducer from './apiSWReducer';
import filters from './filters';
import filtersArrReducer from './filtersArrReducer';

const rootReducer = combineReducers({ apiSWReducer, filters, filtersArrReducer });

export default rootReducer;
