import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES } from '../actions/index';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: 'population',
      comparison: 'Maior que',
      value: 0,
    },
  ],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.value,
        },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [action.data],
      };
    default:
      return state;
  }
};

export default filters;
