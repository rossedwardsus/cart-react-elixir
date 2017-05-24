import { SET_PAYMENT_NAME_ON_CARD, SET_PAYMENT_CARD_NUMBER } from '../constants/actionTypes.ts';

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

export default function orderPayment(state:any = {name_on_card: "", card_number: "", expiry_month: "", expiry_year: "", cvc: ""}, action: any){

  let delivery_address_updated = null;

  switch (action.type) {

    case SET_PAYMENT_NAME_ON_CARD:
      
      return Object.assign({}, state, {name_on_card: action.value});
    

    case SET_PAYMENT_CARD_NUMBER:
      
      return Object.assign({}, state, {card_number: action.value});

    //case SET_PAYMENT_EXPIRY_DATE_MONTH:
      
    //  return Object.assign({}, state, {expiry_date_month: action.value});
    
    //case SET_PAYMENT_EXPIRY_DATE_YEAR:
      
    //  return Object.assign({}, state, {expiry_date_year: action.value});
    
    //case SET_PAYMENT_CVC:
      
    //  return Object.assign({}, state, {cvc: action.value});
    


    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};