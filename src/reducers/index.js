import { combineReducers } from 'redux';

import starWars from './starWars';
import filterName from './filterName';

const rootReducer = combineReducers({
  starWars, filterName,
});

export default rootReducer;
