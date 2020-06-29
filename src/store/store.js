import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducerAPI from '../reducers/index';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  reducerAPI,
});

const store = createStore(rootReducer, devTools(applyMiddleware(thunk)));

export default store;
