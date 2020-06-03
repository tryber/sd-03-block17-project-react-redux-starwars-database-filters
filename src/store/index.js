import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import starWarsReducer from '../reducers';

const store = createStore(starWarsReducer, applyMiddleware(thunk));

export default store;
