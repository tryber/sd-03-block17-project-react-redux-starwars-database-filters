
const initialState = {
  data: { results: [] },
  filters: { filterByName: { name: '' } },
};

function emptyReducer(state = initialState, action) {
  switch (action.type) {
    case 'API_CALL':
      return { ...state, data: action.r };

    case 'SET_FILTER':
      return { ...state, filters: { filterByName: { name: action.filter } } };


    default:
      return state;
  }
}


export default emptyReducer;
