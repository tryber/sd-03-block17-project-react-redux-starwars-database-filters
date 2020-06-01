import apiSWRequest from '../service/apiSWRequest';

export const API_REQUEST = 'API_REQUEST';
export const API_RECEIVE_SUCCESS = 'API_RECEIVE_SUCCESS';
export const API_RECEIVE_FAILURE = 'API_RECEIVE_FAILURE';

const apiRequestControl = () => ({
  type: API_REQUEST,
});

const receiveApiDataSuccess = ({ results }) => ({
  type: API_RECEIVE_SUCCESS,
  data: results,
});

const receiveApiDataFailure = (error) => ({
  type: API_RECEIVE_FAILURE,
  errorMessage: error,
});

export function getApiDataSw() {
  return (dispatch) => {
    dispatch(apiRequestControl());

    return apiSWRequest()
      .then(
        (dataSW) => dispatch(receiveApiDataSuccess(dataSW)),
        (error) => dispatch(receiveApiDataFailure(error.message)),
      );
  };
}
