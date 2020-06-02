import { REQUEST_PLANETS, RECEIVE_PLANETS, FILTER_BY_NAME } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  filters: {},
  data: [],
  dataFiltered: [],
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
        dataFiltered: action.data.results,
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: { filterByName: { name: action.name }},
        dataFiltered: state.data.filter(planet => planet.name.includes(action.name)),
      };
    default:
      return state;
  }
}

export default PlanetsReducer;
