import { FILTER_COLUMN, SELECT_CHANGED, TEXT_CHANGED, UNFILTER_COLUMN } from '../actions';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  columnFilter: [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
};

const searchReducer = (state = initialState, action) => {
  const { payload, text, type } = action;
  switch (type) {
    case TEXT_CHANGED:
      return {
        ...state,
        filterByName: {
          name: text,
        },
      };

    case SELECT_CHANGED:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues.concat(payload)],
      };

    case UNFILTER_COLUMN:
      return {
        ...state,
        columnFilter: state.columnFilter.filter(
          (column) => column !== payload,
        ),
      };

    case FILTER_COLUMN:
      return {
        ...state,
        columnFilter: [...state.columnFilter, payload],
      };

    default:
      return state;
  }
};

export default searchReducer;
