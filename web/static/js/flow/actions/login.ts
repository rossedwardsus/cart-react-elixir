//get the order total

import {SET_EMAIL, CHECK_LOGGED_IN, LOGIN} from '../constants/actionTypes.ts';
import axios from 'axios';
import {setSession} from './session.ts';

export function loginUser(email: any, password: any) {
  let url = "";
  return function (dispatch: any) { 
	  axios.post('http://localhost:4000/api/graphql', {
	         query: 'query {loginUser (email: "email", password: "password") { user }}'
	  })
	  .then((response: any) => {

	        console.log("graphql response" + JSON.stringify(response));

	        //that.props.history.push('/user');
	        //context.router

	        //that.props.setOrderId(1);

	        //this.context.router.push('/order/complete');


	  })
	  .catch((error: any) => {

	        console.log("error" + error);
	        //go to code/payment screen
	//        this.props.loadView();


	        //display errror to user - payment

	 //if (!error.status) {
	    // network error
	  //}

      })
    dispatch(setSession());
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
    //dispatch(get sessionid)
  }
}