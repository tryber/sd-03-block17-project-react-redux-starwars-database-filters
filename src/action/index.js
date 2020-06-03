import apiPlanets from '../services/required';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const SUCCESS_PLANETS = 'SUCCESS_PLANETS';
export const FAILURE_PLANETS = 'FAILURE_PLANETS';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC = 'FILTER_BY_NUMERIC';

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

export const filterByName = (name, data) => ({
  type: FILTER_BY_NAME,
  name,
  data,
});

export const filterByNumericValues = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC,
  column,
  comparison,
  value,
});
