import { CREATE_ORDER, TERMS, MAILING_LIST, SET_ORDER_ID, SET_DELIVERY_COST, ORDER_COMPLETED, CLEAR_ORDER } from '../constants/actionTypes.ts';



//const receiveProducts = products => ({
//  type: types.RECEIVE_PRODUCTS,
//  products: products
//})

//export const createOrder = (order_type) => dispatch => {
  //shop.getProducts(products => {
  //  dispatch(receiveProducts(products))
  //})
  //dispatch(viewPublicMenu(1));
  //dispatch(createOrder());
  //alert();
  //return "hello";
  //Promise.resolve(dispatch({type: "VIEW_PUBLIC_MENU", menu_items: {item_id: 1, title: "menu item from action"}})).then((data) => alert("promise" + JSON.stringify(data)));
//}


//export const save = () => dispatch => {
  //shop.getProducts(products => {
  //  dispatch(receiveProducts(products))
  //})
  //dispatch(viewPublicMenu(1));
  //dispatch(saveDeliveryAddress());
  //alert();
  //return "hello";
  //Promise.res
//}


//const completeOrder = (order_type: any) =>
//  console.log("create order action");
//  ({ 
//    type: "VIEW_PUBLIC_MENU", 
//    order_type
//  });


export function createOrder(order_type: any) {
  console.log("create order action " + order_type);
  return {
    type: CREATE_ORDER,
    order_type
  }
}

export function orderCompleted(order_type: any) {
  console.log("create order action " + order_type);
  return {
    type: ORDER_COMPLETED,
    order_type
  }
}

export function termsValidated(value: any) {
  console.log("create order action ");
  return {
    type: TERMS,
  }
}

export function mailingList(value: any) {
  console.log("create order action ");
  return {
    type: MAILING_LIST,
  }
}

export function setOrderId(order_id: any) {
  console.log("order id action " + order_id);
  return {
    type: SET_ORDER_ID,
  }
}

export function setDeliveryCost(cost: any) {
  console.log("setdeliverycost action " + cost);
  return {
    type: SET_DELIVERY_COST,
  }
}

export function clearOrder() {
  console.log("clear action ");
  return {
    type: CLEAR_ORDER,
  }
}

//export function cancelOrder() {
//  console.log("clear action ");
//  return {
//    type: CLEAR_ORDER,
//  }
//}
