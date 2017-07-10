export const getMenuItems = (state: any) => {
  let menu_items_temp: any = {};

  state.SignatureGuestResponse.menu_items.map((key: any, index: any) => {

        return(menu_items_temp[key.item_id] = {title: key.title, description: key.description});

  })

  return menu_items_temp;

  //return state.SignatureGuestResponse.menu_items
  

  /*switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }*/
}

export const getOrderDetails = (state: any) => {
  console.log("order details selector " + JSON.stringify(state.SignatureGuestResponse));
  return state.SignatureGuestResponse;
  /*switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }*/
}

/*import { createSelector } from 'reselect'
// selector
const getBar = (state) => state.foo.bar
// reselect function
export const getBarState = createSelector(
  [ getBar ],
  (bar) => bar
)*/