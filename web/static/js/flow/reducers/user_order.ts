import { SET_USER_ORDERS, SET_EVENT_NAME, SET_INVITED_GUEST_COUNT, SET_DATE, SET_TIME, SET_USER_DEFINED_DELIVERY_CONTACT_ADDRESS } from '../constants/actionTypes.ts';

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

export default function UserOrder(state:any = {orders: [{order_id: 1, order_type: "signature", event_name: "", total_cost: "", image_uploaded: true, invited_guest_count: 20, invited_guest_message: "", delivery_date: "", delivery_time: "", delivery_contact_first_name: "", delivery_contact_last_name: "", delivery_contact_email: "", delivery_contact_mobile: "", delivery_address_street1: "", delivery_address_street2: "", delivery_address_city: "", delivery_address_state: "", elivery_address_zipcode: "", status: "paid", cart: [], guest_responses: []}]}, action: any){

  let delivery_address_updated = null;
  let orders_updated: any = [];

  switch (action.type) {

    case SET_USER_ORDERS:
      //alert("CartState " + action.item_id);
      console.log("user order details reducer" + JSON.stringify(state));

      return Object.assign({}, state, {orders: [{order_id: 1, order_type: "signature", event_name: "", total_cost: "", image_uploaded: true, invited_guest_count: 20, invited_guest_message: "", guest_responses: "", delivery_date: "", delivery_time: "", delivery_address_street1: "", delivery_address_street2: "", delivery_address_city: "", delivery_address_state: "", delivery_address_zipcode: "", delivery_contact_first_name: "", delivery_contact_last_name: "", delivery_contact_email: "", delivery_contact_mobile: "", cart: []}]});


    case SET_EVENT_NAME:
      //console("CartState " + action.item_id);
      console.log("setevent name reducer " + action.value + " " + action.order_id);

      //let index = data.findIndex(obj => obj[where] === what)

      orders_updated = state.orders.map((order: any) => {

            //if(address.address)
            console.log("order id" + order.order_id);
            if(order.order_id == 1){
                
                order.event_name = action.value;

            }

            return order;

      })

      return Object.assign({}, state, {orders: orders_updated});
    
  
    case SET_INVITED_GUEST_COUNT:
      //console("CartState " + action.item_id);
      console.log("set guest count reducer " + action.value);

      //let index = data.findIndex(obj => obj[where] === what)

      let order_updated = state.orders.map((order: any) => {

            //if(address.address)
            console.log("order id" + order.order_id);
            if(order.order_id == 1){
                
                order.invited_guest_count = action.value;

            }

            return order;

      })

      console.log("order_updated " + JSON.stringify(order_updated[0]));


      let cart_item_index = order_updated[0].cart.findIndex((obj: any) => obj["item"] === "invited_guests" && obj["stripe_token"] === "");
      console.log("cart item index" + JSON.stringify(cart_item_index));

      if(cart_item_index == -1){
      //push
        order_updated[0].cart.push({item: "invited_guests", count: 0, stripe_token: ""});
      } else { //increment count
        order_updated[0].cart[cart_item_index]["count"] = action.value;
      }


      //look in suborders to see if any "invited guests" items exist
      //if they have a stripe token then add another
      //if not then update the existing one
      //order_updated[0].cart.push({item: "invited_guests", count: 0, stripe_token: ""});

      //console.log("order_updated_with_suborder " + JSON.stringify(order_updated[0].suborders.push({suborder_id: 12345, item: "invited_guests", count: 0, stripe_token: ""})));

      return Object.assign({}, state, {orders: order_updated});

    case SET_DATE:
      //console("CartState " + action.item_id);
      console.log("set date reducer " + action.value);

      orders_updated = state.orders.map((order: any) => {

            //if(address.address)
            console.log("order id" + order.order_id);
            if(order.order_id == 1){
                
                order.delivery_date = action.value;

            }

            return order;

      })

      //august 16th 1:45

      return Object.assign({}, state, {orders: orders_updated});


    case SET_TIME:
      //console("CartState " + action.item_id);
      console.log("set TIME reducer " + action.value);

      //findindex

      //IF time is chargeable then add suborder

      orders_updated = state.orders.map((order: any) => {

            //if(address.address)
            console.log("order id" + order.order_id);
            if(order.order_id == 1){
                
                order.delivery_time = action.value;

            }

            return order;

      })

      //orders_updated = orders_updated.suborders.push({item: "delivery", stripe_token: ""});

      return Object.assign({}, state, {orders: orders_updated});

  
    case SET_USER_DEFINED_DELIVERY_CONTACT_ADDRESS:
      //console("CartState " + action.item_id);
      console.log("set TIME reducer " + action.value);

      //findindex

      //IF time is chargeable then add suborder

      
      //orders_updated = orders_updated.suborders.push({item: "delivery", stripe_token: ""});

      return Object.assign({}, state, {orders: {delivery_contact_first_name: "Ross", delivery_contact_last_name: "Edwards", delivery_contact_email: "@", delivery_contact_mobile: "310"}});

  

    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};