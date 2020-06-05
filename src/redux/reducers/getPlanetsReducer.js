const INITIAL_STATE = {
  data: [],
  error: '',
  isFetching: false,
};

const getPlanetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_PLANETS':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_PLANETS_SUCCESS':
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    case 'RECEIVE_PLANETS_FAILURE':
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

export default getPlanetsReducer;
