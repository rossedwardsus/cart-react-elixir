import { VIEW_PUBLIC_MENU } from '../constants/actionTypes.ts';

/*let menu_items: any;

interface OrderState {
  user_type: string;
  address: string;
  payment_method: string;
  menu_items: any;
  cart: any;
};

let inititalState: OrderState = {

  user_type: "",
  address: "",
  payment_method: "",
  menu_items: [],
  cart: [],

}*/

export default (state:any = {menu_items: []}, action: any) => {
  switch (action.type) {
    case VIEW_PUBLIC_MENU:
      
      return Object.assign({}, state, {menu_items: action.menu_items})
    default:
      return state
  }
};


//export const getPublicMenu = 
  //state.visibleIds.map(id => getProduct(state, id))
//  {item_id: 1, title: "from reducer getPublicMenu"};