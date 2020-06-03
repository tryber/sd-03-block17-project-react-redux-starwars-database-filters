import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUE, DISABLE_SELECT } from '../actions/types';

const initialState = {
  filterByName: { name: '' },
  filterByNumericValues: [],
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
    default:
      return state;
  }
};
