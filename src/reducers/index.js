const INITIAL_STATE = {
  data: '',
};

function requestReducer(state = INITIAL_STATE, action) {
 
  switch (action.type) {
 
    case 'REQUEST_DATA':
      console.log("No request ");
      return {
        ...state,
        data: action.data,
      };
      case 'RECEIVE_DATA':
        console.log(action);
        return {
          ...state,
          data: action.data,
        };
    default:
      return state;
  }
}

export default requestReducer;
