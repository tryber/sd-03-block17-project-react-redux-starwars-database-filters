import { REQUEST_API, RECEIVE_API_SUCCESS, RECEIVE_API_FAILURE } from '../actions/types';

const initialState = {
  error: '',
  planets: [],
  isFetching: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_API_SUCCESS:
      return {
        ...state,
        planets: [...action.payload],
        isFetching: false,
      };
    case RECEIVE_API_FAILURE:
      return { ...state, error: action.error, isFetching: false };
    default:
      return state;
  }
};

export default Reducer;
