export const CHANGE_VALUES = 'CHANGE_VALUES';
export const CREATE_NUMERIC_FILTER = 'CREATE_FILTER';

export const changeValue = (filter, value, id) => ({
  type: CHANGE_VALUES,
  value,
  filter,
  id,
});

export const createFilter = () => {
  return ({ type: CREATE_NUMERIC_FILTER });
}
