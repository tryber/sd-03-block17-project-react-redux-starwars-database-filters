import { DISABLE } from './types';

const disable = (payload) => ({
  type: DISABLE,
  payload,
});

export default disable;
