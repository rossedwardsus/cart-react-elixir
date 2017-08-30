import { CREATE_ORDER, TERMS, MAILING_LIST, SET_ORDER_ID, SET_DELIVERY_COST, ORDER_COMPLETED, CLEAR_ORDER } from '../constants/actionTypes.ts';
//import {getMenuItems} from './menu.ts';
import {push} from 'react-router-redux';
import axios from 'axios';



//const receiveProducts = products => ({
//  type: types.RECEIVE_PRODUCTS,
//  products: products
//})

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


//export const save = () => dispatch => {
  //shop.getProducts(products => {
  //  dispatch(receiveProducts(products))
  //})
  //dispatch(viewPublicMenu(1));
  //dispatch(saveDeliveryAddress());
  //alert();
  //return "hello";
  //Promise.res
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
      
      if(order_type == "sconely_signature"){
          
          dispatch(push("/order/1/signature"));

      }else{

          dispatch(push("/order/menu"));

      }
    }
  //}
}



export function processYoursSocialOrder() {
  console.log("process yours social order action ");
  //console.log("action");

  return function (dispatch: any, getState: any) { 

            //event full name

            //getState()
            //state.User.orders

            axios.post('/api/graphql',
                     {query: 'mutation {process_yours_social_order (order_type: "social" user_name_first: "first", user_name_last: "last", user_contact_email: "e", user_contact_mobile: "m", delivery_contact_address_name_first: "", delivery_contact_address_name_last: "", delivery_contact_address_contact_email: "", delivery_contact_address_contact_mobile: "", delivery_contact_address_company_name: "") {status sconely_user_token error_reason}}'}
                     //query: 'query {load_signature_guest_response_order_details (order_name: "laci") { parent_order_id event_full_name invited_guest_message }}'
            )
            .then((response: any) => {

                  console.log("graphql response " + JSON.stringify(response));

                  //if save_info_for_later == true...
                  //last four card number

                  //localstorage.setitem("sconely_user", {});


                  //that.props.history.push('/user');
                  //context.router

                  //that.props.setOrderId(1);

                  //this.context.router.push('/order/complete');

                  //dispatch({ type: VIEW_PUBLIC_MENU, items: response.data.data.getMenuItems});
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

export function clearOrder() {
  console.log("clear action ");
  return {
    type: CLEAR_ORDER,
  }
}

//export function cancelOrder() {
//  console.log("clear action ");
//  return {
//    type: CLEAR_ORDER,
//  }
//}
