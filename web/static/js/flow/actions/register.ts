import {REGISTER} from '../constants/actionTypes.ts';

export function registerUserCheckEmailExists(email: any, password: any) {
  let url = "";
  return function (dispatch: any) { 
    /*axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_WEATHER_SUCCESS,
        data: response.data
      }).error((response) => dispatch({
        type: types.FETCH_WEATHER_FAILURE,
        error: response.error
      })*/
      dispatch({
        type: REGISTER,
        data: "response.data"
      })
  }
}


export function registerUser(email: any, password: any) {
  let url = "";
  return function (dispatch: any) { 
    /*axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_WEATHER_SUCCESS,
        data: response.data
      }).error((response) => dispatch({
        type: 'WAITING_FOR_AUTHENTICATION',
        error: response.error
      })*/
      dispatch({
        type: REGISTER,
        data: "session_key"
      })
  }
}