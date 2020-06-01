const apiUrl = 'http https://swapi-trybe.herokuapp.com/api/planets';
const SWPlanetApiRequest = () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data));
};

export default SWPlanetApiRequest;
