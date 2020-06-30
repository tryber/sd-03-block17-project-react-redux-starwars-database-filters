import {
  FILTER_BY_NAME,
  FILTER_BY_NUM_VALUE,
  DELETE_FILTER,
} from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };
    case FILTER_BY_NUM_VALUE:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, ...action.params],
      };
    case DELETE_FILTER:
      return {
        ...state,
        filterByNumericValues: [...action.filters],
      }
    default:
      return state;
  }
};

export default filters;
