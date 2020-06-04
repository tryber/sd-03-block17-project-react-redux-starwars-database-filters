import apiPlanets from '../service/fetchAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS = 'RECEIVE_PLANETS';
export const FILTER_NAME = 'FILTER_NAME';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanets = (data) => ({
  type: RECEIVE_PLANETS,
  data,
});

export const filterName = (name) => ({
  type: FILTER_NAME,
  name,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return apiPlanets()
      .then((response) => response.json())
      .then((data) => dispatch(receivePlanets(data)));
  };
}
