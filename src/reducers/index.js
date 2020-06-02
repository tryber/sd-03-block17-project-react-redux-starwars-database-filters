import { combineReducers } from 'redux';

import ReducerPlanets from './ReducerPlanets';
import ReducerFilter from './ReducerFilter';

const rootReducer = combineReducers({ ReducerPlanets, ReducerFilter });

export default rootReducer;
