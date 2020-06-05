const INITIAL_STATE = { data: [] };

const sortNames = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
};

function dataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_DATA': return ({
      ...state,
      data: action.data.results
        .sort(sortNames),
    });
    case 'CHANGE_DATAASC': return ({ ...state, data: state.data.sort(function (a, b) { return Number(a[action.column]) - Number(b[action.column]); }) });
    case 'CHANGE_DATADESC': return ({ ...state, data: state.data.sort(function (a, b) { return Number(b[action.column]) - Number(a[action.column]); }) });
    default: return state;
  }
}

export default dataReducer;
