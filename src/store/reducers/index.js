import { FETCH_DATA_LOADING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../actions';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

function starWarsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default starWarsReducer;
