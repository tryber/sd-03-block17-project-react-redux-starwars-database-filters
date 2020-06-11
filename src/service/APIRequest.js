const URL = 'https://https://swapi-trybe.herokuapp.com/api/planets/';

const APIRequest = () => fetch(URL).then((response) => (response.json()
  .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
));

export default APIRequest;
