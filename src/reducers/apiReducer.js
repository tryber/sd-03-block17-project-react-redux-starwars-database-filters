import { REQUEST_PLANETS } from '../actions/index';
import { REQUEST_PLANETS_SUCCESS } from '../actions/index';
import { REQUEST_PLANETS_FAILURE } from '../actions/index';

const initialState = {
  isRequesting: false,
  error: '',
  data: [],
  optionData: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PLANETS: {
      return {
        ...state,
        isRequesting: true,
      };
    }

    case REQUEST_PLANETS_SUCCESS: {
      return {
        ...state,
        isRequesting: false,
        data: [...action.payload.results],
      };
    }

    case REQUEST_PLANETS_FAILURE: {
      return {
        ...state,
        isRequesting: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default apiReducer;
