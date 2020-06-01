import * as types from '../actions/actionTypes';

const INICIAL_STATE = { loading: false };

const R_fetchPlanets = (state = INICIAL_STATE, action) => {
  console.log('teste 2', action)
  switch (action.type) {
    case types.REQUEST_API:
      return { ...state, loading: true };
    case types.RECEIVE_API_SUCCESS:
      return {
        ...state,
        data: [...action.results],
        loading: false,
      };
    case types.RECEIVE_API_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  };
};

export default R_fetchPlanets;
