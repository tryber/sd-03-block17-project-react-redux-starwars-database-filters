import { combineReducers } from 'redux';
import apiSWReducer from './apiSWReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({ apiSWReducer, filtersReducer });

export default rootReducer;
