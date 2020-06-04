import {
  REQUEST_PLANETS,
  FETCH_PLANETS_SUCESS,
  FETCH_PLANETS_FAILURE,
} from '../actions/fetchPlanetsAction';

export const INITIAL_STATE = {
  isFetching: true,
  data: [],
  error: '',
};

function dataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return ({ ...state, isFetching: true });

    case FETCH_PLANETS_SUCESS:
      return ({
        ...state,
        isFetching: false,
        data: [...action.planets],
        headers: [...action.headers],
      });

    case FETCH_PLANETS_FAILURE:
      return ({
        ...state,
        isFetching: false,
        error: action.error,
      });

    default:
      return state;
  }
}

export default dataReducer;
