const url = 'https://swapi-trybe.herokuapp.com/api/';

const starWarsApi = (search) => (
  fetch(`${url}${search}`)
    .then((response) => (
      response
        .json()
        .then((json) => {
          if (response.ok) return Promise.resolve(json);
          return Promise.reject(json);
        })
    ))
);

export default starWarsApi;
