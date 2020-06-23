import { RECEIVE_API_SUCCESS } from '../actions/types';

const initialState = {
  erro: '',
  planets: [],
  isFetching: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_API_SUCCESS:
      return { ...state, planets: action.payload, isFetching: true };
    default:
      return state;
  }
}

export default Reducer;
