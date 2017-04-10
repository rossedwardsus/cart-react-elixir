import {SET_PAYMENT_NAME_ON_CARD, SET_PAYMENT_CARD_NUMBER, SET_PAYMENT_EXPIRY_DATE, SET_PAYMENT_SECURITY_CODE} from '../constants/actionTypes.ts';

export function setPaymentNameOnCard(value: any) {
  alert("addCartItem from redux");
  return {
    type: SET_PAYMENT_NAME_ON_CARD,
    value
  }
}

export function setPaymentCardNumber(value: any) {
  alert("addCartItem from redux");
  return {
    type: SET_PAYMENT_CARD_NUMBER,
    value
  }
}

export function setPaymentExpiryDate(value: any) {
  alert("addCartItem from redux" + value);
  return {
    type: SET_PAYMENT_EXPIRY_DATE,
    value
  }
}

export function setPaymentSecurityCode(value: any) {
  alert("addCartItem from redux");
  return {
    type: SET_PAYMENT_SECURITY_CODE,
    value
  }
}