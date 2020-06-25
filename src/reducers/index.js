import { combineReducers } from 'redux';

import ReducerPlanets from './ReducerPlanets';
import filters from './filters';

const rootReducer = combineReducers({ ReducerPlanets, filters });

export default rootReducer;
