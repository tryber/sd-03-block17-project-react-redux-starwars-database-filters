import starWarsApi from '../services/starWarsApi';

const REQUEST_DATA = 'REQUEST_DATA';
const RECEIVE_DATA = 'RECEIVE_DATA';
const RECEIVE_FAIL = 'RECEIVE_FAIL';
const NAME_FILTER = 'NAME_FILTER';
const SELECT_FILTER = 'SELECT_FILTER';
const SELECT_COMPARISON = 'SELECT_COMPARISON';

const requestData = () => ({
  type: REQUEST_DATA,
});

const receiveData = (data) => ({
  type: RECEIVE_DATA,
  data,
});

const receiveFail = (error) => ({
  type: RECEIVE_FAIL,
  error,
});

export const filterPlanetName = (name) => ({
  type: NAME_FILTER,
  name,
});

export const filterSelect = (option) => ({
  type: SELECT_FILTER,
  option,
});

export const filterComparison = (comparison) => ({
  type: SELECT_COMPARISON,
  comparison,
});


export function fetchStarWarsApi(search) {
  return (dispatch) => {
    dispatch(requestData());

    return starWarsApi(search)
      .then(
        ((data) => {
          dispatch(receiveData(data.results));
        }),
        (error) => dispatch(receiveFail(error.message)),
      );
  };
}
