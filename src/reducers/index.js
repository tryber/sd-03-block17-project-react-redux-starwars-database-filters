import { combineReducers } from 'redux';

import requestAPIReducer from './r_requestAPI';
import filterInputName from './r_FiltersInput'

const rootReducers = combineReducers({
  requestAPIReducer,
  filterInputName,
});

export default rootReducers;
