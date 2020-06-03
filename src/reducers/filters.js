import { FILTER_BY_NAME, FILTER_BY_NUMERIC, REMOVE_NUMERIC } from '../action';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [{ column: '', comparison: '', value: '' }],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTER_BY_NUMERIC:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
      };
    case REMOVE_NUMERIC:
      const updateNumeric = state.filterByNumericValues.splice(action.index, 1)
      return {
        ...state,
        filterByNumericValues: updateNumeric,
        /* [
          ...state.filterByNumericValues.slice(0, action.index - 1),
          ...state.filterByNumericValues.slice(action.index + 1)
        ] */

      }
    default:
      return state;
  }
};

export default filters;
