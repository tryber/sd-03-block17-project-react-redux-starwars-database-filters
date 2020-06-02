import { FILTER_BY_NAME } from '../actions/index';
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
          name: action.value,
        },
      };
    default:
      return state;
  };
}

export default filters;
