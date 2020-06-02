import { REQUEST_API_DATA } from "../actions";
import { PROCESS_API_DATA } from "../actions";

const init_state = {
  loading: false,
  count: 0,
  results: []
}

function planetReducer(state = init_state, action) {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        loading: true
      };
    case PROCESS_API_DATA:
      return {
        ...state,
        loading: false,
        results: action.results,
        count: action.count
      };
    default:
      return state;
  }
}

export default planetReducer;