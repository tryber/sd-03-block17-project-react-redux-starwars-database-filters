import {
  FILTER_BY_NAME, SORT_COLUMN, FILTER_BY_NUMERIC, REMOVE_FILTER,
} from '../actions/filtersActions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTER_BY_NUMERIC:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues, {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          }],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues.filter((filter) => filter !== action.obj)],
      };
    case SORT_COLUMN:
      return {
        ...state,
        order: { column: action.column, sort: action.sort },
      };
    default:
      return state;
  }
};

export default filtersReducer;
