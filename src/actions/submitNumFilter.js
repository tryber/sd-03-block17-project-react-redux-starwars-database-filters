export const SUBMIT_FILTER = 'SUBMIT_FILTER';
export const submitNumericFilter = (args) => ({
  type: SUBMIT_FILTER,
  payload: { ...args },
});
