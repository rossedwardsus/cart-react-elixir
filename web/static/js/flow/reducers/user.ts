import { GET_USER, SET_USER_FIRST_NAME, SET_USER_LAST_NAME, SET_USER_EMAIL, GET_USER_ORDERS, ADD_USER_DELIVERY_CONTACT_ADDRESS, ADD_USER_PAYMENT_METHOD, SET_USER_PAYMENT_METHOD_CARD_NUMBER, SET_USER_PAYMENT_METHOD_EXPIRY_MONTH, SET_USER_PAYMENT_METHOD_EXPIRY_YEAR } from '../constants/actionTypes.ts';

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

export default function user(state:any = {first_name: "Ross", last_name: "Edwards", email: "email", mobile: "mobile", orders: [{order_id: 1, order_type: "signature", delivery_date: "", event_name: ""}], delivery_address_names: [], delivery_contacts_addresses: [{name: "home", first_name: "fn", last_name: "ln", street1: "street1", street2: "street2"}, {name: "home1", first_name: "fn", last_name: "ln", street1: "street1", street2: "street2"}], payment_methods: {"personal": {name_on_card: "ross", card_number: "12345678", expiry_month: "12", expiry_year: ""}, "work": {name_on_card: "ross", card_number: "987654321", expiry_month: "01", expiry_year: ""}}}, action: any){

  let delivery_contacts_addresses_updated = null;
  let payment_methods_updated = null;

  switch (action.type) {
    case GET_USER:
      console.log("set user email" + JSON.stringify(state));

      //normalizr
      //delivery addrress

      return Object.assign({}, state, {...state, email: action.data});

    case SET_USER_EMAIL:
      console.log("set user email" + JSON.stringify(state));

      return Object.assign({}, state, {...state, email: action.data});
    

    case SET_USER_FIRST_NAME:
      console.log("user first name reducer" + JSON.stringify(state));

      return Object.assign({}, state, {...state, first_name: action.data});

    case SET_USER_LAST_NAME:
      console.log("user last name reducer" + JSON.stringify(state));

      return Object.assign({}, state, {...state, last_name: action.data});

    
  

    case ADD_USER_DELIVERY_CONTACT_ADDRESS:
      console.log("add user delivery addresses reducer" + JSON.stringify({...state.delivery_addresses, new_address: {id: 1234, street1: "street1", street2: "street2"}}));

      delivery_contacts_addresses_updated = state.delivery_addresses;
      delivery_contacts_addresses_updated.push({name: "n", street1: "street1", street2: "street2"});

      return Object.assign({}, state, {...state, delivery_contacts_addresses: delivery_contacts_addresses_updated});


    /*case SAVE_USER_DELIVERY_CONTACT_ADDRESS:
      console.log("add user delivery addresses reducer" + JSON.stringify({...state.delivery_addresses, new_address: {id: 1234, street1: "street1", street2: "street2"}}));

      let delivery_addresses_temp = state.delivery_addresses;
      let delivery_addresses_updated = delivery_addresses_temp["new_address"] = {id: 1234, street1: "street1", street2: "street2"};

      return Object.assign({}, state, {...state, delivery_addresses: {...state.delivery_addresses, ["new_address"]: {id: 1234, street1: "street1", street2: "street2"}}});*/

 


    //case GET_USER_PAYMENT_METHODS:
    //  console.log("user" + JSON.stringify(state));

    //  return Object.assign({}, state, {...state, user_delivery_methods: []});


    case ADD_USER_PAYMENT_METHOD:
      console.log("ADD user payment methods reducer" + JSON.stringify(state));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.payment_methods;
      payment_methods_updated["work"] = {STRIPE_TOKEN: "", card_number: "012345678", expiry_month: "01"};

      return Object.assign({}, state, {...state, payment_methods: payment_methods_updated});

    case SET_USER_PAYMENT_METHOD_CARD_NUMBER:
      console.log("set user payment methods reducer" + JSON.stringify(state));

      //let delivery_addresses_temp = state.delivery_addresses;

      payment_methods_updated = state.payment_methods;
      payment_methods_updated["personal"]["card_number"] = "987654321";

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



    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};