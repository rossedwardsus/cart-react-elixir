import * as React from 'react'

//import ToggleButton from 'react-toggle-button'
//import InputRange from 'react-input-range';

//import SconelySocialTopMenu from './sconely_social_top_menu'; 

import { Link } from 'react-router';
import { connect } from 'react-redux';


//import 'react-input-range/react-input-range.css';

class SignatureOrderPreview extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();

       this.state = {

        value: 0,
        //values: 0

        menu_items: [{"name":"DWK","ingredients":"Unbleached white all-purpose flour*, Anjou pears*, Pecans, Butter*, Eggs*, Heavy Cream*, Coconut sugar*, Fresh ginger*, Ground ginger, Baking powder, Pure vanilla extract*, Sea salt. *Organic\r","id":"1","description":"DWK is an exquisite combination of flavors and textures, with caramelized pears, praline pecans and fresh ginger."},{"name":"Snorker","ingredients":"Unbleached white all-purpose flour*, Dark chocolate*, Hazelnuts, Cocoa powder*, Heavy Cream*, Eggs*, Coconut sugar*, Butter*, Pure vanilla extract*, Baking powder, Sea salt. *Organic","id":"2","description":"Snorker is a rich double dark chocolate dessert scone with dark chocolate chunks and hazelnut praline. \r"},{"name":"Ruby Q","ingredients":"Unbleached white all-purpose flour*, Fresh cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic","id":"3","description":"Fresh cherries, semisweet chocolate chunks and Madagascar vanilla bean – sweet and simple.\r"},{"name":"Suzy Sunshine","ingredients":"Unbleached white all-purpose flour*, Bananas*, Deglet noor dates, Eggs*, Yogurt*, Butter*, Chai tea*, Coconut sugar*, Baking powder, Pure vanilla extract*, Sea salt. *Organic\r","id":"4","description":"A rich, warming banana date scone enhanced with Awarding-Winning Masala Chai from SerendipiTea.\r"},{"name":"Bea (Vegan)","ingredients":"Unbleached white all-purpose flour*, Fresh blueberries*, Almond milk*, Matcha tea*, Virgin coconut oil*, Ground flax seeds*, Lemon zest*, Coconut sugar*, Pure vanilla extract*, Baking powder, Sea salt. *Organic\r","id":"5","description":"Bursting with plump fruit, antioxidant-filled blueberry matcha tea lemon scone.\r"},{"name":"Julie Freedom (Vegan and Gluten-Free)","ingredients":"Gluten-free flour (brown rice flour*, sorghum flour*, potato starch, arrowroot powder*), Gluten free oats*, Almond meal*, Dried unsulfured apricots*, Whole raw almonds, Sunflower seeds, Pumpkin seeds*, Golden raisins, Chia seeds*, Dried unsweetened unsulfured cranberries*, Dried unsweetened unsulfured dried cherries, Almond milk*, Virgin coconut oil*, Maple syrup*, Tangerine zest*, Baking soda, Baking powder, Pure vanilla extract*, Sea salt. *Organic\r","id":"6","description":"This healthy scone is nutrient dense with chia seeds, unsulfured dried fruit and crunchy nuts, naturally sweetened with maple syrup and tangerine zest."},{"name":"Zilla","ingredients":"Unbleached white all-purpose flour*, Purple onions*, Gruyere, Butter*, Eggs*, Heavy cream*, Sage*, Baking powder, Raw cane sugar*, Sea salt. *Organic","id":"7","description":"Zilla is a savory powerhouse. It perfectly combines gruyere cheese, slowly caramelized purple onions and sage.\r"},{"name":"Savvy Go Go\r","ingredients":"Unbleached white all-purpose flour,* Sun-dried tomatoes, Oven-dried tomatoes*, Goat cheese, Eggs*, Heavy cream*, Butter*, Thyme*, Basil*, Rosemary*, Oregano*, Garlic*, Baking powder, Raw cane sugar*, Sea salt. *Organic\r","id":"8","description":"Savory and satisfying with sun-dried tomatoes, goat cheese and fresh herbs, Savvy Go Go is perfect for meals or snacks on the go!"},{"name":"Ishkabibble (Vegan and Gluten-Free)","ingredients":"Gluten-free flour (brown rice flour*, sorghum flour*, potato starch, arrowroot powder*), Almond milk*, Gold potatoes*, Virgin coconut oil*, Roasted garlic*, Kale*, Chives*, Preserved lemons*, Ground flax seeds,* Baking powder, Coconut sugar*, Black pepper, Ground and fresh turmeric*, Sea salt, White pepper*. *Organic\r","id":"9","description":"Ishkabibble is a unique potato kale scone enhanced with roasted garlic, fresh chives, tumeric, and house made preserved lemons. Vegans, gluten-free eaters and anyone in search of a healthy, savory alternative love this one!\r"}]

      };

    this.handleValuesChange = this.handleValuesChange.bind(this);

    //myTimer;
    //var myVar = setInterval(
    //    () => 
            //get the data from state and upload to server
            //only update if the data has been changed though
            //add a flag that updates when they change something
            
            //if this.state.changed == true then update
            //only update guest details

            //window.event.event_name == this.state.event_name
            //window.address == "home"
            //window.event_date == "date"
            //window.event_time == "time"
            //window.custom_code = "custom_code"

            /*request
              .post('/api/order/new')
              .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
              .set('X-API-Key', 'foobar')
              .set('Accept', 'application/json')
              .end(function(err, res){
                // Calling the end function will send the request
                //this.setState({payment_complete: true});
          
              });*/

            //console.log("hello")
    //, 10000);

    //myVar;
    //myTimer;

  }

  handleValuesChange(e: any) {
    //alert(JSON.stringify(e.target.value));
    this.setState({value: e.target.value});

    //localStorage.getItem("number_of_guests = "values";
    //alert(window.guest_chooses);
  }

  showItem = (item_id: any) => {

      //alert(item_id);

      //this.setState({selected_item_id: item_id});

      //var elementPos = array.map(function(x) {return x.id; }).indexOf(idYourAreLookingFor);
      //var objectFound = array[elementPos];

      //var filteredArray = array.filter(function (element) { 
      //    return element.id === 0;
      //});

      let item_index = this.state.menu_items.findIndex((obj: any) => obj.id == item_id);

      console.log("item index " + item_index);


      //{1234: {title: ""}, 5678: {title: ""}}

      /*this.props.normalized_menu_items.map(function(item: any){

          if(item.item_id === item_id){*/

              //this.setState({selected_item_name: this.props.menu_items[item_index].name});
              //this.setState({selected_item_description: this.props.menu_items[item_index].description});
              //this.setState({selected_item_ingredients: this.props.menu_items[item_index].ingredients});

          /*}


      }.bind(this));*/


      $('#myModal').modal('show');

  }

  render(): JSX.Element {

    var guests_choices = "";

    if(this.state.value == true){

        guests_choices = "Ross Edwards rossedwards.us@gmail.com";

    }

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
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Signup</Link></li>
                <li><Link to="/register">About Us</Link></li>
                <li><Link to="/register">Faq</Link></li>
              </ul>
              <form id="navbar" className="navbar-form navbar-left">
                <div className="form-group">
                  
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        </nav>
        <div className="row">
                    <div className="hidden-xs col-md-3" style={{wordWrap: "break-word", overflowWrap: "break-word", textOverflow: "ellipsis"}}>
                      <br/>
                      <br/>
                        <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <img src="/images/menu/LACI_1.5.jpg"/>
                      <br/>
                      Event Name
                      <br/>
                      <p className="text-left">Message</p>
                      <br/>
                      <div className="form-group">
                        <textarea className="form-control" rows={5} id="comment" style={{resize: "none"}}></textarea>
                      </div>
                      <button className="btn btn-default">Save</button>
                    </div>
                    <div className="col-sm-14 col-md-9">
                      <br/>
                      <br/>
                        <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-2" style={{fontSize: 11}}><Link to="/user/order/12345">EVENT DETAILS</Link></div>
                          <div className="col-md-2" style={{fontSize: 11}}><Link to="/order/12345/guests">EVENT GUESTS</Link></div>
                           <div className="col-md-3" style={{fontSize: 11}}><Link to="/order/12345/preview">EVENT MENU PREVIEW</Link></div>
                           <div className="col-md-2" style={{fontSize: 11}}><Link to="/order/12345/items">ADDITIONAL ITEMS</Link></div>
                           <div className="col-md-2" style={{fontSize: 11}}><Link to="/order/12345/summary">ORDER SUMMARY</Link></div>
                        </div>
                      </div>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      
                      <br/>

                       {this.state.menu_items.map(function(item: any, index: any){

                          //console.log(JSON.stringify(item));
                      

                          //let image_id = this.state.smorgasbourgh_menu_items.find((item1: any) => item1.item_id === item.item_id).image_id;

                          //this.setState({image_id: image_id});

                          //console.log("image id" + image_id);

                          //console.log("image id " + this.state["image_src_" + item.item_id]);

                          //let image_src = "/images/menu/" + this.state["image_src_" + item.item_id] + ".jpg";

                          return(
                                  <div className="col-xs-12 col-md-4" style={{marginTop: 0, marginBottom: 0}}>
                                        <img id="1" onClick={() => this.showItem(item.id)} onMouseEnter={(e: any) => e.currentTarget.src="/images/menu/laci/" + item.name.toLowerCase().replace(/ /g, "") + "rollover.jpg"} onMouseLeave={(e: any) => e.currentTarget.src="/images/menu/laci/" + item.name.toLowerCase().replace(/ /g, "") + ".jpg"} src={"/images/menu/laci/" + item.name.toLowerCase().replace(/ /g, "") + ".jpg"} data-target="myModal" alt="..." height="270" width="270"/>
                                    <br/>    
                                    <br/>
                                    <b>{item.name}</b>
                                    <br/>
                                    <br/>
                                    <br/>
                                  </div>
                        );
                      }.bind(this))}

                          <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" max-height=" 700px">
                                <div className="modal-dialog" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style={{fontColor: "black", fontSize: 20}}>&times;</span></button>
                                      <h4 className="modal-title" id="myModalLabel">{this.state.selected_item_name}</h4>
                                    </div>
                                    <div className="modal-body">
                                        {this.state.selected_item_description}
                                        <br/>
                                        <br/>
                                        Ingredients: {this.state.selected_item_ingredients}
                                        <br/>
                                        <br/>
                                    </div>
                                    <div className="modal-footer">
                                      <form className="form-horizontal">
                                        <div className="form-group">
                                          <div className="col-md-3">
                                            <button className="btn btn-default"  type="button" style={{borderRadius: 0, WebkitAppearance: "none", height: 35, width: 120}}>Select Scone</button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                          </div>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="hidden-xs col-lg-12" style={{fontSize: 12}}>
                            <br/>
                            <br/>
                            All of our scones are made from scratch and freshly baked to order. Our scones are free of refined sugars, soy and chemical preservatives. Although we offer gluten-free, nut-free and dairy free options, we cannot guarantee that any of our scones do not contain traces of allergens (including dairy, eggs, soy, tree nuts, wheat and others), as we bake in a common kitchen where shared equipment is used.
                            <br/>
                            <br/>
                            <br/>
                            *Names of scones are inspired by nicknames of dear friends and family
                            <br/>
                            <br/>
                        </div>
                        <br/>
                        <div className="col-xs-12 hidden-lg" style={{fontSize: 12, wordWrap: "break-word", overflowWrap: "break-word", textOverflow: "ellipsis"}}>
                            <br/>
                            <br/>
                            All of our scones are made from scratch and freshly baked to order.  Our scones are free of refined sugars, soy and chemical preservatives. Although we offer gluten-free, nut-free and dairy free options, we cannot guarantee that any of our scones do not contain traces of allergens (including dairy, eggs, soy, tree nuts, wheat and others),  as we bake in a common kitchen where shared equipment is used.
                            <br/>
                            <br/>
                            <br/>
                            *Names of scones are inspired by nicknames of dear friends and family
                            <br/>
                            <br/>
                        </div>
                        <br/>
                        <br/>
                        
                      </div>
                      
                    </div>
      </div>
    )
  }
}


function mapStateToProps(state: any) {
  console.log("checkout state" + JSON.stringify(state));
  return {
   /*session: state.session,
   order_validations: state.order_validations,
   order: state.Order,
   order_delivery_address: state.delivery_address,
   order_contact: state.contact,
   order_name: state.name,
   order_cart_items: state.cart.cart_items,
   order_datetime: state.OrderDatetime,
   order_payment_method: state.OrderPayment,*/

   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //viewmenuthunk

    //addCartItem: (order_id: any, item_id: any, type: any, quantity: any) => {
    //  dispatch(addCartItem(order_id, item_id, "type", 1));
    //},
    //processSignatureOrder: () => {
    //  //dispatch(processSignatureOrder(ownProps.params.order_id));
    //},
    //increaseCartItemQuantity: () => {
    //  dispatch(increaseCartItemQuantity(1, 12));
    //},
    //decreaseCartItemQuantity: () => {
    //  dispatch(decreaseCartItemQuantity(1, 12));
    //}
  }
}

const SignatureOrderPreviewConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignatureOrderPreview);

export default SignatureOrderPreviewConnected;