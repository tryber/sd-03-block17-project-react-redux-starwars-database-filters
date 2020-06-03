import { combineReducers } from 'redux';

const REQUEST_DATA = 'REQUEST_DATA';
const RECEIVE_DATA = 'RECEIVE_DATA';
const RECEIVE_FAIL = 'RECEIVE_FAIL';
const NAME_FILTER = 'NAME_FILTER';
const SELECT_FILTER = 'SELECT_FILTER';
const SELECT_COMPARISON = 'SELECT_COMPARISON';

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
        ...state,
        filters: { filterByName: { name: action.name } },
      };
    case SELECT_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [
            {
              column: action.option,

            },
          ],
        },
      };
    case SELECT_COMPARISON:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [
            {
              ...state.filters.filterByNumericValues[0],
              comparison: action.comparison,
              value: '',
            },
          ],
        },
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ requestData, reducerFilters });

export default rootReducer;
