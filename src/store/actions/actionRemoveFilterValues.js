import * as types from './actionTypes';

const actionRemoveFilterValues = (index, column) => ({
  type: types.REMOVE_FILTER_VALUE,
  index,
  column,
});

export default actionRemoveFilterValues;
