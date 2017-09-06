import { CREATE_ORDER, SET_ORDER_TYPE, CLEAR_USER, TERMS, MAILING_LIST, SET_ORDER_ID, SET_DELIVERY_COST, ORDER_COMPLETED, CLEAR_ORDER, SAVE_FOR_LATER } from '../constants/actionTypes.ts';
//import {getMenuItems} from './menu.ts';
import {push} from 'react-router-redux';
import axios from 'axios';



export const saveForLater = (value: any) => ({
  type: SAVE_FOR_LATER,
  value
})

//export const createOrder = (order_type) => dispatch => {
  //shop.getProducts(products => {
  //  dispatch(receiveProducts(products))
  //})
  //dispatch(viewPublicMenu(1));
  //dispatch(createOrder());
  //alert();
  //return "hello";
  //Promise.resolve(dispatch({type: "VIEW_PUBLIC_MENU", menu_items: {item_id: 1, title: "menu item from action"}})).then((data) => alert("promise" + JSON.stringify(data)));
//}


//const completeOrder = (order_type: any) =>
//  console.log("create order action");
//  ({ 
//    type: "VIEW_PUBLIC_MENU", 
//    order_type
//  });


export function createOrder(order_type: any, name: any) {
  //return (dispatch: any, getState: any) => {
    console.log("create order action " + order_type);
    return function(dispatch: any){
      //dispatch(getMenuItems());
      //if name != "" then redirect
      //return {
      //  type: CREATE_ORDER,
      //  order_type,
      //  name
      //}

      //if user if logged in then dispatch(user_orders)
      //else dispatch(orders)

      //dispatch(createOrder1(order_type, name, 123));
      //dispatch(getMenuItems(order_type));
      
      //if(order_type == "signature"){

      //      dispatch({type: SET_ORDER_TYPE});
      //    dispatch(push("/order/1/signature"));

      //if(order_type == "yours"){

            dispatch({type: SET_ORDER_TYPE, value: order_type});
            dispatch(push("/order/menu"));

      //}
      //}else if(order_type == "social"){


      //}else if(order_type == "pool"){

            //get pool order data

            /*  axios.post('/api/graphql',
                     {query: 'mutation {process_yours_social_order (order_type: "social", save_for_later: ' + getState().User.saveForLater + ', user_name_first: "' + getState().User.first_name + '", user_name_last: "' + getState().User.last_name + '", user_contact_email: "' + getState().User.email + '", user_contact_mobile: "' + getState().User.mobile + '", delivery_contact_address_name_first: "' + getState().User.deliveryContactsAddresses[0].first_name + '", delivery_contact_address_name_last: "' + getState().User.deliveryContactsAddresses[0].last_name + '", delivery_contact_address_contact_email: "' + getState().User.deliveryContactsAddresses[0].email + '", delivery_contact_address_contact_mobile: "", delivery_contact_address_company_name: "' + getState().User.deliveryContactsAddresses[0].mobile + '", payment_method_card_number: "' + getState().User.paymentMethods[0].card_number + '", payment_method_expiry_month: "' + getState().User.paymentMethods[0].expiry_month + '", payment_method_expiry_year: "' + getState().User.paymentMethods[0].expiry_year + '", payment_method_security_code: "' + getState().User.paymentMethods[0].security_code + '") {status sconely_user_token error_reason}}'}, {headers: {'authorization': "bearer"}}
            )
            .then((response: any) => {

                  console.log("graphql response " + JSON.stringify(response));

                  if(response.data.data.processYoursSocialOrder.errorReason != ""){

                      console.log("graphql response " + JSON.stringify(response.data.data.processYoursSocialOrder.errorReason));

                      


                      //if save_info_for_later == true...
                      //last four card number

                      localStorage.setItem("sconely_user", JSON.stringify({token: "", name: "ross", contact_email: "gmail", delivery_contacts_addresses: [{street1: "1109 santa monica blvd"}], pament_methods: [{last_four_digits: "4444"}]}));

                      console.log(JSON.parse(localStorage.getItem("sconely_user")).name);

                      //else delete from redux
                      //console.log("clear order");
                      
                      dispatch({type: SET_ORDER_TYPE, value: order_type, pool_name: "", pool_message: ""});
            

                      //that.props.history.push('/user');
                      //context.router

                      //this.context.router.push('/order/complete');
                      //dispatch(push("/order/complete"));

                  }else{

                    //dispatch({ type: , item_id: "session_id"});

                  }
      

            })
            .catch((error: any) => {

                  console.log("axios error handler " + error);
                  //go to code/payment screen
          //        this.props.loadView();


                  //display errror to user - payment

           //if (!error.status) {
              // network error
            //}

            })*/

      //}
    }
  //}
}



export function processYoursSocialOrder() {
  console.log("process yours social order action ");
  //console.log("action");

  return function (dispatch: any, getState: any) { 

            //event full name

            console.log("getstate" + JSON.stringify(getState().User.paymentMethods[0].card_number));
            //state.User.orders

            axios.post('/api/graphql',
                     {query: 'mutation {process_yours_social_order (order_type: "social", save_for_later: ' + getState().User.saveForLater + ', user_name_first: "' + getState().User.first_name + '", user_name_last: "' + getState().User.last_name + '", user_contact_email: "' + getState().User.email + '", user_contact_mobile: "' + getState().User.mobile + '", delivery_contact_address_name_first: "' + getState().User.deliveryContactsAddresses[0].first_name + '", delivery_contact_address_name_last: "' + getState().User.deliveryContactsAddresses[0].last_name + '", delivery_contact_address_contact_email: "' + getState().User.deliveryContactsAddresses[0].email + '", delivery_contact_address_contact_mobile: "", delivery_contact_address_company_name: "' + getState().User.deliveryContactsAddresses[0].mobile + '", payment_method_card_number: "' + getState().User.paymentMethods[0].card_number + '", payment_method_expiry_month: "' + getState().User.paymentMethods[0].expiry_month + '", payment_method_expiry_year: "' + getState().User.paymentMethods[0].expiry_year + '", payment_method_security_code: "' + getState().User.paymentMethods[0].security_code + '") {status sconely_user_token error_reason}}'}, {headers: {'authorization': "bearer"}}
            )
            .then((response: any) => {

                  console.log("graphql response " + JSON.stringify(response));

                  if(response.data.data.processYoursSocialOrder.errorReason != ""){

                      console.log("graphql response " + JSON.stringify(response.data.data.processYoursSocialOrder.errorReason));

                      


                      //if save_info_for_later == true...
                      //last four card number

                      localStorage.setItem("sconely_user", JSON.stringify({token: "", name: "ross", contact_email: "gmail", delivery_contacts_addresses: [{street1: "1109 santa monica blvd"}], pament_methods: [{last_four_digits: "4444"}]}));

                      console.log(JSON.parse(localStorage.getItem("sconely_user")).name);

                      //else delete from redux
                      //console.log("clear order");
                      
                      dispatch({type: CLEAR_USER});
            

                      //that.props.history.push('/user');
                      //context.router

                      //this.context.router.push('/order/complete');
                      //dispatch(push("/order/complete"));

                  }else{

                    //dispatch({ type: error, item_id: "session_id"});

                  }
      

            })
            .catch((error: any) => {

                  console.log("axios error handler " + error);
                  //go to code/payment screen
          //        this.props.loadView();


                  //display errror to user - payment

           //if (!error.status) {
              // network error
            //}

            })
            


            //call the reducer themn redirect
            //dispatch({ type: GUEST_ADD_CART_ITEM, item_id: "session_id"});
            //dispatch(push("/order/complete"));
            //dispatch({ type: SIGNATURE_GUEST_LOAD_ORDER, data: {event_full_name: "Laci Sconeli Launch August 2017 in DTLA", order_id: "response.data.data.loadSignatureGuestResponseOrderDetails. parent_order_id", image_id: "", host_id: "", invited_guest_message: "response.data.data.loadSignatureGuestResponseOrderDetails. invitedGuestMessage", menu_items: []}});
                    
        }

}



export function orderCompleted(order_type: any) {
  console.log("create order action " + order_type);
  return {
    type: ORDER_COMPLETED,
    order_type
  }
}

export function termsValidated(value: any) {
  console.log("create order action ");
  return {
    type: TERMS,
  }
}

export function mailingList(value: any) {
  console.log("create order action ");
  return {
    type: MAILING_LIST,
  }
}

export function setOrderId(order_id: any) {
  console.log("order id action " + order_id);
  return {
    type: SET_ORDER_ID,
  }
}

export function setDeliveryCost(cost: any) {
  console.log("setdeliverycost action " + cost);
  return {
    type: SET_DELIVERY_COST,
    cost
  }
}

export function clearUser() {
  console.log("clear order action ");
  return {
    type: CLEAR_USER,
  }
}

//export function cancelOrder() {
//  console.log("clear action ");
//  return {
//    type: CLEAR_ORDER,
//  }
//}
