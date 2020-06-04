import { FILTER_BY_NAME } from './types';

// filters: { filterByName: { name }}
const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  payload: { filterByName: { name } },
});

export default filterByName;
