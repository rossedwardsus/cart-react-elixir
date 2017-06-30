import { GET_USER_ORDER_DETAILS, SET_EVENT_NAME, SET_GUEST_COUNT } from '../constants/actionTypes.ts';

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

export default function orderEventDetails(state:any = {orders: [{order_id: 1, event_name: "", total_due: "", image_uploaded: true, invited_guest_count: 20, invited_guest_message: "", guest_responses: ""}]}, action: any){

  let delivery_address_updated = null;
  let orders_updated: any = [];

  switch (action.type) {

    case GET_USER_ORDER_DETAILS:
      //alert("CartState " + action.item_id);
      console.log("user order details reducer" + JSON.stringify(state));

      return Object.assign({}, state, {state});



    case SET_EVENT_NAME:
      //console("CartState " + action.item_id);
      console.log("setevent name reducer " + action.value);

      orders_updated = state.orders.map((order: any) => {

            //if(address.address)
            console.log("order id" + order.order_id);
            if(order.order_id == 1){
                
                order.event_name = action.value;

            }

            return order;

      })

      return Object.assign({}, state, {orders: orders_updated});
    
  
    case SET_GUEST_COUNT:
      //console("CartState " + action.item_id);
      console.log("set guest count reducer " + action.value);

      orders_updated = state.orders.map((order: any) => {

            //if(address.address)
            console.log("order id" + order.order_id);
            if(order.order_id == 1){
                
                order.guest_count = action.value;

            }

            return order;

      })

      return Object.assign({}, state, {orders: orders_updated});
  

    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};