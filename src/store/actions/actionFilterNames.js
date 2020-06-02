import * as types from './actionTypes';

const actionFilterNames = (name) => ({
  type: types.FILTER_NAMES,
  name,
});

export default actionFilterNames;
