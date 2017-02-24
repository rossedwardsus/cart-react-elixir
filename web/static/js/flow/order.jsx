import React from 'react'

import SconelyYoursMenu from './sconely_yours_menu';
//import SconelyYoursDeliveryAddressPayment from './sconely_yours_single_page_menu';
import { Link } from 'react-router'



export default class Order extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        

    };

    //user_type=guest
    //order_type=yours load 
    //state==menu
    //yours_menu
    //just show cart if guest
    //or separate into order_menu and order_delivery_address_payment objects
    //or have everything work of a "pages" flag
    
  }

  

  render(): React.Element {
    return (  
            <div className="container-fluid">
                  <div className="row">
                        <div className="hidden-xs col-md-2">
                          <br/>
                          if yours
                          <br/>
                          else social
                          <br/>
                          cart in left sidebar
                          <br/>
                          item_id-item_description-quantity-remove-edit
                          <br/>
                          <br/>
                        </div>
                        <div className="col-xs-6 col-md-6">
                                <div>
                                  if registered user show registered left user menu and topnavbar
                                  <br/>
                                  if order type == yours && page == menu
                                  <br/>
                                 <SconelyYoursMenu/>
                                  <br/>
                                  <br/>
                                  
                                </div>
                        </div>
                        <div className="hidden-xs col-xs-6 col-md-6">
                              maybe put something here
                        </div>
                </div>
            </div>
                )
  }
}