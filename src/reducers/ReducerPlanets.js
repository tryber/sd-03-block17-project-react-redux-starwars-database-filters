import { REQUEST_PLANETS, SUCCESS_PLANETS, FAILURE_PLANETS } from '../action';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  filteredData: [],
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
  },
};

const ReducerPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case SUCCESS_PLANETS:
      return {
        ...state,
        data: [...action.data],
        filteredData: [...action.data],
        isFetching: false,
      };
    case FAILURE_PLANETS:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default ReducerPlanets;
