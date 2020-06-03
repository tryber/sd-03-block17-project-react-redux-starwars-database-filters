import { combineReducers } from 'redux';
import selectPlanets from './planets';
import filters from './filters';

const rootReducer = combineReducers({
  selectPlanets,
  filters,
});

export default rootReducer;
