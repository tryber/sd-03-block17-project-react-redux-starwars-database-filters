import { REQUEST_API, RECEVIE_API_SUCESS } from '../action/index';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
};

const requestAPI = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: true,
      };
    case RECEVIE_API_SUCESS:
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
      };
    default:
      return state;
  }
};

export default requestAPI;
