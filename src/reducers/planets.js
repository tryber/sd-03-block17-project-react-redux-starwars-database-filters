import {
  REQUEST_PLANETS,
  RECEIVE_PLANETS_SUCCESS,
  RECEIVE_PLANETS_FAILURE,
} from '../actions';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
};

const selectPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        data: [],
        isFetching: true,
      };
    case RECEIVE_PLANETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case RECEIVE_PLANETS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default selectPlanets;
