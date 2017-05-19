import { CREATE_ORDER } from '../constants/actionTypes.ts';



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

