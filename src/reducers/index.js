
const INITIAL_STATE = {
  data: { results: ['Loading ....'] },
  filters: {
    filterByName: {
      name: '',
    },
  },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: 0,
    }],
};

// function retornaSign(comparison) {
//   let comparisonSignal;
//   if (comparison === 'maior que') {
//     comparisonSignal = 0;
//     return comparisonSignal;
//   } if (comparison === 'menor que') {
//     comparisonSignal = 1;
//     return comparisonSignal;
//   } if (comparison === 'igual a') {
//     comparisonSignal = 2;
//     return comparisonSignal;
//   }
//   return null;
// }

// function filtraByName(action, state) {
//   const filterName = action.filters.filterByName.name.toLowerCase();
//   return state.data.results.filter((element) => {
//     const lowerName = element.name.toLowerCase();
//     return lowerName.includes(filterName);
//   });
// }

// function filtraNumericData(comparisonSignal, state, column, value) {
//   if (comparisonSignal === 0) {
//     return state.data.results.filter((element) => element[column] > value);
//   } if (comparisonSignal === 1) {
//     return state.data.results.filter((element) => element[column] < value);
//   } if (comparisonSignal === 2) {
//     return state.data.results.filter((element) => element[column] === value);
//   }
//   return null;
// }

function requestReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return { ...state, data: action.data };
    case 'RECEIVE_DATA':
      return { ...state, data: action.data };
    case 'FILTER_PLANET_DATA': {
      const filterName = action.filters.filterByName.name.toLowerCase();
      // const filteredPlanets = filtraByName(action, state);
      return {
        ...state,
        filters: { filterByName: { name: filterName } },
      };
    }
    case 'FILTER_PLANET_NUMERIC': {
      const { column, comparison, value } = action.filters.filterByNumericValues[0];
      const { name } = action.filters.filterByName;
      // const comparisonSignal = retornaSign(comparison);
      // // let filteredPlanets = [];
      // if (state.filters.filterByName.name === ' ') {
      //   filteredPlanets = filtraNumericData(comparisonSignal, state, column, value);
      // }
      console.log(action);
      return {
        ...state,
        filters: {
          filterByName: { name },
          filterByNumericValues: [{ column, comparison, value }],
        },
      }; }
    default:
      return state;
  }
}

export default requestReducer;
