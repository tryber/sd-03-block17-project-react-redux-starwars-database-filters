export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUE = 'FILTER_BY_NUMERIC_VALUE';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const SORT_COLUMNS = 'SORT_COLUMNS';

export const filterByName = (value) => ({
  type: FILTER_BY_NAME,
  value,
});

export const filterByNumericValue = (...parameters) => ({
  type: FILTER_BY_NUMERIC_VALUE,
  parameters,
});

export const removeFilter = (value) => ({
  type: REMOVE_FILTER,
  value,
});

export const sortColumns = (value) => ({
  type: SORT_COLUMNS,
  value,
});
