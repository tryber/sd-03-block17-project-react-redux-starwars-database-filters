export const REMOVE_FILTER = 'REMOVE_FILTER';

export const removeFilters = (exclude) => ({
  type: REMOVE_FILTER,
  exclude,
});
