import { combineReducers } from 'redux';
import SWreducer from './SWreducer';
import filters from './filterReducer';

const rootReducer = combineReducers({ SWreducer, filters });

export default rootReducer;
