import { NAME_FILTER } from '../actions/NameFilterAction';
import { NUMERIC_FILTER } from '../actions/NumericFIlterAction';
import { REMOVE_FILTER } from '../actions/RemoveFIlterAction';

const INITIAL_STATE = {
  filteByName: {
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
        filteByName: {
          searchText: action.text,
        },
      };
    case NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: (state.filterByNumericValues[0].column === '')
          ? [{ ...action.numberSearch }]
          : [...state.filterByNumericValues.concat(action.numberSearch)],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues:
          [...state.filterByNumericValues.filter((elem) => elem !== action.exclude)],
      };
    default:
      return state;
  }
};

export default filters;
