import { GET_USER, SET_ORDER_TYPE, SET_ORDER_STATUS, SET_PAYMENT_ERROR, SET_NETWORK_ERROR, SET_PROMO_CODE, CREATE_ORDER, COMPLETE_ORDER, CLEAR_USER, SET_POOL_NAME, ADD_CART_ITEM, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, REMOVE_CART_ITEM, SET_USER_FIRST_NAME, SET_USER_LAST_NAME, SET_USER_CONTACT_EMAIL, SET_USER_CONTACT_MOBILE, GET_USER_ORDERS, ADD_USER_DELIVERY_CONTACT_ADDRESS, SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_LAST_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_EMAIL, SET_USER_DELIVERY_CONTACT_ADDRESS_MOBILE, SET_USER_DELIVERY_CONTACT_ADDRESS_COMPANY_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_STREET1, SET_USER_DELIVERY_CONTACT_ADDRESS_STREET2, SET_USER_DELIVERY_CONTACT_ADDRESS_CITY, SET_USER_DELIVERY_CONTACT_ADDRESS_STATE, SET_USER_DELIVERY_CONTACT_ADDRESS_ZIPCODE, SET_USER_DELIVERY_CONTACT_ADDRESS_NOTE, ADD_USER_PAYMENT_METHOD, SET_USER_PAYMENT_METHOD_NAME_ON_CARD, SET_USER_PAYMENT_METHOD_CARD_NUMBER, SET_USER_PAYMENT_METHOD_CARD_BRAND, SET_USER_PAYMENT_METHOD_EXPIRY_MONTH, SET_USER_PAYMENT_METHOD_EXPIRY_YEAR, SET_USER_PAYMENT_METHOD_SECURITY_CODE, SET_USER_PAYMENT_METHOD_ZIPCODE, SAVE_FOR_LATER, CONTACT_VALIDATED, NAME_VALIDATED, PAYMENT_METHOD_VALIDATED, PAYMENT_METHOD_NAME_ON_CARD_VALIDATED, PAYMENT_METHOD_ZIPCODE_VALIDATED, PAYMENT_METHOD_CARD_NUMBER_VALIDATED, PAYMENT_METHOD_EXPIRY_MONTH_VALIDATED, PAYMENT_METHOD_EXPIRY_YEAR_VALIDATED, PAYMENT_METHOD_SECURITY_CODE_VALIDATED, USER_NAME_EMAIL_MOBILE_VALIDATED, FIRST_NAME_VALIDATED, FIRST_NAME_INVALIDATED, LAST_NAME_VALIDATED, CONTACT_EMAIL_VALIDATED, CONTACT_EMAIL_AGAIN_VALIDATED, CONTACT_MOBILE_VALIDATED, DELIVERY_CONTACT_ADDRESS_VALIDATED, DATE_VALIDATED, SET_ORDER_DELIVERY_DATETIME_DATE, SET_ORDER_DELIVERY_DATETIME_SPECIFIC_TIME, SET_ORDER_NOTE, SET_GIFT_ORDER, SET_GIFT_NOTE, SET_PICKUP_LOCATION, SET_SESSION_ID } from '../constants/actionTypes.ts';

/*let menu_items: any;

interface CartState {
  user_type: string;
  address: string;
  payment_method: string;
  menu_items: any;
  cart: any;
};

let inititalState: CartState = {

  user_type: "",
  address: "",
  payment_method: "",
  menu_items: [],
  cart: [],

}*/

export default function socialPayment(state:any = {user_first_name: "", user_last_name: "", user_contact_email: "", user_contact_mobile: "", saveForLater: false, currentOrder: "social", orderSession: {sessionId: "", datetimeCreated: "", paymentErrorCode: "", networkError: false, deliveryCost: 0.00, promoCode: "", promoCodeDiscountPercentage: 0, validations: {cartValidated: false, nameValidated: false, contactValidated: false, deliveryContactAddressValidated: false, dateValidated: false, paymentMethodValidated: false, userNameEmailMobileValidated: false}, analytics_logging: {event: "user added item to cart"}}, orders: [], deliveryContactsAddresses: [{name: "1", contact_first_name: "", contact_last_name: "", contact_email: "", contact_mobile: "", street1: "", street2: "", city: "", state: "", zipcode: ""}], paymentMethods: [{name_on_card: "", card_number: "", card_brand: "", expiry_month: "", expiry_year: "", zipcode: "", security_code: "", stripe_token: ""}]}, action: any){

  let delivery_contacts_addresses_updated = null;
  let payment_methods_updated = null;
  let user_updated = null;
  let orders_updated = null;
  let order_session_updated = null;
  let save_for_later_updated = null;

  switch (action.type) {


    case SET_USER_PAYMENT_METHOD_NAME_ON_CARD:
      console.log("set user payment methods reducer name on card " + JSON.stringify(action.value));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.paymentMethods;
      payment_methods_updated[0]["name_on_card"] = action.value;

      return Object.assign({}, state, {...state, paymentMethods: payment_methods_updated});



    case SET_USER_PAYMENT_METHOD_CARD_NUMBER:
      console.log("set user payment methods reducer card number " + JSON.stringify(action.value));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.paymentMethods;
      payment_methods_updated[0]["card_number"] = action.value;

      return Object.assign({}, state, {...state, paymentMethods: payment_methods_updated});


    case SET_USER_PAYMENT_METHOD_CARD_BRAND:
      console.log("set user payment methods reducer card brand " + JSON.stringify(action.value));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.paymentMethods;
      payment_methods_updated[0]["card_brand"] = action.value;

      return Object.assign({}, state, {...state, paymentMethods: payment_methods_updated});


    case SET_USER_PAYMENT_METHOD_EXPIRY_MONTH:
      console.log("set user payment methods reducer month " + JSON.stringify(action.value));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.paymentMethods;
      payment_methods_updated[0]["expiry_month"] = action.value;

      return Object.assign({}, state, {...state, paymentMethods: payment_methods_updated});


    case SET_USER_PAYMENT_METHOD_EXPIRY_YEAR:
      console.log("set user payment methods reducer year " + JSON.stringify(action.value));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.paymentMethods;
      payment_methods_updated[0]["expiry_year"] = action.value;

      return Object.assign({}, state, {...state, paymentMethods: payment_methods_updated});


    case SET_USER_PAYMENT_METHOD_SECURITY_CODE:
      console.log("set user payment methods reducer security code " + JSON.stringify(action.value));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.paymentMethods;
      payment_methods_updated[0]["security_code"] = action.value;

      return Object.assign({}, state, {...state, paymentMethods: payment_methods_updated});

     
     case SET_USER_PAYMENT_METHOD_ZIPCODE:
      console.log("set user payment methods reducer security code " + JSON.stringify(action.value));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.paymentMethods;
      payment_methods_updated[0]["zipcode"] = action.value;

      return Object.assign({}, state, {...state, paymentMethods: payment_methods_updated});


    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};