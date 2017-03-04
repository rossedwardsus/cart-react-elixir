import { VIEW_PUBLIC_MENU } from '../constants/actionTypes';

declare var module: { viewPublicMenu: any };

const viewPublicMenu = (data) =>
  ({ 
		type: "VIEW_PUBLIC_MENU", 
		menu_items: {item_id: 1, title: "holy shit it worked for real this tim"}
  });


//const receiveProducts = products => ({
//  type: types.RECEIVE_PRODUCTS,
//  products: products
//})

export const getAllProducts = () => dispatch => {
  //shop.getProducts(products => {
  //  dispatch(receiveProducts(products))
  //})
  //dispatch(viewPublicMenu(1));
  dispatch(viewPublicMenu());
  //alert();
  //return "hello";
  //Promise.resolve(dispatch({type: "VIEW_PUBLIC_MENU", menu_items: {item_id: 1, title: "menu item from action"}})).then((data) => alert("promise" + JSON.stringify(data)));
}