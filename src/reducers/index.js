
import { combineReducers } from 'redux';

import filters from './filters';
import dataReducer from './dataReducer';
import columnsReducer from './columnsReducer';

export default combineReducers({ filters, dataReducer, columnsReducer });
