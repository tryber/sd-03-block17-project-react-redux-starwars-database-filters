import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES } from '../actions/index';
import { REMOVE_FILTER } from '../actions/index';

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
  let newFilterState = [...state.filterByNumericValues];
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.value,
        },
      };
    case FILTER_BY_NUMERIC_VALUES:
      if (state.filterByNumericValues[0].column === '') {
        return {
          ...state,
          filterByNumericValues: [action.data],
        };
      }
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.data],
      };
    case REMOVE_FILTER:
      newFilterState = state.filterByNumericValues.filter((e, index, array) =>
        e !== array[action.index],
      );
      return {
        ...state,
        filterByNumericValues: [...newFilterState],
      };
    default: return state;
  }
};

export default filters;
