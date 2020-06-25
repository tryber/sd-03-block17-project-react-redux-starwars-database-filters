import { combineReducers } from 'redux';
import SWreducer from './SWreducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({ SWreducer, filterReducer });

export default rootReducer;
