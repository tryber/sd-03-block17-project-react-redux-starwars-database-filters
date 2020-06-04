const initialState = {
  data: { results: [] },
  filters: { filterByName: { name: '' }, filterByNumericValues: [] },
  id: 0,
  categories: [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
};

function emptyReducer(state = initialState, action) {
  switch (action.type) {
    case 'API_CALL':
      return { ...state, data: action.r };

    case 'SET_NAME_FILTER':
      return { ...state, filters: { ...state.filters, filterByName: { name: action.filter } } };

    case 'SET_NUMERIC_FILTER': {
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [...state.filters.filterByNumericValues, action.payload],
        },
      };
    }
    case 'DELETE_FILTER': {
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: state.filters.filterByNumericValues
            .filter((e) => (e.column !== action.payload)),
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
