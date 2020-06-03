import { getAllPlanetsFromAPI, getPlanetByNameFromAPI } from '../services/planetsAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS_SUCCESS = 'RECEIVE_PLANETS_SUCCESS';
export const RECEIVE_PLANETS_FAILURE = 'RECEIVE_PLANETS_FAILURE';
export const FILTER_BY_TEXT = 'FILTER_BY_TEXT';

export const requestPlanets = () => ({
  type: REQUEST_PLANETS,
  isFetching: true,
  data: [],
});

const receivePlanetsSuccess = ({ results }) => ({
  type: RECEIVE_PLANETS_SUCCESS,
  isFetching: false,
  data: results,
});

const receivePlanetsFailure = (error) => ({
  type: RECEIVE_PLANETS_FAILURE,
  isFetching: false,
  data: error,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getAllPlanetsFromAPI()
      .then(
        (planets) => dispatch(receivePlanetsSuccess(planets)),
        (error) => dispatch(receivePlanetsFailure(error.message)),
      );
  };
}

const filterByText = (name) => ({
  type: FILTER_BY_TEXT,
  isFetching: true,
  name,
});

export function fetchByName(name) {
  return (dispatch) => {
    dispatch(filterByText(name));

    return getPlanetByNameFromAPI(name)
      .then(
        (planets) => dispatch(receivePlanetsSuccess(planets)),
        (error) => dispatch(receivePlanetsFailure(error.message)),
      );
  };
}
