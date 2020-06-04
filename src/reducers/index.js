export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS = 'RECEIVE_PLANETS';
export const FILTER_NAME = 'FILTER_NAME';

const initialState = {
  filters: {},
  data: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
      };
    case RECEIVE_PLANETS:
      return {
        ...state,
        data: action.data.results,
      };
    case FILTER_NAME:
      return {
        ...state,
        filters: { filterName: { name: action.name } },
      };
    default:
      return state;
  }
};

export default dataReducer;
