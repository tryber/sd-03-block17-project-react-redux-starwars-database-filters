import { FILTER_BY_NAME } from '../actions/filterByNameAction';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: {
            ...state.filters.filterByName,
            name: action.typedText,
          },
        },
      };
    default:
      return state;
  }
};

export default filtersReducer;
