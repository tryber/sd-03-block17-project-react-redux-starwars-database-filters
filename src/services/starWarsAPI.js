const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function fetchAPI() {
  return fetch(api).then((planets) =>
    planets.json().then((data) => (planets.ok ? Promise.resolve(data) : Promise.reject(data))),
  );
}
