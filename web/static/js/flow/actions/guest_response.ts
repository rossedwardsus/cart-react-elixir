import {GUEST_ADD_CART_ITEM, SET_GUEST_FIRST_NAME, SET_GUEST_LAST_NAME, SET_GUEST_EMAIL, SET_GUEST_HOST_MESSAGE} from '../constants/actionTypes.ts';

import {push} from 'react-router-redux';
import axios from 'axios';

export function addGuestCartItem(order_id: any, item_id: any) {
  //alert(item_id)
  return {
    type: SET_GUEST_FIRST_NAME,
    order_id,
    item_id
  }
}

export function saveGuestChoice(guestResponse: any) {
   console.log("save guest choice action from redux " + JSON.stringify(guestResponse));
   return function (dispatch: any) { 

      axios.post('http://localhost:4000/api/graphql',
               {query: 'mutation {save_sconely_signature_guest_choice (order_id: "email", item_id: "1", first_name: "", last_name: "") { user }}'
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
      


      //call the reducer themn redirect
      //dispatch({ type: GUEST_ADD_CART_ITEM, item_id: "session_id"});
      //dispatch(push("/order/1/guest/name"));
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