import {
  REQUEST_PLANETS_INFORMATION,
  PLANET_INFO_REQUEST_SUCESS,
  PLANET_INFO_REQUEST_FAILURE,
} from './actions';
import { getAllPlanetsFromAPI } from '../services/starWarsAPI';

const requestPlanetsInfo = () => ({
  type: REQUEST_PLANETS_INFORMATION,
  loading: true,
});

const requestPlanetInfoSucess = (data) => ({
  type: PLANET_INFO_REQUEST_SUCESS,
  loading: false,
});

const requestPlantInfoFailure = (error) => ({
  type: PLANET_INFO_REQUEST_FAILURE,
  loading: false,
  error,
});

function fetchingPlanetsInfo() {
  return (dispatch) => {
    dispatch(requestPlanetsInfo());
    return getAllPlanetsFromAPI().then(
      (planets) => dispatch(requestPlanetInfoSucess(planets)),
      (error) => dispatch(requestPlantInfoFailure(error)),
    );
  };
}

export {
  requestPlanetsInfo,
  requestPlanetInfoSucess,
  requestPlantInfoFailure,
  fetchingPlanetsInfo,
};
