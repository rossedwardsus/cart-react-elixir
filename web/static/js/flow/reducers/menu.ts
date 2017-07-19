import { VIEW_PUBLIC_MENU, SET_MENU } from '../constants/actionTypes.ts';

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

export default (state:any = {items: []}, action: any) => {
  switch (action.type) {
    case VIEW_PUBLIC_MENU:

      console.log("menu_items reducer" + JSON.stringify(action.menu_items));
      
      return Object.assign({}, state, {items: action.items})

      //return Object.assign({}, state, {items: [{item_id: 1, title: "DWK", description: "With caramelized pears, candied pecans and fresh ginger, DWK is a great combination of flavors and textures. Many have called DWK exquisite! ", image_id: "DWKmenu"}, {item_id: 2, title: "Snorker", description: "This decadent dessert scone combines the finest dark chocolate with toasted hazelnuts. Beware, the Snorker may be life altering!", story: "Ruby Q is a mouthwatering scone with cherries and chocolate throughout. It's a Sconely favorite!", ingredients: "Unbleached white all-purpose flour*, Cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic", image_id: "Snorkermenu"}, {item_id: 3, title: "Ruby Q", description: "The mouthwatering Ruby Q has just the right balance of fresh cherries, chocolate chunks and Madagascar vanilla bean. Simply delicious!", image_id: "RubyQmenu"}, {item_id: 4, title: "Savvy Go Go", description: "Tomato Goat Cheese Sun-dried", image_id: "MenuSavvy4.5", hover_image_id: "MenuSavvy4.5roll"}, {item_id: 5, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 6, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 7, title: "freedom", description: "let freedom ring!7", image_id: "DWK_greenrollover1"},  {item_id: 8, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 9, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 10, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}]})
    
    case SET_MENU:

      console.log("menu_items reducer" + JSON.stringify(action.menu_items));
      
      return Object.assign({}, state, {menu_items: action.menu_items})
    
    default:
      return Object.assign({}, state, {menu_items: [{item_id: 1, title: "DWK", description: "With caramelized pears, candied pecans and fresh ginger, DWK is a great combination of flavors and textures. Many have called DWK exquisite! ", image_id: "DWKmenu"}, {item_id: 2, title: "Snorker", description: "This decadent dessert scone combines the finest dark chocolate with toasted hazelnuts. Beware, the Snorker may be life altering!", story: "Ruby Q is a mouthwatering scone with cherries and chocolate throughout. It's a Sconely favorite!", ingredients: "Unbleached white all-purpose flour*, Cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic", image_id: "Snorkermenu"}, {item_id: 3, title: "Ruby Q", description: "The mouthwatering Ruby Q has just the right balance of fresh cherries, chocolate chunks and Madagascar vanilla bean. Simply delicious!", image_id: "RubyQmenu"}, {item_id: 4, title: "Savvy Go Go", description: "Tomato Goat Cheese Sun-dried", image_id: "MenuSavvy4.5", hover_image_id: "MenuSavvy4.5roll"}, {item_id: 5, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 6, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 7, title: "freedom", description: "let freedom ring!7", image_id: "DWK_greenrollover1"},  {item_id: 8, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 9, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 10, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}]})
      //return {}
  
  }
};


//export const getPublicMenu = 
  //state.visibleIds.map(id => getProduct(state, id))
//  {item_id: 1, title: "from reducer getPublicMenu"};