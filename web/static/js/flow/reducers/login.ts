import { CHECK_LOGGED_IN, LOG_IN } from '../constants/actionTypes.ts';

let menu_items: any;

interface CartState {
  logged_in: string,
  user_type: string;
  address: string;
  payment_method: string;
  menu_items: any;
  cart: any;
};

/*let inititalState: CartState = {

  logged_in: "",
  user_type: "",
  address: "",
  payment_method: "",
  menu_items: [],
  cart: [],

}*/

export default (state:any = [], action: any) => {
  switch (action.type) {
    case CHECK_LOGGED_IN:
      //alert("CartState " + action.item_id);
      return Object.assign({}, {...state.default, logged_in: true, order: []})
      //return []
    
    case LOG_IN:
      alert("CartState " + action.item_id);
      //alert("add cart item " + JSON.stringify(state));

      //alert("view public menu reducer" + JSON.stringify(action));
      //state.push({menu_items: [{item_id: 1, title: "from reducer view public menu"}]})
      //return "hello";
      //alertObject.assign({}, state);
      //alert(state);
      //return Object.assign({}, ...state);

      //return Object.assign({}, ...state, action.menu_items)
      //return Object.assign({}, {menu_items: action.menu_items});

      //let cart_items_temp = state.cart_items;
      //cart_items_temp.push({item_id: 2, title: "another item"});

      //alert("cart items temp updated " + JSON.stringify(cart_items_temp));

      //let new_state = {cart_items: cart_items_temp};

      //return Object.assign({}, state, new_state);
      //return Object.assign({}, state, {cart_items: [...state.cart_items, {item_id: action.item_id, title: "another item"}]});
      //return {"menu_items": [{item_id: 1, title: "from reducer view public menu yippee caye!"}]}
    default:
      //alert();
      //return Object.assign({}, state, {logged_in: true, cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      //return Object.assign({}, state.default, {})
      return state
  }
};