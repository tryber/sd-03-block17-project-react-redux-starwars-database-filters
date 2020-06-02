import { combineReducers } from 'redux';
import selectPlanets from './planets';

const rootReducer = combineReducers({
  selectPlanets,
});

export default rootReducer;
