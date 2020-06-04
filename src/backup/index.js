const INITIAL_STATE = { data: [], filters: { filterByName: { name: '' }, filterByNumericValues: [{ column: 'diameter', comparison: 'less_than', value: '' }] } };

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_DATA': return ({ ...state, data: action.data.results });
    case 'FILTER_NAME': return { ...state, filters: { filterByName: { name: action.name } } };
    case 'FILTER_NUMERIC': return { ...state, filters: { filterByNumericValues: [...state.filters.filterByNumericValues, { column: action.column, comparison: action.comparison, value: action.value }] } };
    default: return state;
  }
}

export default reducer;
