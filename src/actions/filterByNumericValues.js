export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';

export const filterByNumericValues = (filteredObj) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  filteredObj,
});
