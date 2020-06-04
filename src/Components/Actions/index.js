import RootAPI from '../service/RootAPI';
import {
  API_REQUEST,
  REQUEST_SUCCESS,
  INPUT_NAME,
  FILTER_BY_NUMBERS,
} from '../Types';

const requestAPI = () => ({ type: API_REQUEST });

const requestAPISuccess = ({ results }) => ({
  type: REQUEST_SUCCESS,
  data: results,
});

export function fetchRequestAPI() {
  return (dispatch) => {
    dispatch(requestAPI());

    return RootAPI().then(
      (data) => dispatch(requestAPISuccess(data)),
    );
  };
}

export const filters = (name) => ({
  type: INPUT_NAME,
  value: name,
});

export const filterByNumber = (usa) => ({
  type: FILTER_BY_NUMBERS,
  payload: usa,
});
