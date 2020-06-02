import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import textFilterReducer from './textFilterReducer';

/* function emptyReducer() {
  return {};
} */
const rootReducer = combineReducers({
  textFilterReducer,
  requestReducer,
});

export default rootReducer;
