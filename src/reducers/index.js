
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
      };
    }
    case 'FILTER_PLANET_NUMERIC': {
      const { column, comparison, value } = action.filters.filterByNumericValues[0];
      let comparisonSignal = null;
      console.log(comparison, 'signal');
      if (comparison === 'maior que') {
        console.log(comparisonSignal, 'signal');
        comparisonSignal = 0;
      } if (comparison === 'menor que') {
        comparisonSignal = 1;
      } if (comparison === 'igual a') {
        comparisonSignal = 2;
      }
      console.log(comparisonSignal, 'signal');
      let filteredPlanets = [];
      if (state.filters.filterByName.name === ' ') {
        if (comparisonSignal === 0) {
          filteredPlanets = state.data.results.filter((element) => element[column] > value);
          console.log(filteredPlanets);
        } if (comparisonSignal === 1) {
          filteredPlanets = state.data.results.filter((element) => element[column] < value);
        } if (comparisonSignal === 2) {
          filteredPlanets = state.data.results.filter((element) => element[column] === value);
        }
      }
      return {
        ...state,
        filters: {
          filterByName: { filteredPlanets: [filteredPlanets] },
          filterByNumericValues: {
            column,
            comparison,
            value,
} }
      };
    }
    default:
      return state;
  }
}

export default requestReducer;