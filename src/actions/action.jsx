import getInfo from '../services/starWarsAPI';

const requestInfo = (data) => ({
  type: 'REQUEST_DATA',
  data,
});

const getByName = (name) => ({
  type: 'FILTER_NAME',
  name,
});

const getByColumn = (column) => ({
  type: 'FILTER_COLUMN',
  column,
});

const getByComparison = (comparison) => ({
  type: 'FILTER_COMPARISON',
  comparison,
});

const getByValue = (value) => ({
  type: 'FILTER_VALUE',
  value,
});

const getByNumericValue = (column, comparison, value) => ({
  type: 'FILTER_NUMERIC',
  column,
  comparison,
  value,
});

function fetchData() {
  return (dispatch) => {
    getInfo()
      .then((data) => dispatch(requestInfo(data)));
  };
}

export { getByName, fetchData, getByColumn, getByComparison, getByValue, getByNumericValue };
