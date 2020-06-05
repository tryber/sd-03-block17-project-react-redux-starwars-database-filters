import { combineReducers } from 'redux';
import infoPlanetReducer from './infoPlanetReducer';
import dataValuesFilterReducer from './dataValuesFilterReducer';

const rootReducer = combineReducers({ infoPlanetReducer, dataValuesFilterReducer });

export default rootReducer;
