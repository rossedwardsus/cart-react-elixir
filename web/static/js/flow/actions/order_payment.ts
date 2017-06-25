import {SET_PAYMENT_NAME_ON_CARD, SET_USER_ORDER_PAYMENT_NAME_ON_CARD, SET_PAYMENT_CARD_NUMBER, SET_USER_ORDER_PAYMENT_CARD_NUMBER, SET_PAYMENT_EXPIRY_MONTH, SET_USER_ORDER_PAYMENT_EXPIRY_YEAR, SET_USER_ORDER_PAYMENT_EXPIRY_MONTH, SET_PAYMENT_EXPIRY_YEAR, SET_PAYMENT_SECURITY_CODE} from '../constants/actionTypes.ts';

export function setPaymentNameOnCard(value: any, order_id: any) {
  console.log("name on card action");
  //if user is logged u dispatch to user order payment

  return {
    type: SET_USER_ORDER_PAYMENT_NAME_ON_CARD,
    value
  }

  //return {
  //  type: SET_PAYMENT_NAME_ON_CARD,
  //  value
  //}
}

export function setPaymentCardNumber(value: any, order_id: any) {
  console.log("action payment card number");

  return {
    type: SET_USER_ORDER_PAYMENT_CARD_NUMBER,
    value
  }

  //if user == logged in
  //return {
  //  type: SET_PAYMENT_CARD_NUMBER,
  //  value
  //}
}

export function setPaymentExpiryMonth(value: any, order_id: any) {
  console.log(" action expiry month" + value);
  return {
    type: SET_PAYMENT_EXPIRY_MONTH,
    value
  }
}

export function setPaymentExpiryYear(value: any, order_id: any) {
  console.log("expiry year" + value);
  return {
    type: SET_PAYMENT_EXPIRY_YEAR,
    value
  }
}

export function setPaymentSecurityCode(value: any, order_id: any) {
  console.log("addCartItem from redux");
  return {
    type: SET_PAYMENT_SECURITY_CODE,
    value
  }
}