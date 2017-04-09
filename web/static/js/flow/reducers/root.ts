import { ADD_CART_ITEM, INCREASE_CART_ITEM_QUANTITY, SET_DATE, SET_TIME, SET_SPECIFIC_TIME, SET_FIRST_NAME, SET_LAST_NAME, SET_DELIVERY_ADDRESS_STREET1, SET_DELIVERY_ADDRESS_STREET2, SET_DELIVERY_ADDRESS_CITY, SET_DELIVERY_ADDRESS_STATE, SET_DELIVERY_ADDRESS_ZIPCODE, SET_PAYMENT_CARD_NUMBER } from '../constants/actionTypes.ts';

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

export default (state:any = [], action: any) => {
  let delivery_address_updated = null;

  switch (action.type) {
    case ADD_CART_ITEM:
      //alert("CartState " + action.item_id);
      alert("add cart item" + JSON.stringify(state.order));

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

      //return Object.assign({}, state, {name: {first_name: action.value, last_name: "state.default.name.last_name"}});

      //return Object.assign({}, state.order, {cart_items: [...state.cart_items, {item_id: action.item_id, title: "another item", quantity: 1}]});
      //return {order: {order_id: "", name: {first: , contact: {email: "", phone: ""}, delivery_address: {}, cart_items: [{item_id: 1, title: "from reducer view public menu yippee caye!", dozens: 1, quantity: 1, mini: true}]}}
    
      if(state.order === undefined){

          alert("cart items");

          return {order: {cart_items: [{item_id: action.item_id, title: "another item", dozens: 1, quantity: 1, mini: true}]}};

      }else{

          alert("else");

          //return Object.assign({}, state, {order: {cart_items: [...state.order.cart_items, {item_id: action.item_id, title: "another item", quantity: 1}]}}});
          return {order: {cart_items: [...state.order.cart_items, {item_id: action.item_id, title: "another item", dozens: 1, quantity: 1, mini: true}]}};
      }

    case SET_FIRST_NAME:
      //alert("CartState " + action.item_id);
      alert("set first name" + JSON.stringify(state));

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

      return Object.assign({}, state, {name: {first_name: action.value, last_name: "state.default.name.last_name"}});

      //return Object.assign({}, state.order, {cart_items: [...state.cart_items, {item_id: action.item_id, title: "another item", quantity: 1}]});
      //return {order: {order_id: "", name: {first: , contact: {email: "", phone: ""}, delivery_address: {}, cart_items: [{item_id: 1, title: "from reducer view public menu yippee caye!", dozens: 1, quantity: 1, mini: true}]}}
    
    case SET_DELIVERY_ADDRESS_STREET1:
      //alert("CartState " + action.item_id);
      alert("reducer " + JSON.stringify(state));

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
      
      delivery_address_updated = {delivery_address_street1: action.value, delivery_address_city: "state.default.delivery_address.delivery_address_city", delivery_address_state: "state.default.delivery_address.delivery_address_city", delivery_address_zipcode: "state.default.delivery_address.delivery_address_zipcode"};

      //return Object.assign({}, state, {delivery_address: {delivery_address_street: action.value, delivery_address_city: ""}})
      return Object.assign({}, state, {delivery_address: delivery_address_updated});
    

    case SET_DELIVERY_ADDRESS_STREET2:
      //alert("CartState " + action.item_id);
      alert("reducer " + JSON.stringify(state));

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
      
      delivery_address_updated = {delivery_address_street2: action.value, delivery_address_city: "state.default.delivery_address.delivery_address_city", delivery_address_state: "state.default.delivery_address.delivery_address_city", delivery_address_zipcode: "state.default.delivery_address.delivery_address_zipcode"};

      //return Object.assign({}, state, {delivery_address: {delivery_address_street: action.value, delivery_address_city: ""}})
      return Object.assign({}, state, {delivery_address: delivery_address_updated});
    

    case SET_DATE:
      //alert("CartState " + action.item_id);
      alert("reducer " + JSON.stringify(state));

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
      
      delivery_address_updated = {delivery_address_street2: action.value, delivery_address_city: "state.default.delivery_address.delivery_address_city", delivery_address_state: "state.default.delivery_address.delivery_address_city", delivery_address_zipcode: "state.default.delivery_address.delivery_address_zipcode"};

      //return Object.assign({}, state, {delivery_address: {delivery_address_street: action.value, delivery_address_city: ""}})
      return Object.assign({}, state, {delivery_address: delivery_address_updated});
    
    
    case SET_TIME:
      //alert("CartState " + action.item_id);
      alert("reducer " + JSON.stringify(state));

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
      
      delivery_address_updated = {delivery_address_street2: action.value, delivery_address_city: "state.default.delivery_address.delivery_address_city", delivery_address_state: "state.default.delivery_address.delivery_address_city", delivery_address_zipcode: "state.default.delivery_address.delivery_address_zipcode"};

      //return Object.assign({}, state, {delivery_address: {delivery_address_street: action.value, delivery_address_city: ""}})
      return Object.assign({}, state, {time: action.value});


    case SET_SPECIFIC_TIME:
      //alert("CartState " + action.item_id);
      alert("reducer " + JSON.stringify(state));

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
      
      delivery_address_updated = {delivery_address_street2: action.value, delivery_address_city: "state.default.delivery_address.delivery_address_city", delivery_address_state: "state.default.delivery_address.delivery_address_city", delivery_address_zipcode: "state.default.delivery_address.delivery_address_zipcode"};

      //return Object.assign({}, state, {delivery_address: {delivery_address_street: action.value, delivery_address_city: ""}})
      return Object.assign({}, state, {time: action.value});
 
    


    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};