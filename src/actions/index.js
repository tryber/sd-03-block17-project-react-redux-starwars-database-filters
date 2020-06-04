import getPlanetsList from '../services/swapi';

export const REQUEST_PLANETS_LIST = 'REQUEST_PLANETS_LIST';
export const RECEIVE_PLANETS_LIST_SUCCESS = 'RECEIVE_PLANETS_LIST_SUCCESS';
export const RECEIVE_PLANETS_LISTS_FAILURE = 'RECEIVE_PLANETS_LISTS_FAILURE';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';
export const REMOVE_FILTER = 'REMOVE_FILTER';

const requestPlanetsList = () => ({
  type: REQUEST_PLANETS_LIST
,
});

const receivePlanetsListSuccess = ({ results }) => ({
  type: RECEIVE_PLANETS_LIST_SUCCESS,
  data: results,
});

const receivePlanetsListFailure = (error) => ({
  type: RECEIVE_PLANETS_LISTS_FAILURE,
  error,
});

export function fetchPlanetsList() {
  return (dispatch) => {
    dispatch(requestPlanetsList());

    return getPlanetsList()
      .then(
        (list) => dispatch(receivePlanetsListSuccess(list)),
        (error) => dispatch(receivePlanetsListFailure(error.message)),
      );
  };
}

export const filterPlanetsByName = (value) => ({
  type: FILTER_BY_NAME,
  value,
});

export const filterPlanetsByNumericValues = (estado) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  estado,
});

export const removeFilter = (estado) => ({
  type: REMOVE_FILTER,
  estado,
});
