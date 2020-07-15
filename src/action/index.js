import getPlanets from '../services/requestAPI';

const resquestPlanets = () => ({
  type: 'REQUEST_PLANETS',
});

const successPlanets = (data) => ({
  type: 'SUCCESS_PLANETS',
  data,
});

export function requestFetch() {
  return (dispatch) => {
    dispatch(resquestPlanets());
    return getPlanets().then((json) => dispatch(successPlanets(json.results)));
  };
}

export const filterByName = (name) => ({
  type: 'FILTER_BY_NAME',
  name,
});

export const filterByNumericValues = (column, comparison, value) => ({
  type: 'FILTER_BY_NUMERIC',
  column,
  comparison,
  value,
});

export const removeFilterNumeric = (obj) => ({
  type: 'REMOVE_NUMERIC',
  obj,
});

export const orderColumns = (column, sort) => ({
  type: 'ORDER_COLUMN',
  column,
  sort,
});
