export const DATA_API = 'DATA_API_SUCESS';
export const REQUESTING_STAR_WARS_API = 'REQUESTING_STAR_WARS_API';
export const RECEIVE_ISS_LOCATION_FAILURE = 'RECEIVE_ISS_LOCATION_FAILURE';
export const inicialState = {
  isFething: false,
  showResults: false,
  data: {
    results: {},
  },
};

export function apiData(state = inicialState, action) {
  switch (action.type) {
    case REQUESTING_STAR_WARS_API:
      return {
        ...state,
        isFething: true,
      };
    case DATA_API:
      return {
        ...state,
        data: action.data,
        isFething: false,
        showResults: true,
      };
    case RECEIVE_ISS_LOCATION_FAILURE:
      return {
        ...state,
        isFething: false,
        error: action.error,
      };
    default:
      return state;
  }
}
