import { SET_CONTACT_EMAIL, SET_CONTACT_MOBILE } from '../constants/actionTypes.ts';

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

export default function contact(state:any = {email: "", mobile: ""}, action: any){
  switch (action.type) {
    case SET_CONTACT_EMAIL:
      //alert("CartState " + action.item_id);
      console.log("email" + JSON.stringify(action.value));

      return Object.assign({}, state, {email: action.value, mobile: state.mobile});

     case SET_CONTACT_MOBILE:
      //alert("CartState " + action.item_id);
      console.log("mobile" + JSON.stringify(action.value));

      return Object.assign({}, state, {email: state.email, mobile: action.value});

  
    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};