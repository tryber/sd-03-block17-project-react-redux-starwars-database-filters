export const DATA_API = 'DATA_API_SUCESS';
export const RECEIVE_ISS_LOCATION_FAILURE = 'RECEIVE_ISS_LOCATION_FAILURE';
export const NAME_SEARCHED = 'NAME_SEARCHED';
export const SUBMIT_OPTION_POPULATION = 'SUBMIT_OPTION_POPULATION';
export const ERASE = 'ERASE';
export const SORT = 'SORT';
export const inicialState = {
  showResults: false,
  data: [],
  filters:
  {
    columnFilters: [
      { name: 'all', avaliable: true },
      { name: 'population', avaliable: true },
      { name: 'orbital_period', avaliable: true },
      { name: 'diameter', avaliable: true },
      { name: 'rotation_period', avaliable: true },
      { name: 'surface_water', avaliable: true },
    ],
    filtered: false,
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  },
};

export function apiData(state = inicialState, action) {
  switch (action.type) {
    case DATA_API: return { ...state, data: action.data, showResults: true };
    case SORT: return { ...state, showResults: true, ...action.obj };
    case RECEIVE_ISS_LOCATION_FAILURE: return { ...state, data: action.error };
    case NAME_SEARCHED:
      return {
        ...state,
        filters: { ...state.filters, filtered: false, filterByName: { name: action.planetName } },
      };
    case ERASE: return {
      ...state,
      filters: {
        filtered: true,
        columnFilters: [...state.filters.columnFilters],
        filterByName: { name: '' },
        filterByNumericValues: action.obj,
      },
    };
    case SUBMIT_OPTION_POPULATION: return {
      ...state,
      filters: {
        filtered: true,
        columnFilters: [...state.filters.columnFilters],
        filterByName: { name: '' },
        filterByNumericValues: [...state.filters.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value }],
      },
    };
    default:
      return state;
  }
}
