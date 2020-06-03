import { FILTER_BY_NUMERIC_VALUE } from './types';

const filterByNumericValue = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC_VALUE,
  payload: { column, comparison, value: parseInt(value, 10) },
});

export default filterByNumericValue;
