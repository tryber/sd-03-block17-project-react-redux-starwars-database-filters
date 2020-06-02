import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import planetReducer from '../reducers/index';

const store = createStore(
  combineReducers({ planetReducer }),
  applyMiddleware(thunk),
);

export default store;
