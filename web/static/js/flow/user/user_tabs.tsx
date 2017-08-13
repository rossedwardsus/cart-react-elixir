import * as React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';


class UserTabs extends React.Component<any, any> {
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

  componentDidMount = () => {

      console.log("cwrp signature tabs " + JSON.stringify(this.props.pathname.indexOf("details")));

      if(this.props.pathname.indexOf("details") > -1){

          this.setState({details_tab: "active"});

      }else if(this.props.pathname.indexOf("preview") > -1){

          this.setState({menu_preview_tab: "active"});

      }else if(this.props.pathname.indexOf("guests") > -1){

          this.setState({guests_tab: "active"});

      }else if(this.props.pathname.indexOf("items") > -1){

          this.setState({items_tab: "active"});

      }else if(this.props.pathname.indexOf("summary") > -1){

          this.setState({summary_tab: "active"});

      }

  }


  render(): JSX.Element {
    return (
              <ul className="nav nav-tabs">
                  <li className={this.state.details_tab}><Link to="/order/1234/details" style={{fontSize: 11}}>About me</Link></li>
                  <li className={this.state.menu_preview_tab}><Link to="/order/1234/preview" style={{fontSize: 11}}>Payment Methods</Link></li>
                  <li className={this.state.guests_tab}><Link to="/order/1234/guests" style={{fontSize: 11}}>Delivery Contacts and Adresses</Link></li>
                  <li className={this.state.items_tab}><Link to="/order/1234/items" style={{fontSize: 11}}>Photo</Link></li>
                  <li className={this.state.summary_tab}><Link to="/order/1234/summary" style={{fontSize: 11}}>CHECKOUT</Link></li>
                 
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
