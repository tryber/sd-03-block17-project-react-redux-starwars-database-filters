import { REQUEST_PLANETS, SUCCESS_PLANETS, FAILURE_PLANETS, FILTER_BY_NAME } from '../action';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  filteredData: [],
  filters: {
    filterByName: '',
    filterByNumericValues: []
  },
};

const ReducerPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case SUCCESS_PLANETS:
      return {
        ...state,
        data: [...action.data],
        filteredData: [...action.data],
        isFetching: false,
      }
    case FAILURE_PLANETS:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: action.name,
        },
        filteredData: state.data.filter(({ name }) =>
          name.includes(action.name)),
      }

    default:
      return state;
  }
}

export default ReducerPlanets;
