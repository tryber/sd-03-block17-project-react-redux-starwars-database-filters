import { FILTER_BY_NAME } from '../actions/filterByNameAction';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          // ...state.filterByName,
          name: action.typedText,
        },
      };
    default:
      return state;
  }
};

export default filters;
