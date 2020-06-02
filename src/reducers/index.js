import { combineReducers } from 'redux';
import planetsInfoReducer from './planetsInfoReducer';
import filterDataValuesReducer from './filterDataValuesReducer';

const rootReducer = combineReducers({ planetsInfoReducer, filterDataValuesReducer });

export default rootReducer;
