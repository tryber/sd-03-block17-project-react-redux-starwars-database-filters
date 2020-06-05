import {
  FILTER_BY_NAME,
  FILTER_BY_NUMERIC_VALUE,
  DELETE_FILTER,
  SORT,
} from '../actions/index';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
  order: {
    column: 'Name',
    sort: 'ASC',
  }
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_NAME: {
      return {
        ...state,

        filterByName: {
          name: action.payload,
        },
      };
    }

    case FILTER_BY_NUMERIC_VALUE: {
      const { column, comparison, value } = action.payload;
      return {
        ...state,
        filterByNumericValues:
          state.filterByNumericValues[0].column === ''
            ? [{ column, comparison, value }]
            : [...state.filterByNumericValues, { column, comparison, value }],
      };
    }

    case DELETE_FILTER: {
      return {
        ...state,
        filterByNumericValues:
          state.filterByNumericValues.filter((filtereds) => filtereds.column !== action.payload),
      };
    }

    case SORT: {
      const { column, sort } = action.payload;
      return {
        ...state,
        order: {
          column,
          sort,
        }
      }
    }

    default:
      return state;
  }
};

export default filters;
