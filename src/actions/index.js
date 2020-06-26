import getStarWarsDataBase from '../Services/starWarsAPI';

export const REQUESTING_STAR_WARS_DATA = 'REQUESTING_STAR_WARS_DATA';
export const REQUESTING_STAR_WARS_DATA_SUCCESS = 'REQUESTING_STAR_WARS_DATA_SUCCESS';
export const REQUESTING_STAR_WARS_DATA_FAIL = 'REQUESTING_STAR_WARS_DATA_FAIL';
export const ON_CHANGE_NAME_VALUE = 'ON_CHANGE_NAME_VALUE';
export const ON_SELECT_COLUMN = 'ON_SELECT_COLUMN';
export const REMOVE_NUMERIC_FILTER = 'REMOVE_NUMERIC_FILTER';
export const ORDER_COLUMN = 'ORDER_COLUMN';

const requestStarWarsDataBase = () => ({
  type: REQUESTING_STAR_WARS_DATA,
});

const requestStarWarsDataBaseSuccess = (planets) => ({
  type: REQUESTING_STAR_WARS_DATA_SUCCESS,
  dataBase: planets,
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
        (error) => dispatch(requestStarWarsDataBaseFail(error)),
      );
  };
}

export const changeNameValue = (name) => ({
  type: ON_CHANGE_NAME_VALUE,
  filterName: name,
});

export const columnSelect = (column, comparison, value) => ({
  type: ON_SELECT_COLUMN,
  column,
  comparison,
  value,
});

export const removeFilter = (obj) => ({
  type: REMOVE_NUMERIC_FILTER,
  obj,
});

export const orderColumns = (column, sort) => ({
  type: ORDER_COLUMN,
  column,
  sort,
});
