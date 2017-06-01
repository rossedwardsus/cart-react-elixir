import { CREATE_ORDER, ORDER_COMPLETED, FAQ, MAILING_LIST, SET_ORDER_ID } from '../constants/actionTypes.ts';

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

export default function order(state:any = {order_type: "", order_id: "", user_id: "", mailing_list: "", faq: ""}, action: any){
  switch (action.type) {
    case CREATE_ORDER:

      console.log("order reducer " + action.order_type);
    
      //let items = state.cart_items;
      //items.push({item_id: 1, dozens: 1, quantity: 1, mini: true});
      
      return Object.assign({}, state, {order_type: action.order_type});

    //complete_order

    case MAILING_LIST:

      console.log("order reducer mailing list" + action.value);
    
      //let items = state.cart_items;
      //items.push({item_id: 1, dozens: 1, quantity: 1, mini: true});
      
      return Object.assign({}, state, {mailing_list: true});

    case FAQ:

      console.log("order reducer faq" + action.value);
    
      //let items = state.cart_items;
      //items.push({item_id: 1, dozens: 1, quantity: 1, mini: true});
      
      return Object.assign({}, state, {faq: true});


    case SET_ORDER_ID:

      console.log("set order id reducer " + action.order_id);
    
      //let items = state.cart_items;
      //items.push({item_id: 1, dozens: 1, quantity: 1, mini: true});
      
      return Object.assign({}, state, {order_id: "1"});


    case ORDER_COMPLETED:

      console.log("order reducer " + action.order_type);
    
      //let items = state.cart_items;
      //items.push({item_id: 1, dozens: 1, quantity: 1, mini: true});
      
      return Object.assign({}, state, {order_type: action.order_type});

    
    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};