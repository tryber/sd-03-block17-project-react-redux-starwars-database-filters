export const NUMERIC_FILTER = 'NUMERIC_FILTER';

export const filterByNumber = (usa) => ({
  type: NUMERIC_FILTER,
  payload: usa,
});
