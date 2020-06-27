import fetchAPI from '../services/starWarsAPI';
import { REQUEST_API, RECEIVE_API_SUCCESS, RECEIVE_API_FAILURE } from './types';

const requestPlanets = () => ({
  type: REQUEST_API,
});

const receiveAPISuccess = ({ results }) => ({
  type: RECEIVE_API_SUCCESS,
  data: results,
});

const receiveAPIFailure = (error) => ({
  type: RECEIVE_API_FAILURE,
  payload: error,
});

export default function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return fetchAPI()
      .then(
        (data) => dispatch(receiveAPISuccess(data)),
        (error) => dispatch(receiveAPIFailure(error.message)),
      );
  };
}
