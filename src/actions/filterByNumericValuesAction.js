export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';

export const filterByNumericValuesAction = (filteredObj) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  filteredObj,
});
