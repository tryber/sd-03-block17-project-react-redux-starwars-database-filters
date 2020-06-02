import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import requestReducer from '../reducers';


const store = createStore(requestReducer, applyMiddleware(thunk));


export default store;
