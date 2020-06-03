export const DATA_API = 'DATA_API_SUCESS';
export const REQUESTING_STAR_WARS_API = 'REQUESTING_STAR_WARS_API';
export const RECEIVE_ISS_LOCATION_FAILURE = 'RECEIVE_ISS_LOCATION_FAILURE';
export const NAME_SEARCHED = 'NAME_SEARCHED';
export const SUBMIT_OPTION_POPULATION = 'SUBMIT_OPTION_POPULATION';
export const inicialState = {
  showResults: false,
  data: [],
  filters:
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          filtered: false,
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
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
    case NAME_SEARCHED:
      return {
        ...state,
        filters: {
          filterByName: { name: action.planetName },
          filterByNumericValues: [
            {
              filtered: false,
            },
          ],
        },
      };
    case SUBMIT_OPTION_POPULATION:
      return {
        ...state,
        filters: {
          filterByName: {
            name: '',
          },
          filterByNumericValues: [
            {
              filtered: true,
              column: action.column,
              comparison: action.comparison,
              value: action.value,
            },
          ],
        },
      };
    default:
      return state;
  }
}
