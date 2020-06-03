import RootAPI from '../services/RootAPI';
import {
  API_REQUEST,
  REQUEST_SUCCESS,
  INPUT_NAME,
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

