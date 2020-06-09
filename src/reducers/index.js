
const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

function requestReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return { ...state, data: action.data };
    case 'RECEIVE_DATA':
      return { ...state, data: action.data };
    case 'ERROR_DATA' :
      return {
        ...state,
        error: action.error,
      };
    case 'FILTER_PLANET_DATA':
      // const filteredPlanets = filtraByName(action, state);
      return {
        ...state,
        filterByName: { name: action.name },
      };
    
   /*  case 'FILTER_PLANET_NUMERIC': {
      const { name } = action.filters.filterByName;
      return {
        ...state,
        filters: {
          filterByName: { name },
          filterByNumericValues: [...state.filters.filterByNumericValues,
            action.filters.filterByNumericValues[0]],
        },
      }; } */
    default:
      return state;
  }
}

export default requestReducer;
