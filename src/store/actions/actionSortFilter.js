import * as types from './actionTypes';

const actionSortFilter = (order) => ({
  type: types.SORT_FILTER,
  order,
});

export default actionSortFilter;
