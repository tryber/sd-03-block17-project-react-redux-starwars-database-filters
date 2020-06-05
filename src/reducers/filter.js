import { QUERY_BY_NAME, SAVE_FILTERS } from '../actions/index';

const initialState = {
  filterByNumericValues: [],
  filterByName: { name: '' },
  usedFilters: [],
};

function FilterReducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.payload },
      };
    case SAVE_FILTERS:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
        usedFilters: [
          ...state.usedFilters,
          action.column,
        ],
      };
    default:
      return state;
  }
}

export default FilterReducer;
