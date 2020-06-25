import {
  ON_CHANGE_NAME_VALUE,
} from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_CHANGE_NAME_VALUE:
      return {
        ...state,
        filterByName: { name: action.filterName },
      };
    default:
      return {
        ...state,
      };
  }
};

export default filterReducer;
