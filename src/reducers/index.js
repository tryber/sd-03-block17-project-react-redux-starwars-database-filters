import { combineReducers } from 'redux';
import APIReducer from './APIReducer';
import filters from './Filters';

const rootReducers = combineReducers({
  APIReducer,
  filters,
});

export default rootReducers;
