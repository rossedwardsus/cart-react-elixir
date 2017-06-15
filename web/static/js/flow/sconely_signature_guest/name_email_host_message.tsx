import * as React from 'react'

import { Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';

//import MenuItems from './menu_items';

class GuestNameEmailHostMessage extends React.Component<any, any> {
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
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#"><img height="100" width="250" src="/images/logo/Sconely_color_web_300_space3.jpg"/></a>
                  </div>
                </div>
            </nav>
            <div className="row">      
                  <br/>
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
                  <form className="form-inline">
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputName2" placeholder="Email"/>
                    </div>
                  </form>
                  <br/>
                  <br/>
                  <form className="form-inline">
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputName2" placeholder="Message"/>
                    </div>
                  </form>
                  <br/>
                  <br/>
                  <button>Complete Order</button>
                  <br/>
                  <br/>
                  <br/>
                
            </div>
        </div>
    )
  }
}

function mapStateToProps(state: any) {
  console.log("delivery addresses component/state" + JSON.stringify(state));
  return {
   //order: state.default.order
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    //getUserDeliveryAddresses: () => {
    //  console.log("e.target.value");
    //  dispatch(getUserDeliveryAddresses());
    //},
    //setContactPhone: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setContactPhone(e.target.value));
    //},
   
  }
}

const GuestNameEmailHostMessage1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestNameEmailHostMessage)

export default GuestNameEmailHostMessage1;