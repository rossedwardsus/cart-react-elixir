//get the order total

import {SET_SESSION} from '../constants/actionTypes.ts';
import axios from 'axios';
import {push} from 'react-router-redux';
//import {getUserOrders} from './user.ts';

export function createOrderSession(order_type: any) {
  let url = "";
  return function (dispatch: any) { 
    axios.post('/api/graphql',
                     {query: 'mutation {create_order_session (order_type: "' + order_type + '") {session_id}}'}, {headers: {'authorization': "bearer"}}
            )
            .then((response: any) => {

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

            
            }).then((response: any) => {
                  
                  
                   //dispatch(push("/order/menu"));



                  /*if(response.data.data.processYoursSocialOrder.errorReason != ""){

                      console.log("graphql response " + JSON.stringify(response.data.data.processYoursSocialOrder.errorReason));

                      dispatch({type: SET_ORDER_TYPE, value: order_type, pool_name: "", pool_date: "", pool_id: "", pool_message: "response.data.pool_message"});


                      //if save_info_for_later == true...
                      //last four card number

                      localStorage.setItem("sconely_user", JSON.stringify({token: "", name: "ross", contact_email: "gmail", delivery_contacts_addresses: [{street1: "1109 santa monica blvd"}], pament_methods: [{last_four_digits: "4444"}]}));

                      console.log(JSON.parse(localStorage.getItem("sconely_user")).name);

                      //else delete from redux
                      //console.log("clear order");
                      
                      //dispatch({type: SET_ORDER_TYPE, value: order_type, pool_name: "", pool_date: "", pool_admin_receipt_id: "", pool_message: response.data.pool_message});
            

                      //that.props.history.push('/user');
                      //context.router

                      //this.context.router.push('/order/complete');
                      //dispatch(push("/order/complete"));

                  }else{

                    //dispatch({ type: , item_id: "session_id"});

                  }*/
      

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
  return function (dispatch: any) { 
    axios.post('/api/graphql',
                     {query: 'mutation {update_order_session (session_id: "session_id", screen: "' + screen + '") {status}}'}, {headers: {'authorization': "bearer"}}
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
    
  }
}

