
const INITIAL_STATE = { data: [] };

function datareducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_DATA': return ({ ...state, data: action.data.results });
    default: return state;
  }
}

export default datareducer;
