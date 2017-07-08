import {SIGNATURE_GUEST_LOAD_ORDER, SIGNATURE_GUEST_SAVE_CHOICE, SIGNATURE_GUEST_COMPLETE_RESPONSE} from '../constants/actionTypes.ts';

import {push} from 'react-router-redux';
import axios from 'axios';

export function loadSignatureGuestResponseOrderDetails() {
  //alert(item_id)
  return function (dispatch: any) { 

        //event full name

        axios.post('http://localhost:4000/api/graphql',
                 {query: 'query {load_signature_guest_response_order_details (order_name: "laci") { parent_order_id event_full_name invited_guest_message }}'
        })
        .then((response: any) => {

              console.log("graphql response" + JSON.stringify(response.data.data.loadSignatureGuestResponseOrderDetails));

              //that.props.history.push('/user');
              //context.router

              //that.props.setOrderId(1);

              //this.context.router.push('/order/complete');

                dispatch({ type: SIGNATURE_GUEST_LOAD_ORDER, data: {event_full_name: "1", order_id: response.data.data.loadSignatureGuestResponseOrderDetails.parent_order_id, image_id: "", host_id: "", invited_guest_message: response.data.data.loadSignatureGuestResponseOrderDetails.invitedGuestMessage, menu_items: []}});
                //dispatch(push("/order/url_name/guest/name"));
  

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

export function saveGuestChoice(item_id: any) {
  //alert(item_id)
  return function (dispatch: any) { 

    dispatch({
      type: SIGNATURE_GUEST_SAVE_CHOICE,
      data: {item_id: item_id}
    })

    dispatch(push("/order/1/guest/name"));

  }

}

export function completeGuestResponse(first_name: any, last_name: any, email: any, mailing_list: any) {
   //console.log("save guest choice action from redux " + JSON.stringify(guestResponse));
   return function (dispatch: any) { 

      axios.post('http://localhost:4000/api/graphql',
               {query: 'mutation {complete_signature_guest_response (order_id: "email", item_id: "1", first_name: "' + first_name + '", last_name: "' + last_name + '", email: "' + email + '", mailing_list: ' + mailing_list + ') { user }}'
      })
      .then((response: any) => {

            console.log("graphql response" + JSON.stringify(response));

            //that.props.history.push('/user');
            //context.router

            //that.props.setOrderId(1);

            //this.context.router.push('/guestorder/complete');

             //call the reducer themn redirect
             //dispatch({ type: GUEST_ADD_CART_ITEM, item_id: "session_id"});
             //dispatch(push("/order/1/guest/order_complete"));

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