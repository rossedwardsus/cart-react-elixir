import { ADD_CART_ITEM, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, SET_DATE, SET_TIME, SET_SPECIFIC_TIME } from '../constants/actionTypes.ts';

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

export default function cart_items(state:any = {cart_items: []}, action: any){
  switch (action.type) {
    case ADD_CART_ITEM:

      console.log("add cart item" + JSON.stringify(state));

      let items = state.cart_items;
      items.push({item_id: 1, dozens: 1, quantity: 1, mini: true});
      
      return Object.assign({}, state, {cart_items: items});
    

    case INCREASE_CART_ITEM_QUANTITY:
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

      //get the item, increase the quantity replace it the cart item


      /*return array.map( (item, index) => {
          if(index !== action.index) {
              // This isn't the item we care about - keep it as-is
              return item;
          }

          // Otherwise, this is the one we want - return an updated value
          return {
              ...item,
              ...action.item
          };    
      });*/

      //return Object.assign({})

      //return Object.assign({}, [{order: {cart_items: [{item_id: action.item_id, title: "another item", dozens: 1, quantity: 2, mini: true}]}}]);
      //return {order: {cart_items: [{item_id: action.item_id, title: "another item", dozens: 1, quantity: 2, mini: true}]}};
      //return {"menu_items": [{item_id: 1, title: "from reducer view public menu yippee caye!"}]}
      //return {...state, {default: {order: {cart_items: [{item_id: action.item_id, title: "another item", dozens: 1, quantity: 2, mini: true}]}}};
      

      //return Object.assign({}, state)

      return Object.assign({}, state, {order: {
        cart_items: state.order.cart_items.map((item: any, index: any) => {
          if (item.item_id === action.item_id) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1
            })
          }
          return item
        })
      }})

    case DECREASE_CART_ITEM_QUANTITY:
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

      //get the item, increase the quantity replace it the cart item


      /*return array.map( (item, index) => {
          if(index !== action.index) {
              // This isn't the item we care about - keep it as-is
              return item;
          }

          // Otherwise, this is the one we want - return an updated value
          return {
              ...item,
              ...action.item
          };    
      });*/

      //return Object.assign({})

      //return Object.assign({}, [{order: {cart_items: [{item_id: action.item_id, title: "another item", dozens: 1, quantity: 2, mini: true}]}}]);
      //return {order: {cart_items: [{item_id: action.item_id, title: "another item", dozens: 1, quantity: 2, mini: true}]}};
      //return {"menu_items": [{item_id: 1, title: "from reducer view public menu yippee caye!"}]}
      //return {...state, {default: {order: {cart_items: [{item_id: action.item_id, title: "another item", dozens: 1, quantity: 2, mini: true}]}}};
      

      //return Object.assign({}, state)

      /*return Object.assign({}, state, {order: {
        cart_items: state.order.cart_items.map((item: any, index: any) => {
          if (item.item_id === action.item_id) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1
            })
          }
          return item
        })
      }})*/

      return Object.assign({}, state, {order: {
        cart_items: state.order.cart_items.map((item: any, index: any) => {
          if (item.item_id === action.item_id) {
            return Object.assign({}, item, {
              quantity: item.quantity - 1
            })
          }
          return item
        })
      }})

    case SET_DATE:

      console.log("setdate" + JSON.stringify(state));
      
      return Object.assign({}, state, {date: action.value});
    
    case SET_TIME:

      console.log("add cart item" + JSON.stringify(state));
      
      return Object.assign({}, state, {time: action.value});
    
    case SET_SPECIFIC_TIME:

      console.log("add cart item" + JSON.stringify(state));
      
      return Object.assign({}, state, {specific_time: action.value});
    

    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};