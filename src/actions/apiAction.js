import SWPlanetApiRequest from '../services/SWPlanetApiRequest';
import {
  API_REQUEST,
  API_RECIEVE_SUCCESS,
  API_RECIVE_FAILURE,
  FILTER_BY_PLANET_TEXT,
} from '../services/Types';

export const apiRequest = () => ({
  type: API_REQUEST,
  loading: true,
});

export const reciveApiDataSuccess = ({ results }) => ({
  type: API_RECIEVE_SUCCESS,
  loading: false,
  data: results,
});

export const recieveApiDataFailure = (error) => ({
  type: API_RECIVE_FAILURE,
  loading: false,
  data: error,
});

export default function getApiData() {
  return (dispatch) => {
    dispatch(apiRequest());
    return SWPlanetApiRequest()
      .then(
        (planet) => dispatch(reciveApiDataSuccess(planet)),
        (error) => dispatch(recieveApiDataFailure(error.message)),
      );
  };
}

export const filterByPlanetText = (name) => ({
  type: FILTER_BY_PLANET_TEXT,
  name,
});
