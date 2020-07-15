const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FILTER_BY_NAME':
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case 'FILTER_BY_NUMERIC':
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, {
          column: action.column,
          comparison: action.comparison,
          value: action.value,
        }],
      };
    case 'REMOVE_NUMERIC':
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter((filter) => filter !== action.obj),
        ],
      };
    case 'ORDER_COLUMN':
      return {
        ...state,
        order: { column: action.column, sort: action.sort },
      };
    default: return state;
  }
};

export default filters;
