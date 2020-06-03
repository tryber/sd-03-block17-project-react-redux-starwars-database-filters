import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducers from '../../reducers';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(rootReducers, devtools(applyMiddleware(thunk)));

export default store;
