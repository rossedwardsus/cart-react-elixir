import { SET_SESSION_ID, SET_EMAIL, SET_PASSWORD, SET_PASSWORD_AGAIN, CHECK_LOGGED_IN, LOGIN } from '../constants/actionTypes.ts';

let menu_items: any;

interface CartState {
  logged_in: string,
  user_type: string;
  address: string;
  payment_method: string;
  menu_items: any;
  cart: any;
};

/*let inititalState: CartState = {

  logged_in: "",
  user_type: "",
  address: "",
  payment_method: "",
  menu_items: [],
  cart: [],

}*/

export default function session(state:any = {user_id: "", session_key: "", session_start_datetime: ""}, action: any){
  switch (action.type) {
    case SET_SESSION_ID:
      //alert("CartState " + action.item_id);

      //default to "guest" if not logged in
      //if logged in then set to user_id of logged in user

      return Object.assign({}, {...state, user_id: "guest"})

    default:
      //alert();
      //return Object.assign({}, state, {logged_in: true, cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      //return Object.assign({}, state.default, {})
      return state
  }
};