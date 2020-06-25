import apiPlanets from '../service/fetchAPI';

export const REQUEST_API = 'REQUEST_API';
export const RECEIVED_API = 'RECEIVED_API';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const apiRequest = () => ({
  type: REQUEST_API,
});

const apiReceived = (data) => ({
  type: RECEIVED_API,
  data,
});

const apiFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});

export function getApi() {
  return (dispatch) => {
    dispatch(apiRequest());
    return apiPlanets()
      .then(
        (json) => dispatch(apiReceived(json.results)),
        (error) => dispatch(apiFailed(error)),
      );
  };
}
