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

const addFilter = (state, column, comparison, value) => ({
  filters: {
    filterByName: {
      ...state.filters.filterByName,
    },
    filterByNumericValues:
      (state.filters.filterByNumericValues[0].column === '')
        ? [{
          column, comparison, value,
        }]
        : [...state.filters.filterByNumericValues, { column, comparison, value }]
    ,
  },
});

const removeFilter = (state, index) => {
  const newArray = [...state.filters.filterByNumericValues];
  newArray.splice(index, 1);
  return {
    filters: {
      filterByName: {
        ...state.filters.filterByName,
      },
      filterByNumericValues:
        (state.filters.filterByNumericValues.length === 1)
          ? [
            {
              column: '',
              comparison: '',
              value: '',
            },
          ]
          : [...newArray],
    },
  };
};

const reducerFilters = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case types.FILTER_NAMES:
      return filterNames(state, action.name);
    case types.ADD_FILTER_VALUE:
      return addFilter(state, action.column, action.comparison, action.value);
    case types.REMOVE_FILTER_VALUE:
      console.log(state);
      return removeFilter(state, action.index);
    default:
      return state;
  }
};

export default reducerFilters;
