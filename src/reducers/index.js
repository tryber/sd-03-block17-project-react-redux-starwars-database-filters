import { combineReducers } from 'redux';

const REQUEST_DATA = 'REQUEST_DATA';
const RECEIVE_DATA = 'RECEIVE_DATA';
const RECEIVE_FAIL = 'RECEIVE_FAIL';
const RECEIVE_DATA_FILTER = 'RECEIVE_DATA_FILTER';

const stateDefault = {
  isFetching: false,
  dataFilter: [],
  data: [],
  filters:
  {
    filterByName: {
      name: ''
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      }
    ]
  }
}

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
        dataFilter: action.data,
      };
    case RECEIVE_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case RECEIVE_DATA_FILTER:
      return {
        ...state,
        isFetching: false,
        filter: true,
        filters: { filterByName: { name: action.name } },
        dataFilter: action.data,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ requestData });

export default rootReducer;
