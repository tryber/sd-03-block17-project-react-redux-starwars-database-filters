import fetchAPI from '../services/starWarsAPI';
import {
  REQUEST_API,
  RECEIVE_API_SUCCESS,
  RECEIVE_API_FAILURE,
  FILTER_BY_NAME,
  FILTER_BY_NUMERIC_VALUES,
  ORDER_COLUMN,
  REMOVE_FILTER_BY_NUMERIC_VALUES,
} from './types';

const requestPlanets = () => ({
  type: REQUEST_API,
});

const receiveAPISuccess = ({ results }) => ({
  type: RECEIVE_API_SUCCESS,
  planets: results,
});

const receiveAPIFailure = (error) => ({
  type: RECEIVE_API_FAILURE,
  payload: error,
});

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export const filterByNumericValues = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  column,
  comparison,
  value,
});

export const orderColumns = (column, sort) => ({
  type: ORDER_COLUMN,
  column,
  sort,
});

export const removeFilterNumeric = (obj) => ({
  type: REMOVE_FILTER_BY_NUMERIC_VALUES,
  obj,
});

export default function fetchRequestPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return fetchAPI().then(
      (data) => dispatch(receiveAPISuccess(data)),
      (error) => dispatch(receiveAPIFailure(error.message)),
    );
  };
}
