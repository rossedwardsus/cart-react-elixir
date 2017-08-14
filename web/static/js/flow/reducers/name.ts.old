import { SET_FIRST_NAME, SET_LAST_NAME, SET_COMPANY_NAME } from '../constants/actionTypes.ts';

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

export default function name(state:any = {first_name: "", last_name: "", company_name: ""}, action: any){
  switch (action.type) {
    case SET_FIRST_NAME:
      console.log("first name" + JSON.stringify(action.value));

      return Object.assign({}, state, {first_name: action.value, last_name: state.last_name});

    case SET_LAST_NAME:
      console.log("last name" + JSON.stringify(action.value));

      return Object.assign({}, state, {first_name: state.first_name, last_name: action.value});

    case SET_COMPANY_NAME:
      console.log("company name" + JSON.stringify(action.value));

      return Object.assign({}, state, {...state, company_name: action.value});

  
    default:
      //alert();
      //return Object.assign({}, state, {cart_items: [{item_id: 1, title: "from reducer view public menu"}]})
      return state
  }
};