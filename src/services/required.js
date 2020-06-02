const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const apiPlanets = () => {
  return fetch(api)
    .then(response => response.json()
      .then((json) =>
        (response.ok ? Promise.resolve(json) : Promise.reject(json))
      ))
}
