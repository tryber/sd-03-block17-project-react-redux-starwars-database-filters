const INITIAL_STATE = {
  data: [],
  error: '',
  isFetching: false,
  filters: {
    filterByName: {
      name: '',
    },
  },
  filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    },
  ],
};


const getPlanetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_PLANETS':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_PLANETS_SUCCESS':
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    case 'RECEIVE_PLANETS_FAILURE':
      return {
        error: action.error,
      };
    case 'FILTER_BY_NAME':
      return {
        ...state,
        filters: {
          filterByName: {
            name: action.name,
            isFiltered: true,
          },
        },
      };
    default:
      return state;
  }
};

export default getPlanetsReducer;
