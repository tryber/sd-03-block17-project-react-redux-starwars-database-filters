import { combineReducers } from 'redux';
import reducerFetchPlanets from './reducerFetchPlanets';
import filters from './filters';

const reducer = combineReducers({
  reducerFetchPlanets,
  filters,
});

export default reducer;
