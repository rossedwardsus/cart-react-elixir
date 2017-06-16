import { SET_EVENT_NAME } from '../constants/actionTypes.ts';

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

export default function sconelySignature(state:any = {event_name: "", delivery_datetime: "", delivery_address: "", expected_guest_count: "", code: "", total_due: "", event_image_uploaded: "", event_guest_choices: ""}, action: any){

  let delivery_address_updated = null;

  switch (action.type) {
    case SET_EVENT_NAME:
      //console("CartState " + action.item_id);
      console.log("setevent name reducer " + action.value);

      return Object.assign({}, state, {...state, event_name: action.value});
    
    

    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};