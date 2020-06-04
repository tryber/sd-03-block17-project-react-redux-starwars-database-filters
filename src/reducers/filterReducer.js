import { INPUT_CHANGE } from '../actions/textInputActions';
import { SUBMIT_FILTER } from '../actions/submitNumFilter';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const handleTextInput = (state, textFilter) => ({
  ...state,
  filterByName: {
    name: textFilter,
  },
});

const handleSubmitFilter = (state, filter) => (Object.values(filter).includes('') ? state : {
  ...state,
  filterByNumericValues: filter,
});

const textFilterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return handleTextInput(state, action.text);
    case SUBMIT_FILTER:
      return handleSubmitFilter(state, [...state.filterByNumericValues, action.payload.state]);
    default:
      return state;
  }
};
export default textFilterReducer;
