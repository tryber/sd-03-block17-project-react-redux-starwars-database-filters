const apiUrl = 'https://swapi-trybe.herokuapp.com/api/planets';
const SWPlanetApiRequest = () => fetch(apiUrl).then((response) => (
  response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
));

export default SWPlanetApiRequest;
