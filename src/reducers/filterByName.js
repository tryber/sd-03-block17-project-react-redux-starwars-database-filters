import { FILTER } from '../actions/index';

const initialState = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
