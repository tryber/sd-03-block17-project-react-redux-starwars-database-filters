import { combineReducers } from 'redux';

import requestAPIReducer from './r_requestAPI';
import filters from './r_FiltersInput';

const rootReducers = combineReducers({
  requestAPIReducer,
  filters,
});

export default rootReducers;
