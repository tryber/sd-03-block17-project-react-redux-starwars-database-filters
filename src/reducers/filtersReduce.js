import { FILTER_BY_NAME } from '../actions/index';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    }
  ],
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_NAME: {
      return {
        ...state,

        filterByName: {
          name: action.payload,
        },
      };
    }

    default:
      return state;
  }
};
