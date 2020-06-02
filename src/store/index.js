import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';

import data from '../reducers/index';

const rootReducer = combineReducers({
  data,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
