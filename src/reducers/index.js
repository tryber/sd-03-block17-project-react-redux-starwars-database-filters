import { combineReducers } from 'redux';

const REQUEST_DATA = 'REQUEST_DATA';
const RECEIVE_DATA = 'RECEIVE_DATA';
const RECEIVE_FAIL = 'RECEIVE_FAIL';
const NAME_FILTER = 'NAME_FILTER';
const FILTER_SELECTORS = 'FILTER_SELECTORS';

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
  filters:
  {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  },
};

const reducerFilters = (state = stateFiltersDefault, action) => {
  switch (action.type) {
    case NAME_FILTER:
      return {
        filters: {
          ...state.filters,
          filterByName: { name: action.name }
        },
      };
    case FILTER_SELECTORS:
      return {
        filters: {
          ...state.filters,
          filterByNumericValues: [
            {
              column: action.filterSelect,
              comparison: action.comparison,
              value: action.valueFilter,
            },
          ],
        },
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ requestData, reducerFilters });

export default rootReducer;
