import { ENABLE_SELECT } from './types';

const enableSelect = (payload) => ({
  type: ENABLE_SELECT,
  payload,
});

export default enableSelect;
