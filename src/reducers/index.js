import { REQUEST_API, RECEIVE_API_SUCCESS } from '../actions/types';

const initialState = {
  error: '',
  planets: [],
  isFetching: false,
};

const requestAPI = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_API_SUCCESS:
      return {
        ...state,
        planets: [...action.data],
        isFetching: false,
      };
    // case RECEIVE_API_FAILURE:
    //   return { ...state, error: action.error, isFetching: false };
    default:
      return state;
  }
};

export default requestAPI;
