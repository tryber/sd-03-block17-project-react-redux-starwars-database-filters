import { combineReducers } from 'redux';
import fetchReducer from './FetchReducer';
import filtersReducer from './FiltersReducer';


const rootReducer = combineReducers({
  fetch: fetchReducer,
  filters: filtersReducer,
});

export default rootReducer;
