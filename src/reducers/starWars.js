import {
  REQUEST_STARWARS,
  RECEIVE_STARWARS_SUCCESS,
  RECEIVE_STARWARS_FAILURE,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

const starWars = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARWARS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_STARWARS_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case RECEIVE_STARWARS_FAILURE:
      return {
        ...state,
        isFetching: false,
        data: action.error,
      };
    default:
      return state;
  }
};

export default starWars;
