import { CHANGE_ORDER } from './types';

const changeOrder = (payload) => ({
  type: CHANGE_ORDER,
  payload,
});

export default changeOrder;
