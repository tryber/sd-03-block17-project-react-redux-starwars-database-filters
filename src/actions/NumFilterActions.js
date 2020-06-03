export const CHANGE_VALUES = 'CHANGE_VALUES';
export const ACTIVATE_NUMERIC_FILTER = 'ACTIVATE_NUMERIC_FILTER';
export const CREATE_NUMERIC_FILTER = 'CREATE_FILTER';

export const changeValue = (filter, value, id) => ({
  type: CHANGE_VALUES,
  value,
  filter,
  id,
});

export const createFilter = () => ({ type: CREATE_NUMERIC_FILTER });

export const activateFilter = (id) => ({
  type: ACTIVATE_NUMERIC_FILTER,
  id,
});
