import { FILTER_BY_NAME } from '../actions/types';

const initialState = {
  filterByName: { name: '' },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_BY_NAME:
      return { ...state, ...payload };
    default:
      return state;
  }
};
