import * as types from '../actions/actionTypes';

const FilterNames = (name) => ({
  type: types.FILTER_NAMES,
  name,
});

export default FilterNames;
