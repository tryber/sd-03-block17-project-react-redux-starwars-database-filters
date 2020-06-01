import { combineReducers } from 'redux';
import R_fetchPlanets from '../reducers/R_fetchPlanets';

const rootReducer = combineReducers({
  R_fetchPlanets,
});

export default rootReducer;
