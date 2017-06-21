import * as React from 'react'

import { Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';

//import MenuItems from './menu_items';
import {saveGuestChoice} from '../actions/guest_response.ts';

class GuestName extends React.Component<any, any> {
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

  render(){
    return (
      <div>
            <nav className="navbar navbar-default" style={{border: 1}}>
                      <div className="container-fluid">
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
                             <span className="sr-only">Toggle navigation</span>
                             <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" style={{textAlign: "center"}} href="#"><img src="/images/logo/LogoJune5d.jpg"/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="navigationbar">
                          <ul id="navbar" className="nav navbar-nav navbar-right">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Signup</Link></li>
                            <li><Link to="/register">About Us</Link></li>
                            <li><Link to="/register">Faq</Link></li>
                          </ul>
                        </div>
                      </div>
                    </nav>
            <div className="row">      
                <div className="hidden-xs col-md-3">
                </div>
                <div className="hidden-xs col-md-9">
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      Please provide us with your name so we can personalize your scone.
                      <br/>
                      <br/>
                      <form className="form-inline">
                        <div className="form-group">
                          <input type="text" className="form-control" id="exampleInputName2" placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="exampleInputName2" placeholder="Last Name"/>
                        </div>
                      </form>
                      <br/>
                      <br/>
                      <button onClick={() => this.props.saveGuestChoice(this.props.GuestResponse)}>Complete Order</button>
                      <br/>
                      <br/>
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
    GuestResponse: state.GuestResponse,
   //order: state.default.order
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    saveGuestChoice: (GuestResponse: any) => {
    //  console.log("e.target.value");
      dispatch(saveGuestChoice(GuestResponse));
    },
    //setContactPhone: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setContactPhone(e.target.value));
    //},
   
  }
}

const GuestName1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestName)

export default GuestName1;