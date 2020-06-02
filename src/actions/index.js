const fetch = require('node-fetch');
export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS = 'RECEIVE_PLANETS';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanets = (data) => ({
  type: RECEIVE_PLANETS,
  data,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then(response => response.json())
      .then(data => dispatch(receivePlanets(data)));
  };
}