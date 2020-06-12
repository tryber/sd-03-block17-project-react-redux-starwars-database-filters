const INITIAL_STATE = {
  data: [],
  isFetching: false,
  filters: {
    filterByName: {
      name: '',
      isFiltered: false,
    },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  },
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
    case 'FILTER_BY_NAME':
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: {
            name: action.name,
            isFiltered: true,
          },
        },
      };
    case 'FILTER_BY_NUMERIC_VALUES':
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [
            ...state.filters.filterByNumericValues,
            {
              column: action.column,
              comparison: action.comparison,
              value: action.value,
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default getPlanetsReducer;
