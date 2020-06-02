import {
  API_REQUEST,
  API_RECEIVE_SUCCESS,
  API_RECEIVE_FAILURE,
} from '../actions/apiSWAction';
import { FILTER_BY_NAME } from '../actions/filterByNameAction';

const INITIAL_STATE = {
  data: [],
  loading: true,
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const apiSWReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case API_RECEIVE_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        loading: false,
      };
    case API_RECEIVE_FAILURE:
      return {
        ...state,
        error: action.errorMessage,
        loading: false,
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: {
            ...state.filters.filterByName,
            name: action.typedText,
          },
        },
      };
    default:
      return state;
  }
};

export default apiSWReducer;
