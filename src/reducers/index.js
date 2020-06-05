import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import filters from './filterReducer';

/* function emptyReducer() {
  return {};
} */
const rootReducer = combineReducers({
  filters,
  requestReducer,
});

export default rootReducer;
