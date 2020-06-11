export const NUMERIC_FILTER = 'NUMERIC_FILTER';

export const filterByNumber = (numberSearch) => ({
  type: NUMERIC_FILTER,
  numberSearch,
});
