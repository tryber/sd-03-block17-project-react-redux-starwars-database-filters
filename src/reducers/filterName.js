import {
  FILTER_BY_NAME,
} from '../actions';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    }
  }
};

const filterName = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: {
            filterByName: {
              name: action.name
            }
          }
        },
      };
    default:
      return state;
  }
};

export default filterName;
