import {
  REQUESTING_STAR_WARS_DATA,
  REQUESTING_STAR_WARS_DATA_SUCCESS,
  REQUESTING_STAR_WARS_DATA_FAIL,
} from '../actions/index';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

const SWreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUESTING_STAR_WARS_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case REQUESTING_STAR_WARS_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...action.dataBase],
      };
    case REQUESTING_STAR_WARS_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default SWreducer;
