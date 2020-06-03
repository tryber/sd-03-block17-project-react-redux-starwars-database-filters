import getPlanets from '../services/service';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';
export const REQUEST_PLANETS_FAILURE = 'REQUEST_PLANETS_FAILURE';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_COLUMN = 'FILTER_BY_COLUMN'
export const FILTER_BY_COMPARISON = 'FILTER_BY_COMPARISON'
export const FILTER_BY_VALUE = 'FILTER_BY_VALUE'

const requestPlanets = () => ({
  type: REQUEST_PLANETS, 
})

const requestPlanetsSuccess = (payload) => ({
  type: REQUEST_PLANETS_SUCCESS,
  payload,
})

const requestPlanetsFailure = (payload) => ({
  type: REQUEST_PLANETS_FAILURE,
  payload,
})

export function callServiceAPI() {
 return (dispatch) => {
   dispatch(requestPlanets());
   
   return getPlanets()
    .then(
      (success) => dispatch(requestPlanetsSuccess(success)),
      (error) => dispatch(requestPlanetsFailure(error)),
    )
 }
}

export const filterByName = (payload) => ({
  type: FILTER_BY_NAME,
  payload,
})