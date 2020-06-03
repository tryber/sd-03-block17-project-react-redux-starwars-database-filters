import { FILTER_BY_NAME } from '../action/index';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  // filterByNumericValues: [
  //   {
  //     column: 'population',
  //     comparison: 'maior que',
  //     value: '100000',
  //   },
  // ],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.value,
        },
      };
    // case FILTER_BY_NUMBERS:
    //   return {
    //     ...state,
    //     value: action.value,
    //   };
    default:
      return state;
  }
};

export default filters;
