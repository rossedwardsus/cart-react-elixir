import { CREATE_ORDER, SET_ORDER_TYPE, SET_PAYMENT_ERROR, ADD_CART_ITEM, CLEAR_USER, TERMS, MAILING_LIST, SET_ORDER_ID, SET_DELIVERY_COST, SET_PROMO_CODE, COMPLETE_ORDER, CLEAR_ORDER, SAVE_FOR_LATER, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, REMOVE_CART_ITEM } from '../constants/actionTypes.ts';
import {getMenuItems} from './menu.ts';
import {push} from 'react-router-redux';
import axios from 'axios';
var moment = require('moment');


export function addCartItem(order_id: any, item_id: any, size: any, quantity: any) {
  console.log("add cart item quantity action " + item_id + " " + size + " " + quantity);

  //if uorder_id != undefined
  //else

  return {
    type: ADD_CART_ITEM,
    order_id, 
    item_id: item_id,
    size: size,
    quantity: quantity
  }

  /*return {
    type: ADD_CART_ITEM,
    item_id,
    item_type,
    quantity
  }*/
}


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


export function createOrder(order_type: any, pool_name: any, pool_date: any) {
  //return (dispatch: any, getState: any) => {
    console.log("create order action " + pool_date);
    return function(dispatch: any){
      //getMenuItems();
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

      if(order_type == "yours"){

            //load menu
            //if menu items alrady exist then dont get from the database again

            dispatch(getMenuItems());

            dispatch({type: CREATE_ORDER, order_type: order_type});
            dispatch(push("/order/menu"));

      //}
      }else if(order_type == "social"){

            //load menu
            dispatch(getMenuItems());

            dispatch({type: CREATE_ORDER, order_type: order_type});
            dispatch(push("/order/menu"));


      }else if(order_type == "pool"){

            console.log("create order action pool");

            //get pool order data
            //possibly do as an api and not graphql

            //move this to order menu?
            //dispatch({type: SET_ORDER_TYPE, value: order_type, pool_name: "graphql", pool_date: "graphql", pool_id: "", pool_message: "response.data.pool_message"});

            //dispatch(push("/order/menu"));

            dispatch(getMenuItems());

            axios.post('/api/graphql',
                     {query: 'query {get_pool_order_details (pool_name: "pn", pool_date: "pd") {pool_order_id pool_order_message}}'}, {headers: {'authorization': "bearer"}}
            )
            .then((response: any) => {

                  console.log("pool order graphql response " + JSON.stringify(response));

                  //if pool date is greater then 24 hours before

                  //console.log(pool_date);
                  //console.log("pool date" + moment(pool_date).format('dddd'));
                  //Wednesday January 20th, 2017 
                  let pool_order_date_formatted = moment(pool_date).format('dddd') + ", " + moment(pool_date).format('MMMM') + " " + moment(pool_date).date();

                  //console.log(pool_order_date_formatted);

                  dispatch({
                              type: CREATE_ORDER, 
                              order_type: order_type, 
                              //pool_name: "this.props.params", 
                              pool_order_id: response.data.data.getPoolOrderDetails.poolOrderId, 
                              pool_order_date_formatted: pool_order_date_formatted,
                              pool_order_address: 
                              "8th and Hope Lobby"
                              //pool_message: response.data.data.getPoolOrderDetails.poolOrderTime,
                  
                  })

                  //const delay = (ms: any) => new Promise(resolve =>
                  //  setTimeout(resolve, ms)
                  //);

                  //delay(2000).then(() => dispatch(push("/order/menu")));

                  //dispatch(setPoolOrder("pool_name", "pool_date", "pool_id", "pool_message")).then(() => {});

                  dispatch(push("/order/menu"));

            
            }).then((response: any) => {
                  
                  
                   dispatch(push("/order/menu"));



                  /*if(response.data.data.processYoursSocialOrder.errorReason != ""){

                      console.log("graphql response " + JSON.stringify(response.data.data.processYoursSocialOrder.errorReason));

                      dispatch({type: SET_ORDER_TYPE, value: order_type, pool_name: "", pool_date: "", pool_id: "", pool_message: "response.data.pool_message"});


                      //if save_info_for_later == true...
                      //last four card number

                      localStorage.setItem("sconely_user", JSON.stringify({token: "", name: "ross", contact_email: "gmail", delivery_contacts_addresses: [{street1: "1109 santa monica blvd"}], pament_methods: [{last_four_digits: "4444"}]}));

                      console.log(JSON.parse(localStorage.getItem("sconely_user")).name);

                      //else delete from redux
                      //console.log("clear order");
                      
                      //dispatch({type: SET_ORDER_TYPE, value: order_type, pool_name: "", pool_date: "", pool_id: "", pool_message: response.data.pool_message});
            

                      //that.props.history.push('/user');
                      //context.router

                      //this.context.router.push('/order/complete');
                      //dispatch(push("/order/complete"));

                  }else{

                    //dispatch({ type: , item_id: "session_id"});

                  }*/
      

            })
            .catch((error: any) => {

                  console.log("axios error handler here" + error);

                  //dispatch({type: SET_ORDER_TYPE, value: order_type, pool_name: "graphql", pool_date: "graphql", pool_id: "", pool_message: "response.data.pool_message"});

                  //dispatch(push("/order/menu"));


                  //go to code/payment screen
          //        this.props.loadView();


                  //display errror to user - payment

           //if (!error.status) {
              // network error
            //}

            })

      }
    }
  //}
}

function setPoolOrder(pool_name: any, pool_date: any, pool_id: any, pool_message: any) {
  return {type: SET_ORDER_TYPE, value: "pool", pool_name: "graphql", pool_date: "graphql", pool_id: "", pool_message: "setpoolorderresponse.data.pool_message"}
}


export function processYoursSocialPoolOrder() {
  console.log("process yours social order action ");
  //console.log("action");

  return function (dispatch: any, getState: any) { 

            //event full name

            console.log("getstate" + JSON.stringify(getState().User.paymentMethods[0].card_number));
            //state.User.orders

            //dispatch({type: SET_PROCESSING_ORDER_STATUS, error: response.data.data.processYoursSocialPoolOrder.errorReason});


            //if order type == pool then address isnt needed

            axios.post('/api/graphql',
                     {query: 'mutation {process_yours_social_pool_order (order_type: "social", pool_order_id: "1", pool_name: "pn", pool_date: "september082017", promo_code: "8thandhope", cart_items: [{item_id: 1, quantity: 1}, {item_id: 2, quantity: 2}], save_for_later: ' + getState().User.saveForLater + ', user_name_first: "' + getState().User.first_name + '", user_name_last: "' + getState().User.last_name + '", user_contact_email: "' + getState().User.email + '", user_contact_mobile: "' + getState().User.mobile + '", delivery_contact_address_name_first: "' + getState().User.deliveryContactsAddresses[0].first_name + '", delivery_contact_address_name_last: "' + getState().User.deliveryContactsAddresses[0].last_name + '", delivery_contact_address_contact_email: "' + getState().User.deliveryContactsAddresses[0].email + '", delivery_contact_address_contact_mobile: "", delivery_contact_address_company_name: "' + getState().User.deliveryContactsAddresses[0].mobile + '",  payment_method_name_on_card: "' + getState().User.paymentMethods[0].name_on_card + '", payment_method_zipcode: "' + getState().User.paymentMethods[0].zipcode + '", payment_method_card_number: "' + getState().User.paymentMethods[0].card_number + '", payment_method_expiry_month: "' + getState().User.paymentMethods[0].expiry_month + '", payment_method_expiry_year: "' + getState().User.paymentMethods[0].expiry_year + '", payment_method_security_code: "' + getState().User.paymentMethods[0].security_code + '", payment_method_card_brand: "' + getState().User.paymentMethods[0].card_brand + '") {status erro_code error_reason}}'}, {headers: {'authorization': "bearer"}}
            )
            .then((response: any) => {

                  console.log("graphql response " + JSON.stringify(response));

                  let error_message = "";

                  //response.data.data.processYoursSocialPoolOrder.errorCode == "cvc code"
                  //if response.data.data.processYoursSocialPoolOrder.errorReason == "cvc code"
                  ////error_message = "There was an error in your CVC code."
                  //incorrect card number
                  //
                  
                  dispatch({type: SET_PAYMENT_ERROR, errorMessage: response.data.data.processYoursSocialPoolOrder.errorReason});


                  /*if(response.data.data.processYoursSocialPoolOrder.errorReason != ""){

                      //console.log("graphql response " + JSON.stringify(response.data.data.processYoursSocialPoolOrder.errorReason));

                      


                      //if save_info_for_later == true...
                      //last four card number

                      //localStorage.setItem("sconely_user", JSON.stringify({token: "", name: "ross", contact_email: "gmail", delivery_contacts_addresses: [{street1: "1109 santa monica blvd"}], pament_methods: [{last_four_digits: "4444"}]}));

                      console.log(JSON.parse(localStorage.getItem("sconely_user")).name);

                      //else delete from redux
                      //console.log("clear order");
                      
                      //dispatch({type: CLEAR_USER});
            

                      //that.props.history.push('/user');
                      //context.router

                      //this.context.router.push('/order/complete');
                      //dispatch(push("/order/complete"));

                  }else{

                    //dispatch({ type: error, item_id: "session_id"});

                    //if status == card_error
                    //set status of order to payment error?

                    dispatch({type: SET_PAYMENT_ERROR, error: "response.data.data.processYoursSocialPoolOrder.errorReason"});

                  

                  }*/
      

            })
            .catch((error: any) => {

                  console.log("axios error handler " + error);

                  //if network error reset button

                  dispatch({type: SET_PAYMENT_ERROR, error: "response.data.data.processYoursSocialPoolOrder.errorReason"});


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
    type: COMPLETE_ORDER,
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

export function setPromoCode(code: any) {
  console.log("set promo code action " + code);
  return {
    type: SET_PROMO_CODE,
    code: code
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

export function increaseCartItemQuantity(item_index: any) {
  console.log("increase cart item quantity action " + item_index);
  return {
    type: INCREASE_CART_ITEM_QUANTITY,
    item_index
  }
}


export function decreaseCartItemQuantity(item_index: any) {
  console.log("DECREASE cart item quantity action " + item_index);
  return {
    type: DECREASE_CART_ITEM_QUANTITY,
    item_index
  }
}

export function removeCartItem(item_index: any) {
  return {
    type: REMOVE_CART_ITEM,
    item_index
  }
}


