import {
  REQUEST_PLANETS, RECEIVE_PLANETS_FAILURE, RECEIVE_PLANETS_SUCCESS,
} from '../actions/types';

const initialState = {
  isFetching: true,
  data: [],
};

export default function planetsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case RECEIVE_PLANETS_SUCCESS:
      return { ...state, isFetching: false, data: payload };
    case RECEIVE_PLANETS_FAILURE:
      return { ...state, isFetching: false, error: payload };
    default:
      return state;
  }
}
