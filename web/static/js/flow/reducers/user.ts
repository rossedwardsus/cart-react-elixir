import { GET_USER, SET_USER_FIRST_NAME, SET_USER_LAST_NAME, SET_USER_EMAIL, GET_USER_ORDERS, ADD_USER_DELIVERY_ADDRESS, GET_USER_DELIVERY_ADDRESSES, ADD_USER_DELIVERY_CONTACT, GET_USER_DELIVERY_CONTACTS, GET_USER_PAYMENT_METHODS } from '../constants/actionTypes.ts';

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

export default function user(state:any = {first_name: "Ross", last_name: "Edwards", email: "email", mobile: "mobile", orders: [{order_id: 1, order_type: "signature", delivery_date: "", event_name: ""}], delivery_address_names: [], delivery_addresses: {"home": {id: 1234, street1: "street1", street2: "street2"}, "home1": {id: 1234, street1: "street1", street2: "street2"}}, delivery_contacts: [], payment_methods: {"personal": {id: 1, stripe_token: "", last_4_digits: "1234"}}}, action: any){

  let delivery_address_updated = null;

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

    
  

    case ADD_USER_DELIVERY_ADDRESS:
      console.log("add user delivery addresses reducer" + JSON.stringify({...state.delivery_addresses, new_address: {id: 1234, street1: "street1", street2: "street2"}}));

      let delivery_addresses_temp = state.delivery_addresses;
      let delivery_addresses_updated = delivery_addresses_temp["new_address"] = {id: 1234, street1: "street1", street2: "street2"};

      return Object.assign({}, state, {...state, delivery_addresses: {...state.delivery_addresses, ["new_address"]: {id: 1234, street1: "street1", street2: "street2"}}});

    /*case UPDATE_USER_DELIVERY_ADDRESS:
      console.log("add user delivery addresses reducer" + JSON.stringify({...state.delivery_addresses, new_address: {id: 1234, street1: "street1", street2: "street2"}}));

      let delivery_addresses_temp = state.delivery_addresses;
      let delivery_addresses_updated = delivery_addresses_temp["new_address"] = {id: 1234, street1: "street1", street2: "street2"};

      return Object.assign({}, state, {...state, delivery_addresses: {...state.delivery_addresses, ["new_address"]: {id: 1234, street1: "street1", street2: "street2"}}});*/


    case GET_USER_DELIVERY_CONTACTS:
      console.log("user delivery contacts reducer" + JSON.stringify(state));

      return Object.assign({}, state, {...state, delivery_contacts: action.data});


    case ADD_USER_DELIVERY_CONTACT:
      console.log("ADD user delivery contacts reducer" + JSON.stringify(state));

      //let delivery_addresses_temp = state.delivery_addresses;

      return Object.assign({}, state, {...state, delivery_contacts: [...state.delivery_contacts, {name: {street1: ""}}]});



 


    case GET_USER_PAYMENT_METHODS:
      console.log("user" + JSON.stringify(state));

      return Object.assign({}, state, {...state, user_delivery_methods: []});


    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};