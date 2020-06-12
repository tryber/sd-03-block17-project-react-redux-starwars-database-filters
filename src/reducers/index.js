import { sendObject } from '../helpers/functions';

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
      break;
    case 'FILTER_PLANET_NUMERIC' : {
      const object = sendObject(state, action);
      const { column, comparison, value } = action;
      return {
        ...state,
        filters: { filterByNumericValues: [{column, comparison, value }] },
        filteredPlanets: { results: object },
      };
    }
   // falls through
    default:
      return { state };
  }
  return null;
}
export default requestReducer;
