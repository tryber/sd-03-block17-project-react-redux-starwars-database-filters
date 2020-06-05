import { INPUT_NAME, FILTER_BY_NUMBERS, REMOVE_FILTER } from '../Components/Types';

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
    case INPUT_NAME:
      return { ...state, filterByName: { name: action.value } };
    case FILTER_BY_NUMBERS:
      return {
        ...state,
        filterByNumericValues: (state.filterByNumericValues[0].column === '')
          ? [{...action.payload}] : [...state.filterByNumericValues.concat(action.payload)],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues.filter((filter) => filter !== action.value)],
      }
    default:
      return state;
  }
};

export default filters;
