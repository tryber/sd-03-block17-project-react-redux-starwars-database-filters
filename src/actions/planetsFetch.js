import apiFetch from '../services/apiFetch';
import { REQUEST_PLANETS, RECEIVE_PLANETS_SUCCESS, RECEIVE_PLANETS_FAILURE } from './types';

const requestPlanets = () => ({ type: REQUEST_PLANETS });

const planetsSuccessFetch = ({ results }) => ({
  type: RECEIVE_PLANETS_SUCCESS,
  payload: results,
});

const planetsFailureFetch = (error) => ({
  type: RECEIVE_PLANETS_FAILURE,
  payload: error,
});

export default function planetsFetch() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return apiFetch()
      .then(
        (data) => dispatch(planetsSuccessFetch(data)),
        (error) => dispatch(planetsFailureFetch(error.message)),
      );
  };
}
