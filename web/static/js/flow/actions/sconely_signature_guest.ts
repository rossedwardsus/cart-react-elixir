import {GUEST_ADD_CART_ITEM, SET_GUEST_FIRST_NAME, SET_GUEST_LAST_NAME, SET_GUEST_EMAIL, SET_GUEST_HOST_MESSAGE} from '../constants/actionTypes.ts';

import {push} from 'react-router-redux';

export function addGuestCartItem(item_id: any) {
   console.log("addguestCartItem action from redux");
   return function (dispatch: any) { 

       /*axios.post('http://localhost:4000/api/graphql',
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
        
      }*/

      //call the reducer themn redirect
      dispatch({ type: GUEST_ADD_CART_ITEM, item_id: "session_id"});
      dispatch(push("/order/1/guest/name_email_host_message"));
  }
}

export function setGuestFirstName(value: any) {
  //alert(item_id)
  return {
    type: SET_GUEST_FIRST_NAME,
    value
  }
}

export function setGuestLastName(value: any) {
  //alert(item_id)
  return {
    type: SET_GUEST_LAST_NAME,
    value
  }
}

export function setGuestEmail(value: any) {
  //alert(item_id)
  return {
    type: SET_GUEST_EMAIL,
    value
  }
}

export function setGuestHostMessage(value: any) {
  //alert(item_id)
  return {
    type: SET_GUEST_HOST_MESSAGE,
    value
  }
}