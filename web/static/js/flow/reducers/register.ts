import { REGISTER_SET_FIRST_NAME, REGISTER_SET_LAST_NAME, REGISTER_SET_EMAIL, REGISTER_SET_EMAIL_AGAIN, REGISTER_SET_PASSWORD, REGISTER_SET_PASSWORD_AGAIN, REGISTER_USER } from '../constants/actionTypes.ts';

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

export default function register(state:any = {first_name: "", last_name: "", email: "", email_again: "", password: "", password_again: ""}, action: any){
  switch (action.type) {

    case REGISTER_SET_FIRST_NAME:
      console.log("register first name reducer" + action.data);
      //alert("add cart item " + JSON.stringify(state));

      return Object.assign({}, state, {...state, first_name: action.value});
    
    case REGISTER_SET_LAST_NAME:
      console.log("last name reducer" + action.data);
      //alert("add cart item " + JSON.stringify(state));

      return Object.assign({}, state, {...state, last_name: action.value});
    
    case REGISTER_SET_EMAIL:
      console.log("login reducer" + action.data);
      //alert("add cart item " + JSON.stringify(state));

      return Object.assign({}, state, {...state, email: action.value});

    case REGISTER_SET_EMAIL_AGAIN:
      console.log("login reducer" + action.data);
      //alert("add cart item " + JSON.stringify(state));

      return Object.assign({}, state, {...state, email_again: action.value});
    
    

    case REGISTER_SET_PASSWORD:
      console.log("login reducer" + action.data);
      //alert("add cart item " + JSON.stringify(state));

      //return {user_id: 1, first_name: "", session_id: "", key: "", logged_in: true};
      return {registration: true};

    case REGISTER_SET_PASSWORD_AGAIN:
      console.log("login reducer" + action.data);
      //alert("add cart item " + JSON.stringify(state));

      //return {user_id: 1, first_name: "", session_id: "", key: "", logged_in: true};
      return {registration: true};

    
    case REGISTER_USER:
      console.log("login reducer" + action.data);
      //alert("add cart item " + JSON.stringify(state));

      //return {user_id: 1, first_name: "", session_id: "", key: "", logged_in: true};
      return {registration: true};

    default:
      //alert();
      //return Object.assign({}, state, {logged_in: true, cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      //return Object.assign({}, state.default, {})
      return state
  }
};