import {
  FILTER_BY_NAME,
  FILTER_BY_NUMERIC_VALUE,
  DISABLE_SELECT,
  REMOVE_FILTER,
  ENABLE_SELECT,
  CHANGE_ORDER,
} from '../actions/types';

const initialState = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
  avaliableFilters: {
    columnFilters: [
      { name: 'all', avaliable: true },
      { name: 'population', avaliable: true },
      { name: 'orbital_period', avaliable: true },
      { name: 'diameter', avaliable: true },
      { name: 'rotation_period', avaliable: true },
      { name: 'surface_water', avaliable: true },
    ],
    comparisonFilters: [
      'all',
      'maior que',
      'igual a',
      'menor que',
    ],
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_BY_NAME:
      return { ...state, ...payload };
    case FILTER_BY_NUMERIC_VALUE:
      return { ...state, filterByNumericValues: [...state.filterByNumericValues, { ...payload }] };
    case DISABLE_SELECT:
      return {
        ...state,
        avaliableFilters: {
          columnFilters: [...payload],
        },
      };
    case ENABLE_SELECT:
      return {
        ...state,
        avaliableFilters: {
          columnFilters: [...payload],
        },
      };
    case REMOVE_FILTER:
      return { ...state, filterByNumericValues: [...payload] };
    case CHANGE_ORDER:
      return { ...state, order: { ...payload } };
    default:
      return state;
  }
};
