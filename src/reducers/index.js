import { retornaSign , filtraDataNumeric } from '../helpers/functions'
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
       // const filteredPlanets = filtraByName(action, state);
      if (state.data.results !== undefined) {
        const name = action.filters.filterByName.name.toLowerCase();
        // the value passed from our presentational component
        // let value = action;
        const filteredValues = state.data.results.filter(
          (element) => element.name.toLowerCase().includes(name),
        );
        return {
          ...state,
          filters: { filterByName: { name } },
          filteredPlanets: { results: filteredValues },
        };
      }
    case 'FILTER_PLANET_NUMERIC' : 
    // falls through
    const sign = retornaSign(action.comparison);
    let filteredValues = null;
    console.log(state.filteredPlanets)
    if(state.filteredPlanets === undefined ) {
      console.log("entrou no if")
      filteredValues = filtraDataNumeric(sign,state.data.results,action.column,action.value);
      return {
        ...state,
        filteredPlanets: { results: filteredValues },
      };
    } else {
       filteredValues = filtraDataNumeric(sign,state.filteredPlanets.results,action.column,action.value);
      return {
        ...state,
        filteredPlanets: { results: filteredValues },
      };
    }
    
     default:
      return { state };
  }
}
export default requestReducer;
