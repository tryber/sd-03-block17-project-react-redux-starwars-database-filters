export const requestData = () => ({ type: 'REQUEST_DATA' });
export const receiveData = (data) => ({ type: 'RECEIVE_DATA', data });
export const filterPlanet = (filter) => ({ type: 'FILTER_PLANET_DATA', filters: { filterByName: { name: filter } } });
export const filterNumeric = (column, comparison, value) => ({
  type: 'FILTER_PLANET_NUMERIC',
  column, 
  comparison, 
  value 
});

export function fetchData() {
  return (dispatch) => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then(
        (response) => response.json(),
      )
      .then((data) => {
        dispatch(receiveData(data));
      });
  };
}
