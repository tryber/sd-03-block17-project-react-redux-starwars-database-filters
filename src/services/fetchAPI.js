import { receiveData, requestData } from '../actions';

const fetchPlanet = (url) => (
  function (dispatch) {
    dispatch(requestData());
    return fetch(url)
      .then((rawResponse) => rawResponse.json())
      .then((json) => dispatch(receiveData(json)));
  }
);

export default fetchPlanet;
