const getPlanets = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets';
  const response = await fetch(url);
  return response.json(); 
}

export default getPlanets;
