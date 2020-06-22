const INITIAL_STATE = {
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'Name', sort: 'ASC' },
  },
  data: { results: [] },
  isLoading: false,
};

function removeFilter(state, action) {
  return {
    ...state,
    filters: {
      filterByName: state.filters.filterByName,
      filterByNumericValues:
      [...state.filters.filterByNumericValues.filter(
        (element) => element.column !== action.filterColumn,
      )],
      order: { column: 'Name', sort: 'ASC' },
    },
  };
}

function orderColum(state, action) {
  return {
    ...state,
    filters: {
      filterByName: state.filters.filterByName,
      filterByNumericValues:
            [...state.filters.filterByNumericValues],
      order: { column: action.column, sort: action.order },
    },
  };
}

function filterNumeric(state, action) {
  const { column, comparison, value } = action;
  return {
    ...state,
    filters: {
      filterByName: state.filters.filterByName,
      filterByNumericValues:
      [...state.filters.filterByNumericValues,
        { column, comparison, value }],
      order: { column: 'Name', sort: 'ASC' },
    },
  };
}

function requestReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return { ...state, isLoading: true };
    case 'RECEIVE_DATA':
      return { ...state, data: action.data, isLoading: false };
    case 'FILTER_PLANET_DATA':
      return {
        ...state,
        filters: {
          filterByName: { name: action.filter },
          filterByNumericValues: [...state.filters.filterByNumericValues],
          order: { column: 'Name', sort: 'ASC' },
        },
      };
    case 'FILTER_PLANET_NUMERIC':
      return filterNumeric(state, action);

    case 'REMOVE_NUMERIC_FILTER':
      return removeFilter(state, action);
    case 'ORDER_COLUMN':
      return orderColum(state, action);
    default:
      return state;
  }
}
export default requestReducer;
