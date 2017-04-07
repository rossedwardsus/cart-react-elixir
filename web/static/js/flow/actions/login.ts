//get the order total

import {CHECK_LOGGED_IN, LOG_IN} from '../constants/actionTypes.ts';

export function checkLoggedIn() {
  //alert("addCartItem from redux");
  return {
    type: CHECK_LOGGED_IN,
  }
}


export function logIn(email: any) {
  //alert("addCartItem from redux");
  return {
    type: LOG_IN,
    //redux saga to login user in
    //redirect
  }
}