import { combineReducers } from "redux";
import filterReducer from './filter';
import planetReducer from './planet';

const rootReducer = combineReducers({
  planetReducer,
  filterReducer
});

export default rootReducer;