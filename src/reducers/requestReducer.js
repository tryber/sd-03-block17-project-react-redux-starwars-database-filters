import { REQUESTING, RECEIVED } from '../actions';

const initialState = {
  data: [],
  isRequesting: false,
};

const requestReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case REQUESTING:
      return {
        ...state,
        isRequesting: true,
      };

    case RECEIVED:
      return {
        data: payload.results,
        isRequesting: false,
      };

    default:
      return state;
  }
};

export default requestReducer;
