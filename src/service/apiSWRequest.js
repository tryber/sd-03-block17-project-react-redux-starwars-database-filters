const URL = 'https://swapi-trybe.herokuapp.com/api/planets';

const apiSWRequest = () => fetch(URL).then((reponse) => (
  reponse.json()
    .then((dataSW) => (reponse.ok ? Promise.resolve(dataSW) : Promise.reject(dataSW)))
));

export default apiSWRequest;
