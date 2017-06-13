//get the order total

import {SET_EMAIL, CHECK_LOGGED_IN, LOGIN} from '../constants/actionTypes.ts';
import axios from 'axios';
import {setSession} from './session.ts';

export function loginUser(email: any, password: any) {
  let url = "";
  return function (dispatch: any) { 
	  axios.post('http://localhost:4000/api/graphql', {headers: { 'Authorization': "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOnt1c2VyLmlkfSIsImV4cCI6MTQ5OTk3MTYxNCwiaWF0IjoxNDk3Mzc5NjE0LCJpc3MiOiJTY29uZUhvbWVFbGl4aXIiLCJqdGkiOiI5YmViOGMyZi04MGRhLTQ0NWYtODQ4MS0wMWI0NDFlOTA5OTQiLCJwZW0iOnt9LCJzdWIiOiJVc2VyOnt1c2VyLmlkfSIsInR5cCI6ImFjY2VzcyJ9.tnHAIDcTiVxhA0Mo5ZqmagdUdtAqIus5h1omeMxuYQGuyNpA4UQxFqUR8s91GoPSz0CElHFIf4d7xZqdPsXw-w"},
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