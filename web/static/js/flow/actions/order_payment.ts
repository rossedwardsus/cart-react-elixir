import {SET_PAYMENT_NAME_ON_CARD, SET_PAYMENT_CARD_NUMBER, SET_PAYMENT_EXPIRY_MONTH, SET_PAYMENT_EXPIRY_YEAR, SET_PAYMENT_SECURITY_CODE} from '../constants/actionTypes.ts';

export function setPaymentNameOnCard(value: any) {
  console.log("addCartItem from redux");
  //if user is logged u dispatch to user order payment
  return {
    type: SET_PAYMENT_NAME_ON_CARD,
    value
  }
}

export function setPaymentCardNumber(value: any) {
  console.log("action payment");
  return {
    type: SET_PAYMENT_CARD_NUMBER,
    value
  }
}

export function setPaymentExpiryMonth(value: any) {
  console.log("expiry month" + value);
  return {
    type: SET_PAYMENT_EXPIRY_MONTH,
    value
  }
}

export function setPaymentExpiryYear(value: any) {
  console.log("expiry year" + value);
  return {
    type: SET_PAYMENT_EXPIRY_YEAR,
    value
  }
}

export function setPaymentSecurityCode(value: any) {
  console.log("addCartItem from redux");
  return {
    type: SET_PAYMENT_SECURITY_CODE,
    value
  }
}