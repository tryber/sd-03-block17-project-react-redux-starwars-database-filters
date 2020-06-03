import {
  API_REQUEST,
  API_RECIEVE_SUCCESS,
  API_RECIVE_FAILURE,
} from '../actions/apiAction';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case API_RECIEVE_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        loading: false,
      };
    case API_RECIVE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default apiReducer;
