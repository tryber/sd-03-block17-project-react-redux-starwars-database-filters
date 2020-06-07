export const FILTER_PLANETS_BY_NAME = 'FILTER_PLANETS_BY_NAME';
export const ADD_NEW_FILTER = 'ADD_NEW_FILTER';

export const filterPlanetsByName = (name) => ({ type: FILTER_PLANETS_BY_NAME, payload: { name } });

export const addFilter = (column, comparison, value) => ({
  type: ADD_NEW_FILTER,
  payload: {
    column,
    comparison,
    value,
  },
});
