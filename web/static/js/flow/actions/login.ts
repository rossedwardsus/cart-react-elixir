//get the order total

import {CHECK_LOGGED_IN, LOGIN} from '../constants/actionTypes.ts';

export function checkLoggedIn() {
  //alert("addCartItem from redux");
  return {
    type: CHECK_LOGGED_IN,
  }
}


export function login(email: any) {
  //alert("addCartItem from redux");
  return {
    type: LOGIN,
    //redux saga to login user in
    //redirect
  }
}