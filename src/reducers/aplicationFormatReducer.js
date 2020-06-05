import { CHANGE_TABLE } from '../actions/changeTableActions';

export const INITIAL_STATE = false;

export const aplicationFormatReducer = (format = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TABLE: return action.isClassicTable;
    default: return format;
  }
};

export default aplicationFormatReducer;
