import {
  FILTER_PLANETS_BY_NAME,
  ADD_NEW_FILTER,
} from '../actions/FilterActions';


const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_PLANETS_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.payload.name },
      };
    case ADD_NEW_FILTER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.payload],
      };
    default: return state;
  }
}
