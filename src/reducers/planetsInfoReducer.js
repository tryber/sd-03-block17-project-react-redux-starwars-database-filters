import {
  REQUEST_PLANETS_INFORMATION,
  PLANET_INFO_REQUEST_SUCESS,
  PLANET_INFO_REQUEST_FAILURE,
} from '../actions/actions';

const INITIAL_STATE = {
  isLoading: false,
  data: [],
};

const planetsInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS_INFORMATION:
      return { ...state, isLoading: action.loading };
    case PLANET_INFO_REQUEST_SUCESS:
      return { ...state, isLoading: action.loading, data: [...action.data] };
    case PLANET_INFO_REQUEST_FAILURE:
      return { ...state, isLoading: action.loading, error: action.error };
    default:
      return state;
  }
};

export default planetsInfoReducer;
