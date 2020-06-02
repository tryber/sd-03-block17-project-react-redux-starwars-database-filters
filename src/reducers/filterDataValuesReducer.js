import { FILTER_BY_TEXT, FILTER_BY_NUMERIC_VALUES } from '../actions/actions';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: {
      column: '',
      comparison: '',
      value: '',
    },
  },
};

const filterDataValuesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_TEXT:
      return { ...state, filterByName: { name: action.name } };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: {
          column: action.column,
          comparison: action.comparison,
          value: action.value,
        },
      };
    default:
      return state;
  }
};

export default filterDataValuesReducer;
