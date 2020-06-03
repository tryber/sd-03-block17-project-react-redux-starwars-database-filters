
const initialState = {};

function emptyReducer(state = initialState, action) {
  switch (action.type) {
    case 'API_CALL':
      return { ...state, data: action.r };


    default:
      return state;
  }
}


export default emptyReducer;
