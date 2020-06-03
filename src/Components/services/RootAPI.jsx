const planets = 'https://swapi-trybe.herokuapp.com/api/planets/';

const RootAPI = () => (
  fetch(planets)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);

export default RootAPI;
