import { ADD_GUEST_ORDER_CART_ITEM, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, REMOVE_CART_ITEM, SET_USER_NAME_FIRST, SET_USER_NAME_LAST, SET_USER_CONTACT_EMAIL, SET_USER_CONTACT_MOBILE, SET_DELIVERY_CONTACT_ADDRESS_FIRST_NAME, SET_DELIVERY_CONTACT_ADDRESS_LAST_NAME, SET_DELIVERY_CONTACT_ADDRESS_EMAIL, SET_DELIVERY_CONTACT_ADDRESS_MOBILE, SET_DELIVERY_CONTACT_ADDRESS_COMPANY_NAME, SET_DELIVERY_CONTACT_ADDRESS_STREET1, SET_DELIVERY_CONTACT_ADDRESS_STREET2 } from '../constants/actionTypes.ts';

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

export default function cart_items(state:any = {order_type: "", nameContact: {first: "ross", last: "edwards", email: "@", mobile: "1"}, deliveryContactAddress: {first: "ross", last: "edwards", email: "@", mobile: "1", company_name: "", street1: ""}, datetime_order_started: "", cart_items: []}, action: any){

  let name_contact_updated = null;
  let delivery_contact_address_updated = null;

  switch (action.type) {
    case ADD_GUEST_ORDER_CART_ITEM:

      console.log("add guest cart item reducer" + JSON.stringify(state));

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

      /*return Object.assign({}, state, {
        cart_items: state.cart_items.map((item: any, index: any) => {
          if (item.item_id === action.item_id) {
              return false
          }
          return item
        })
      })*/

      let cart_items_updated = state.cart_items.splice(action.index, 1);

      return Object.assign({}, state, { cart_items: cart_items_updated });

      //else remove item


     /*case SET_USER_NAME_FIRST:

      console.log("first name reducer");

      name_contact_updated = state.nameContact;
      name_contact_updated.first = action.value; 

      return Object.assign({}, state, { nameContact: name_contact_updated });

      //else remove item

    case SET_USER_NAME_LAST:

      console.log("last name reducer");

      name_contact_updated = state.nameContact;
      name_contact_updated.last = action.value; 

      return Object.assign({}, state, { nameContact: name_contact_updated });

      //else remove item

     case SET_CONTACT_EMAIL:

      console.log("email reducer");

      name_contact_updated = state.nameContact;
      name_contact_updated.email = action.value; 

      return Object.assign({}, state, { nameContact: name_contact_updated });

      //else remove item


     case SET_CONTACT_MOBILE:

      console.log("mobile reducer");

      name_contact_updated = state.nameContact;
      name_contact_updated.mobile = action.value; 

      return Object.assign({}, state, { nameContact: name_contact_updated });

      //else remove item*/

       

     /*case SET_DELIVERY_CONTACT_ADDRESS_FIRST_NAME:

      console.log("delivery contact address first name reducer");

      delivery_contact_address_updated = state.deliveryContactAddress;
      delivery_contact_address_updated.first_name = action.value; 

      return Object.assign({}, state, { deliveryContactAddress: delivery_contact_address_updated });

      //else remove item

     case SET_DELIVERY_CONTACT_ADDRESS_LAST_NAME:

      console.log("delivery contact address last name reducer");

      delivery_contact_address_updated = state.deliveryContactAddress;
      delivery_contact_address_updated.last_name = action.value; 

      return Object.assign({}, state, { deliveryContactAddress: delivery_contact_address_updated });*/

      //else remove item

    case SET_DELIVERY_CONTACT_ADDRESS_EMAIL:

      console.log("delivery contact address email reducer");

      delivery_contact_address_updated = state.deliveryContactAddress;
      delivery_contact_address_updated.email = action.value; 

      return Object.assign({}, state, { deliveryContactAddress: delivery_contact_address_updated });

      //else remove item

    case SET_DELIVERY_CONTACT_ADDRESS_MOBILE:

      console.log("delivery contact address mobile reducer");

      delivery_contact_address_updated = state.deliveryContactAddress;
      delivery_contact_address_updated.mobile = action.value; 

      return Object.assign({}, state, { deliveryContactAddress: delivery_contact_address_updated });

      //else remove item

    case SET_DELIVERY_CONTACT_ADDRESS_COMPANY_NAME:

      console.log("delivery contact address mobile reducer");

      delivery_contact_address_updated = state.deliveryContactAddress;
      delivery_contact_address_updated.mobile = action.value; 

      return Object.assign({}, state, { deliveryContactAddress: delivery_contact_address_updated });

      //else remove item

    case SET_DELIVERY_CONTACT_ADDRESS_STREET1:

      console.log("delivery contact address street1 reducer");

      delivery_contact_address_updated = state.deliveryContactAddress;
      delivery_contact_address_updated.street1 = action.value; 

      return Object.assign({}, state, { deliveryContactAddress: delivery_contact_address_updated });

      //else remove item

    case SET_DELIVERY_CONTACT_ADDRESS_STREET2:

      console.log("delivery contact address street2 reducer");

      delivery_contact_address_updated = state.deliveryContactAddress;
      delivery_contact_address_updated.street2 = action.value; 

      return Object.assign({}, state, { deliveryContactAddress: delivery_contact_address_updated });

      //else remove item

    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};