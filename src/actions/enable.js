import { ENABLE } from './types';

const enable = (payload) => ({
  type: ENABLE,
  payload,
});

export default enable;
