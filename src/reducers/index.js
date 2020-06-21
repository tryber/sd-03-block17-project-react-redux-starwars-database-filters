
const INITIAL_STATE = {
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
  },
  data: { results: [] },
  isLoading: false,
};

function removeFilter(state, action) {
  return {
    ...state,
    filters: {
      filterByName: state.filters.filterByName,
      filterByNumericValues:
            [...state.filters.filterByNumericValues.filter(
              (element) => element.column !== action.filterColumn,
            )],
    },
  };
}


function requestReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return { ...state, isLoading: true };
    case 'RECEIVE_DATA':
      return { ...state, data: action.data, isLoading: false };
    case 'FILTER_PLANET_DATA':
      return {
        ...state,
        filters: {
          filterByName: { name: action.filter },
          filterByNumericValues: [...state.filters.filterByNumericValues],
        },
      };
    case 'FILTER_PLANET_NUMERIC': {
      const { column, comparison, value } = action;
      return {
        ...state,
        filters: {
          filterByName: state.filters.filterByName,
          filterByNumericValues:
          [...state.filters.filterByNumericValues,
            { column, comparison, value }],
        },
      };
    }
    case 'REMOVE_NUMERIC_FILTER':
      return removeFilter(state, action);
    default:
      return state;
  }
}
export default requestReducer;
