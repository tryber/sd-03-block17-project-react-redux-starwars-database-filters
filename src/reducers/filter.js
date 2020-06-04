import { FILTER_NAME, FILTER_NUMBER } from '../actions';

const initState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: 100000,
    }
  ]
};

function filterReducer(state = initState, action) {
  console.log('Estado: ', state, 'Action: ', action)
  switch (action.type) {
    case FILTER_NAME:
      return {
        ...state,
        filterByName: { name: action.filterByName },
      };
    case FILTER_NUMBER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues.concat(action.params)],
      };
    default:
      return state;
  }
}

export default (filterReducer);
