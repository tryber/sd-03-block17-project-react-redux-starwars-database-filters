import { combineReducers } from 'redux';
import filters from './filter';
import planetReducer from './planet';

const rootReducer = combineReducers({
  planetReducer,
  filters,
});

export default rootReducer;