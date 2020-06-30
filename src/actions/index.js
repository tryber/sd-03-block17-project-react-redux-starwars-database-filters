import getStarWarsPlanetsData from '../services/starwarsAPI';

export const REQUEST_STARWARS = 'REQUEST_STARWARS';
export const RECEIVE_STARWARS_SUCCESS = 'RECEIVE_STARWARS_SUCCESS';
export const RECEIVE_STARWARS_FAILURE = 'RECEIVE_STARWARS_FAILURE';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUM_VALUE = 'FILTER_BY_NUM_VALUE';

const requestStarWars = () => ({
  type: REQUEST_STARWARS,
});

const receiveStarWarsSuccess = ({ results }) => ({
  type: RECEIVE_STARWARS_SUCCESS,
  data: results,
});

const receiveStarWarsFailure = (error) => ({
  type: RECEIVE_STARWARS_FAILURE,
  error,
});

export function fetchStarWars() {
  return (dispatch) => {
    dispatch(requestStarWars());

    return getStarWarsPlanetsData()
      .then(
        (planets) => dispatch(receiveStarWarsSuccess(planets)),
        (error) => dispatch(receiveStarWarsFailure(error.message)),
      );
  };
}

export const filterName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export const filterNumValues = (...params) => ({
  type: FILTER_BY_NUM_VALUE,
  params,
})
