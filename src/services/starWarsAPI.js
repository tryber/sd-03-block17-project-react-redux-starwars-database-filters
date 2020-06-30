const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function apiPlanets() {
  return fetch(api).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );
}
