import { REQUEST_API, RECEIVE_API_SUCCESS, RECEIVE_API_FAILURE } from '../actions/types';

const initialState = {
  error: '',
  planets: [],
  isFetching: false,
};

function Reducer(state = initialState, action) {
  console.log('action chamada');

  switch (action.type) {
    case REQUEST_API:
      return { ...state, request: action.payload, isFetching: true };
    case RECEIVE_API_SUCCESS:
      return { ...state, planets: [...action.data], isFetching: false };
    case RECEIVE_API_FAILURE:
      return { ...state, error: action.error, isFetching: false };
    default:
      return state;
  }
}

export default Reducer;
