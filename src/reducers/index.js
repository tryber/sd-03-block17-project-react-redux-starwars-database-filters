import { combineReducers } from 'redux';
import Planet from './planet';
import filters from './filter';

const rootReducer = combineReducers({ Planet, filters });

export default rootReducer;