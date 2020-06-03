import { REQUEST_API_DATA, PROCESS_API_DATA } from '../actions';

const initState = {
  count: 0,
  data: [],
  loading: false,
};

function planetReducer(state = initState, action) {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        loading: true,
      };
    case PROCESS_API_DATA:
      return {
        ...state,
        loading: false,
        data: action.results,
        count: action.count,
        next: action.next,
      };
    default:
      return state;
  }
}

export default planetReducer;
