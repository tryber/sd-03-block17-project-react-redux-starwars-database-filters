import {
  FILTER_BY_NAME,
  FILTER_BY_NUM_VALUE,
} from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  }, 
  filterByNumericValues: []
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };
    case FILTER_BY_NUM_VALUE:
      console.log('recebendo dados', action.params, filters);
      return {
        ...state,
        filterByNumericValues: [ ...state.filterByNumericValues, action.params],
      };
    default:
      return state;
  }
};

export default filters;
