import { SIGNATURE_GUEST_LOAD_ORDER, SIGNATURE_GUEST_SAVE_CHOICE, SIGNATURE_GUEST_COMPLETE_RESPONSE} from '../constants/actionTypes.ts';

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

export default function SignatureGuestResponse(state:any = {order_id: 1, event_full_name: "", chosen_item: "", first_name: "", last_name: "", email: "", guest_response_validated: "", menu_items: []}, action: any){

  let delivery_addresses: any = [];
  let delivery_address_updated: any = null;

  switch (action.type) {

    case SIGNATURE_GUEST_LOAD_ORDER:
      //alert("CartState " + action.item_id);
      console.log("load order " + JSON.stringify(action.data));

      return Object.assign({}, state, {event_full_name: action.data.event_full_name, invited_guest_message: action.data.invited_guest_message, menu_items: action.data.menu_items});
    

    case SIGNATURE_GUEST_SAVE_CHOICE:
      //alert("CartState " + action.item_id);
      console.log("chosen item " + JSON.stringify(action));

      return Object.assign({}, state, {chosen_item: action.data.item_id});
    

    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};