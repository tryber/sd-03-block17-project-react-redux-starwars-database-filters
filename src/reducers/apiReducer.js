import {
  RECEIVED_API, REQUEST_API, REQUEST_FAILED,
} from '../actions/apiActions';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  filteredData: [],
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
  },
};

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVED_API:
      return {
        ...state,
        data: [...action.data],
        filteredData: [...action.data],
        isLoading: false,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default apiReducer;
