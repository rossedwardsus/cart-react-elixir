import { SIGNATURE_GUEST_LOAD_ORDER, SIGNATURE_GUEST_SAVE_CHOICE, SIGNATURE_GUEST_SAVE_CHOICE_NO_SCONE, SIGNATURE_GUEST_COMPLETE_RESPONSE } from '../constants/actionTypes.ts';

const Immutable = require('immutable');

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

/*const { Map, List, fromJS } = Immutable
const initialState = Map({
  foo: 'bar',
  fooList: List()
})

export function someStore (state = initialState, action) {
  if (action.type === 'FOO') {
    return state.set('foo', fromJS(action.foo))
  }
  if (action.type === 'FOO_LIST') {
    return state.set('fooList', fromJS(action.fooList))
  }

  return state
}*/


//make initial state immutable???  and normalizd
//nrmalizer for menu as title needs to be gotten in the cart
//actually that is really more on the host end

//let initial_state = Immutable.fromJs({order_id: 1, chosen_item_id: 0, event_full_name: "", first_name: "", last_name: "", email: "", guest_response_validated: "", menu_items: []});



export default function SignatureGuestResponse(state:any = {order_id: 1, event_full_name: "", order_delivery_date: "", first_name: "", last_name: "", email: "", guest_response_validated: ""}, action: any){

  let delivery_addresses: any = [];
  let delivery_address_updated: any = null;

  switch (action.type) {

    case SIGNATURE_GUEST_LOAD_ORDER:
      //alert("CartState " + action.item_id);
      console.log("load order " + JSON.stringify(action.data));

      return Object.assign({}, state, {event_full_name: action.data.event_full_name, invited_guest_message: action.data.invited_guest_message});

    case SIGNATURE_GUEST_SAVE_CHOICE:
      //alert("CartState " + action.item_id);
      console.log("chosen item " + JSON.stringify(action));

      return Object.assign({}, state, {chosen_item_id: action.data.item_id});
    

    case SIGNATURE_GUEST_SAVE_CHOICE_NO_SCONE:
      //alert("CartState " + action.item_id);
      console.log("chosen item " + JSON.stringify(action));

      return Object.assign({}, state, {chosen_item_id: 0});
    

    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};