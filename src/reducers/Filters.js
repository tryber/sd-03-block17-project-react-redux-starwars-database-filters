import { NAME_FILTER } from '../actions/NameFilterAction';
import { NUMERIC_FILTER } from '../actions/NumericFIlterAction';
import { REMOVE_FILTER } from '../actions/RemoveFIlterAction';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      comparasion: '',
      column: '',
      value: '',
    },
  ],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_FILTER:
      return {
        ...state,
        filterByName: {
          name: action.value,
        },
      };
    case NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: (state.filterByNumericValues[0].column === '')
          ? [{ ...action.payload }]
          : [...state.filterByNumericValues.concat(action.payload)],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues:
          [...state.filterByNumericValues.filter((filter) => filter !== action.value)],
      };
    default:
      return state;
  }
};

export default filters;
