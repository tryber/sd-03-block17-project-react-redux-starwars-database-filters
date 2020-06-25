export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC = 'FILTER_BY_NUMERIC';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const SORT_COLUMN = 'SORT_COLUMN';

export const filterByNameAction = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export const filterByNumericValues = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC,
  column,
  comparison,
  value,
});

export const removeFilterAction = (index) => ({
  type: REMOVE_FILTER,
  index,
});

export const sortColumns = (column, sort) => ({
  type: SORT_COLUMN,
  column,
  sort,
});
