
const INITIAL_STATE = {
  data: { results: ['Loading ....'] },
  filters: {
    filterByName: {
      name: '',
    },

    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: 0,
      }],
  },
};

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
        filters: { filterByName: { name: filterName } ,
        filterByNumericValues: [...state.filters.filterByNumericValues] },
      };
    }
    case 'FILTER_PLANET_NUMERIC': {
      const { name } = action.filters.filterByName;
      return {
        ...state,
        filters: {
          filterByName: { name },
          filterByNumericValues: [...state.filters.filterByNumericValues,
            action.filters.filterByNumericValues[0]],
        },
      }; }
    default:
      return state;
  }
}

export default requestReducer;
