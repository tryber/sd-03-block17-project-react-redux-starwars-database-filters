import * as types from './actionTypes';
import SW_API from '../../services/swAPI';

const requestAPI = () => ({ type: types.REQUEST_API });

const receiveSuccess = (json) => {
  const data = json.results;
  data.forEach((planet, index) => { delete data[index].residents; });
  return {
    type: types.RECEIVE_API_SUCCESS,
    data,
  };
};

const receiveFailure = (error) => ({
  type: types.RECEIVE_API_FAILURE,
  error,
});

export default function actionFetchPlanets() {
  return (dispatch) => {
    dispatch(requestAPI());
    return SW_API()
      .then(
        (json) => dispatch(receiveSuccess(json)),
        (error) => dispatch(receiveFailure(error.message)),
      );
  };
}
