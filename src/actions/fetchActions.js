import fetchSWAPI from '../service/swAPI';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVED_DATA = 'RECEIVED_DATA';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const requestData = () => ({
  type: REQUEST_DATA,
});
export const sucessRequestAction = (data) => ({
  type: RECEIVED_DATA,
  data,
});

export const failedRequestAction = (error) => ({
  type: FAILED_REQUEST,
  error,
});

export function handleFetch() {
  return (dispatch) => {
    dispatch(requestData());
    fetchSWAPI().then(
      ({ results }) => dispatch(sucessRequestAction(results)),
      (error) => dispatch(failedRequestAction(error)),
    );
  };
}
