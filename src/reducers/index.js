import { combineReducers } from 'redux';
import Planet from './planet';
import Filter from './filter';

const rootReducer = combineReducers({ Planet, Filter, });

export default rootReducer;