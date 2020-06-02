export const requestData = () => ({ type: 'REQUEST_DATA' });
export const receiveData = (data) => ({ type: 'RECEIVE_DATA', data });

export function fetchData() {
  return (dispatch) => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then(
        (response) => response.json())
      .then((data) => {
        dispatch(receiveData(data));
      });
  };
}
