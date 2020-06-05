import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';
import filters from './filters';

const rootReducer = combineReducers({
  planetsReducer,
  filters,
});

export default rootReducer;
