import { FILTER_BY_PLANET_TEXT, FILTER_BY_NUMERIC_VALUES } from '../services/Types';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_PLANET_TEXT:
      return { ...state, filterByName: { name: action.name } };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues[0].column === ''
          ? action.params
          : [...state.filterByNumericValues.concat(action.params)],
      };
    default:
      return state;
  }
};

export default filters;
