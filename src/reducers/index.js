import { combineReducers } from 'redux';
import planetsInfoReducer from './planetsInfoReducer';

const rootReducer = combineReducers({ planetsInfoReducer });

export default rootReducer;
