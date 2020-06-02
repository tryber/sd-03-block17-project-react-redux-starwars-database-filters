import { FILTER_PLANETS } from '../actions';

const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_PLANETS:
      return {
        ...state,
        filterByName: {
          name: action.value,
        },
      };
    default:
      return state;
  }
};

export default filters;