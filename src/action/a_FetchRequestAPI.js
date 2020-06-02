import getPlanetsGalaxy from '../services/planetsAPI';

export const REQUEST_API = 'REQUEST_FETCH_APP';
export const RECEVIE_API_SUCESS = 'RECEVIE_API_WITH_SUCESS';

const requestApi = () => ({ type: REQUEST_API });

const recevieApi = ({ results }) => ({
  type: RECEVIE_API_SUCESS,
  data: results,
});

export function fetchRequestAPI() {
  return (dispatch) => {
    dispatch(requestApi());

    return getPlanetsGalaxy().then(
      (data) => dispatch(recevieApi(data)),
    );
  };
}
