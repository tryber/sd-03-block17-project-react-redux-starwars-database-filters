import getPlanets from '../services/api';

export const REQUEST_PLANETS_DATA = 'REQUEST_PLANETS_DATA';
export const REQUEST_PLANETS_DATA_SUCCESS = 'REQUEST_PLANETS_DATA_SUCCESS';
export const REQUEST_PLANETS_DATA_FAILURE = 'REQUEST_PLANETS_DATA_FAILURE';

const requestPlanetsData = () => ({
  type: REQUEST_PLANETS_DATA,
});

const requestSucess = (data) => ({
  type: REQUEST_PLANETS_DATA_SUCCESS,
  data,
});

const requestFailure = (error) => ({
  type: REQUEST_PLANETS_DATA_FAILURE,
  error,
});

export function requestFetchPlanet() {
  return (dispatch) => {
    dispatch(requestPlanetsData());
    return getPlanets()
      .then(
        (json) => dispatch(requestSucess(json.results)),
        (error) => dispatch(requestFailure(error)),
      );
  };
}
