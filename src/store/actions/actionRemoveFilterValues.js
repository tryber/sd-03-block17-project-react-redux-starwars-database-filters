import * as types from './actionTypes';

const actionRemoveFilterValues = (column) => ({
  type: types.REMOVE_FILTER_VALUE,
  column,
});

export default actionRemoveFilterValues;
