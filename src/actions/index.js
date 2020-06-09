import starWarsApi from '../services/starWarsApi';

const REQUEST_DATA = 'REQUEST_DATA';
const RECEIVE_DATA = 'RECEIVE_DATA';
const RECEIVE_FAIL = 'RECEIVE_FAIL';
const NAME_FILTER = 'NAME_FILTER';
const FILTER_SELECTORS = 'FILTER_SELECTORS';
const REMOVE_FILTER = 'REMOVE_FILTER';

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

export const filterSelectors = (filterSelect, comparison, valueFilter) => ({
  type: FILTER_SELECTORS,
  filterSelect,
  comparison,
  valueFilter,
});

export const removeFilter = (arrayOfObject) => ({
  type: REMOVE_FILTER,
  arrayOfObject,
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
