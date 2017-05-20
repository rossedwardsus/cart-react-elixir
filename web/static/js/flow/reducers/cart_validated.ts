import { CART_VALIDATED, CART_INVALIDATED, DELIVERY_ADDRESS_VALIDATED, DATETIME_VALIDATED, CONTACT_VALIDATED, NAME_VALIDATED, PAYMENT_VALIDATED } from '../constants/actionTypes.ts';

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

export default function cart_validated(state:any = {cart_validated: false, delivery_address_validated: false, datetime_validated: false, contact_validated: false, name_validated: false, payment_validated: false}, action: any){
  switch (action.type) {
    case CART_VALIDATED:

      console.log("cart VALIDATED" + JSON.stringify(state));
   
      return Object.assign({}, state, {cart_validated: true});

    case CART_INVALIDATED:

      console.log("cart VALIDATED" + JSON.stringify(state));
  
      return Object.assign({}, state, {cart_validated: false});

    /*case DATETIME_INVALIDATED:

      console.log("cart VALIDATED" + JSON.stringify(state));
  
      return Object.assign({}, state, {datetime_validated: false});*/
   
    

    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};