const STARWARS_PLANETS_BASE_API = 'https://swapi-trybe.herokuapp.com/api/planets';

const getPlanets = () => fetch(STARWARS_PLANETS_BASE_API).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export default getPlanets;
