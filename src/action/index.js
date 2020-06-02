export const requestData = () => ({type: 'REQUEST_DATA' });
export const receiveData = (data) => ({type: 'RECEIVE_DATA', data });

export function fetchData() {
    return function (dispatch) {
      fetch(`https://swapi-trybe.herokuapp.com/api/planets/`)
      .then(
         response => response.json(),
         error => console.log('An error occurred.', error),
     )
      .then((data) => {
         dispatch(receiveData(data));
      },
     );
    };
   }