import { getStarWarsPlanetsData } from '../services/starwarsAPI';

export const REQUEST_STARWARS = 'REQUEST_STARWARS';
export const RECEIVE_STARWARS_SUCCESS = 'RECEIVE_STARWARS_SUCCESS';
export const RECEIVE_STARWARS_FAILURE = 'RECEIVE_STARWARS_FAILURE';

const requestStarWars = () => ({
  type: REQUEST_STARWARS,
});

const receiveStarWarsSuccess = () => ({ // NÃO ESQUECER DE DEFINIR NOS () OS DADOS QUE SERÃO BUSCADOS NA API
  type: RECEIVE_STARWARS_SUCCESS,
  name: 'Tatooine',
  rotation_period: '23',
  orbital_period: '304',
  diameter: '10465',
  climate: 'arid',
  gravity: '1 standard',
  terrain: 'desert',
  surface_water: '1',
  population: '200000',
});

const receiveStarWarsFailure = (error) => ({
  type: RECEIVE_STARWARS_FAILURE,
  error,
});

export function fetchStarWars() {
  return (dispatch) => {
    dispatch(requestStarWars());

    return getStarWarsPlanetsData()
      .then(
        (data) => dispatch(receiveStarWarsSuccess(data)),
        (error) => dispatch(receiveStarWarsFailure(error.message)),
      );
  };
}
