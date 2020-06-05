import { RECEIVE_PLANETS, REQUEST_FAIL, 
  REQUESTING_PLANETS, QUERY_BY_NAME, SAVE_FILTERS } from '../actions/index';

const initialState = {
  loading: false,
  data: [],
  error: null,
  filters: {
    filterByNumericValue: [],
    filterByName: { name: '' },
  },
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case REQUESTING_PLANETS:
      return {
        ...state,
        loading: true,
    }
    case RECEIVE_PLANETS: 
      return {
        ...state,
        data: action.payload.results,
        loading: false,
    }
    case REQUEST_FAIL: 
      return {
        ...state,
        error: action.payload.message,
        loading: false,
    }
    case QUERY_BY_NAME:
        return {
          ...state,
          filters: {
            ...state.filters,
            filterByName: { name: action.payload }
          },
        }
    case SAVE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValue: [
            ...state.filters.filterByNumericValue,
            {
              column: action.column,
              comparison: action.comparison,
              value: Number(action.value),
            }
          ]
        }
      }
    default:
      return state;
  }
}

export default reducer;