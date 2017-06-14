//get the order total

import {SET_EMAIL, CHECK_LOGGED_IN, LOGIN} from '../constants/actionTypes.ts';
import axios from 'axios';
import {setSession} from './session.ts';

export function loginUser(email: any, password: any) {
  let url = "";
  return function (dispatch: any) { 
	  axios.post('http://localhost:4000/api/graphql',
	         {query: 'query {loginUser (email: "email", password: "password") { user }}'}, {headers: { 'Authorization': "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOjEiLCJleHAiOjE0OTk5ODY3ODYsImlhdCI6MTQ5NzM5NDc4NiwiaXNzIjoiU2NvbmVIb21lRWxpeGlyIiwianRpIjoiMGI5M2VmZWYtMzA1Zi00NThmLWI5N2EtMjJlYzgwZWU4OWNkIiwicGVtIjp7fSwic3ViIjoiVXNlcjoxIiwidHlwIjoiYWNjZXNzIn0.J9dBWzR_vJyD8jU6TievrPcXvlN_cssXpkWy0TqI5hl5AXTOhIimXgkyrtgANAouBKGx6ip5xbi3rnyldQEU2g"}}
	  )
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