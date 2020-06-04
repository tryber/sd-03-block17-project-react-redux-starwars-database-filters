export const ON_CHANGE_ORDER = 'ON_CHANGE_ORDER';
export const ACTIVATE_ORDER = 'ACTIVATE_ORDER';

export const changeOrder = (prop, value) => ({
  type: ON_CHANGE_ORDER,
  value,
  prop,
});

export const activateOrder = () => ({
  type: ACTIVATE_ORDER,
});
