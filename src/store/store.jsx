import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import columnsReducer from '../reducers/columnsReducer';

const rootReducer = combineReducers({ reducer, columnsReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
