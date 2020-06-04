import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES, REMOVE_FILTER } from '../actions';

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
          name: action.value,
        },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          action.estado,
        ],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter(
            (filter) => filter !== action.estado,
          ),
        ],
      };
    default:
      return state;
  }
};

export default filters;
