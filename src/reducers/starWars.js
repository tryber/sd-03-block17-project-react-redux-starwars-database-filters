import {
  REQUEST_STARWARS,
  RECEIVE_STARWARS_SUCCESS,
  RECEIVE_STARWARS_FAILURE,
} from '../actions';
	
const INITIAL_STATE = {
  isFetching: false,
};
	
const starWars = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARWARS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_STARWARS_SUCCESS:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
        name: action.name, 
        rotation_period: action.rotation_period, 
        orbital_period: action.orbital_period, 
        diameter: action.diameter, 
        climate: action.climate, 
        gravity: action.gravity, 
        terrain: action.terrain, 
        surface_water: action.surface_water, 
        population: action.population,
      };
    case RECEIVE_STARWARS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state;
  }
}
	
export default starWars;
