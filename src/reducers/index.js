import { combineReducers } from 'redux';
import getPlanets from './planets';
import filters from './filters';

const rootReducer = combineReducers({ getPlanets, filters });

export default rootReducer;