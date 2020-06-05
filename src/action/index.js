import apiPlanets from '../services/required';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const SUCCESS_PLANETS = 'SUCCESS_PLANETS';
export const FAILURE_PLANETS = 'FAILURE_PLANETS';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC = 'FILTER_BY_NUMERIC';
export const REMOVE_NUMERIC = 'REMOVE_NUMERIC';
export const ORDER_COLUMN = 'ORDER_COLUMN';

const resquestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const successPlanets = (data) =>
  ({
    type: SUCCESS_PLANETS,
    data,
  });

const failurePlanets = (error) => ({
  type: FAILURE_PLANETS,
  error,
});

export function requestFetch() {
  return (dispatch) => {
    dispatch(resquestPlanets());

    return apiPlanets()
      .then(
        (json) => dispatch(successPlanets(json.results)),
        (error) => dispatch(failurePlanets(error)),
      );
  };
}

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export const filterByNumericValues = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC,
  column,
  comparison,
  value,
});

export const removeFilterNumeric = (obj) => ({
  type: REMOVE_NUMERIC,
  obj,
});

export const orderColumns = (column, sort) => ({
  type: ORDER_COLUMN,
  column,
  sort,
});
