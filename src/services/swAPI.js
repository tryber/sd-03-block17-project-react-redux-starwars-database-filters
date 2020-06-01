const SW_API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const SW_API = async () => {
  const response = await fetch(SW_API_URL);
  const json = await response.json();
  const data = json.results;
  console.log(data)
  data.forEach((planet, index) => { delete data[index].residents; });
  return (response.ok ? Promise.resolve(data) : Promise.reject(data));
};

export default SW_API;
