import { QUERY_BY_NAME, SAVE_FILTERS } from '../actions/index';

const initialState = {
  filters: {
    filterByNumericValue: [],
    filterByName: { name: '' },
  }
};

function FilterReducer(state = initialState, action) {
  switch(action.type) {
    case QUERY_BY_NAME:
        return {
          ...state,
          filters: {
            ...state.filters,
            filterByName: { name: action.payload }
          },
        }
    case SAVE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValue: [
            ...state.filters.filterByNumericValue,
            {
              column: action.column,
              comparison: action.comparison,
              value: Number(action.value),
            }
          ]
        }
      }
    default:
      return state;
  }
}

export default FilterReducer;