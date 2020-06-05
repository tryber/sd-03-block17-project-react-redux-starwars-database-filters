const URL = 'https://swapi-trybe.herokuapp.com/api/planets';

export const fetchAPI = () => fetch(URL)
  .then((response) => response.json()
  .then((json) => response.ok ? Promise.resolve(json) : Promise.reject(json)))

