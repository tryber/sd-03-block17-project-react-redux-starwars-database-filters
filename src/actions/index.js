import fetchAPI from '../services/fetchAPI';

export const REQUESTING_PLANETS = 'REQUESTING_PLANETS';
export const RECEIVE_PLANETS = 'RECEIVE_PLANETS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const QUERY_BY_NAME = 'QUERY_BY_NAME';
export const SAVE_FILTERS = 'SAVE_FILTERS';

export const requestPlanets = () => ({ type: REQUESTING_PLANETS });


export const receivePlanets = (planetList) => (
  {
    type: RECEIVE_PLANETS,
    payload: planetList,
  }
);

export const fetchFail = (error) => (
  {
    type: REQUEST_FAIL,
    payload: error,
  }
);

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return fetchAPI()
      .then(
        (planetList) => dispatch(receivePlanets(planetList)),
        (error) => dispatch(fetchFail(error.message)),
      );
  };
}

export const queryByName = (query) => ({
  type: QUERY_BY_NAME,
  payload: query,
});

export const saveFilters = (column, comparison, value) => ({
  type: SAVE_FILTERS,
  column,
  comparison,
  value,
});
