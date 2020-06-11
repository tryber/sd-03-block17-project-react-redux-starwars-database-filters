import { combineReducers } from 'redux';
import APIReducer from './APIReducer';
import filters from './Filters';

const rootReducer = combineReducers({
  APIReducer,
  filters,
});

export default rootReducer;
