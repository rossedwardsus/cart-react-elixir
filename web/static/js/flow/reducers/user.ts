import { SET_USER_FIRST_NAME, SET_USER_LAST_NAME, SET_USER_EMAIL, GET_USER_ORDERS, ADD_USER_DELIVERY_ADDRESS, GET_USER_DELIVERY_ADDRESSES, ADD_USER_DELIVERY_CONTACT, GET_USER_DELIVERY_CONTACTS, GET_USER_PAYMENT_METHODS } from '../constants/actionTypes.ts';

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

export default function user(state:any = {first_name: "", last_name: "", email: "", mobile: "", user_orders: [], delivery_address_names: [], delivery_addresses: [], delivery_contacts: [], user_payment_methods: []}, action: any){

  let delivery_address_updated = null;

  switch (action.type) {
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
      console.log("ADD user delivery addresses reducer" + JSON.stringify(state));

      //let delivery_addresses_temp = state.delivery_addresses;

      return Object.assign({}, state, {...state, delivery_addresses: [...state.delivery_addresses, {name: {street1: ""}}]});



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