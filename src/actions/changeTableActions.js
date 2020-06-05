export const CHANGE_TABLE = 'CHANGE_TABLE';

export const changeTable = (isClassicTable) => ({
  type: CHANGE_TABLE,
  isClassicTable,
});
