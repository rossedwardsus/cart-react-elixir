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

export default function socialCart(state:any = {user_first_name: "", user_last_name: "", user_contact_email: "", user_contact_mobile: "", saveForLater: false, currentOrder: "social", orderSession: {sessionId: "", datetimeCreated: "", paymentErrorCode: "", networkError: false, deliveryCost: 0.00, promoCode: "", promoCodeDiscountPercentage: 0, validations: {cartValidated: false, nameValidated: false, contactValidated: false, deliveryContactAddressValidated: false, dateValidated: false, paymentMethodValidated: false, userNameEmailMobileValidated: false}, analytics_logging: {event: "user added item to cart"}}, orders: [], deliveryContactsAddresses: [{name: "1", contact_first_name: "", contact_last_name: "", contact_email: "", contact_mobile: "", street1: "", street2: "", city: "", state: "", zipcode: ""}], paymentMethods: [{name_on_card: "", card_number: "", card_brand: "", expiry_month: "", expiry_year: "", zipcode: "", security_code: "", stripe_token: ""}]}, action: any){

  let delivery_contacts_addresses_updated = null;
  let payment_methods_updated = null;
  let user_updated = null;
  let orders_updated = null;
  let order_session_updated = null;
  let save_for_later_updated = null;

  switch (action.type) {


    case ADD_CART_ITEM:
      console.log("add cart item reducer here " + JSON.stringify(action));

      //find order where order type == current order type

      //if order_type == social

      //orders.filter((order: ) => order.order_type == "social"

      orders_updated = state.orders;

      //orders_updated[0].cartItems.push({item_id: action.item_id, twelveortwentyfourminis: action.twelveortwentyfourminis, quantity: action.quantity});

      //else
      orders_updated[0].cartItems.push({menu_item_id: action.item_id, quantity: action.quantity, size: action.size});

      return Object.assign({}, state, {...state, orders: orders_updated});

    /*case INCREASE_CART_ITEM_QUANTITY:
      
      console.log("increase reducer " + JSON.stringify(state));

      //if quantity < 5 increase
      //else do nothing

      return Object.assign({}, state, {
        cart_items: state.cart_items.map((item: any, index: any) => {
          if (item.item_id === action.item_id) {
              item.quantity = item.quantity + 1;
          }
          return item
        })
      })*/

    case INCREASE_CART_ITEM_QUANTITY:

      //find order where order type == current order type
      
      console.log("increase cart item quantity reducer " + JSON.stringify(action.item_index));

      //if quantity < 5 increase
      //else do nothing

      orders_updated = state.orders;

      if(state.orders[0].order_type == "yours" || state.orders[0].order_type == "pool"){

        orders_updated[0].cartItems[action.item_index].quantity = orders_updated[0].cartItems[action.item_index].quantity + 1;

      }else{

        if(orders_updated[0].cartItems[action.item_index].size == "mini"){

            orders_updated[0].cartItems[action.item_index].quantity = orders_updated[0].cartItems[action.item_index].quantity + 24;

        }else{

            orders_updated[0].cartItems[action.item_index].quantity = orders_updated[0].cartItems[action.item_index].quantity + 12;


        }
      }
      

      /*state.User.orders[0].cartItems.map((item: any, index: any) => {
          if (item.item_id === action.item_id) {
              item.quantity = item.quantity + 1;
          }
          return item
        })*/

      return Object.assign({}, state, {...state, orders: orders_updated})


    case DECREASE_CART_ITEM_QUANTITY:

      //find order where order type == current order type
      
      console.log("decrease reducer " + JSON.stringify(action.item_index));
      //todo if dozens is 0 then just remove


      //get quantity
      //if dozens > 0
      //let item = "";

      //item = state.cart_items.find((item: any, index: any) => {
          
      //    return item.item_id === action.item_id;
      
      //})

      //let item_index = state.cart_items.findIndex((item: any) => {
          
      //    return index;
      
      //})


      //console.log("quantity" + JSON.stringify(item));

      orders_updated = state.orders;

      if(orders_updated[0].cartItems[action.item_index].quantity > 0){

        //orders_updated[0].cartItems[action.item_index].quantity = orders_updated[0].cartItems[action.item_index].quantity - 1;

        if(state.orders[0].order_type == "yours" || state.orders[0].order_type == "pool"){

            orders_updated[0].cartItems[action.item_index].quantity = orders_updated[0].cartItems[action.item_index].quantity - 1;

        }else{

            if(orders_updated[0].cartItems[action.item_index].size == "mini"){

                orders_updated[0].cartItems[action.item_index].quantity = orders_updated[0].cartItems[action.item_index].quantity - 24;

            }else{

                orders_updated[0].cartItems[action.item_index].quantity = orders_updated[0].cartItems[action.item_index].quantity - 12;

            }
        }
      }


      /*return Object.assign({}, state, {
        cart_items: state.cart_items.map((item: any, index: any) => {
          if (item.item_id === action.item_id) {
              if(item.quantity > 1){
                  item.quantity = item.quantity - 1;
              }
          }
          return item
        })
      })*/

      //else remove item
      //array.splice( index, 1 )

      return Object.assign({}, state, {...state, orders: orders_updated});


    case REMOVE_CART_ITEM:
      
      console.log("REMOVE reducer " + JSON.stringify(action.item_index));
      //todo if dozens is 0 then just remove

      //if dozens > 0

      /*return Object.assign({}, state, {
        cart_items: state.cart_items.map((item: any, index: any) => {
          if (item.item_id === action.item_id) {
              return false
          }
          return item
        })
      })*/

      orders_updated = state.orders;
      orders_updated[0].cartItems.splice(action.item_index, 1);

      return Object.assign({}, state, {...state, orders: orders_updated});

      //else remove item


    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};