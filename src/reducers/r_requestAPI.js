import {
  API_REQUEST,
  REQUEST_SUCCESS,
} from '../Components/Types';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

const requestAPIReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        loading: false,
      };
    default:
      return state;
  }
};

export default requestAPIReducer;
