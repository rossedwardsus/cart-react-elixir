import {CART_VALIDATED, CART_INVALIDATED, FIRST_NAME_VALIDATED, FIRST_NAME_INVALIDATED, LAST_NAME_VALIDATED, CONTACT_EMAIL_VALIDATED, CONTACT_EMAIL_AGAIN_VALIDATED, CONTACT_MOBILE_VALIDATED, DELIVERY_CONTACT_ADDRESS_VALIDATED, DATE_VALIDATED, DATE_INVALIDATED, TIME_VALIDATED, TIME_INVALIDATED, PAYMENT_METHOD_VALIDATED, PAYMENT_METHOD_NAME_ON_CARD_VALIDATED, PAYMENT_METHOD_ZIPCODE_VALIDATED, PAYMENT_METHOD_CARD_NUMBER_VALIDATED, PAYMENT_METHOD_EXPIRY_MONTH_VALIDATED, PAYMENT_METHOD_EXPIRY_YEAR_VALIDATED, PAYMENT_METHOD_SECURITY_CODE_VALIDATED, USER_NAME_EMAIL_MOBILE_VALIDATED} from '../constants/actionTypes.ts';

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


export function timeValidated() {
  console.log("cart validated ");
  return {
    type: TIME_VALIDATED,
    
  }
}



export function userFirstNameValidated() {
  console.log("user last name validated ");
  return {
    type: FIRST_NAME_VALIDATED,
    
  }
}

export function userFirstNameInvalidated() {
  console.log("user last name validated ");
  return {
    type: FIRST_NAME_INVALIDATED,
    
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

export function deliveryContactAddressValidated() {
  console.log("delivery contact address validated ");
  return {
    type: DELIVERY_CONTACT_ADDRESS_VALIDATED,
    
  }
}

/*export function deliveryAddressZipcodeValidated() {
  console.log("cart validated ");
  return {
    type: DELIVERY_ADDRESS_ZIPCODE_VALIDATED,
    
  }
}*/

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

export function paymentMethodNameOnCardValidated() {
  console.log("cart validated ");
  return {
    type: PAYMENT_METHOD_NAME_ON_CARD_VALIDATED,
    
  }
}

export function paymentMethodZipcodeValidated() {
  console.log("cart validated ");
  return {
    type: PAYMENT_METHOD_ZIPCODE_VALIDATED,
    
  }
}

export function paymentMethodCardNumberValidated() {
  console.log("cart validated ");
  return {
    type: PAYMENT_METHOD_CARD_NUMBER_VALIDATED,
    
  }
}

export function paymentMethodExpiryMonthValidated() {
  console.log("cart validated ");
  return {
    type: PAYMENT_METHOD_EXPIRY_MONTH_VALIDATED,
    
  }
}

export function paymentMethodExpiryYearValidated() {
  console.log("cart validated ");
  return {
    type: PAYMENT_METHOD_EXPIRY_YEAR_VALIDATED,
    
  }
}

export function paymentMethodSecurityCodeValidated() {
  console.log("cart validated ");
  return {
    type: PAYMENT_METHOD_SECURITY_CODE_VALIDATED,
    
  }
}

export function userNameEmailMobileValidated() {
  console.log("user name email mobile validated ");
  return {
    type: USER_NAME_EMAIL_MOBILE_VALIDATED,
    
  }	
}