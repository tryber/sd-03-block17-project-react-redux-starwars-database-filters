import * as types from './actionTypes';
import SW_API from '../../services/swAPI';

const requestAPI = () => ({ type: types.REQUEST_API });

const receiveSuccess = (response) => ({
  type: types.RECEIVE_API_SUCCESS,
  results: response.results,
});

const receiveFailure = (error) => ({
  type: types.RECEIVE_API_FAILURE,
  error,
});

export default function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestAPI());
    return SW_API()
      .then(
        (response) => dispatch(receiveSuccess(response)),
        (error) => dispatch(receiveFailure(error.message)),
      );
  };
}
