import {
  DATA_API, RECEIVE_ISS_LOCATION_FAILURE, NAME_SEARCHED, SUBMIT_OPTION_POPULATION, ERASE,
} from '../reducers/data';
import fetchDataApiStarWars from '../services/starWarsApi';

const apiTabelSucess = (value) => ({
  type: DATA_API,
  data: value,
});

export const nameSeached = (value) => ({
  type: NAME_SEARCHED,
  planetName: value,
});

export const optionPopulation = (population, value, numberOfPopulation) => ({
  type: SUBMIT_OPTION_POPULATION,
  column: population,
  comparison: value,
  value: numberOfPopulation,
});

export const erase = (eraseElement, newOboj) => ({
  type: ERASE,
  column: eraseElement,
  obj: newOboj,
});

const apiTableError = (error) => ({
  type: RECEIVE_ISS_LOCATION_FAILURE,
  error,
});

export default function dataApiStarWars() {
  return (dispatch) => fetchDataApiStarWars()
    .then(
      (sucess) => dispatch(apiTabelSucess(sucess)),
      (error) => dispatch(apiTableError(error)),
    );
}
