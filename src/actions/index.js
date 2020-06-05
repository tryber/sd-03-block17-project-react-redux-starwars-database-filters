import getPlanetsAPI from '../services/getPlanetsAPI';

export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';
export const RECEIVE_API_ERROR = 'RECEIVE_API_ERROR';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';
export const RECEIVE_FILTERED_PLANETS = 'RECEIVE_FILTERED_PLANETS';
export const REMOVE_FILTER = 'REMOVE_FILTER';

const requestPlanets = () => ({
  type: REQUEST_API,
});

const receivePlanetsSuccess = (data) => ({
  type: RECEIVE_API,
  planets: data.results,
});

const receivePlanetsError = (error) => ({
  type: RECEIVE_API_ERROR,
  error,
});

export function fetchPlanets() { // action creator retorna função, possível graças ao redux-thunk
  return (dispatch) => { // thunk declarado
    dispatch(requestPlanets());
    return getPlanetsAPI()
      .then(
        (dataJson) => dispatch(receivePlanetsSuccess(dataJson)),
        (error) => dispatch(receivePlanetsError(error)),
      );
  };
}

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  value: name,
});

export const filterByNumericValues = (data) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  data,
});

export const filteredPlanets = (data) => ({
  type: RECEIVE_FILTERED_PLANETS,
  planets: data,
});

export const removeFilter = (index) => ({
  type: REMOVE_FILTER,
  index,
});
