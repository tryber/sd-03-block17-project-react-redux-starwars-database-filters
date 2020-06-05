import { REMOVE_FILTER } from './types';

const removeFilter = (payload) => ({
  type: REMOVE_FILTER,
  payload,
});

export default removeFilter;
