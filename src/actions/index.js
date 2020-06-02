import fetchPlanets from '../services/api';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS = 'RECEIVE_PLANETS';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';

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

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return fetchPlanets()
      .then((response) => response.json())
      .then((data) => dispatch(receivePlanets(data)));
  };
}
