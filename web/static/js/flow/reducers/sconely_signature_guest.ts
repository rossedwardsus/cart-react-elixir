import { GUEST_ADD_CART_ITEM, SET_GUEST_FIRST_NAME, SET_GUEST_LAST_NAME, SET_GUEST_HOST_MESSAGE } from '../constants/actionTypes.ts';

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

export default function sconely_signature_guest(state:any = {chosen_item: "", first_name: "", last_name: "", email: "", host_message: ""}, action: any){

  let delivery_address_updated = null;

  switch (action.type) {
    case GUEST_ADD_CART_ITEM:
      //alert("CartState " + action.item_id);
      console.log("GUEST CART item reducer");

      return Object.assign({}, state, {...state, chosen_item: "ci"});
    

    /*case SET_USER_DELIVERY_ADDRESS_STREET1:
      //alert("CartState " + action.item_id);
      //console.log("reducer " + JSON.stringify(state));

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
      //return Object.assign({}, state.order, {cart_items: [...state.cart_items, {item_id: action.item_id, title: "another item", quantity: 1}]});
      //return {order: {delivery_address: {}, cart_items: [{item_id: 1, title: "from reducer view public menu yippee caye!", dozens: 1, quantity: 1, mini: true}]}}
      
      delivery_address_updated = {delivery_address_street: action.value, delivery_address_city: "state.default.delivery_address.delivery_address_city", delivery_address_state: "state.default.delivery_address.delivery_address_city", delivery_address_zipcode: "state.default.delivery_address.delivery_address_zipcode"};

      //return Object.assign({}, state, {delivery_address: {delivery_address_street: action.value, delivery_address_city: ""}})
      return Object.assign({}, state, {delivery_addresses: delivery_address_updated});
    

    case SET_DELIVERY_ADDRESS_CITY:
      //alert("CartState " + action.item_id);
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

      delivery_address_updated = {delivery_address_street: action.value, delivery_address_city: "state.default.delivery_address.delivery_address_city", delivery_address_state: "state.default.delivery_address.delivery_address_city", delivery_address_zipcode: "state.default.delivery_address.delivery_address_zipcode"};

      //return Object.assign({}, state, new_state);
      //return Object.assign({}, state.order, {cart_items: [...state.cart_items, {item_id: action.item_id, title: "another item", quantity: 1}]});
      //return {order: {delivery_address: {}, cart_items: [{item_id: 1, title: "from reducer view public menu yippee caye!", dozens: 1, quantity: 1, mini: true}]}}
      return Object.assign({}, state, {delivery_address: delivery_address_updated})*/


    

    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};