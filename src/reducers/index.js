import {
  REQUEST_PLANETS,
  RECEIVE_PLANETS,
  FILTER_BY_NAME,
  FILTER_IN_COLUMN,
  FILTER_BY_COLUMN, } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  filters: { filterByNumericValues: [] },
  data: [],
  dataFiltered: [],
};

function PlanetsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PLANETS:
      return {
        ...state,
        isFetching: false,
        data: action.data.results,
        dataFiltered: action.data.results,
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: { filterByName: { name: action.name } },
        dataFiltered: state.data.filter((planet) => planet.name.includes(action.name)),
      };
      case FILTER_IN_COLUMN:
        return {
          ...state,
          filters: { ...state.filters, filterByNumericValues: ['a']},
        }
      case FILTER_BY_COLUMN:
        return {
          ...state,
          filters: { ...state.filters, filterByNumericValues: [action.payload.actualFilters]},
          dataFiltered: action.payload.dataFiltered,
        }
    default:
      return state;
  }
}

export default PlanetsReducer;
