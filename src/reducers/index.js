import {
  FETCH_DATA_LOADING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FILTER_PLANETS_BY_NAME,
} from '../actions';

const initialState = {
  loading: false,
  data: [],
  error: null,
  filters: {
    filterByName: {
      name: '',
    },
  },
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
    case FILTER_PLANETS_BY_NAME:
      return {
        ...state,
        filters: { filterByName: { name: action.payload.name } },
      };
    default:
      return state;
  }
}

export default starWarsReducer;
