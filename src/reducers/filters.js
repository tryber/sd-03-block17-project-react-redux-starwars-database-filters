import * as types from '../store/actions/actionTypes';

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
  order: {
    column: 'Name',
    sort: 'ASC',
  },
  options: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
};


const filterNames = (state, name) => ({
  filterByName: {
    name,
  },
  filterByNumericValues: [...state.filterByNumericValues],
  order: { ...state.order },
  options: [...state.options],
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
      : [...state.filterByNumericValues, { column, comparison, value }],
  order: { ...state.order },
  options: [...state.options].filter((option) => option !== column),
});

const removeFilter = (state, column) => {
  const newArray = [...state.filterByNumericValues].filter((item) => item.column !== column);
  console.log(column);
  return {
    filterByName: {
      ...state.filterByName,
    },
    filterByNumericValues:
      (state.filterByNumericValues.length === 1)
        ? []
        : newArray,
    order: { ...state.order },
    options: [...state.options, column],
  };
};

const sortFilter = (state, order) => ({
  filterByName: {
    ...state.filterByName,
  },
  filterByNumericValues: [...state.filterByNumericValues],
  order,
  options: [...state.options],
});

const filters = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case types.FILTER_NAMES:
      return filterNames(state, action.name);
    case types.ADD_FILTER_VALUE:
      return addFilter(state, action.column, action.comparison, action.value);
    case types.REMOVE_FILTER_VALUE:
      return removeFilter(state, action.column);
    case types.SORT_FILTER:
      return sortFilter(state, action.order);
    default:
      return state;
  }
};

export default filters;
