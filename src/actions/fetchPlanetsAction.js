import { fetchSWAPI } from '../services/fetchSWAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const FETCH_PLANETS_SUCESS = 'FETCH_PLANETS_SUCESS';
export const FETCH_PLANETS_FAILURE = 'FETCH_PLANETS_FAILURE';

const requestPlanets = () => ({ type: REQUEST_PLANETS });

const fetchPlanetsSucess = (planets) => {
  const headers = Object.keys(planets[0]).filter((key) => key !== 'residents');
  return ({
    type: FETCH_PLANETS_SUCESS,
    planets,
    headers,
  });
};

const fetchPlanetsFailure = (error) => ({
  type: FETCH_PLANETS_FAILURE,
  error,
});

export const fetchPlanets = () => (
  (dispatch) => {
    dispatch(requestPlanets);

    return fetchSWAPI()
      .then(
        (planets) => dispatch(fetchPlanetsSucess(planets.results)),
        (error) => dispatch(fetchPlanetsFailure(error)),
      );
  }
);

export default fetchPlanets;
