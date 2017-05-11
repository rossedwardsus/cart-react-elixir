//get the order total

import {SET_EMAIL, CHECK_LOGGED_IN, LOGIN} from '../constants/actionTypes.ts';


export function loginUser(email: any, password: any) {
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
        type: LOGIN,
        data: "response.data"
      })
  }
}

export function setEmail(value: any) {
  console.log("setemail action");
  return {
    type: SET_EMAIL,
    value
  }
}

export function checkLoggedIn() {
  //alert("addCartItem from redux");
  return {
    type: CHECK_LOGGED_IN,
  }
}


export function login(email: any, password: any) {
  console.log("login action");
  return {
    type: LOGIN,
    //redux saga to login user in
    //redirect
  }
}