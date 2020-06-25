import { combineReducers } from 'redux';

import starWars from './starWars';
import filters from './filters';

const rootReducer = combineReducers({
  starWars, filters,
});

export default rootReducer;
