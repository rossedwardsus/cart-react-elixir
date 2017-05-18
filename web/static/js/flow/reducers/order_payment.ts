import { SET_PAYMENT_CARD_NUMBER } from '../constants/actionTypes.ts';

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

export default function orderPayment(state:any = {card_number: "", expiry_month: "", expiry_year: "", cvc: ""}, action: any){

  let delivery_address_updated = null;

  switch (action.type) {
    case SET_PAYMENT_CARD_NUMBER:
      
      return Object.assign({}, state, {card_number: action.value});
    


    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};