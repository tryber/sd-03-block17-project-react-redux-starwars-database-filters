const URL = 'https://swapi-trybe.herokuapp.com/api/planets';

const fetchAPI = () => fetch(URL)
  .then((response) => response.json()
  .then(function (json) {
    return response.ok ? Promise.resolve(json) : Promise.reject(json);
  }));


export default fetchAPI;
