import { CREATE_ORDER } from '../constants/actionTypes.ts';

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

export default function UserOrder(state:any = {orders: []}, action: any){

  let order_index: any = null;
  let delivery_address_updated = null;
  let orders_updated: any = [];

  switch (action.type) {

    case CREATE_ORDER:
      console.log("CREATE order reducer " + JSON.stringify(action));

      //set session current order type

      orders_updated = state.orders;

      if(action.order_type == "yours" || action.order_type == "social"){

          orders_updated[0] = {deliveryCost: "", orderStartedDateTime: "", order_type: action.order_type, cartItems: []};

      }else{

          orders_updated[0] = {deliveryCost: "", deliveryDatetimeDate: "", orderStartedDateTime: "", order_type: action.order_type, pool_admin_receipt_order_id: action.pool_admin_receipt_order_id, pool_name: action.pool_name, pool_delivery_date_formatted: action.pool_delivery_date_formatted, pool_order_by_date_formatted: action.pool_order_by_date_formatted, pool_address: action.pool_address, pool_location: action.pool_location, pool_message: action.pool_message, cartItems: []};

      }

      return Object.assign({}, state, {orders: orders_updated});


   
  }
};