import { SET_DELIVERY_ADDRESS_STREET1, SET_DELIVERY_ADDRESS_STREET2, SET_DELIVERY_ADDRESS_CITY, SET_DELIVERY_ADDRESS_STATE, SET_DELIVERY_ADDRESS_ZIPCODE } from '../constants/actionTypes.ts';

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

export default function deliveryAddress(state:any = {street1: "", street2: "", city: "", state: "", zipcode: ""}, action: any){

  let delivery_address_updated = null;

  switch (action.type) {
    case SET_DELIVERY_ADDRESS_STREET1:
      //alert("CartState " + action.item_id);
      //console.log("reducer " + JSON.stringify(state));

        delivery_address_updated = {street1: action.value, street2: state.street2, city: state.city, state: state.state, zipcode: state.zipcode};

        return Object.assign({}, state, delivery_address_updated);

    case SET_DELIVERY_ADDRESS_STREET2:
      //alert("CartState " + action.item_id);
      //console.log("reducer " + JSON.stringify(state));

        delivery_address_updated = {street1: state.street1, street2: action.value, city: state.city, state: state.state, zipcode: state.zipcode};

        return Object.assign({}, state, delivery_address_updated);
       

    case SET_DELIVERY_ADDRESS_CITY:

        delivery_address_updated = {street1: state.street1, street2: state.street2, city: action.value, state: state.state, zipcode: state.zipcode};

        return Object.assign({}, state, delivery_address_updated)


    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};