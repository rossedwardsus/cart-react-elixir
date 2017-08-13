import "babel-polyfill";
import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';
//import {setUserFirstName, setUserLastName, setUserEmail} from '../actions/user.ts';
import {List, Map} from 'immutable';


//const mapDispatchToProps = dispatch => {
//  return {
//    onNavigateTo(dest) {
//      dispatch(push(dest));
//    }
//  };
//};

//@connect(null, mapDispatchToProps)
class UserNavbar extends React.Component<any, any> {
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
                              <a className="navbar-brand" style={{textAlign: "center"}} href="#"><img src="http://sconely-test.herokuapp.com/images/logo/LogoJune5d.jpg"/></a>
                            </div>
                            <div className="collapse navbar-collapse" id="navigationbar">
                              <ul id="navbar" className="nav navbar-nav navbar-right">
                                <li><Link to="/login">LOGOUT</Link></li>
                                <li><Link to="/register">ABOUT US</Link></li>
                                <li><Link to="/register">FAQ</Link></li>
                                <li><p className="navbar-text">SIGNED in as {this.props.first_name} {this.props.last_name}</p></li>
                              </ul>
                              
                            </div>
                          </div>
                    </nav>
              </div>
    )
  }
}


export default UserNavbar;