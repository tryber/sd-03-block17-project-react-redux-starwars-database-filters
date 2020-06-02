import getPlanetsAPI from '../services/getPlanetsAPI';
export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';
export const RECEIVE_API_ERROR = 'RECEIVE_API_ERROR';

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

export function fetchPlanets() { // action creator que retorna uma função, possível por conta do pacote redux-thunk
  return (dispatch) => { // thunk declarado
    dispatch(requestPlanets());
    return getPlanetsAPI()
      .then(
        (dataJson) => dispatch(receivePlanetsSuccess(dataJson)),
        (error) => dispatch(receivePlanetsError(error)),
      );
  }
}

