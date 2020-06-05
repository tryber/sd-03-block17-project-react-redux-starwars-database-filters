import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Filter from '../reducers/filter';
import Planet from '../reducers/planet';


const store = createStore(combineReducers({ Filter, Planet }), applyMiddleware(thunk));

export default store;
