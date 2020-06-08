import { FILTER_NAME, FILTER_NUMBER, REM_FILTER } from '../actions';

const initState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function filters(state = initState, action) {
  switch (action.type) {
    case FILTER_NAME:
      return {
        ...state,
        filterByName: { name: action.filterByName },
      };
    case FILTER_NUMBER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.length
        ? [...state.filterByNumericValues.concat(action.params)]
        : [...action.params],
      };
    case REM_FILTER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues
          .filter((filter) => filter !== action.toBeRemoved)],
      };
    default:
      return state;
  }
}

export default (filters);
