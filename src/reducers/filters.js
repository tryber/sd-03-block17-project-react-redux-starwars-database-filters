
import {
  FILTER_BY_TEXT,
  FILTER_BY_NUMERIC_VALUES,
  REMOVE_FILTERS,
  SORT_COLUMN,
} from '../actions';

const INITIAL_STATE = {
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
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const filterByName = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_TEXT:
      return { ...state, filterByName: { name: action.name } };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues:
          (state.filterByNumericValues[0].column === '')
            ? action.params
            : [...state.filterByNumericValues.concat(action.params)],
      };
    case REMOVE_FILTERS:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter(
            (filter) => filter !== action.value,
          ),
        ],
      };
    case SORT_COLUMN:
      return { ...state, order: { column: action.value.column, sort: action.value.order } };
    default:
      return state;
  }
};

export default filterByName;
