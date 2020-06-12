const apis = 'https://swapi-trybe.herokuapp.com/api/planets/';
const api = () =>
   fetch(apis).then((response) =>
    response
      .json()
      .then((json) =>
      (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export default api;