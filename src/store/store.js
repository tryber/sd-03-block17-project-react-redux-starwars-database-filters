import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import requestAPI from '../reducers/index';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const RootReducer = combineReducers({
  requestAPI,
});

const store = createStore(RootReducer, devTools(applyMiddleware(thunk)));

export default store;
