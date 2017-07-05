import "babel-polyfill";
import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';
import {setUserFirstName, setUserLastName, setUserEmail} from '../actions/user.ts';
import {List, Map} from 'immutable';


//const mapDispatchToProps = dispatch => {
//  return {
//    onNavigateTo(dest) {
//      dispatch(push(dest));
//    }
//  };
//};

//@connect(null, mapDispatchToProps)
class UserAboutMe extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        image: "/images/gallery/sconely_group_HPb.jpg",
        guest_code: ""
        
    };

   
  }

  componentDidMount(){

    //alert("jsx");
    //get active items from the database
    //setInterval(this.changeImage, 10000);

    //localStorage.get('user');

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  onSubmit(e: any){

    e.preventDefault();

  }

  setUserEmail = (e: any) => {

    console.log("setuseremail");

    this.props.setUserEmail(e);

  }

  setUserFirstName = (e: any) => {

      //this.setState({guest_code: e.target.value});
    this.props.setUserFirstName(e);

  }

  setUserLastName = (e: any) => {

      //this.setState({guest_code: e.target.value});
    this.props.setUserLastName(e);

  }

  onSwipedLeft(){

    //alert("left");
    //this.setState({image: "/images/gallery/Sconely_HomePage_image_new_site.jpg"})
    this.changeImage();

  }

  onSwipedRight(){

    //alert("right");
    //this.setState({image: "/images/gallery/Sconely_HomePage_image_new_site.jpg"})
    this.changeImage();

  }

  changeImage(){

    if(this.state.image == "/images/gallery/sconely_group_HPb.jpg"){

        this.setState({image: "/images/gallery/Sconely_HomePage_image_new_site.jpg"});

    }else{

        this.setState({image: "/images/gallery/sconely_group_HPb.jpg"});

    }

  }


  createOrder(order_type: any) {

    if(order_type == "sconely_yours"){

        //var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);

        //orders.push({order_id: 54321, user_type: "guest", order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: //[{link: "event_details", text: "Event Details"}, {link: "menu", text: "Menu"}], status: "new"});
       
        //orders.push({order_id: 54321, user_type: "rgistered, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: //[{link: "event_details", text: "Event Details"}, {link: "menu", text: "Menu"}], status: "new"});

        //if user is logged in then 
        this.context.router.push('/order/12345');

        //this.context.router.push('/order/12345');


    }else if(order_type == "sconely_social"){

        //var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        //orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}], status: "new"});

        localStorage.setState("order", Map({name: "name", contact: "contact", cart: List([]), delivery_address: {street: ""}, payment: ""}));

        this.context.router.push('/order/12345');
         
    }else if(order_type == "sconely_signature"){

        var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}], status: "new"});

        this.context.router.push('/order/12345/signature');
        
         
    }


    /*const client = GQLClient('http://localhost:3000', {
      // anything passed here is merged with 
      // the options passed to fetch() 
      credentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });*/

    /*client.mutate(`
      mutation ($id: RecordID!, $name: String!) {
        updateUser(input: {id: $id, name: $name}) {
          user {
            id
            name
          }
        }
      }
    `, { id: 1234, name: 'Danny' }).then((result) => {
      console.log(result.data.user);
      // => { id: 1234, name: 'Danny' } 
    });*/



    /*var query = `
      query q (id: String!) {
        user(id: $id) {
          id,
          email,
          name
        }
      }
    `
    var queryVars = {
      id: 'abcdef'
    }
    var opts = {
      // custom fetch options 
    }*/
     
    /**
     * @param  {Query} query graphql query
     * @param  {Object} [vars]  graphql query args, optional
     * @param  {Object} [opts]  fetch options, optional
     */
    /*fetch(query, queryVars, opts).then(function (results) {
      if (results.errors) {
        //... 
        return
      }
      var user = result.data.user
      //... 
    })*/


  

    //alert(order_type);
    
    //this.context.router.push('/order/12345/event_details');
    
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  //<Swipeable onSwipingLeft={this.onSwipedLeft} onSwipingRight={this.onSwipedRight}><img width="300" height="300" src={this.state.image}/></Swipeable>
                                  


  render(){

    let logged_in = null;
    
    if("logged_in_true" == "logged_in_true"){
        
        logged_in = <div id="navbar" className="navbar-collapse collapse navbar-right">
                      <ul className="nav navbar-nav">
                        <li className="inactive">Profile<span className="sr-only">(current)</span></li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li className="inactive"><Link to="/login">Login<span className="sr-only">(current)</span></Link></li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li className="inactive"><a>Start Order</a></li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li className="inactive"><Link to="/public/menu">Menu</Link><span className="sr-only">(current)</span></li>
                      </ul>
                    </div>
    }

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
      
                              {logged_in}
                             
                          </div>
                    </nav>
                    <div className="row">
                        <div className="hidden-xs col-md-4">
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          Home
                          <br/>
                          <Link to="/public/menu">Menu</Link>
                          <br/>
                          <Link to="/user/delivery_addresses">Delivery Addresses</Link>
                          <br/>
                          <Link to="/user/payment_methods">Payment Methods</Link>
                          <br/>
                          <Link to="/user/about_me">About Me</Link>
                          <br/>
                          <Link to="/user/photo">Photo</Link>
                        </div>
                        <div className="col-md-6">
                                  <br/>
                                  <br/>
                                  <br/>
                                   <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="First Name" onChange={(e: any) => this.setUserFirstName(e)}/>
                                      </div>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Last Name" onChange={(e: any) => this.setUserLastName(e)}/>
                                      </div>
                                    </form>
                                    <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Email" onChange={(e: any) => this.setUserEmail(e)}/>
                                      </div>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Mobile"/>
                                      </div>
                                    </form>    
                                    <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Company Name" />
                                      </div>
                                    </form>       
                                    save button            
                                  </div>
                        <div className="hidden-xs col-md-2">
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              maybe put something here
                        </div>
                    </div>
              </div>
    )
  }
}

function mapStateToProps(state: any) {
  console.log("delivery addresses component/state" + JSON.stringify(state.user));
  return {
   delivery_addresses: state.user.delivery_addresses
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    setUserFirstName: (e: any) => {
      console.log("e.target.value");
      dispatch(setUserFirstName(e.target.value));
    },
    setUserLastName: (e: any) => {
      console.log("e.target.value");
      dispatch(setUserLastName(e.target.value));
    },
    setUserEmail: (e: any) => {
      console.log("e.target.value");
      dispatch(setUserEmail(e.target.value));
    },
    //addUserDeliveryAddress: (name: any, street1: any, street2: any, city: any, state: any, zipcode: any) => {
    //  console.log(e.target.value);
    //  dispatch(addUserDeliveryAddress(name, street1, street2, city, state, zipcode));
    //},
   
  }
}

const UserAboutMe1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAboutMe)

export default UserAboutMe1;