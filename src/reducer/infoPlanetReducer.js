import * as type from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  data: [],
};

const infoPlanetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.REQUEST_PLANETS_INFO:
      return { ...state, isLoading: action.isLoading };
    case type.REQUEST_PLANET_INFO_SUCESSFULL:
      return { ...state, isLoading: action.isLoading, data: [...action.data] };
    case type.REQUEST_PLANET_INFO_FAILURE:
      return { ...state, isLoading: action.isLoading, error: action.error };
    default:
      return state;
  }
};
