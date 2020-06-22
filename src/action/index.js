export const requestData = () => ({ type: 'REQUEST_DATA' });
export const receiveData = (data) => ({ type: 'RECEIVE_DATA', data });
export const filterPlanet = (filter) => ({ type: 'FILTER_PLANET_DATA', filter });
export const filterNumeric = (column, comparison, value) => ({
  type: 'FILTER_PLANET_NUMERIC',
  column,
  comparison,
  value,
});
export const columnOrder = (column, order) => ({ type: 'ORDER_COLUMN', column, order });
export const removeNumericFilter = (filterColumn) => ({ type: 'REMOVE_NUMERIC_FILTER', filterColumn });

export function fetchData() {
  return (dispatch) => {
    dispatch(requestData());
    return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then(
        (response) => response.json(),
      )
      .then((data) => {
        dispatch(receiveData(data));
      });
  };
}
