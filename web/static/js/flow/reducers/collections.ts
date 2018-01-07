import { VIEW_PUBLIC_MENU, SET_MENU, COLLECTIONS, COLLECTION_DETAILS, COLLECTION_MENU_ITEMS } from '../constants/actionTypes.ts';

//import axios from 'axios';


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

export default (state:any = {collections: [], collectionMenuItems: []}, action: any) => {
  switch (action.type) {
    case COLLECTIONS:

      console.log("collections reducer " + JSON.stringify(action));

      //collections_updated = state.collections;
      //collections_updated.push(action.collections);

      return Object.assign({}, state, {...state, collections: action.collections});

    case COLLECTION_DETAILS:

      console.log("collection details reducer " + JSON.stringify(action));

      //collections_updated = state.collections;
      //collections_updated.push(action.collections);

      return Object.assign({}, state, {...state, collectionDetails: action.collectionDetails});



    case COLLECTION_MENU_ITEMS:

      console.log("collection items reducer " + JSON.stringify(action));

      //collections_updated = state.collections;
      //collections_updated.push(action.collections);

      return Object.assign({}, state, {...state, collectionsMenuItems: action.collectionMenuItems});

    
    default:

      /*axios.post('/api/graphql',
                     {query: 'query {get_menu_items {id name description ingredients}}'}
                     //query: 'query {load_signature_guest_response_order_details (order_name: "laci") { parent_order_id event_full_name invited_guest_message }}'
            )
            .then((response: any) => {

                  //console.log("graphql response " + JSON.stringify(response.data.data.getMenuItems));

                  //that.props.history.push('/user');
                  //context.router

                  //that.props.setOrderId(1);

                  //this.context.router.push('/order/complete');

                  //dispatch({ type: VIEW_PUBLIC_MENU, items: response.data.data.getMenuItems});
                    //dispatch(push("/order/url_name/guest/name"));

                  //return response.data.data.getMenuItems;
                  //return state;

                  //return Object.assign({}, state, {items: response.data.data.getMenuItems})
      
            })
            .catch((error: any) => {

                  console.log("error" + error);
                  //go to code/payment screen
          //        this.props.loadView();


                  //display errror to user - payment

           //if (!error.status) {
              // network error
            //}

            })*/

      //return Object.assign({}, state, {items: [{id: 1, name: "DWK", description: "With caramelized pears, candied pecans and fresh ginger, DWK is a great combination of flavors and textures. Many have called DWK exquisite! ", image_id: "DWKmenu"}, {id: 2, name: "Snorker", description: "This decadent dessert scone combines the finest dark chocolate with toasted hazelnuts. Beware, the Snorker may be life altering!", story: "Ruby Q is a mouthwatering scone with cherries and chocolate throughout. It's a Sconely favorite!", ingredients: "Unbleached white all-purpose flour*, Cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic", image_id: "Snorkermenu"}, {id: 3, name: "Ruby Q", description: "The mouthwatering Ruby Q has just the right balance of fresh cherries, chocolate chunks and Madagascar vanilla bean. Simply delicious!", image_id: "RubyQmenu"}, {id: 4, name: "Savvy Go Go", description: "Tomato Goat Cheese Sun-dried", image_id: "MenuSavvy4.5", hover_image_id: "MenuSavvy4.5roll"}, {id: 5, name: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {id: 6, name: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {id: 7, name: "freedom", description: "let freedom ring!7", image_id: "DWK_greenrollover1"},  {id: 8, name: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {id: 9, name: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {id: 10, name: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}]})
      //return {}

      return state;
  
  }
};


//export const getPublicMenu = 
  //state.visibleIds.map(id => getProduct(state, id))
//  {item_id: 1, title: "from reducer getPublicMenu"};