import * as types from '../actions/actionTypes';

const INICIAL_STATE = {
  filters: {
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
  },
};

const filterNames = (state, name) => ({
  filters: {
    filterByName: {
      name,
    },
    filterByNumericValues: [...state.filters.filterByNumericValues]
    ,
  },
});

const reducerFilters = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case types.FILTER_NAMES:
      return filterNames(state, action.name);
    default:
      return state;
  }
};

export default reducerFilters;
