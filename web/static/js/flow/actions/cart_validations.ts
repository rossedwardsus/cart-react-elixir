import {CART_VALIDATED, CART_INVALIDATED, DELIVERY_ADDRESS_VALIDATED, DATETIME_VALIDATED, CONTACT_VALIDATED, NAME_VALIDATED, PAYMENT_VALIDATED} from '../constants/actionTypes.ts';

export function cartValidated() {
  console.log("cart validated ");
  return {
    type: CART_VALIDATED,
    
  }
}

export function cartInvalidated() {
  console.log("cart validated ");
  return {
    type: CART_INVALIDATED,
    
  }
}

export function datetimeValidated() {
  console.log("cart validated ");
  return {
    type: DATETIME_VALIDATED,
    
  }
}

export function deliveryAddressValidated() {
  console.log("cart validated ");
  return {
    type: DELIVERY_ADDRESS_VALIDATED,
    
  }
}

export function contactValidated() {
  console.log("cart validated ");
  return {
    type: DELIVERY_ADDRESS_VALIDATED,
    
  }
}

export function nameValidated() {
  console.log("cart validated ");
  return {
    type: DELIVERY_ADDRESS_VALIDATED,
    
  }
}

export function paymentValidated() {
  console.log("cart validated ");
  return {
    type: DELIVERY_ADDRESS_VALIDATED,
    
  }
}