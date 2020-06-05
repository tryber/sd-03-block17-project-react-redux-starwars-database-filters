import {
  REQUEST_PLANETS,
  RECEIVE_PLANETS,
  FILTER_BY_NAME,
  ACTIVATE_FILTERS,
  FILTER_BY_COLUMN } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  filters: { filterByName: { name: '' }, filterByNumericValues: [] },
  data: [],
};

function activeFiltersReturn(state, action) {
  const { filters: { filterByNumericValues } } = state;
  return {
    ...state,
    filters: {
      ...state.filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        action.payload.actualFilters,
      ] },
  };
}

function filters(state = INITIAL_STATE, action) {
  const { data, filters } = state;
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PLANETS:
      return { ...state, isFetching: false, data: action.data.results, };
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: { ...filters, filterByName: { name: action.name } },
        data: data.filter((planet) => planet.name.includes(action.name)),
      };
    case ACTIVATE_FILTERS:
      return activeFiltersReturn(state, action);
    case FILTER_BY_COLUMN:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
}

export default filters;
