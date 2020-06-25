import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
  apiReducer,
  filtersReducer,
});

export default rootReducer;
