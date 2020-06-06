import getPlanets from '../../services/starwarsAPI';

export const filterByName = (name) => ({
  type: 'FILTER_BY_NAME',
  name,

});

export const requestPlanets = () => ({
  type: 'REQUEST_PLANETS',
});

const receivePlanetsSuccess = (data) => ({
  type: 'RECEIVE_PLANETS_SUCCESS',
  data,
});

const receivePlanetsFailure = (error) => ({
  type: 'RECEIVE_PLANETS_FAILURE',
  error,
});

function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getPlanets().then(
      (data) => dispatch(receivePlanetsSuccess(data.results)),
      (error) => dispatch(receivePlanetsFailure(error)),
    );
  };
}

export default fetchPlanets;
