//get the order total

import {SET_EMAIL, CHECK_LOGGED_IN, LOGIN} from '../constants/actionTypes.ts';




//export function login() {

		/*axios.post('http://localhost:4000/graphql', {
		             query: 'query {login (email: \"' + this.state.email + '\", password: \"' + this.state.password + '\") {session_id, first_name, last_name}}'
		})
		.then( response => {

		    //alert(JSON.stringify(response));
		    //go to code/payment screen
		//        this.props.loadView();
		    //this.props.setSubscription();

		    //addtosubscribedblocklist

		    //setsubscriptiontype == 1 block
		    //setsubscriptionpaid == true
		    //setsusbcriptindatetime


		    //store in cookie

		    //localStorage.set('user', {first_name:"", last_name: "", orders: [], delivery_addresses: [], payment_methods: []})
		    //setCookie("sconely_session_id", 1, 1)
		    //setCookie("sconely_first_name", 1, 1)
		    //setCookie("sconely_last_name", 1, 1)


		})
		.catch( error => {

		    alert("error");
		    //go to code/payment screen
		//        this.props.loadView();

		//if (!error.status) {
		// network error
		//}

		})*/

//}

export function setEmail(value: any) {
  //alert("addCartItem from redux");
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


export function login(email: any) {
  //alert("addCartItem from redux");
  return {
    type: LOGIN,
    //redux saga to login user in
    //redirect
  }
}