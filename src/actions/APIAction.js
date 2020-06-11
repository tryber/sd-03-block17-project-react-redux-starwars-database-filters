import RootAPI from '../service/RootAPI';

export const API_REQUEST = 'API_REQUEST';
export const API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS';

const APIControl = () => ({
  type: API_REQUEST,
});

const APIRequestSuccess = ({ results }) => ({
  type: API_REQUEST_SUCCESS,
  data: results,
});

export function getAPIData() {
  return (dispatch) => {
    dispatch(APIControl());

    return RootAPI()
      .then(
        (data) => dispatch(APIRequestSuccess(data)),
      );
  };
}
