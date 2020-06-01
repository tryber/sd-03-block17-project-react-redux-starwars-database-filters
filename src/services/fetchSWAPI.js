export const fetchSWAPI = () => (
  fetch('http://swapi-trybe.herokuapp.com/api')
    .then((response) => response
      .json()
      .then((json) => json ? Promise.resolve(json) : Promise.reject(json))
    )
);
