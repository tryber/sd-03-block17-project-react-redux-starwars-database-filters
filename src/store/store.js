import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { combineReducers } from 'redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const RootReducer = combineReducers({
  reducer
});

const store = createStore(RootReducer, devTools(applyMiddleware(thunk)));

export default store;
