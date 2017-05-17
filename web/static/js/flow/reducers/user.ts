import { REGISTER } from '../constants/actionTypes.ts';

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

export default function user(state:any = {session_key: "", first_name: "", last_name: ""}, action: any){

  let delivery_address_updated = null;

  switch (action.type) {
    case REGISTER:
      console.log("user" + JSON.stringify(state));

      return Object.assign({}, state, {session_key: "key", first_name: "ross", last_name: "edwards"});
    

    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};