import getPlanets from '../services/apiRequests';
import { REQUEST_PLANETS, RECEIVE_PLANETS_SUCCESS, RECEIVE_PLANETS_FAILURE } from './types';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanetsSuccess = ({ results }) => ({
  type: RECEIVE_PLANETS_SUCCESS,
  payload: results,
});

const receivePlanetsFailure = (error) => ({
  type: RECEIVE_PLANETS_FAILURE,
  payload: error,
});

export default function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return getPlanets()
      .then(
        (data) => dispatch(receivePlanetsSuccess(data)),
        (error) => dispatch(receivePlanetsFailure(error.message)),
      );
  };
}
