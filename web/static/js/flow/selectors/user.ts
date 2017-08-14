export const getUserOrders = (state: any) => {
  //let menu_items_temp: any = {};

  //state.menuItems.menu_items.map((key: any, index: any) => {

  //      return(menu_items_temp[key.item_id] = {title: key.title, description: key.description});

  //})

  //return menu_items_temp;

  return state.User.orders
  

  /*switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }*/
}




export const getPayment = (state: any) => {
  let menu_items_temp: any = {};

  state.menuItems.menu_items.map((key: any, index: any) => {

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
  console.log("order details selector " + JSON.stringify(state.SignatureOrderGuestResponse));
  return state.SignatureOrderGuestResponse;
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


export const getSconelyMessage = (state: any) => {
  console.log("sconely message selector " + JSON.stringify(state.SignatureOrderGuestResponse));
  
  if (state.SignatureOrderGuestResponse.invited_guest_message == ""){

    return "cwrpPlease select your preferred Scone";

  }else{

    return "";

  }
}

/*export const getSignatureHostMessage = (state: any) => {
  //console.log("sconely host message selector " + JSON.stringify(state.SignatureGuestResponse));

  //state.SignatureGuestResponse.order_details

  //let message = order_details.invited_guest_message.replace(/(?:\r\n|\r|\n)/g, <br />)

  //order_details.invited_guest_message.split(“\r”);

  //let message = order_details.invited_guest_message.string.replace( /\n/g, " " ).split(" ");

  let message = state.SignatureGuestResponse.order_details.invited_guest_message.split('\r').map((item: any, key: any) => {
    return <span key={key}>{item}<br/></span>
  })*/
  
  /*let message = order_details.invited_guest_message.split(“\r”).map((item: any) => {
  return (<div>
    {item}
    <br/>
    </div>
  )
  })*/

/*  return message;

}*/

export const getNameScreenText = (state: any) => {
  console.log("sconely message selector " + JSON.stringify(state.SignatureOrderGuestResponse));
  
  //if (state.SignatureOrderGuestResponse.invited_guest_message == ""){

    return "cwrpPlease select your preferred Scone";

  //}else{

    //return "";

  //}
}

export const getOrderCompletedScreenText = (state: any) => {
  console.log("sconely message selector " + JSON.stringify(state.SignatureOrderGuestResponse));
  
  //if (state.SignatureOrderGuestResponse.invited_guest_message == ""){

    return "cwrpPlease select your preferred Scone";

  //}else{

    //return "";

  //}
}