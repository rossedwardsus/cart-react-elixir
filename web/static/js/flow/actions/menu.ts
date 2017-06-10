import { VIEW_PUBLIC_MENU } from '../constants/actionTypes.ts';


declare var module: { viewPublicMenu: any };


//check login


export const getMenuItems = () => (dispatch:any) => {

      //dispatch(setMenuItems(menu_items: [{item_id: 1, title: "DWK", description: "With caramelized pears, candied pecans and fresh ginger, DWK is a great combination of flavors and textures. Many have called DWK exquisite! ", image_id: "DWKmenu"}, {item_id: 2, title: "Snorker", description: "This decadent dessert scone combines the finest dark chocolate with toasted hazelnuts. Beware, the Snorker may be life altering!", story: "Ruby Q is a mouthwatering scone with cherries and chocolate throughout. It's a Sconely favorite!", ingredients: "Unbleached white all-purpose flour*, Cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic", image_id: "Snorkermenu"}, {item_id: 3, title: "Ruby Q", description: "The mouthwatering Ruby Q has just the right balance of fresh cherries, chocolate chunks and Madagascar vanilla bean. Simply delicious!", image_id: "RubyQmenu"}, {item_id: 4, title: "Savvy Go Go", description: "Tomato Goat Cheese Sun-dried", image_id: "MenuSavvy4.5", hover_image_id: "MenuSavvy4.5roll"}, {item_id: 5, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 6, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 7, title: "freedom", description: "let freedom ring!7", image_id: "DWK_greenrollover1"},  {item_id: 8, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}]));

      ({ 
    		type: "VIEW_PUBLIC_MENU", 
    		menu_items: [{item_id: 1, title: "DWK", description: "With caramelized pears, candied pecans and fresh ginger, DWK is a great combination of flavors and textures. Many have called DWK exquisite! ", image_id: "DWKmenu"}, {item_id: 2, title: "Snorker", description: "This decadent dessert scone combines the finest dark chocolate with toasted hazelnuts. Beware, the Snorker may be life altering!", story: "Ruby Q is a mouthwatering scone with cherries and chocolate throughout. It's a Sconely favorite!", ingredients: "Unbleached white all-purpose flour*, Cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic", image_id: "Snorkermenu"}, {item_id: 3, title: "Ruby Q", description: "The mouthwatering Ruby Q has just the right balance of fresh cherries, chocolate chunks and Madagascar vanilla bean. Simply delicious!", image_id: "RubyQmenu"}, {item_id: 4, title: "Savvy Go Go", description: "Tomato Goat Cheese Sun-dried", image_id: "MenuSavvy4.5", hover_image_id: "MenuSavvy4.5roll"}, {item_id: 5, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 6, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 7, title: "freedom", description: "let freedom ring!7", image_id: "DWK_greenrollover1"},  {item_id: 8, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 9, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 10, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}]
      });

      //set menu
}

export const setMenuItems = () => {

      //dispatch(setMenuItems());

      ({ 
        type: "SET_MENU", 
        menu_items: [{item_id: 1, title: "DWK", description: "With caramelized pears, candied pecans and fresh ginger, DWK is a great combination of flavors and textures. Many have called DWK exquisite! ", image_id: "DWKmenu"}, {item_id: 2, title: "Snorker", description: "This decadent dessert scone combines the finest dark chocolate with toasted hazelnuts. Beware, the Snorker may be life altering!", story: "Ruby Q is a mouthwatering scone with cherries and chocolate throughout. It's a Sconely favorite!", ingredients: "Unbleached white all-purpose flour*, Cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic", image_id: "Snorkermenu"}, {item_id: 3, title: "Ruby Q", description: "The mouthwatering Ruby Q has just the right balance of fresh cherries, chocolate chunks and Madagascar vanilla bean. Simply delicious!", image_id: "RubyQmenu"}, {item_id: 4, title: "Savvy Go Go", description: "Tomato Goat Cheese Sun-dried", image_id: "MenuSavvy4.5", hover_image_id: "MenuSavvy4.5roll"}, {item_id: 5, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 6, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 7, title: "freedom", description: "let freedom ring!7", image_id: "DWK_greenrollover1"},  {item_id: 8, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 9, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 10, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}]
      });

      //set menu
}


//const receiveProducts = products => ({
//  type: types.RECEIVE_PRODUCTS,
//  products: products
//})

export const getAllProducts = () => (dispatch:any)  => {
  //shop.getProducts(products => {
  //  dispatch(receiveProducts(products))
  //})
  //dispatch(viewPublicMenu(1));
  //dispatch(viewPublicMenu());
  //alert();
  //return "hello";
  //Promise.resolve(dispatch({type: "VIEW_PUBLIC_MENU", menu_items: {item_id: 1, title: "menu item from action"}})).then((data) => alert("promise" + JSON.stringify(data)));
}