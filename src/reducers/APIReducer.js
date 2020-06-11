import { API_REQUEST, API_REQUEST_SUCCESS } from '../actions/APIAction';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

const APIReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case API_REQUEST_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        loading: false,
      };
    default:
      return state;
  }
};

export default APIReducer;
