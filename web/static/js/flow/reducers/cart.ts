import { ADD_CART_ITEM, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, REMOVE_CART_ITEM } from '../constants/actionTypes.ts';

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
      items.push({item_id: 1, item_type: action.item_type, quantity: parseInt(action.quantity)});
      
      return Object.assign({}, state, {cart_items: items});
    

    case INCREASE_CART_ITEM_QUANTITY:
      
      console.log("increase reducer " + JSON.stringify(state));

      //if quantity < 5 increase
      //else do nothing

      return Object.assign({}, state, {
        cart_items: state.cart_items.map((item: any, index: any) => {
          if (item.item_id === action.item_id) {
              item.quantity = item.quantity + 1;
          }
          return item
        })
      })

    case DECREASE_CART_ITEM_QUANTITY:
      
      console.log("decrease reducer " + JSON.stringify(state));
      //todo if dozens is 0 then just remove


      //get quantity
      //if dozens > 0
      let item = "";

      item = state.cart_items.find((item: any, index: any) => {
          
          return item.item_id === action.item_id;
      
      })

      //let item_index = state.cart_items.findIndex((item: any) => {
          
      //    return index;
      
      //})


      console.log("quantity" + JSON.stringify(item));


      return Object.assign({}, state, {
        cart_items: state.cart_items.map((item: any, index: any) => {
          if (item.item_id === action.item_id) {
              if(item.quantity > 1){
                  item.quantity = item.quantity - 1;
              }
          }
          return item
        })
      })

      //else remove item
      //array.splice( index, 1 )


    case REMOVE_CART_ITEM:
      
      console.log("REMOVE reducer " + JSON.stringify(state));
      //todo if dozens is 0 then just remove

      //if dozens > 0

      return Object.assign({}, state, {
        cart_items: state.cart_items.map((item: any, index: any) => {
          if (item.item_id === action.item_id) {
              return false
          }
          return item
        })
      })

      //else remove item


    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};