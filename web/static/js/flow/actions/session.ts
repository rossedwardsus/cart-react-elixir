//get the order total

import {SET_SESSION_ID} from '../constants/actionTypes.ts';
import axios from 'axios';
import {push} from 'react-router-redux';
//import {getUserOrders} from './user.ts';

export function createOrderSession(order_type: any, pool_name: any) {
  let url = "";
  return function (dispatch: any) { 
    axios.post('/api/graphql',
                     {query: 'mutation {create_order_session (order_type: "' + order_type + '", pool_name: "' + pool_name + '") {session_id}}'}, {headers: {'authorization': "bearer"}}
            )
            .then((response: any) => {

                   console.log("session id action");
                   console.log(JSON.stringify(response));

                   dispatch({type: SET_SESSION_ID, value: response.data.data.createOrderSession.sessionId});


                  /*dispatch({
                              type: CREATE_ORDER, 
                              order_type: order_type, 
                              //pool_name: "this.props.params", 
                              pool_admin_receipt_order_id: response.data.data.getPoolOrderDetails.poolAdminReceiptOrderId,
                              pool_name: response.data.data.getPoolOrderDetails.poolName, 
                              pool_address: 
                              response.data.data.getPoolOrderDetails.poolAddress,
                              pool_location: response.data.data.getPoolOrderDetails.poolLocation,
                              pool_delivery_date_formatted: pool_delivery_date_formatted,
                              pool_order_by_date_formatted: pool_order_by_date_formatted,
                  
                  })*/

                  //const delay = (ms: any) => new Promise(resolve =>
                  //  setTimeout(resolve, ms)
                  //);

                  //delay(2000).then(() => dispatch(push("/order/menu")));

                  //dispatch(setPoolOrder("pool_name", "pool_date", "pool_id", "pool_message")).then(() => {});

                  //dispatch(push("/order/menu"));

            
            })
            .catch((error: any) => {

                  console.log("axios error handler here" + error);

                  //dispatch({type: SET_ORDER_TYPE, value: order_type, pool_name: "graphql", pool_date: "graphql", pool_id: "", pool_message: "response.data.pool_message"});

                  //dispatch(push("/order/menu"));


                  //go to code/payment screen
          //        this.props.loadView();


                  //display errror to user - payment

           //if (!error.status) {
              // network error
            //}

            })
    //dispatch({ type: SET_SESSION, user_id: "guest"});
    //dispatch(push("/order/checkout"));
  }
}

export function updateOrderSession(screen: any) {
  let url = "";
  return function (dispatch: any, getState: any) { 
    axios.post('/api/graphql',
                     {query: 'mutation {update_order_session (session_id: "' + getState().User.orderSession.sessionId + '", screen: "' + screen + '") {status}}'}, {headers: {'authorization': "bearer"}}
    )
    .then((response: any) => {

          dispatch(push("/order/" + screen));


          /*dispatch({
                      type: CREATE_ORDER, 
                      order_type: order_type, 
                      //pool_name: "this.props.params", 
                      pool_admin_receipt_order_id: response.data.data.getPoolOrderDetails.poolAdminReceiptOrderId,
                      pool_name: response.data.data.getPoolOrderDetails.poolName, 
                      pool_address: 
                      response.data.data.getPoolOrderDetails.poolAddress,
                      pool_location: response.data.data.getPoolOrderDetails.poolLocation,
                      pool_delivery_date_formatted: pool_delivery_date_formatted,
                      pool_order_by_date_formatted: pool_order_by_date_formatted,
          
          })*/
   
    })
    .catch((error: any) => {

          console.log("axios error handler here" + error);

          //dispatch({type: SET_NETWORK_ERROR, networkError: true});

    })
    //dispatch({ type: SET_SESSION, user_id: "guest"});
    
  }
}

