export const fetchSWAPI = () => (
  fetch('http://swapi-trybe.herokuapp.com/api/planets')
    .then((response) => (
      response.json()
      .then((json) => {
        if (json) return Promise.resolve(json);
        return Promise.reject(json);
      })
    ))
);

export default fetchSWAPI;
