export const PROCESS_API_DATA = 'PROCESS_API_DATA';
export const REQUEST_API_DATA = 'REQUEST_API_DATA';

export const requestData = () => (
  {
    type: REQUEST_API_DATA,
  }
);

export const receiveData = (data) => (
  {
    type: PROCESS_API_DATA,
    results: data.results,
    count: data.count,
    next: data.next
  }
);

export const fetchPlanet = (url) => {
  return function (dispatch) {
    dispatch(requestData());
    return fetch(url)
      .then((rawResponse) => rawResponse.json())
      .then((json) => dispatch(receiveData(json)))
  }
}
