import { FILTER_BY_PLANET_TEXT } from '../services/Types';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_PLANET_TEXT:
      return { ...state, filterByName: { name: action.name } };
    default:
      return state;
  }
};

export default filters;
