
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
        const {name } = action.filters.filterByName
        state.data.results.filter(m => {
          console.log(m.name.includes(name))})
    return Object.assign({},[
        ...state.data.results.filter(m => m.name.includes(name))
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
