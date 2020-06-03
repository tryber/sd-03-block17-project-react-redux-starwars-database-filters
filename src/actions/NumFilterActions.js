export const CHANGE_VALUES = 'CHANGE_VALUES';

const changeValue = (filter, value, id) => ({
  type: CHANGE_VALUES,
  value,
  filter,
  id,
});

export default changeValue;
