export const getYoursMenuItems = (state: any) => {
  //let menu_items_temp: any = {};

  //state.menuItems.menu_items.map((key: any, index: any) => {

  //      return(menu_items_temp[key.item_id] = {title: key.title, description: key.description});

  //})

  //return menu_items_temp;

  console.log(JSON.stringify(state.MenuItems));

  return state.MenuItems;
  

  /*switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }*/
}
