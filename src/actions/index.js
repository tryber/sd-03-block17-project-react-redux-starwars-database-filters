import request from '../service/requestData';

export const REQUESTING = 'REQUESTING';
export const RECEIVED = 'RECEIVED';
export const FAILURE = 'FEILURE';

export const requesting = () => ({
  type: REQUESTING,
});

export const received = (data) => ({
  type: RECEIVED,
  payload: data,
});

export const failure = (err) => ({
  type: FAILURE,
  err,
});

export const requestAction = () => (dispatch) => {
  dispatch(requesting());

  return request()
    .then(
      (results) => dispatch(received(results)),
      (err) => dispatch('dispatch erros', err),
    );
};
