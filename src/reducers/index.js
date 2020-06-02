import { REQUEST_PLANETS, RECEIVE_PLANETS } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

function PlanetsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
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
      }
    default: 
      return state; 
  }
}

export default PlanetsReducer;