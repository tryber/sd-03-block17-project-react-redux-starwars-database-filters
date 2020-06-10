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

export const TEXT_CHANGED = 'TEXT_CHANGED';

export const SELECT_CHANGED = 'SELECT_CHANGED';

export const textChanged = (text) => ({
  type: TEXT_CHANGED,
  text,
});

export const selectChanged = (...select) => ({
  type: SELECT_CHANGED,
  payload: select,
});

export const FILTER_COLUMN = 'FILTER_COLUMN';

export const UNFILTER_COLUMN = 'UNFILTER_COLUMN';

export const filterColumn = (column) => ({
  type: FILTER_COLUMN,
  payload: column,
});

export const unfilterColumn = (column) => ({
  type: UNFILTER_COLUMN,
  payload: column,
});
