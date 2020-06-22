const BASE_API = 'https://swapi-trybe.herokuapp.com/api';

const getStarWarsPlanetsData = () => (
  fetch(`${BASE_API}/planets`)
  .then((response) => (
    response
    .json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
);

export default getStarWarsPlanetsData;
