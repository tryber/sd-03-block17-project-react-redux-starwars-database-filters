import { combineReducers } from 'redux';
import ReducerPlanets from './ReducerPlanets';
import Filters from './Filters';

const rootReducer = combineReducers({ ReducerPlanets, Filters });

export default rootReducer;
