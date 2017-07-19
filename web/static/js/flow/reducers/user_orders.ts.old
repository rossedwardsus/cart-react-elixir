import { LOAD_ORDERS, SAVE_ORDER } from '../constants/actionTypes.ts';

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

export default function UserOrders(state: any = {orders: [{order_id: 1, order_type: "signature", saved: true, created_date: "", image_added: true, guest_count: 0, guest_invitation_message: "", guest_responses: 0}]}, action: any){

  let delivery_addresses: any = [];
  let delivery_address_updated: any = null;

  switch (action.type) {
    case LOAD_ORDERS:
      //alert("CartState " + action.item_id);
      console.log("user delivery addresses " + JSON.stringify(state));

      return Object.assign({}, state, {state});
    
   
    case SAVE_ORDER:
      //alert("CartState " + action.item_id);
      console.log("user delivery addresses " + JSON.stringify(state));

      return Object.assign({}, state, {addresses: delivery_addresses});
    

    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};