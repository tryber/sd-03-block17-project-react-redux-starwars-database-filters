import { combineReducers } from 'redux';
import planetsData from './data';
import filters from './filters';

const rootReducer = combineReducers({ planetsData, filters });

export default rootReducer;
