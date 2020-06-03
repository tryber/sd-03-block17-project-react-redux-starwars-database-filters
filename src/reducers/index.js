import { combineReducers } from 'redux';
import requestAPI from './r_FetchRequestAPI';
import filters from './r_InputName';

const rootReducers = combineReducers({
  requestAPI,
  filters,
});

export default rootReducers;
