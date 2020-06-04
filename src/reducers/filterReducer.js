import { INPUT_CHANGE } from '../actions/textInputActions';
import { SUBMIT_FILTER } from '../actions/submitNumFilter';
import { CANCEL_FILTER } from '../actions/cancelFilter';

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

const removeFitler = (state, filters) => ({
  ...state,
  filterByNumericValues: filters,
});

const textFilterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return handleTextInput(state, action.text);
    case SUBMIT_FILTER:
      return handleSubmitFilter(state, [...state.filterByNumericValues, action.payload.state]);
    case CANCEL_FILTER:
      return removeFitler(state, state.filterByNumericValues.filter(
        (e) => e.column !== action.payload.filter,
      ));
    default:
      return state;
  }
};
export default textFilterReducer;
