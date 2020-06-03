import SWPlanetApiRequest from '../services/SWPlanetApiRequest';

export const API_REQUEST = 'API_REQUEST';
export const API_RECIEVE_SUCCESS = 'API_RECIEVE_SUCCESS';
export const API_RECIVE_FAILURE = 'API_RECIEVE_FAILURE';

const apiRequest = () => ({
  type: API_REQUEST,
});

const reciveApiDataSuccess = ({ response }) => ({
  type: API_RECIEVE_SUCCESS,
  data: response,
});

const recieveApiDataFailure = (error) => ({
  type: API_RECIVE_FAILURE,
  error,
});

export default function getApiData() {
  return (dispatch) => {
    dispatch(apiRequest());

    return SWPlanetApiRequest()
      .then(
        (data) => dispatch(reciveApiDataSuccess(data)),
        (error) => dispatch(recieveApiDataFailure(error.message)),
      );
  };
}
