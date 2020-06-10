
const INITIAL_STATE = {
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
  },
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
      if (state.data.results !== undefined) {
        console.log(action);
        const name = action.filters.filterByName.name.toLowerCase();
        // the value passed from our presentational component
        // let value = action;
        const filteredValues = state.data.results.filter(
          (element) => element.name.toLowerCase().includes(name),
        );
        return {
          ...state,
          filter: { ...state.filter, filterByName: { name } },
          filteredPlanets: { results: filteredValues },
        };
      }
    // falls through
    default:
      return { state };
  }
}
export default requestReducer;
