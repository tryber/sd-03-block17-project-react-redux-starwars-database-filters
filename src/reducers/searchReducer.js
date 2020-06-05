import { TEXT_CHANGED } from '../actions';

const initialState = {
  filterByName: {
    name: '',
  },
};

const searchReducer = (state = initialState, action) => {
  const { text, type } = action;
  switch (type) {
    case TEXT_CHANGED:
      return {
        filterByName: {
          name: text,
        },
      };

    default:
      return state;
  }
};

export default searchReducer;
