
import { FILTER_BY_TEXT } from '../actions';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const filterByName = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_TEXT:
      return { ...state, filterByName: { name: action.name } };
    default:
      return state;
  }
};

export default filterByName;
