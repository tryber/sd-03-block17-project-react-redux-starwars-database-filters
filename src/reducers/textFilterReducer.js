import { INPUT_CHANGE } from '../actions/textInputActions';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const handleTextInput = (state, textFilter) => ({
  ...state,
  filters: {
    filterByName: {
      name: textFilter,
    },
  },
});

const textFilterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return handleTextInput(state, action.text);
    default:
      return state;
  }
};
export default textFilterReducer;
