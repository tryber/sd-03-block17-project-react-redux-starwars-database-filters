
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
    case 'FILTER_PLANET_DATA':
      console.log(state.data);
      // const filteredPlanets = filtraByName(action, state);
      if(state.data.results !== undefined ) {
       const name = action.filters.filterByName.name.toLowerCase();
       //the value passed from our presentational component
   let value = action;
   let filteredValues = state.data.results.filter(element => {
       //return any product whose name or designer contains the input box string
       return element.name.toLowerCase().includes(name);
   });
   return {
       ...state,
       filteredPlanets: {results: filteredValues},
   };
  }
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
