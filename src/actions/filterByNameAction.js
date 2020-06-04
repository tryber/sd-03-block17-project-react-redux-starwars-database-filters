export const FILTER_BY_NAME = 'FILTER_BY_NAME';

export const filterByNameAction = (typedText) => ({
  type: FILTER_BY_NAME,
  typedText,
});
