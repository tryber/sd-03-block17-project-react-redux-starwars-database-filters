const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = () => fetch(api)
  .then((response) => response.json())
  .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)));

export default fetchAPI;
