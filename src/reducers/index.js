
const INITIAL_STATE = {
  isLoading: false,
};

function requestReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return { isLoading: true };
    case 'RECEIVE_DATA':
      return {
        ...state, data: action.data, filters: { filterByName: { name : ''}, filterByNumericValues: [] }, isLoading: false,
      };
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
    default:
      return { state };
  }
}
export default requestReducer;
