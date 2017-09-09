import { GET_USER, SET_ORDER_TYPE, CREATE_ORDER, COMPLETE_ORDER, CLEAR_USER, ADD_CART_ITEM, SET_USER_NAME_FIRST, SET_USER_NAME_LAST, SET_USER_CONTACT_EMAIL, SET_USER_CONTACT_MOBILE, GET_USER_ORDERS, ADD_USER_DELIVERY_CONTACT_ADDRESS, SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_LAST_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_EMAIL, SET_USER_DELIVERY_CONTACT_ADDRESS_MOBILE, SET_USER_DELIVERY_CONTACT_ADDRESS_COMPANY_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_STREET1, SET_USER_DELIVERY_CONTACT_ADDRESS_STREET2, SET_USER_DELIVERY_CONTACT_ADDRESS_CITY, SET_USER_DELIVERY_CONTACT_ADDRESS_STATE, SET_USER_DELIVERY_CONTACT_ADDRESS_ZIPCODE, ADD_USER_PAYMENT_METHOD, SET_USER_PAYMENT_METHOD_CARD_NUMBER, SET_USER_PAYMENT_METHOD_EXPIRY_MONTH, SET_USER_PAYMENT_METHOD_EXPIRY_YEAR, SET_USER_PAYMENT_METHOD_SECURITY_CODE, SAVE_FOR_LATER } from '../constants/actionTypes.ts';

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

export default function user(state:any = {first_name: "Ross", last_name: "Edwards", email: "email", mobile: "mobile", saveForLater: false, currentOrder: "social", orders: [], delivery_address_names: [], deliveryContactsAddresses: [{name: "1", first_name: "fn", last_name: "ln", email: "", mobile: "", street1: "street1", street2: "street2"}, {name: "2", first_name: "fn", last_name: "ln", street1: "street1", street2: "street2"}], paymentMethods: [{name: "personal", name_on_card: "ross", card_number: "12345678", expiry_month: "12", expiry_year: ""}, {name: "work", name_on_card: "ross", card_number: "987654321", expiry_month: "01", expiry_year: "", security_code: ""}]}, action: any){

  let delivery_contacts_addresses_updated = null;
  let payment_methods_updated = null;
  let user_updated = null;
  let orders_updated = null;
  let save_for_later_updated = null;

  switch (action.type) {
    case GET_USER:
      console.log("set user email" + JSON.stringify(state));

      //normalizr
      //delivery addrress

      return Object.assign({}, state, {...state, email: action.data});


    //complete_order
    //set order status to "completed"
    case CLEAR_USER:
      console.log("CLEAR USER REDUCER " + JSON.stringify(state));

      //normalizr
      //delivery addrress

      //return Object.assign({}, state, {...state, email: action.});
      return {first_name: "Ross", last_name: "Edwards", email: "email", mobile: "mobile", saveForLater: false, orders: [{order_id: 1, order_type: "social", delivery_date: "", event_name: "", status: "started", cartItems: [{item_id: 1, twelveortwentyfourminis: "24_minis", quantity: "1"}]}], delivery_address_names: [], deliveryContactsAddresses: [{name: "1", first_name: "fn", last_name: "ln", email: "", mobile: "", street1: "street1", street2: "street2"}, {name: "2", first_name: "fn", last_name: "ln", street1: "street1", street2: "street2"}], paymentMethods: [{name: "personal", name_on_card: "ross", card_number: "12345678", expiry_month: "12", expiry_year: ""}, {name: "work", name_on_card: "ross", card_number: "987654321", expiry_month: "01", expiry_year: "", security_code: ""}]};


    case SET_ORDER_TYPE:
      console.log("set order type reducer");

      //find order where status == "started"
      //if none exists that add the order

      //set name here or just set it in default



      orders_updated = state.orders;

      //if another pool order exists change it's status to "saved"

      orders_updated.push({order_type: "pool", pool_order_id: "", pool_name: action.pool_name, pool_date: action.pool_date, pool_message: action.pool_message, status: "current", created_datetime: "", cartItems: []})

      let started_order = state.orders.findIndex((order: any) => order.status == "started");

      console.log("started order " + started_order);


      /*if(action.order_type == "pool"){

          //orders_updated = state.orders;
          //orders_updated[0]["order_type"] = action.order_type;
          //orders_updated[0]["pool_name"] = action.pool_name;
          //orders_updated[0]["pool_date"] = action.pool_date;

          //if order_type == pool then add pool_name to order
          //also need to load the message for the pool order

      }*/

      //return Object.assign({}, state, {orders: orders_updated});

      return Object.assign({}, state, {orders: orders_updated});



    case CREATE_ORDER:
      console.log("add cart reducer");

      user_updated = state.cartItems;
      user_updated["first_name"] = action.value;

      return Object.assign({}, state, {user: user_updated});



    case ADD_CART_ITEM:
      console.log("add cart item reducer here " + JSON.stringify(action));

      //if order_type == social

      //orders.filter((order: ) => order.order_type == "social"

      orders_updated = state.orders;
      //orders_updated[0].cartItems.push({item_id: action.item_id, twelveortwentyfourminis: action.twelveortwentyfourminis, quantity: action.quantity});

      //else
      orders_updated[0].cartItems.push({item_id: action.item_id, quantity: action.quantity});


      return Object.assign({}, state, {...state, orders: orders_updated});




    /*case SET_USER_NAME_FIRST:
      console.log("user first name reducer" + JSON.stringify(state));

      user_updated = state.user;
      user_updated["first_name"] = action.value;

      return Object.assign({}, state, {user: user_updated});

    case SET_USER_NAME_LAST:
      console.log("user last name reducer" + JSON.stringify(state));

      return Object.assign({}, state, {...state, last_name: action.data});

   

    case SET_USER_CONTACT_EMAIL:
      console.log("set user email" + JSON.stringify(state));

      return Object.assign({}, state, {...state, email: action.data});
    
    case SET_USER_CONTACT_MOBILE:
      console.log("set user email" + JSON.stringify(state));

      return Object.assign({}, state, {...state, email: action.data});
    

    case SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME:

      console.log("user delivery contact address first name reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].first_name = action.value; 

      return Object.assign({}, state, {...state, deliveryContactAddress: delivery_contacts_addresses_updated });

      //else remove item

    case SET_USER_DELIVERY_CONTACT_ADDRESS_LAST_NAME:

      console.log("user delivery contact address last name reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].last_name = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item

    case SET_USER_DELIVERY_CONTACT_ADDRESS_MOBILE:

      console.log("user delivery contact address mobile reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].mobile = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item

    /*case SET_USER_DELIVERY_CONTACT_ADDRESS_MOBILE1:

      console.log("user delivery contact address mobile reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].mobile = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item

    case SET_USER_DELIVERY_CONTACT_ADDRESS_MOBILE2:

      console.log("user delivery contact address mobile reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].mobile = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item*/

    case SET_USER_DELIVERY_CONTACT_ADDRESS_COMPANY_NAME:

      console.log("user delivery contact address company name reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].company = action.value; 

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
      delivery_contacts_addresses_updated[0].street1 = action.value; 

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
      delivery_contacts_addresses_updated[0].street1 = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item


    case SET_USER_DELIVERY_CONTACT_ADDRESS_ZIPCODE:

      console.log("user delivery contact address zipcode reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].street1 = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item

    case SAVE_FOR_LATER:

      console.log("user save for later reducer");

      save_for_later_updated = state.saveForLater;
      save_for_later_updated = action.value; 

      return Object.assign({}, state, {...state, saveForLater: save_for_later_updated});

      //else remove item


    /*case SET_USER_DELIVERY_CONTACT_ADDRESS_NOTE:

      console.log("user delivery contact address mobile reducer");

      delivery_contacts_addresses_updated = state.deliveryContactsAddresses;
      delivery_contacts_addresses_updated[0].mobile = action.value; 

      return Object.assign({}, state, {...state, deliveryContactsAddresses: delivery_contacts_addresses_updated });

      //else remove item*/


    case SET_USER_PAYMENT_METHOD_CARD_NUMBER:
      console.log("set user payment methods reducer card number " + JSON.stringify(action.value));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.paymentMethods;
      payment_methods_updated[0]["card_number"] = action.value;

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

      return Object.assign({}, state, {...state, payment_methods: payment_methods_updated});

    case SET_PAYMENT_METHOD_CARD_NUMBER:
      console.log("set user payment methods reducer" + JSON.stringify(state));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.payment_methods;
      payment_methods_updated[0]["card_number"] = "987654321";

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

      return Object.assign({}, state, {...state, payment_methods: payment_methods_updated});*/



    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};