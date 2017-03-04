import { CREATE_ORDER, SAVE_DELIVERY_ADDRESS, COMPLETE_ORDER } from '../constants/actionTypes';



const createOrder = (data) =>
  ({ 
		type: "VIEW_PUBLIC_MENU", 
		menu_items: {item_id: 1, title: "holy shit it worked for real this tim"}
  });


//const receiveProducts = products => ({
//  type: types.RECEIVE_PRODUCTS,
//  products: products
//})

export const create = () => dispatch => {
  //shop.getProducts(products => {
  //  dispatch(receiveProducts(products))
  //})
  //dispatch(viewPublicMenu(1));
  dispatch(createOrder());
  //alert();
  //return "hello";
  //Promise.resolve(dispatch({type: "VIEW_PUBLIC_MENU", menu_items: {item_id: 1, title: "menu item from action"}})).then((data) => alert("promise" + JSON.stringify(data)));
}


const saveDeliveryAddress = (data) =>
  ({ 
    type: "VIEW_PUBLIC_MENU", 
    menu_items: {item_id: 1, title: "holy shit it worked for real this tim"}
  });


//const receiveProducts = products => ({
//  type: types.RECEIVE_PRODUCTS,
//  products: products
//})

export const save = () => dispatch => {
  //shop.getProducts(products => {
  //  dispatch(receiveProducts(products))
  //})
  //dispatch(viewPublicMenu(1));
  dispatch(createOrder());
  //alert();
  //return "hello";
  //Promise.res
}


const completeOrder = (data) =>
  ({ 
    type: "VIEW_PUBLIC_MENU", 
    menu_items: {item_id: 1, title: "holy shit it worked for real this tim"}
  });


//const receiveProducts = products => ({
//  type: types.RECEIVE_PRODUCTS,
//  products: products
//})

export const complete = () => dispatch => {
  //shop.getProducts(products => {
  //  dispatch(receiveProducts(products))
  //})
  //dispatch(viewPublicMenu(1));
  dispatch(completeOrder());
  //alert();
  //return "hello";
  //Promise.res

}