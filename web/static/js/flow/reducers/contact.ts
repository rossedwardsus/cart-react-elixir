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

export default function contact(state:any = {email: "first", mobile: ""}, action: any){
  switch (action.type) {
    case SET_CONTACT_EMAIL:
      //alert("CartState " + action.item_id);
      console.log("email" + JSON.stringify(action.value));

      return Object.assign({}, state, {email: action.value, mobile: state.mobile});

      //return Object.assign({}, state.order, {cart_items: [...state.cart_items, {item_id: action.item_id, title: "another item", quantity: 1}]});
      //return {order: {order_id: "", name: {first: , contact: {email: "", phone: ""}, delivery_address: {}, cart_items: [{item_id: 1, title: "from reducer view public menu yippee caye!", dozens: 1, quantity: 1, mini: true}]}}
    
    case SET_CONTACT_MOBILE:
      //alert("CartState " + action.item_id);
      console.log("mobile" + JSON.stringify(action.value));

      return Object.assign({}, state, {email: state.email, mobile: action.value});

      //return Object.assign({}, state.order, {cart_items: [...state.cart_items, {item_id: action.item_id, title: "another item", quantity: 1}]});
      //return {order: {order_id: "", name: {first: , contact: {email: "", phone: ""}, delivery_address: {}, cart_items: [{item_id: 1, title: "from reducer view public menu yippee caye!", dozens: 1, quantity: 1, mini: true}]}}
 
  
    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};