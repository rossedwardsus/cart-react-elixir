import {SET_EVENT_NAME, SET_INVITED_GUEST_COUNT, SET_GUEST_MESSAGE} from '../constants/actionTypes.ts';

export function setEventName(value: any, order_id: any) {
  console.log("set event name action from redux" + order_id);
  return function (dispatch: any) { 
    
    dispatch({type: SET_EVENT_NAME, value: value, order_id: order_id});

    /*return {      
      type: SET_EVENT_NAME,
      value,
      order_id
    }*/
  }
}

export function setInvitedGuestCount(value: any, order_id: any) {
  //alert(item_id)
  return function (dispatch: any) { 
    
    dispatch({type: SET_INVITED_GUEST_COUNT, value: value, order_id: order_id});

    /*return {
      type: SET_GUEST_COUNT,
      value,
      order_id
    }*/
  }
}


export function setInvitedGuestMessage(value: any, order_id: any) {

  console.log("guest message")

  return function (dispatch: any) { 
    
    //dispatch({type : "REQUEST_STARTED"});
  
    return {
      type: SET_GUEST_MESSAGE,
      value
    }

  }
}



/*export function setImageAdded(value: any) {
  //alert(item_id)
  return {
    type: SET_GUEST_EMAIL,
    value
  }
}*/

