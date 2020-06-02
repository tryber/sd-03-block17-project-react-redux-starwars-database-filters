import * as types from './actionTypes';

const actionRemoveFilterValues = (index) => ({
  type: types.REMOVE_FILTER_VALUE,
  index,
});

export default actionRemoveFilterValues;
