import { FILTER_TABLE } from '../actions';

const initState = {
  filterByName: {
    name: '',
  },
};

function filterReducer(state = initState, action) {
  // console.log('BabySteep no 1.', action)
  switch (action.type) {
    case FILTER_TABLE:
      return {
        ...state,
        filterByName: { name: action.searchTerm },
      };
    default:
      return state;
  }
}

export default (filterReducer);
