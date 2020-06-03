import { FILTER_BY_NAME, FILTER_BY_NUMBERS } from '../action/index';

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
    case FILTER_BY_NUMBERS:
      return {
        ...state,
        filterByNumericValues: (!state.filterByNumericValues.payload)
          ? action.payload : [...state.filterByNumericValues.concat(action.payload)],
      };
    default:
      return state;
  }
};

export default filters;

// [
//   {
//     column: action.column,
//     comparison: action.comparison,
//     value: action.value,
//   },
// ],