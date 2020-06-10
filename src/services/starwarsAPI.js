export function fetchData() { // action creator que retorna uma função, possível por conta do pacote redux-thunk
  return (dispatch) => { // thunk declarado
    dispatch(requestData());
    return fetch('https://swapi-trybe.herokuapp.com/api')
      .then((response) => response.json())
      .then((data) => dispatch(receiveData(data)));
  };
}
