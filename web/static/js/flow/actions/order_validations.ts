import {CART_VALIDATED, CART_INVALIDATED, FIRST_NAME_VALIDATED, LAST_NAME_VALIDATED, CONTACT_EMAIL_VALIDATED, CONTACT_EMAIL_AGAIN_VALIDATED, CONTACT_MOBILE_VALIDATED, DELIVERY_CONTACT_ADDRESS_VALIDATED, DATE_VALIDATED, DATE_INVALIDATED, PAYMENT_METHOD_VALIDATED, USER_NAME_EMAIL_MOBILE_VALIDATED} from '../constants/actionTypes.ts';

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

export function dateValidated() {
  console.log("cart validated ");
  return {
    type: DATE_VALIDATED,
    
  }
}

export function deliveryContactAddressValidated() {
  console.log("delivery contact address validated ");
  return {
    type: DELIVERY_CONTACT_ADDRESS_VALIDATED,
    
  }
}

export function userFirstNameValidated() {
  console.log("user last name validated ");
  return {
    type: FIRST_NAME_VALIDATED,
    
  }
}

export function userLastNameValidated() {
  console.log("user last name validated ");
  return {
    type: LAST_NAME_VALIDATED,
    
  }
}

export function userContactEmailValidated() {
  console.log("user contact email validated ");
  return {
    type: CONTACT_EMAIL_VALIDATED,
    
  }
}

export function userContactEmailAgainValidated() {
  console.log("user contact email validated ");
  return {
    type: CONTACT_EMAIL_AGAIN_VALIDATED,
    
  }
}

export function userContactMobileValidated() {
  console.log("user contact email validated ");
  return {
    type: CONTACT_MOBILE_VALIDATED,
    
  }
}

/*export function deliveryAddressInvalidated() {
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
}*/

export function paymentMethodValidated() {
  console.log("cart validated ");
  return {
    type: PAYMENT_METHOD_VALIDATED,
    
  }
}

export function userNameEmailMobileValidated() {
  console.log("user name email mobile validated ");
  return {
    type: USER_NAME_EMAIL_MOBILE_VALIDATED,
    
  }	
}