
const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

function requestReducer(state = INITIAL_STATE, action) {
  console.log(state);
  switch (action.type) {
    case 'REQUEST_DATA':
      return { ...state, data: action.data };
    case 'RECEIVE_DATA':
      return { ...state, data: action.data };
    case 'FILTER_PLANET_DATA':
      console.log(state.data);
      // const filteredPlanets = filtraByName(action, state);
      if(state.data.results !== undefined ) {
    return Object.assign({...state},[
        ...state.data.results.filter(m => m.name === action.filter)
      ],)
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
