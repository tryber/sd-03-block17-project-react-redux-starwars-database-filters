import { combineReducers } from 'redux';

const REQUEST_DATA = 'REQUEST_DATA';
const RECEIVE_DATA = 'RECEIVE_DATA';
const RECEIVE_FAIL = 'RECEIVE_FAIL';

const stateDefault = {
  isFetching: false,
  data: [],
};

const requestData = (state = stateDefault, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
        
      };
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case RECEIVE_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  };
};

const rootReducer = combineReducers({ requestData });

export default rootReducer;
