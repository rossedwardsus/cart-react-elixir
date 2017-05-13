import { SET_FIRST_NAME, SET_LAST_NAME } from '../constants/actionTypes.ts';

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

export default function name(state:any = {first_name: "first", last_name: ""}, action: any){
  switch (action.type) {
    case SET_FIRST_NAME:
      //alert("CartState " + action.item_id);
      console.log("first name" + JSON.stringify(action.value));

      return Object.assign({}, state, {name: {first_name: action.value, last_name: state.last_name}});

      //return Object.assign({}, state.order, {cart_items: [...state.cart_items, {item_id: action.item_id, title: "another item", quantity: 1}]});
      //return {order: {order_id: "", name: {first: , contact: {email: "", phone: ""}, delivery_address: {}, cart_items: [{item_id: 1, title: "from reducer view public menu yippee caye!", dozens: 1, quantity: 1, mini: true}]}}
    
    case SET_LAST_NAME:
      //alert("CartState " + action.item_id);
      console.log("last name" + JSON.stringify(action.value));

      return Object.assign({}, state, {name: {first_name: state.first_name, last_name: action.value}});

      //return Object.assign({}, state.order, {cart_items: [...state.cart_items, {item_id: action.item_id, title: "another item", quantity: 1}]});
      //return {order: {order_id: "", name: {first: , contact: {email: "", phone: ""}, delivery_address: {}, cart_items: [{item_id: 1, title: "from reducer view public menu yippee caye!", dozens: 1, quantity: 1, mini: true}]}}
 
  
    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};