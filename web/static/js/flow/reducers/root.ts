import { ADD_CART_ITEM, INCREASE_CART_ITEM_QUANTITY, SET_CONTACT_EMAIL, SET_CONTACT_PHONE, SET_DATE, SET_TIME, SET_SPECIFIC_TIME, SET_FIRST_NAME, SET_LAST_NAME, SET_DELIVERY_ADDRESS_STREET1, SET_DELIVERY_ADDRESS_STREET2, SET_DELIVERY_ADDRESS_CITY, SET_DELIVERY_ADDRESS_STATE, SET_DELIVERY_ADDRESS_ZIPCODE, SET_PAYMENT_NAME_ON_CARD, SET_PAYMENT_CARD_NUMBER, SET_PAYMENT_EXPIRY_DATE, SET_PAYMENT_SECURITY_CODE, LOGIN, GET_USER_DETAILS } from '../constants/actionTypes.ts';
import {Map} from 'immutable'
/*let menu_items: any;

interface CartState {
  user_type: string;
  address: string;
  payment_method: string;
  menu_items: any;
  cart: any;
};

interface Name {
  
  first_name: string;
  last_name: string;

}

let inititalState: CartState = {

  name: {},
  delivery_address: "",
  payment_method: "",
  contact: "",
  menu_items: [],
  cart_items: [],

}*/

//gustOrderState
let initialState: any = {order: {delivery_address: {street1: "", street2: "", city: "", state: "", zipcode: ""}, name: {first: "", last: ""}, datetime: {date: "", time: "", specific_time: ""}, contact: {email: "", phone: ""}, payment_method: {name_on_card: "", card_number: "", expiry_date: "", security_code: ""}}};

let userState: any= {session_id: "", name: "", orders: [], delivery_address: [], payment_methods: []};
const initialStateTest = Map({ counter: 0 });

//state.set('counter', state.get('counter') + 1);


export default function root(state:any = initialState, action: any) {
  let delivery_address_updated = null;

  switch (action.type) {
    /*case ADD_CART_ITEM:
      //alert("CartState " + action.item_id);
      console.log("add cart item" + JSON.stringify(state.order));

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
    
      //if(state.order === undefined){

          console.log("cart items");

          return {order: {cart_items: [{item_id: action.item_id, title: "another item", dozens: 1, quantity: 1, mini: true}]}};

      //}else{

        //  alert("else");

          //return Object.assign({}, state, {order: {cart_items: [...state.order.cart_items, {item_id: action.item_id, title: "another item", quantity: 1}]}}});
          //return {order: {cart_items: [...state.order.cart_items, {item_id: action.item_id, title: "another item", dozens: 1, quantity: 1, mini: true}]}};
      //}*/

    case SET_FIRST_NAME:

      //state.set('counter', state.get('counter') + 1);


      //alert("CartState " + action.item_id);
      console.log("set first name" + JSON.stringify(state));

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

      //if(state.name == undefined){

          return Object.assign({}, state, {order: {name: {first: action.value, last: state.order.name.last}, datetime: state.order.datetime, delivery_address: state.order.delivery_address, cart_items: state.order.cart_items, contact: state.order.contact, payment_method: state.order.payment_method}});

      //}else{

      //    return Object.assign({}, state, {name: {first_name: action.value, last_name: state.name.last_name}});

      //}

      //return Object.assign({}, state.order, {cart_items: [...state.cart_items, {item_id: action.item_id, title: "another item", quantity: 1}]});
      //return {order: {order_id: "", name: {first: , contact: {email: "", phone: ""}, delivery_address: {}, cart_items: [{item_id: 1, title: "from reducer view public menu yippee caye!", dozens: 1, quantity: 1, mini: true}]}}
    
    case SET_LAST_NAME:
      //alert("CartState " + action.item_id);
      console.log("set last name" + JSON.stringify(state));

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
      
      return Object.assign({}, state, {order: {name: {first: state.order.name.first, last: action.value}, datetime: state.order.datetime, delivery_address: state.order.delivery_address, cart_items: state.order.cart_items, contact: state.order.contact, payment_method: state.order.payment_method}});

   
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
      
     return Object.assign({}, state, {order: {name: state.order.name, datetime: {date: action.value, time: state.order.datetime.time}, delivery_address: state.order.delivery_address, contact: state.order.contact, cart_items: state.order.cart_items, payment_method: state.order.payment_method}});

    
    
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
      
      return Object.assign({}, state, {order: {name: state.order.name, datetime: {date: state.order.datetime.date, time: action.value, specific_time: ""}, delivery_address: state.order.delivery_address, contact: state.order.contact, cart_items: state.order.cart_items, payment_method: state.order.payment_method}});


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
      
      return Object.assign({}, state, {order: {name: state.order.name, datetime: {date: state.order.datetime.date, time: "", specific_time: action.value}, delivery_address: state.order.delivery_address, cart_items: state.order.cart_items, contact: state.order.contact, payment_method: state.order.payment_method}});


    case SET_CONTACT_EMAIL:
      //alert("CartState " + action.item_id);
      console.log("root reducer/contact email " + JSON.stringify(state));

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
      
      return Object.assign({}, state, {order: {name: state.order.name, datetime: state.order.datetime, contact: {email: action.value, phone: state.order.contact.email}, delivery_address: state.order.delivery_address, cart_items: state.order.cart_items, payment_method: state.order.payment_method}});
 
    case SET_CONTACT_PHONE:
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
      
      return Object.assign({}, state, {order: {name: state.order.name, datetime: state.order.datetime, contact: {email: state.order.contact.email, phone: action.value}, delivery_address: state.order.delivery_address, cart_items: state.order.cart_items, payment_method: state.order.payent_method}});

     case SET_PAYMENT_NAME_ON_CARD:
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
      
      return Object.assign({}, state, {order: {name: state.order.name, datetime: state.order.datetime, contact: state.order.contact, delivery_address: state.order.delivery_address, cart_items: state.order.cart_items, payment_method: {name_on_card: action.value, card_number: state.order.payment_method.card_number, expiry_date: state.order.payment_method.expiry_date, security_code: state.order.payment_method.security_code}}});


     case SET_PAYMENT_CARD_NUMBER:
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
      
      return Object.assign({}, state, {order: {name: state.order.name, datetime: state.order.datetime, contact: state.order.contact, delivery_address: state.order.delivery_address, cart_items: state.order.cart_items, payment_method: {name_on_card: state.order.payment_method.name_on_card, card_number: action.value, expiry_date: state.order.payment_method.expiry_date, security_code: state.order.payment_method.security_code}}});


    case SET_PAYMENT_EXPIRY_DATE:
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
      
      return Object.assign({}, state, {order: {name: state.order.name, datetime: state.order.datetime, contact: state.order.contact, delivery_address: state.order.delivery_address, cart_items: state.order.cart_items, payment_method: {name_on_card: state.order.payment_method.name_on_card, card_number: state.order.payment_method.card_number, expiry_date: action.value, security_code: state.order.payment_method.security_code}}});


    case SET_PAYMENT_SECURITY_CODE:
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
      
      return Object.assign({}, state, {order: {name: state.order.name, datetime: state.order.datetime, contact: state.order.contact, delivery_address: state.order.delivery_address, cart_items: state.order.cart_items, payment_method: {name_on_card: state.order.payment_method.name_on_card, card_number: state.order.payment_method.card_number, expiry_date: state.order.payment_method.expiry_date, security_code: action.value}}});


    case LOGIN:
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
      
      return Object.assign({}, state, {order: {name: state.order.name, datetime: state.order.datetime, contact: state.order.contact, delivery_address: state.order.delivery_address, cart_items: state.order.cart_items, payment_method: {name_on_card: state.order.payment_method.name_on_card, card_number: state.order.payment_method.card_number, expiry_date: state.order.payment_method.expiry_date, security_code: action.value}}});

    case GET_USER_DETAILS:
      //alert("CartState " + action.item_id);
      alert("reducer get user details" + JSON.stringify(state));

      

      return Object.assign({}, state, {order: {name: state.order.name, datetime: state.order.datetime, contact: state.order.contact, delivery_address: state.order.delivery_address, cart_items: state.order.cart_items, payment_method: {name_on_card: state.order.payment_method.name_on_card, card_number: state.order.payment_method.card_number, expiry_date: state.order.payment_method.expiry_date, security_code: action.value}}});


    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state




  }
};