import { combineReducers } from 'react-redux';
import planetsInfoReducer from './planetsInfoReducer';

const rootReducer = combineReducers({ planetsInfoReducer });

export default rootReducer;
