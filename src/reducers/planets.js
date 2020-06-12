
import { REQUEST_PLANETS, PLANETS_SUCCESS, PLANETS_FAILURE } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  planets: [],
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
  },
};

const getPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case PLANETS_SUCCESS:
      return {
        ...state,
        planets: [...action.data],
        isFetching: false,
      };
    case PLANETS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default getPlanets;
