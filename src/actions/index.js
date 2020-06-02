import { getAllPlanetsFromAPI } from '../services/planetsAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS_SUCCESS = 'RECEIVE_PLANETS_SUCCESS';
export const RECEIVE_PLANETS_FAILURE = 'RECEIVE_PLANETS_FAILURE';

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
