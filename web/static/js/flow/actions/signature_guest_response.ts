import {SIGNATURE_GUEST_LOAD_ORDER, SIGNATURE_GUEST_SAVE_CHOICE, SIGNATURE_GUEST_SAVE_CHOICE_NO_SCONE, SIGNATURE_GUEST_COMPLETE_RESPONSE} from '../constants/actionTypes.ts';

import {push} from 'react-router-redux';
import axios from 'axios';

export function loadSignatureGuestResponseOrderDetails() {
  //alert(item_id)
  console.log("action");
  return function (dispatch: any) { 

        //event full name

        axios.post('/api/graphql',
                 {query: 'query {load_signature_guest_response_order_details (order_name: "laci") { parent_order_id event_full_name invited_guest_message }}'
        })
        .then((response: any) => {

              console.log("graphql response order details" + JSON.stringify(response.data.data.loadSignatureGuestResponseOrderDetails));

              //that.props.history.push('/user');
              //context.router

              //that.props.setOrderId(1);

              //this.context.router.push('/order/complete');

                dispatch({ type: SIGNATURE_GUEST_LOAD_ORDER, data: {event_full_name: "Laci Sconeli Launch August 201", order_id: "response.data.data.loadSignatureGuestResponseOrderDetails.parent_order_id", image_id: "", invited_guest_message: "Hi everyone,\r\rSconely is providing complimentary scones for the August 3rd Chat & Chew, please select the scone you'd like.\r\rThanks, \rAnais", menu_items: [{item_id: 1, title: "DWK", description: "With caramelized pears, candied pecans and fresh ginger, DWK is a great combination of flavors and textures. Many have called DWK exquisite!", image_id: "DWKmenu"}, {item_id: 2, title: "Snorker", description: "This decadent dessert scone combines the finest dark chocolate with toasted hazelnuts. Beware, the Snorker may be life altering!", story: "Ruby Q is a mouthwatering scone with cherries and chocolate throughout. It's a Sconely favorite!", ingredients: "Unbleached white all-purpose flour*, Cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic", image_id: "Snorkermenu"}, {item_id: 3, title: "Ruby Q", description: "The mouthwatering Ruby Q has just the right balance of fresh cherries, chocolate chunks and Madagascar vanilla bean. Simply delicious!", image_id: "RubyQmenu"}, {item_id: 4, title: "Savvy Go Go", description: "Tomato Goat Cheese Sun-dried", image_id: "MenuSavvy4.5", hover_image_id: "MenuSavvy4.5roll"}, {item_id: 5, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 6, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 7, title: "freedom", description: "let freedom ring!7", image_id: "DWK_greenrollover1"},  {item_id: 8, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 9, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 10, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}]}});
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