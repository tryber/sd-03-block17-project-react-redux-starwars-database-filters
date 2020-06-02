import { REQUEST_API, RECEVIE_API_SUCESS } from '../action/a_FetchRequestAPI';
import { FILTER_INPUT } from '../action/a_InpuName';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
};

const requestAPI = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: true,
      };
    case RECEVIE_API_SUCESS:
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
      };
    case FILTER_INPUT:
      return [{
        ...state,
        filters: {
          filterByName: {
            name: action.name,
          },
        },
      }];

    default:
      return state;
  }
};

export default requestAPI;
