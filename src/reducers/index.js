import { combineReducers } from 'redux';
import planetsInfoReducer from './planetsInfoReducer';
import dataFiltersReducer from './dataFiltersReducer';

const rootReducer = combineReducers({
  planetsInfoReducer,
  filters: dataFiltersReducer,
});

export default rootReducer;
