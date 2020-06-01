import * as types from './actionTypes';
import SW_API from '../../services/swAPI';

const requestAPI = () => ({ type: types.REQUEST_API });

const receiveSuccess = (data) => ({
  type: types.RECEIVE_API_SUCCESS,
  data,
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
        (data) => dispatch(receiveSuccess(data)),
        (error) => dispatch(receiveFailure(error.message)),
      );
  };
}
