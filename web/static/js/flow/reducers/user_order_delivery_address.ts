import { GET_USER_ORDER_DELIVERY_CONTACT, GET_USER_ORDER_DELIVERY_ADDRESS, SET_USER_ORDER_DELIVERY_ADDRESS_STREET1, SET_USER_ORDER_DELIVERY_ADDRESS_STREET2, SET_USER_ORDER_DELIVERY_ADDRESS_CITY, SET_USER_ORDER_DELIVERY_ADDRESS_STATE, SET_USER_ORDER_DELIVERY_ADDRESS_ZIPCODE} from '../constants/actionTypes.ts';

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

export default function userOrderDeliveryAddress(state: any = {addresses: {}}, action: any){

  let delivery_addresses: any = [];
  let delivery_addresses_updated: any = null;

  switch (action.type) {

    case GET_USER_ORDER_DELIVERY_CONTACT:
      //alert("CartState " + action.item_id);
      console.log("user order delivery contact reducer" + JSON.stringify(state));

      return Object.assign({}, state, {addresses: {1: {email: action.street1}}});
  
    case GET_USER_ORDER_DELIVERY_ADDRESS:
      //alert("CartState " + action.item_id);
      console.log("user order delivery address reducer" + JSON.stringify(state));

      return Object.assign({}, state, {addresses: {1: {street1: action.street1}}});
  

    /*case GET_USER_DELIVERY_ADDRESSES:
      //alert("CartState " + action.item_id);
      console.log("user delivery addresses " + JSON.stringify(state));

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
      
      delivery_addresses.push({address_id: 1, name: "home", delivery_address_street: action.value, delivery_address_city: "state.default.delivery_address.delivery_address_city", delivery_address_state: "state.default.delivery_address.delivery_address_city", delivery_address_zipcode: "state.default.delivery_address.delivery_address_zipcode"});

      delivery_addresses.push({address_id: 2, name: "work", delivery_address_street: action.value, delivery_address_city: "state.default.delivery_address.delivery_address_city", delivery_address_state: "state.default.delivery_address.delivery_address_city", delivery_address_zipcode: "state.default.delivery_address.delivery_address_zipcode"});


      //return Object.assign({}, state, {delivery_address: {delivery_address_street: action.value, delivery_address_city: ""}})
      return Object.assign({}, state, {addresses: delivery_addresses});*/
    

    case SET_USER_ORDER_DELIVERY_ADDRESS_STREET1:
      
      //find the order and set street1

      console.log("user order address reducer");


      delivery_addresses_updated = state.addresses.map((address: any) => {

            //if(address.address)
            console.log("order id" + address.order_id);
            if(address.order_id === 1){
                
                address.address.street1 = action.value;

            }

            return address;

      })
      
      return Object.assign({}, state, {addresses: delivery_addresses_updated});


    case SET_USER_ORDER_DELIVERY_ADDRESS_CITY:
    

      delivery_addresses_updated = state.addresses.map((address: any) => {

            //if(address.address)
            console.log("order id" + address.order_id);
            if(address.order_id === 1){
                
                address.address.city = action.value;

            }

            return address;

      })
      
      return Object.assign({}, state, {addresses:delivery_addresses_updated});

    
    case SET_USER_ORDER_DELIVERY_ADDRESS_CITY:
    
      
      delivery_addresses_updated = state.addresses.map((address: any) => {

            //if(address.address)
            console.log("order id" + address.order_id);
            if(address.order_id === 1){
                
                address.address.city = action.value;

            }

            return address;

      })
      
      return Object.assign({}, state, {addresses: delivery_addresses_updated});


    case SET_USER_ORDER_DELIVERY_ADDRESS_ZIPCODE:
    

      delivery_addresses_updated = state.addresses.map((address: any) => {

            //if(address.address)
            console.log("order id" + address.order_id);
            if(address.order_id === 1){
                
                address.address.zipcode = action.value;

            }

            return address;

      })
      
      return Object.assign({}, state, {addresses: delivery_addresses_updated});
    

    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};