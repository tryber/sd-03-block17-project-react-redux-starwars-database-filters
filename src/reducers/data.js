export const DATA_API = 'DATA_API_SUCESS';
export const REQUESTING_STAR_WARS_API = 'REQUESTING_STAR_WARS_API';
export const RECEIVE_ISS_LOCATION_FAILURE = 'RECEIVE_ISS_LOCATION_FAILURE';
export const inicialState = {
  showResults: false,
  data: [],
};

export function apiData(state = inicialState, action) {
  switch (action.type) {
    case REQUESTING_STAR_WARS_API:
      return {
        ...state,
      };
    case DATA_API:
      return {
        ...state,
        data: action.data,
        showResults: true,
      };
    case RECEIVE_ISS_LOCATION_FAILURE:
      return {
        ...state,
        data: action.error,
      };
    default:
      return state;
  }
}
