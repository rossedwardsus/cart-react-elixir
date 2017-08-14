import * as React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';


class UserTabs extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);

    this.state = {

          //order_id: this.props.params.order_id,
          about_me_tab: "",
          payment_methods_tab: "",
          photo_tab: "",
          delivery_contact_addresses_tab: "" 
    };
  }

  componentDidMount = () => {

      console.log("cwrp user tabs " + JSON.stringify(this.props.pathname.indexOf("details")));

      if(this.props.pathname.indexOf("about_me") > -1){

          this.setState({about_me_tab: "active"});

      }else if(this.props.pathname.indexOf("payment_methods") > -1){

          this.setState({payment_methods_tab: "active"});

      }else if(this.props.pathname.indexOf("photo") > -1){

          this.setState({photo_tab: "active"});

      }else if(this.props.pathname.indexOf("delivery_contacts_addresses") > -1){

          this.setState({delivery_contacts_addresses_tab: "active"});

      }else if(this.props.pathname.indexOf("summary") > -1){

          this.setState({summary_tab: "active"});

      }

  }


  render(): JSX.Element {
    return (
              <ul className="nav nav-tabs">
                  <li className={this.state.about_me_tab}><Link to="/user/about_me" style={{fontSize: 11}}>About me</Link></li>
                  <li className={this.state.payment_methods_tab}><Link to="/user/payment_methods" style={{fontSize: 11}}>Payment Methods</Link></li>
                  <li className={this.state.delivery_contacts_addresses_tab}><Link to="/user/delivery_contacts_addresses" style={{fontSize: 11}}>Delivery Contacts and Adresses</Link></li>
                  <li className={this.state.photo_tab}><Link to="/user/photo" style={{fontSize: 11}}>Photo</Link></li>
              </ul>    
    )
  }
}

function mapStateToProps(state: any) {
  //console.log("signature tabs" + JSON.stringify(state.routing.locationBeforeTransitions.pathname));
  return {

      pathname: state.routing.locationBeforeTransitions.pathname,
  
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {

  }
}


//export default connect(mapStateToProps, mapDispatchToProps)(Order);

const UserTabsConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTabs)

export default UserTabsConnected;
