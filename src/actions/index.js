import getStarWarsDataBase from '../Services/starWarsAPI';

export const REQUESTING_STAR_WARS_DATA = 'REQUESTING_STAR_WARS_DATA';
export const REQUESTING_STAR_WARS_DATA_SUCCESS = 'REQUESTING_STAR_WARS_DATA_SUCCESS';
export const REQUESTING_STAR_WARS_DATA_FAIL = 'REQUESTING_STAR_WARS_DATA_FAIL';

const requestStarWarsDataBase = () => ({
  type: REQUESTING_STAR_WARS_DATA,
});

const requestStarWarsDataBaseSuccess = (planets) => ({
  type: REQUESTING_STAR_WARS_DATA_SUCCESS,
  dataBase: [...planets],
});

const requestStarWarsDataBaseFail = (errorMsg) => ({
  type: REQUESTING_STAR_WARS_DATA_FAIL,
  error: errorMsg,
});

export function FetchStarWarsDataBase() {
  return (dispatch) => {
    dispatch(requestStarWarsDataBase());

    return getStarWarsDataBase()
      .then(
        (data) => dispatch(requestStarWarsDataBaseSuccess(data.results)),
        (error) => dispatch(requestStarWarsDataBaseFail(error.message)),
      );
  };
}
