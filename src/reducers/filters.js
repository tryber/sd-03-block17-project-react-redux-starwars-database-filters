import {
  FILTER_BY_NAME,
  FILTER_BY_NUM_VALUE,
} from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  }, 
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    }
  ]
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };
    case FILTER_BY_NUM_VALUE:
      return {
        ...state,
        filterByNumericValues: {
          column: action.column,
          comparison: action.comparison,
          value: action.value,
        },
      };
    default:
      return state;
  }
};

export default filters;
