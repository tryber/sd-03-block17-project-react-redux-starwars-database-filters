export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS = 'RECEIVE_PLANETS';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_IN_COLUMN = 'FILTER_IN_COLUMN';
export const FILTER_BY_COLUMN = 'FILTER_BY_COLUMN';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanets = (data) => ({
  type: RECEIVE_PLANETS,
  data,
});

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export const filterInNumberValues = (payload) => ({
  type: FILTER_IN_COLUMN,
  payload,
});

export const filterByNumberValues = (payload) => ({
  type: FILTER_BY_COLUMN,
  payload,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((data) => dispatch(receivePlanets(data)));
  };
}
