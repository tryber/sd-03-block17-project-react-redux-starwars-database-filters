const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function fetchAPI() {
  return fetch(api).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );
}
