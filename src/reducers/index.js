import {
  REQUEST_PLANETS,
  FETCH_PLANETS_SUCESS,
  FETCH_PLANETS_FAILURE,
} from '../actions/fetchPlanetsAction';

import {
  CHANGE_VALUES,
  CREATE_NUMERIC_FILTER,
  REMOVE_FILTER,
} from '../actions/NumFilterActions';

import { ON_CHANGE_ORDER, ACTIVATE_ORDER } from '../actions/orderActions';

import { TYPE_NAME } from '../actions/SearchTextAction';

const defaultNumericFilterElem = {
  column: '',
  comparison: '',
  value: '',
};

const INITIAL_STATE = {
  filters: {
    filterByName: { name: '' },
    inProgress: defaultNumericFilterElem,
    filterByNumericValues: [],
    order: { column: 'Name', sort: 'ASC' },
    orderInProgerss: { column: 'Name', sort: 'ASC'},
  },
  isFetching: true,
  data: [],
  error: '',
};

const allValuesSetted = (obj) => (Object.values(obj).every((value) => value !== ''));

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
  const { filterByNumericValues, inProgress, orderInProgerss } = filters;
  switch (action.type) {
    case TYPE_NAME:
      return {
        ...filters,
        filterByName: { name: action.text },
      };

    case CHANGE_VALUES:
      const changedFilter = {
        ...inProgress,
        [action.filter]: action.value,
      };
      return ({
        ...filters,
        inProgress: changedFilter,
      });

    case CREATE_NUMERIC_FILTER:
      if (allValuesSetted(inProgress)) {
        return ({
          ...filters,
          inProgress: defaultNumericFilterElem,
          filterByNumericValues: [...filterByNumericValues, inProgress],
        });
      }
      return filters;

    case REMOVE_FILTER:
      return ({
        ...filters,
        filterByNumericValues: [
          ...filterByNumericValues.slice(0, action.id),
          ...filterByNumericValues.slice(action.id + 1),
        ],
      });

    case ON_CHANGE_ORDER:
      return ({
        ...filters,
        orderInProgerss: {
          ...orderInProgerss,
          [action.prop]: action.value,
        }
      })

    case ACTIVATE_ORDER:
      return ({
        ...filters,
        order: orderInProgerss,
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
    case REMOVE_FILTER:
    case ON_CHANGE_ORDER:
    case ACTIVATE_ORDER:
      return {
        ...state,
        filters: filtersReducer(state.filters, action),
      };
    default:
      return state;
  }
};

export default Reducer;
