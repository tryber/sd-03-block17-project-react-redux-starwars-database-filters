const INITIAL_STATE = { filterByName: { name: '' }, filterByNumericValues: [], order: { column: 'Name', sort: 'ASC' } };

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FILTER_NAME': return { ...state, filterByName: { name: action.name } };
    case 'FILTER_NUMERIC': return { ...state, filterByNumericValues: [...state.filterByNumericValues, { column: action.column, comparison: action.comparison, value: action.value }] };
    case 'REMOVE_FILTER': return { ...state, filterByNumericValues: state.filterByNumericValues.filter((e) => e !== action.filter) };
    case 'SORT_COLUMNS': return { ...state, order: { column: action.column, sort: action.sort } };
    default: return state;
  }
}

export default filters;
