export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUE = 'FILTER_BY_NUMERIC_VALUE';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const filterByName = (value) => ({
  type: FILTER_BY_NAME,
  value,
});

export const filterByNumericValue = (value) => ({
  type: FILTER_BY_NUMERIC_VALUE,
  value,
});

export const removeFilter = (value) => ({
  type: REMOVE_FILTER,
  value,
});
