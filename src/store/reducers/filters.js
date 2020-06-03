import * as types from '../actions/actionTypes';

const INICIAL_STATE = {
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

const filterNames = (state, name) => ({
  filterByName: {
    name,
  },
  filterByNumericValues: [...state.filterByNumericValues]
  ,
});

const addFilter = (state, column, comparison, value) => ({
  filterByName: {
    ...state.filterByName,
  },
  filterByNumericValues:
    (state.filterByNumericValues[0].column === '')
      ? [{
        column, comparison, value,
      }]
      : [...state.filterByNumericValues, { column, comparison, value }]
  ,
});

const removeFilter = (state, index) => {
  const newArray = [...state.filterByNumericValues];
  newArray.splice(index, 1);
  return {
    filterByName: {
      ...state.filterByName,
    },
    filterByNumericValues:
      (state.filterByNumericValues.length === 1)
        ? [
          {
            column: '',
            comparison: '',
            value: '',
          },
        ]
        : [...newArray],

  };
};

const filters = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case types.FILTER_NAMES:
      return filterNames(state, action.name);
    case types.ADD_FILTER_VALUE:
      return addFilter(state, action.column, action.comparison, action.value);
    case types.REMOVE_FILTER_VALUE:
      return removeFilter(state, action.index);
    default:
      return state;
  }
};

export default filters;
