import {
  REQUEST_PLANETS_INFORMATION,
  PLANET_INFO_REQUEST_SUCESS,
  PLANET_INFO_REQUEST_FAILURE,
  FILTER_BY_TEXT,
  FILTER_BY_NUMERIC_VALUES,
  REMOVE_FILTERS,
  SORT_COLUMN,
} from './actions';
import getAllPlanetsFromAPI from '../services/starWarsAPI';

const requestPlanetsInfo = () => ({
  type: REQUEST_PLANETS_INFORMATION,
  loading: true,
});

const requestPlanetInfoSucess = ({ results }) => ({
  type: PLANET_INFO_REQUEST_SUCESS,
  loading: false,
  data: results,
});

const requestPlantInfoFailure = (error) => ({
  type: PLANET_INFO_REQUEST_FAILURE,
  loading: false,
  data: error,
});

function fetchingPlanetsInfo() {
  return (dispatch) => {
    dispatch(requestPlanetsInfo());
    return getAllPlanetsFromAPI().then(
      (planet) => dispatch(requestPlanetInfoSucess(planet)),
      (error) => dispatch(requestPlantInfoFailure(error.message)),
    );
  };
}

const filterByText = (name) => ({
  type: FILTER_BY_TEXT,
  name,
});

const filterByNumericValues = (...params) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  params,
});

const removeFilters = (value) => ({
  type: REMOVE_FILTERS,
  value,
});

const sortColumns = (value) => ({
  type: SORT_COLUMN,
  value,
});

export {
  requestPlanetsInfo,
  requestPlanetInfoSucess,
  requestPlantInfoFailure,
  fetchingPlanetsInfo,
  filterByText,
  filterByNumericValues,
  removeFilters,
  sortColumns,
};
