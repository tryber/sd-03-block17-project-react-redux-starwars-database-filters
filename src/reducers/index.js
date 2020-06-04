const INITIAL_STATE = { data: [], filters: { filterByName: { name: '' }, filterByNumericValues: [] } };

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_DATA': return ({ ...state, data: action.data.results });
    case 'FILTER_NAME': return { ...state, filters: { ...state.filters, filterByName: { name: action.name } } };
    case 'FILTER_NUMERIC': return { ...state, filters: { ...state.filters, filterByNumericValues: [...state.filters.filterByNumericValues, { column: action.column, comparison: action.comparison, value: action.value }] } };
    case 'REMOVE_FILTER': return { ...state, filters: { ...state.filters, filterByNumericValues: state.filters.filterByNumericValues.filter(e => e.column !== action.filter.column || e.comparison !== action.filter.comparison || e.value !== action.filter.value) } };
    default: return state;
  }
}

export default reducer;
