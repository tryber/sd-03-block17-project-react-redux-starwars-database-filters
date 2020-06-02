import {
  RECEIVED_DATA, REQUEST_DATA, FAILED_REQUEST,
} from '../actions/fetchActions';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
};

function requestDataResponse(state) {
  return { ...state, isFetching: true, data: [] };
}

function receivedDataResponse(state, action) {
  return { ...state, isFetching: false, data: action.data };
}

function failedRequestResponse(state, action) {
  return { ...state, isFetching: false, error: action.error };
}

const requestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return requestDataResponse(state);
    case RECEIVED_DATA:
      return receivedDataResponse(state, action);
    case FAILED_REQUEST:
      return failedRequestResponse(state, action);
    default:
      return state;
  }
};

export default requestReducer;
