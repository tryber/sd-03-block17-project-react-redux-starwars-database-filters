const INITIAL_STATE = ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function columnsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DO_FILTER': return [...state.filter((e) => e !== action.column)];
    case 'RETURN_COLUMN': return [...state, action.column.column];
    default: return state;
  }
}

export default columnsReducer;
