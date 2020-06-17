const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = () => fetch(api).then((planets) => (planets.json()
  .then((data) => (planets.ok ? Promise.resolve(data) : Promise.reject(data)))
));

export default fetchAPI;
