import {SET_USER_PAYMENT_METHOD_CARD_NUMBER, SET_USER_ORDER_PAYMENT_METHOD_CARD_NUMBER, SET_USER_PAYMENT_METHOD_EXPIRY_MONTH, SET_USER_ORDER_PAYMENT_METHOD_EXPIRY_MONTH, SET_USER_PAYMENT_METHOD_EXPIRY_YEAR, SET_USER_ORDER_PAYMENT_METHOD_EXPIRY_YEAR, SET_USER_PAYMENT_METHOD_SECURITY_CODE, SET_USER_DEFINED_PAYMENT_METHOD} from '../constants/actionTypes.ts';


//setDeliveryContactAddressPredefined
export function setUserDefinedPaymentMethod(predefined_payment_method: any, order_id: any) {
//  console.log("street1");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //look in user state for the delivery contact and address info

  return function (dispatch: any, getState: any) { 

    console.log("state " + JSON.stringify(getState()));
  
    dispatch({type: SET_USER_DEFINED_PAYMENT_METHOD, card_number: predefined_payment_method.card_number, street2: "", city: "", state: "", zipcode: "", order_id: order_id});

  }

}

export function setPaymentNameOnCard(value: any, order_id: any) {
  console.log("name on card action");
  //if user is logged u dispatch to user order payment

  return function (dispatch: any, getState: any) { 

    console.log("state " + JSON.stringify(getState()));
  
    //dispatch({type: SET_USER_DEFINED_PAYMENT_METHOD, card_number: predefined_payment_method.card_number, street2: "", city: "", state: "", zipcode: "", order_id: order_id});

  }

  //return {
  //  type: SET_PAYMENT_NAME_ON_CARD,
  //  value
  //}
}

export function setPaymentMethodCardNumber(value: any, order_id: any) {
  console.log("action payment card number");

  return function (dispatch: any, getState: any) { 

    console.log("state " + JSON.stringify(getState()));
  
    dispatch({type: SET_USER_PAYMENT_METHOD_CARD_NUMBER, value: value});

  }

  //if user == logged in
  //return {
  //  type: SET_PAYMENT_CARD_NUMBER,
  //  value
  //}
}

export function setPaymentExpiryMonth(value: any, order_id: any) {
  console.log(" action expiry month" + value);

  //IF logged in use SET_USER_ORDER_PAYMENT_EXPIRY_MONTH
  //else SET_ORDER_PAYMENT_EXPIRY_MONTH

  return {
    type: SET_USER_PAYMENT_METHOD_EXPIRY_MONTH,
    value
  }
}

export function setPaymentExpiryYear(value: any, order_id: any) {
  console.log("expiry year" + value);

  //IF logged in use SET_USER_ORDER_PAYMENT_EXPIRY_YEAR
  //else SET_ORDER_PAYMENT_EXPIRY_YEAR

  return {
    type: SET_USER_PAYMENT_METHOD_EXPIRY_YEAR,
    value
  }
}

export function setPaymentSecurityCode(value: any, order_id: any) {
  console.log("set payment method security code action");
  return {
    type: SET_USER_PAYMENT_METHOD_SECURITY_CODE,
    value
  }
}