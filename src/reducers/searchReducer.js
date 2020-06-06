import { SELECT_CHANGED, TEXT_CHANGED } from '../actions';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const searchReducer = (state = initialState, action) => {
  const { payload, text, type } = action;
  switch (type) {
    case TEXT_CHANGED:
      return {
        ...state,
        filterByName: {
          name: text,
        },
      };

    case SELECT_CHANGED:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues.concat(payload)],
      };

    default:
      return state;
  }
};

export default searchReducer;
