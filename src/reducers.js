import { combineReducers } from 'redux';
import getPlanetsReducer from './redux/getPlanetsReducer';

const reducer = combineReducers({ getPlanetsReducer });

export default reducer;
