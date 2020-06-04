export const SORT_TABLE = 'SORT_TABLE';

export const choosedColToSortAction = (sortObj) => ({
  type: SORT_TABLE,
  sortObj,
});
