const INITIAL_STATE = { filterByName: { value: '' }, filterByNumericValues: [] };

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FILTER_NAME': return { ...state, filterByName: { value: action.name } };
    case 'FILTER_NUMERIC': return { ...state, filterByNumericValues: [...state.filterByNumericValues, { column: action.column, comparison: action.comparison, value: action.value }] };
    case 'REMOVE_FILTER': return { ...state, filterByNumericValues: state.filterByNumericValues.filter(e => e.column !== action.filter.column) };
    default: return state;
  }
}

export default filters;
