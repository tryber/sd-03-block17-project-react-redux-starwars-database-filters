import { combineReducers } from 'redux';

import starWars from './starWars';

const rootReducer = combineReducers({
  starWars, // INCLUIR AQUI OUTROS REDUCERS
});

export default rootReducer;
