const initialState = {
  data: { results: [] },
  filters: { filterByName: { name: '' }, filterByNumericValues: [{ }] },
  id: 0,
};

function emptyReducer(state = initialState, action) {
  switch (action.type) {
    case 'API_CALL':
      return { ...state, data: action.r };

    case 'SET_NAME_FILTER':
      return { ...state, filters: { ...state.filters, filterByName: { name: action.filter } } };

    case 'SET_NUMERIC_FILTER': {
      let filter = state.filters.filterByNumericValues[state.id];
      filter = { ...filter, [action.payload.type]: action.payload.value };
      const newFilterArray = [...state.filters.filterByNumericValues];
      newFilterArray.splice(state.id, 1, filter);
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: newFilterArray,
        },
      };
    }

    case 'CHANGE_ID': {
      return {
        ...state, id: state.id + action.payload,
      };
    }
    default:
      return state;
  }
}

export default emptyReducer;
