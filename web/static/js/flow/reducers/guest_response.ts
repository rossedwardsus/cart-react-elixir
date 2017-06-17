import { SAVE_ORDER } from '../constants/actionTypes.ts';

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

export default function UserOrders(state: any = {orders: {order_id: 1, saved: true}}, action: any){

  let delivery_addresses: any = [];
  let delivery_address_updated: any = null;

  switch (action.type) {
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