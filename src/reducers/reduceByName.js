import { FILTER } from '../actions/index';

const initialState = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

export const reduceByName = (state = initialState, action) => {
  switch (action.type) {
    case FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: {
            name: action.payload
          }
        }
      };
    }

    default:
      return state;
  }
};
