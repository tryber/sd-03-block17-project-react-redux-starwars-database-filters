const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsGalaxy = () => (
  fetch(URL).then((response) => response.json()
    .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))))
);

export default getPlanetsGalaxy;
