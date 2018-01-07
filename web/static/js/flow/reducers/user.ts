import { GET_USER, SET_ORDER_TYPE, SET_ORDER_STATUS, SET_PAYMENT_ERROR, SET_NETWORK_ERROR, SET_PROMO_CODE, CREATE_ORDER, COMPLETE_ORDER, CLEAR_USER, SET_POOL_NAME, SET_DELIVERY_COST, ADD_CART_ITEM, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, REMOVE_CART_ITEM, SET_USER_FIRST_NAME, SET_USER_LAST_NAME, SET_USER_CONTACT_EMAIL, SET_USER_CONTACT_MOBILE, GET_USER_ORDERS, ADD_USER_DELIVERY_CONTACT_ADDRESS, SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_LAST_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_EMAIL, SET_USER_DELIVERY_CONTACT_ADDRESS_MOBILE, SET_USER_DELIVERY_CONTACT_ADDRESS_COMPANY_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_STREET1, SET_USER_DELIVERY_CONTACT_ADDRESS_STREET2, SET_USER_DELIVERY_CONTACT_ADDRESS_CITY, SET_USER_DELIVERY_CONTACT_ADDRESS_STATE, SET_USER_DELIVERY_CONTACT_ADDRESS_ZIPCODE, SET_USER_DELIVERY_CONTACT_ADDRESS_NOTE, ADD_USER_PAYMENT_METHOD, SET_USER_PAYMENT_METHOD_NAME_ON_CARD, SET_USER_PAYMENT_METHOD_CARD_NUMBER, SET_USER_PAYMENT_METHOD_CARD_BRAND, SET_USER_PAYMENT_METHOD_EXPIRY_MONTH, SET_USER_PAYMENT_METHOD_EXPIRY_YEAR, SET_USER_PAYMENT_METHOD_SECURITY_CODE, SET_USER_PAYMENT_METHOD_ZIPCODE, SAVE_FOR_LATER, CONTACT_VALIDATED, NAME_VALIDATED, PAYMENT_METHOD_VALIDATED, PAYMENT_METHOD_NAME_ON_CARD_VALIDATED, PAYMENT_METHOD_ZIPCODE_VALIDATED, PAYMENT_METHOD_CARD_NUMBER_VALIDATED, PAYMENT_METHOD_EXPIRY_MONTH_VALIDATED, PAYMENT_METHOD_EXPIRY_YEAR_VALIDATED, PAYMENT_METHOD_SECURITY_CODE_VALIDATED, USER_NAME_EMAIL_MOBILE_VALIDATED, FIRST_NAME_VALIDATED, FIRST_NAME_INVALIDATED, LAST_NAME_VALIDATED, CONTACT_EMAIL_VALIDATED, CONTACT_EMAIL_AGAIN_VALIDATED, CONTACT_MOBILE_VALIDATED, DELIVERY_CONTACT_ADDRESS_VALIDATED, DATE_VALIDATED, SET_ORDER_DELIVERY_DATETIME_DATE, SET_ORDER_DELIVERY_DATETIME_SPECIFIC_TIME, SET_ORDER_NOTE, SET_GIFT_ORDER, SET_GIFT_NOTE, SET_PICKUP_LOCATION, SET_SESSION_ID, COLLECTIONS, COLLECTION_MENU_ITEMS } from '../constants/actionTypes.ts';

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

export default function user(state:any = {collections: [], collectionMenuItems: [], user_first_name: "", user_last_name: "", user_contact_email: "", user_contact_mobile: "", saveForLater: false, currentOrder: "social", orderSession: {sessionId: "", datetimeCreated: "", paymentErrorCode: "", networkError: false, deliveryCost: 0, promoCode: "", promoCodeDiscountPercentage: 0, validations: {cartValidated: false, nameValidated: false, contactValidated: false, deliveryContactAddressValidated: false, dateValidated: false, paymentMethodValidated: false, userNameEmailMobileValidated: false}, analytics_logging: {event: "user added item to cart"}}, orders: [], deliveryContactsAddresses: [{name: "1", contact_first_name: "", contact_last_name: "", contact_email: "", contact_mobile: "", street1: "", street2: "", city: "", state: "", zipcode: ""}], paymentMethods: [{name_on_card: "", card_number: "", card_brand: "", expiry_month: "", expiry_year: "", zipcode: "", security_code: "", stripe_token: ""}]}, action: any){

  let delivery_contacts_addresses_updated = null;
  let payment_methods_updated = null;
  let user_updated = null;
  let orders_updated = null;
  let collections_updated = null;
  let order_session_updated = null;
  let save_for_later_updated = null;

  switch (action.type) {
    case GET_USER:
      console.log("set user email" + JSON.stringify(state));

      //normalizr
      //delivery addrress

      return Object.assign({}, state, {...state, email: action.data});


    //complete_order
    //set order status to "completed"

    /*case COLLECTIONS:

      console.log("collections reducer " + JSON.stringify(action.collections));

      //collections_updated = state.collections;
      //collections_updated.push(action.collections);

      return Object.assign({}, state, {...state, collections: action.collections});


    case COLLECTION_MENU_ITEMS:

      console.log("collections reducer " + JSON.stringify(action.collections));

      //collections_updated = state.collections;
      //collections_updated.push(action.collections);

      return Object.assign({}, state, {...state, collections_items: action.collections});*/



    case CLEAR_USER:
      console.log("CLEAR USER REDUCER " + JSON.stringify(state));

      //normalizr
      //delivery addrress

      //return Object.assign({}, state, {...state, email: action.});
      return {user_first_name: "", user_last_name: "", user_email: "", user_mobile: "", saveForLater: false, orders: [], deliveryContactsAddresses: []};

     case SET_SESSION_ID:
      console.log("set SESSION id reducer");

      //find order where status == "started"
      //if none exists that add the order

      //set name here or just set it in default

      let order_session_updated = state.orderSession;
      order_session_updated["sessionId"] = action.value;

      return Object.assign({}, state, {orderSession: order_session_updated});


    case SET_ORDER_TYPE:
      console.log("set order type reducer");

      //find order where status == "started"
      //if none exists that add the order

      //set name here or just set it in default



      orders_updated = state.orders;

      //if another pool order exists change it's status to "saved"

      orders_updated.push({deliveryCost: "", orderStartedDateTime: "", order_type: "pool", pool_order_id: "action.pool_order_id", pool_name: "action.pool_name", pool_date: "action.pool_date", pool_message: action.pool_message, status: "current", created_datetime: "", payment_error: "", cartItems: []})

      let started_order = state.orders.findIndex((order: any) => order.status == "started");

      console.log("started order " + started_order);


      /*if(action.order_type == "pool"){

          //orders_updated = state.orders;
          //orders_updated[0]["order_type"] = action.order_type;
          //orders_updated[0]["pool_name"] = action.pool_name;
          //orders_updated[0]["pool_date"] = action.pool_date;
          orders_updated[0]["pool_message"] = action.pool_message;

          //if order_type == pool then add pool_name to order
          //also need to load the message for the pool order

      }*/

      //return Object.assign({}, state, {orders: orders_updated});

      return Object.assign({}, state, {orders: orders_updated});

    case SET_PROMO_CODE:
      console.log("promo code reducer");

      order_session_updated = state.orderSession;
      order_session_updated["promoCode"] = action.code;
      order_session_updated["promoCodeDiscountPercentage"] = 10;

      return Object.assign({}, state, {...state, orderSession: order_session_updated});


    case SET_ORDER_STATUS:
      console.log("set order status reducer");

      order_session_updated = state.orderSession;
      order_session_updated["orderStatus"] = action.orderStatus;

      return Object.assign({}, state, {...state, orderSession: order_session_updated});


    case SET_PAYMENT_ERROR:
      console.log("add cart reducer");

      order_session_updated = state.orderSession;
      order_session_updated["paymentErrorCode"] = action.paymentErrorCode;

      return Object.assign({}, state, {...state, orderSession: order_session_updated});

    case SET_NETWORK_ERROR:
      console.log("set network reducer");

      order_session_updated = state.orderSession;
      order_session_updated["networkError"] = action.networkError;

      return Object.assign({}, state, {...state, orderSession: order_session_updated});



    case CREATE_ORDER:
      console.log("CREATE order reducer " + JSON.stringify(action));

      //set session current order type

      orders_updated = state.orders;

      if(action.order_type == "yours" || action.order_type == "social"){

          orders_updated[0] = {deliveryCost: "", orderStartedDateTime: "", order_type: action.order_type, orderNote: "", giftOrder: false, giftNote: "", cartItems: [], deliveryDatetimeDate: "", deliveryDatetimeSpecificTime: "", paymentSecurityCode: ""};

      }else{

          orders_updated[0] = {deliveryCost: "", deliveryDatetimeDate: "", orderStartedDateTime: "", userPoolId: action.user_pool_id, order_type: action.order_type, orderNote: "", poolName: action.pool_name, pickupLocation: "", pool_admin_receipt_order_id: action.pool_admin_receipt_order_id, pool_delivery_date_formatted: action.pool_delivery_date_formatted, pool_delivery_time_range: action.pool_delivery_time_range, pool_order_by_date_formatted: action.pool_order_by_date_formatted, pool_address_street1: action.pool_address_street1, pool_address_city: action.pool_address_city, pool_address_state: action.pool_address_state, pool_address_zipcode: action.pool_address_zipcode, pickup_location: action.pickup_location, cartItems: []};

      }

      //else pool_order

      return Object.assign({}, state, {orders: orders_updated});


    case SET_DELIVERY_COST:
      console.log("set order cost reducer");

      orders_updated = state.orders;
      orders_updated[0]["deliveryCost"] = action.deliveryCost;

      return Object.assign({}, state, {...state, orders: orders_updated});


    case SET_POOL_NAME:
      console.log("pool name reducer");

      orders_updated = state.orders;
      orders_updated[0]["poolName"] = action.name;
      //order_updated["promoCodeDiscountPercentage"] = 10;

      return Object.assign({}, state, {...state, orders: orders_updated});

    case SET_PICKUP_LOCATION:
      console.log("pool name reducer");

      orders_updated = state.orders;
      orders_updated[0]["pickupLocation"] = action.location;
      //order_updated["promoCodeDiscountPercentage"] = 10;

      return Object.assign({}, state, {...state, orders: orders_updated});


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


    case SET_USER_FIRST_NAME:
      console.log("user first name reducer " + JSON.stringify(action.value));

      //user_updated = state;
      //user_updated["user_first_name"] = action.value;

      return Object.assign({}, state, {...state, user_first_name: action.value});

    case SET_USER_LAST_NAME:
      console.log("user last name reducer " + JSON.stringify(state));

      return Object.assign({}, state, {...state, user_last_name: action.value});

   

    case SET_USER_CONTACT_EMAIL:
      console.log("set user contact email reducer " + JSON.stringify(action.value));

      return Object.assign({}, state, {...state, user_contact_email: action.value});
    
    
    case SET_USER_CONTACT_MOBILE:
      console.log("set user contact mobile reducer " + JSON.stringify(state));

      return Object.assign({}, state, {...state, user_contact_mobile: action.value});
    

    case SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME:

      console.log("user delivery contact address first name reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].contact_first_name = action.value; 

      return Object.assign({}, state, {...state, deliveryContactAddress: delivery_contacts_addresses_updated });

      //else remove item

    case SET_USER_DELIVERY_CONTACT_ADDRESS_LAST_NAME:

      console.log("user delivery contact address last name reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].contact_last_name = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item

    case SET_USER_DELIVERY_CONTACT_ADDRESS_EMAIL:

      console.log("user delivery contact address email reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].contact_email = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item

    case SET_USER_DELIVERY_CONTACT_ADDRESS_MOBILE:

      console.log("user delivery contact address mobile reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].contact_mobile = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item

    /*case SET_USER_DELIVERY_CONTACT_ADDRESS_MOBILE2:

      console.log("user delivery contact address mobile reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].mobile = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item*/

    case SET_USER_DELIVERY_CONTACT_ADDRESS_COMPANY_NAME:

      console.log("user delivery contact address company name reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].companyName = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item

    case SET_USER_DELIVERY_CONTACT_ADDRESS_STREET1:

      console.log("user delivery contact address street1 reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].street1 = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item
     

    case SET_USER_DELIVERY_CONTACT_ADDRESS_STREET2:

      console.log("user delivery contact address street2 reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].street2 = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item

    case SET_USER_DELIVERY_CONTACT_ADDRESS_CITY:

      console.log("user delivery contact address city reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].city = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item


    case SET_USER_DELIVERY_CONTACT_ADDRESS_STATE:

      console.log("user delivery contact address state reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].state = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item


    case SET_USER_DELIVERY_CONTACT_ADDRESS_ZIPCODE:

      console.log("user delivery contact address zipcode reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].zipcode = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item

    case SET_USER_DELIVERY_CONTACT_ADDRESS_NOTE:

      console.log("user delivery contact address note reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].note = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item


    case SET_ORDER_NOTE:

      console.log("ORDER note reducer");

      orders_updated = state.orders;
      orders_updated[0].orderNote = action.value; 

      return Object.assign({}, state, {...state, orders: orders_updated });

      //else remove item

    case SET_GIFT_ORDER:

      console.log("gift ORDER reducer");

      orders_updated = state.orders;
      orders_updated[0].giftOrder = action.value; 

      return Object.assign({}, state, {...state, orders: orders_updated });

      //else remove item

    case SET_GIFT_NOTE:

      console.log("ORDER note reducer");

      orders_updated = state.orders;
      orders_updated[0].giftNote = action.value; 

      return Object.assign({}, state, {...state, orders: orders_updated });

      //else remove item

    case SAVE_FOR_LATER:

      console.log("user save for later reducer");

      save_for_later_updated = state.saveForLater;
      save_for_later_updated = action.value; 

      return Object.assign({}, state, {...state, saveForLater: save_for_later_updated});

      //else remove item



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
     
  

    /*case ADD_USER_DELIVERY_CONTACT_ADDRESS:
      console.log("add user delivery addresses reducer" + JSON.stringify({...state.delivery_addresses, new_address: {id: 1234, street1: "street1", street2: "street2"}}));

      delivery_contacts_addresses_updated = state.delivery_addresses;
      delivery_contacts_addresses_updated.push({name: "n", street1: "street1", street2: "street2"});

      return Object.assign({}, state, {...state, delivery_contacts_addresses: delivery_contacts_addresses_updated});


    case SAVE_USER_DELIVERY_CONTACT_ADDRESS:
      console.log("add user delivery addresses reducer" + JSON.stringify({...state.delivery_addresses, new_address: {id: 1234, street1: "street1", street2: "street2"}}));

      let delivery_addresses_temp = state.delivery_addresses;
      let delivery_addresses_updated = delivery_addresses_temp["new_address"] = {id: 1234, street1: "street1", street2: "street2"};

      return Object.assign({}, state, {...state, delivery_addresses: {...state.delivery_addresses, ["new_address"]: {id: 1234, street1: "street1", street2: "street2"}}});*/

 


    //case GET_USER_PAYMENT_METHODS:
    //  console.log("user" + JSON.stringify(state));

    //  return Object.assign({}, state, {...state, user_delivery_methods: []});


    /*case ADD_USER_PAYMENT_METHOD:
      console.log("ADD user payment methods reducer" + JSON.stringify(state));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.payment_methods;
      payment_methods_updated["work"] = {STRIPE_TOKEN: "", card_number: "012345678", expiry_month: "01"};

      return Object.assign({}, state, {...state, payment_methods: payment_methods_updated});*/


    case SET_USER_PAYMENT_METHOD_NAME_ON_CARD:
      console.log("set user payment methods reducer" + JSON.stringify(state));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.payment_methods;
      payment_methods_updated[0]["name_on_card"] = action.value;

      //return Object.assign({}, state, {...state, payment_methods: payment_methods_updated});


    case SET_USER_PAYMENT_METHOD_CARD_NUMBER:
      console.log("set user payment methods reducer" + JSON.stringify(state));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.payment_methods;
      payment_methods_updated[0]["card_number"] = action.value;

      //return Object.assign({}, state, {...state, payment_methods: payment_methods_updated});

    case SET_USER_PAYMENT_METHOD_CARD_BRAND:
      console.log("set user payment methods reducer" + JSON.stringify(state));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.payment_methods;
      payment_methods_updated[0]["card_number"] = action.value;

      //return Object.assign({}, state, {...state, payment_methods: payment_methods_updated});

    

    case SET_USER_PAYMENT_METHOD_EXPIRY_MONTH:
      console.log("set user payment methods reducer" + JSON.stringify(state));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.payment_methods;
      payment_methods_updated[action.id]["expiry_month"] = action.value;

      return Object.assign({}, state, {...state, payment_methods: payment_methods_updated});


    case SET_USER_PAYMENT_METHOD_EXPIRY_YEAR:
      console.log("set user payment methods reducer" + JSON.stringify(state));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.payment_methods;
      payment_methods_updated[action.id]["expiry_year"] = action.value;

      return Object.assign({}, state, {...state, payment_methods: payment_methods_updated});

    case FIRST_NAME_VALIDATED:

      console.log("FIRST name VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["firstNameValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
   
    case FIRST_NAME_INVALIDATED:

      console.log("FIRST name INVALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["firstNameValidated"] = false;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
   

    case LAST_NAME_VALIDATED:

      console.log("LAST name VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["lastNameValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
   

    case CONTACT_VALIDATED:

      console.log("contact VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["contactValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});

    case CONTACT_EMAIL_VALIDATED:

      console.log("contact EMAIL VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["contactEmailValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
   
    case CONTACT_EMAIL_AGAIN_VALIDATED:

      console.log("contact EMAIL Again VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["contactEmailAgainValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
   
   

    case CONTACT_MOBILE_VALIDATED:

      console.log("contact MOBILE VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["contactMobileValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
   

   case USER_NAME_EMAIL_MOBILE_VALIDATED:

      console.log("user name email mobile VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["userNameEmailMobileValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
      

   case DELIVERY_CONTACT_ADDRESS_VALIDATED:

      console.log("delivery contact address VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["deliveryContactAddressValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});


  
   case SET_ORDER_DELIVERY_DATETIME_DATE:

      console.log("set delivery datetime date reducer" + JSON.stringify(state));

      orders_updated = state.orders;
      orders_updated[0].deliveryDatetimeDate = action.value;
  
      return Object.assign({}, state, {...state, orders: orders_updated});

    case SET_ORDER_DELIVERY_DATETIME_SPECIFIC_TIME:

      console.log("set delivery datetime specific time reducer " + action.time);

      orders_updated = state.orders;
      orders_updated[0].deliveryDatetimeSpecificTime = action.time;
  
      return Object.assign({}, state, {...state, orders: orders_updated});
  
  
    case DATE_VALIDATED:

      console.log("datetime VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["dateValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
  
    case PAYMENT_METHOD_VALIDATED:

      console.log("payment method VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["paymentMethodValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
  
    case PAYMENT_METHOD_NAME_ON_CARD_VALIDATED:

      console.log("payment method VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["paymentMethodNameOnCardValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
  
    case PAYMENT_METHOD_ZIPCODE_VALIDATED:

      console.log("payment method VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["paymentMethodZipcodeValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
  
    case PAYMENT_METHOD_CARD_NUMBER_VALIDATED:

      console.log("payment method VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["paymentMethodCardNumberValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
  

    case PAYMENT_METHOD_EXPIRY_MONTH_VALIDATED:

      console.log("payment method VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["paymentMethodExpiryMonthValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
  
    case PAYMENT_METHOD_EXPIRY_YEAR_VALIDATED:

      console.log("payment method VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["paymentMethodExpiryYearValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
  
    case PAYMENT_METHOD_SECURITY_CODE_VALIDATED:

      console.log("payment method VALIDATED reducer" + JSON.stringify(state));

      order_session_updated = state.orderSession;
      order_session_updated.validations["paymentMethodSecurityCodeValidated"] = true;
  
      return Object.assign({}, state, {...state, orderSession: order_session_updated});
  


    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};