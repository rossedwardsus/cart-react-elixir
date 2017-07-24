import {SIGNATURE_GUEST_LOAD_ORDER, SIGNATURE_GUEST_SAVE_CHOICE, SIGNATURE_GUEST_SAVE_CHOICE_NO_SCONE, SIGNATURE_GUEST_COMPLETE_RESPONSE} from '../constants/actionTypes.ts';

import {push} from 'react-router-redux';
import axios from 'axios';

export function loadSignatureGuestResponseOrderDetails(event_url_name: any) {
  //alert(item_id)
  console.log("action");
  return function (dispatch: any) { 

        //event full name

        axios.post('/api/graphql',
                 {query: 'query {load_signature_guest_response_order_details (event_url_name: "' + event_url_name + '") { parent_order_id event_long_name invited_guest_message delivery_date}}'
        })
        .then((response: any) => {

              console.log("graphql response order details" + JSON.stringify(response.data.data.loadSignatureGuestResponseOrderDetails));

              //that.props.history.push('/user');
              //context.router

              //that.props.setOrderId(1);

              //this.context.router.push('/order/complete');

                dispatch({ type: SIGNATURE_GUEST_LOAD_ORDER, data: {event_long_name: response.data.data.loadSignatureGuestResponseOrderDetails["eventLongName"], order_id: "response.data.data.loadSignatureGuestResponseOrderDetails['parent_order_id']", image_id: "", invited_guest_message: response.data.data.loadSignatureGuestResponseOrderDetails["invitedGuestMessage"], delivery_date: ""}});
  

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
        //dispatch({ type: SIGNATURE_GUEST_LOAD_ORDER, data: {event_full_name: "Laci Sconeli Launch August 2017 in DTLA", order_id: "response.data.data.loadSignatureGuestResponseOrderDetails. parent_order_id", image_id: "", host_id: "", invited_guest_message: "response.data.data.loadSignatureGuestResponseOrderDetails. invitedGuestMessage", menu_items: []}});
                
    }

  
}

export function saveGuestChoice(chosen_item_id: any, event_name: any) {
  //alert(item_id)
  return (dispatch: any, getState: any) => { 

    console.log("getstate " + JSON.stringify(getState()));

    dispatch({
      type: SIGNATURE_GUEST_SAVE_CHOICE,
      data: {chosen_item_id: chosen_item_id}
    })

    dispatch(push("/order/" + event_name + "/guest/name"));

  }

}

export function saveGuestChoiceNoScone(event_name: any) {
  //alert(item_id)
  return (dispatch: any, getState: any) => { 

    console.log("no scone " + JSON.stringify(getState()));

    dispatch({
      type: SIGNATURE_GUEST_SAVE_CHOICE_NO_SCONE,
      data: {chosen_item_id: 0}
    })

    dispatch(push("/order/" + event_name + "/guest/name"));

  }

}

export function completeGuestResponse(first_name: any, last_name: any, email: any, event_name: any) {
   //console.log("save guest choice action from redux " + JSON.stringify(guestResponse));
   return function (dispatch: any, getState: any) { 

      console.log("getstate order id item id" + JSON.stringify(getState()["SignatureOrderGuestResponse"]));

      axios.post('/api/graphql',
               {query: 'mutation {complete_signature_guest_response (parent_order_id: "1234", chosen_item_id: ' + getState()["SignatureOrderGuestResponse"]["chosen_item_id"] + ', first_name: "' + first_name + '", last_name: "' + last_name + '", email: "' + email + '") { user }}'
      })
      .then((response: any) => {

            console.log("graphql response" + JSON.stringify(response));

            //that.props.history.push('/user');
            //context.router

            //that.props.setOrderId(1);

            //this.context.router.push('/guestorder/complete');

             //call the reducer themn redirect
             //dispatch({ type: GUEST_ADD_CART_ITEM, item_id: "session_id"});
             dispatch(push("/order/" + event_name + "/guest/completed"));

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





/*export function setGuestLastName(value: any) {
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
}*/