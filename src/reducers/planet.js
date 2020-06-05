import { RECEIVE_PLANETS, REQUEST_FAIL, REQUESTING_PLANETS } from '../actions/index';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

function PlanetReducer(state = initialState, action) {
  switch (action.type) {
    case REQUESTING_PLANETS:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_PLANETS:
      return {
        ...state,
        data: action.payload.results,
        loading: false,
      };
    case REQUEST_FAIL:
      return {
        ...state,
        error: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
}

export default PlanetReducer;
