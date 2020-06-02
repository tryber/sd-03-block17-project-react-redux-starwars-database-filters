export const FETCH_DATA_LOADING = 'FETCH_DATA_LOADING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

const fetchDataLoading = () => ({ type: FETCH_DATA_LOADING });

const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: { data } });

const fetchDataError = (error) => ({ type: FETCH_DATA_ERROR, payload: { error } });

function fetchData() {
  return (dispatch) => {
    dispatch(fetchDataLoading());
    fetch('https://swapi-trybe.herokuapp.com/api/planets')
      .then((res) => res.json())
      .then((res) => {
        if (!res.results) {
          throw (res.error);
        }
        dispatch(fetchDataSuccess(res.results));
        console.log(res.results);
        return res.results;
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };
}

export default fetchData;
