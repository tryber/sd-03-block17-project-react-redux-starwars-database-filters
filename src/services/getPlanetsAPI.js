const APIURL = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';

const getPlanetsAPI = () => (
  fetch(`${APIURL}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanetsAPI;
