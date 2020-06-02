import * as types from './actionTypes';

const actionAddFilterValues = (column, comparison, value) => ({
  type: types.FILTER_NAMES,
  column,
  comparison,
  value,
});

export default actionAddFilterValues;
