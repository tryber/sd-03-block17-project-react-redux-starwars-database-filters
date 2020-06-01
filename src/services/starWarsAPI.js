const BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets';

// const getAllPlanetsFromAPI = () => {
//   fetch(BASE_URL).then((response) => response
//     .json()
//     .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));
// };

const getAllPlanetsFromAPI = () => {
  Promise.all([
    fetch(`${BASE_URL}/?page=1`),
    fetch(`${BASE_URL}/?page=2`),
    fetch(`${BASE_URL}/?page=3`),
    fetch(`${BASE_URL}/?page=4`),
    fetch(`${BASE_URL}/?page=5`),
    fetch(`${BASE_URL}/?page=6`),
  ])
    .then((responses) => responses.map((response) => response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))))
    .then((data) => data.reduce((acc, response) => [...acc, response], []));
};

const getPlanetByNameFromAPI = (query) => {
  fetch(`${BASE_URL}/?search=${query}`).then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));
};
export { getAllPlanetsFromAPI, getPlanetByNameFromAPI };
