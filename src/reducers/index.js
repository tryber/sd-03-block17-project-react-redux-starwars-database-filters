const INITIAL_STATE = {
  data: { results: ["Loading ...."] },
};

function requestReducer(state = INITIAL_STATE, action) {
 
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        data: action.data,
      };
      case 'RECEIVE_DATA':
      return {
          ...state,
          data: action.data,
        };
    default:
     return state;
  }
}

export default requestReducer;
