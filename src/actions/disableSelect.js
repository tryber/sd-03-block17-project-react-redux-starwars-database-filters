import { DISABLE_SELECT } from './types';

const disableSelect = (payload) => ({
  type: DISABLE_SELECT,
  payload,
});

export default disableSelect;
