import { REGISTER } from '../constants/actionTypes.ts';

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

export default function register(state:any = {user_id: "guest"}, action: any){
  switch (action.type) {
    
    
    case REGISTER:
      console.log("login reducer" + action.data);
      //alert("add cart item " + JSON.stringify(state));

      return {user_id: 1, first_name: "", session_id: "", key: "", logged_in: true};

    default:
      //alert();
      //return Object.assign({}, state, {logged_in: true, cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      //return Object.assign({}, state.default, {})
      return state
  }
};