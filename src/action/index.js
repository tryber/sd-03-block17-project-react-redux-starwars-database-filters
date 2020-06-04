import getPlanetsGalaxy from '../services/planetsAPI';

export const REQUEST_API = 'REQUEST_FETCH_APP';
export const RECEVIE_API_SUCESS = 'RECEVIE_API_WITH_SUCESS';
export const FILTER_BY_NAME = 'FILTER_INPUT_BY_NAME';
export const FILTER_BY_NUMBERS = 'FILTER_BY_NUMBER';
export const FILTER_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';

const requestApi = () => ({
  type: REQUEST_API,
});

const recevieApi = ({ results }) => ({
  type: RECEVIE_API_SUCESS,
  data: results,
});

// THUNK
export function fetchRequestAPI() {
  return (dispatch) => {
    dispatch(requestApi());

    return getPlanetsGalaxy().then(
      (data) => dispatch(recevieApi(data)),
    );
  };
}

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  value: name,
});

export const filterByNumber = (usa) => ({
  type: FILTER_BY_NUMBERS,
  payload: usa,
});

export const filterByNumericValues = (payload) => ({
  type: FILTER_NUMERIC_VALUES,
  payload,
});
