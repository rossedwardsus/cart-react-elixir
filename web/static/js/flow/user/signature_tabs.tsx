import * as React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';


class SignatureTabs extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);

    this.state = {

          //order_id: this.props.params.order_id,
          details_tab: "",
          guests_tab: "",
          additional_items_tab: "",
          menu_preview_tab: "" 
    };
  }

  componentWillReceiveProps = () => {

      console.log("cwrp signature tabs" + JSON.stringify(this.props.routing.locationBeforeTransitions.pathname));

      //if(this.props.routing.locationBeforeTransitions.pathname.indexOf("event_details"))

  }


  render(): JSX.Element {
    return (
              <ul className="nav nav-tabs">
                  <li className="active"><Link to="/order/1234/details" style={{fontSize: 11}}>EVENT DETAILS</Link></li>
                  <li><Link to="/order/1234/guests" style={{fontSize: 11}}>EVENT GUESTS</Link></li>
                  <li><Link to="/order/1234/items" style={{fontSize: 11}}>ADDITIONAL ITEMS</Link></li>
                  <li><Link to="/order/1234/summary" style={{fontSize: 11}}>ORDER SUMMARY</Link></li>
                  <li><Link to="/order/1234/preview" style={{fontSize: 11}}>EVENT MENU PREVIEW</Link></li>
              </ul>    
    )
  }
}

function mapStateToProps(state: any) {
  console.log("signature tabs" + JSON.stringify(state.routing.locationBeforeTransitions.pathname));
  return {
  
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {

  }
}


//export default connect(mapStateToProps, mapDispatchToProps)(Order);

const SignatureTabsConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignatureTabs)

export default SignatureTabsConnected;
