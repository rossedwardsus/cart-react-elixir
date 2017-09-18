import {CART_VALIDATED, CART_INVALIDATED, DELIVERY_ADDRESS_VALIDATED, DELIVERY_ADDRESS_INVALIDATED, DATETIME_VALIDATED, DATETIME_INVALIDATED, CONTACT_VALIDATED, NAME_VALIDATED, PAYMENT_METHOD_VALIDATED} from '../constants/actionTypes.ts';

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

export function datetimeInvalidated() {
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

export function deliveryAddressInvalidated() {
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

export function contactInvalidated() {
  console.log("contact validated ");
  return {
    type: CONTACT_VALIDATED,
    
  }
}

export function nameValidated() {
  console.log("name validated action");
  return {
    type: NAME_VALIDATED,
    
  }
}

export function paymentMethodValidated() {
  console.log("cart validated ");
  return {
    type: PAYMENT_METHOD_VALIDATED,
    
  }
}