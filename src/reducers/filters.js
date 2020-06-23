import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUE, REMOVE_FILTER } from '../actions/filters';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValue: [],
}

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {name: action.value},
      };
    case FILTER_BY_NUMERIC_VALUE:
      return {
        ...state,
        filterByNumericValue: [...state.filterByNumericValue, action.value],
      };
      case REMOVE_FILTER:
        return {
          ...state,
          filterByNumericValues: [
            ...state.filterByNumericValues.filter(
              (filter) => filter !== action.value,
            ),
          ]
        };
    default:
      return state;
  }
}

export default filters;
