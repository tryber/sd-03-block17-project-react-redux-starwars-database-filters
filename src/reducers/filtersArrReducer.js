import { FILTERS_NAME_ARR } from '../actions/filtersNameAction';

const INITIAL_STATE = {
  allFilters: ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
};

const filtersArrReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTERS_NAME_ARR:
      return {
        ...state,
        allFilters: [...action.newArr],
      };
    default:
      return state;
  }
};

export default filtersArrReducer;
