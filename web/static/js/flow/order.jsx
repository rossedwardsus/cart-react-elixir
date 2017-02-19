import React from 'react'

//import SconelyYoursMenu from './sconely_yours_single_page_menu';
//import SconelyYoursDeliveryAddressPayment from './sconely_yours_single_page_menu';



export default class Order extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        

    };

    
  }

  

  render(): React.Element {
    return (
      <ul>
        check localstorage or redux and the order information and display it here.  ie guest sconely yours, social, registered user, signature
      </ul>
    )
  }
}