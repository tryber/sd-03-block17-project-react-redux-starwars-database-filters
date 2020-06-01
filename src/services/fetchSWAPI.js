export const fetchSWAPI = () => (
  fetch('http://swapi-trybe.herokuapp.com/api')
    .then((response) => response.json()
      .then(
        (json) => json ? Promise.resolve(json) : Promisse.reject(json)
      )
    ).catch((error) => console.log('ATENTION, error in fetch from fetchSWAPI', error))
);
