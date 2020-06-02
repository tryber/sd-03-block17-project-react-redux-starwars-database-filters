import { combineReducers } from 'redux';
import reducerFetchPlanets from './reducerFetchPlanets';
import reducerFilters from './reducerFilters';

const rootReducer = combineReducers({
  reducerFetchPlanets,
  reducerFilters,
});

export default rootReducer;
