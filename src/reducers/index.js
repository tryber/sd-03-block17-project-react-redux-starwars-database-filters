import dataReducer, { INITIAL_STATE as props } from './dateReducer';
import filtersReducer, { INITIAL_STATE as filters } from './filtersReducer';
import aplicationFormatReducer, { INITIAL_STATE as format } from './aplicationFormatReducer';

import {
  REQUEST_PLANETS,
  FETCH_PLANETS_SUCESS,
  FETCH_PLANETS_FAILURE,
} from '../actions/fetchPlanetsAction';
import { CHANGE_VALUES, CREATE_NUMERIC_FILTER, REMOVE_FILTER } from '../actions/NumFilterActions';
import { ON_CHANGE_ORDER, ACTIVATE_ORDER } from '../actions/orderActions';
import { TYPE_NAME } from '../actions/SearchTextAction';
import { CHANGE_TABLE } from '../actions/changeTableActions';

const INITIAL_STATE = {
  filters,
  ...props,
  format,
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
    case FETCH_PLANETS_SUCESS:
    case FETCH_PLANETS_FAILURE:
      return dataReducer(state, action);

    case TYPE_NAME:
    case CHANGE_VALUES:
    case CREATE_NUMERIC_FILTER:
    case REMOVE_FILTER:
    case ON_CHANGE_ORDER:
    case ACTIVATE_ORDER:
      return {
        ...state,
        filters: filtersReducer(state.filters, action),
      };

    case CHANGE_TABLE:
      return {
        ...state,
        format: aplicationFormatReducer(state.format, action),
      };

    default: return state;
  }
};

export default Reducer;
