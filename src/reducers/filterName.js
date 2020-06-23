import {
  FILTER_BY_NAME,
} from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: 'name no estado inicial',
  }
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.name
        },
      };
    default:
      return state;
  }
};

export default filters;
