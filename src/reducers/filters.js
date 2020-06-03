import { FILTER_BY_NAME } from '../actions/filterByNameAction';
import { FILTER_BY_NUMERIC_VALUES } from '../actions/filterByNumericValuesAction';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
  ],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.typedText,
        },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { ...action.filteredObj },
        ],
      };
    default:
      return state;
  }
};

export default filters;
