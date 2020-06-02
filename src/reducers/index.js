import { REQUEST_PLANETS, RECEIVE_PLANETS, FILTER_BY_NAME } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  filters: {},
  data: [],
};

function PlanetsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PLANETS:
      return {
        ...state,
        isFetching: false,
        data: action.data.results,
      };
      case FILTER_BY_NAME:
        return {
          ...state,
          filters: { filterByName: { name: action.name } },
          data: state.data,
        }
    default:
      return state;
  }
}

export default PlanetsReducer;
