const BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchSWAPI = () => fetch(BASE_URL)
  .then((response) => response
    .json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));
export default fetchSWAPI;
