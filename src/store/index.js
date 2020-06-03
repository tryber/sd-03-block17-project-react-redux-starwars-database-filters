import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import planetReducer from "../reducers";

const store = createStore(
  planetReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
