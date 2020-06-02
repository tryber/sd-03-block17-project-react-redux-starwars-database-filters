import { combineReducers } from 'redux';
import planetsInfoReducer from './planetsInfoReducer';
import filters from './filters';

const rootReducer = combineReducers({ planetsInfoReducer, filters });

export default rootReducer;
