import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import planetsList from '../reducers/index';

const rootReducer = combineReducers({ planetsList });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
