import { GET_USER_ORDERS, ADD_USER_DELIVERY_ADDRESS, GET_USER_DELIVERY_ADDRESSES, GET_USER_DELIVERY_ADDRESS_NAMES, GET_USER_PAYMENT_NAMES } from '../constants/actionTypes.ts';

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

export default function user(state:any = {first_name: "", last_name: "", user_orders: [], delivery_address_names: [], delivery_addresses: [], user_payment_methods: []}, action: any){

  let delivery_address_updated = null;

  switch (action.type) {
    case GET_USER_ORDERS:
      console.log("user" + JSON.stringify(state));

      return Object.assign({}, state, {...state, user_orders: []});
    

    case GET_USER_DELIVERY_ADDRESS_NAMES:
      console.log("user names" + JSON.stringify(state));

      return Object.assign({}, state, {...state, user_delivery_address_names: action.data});
 

    case GET_USER_DELIVERY_ADDRESSES:
      console.log("user delivery addresses reducer" + JSON.stringify(state));

      return Object.assign({}, state, {...state, delivery_addresses: action.data});

    case ADD_USER_DELIVERY_ADDRESS:
      console.log("ADD user delivery addresses reducer" + JSON.stringify(state));

      //let delivery_addresses_temp = state.delivery_addresses;

      return Object.assign({}, state, {...state, delivery_addresses: [...state.delivery_addresses, {name: {street1: ""}}]});
 

    case GET_USER_PAYMENT_NAMES:
      console.log("user" + JSON.stringify(state));

      return Object.assign({}, state, {...state, user_delivery_addresses: []});


    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};