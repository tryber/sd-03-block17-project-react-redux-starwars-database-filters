const planet = 'https://swapi-trybe.herokuapp.com/api/planets/';

const RootAPI = () => fetch(planet).then((response) => (response.json()
  .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
));

export default RootAPI;
