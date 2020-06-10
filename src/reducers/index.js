import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  requestReducer,
  filters: searchReducer,
});

export default rootReducer;
