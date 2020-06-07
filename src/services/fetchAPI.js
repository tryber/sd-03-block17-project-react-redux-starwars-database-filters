import { receiveData, requestData } from '../actions';

const fetchPlanet = (url) => {
  return function (dispatch) {
    dispatch(requestData());
    return fetch(url)
      .then((rawResponse) => rawResponse.json())
      .then((json) => dispatch(receiveData(json)));
  };
};

export default fetchPlanet;
