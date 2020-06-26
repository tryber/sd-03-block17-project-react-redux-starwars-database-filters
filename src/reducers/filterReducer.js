import {
  ON_CHANGE_NAME_VALUE,
  ON_SELECT_COLUMN,
  REMOVE_NUMERIC_FILTER,
  ORDER_COLUMN,
} from '../actions';

const INITIAL_STATE = {
  filterByName: { name: '', },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_CHANGE_NAME_VALUE:
      return {
        ...state,
        filterByName: { name: action.filterName },
      };
    case ON_SELECT_COLUMN:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, {
          column: action.column,
          comparison: action.comparison,
          value: action.value,
        }],
      };
    case REMOVE_NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter((el) => el !== action.obj),
        ]};
    case ORDER_COLUMN:
      return {
        ...state,
        order: { column: action.column, sort: action.sort },
      };
    default:
      return { ...state, };
  }
};

export default filters;
