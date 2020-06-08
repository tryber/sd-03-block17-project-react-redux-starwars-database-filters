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

const doMoreFilter = (column) => ({
  type: 'DO_FILTER',
  column,
});

const removeFilter = (filter) => ({
  type: 'REMOVE_FILTER',
  filter,
});

const returnColumn = (column) => ({
  type: 'RETURN_COLUMN',
  column,
});

const sortColumns = (column, sort) => ({
  type: 'SORT_COLUMNS',
  column,
  sort,
});

const changedataASC = (column) => ({
  type: 'CHANGE_DATAASC',
  column,
});

const changedataDESC = (column) => ({
  type: 'CHANGE_DATADESC',
  column,
});

function fetchData() {
  return (dispatch) => {
    getInfo()
      .then((data) => dispatch(requestInfo(data)));
  };
}

export {
  getByName,
  fetchData,
  getByColumn,
  getByComparison,
  getByValue,
  getByNumericValue,
  doMoreFilter,
  removeFilter,
  returnColumn,
  sortColumns,
  changedataASC,
  changedataDESC,
};
