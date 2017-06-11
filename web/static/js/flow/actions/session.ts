//get the order total

import {SET_SESSION} from '../constants/actionTypes.ts';
import axios from 'axios';
import {push} from 'react-router-redux';
import {getUserOrders} from './user.ts';

export function setSession() {
  let url = "";
  return function (dispatch: any) { 
    /*axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_WEATHER_SUCCESS,
        data: response.data
        //dispatch user page
      }).error((response) => dispatch({
        type: types.FETCH_WEATHER_FAILURE,
        error: response.error
      })*/
    dispatch({ type: SET_SESSION, session_id: "session_id"});
    dispatch(getUserOrders("session_id"));
    //dispatch({ type: GET_USER_DELIVERY_ADDRESS_NAMES, session_id: "session_id"});
    //dispatch({ type: GET_USER_PAYMENT_NAMES, session_id: "session_id"});
    //dispatch(push("/user"));
  }
}

/*export function setEmail(value: any) {
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
    //dispatch(get sessionid)
  }
}*/