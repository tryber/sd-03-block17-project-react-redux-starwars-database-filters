import { combineReducers } from 'redux';
import getPlanetsReducer from './getPlanetsReducer';

const rootReducer = combineReducers({ getPlanetsReducer });

export default rootReducer;
