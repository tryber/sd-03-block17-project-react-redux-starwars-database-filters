import { REQUEST_PLANETS_DATA, REQUEST_PLANETS_DATA_SUCCESS, REQUEST_PLANETS_DATA_FAILURE } from '../actions/data';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

const planetsData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS_DATA:
      return { ...state, isFetching: true };
    case REQUEST_PLANETS_DATA_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
      };
    case REQUEST_PLANETS_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default planetsData;
