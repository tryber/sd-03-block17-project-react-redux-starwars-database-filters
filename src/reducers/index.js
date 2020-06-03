import { combineReducers } from 'redux';
import selectPlanets from './planets';
import filterByName from './filterByName';

const rootReducer = combineReducers({
  selectPlanets,
  filterByName,
});

export default rootReducer;
