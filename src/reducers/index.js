const initialState = {
  data: { results: [] },
  filters: { filterByName: { name: '' }, filterByNumericValues: [{ }] },
  id: 0,
  categories: [
    { filter: 'population', name: 'Population' },
    { filter: 'orbital_period', name: 'Período orbital' },
    { filter: 'diameter', name: 'Diâmetro' },
    { filter: 'rotation_period', name: 'Periodo Rotacional' },
    { filter: 'surface_water', name: 'Agua na superfície' },
  ],
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
    case 'CHANGE_CATEGORY':
      if (action.payload.type === 'remove') {
        return {
          ...state, categories: state.categories.filter((e) => e.filter !== action.payload.pay),
        };
      }

      return {
        ...state, categories: [...state.categories, action.payload.pay],
      };


    default:
      return state;
  }
}

export default emptyReducer;
