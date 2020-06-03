
const INITIAL_STATE = {
  data: { results: ['Loading ....'] },
  filters: {
    filterByName: {
      name: ' ',
      filteredPlanets: [],
    },
  },
  filterByNumericValues: [
    {
      column: ' ',
      comparison: ' ',
      value: 0,
    }],
};

function requestReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'RECEIVE_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'FILTER_PLANET_DATA': {
      const filterName = action.filters.filterByName.name.toLowerCase();
      const filteredPlanets = state.data.results.filter((element) => {
        const lowerName = element.name.toLowerCase();
        return lowerName.includes(filterName);
      });
      return {
        ...state,
        filters: { filterByName: { name: filterName, filteredPlanets: [filteredPlanets] } },
      }; }
    case 'FILTER_PLANET_NUMERIC':
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default requestReducer;