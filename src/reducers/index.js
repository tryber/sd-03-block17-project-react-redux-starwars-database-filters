const initialState = {
  data: { results: [] },
  filters: { filterByName: { name: '' }, filterByNumericValues: [{ column: 'population', comparison: 'Maior que' }] },
};

function emptyReducer(state = initialState, action) {
  switch (action.type) {
    case 'API_CALL':
      return { ...state, data: action.r };

    case 'SET_NAME_FILTER':
      return { ...state, filters: { ...state.filters, filterByName: { name: action.filter } } };

    case 'SET_NUMERIC_FILTER': {
      const filter = state.filters.filterByNumericValues[action.payload.id];

      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [
            // ...state.filters.filterByNumericValues,
            { ...filter, [action.payload.type]: action.payload.value },
          ],
        },
      };
    }
    default:
      return state;
  }
}

export default emptyReducer;
