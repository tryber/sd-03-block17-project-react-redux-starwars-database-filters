import {
  REQUEST_PLANETS,
  FETCH_PLANETS_SUCESS,
  FETCH_PLANETS_FAILURE,
} from '../actions/fetchPlanetsAction';

import {
  CHANGE_VALUES,
  CREATE_NUMERIC_FILTER,
  ACTIVATE_NUMERIC_FILTER,
} from '../actions/NumFilterActions';

import { TYPE_NAME } from '../actions/SearchTextAction';

const defaultNumericFilterElem = {
  column: '',
  comparison: '',
  value: '',
};

const INITIAL_STATE = {
  filters: {
    filterByName: { name: '' },
    inProgresNumericFilter: [defaultNumericFilterElem],
    filterByNumericValues: [defaultNumericFilterElem],
  },
  isFetching: true,
  data: [],
  error: '',
};

const changeElemOfNewArray = (array, index, elem) => ([
  ...array.slice(0, index),
  elem,
  ...array.slice(index + 1),
]);

function dataReducer(state, action) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return ({ ...state, isFetching: true });

    case FETCH_PLANETS_SUCESS:
      return ({
        ...state,
        isFetching: false,
        data: [...action.planets],
      });

    case FETCH_PLANETS_FAILURE:
      return ({
        ...state,
        isFetching: false,
        error: action.error,
      });

    default:
      return state;
  }
}

function filtersReducer(filters, action) {
  const { filterByNumericValues, inProgresNumericFilter } = filters;
  switch (action.type) {
    case TYPE_NAME:
      return {
        ...filters,
        filterByName: { name: action.text },
      };

    case CHANGE_VALUES:
      const changedFilter = {
        ...inProgresNumericFilter[action.id],
        [action.filter]: action.value,
      };
      return ({
        ...filters,
        inProgresNumericFilter: changeElemOfNewArray(
          inProgresNumericFilter,
          action.id,
          changedFilter,
        ),
      });

    case CREATE_NUMERIC_FILTER:
      return ({
        ...filters,
        inProgresNumericFilter: [
          ...inProgresNumericFilter,
          defaultNumericFilterElem,
        ],
        filterByNumericValues: [
          ...filterByNumericValues,
          defaultNumericFilterElem,
        ],
      });

    case ACTIVATE_NUMERIC_FILTER:
      return ({
        ...filters,
        filterByNumericValues: changeElemOfNewArray(
          filterByNumericValues,
          action.id,
          inProgresNumericFilter[action.id],
        ),
      });

    default:
      return filters;
  }
}

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
    case FETCH_PLANETS_SUCESS:
    case FETCH_PLANETS_FAILURE:
      return dataReducer(state, action);

    case TYPE_NAME:
    case CHANGE_VALUES:
    case CREATE_NUMERIC_FILTER:
    case ACTIVATE_NUMERIC_FILTER:
      return {
        ...state,
        filters: filtersReducer(state.filters, action),
      };
    default:
      return state;
  }
};

export default Reducer;
