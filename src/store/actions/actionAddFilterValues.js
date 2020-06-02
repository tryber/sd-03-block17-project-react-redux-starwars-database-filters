import * as types from './actionTypes';

const actionAddFilterValues = (column, comparison, value) => ({
  type: types.ADD_FILTER_VALUE,
  column,
  comparison,
  value,
});

export default actionAddFilterValues;
