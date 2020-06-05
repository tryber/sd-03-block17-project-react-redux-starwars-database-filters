import { ORDER_CHANGE } from './types';

const orderChange = (payload) => ({
  type: ORDER_CHANGE,
  payload,
});

export default orderChange;
