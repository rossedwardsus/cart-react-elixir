import * as React from 'react'

import { Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';

//import MenuItems from './menu_items';
import {completeGuestResponse} from '../actions/signature_guest_response.ts';
import {getOrderCompletedScreenText} from '../selectors/signature_guest_response.ts';
import NavBar from './navbar.tsx';


class SignatureGuestOrderComplete extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        page: "",

        menu_items: [{item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 2, title: "suzy sunshine", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}],
        
    };

    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.showItem = this.showItem.bind(this);

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  guestChoice(order_type: any) {
    //alert(order_type);
    this.context.router.push('/order/12345');
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  mouseOver(e: any){

      e.target.src = "/images/menu/DWK_greenrollover3.jpg";

  }

  mouseOut(e: any){

      e.target.src = "/images/menu/DWK_greenrollover1.jpg";

  }

  showItem(item_id: any){

      //alert(item_id);

      $('#myModal').modal('show');

  }

  setFirstName = (e: any) => {

      this.setState({first_name: e.target.value});

  }

  setLastName = (e: any) => {

      this.setState({last_name: e.target.value});

  }

  setEmail = (e: any) => {

      this.setState({email: e.target.value});

  }

  saveGuestChoice = (e: any) => {

    this.props.saveGuestChoice("first_name", "last_name", "email", "choice");

  }

  render(){
    return (
      <div>
           <NavBar/>
            <div className="row">      
                <div className="hidden-xs col-md-3">
                </div>
                <div className="col-xs-12 col-md-9">
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      {this.props.text}
                      <br/>
                </div>
            </div>
        </div>
    )
  }
}

function mapStateToProps(state: any) {
  console.log("delivery addresses component/state" + JSON.stringify(state));
  return {
    text: getOrderCompletedScreenText(state),
    //GuestResponse: state.GuestResponse,
   //order: state.default.order
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    //completeGuestResponse: (first_name: any, last_name: any, email: any) => {
    //  console.log("e.target.value");
    //  dispatch(completeGuestResponse(first_name, last_name, email));
    //},
    //setContactPhone: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setContactPhone(e.target.value));
    //},
   
  }
}

const SignatureGuestOrderComplete1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignatureGuestOrderComplete)

export default SignatureGuestOrderComplete1;