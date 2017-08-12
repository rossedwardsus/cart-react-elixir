export const getOrderDetails = (state: any, order_id: any) => {
  
  //data.findIndex(obj => obj[where] === what)

  return state.orders[0];

}

export const getOrderGuestResponses = (state: any, order_id: any) => {
  
  //data.findIndex(obj => obj[where] === what)

  return [{first_name: "Ross", item_id: 1}];

}

export const getEventName = (state: any, order_id: any) => {
  
  //data.findIndex(obj => obj[where] === what)

  return "";

}

export const getSuborders = (state: any, order_id: any) => {
  
  //data.findIndex(obj => obj[where] === what)

  //[{12345: {item: "Invited Guest", quantity: 30}}, {67890: {item: "Ruby Q", quantity: "12", stripe_token: "1", date: ""}}]

  return [{item: "Invited Guest", quantity: 30}, {item: "Ruby Q", quantity: "12", stripe_token: "1", date: ""}];

}
