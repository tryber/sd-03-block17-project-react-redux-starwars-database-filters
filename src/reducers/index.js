import {
  REQUEST_PLANETS_LIST, RECEIVE_PLANETS_LIST_SUCCESS, RECEIVE_PLANETS_LISTS_FAILURE,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
};

const planetsList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS_LIST:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PLANETS_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        results: action.results,
      };
    case RECEIVE_PLANETS_LISTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default planetsList;
