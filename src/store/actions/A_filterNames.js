import * as types from '../actions/actionTypes';

const A_filterNames = (name) => ({
  type: types.FILTER_NAMES,
  name,
});

export default A_filterNames;
