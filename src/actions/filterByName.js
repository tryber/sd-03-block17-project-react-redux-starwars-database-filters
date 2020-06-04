import { FILTER_BY_NAME } from './types';

const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  payload: { filterByName: { name } },
});

export default filterByName;
