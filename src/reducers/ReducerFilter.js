import { FILTER_BY_NAME } from '../action';

const INITIAL_STATE = { filters: { filterByName: { name: '' } } }

const filterPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };

    default:
      return state;
  }
}

export default filterPlanets;
