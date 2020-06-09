import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import requestReducer from '../reducers';

const composeMiddlewares = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(requestReducer, composeMiddlewares(applyMiddleware(thunk)));


export default store;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import requestReducer from '../reducers';


const store = createStore(requestReducer, applyMiddleware(thunk));


export default store; 