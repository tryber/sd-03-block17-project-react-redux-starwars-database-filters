
const INITIAL_STATE = { data: [], filters: filterByName: { name: '' }, filterByNumericValues: [] };

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FILTER_NAME': return { ...state, filter: filterByName: { name: action.name } };
    case 'FILTER_NUMERIC': return { ...state, filterByNumericValues: [...state.filterByNumericValues, { column: action.column, comparison: action.comparison, value: action.value }] };
    default: return state;
  }
}

export default filters;
