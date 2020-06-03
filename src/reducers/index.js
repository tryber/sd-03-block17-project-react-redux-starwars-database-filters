import { combineReducers } from 'redux';

import planetsReducer from './planetsReducer';
import filterReducer from './filterReducers';

const rootReducer = combineReducers({
  planetsReducer,
  filterReducer,
});

export default rootReducer;
