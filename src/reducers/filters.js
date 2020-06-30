import {
  FILTER_BY_NAME,
  FILTER_BY_NUM_VALUE,
  DELETE_FILTER,
  DISABLE_COLUMN,
  ENABLE_COLUMN,
  CHANGE_ORDER,
} from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  avaliableFilters: [
    { name: 'population', avaliable: true },
    { name: 'orbital_period', avaliable: true },
    { name: 'diameter', avaliable: true },
    { name: 'rotation_period', avaliable: true },
    { name: 'surface_water', avaliable: true },
  ],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return { ...state, filterByName: { name: action.name } };
    case FILTER_BY_NUM_VALUE:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, ...action.params],
      };
    case DELETE_FILTER:
      return { ...state, filterByNumericValues: [...action.filters] };
    case DISABLE_COLUMN:
      return { ...state, avaliableFilters: [...action.column] };
    case ENABLE_COLUMN:
      return { ...state, avaliableFilters: [...action.column] };
    case CHANGE_ORDER:
      return { ...state, order: { ...action.order } };
    default:
      return state;
  }
};

export default filters;
