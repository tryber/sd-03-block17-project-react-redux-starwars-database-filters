import { combineReducers } from 'redux';

const REQUEST_DATA = 'REQUEST_DATA';
const RECEIVE_DATA = 'RECEIVE_DATA';
const RECEIVE_FAIL = 'RECEIVE_FAIL';
const NAME_FILTER = 'NAME_FILTER';
const FILTER_SELECTORS = 'FILTER_SELECTORS';
const REMOVE_FILTER = 'REMOVE_FILTER';

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
        error: action.error,
      };
    default:
      return state;
  }
};

const stateFiltersDefault = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const filters = (state = stateFiltersDefault, action) => {
  switch (action.type) {
    case NAME_FILTER:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTER_SELECTORS:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.filterSelect,
            comparison: action.comparison,
            value: action.valueFilter,
          },
        ],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: action.arrayOfObject,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ requestData, filters });

export default rootReducer;
