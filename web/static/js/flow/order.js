'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const menu_tsx_1 = require("./menu.tsx");
const cart_tsx_1 = require("./cart.tsx");
//import DeliveryAddressPayment from './delivery_address_payment.tsx';
const react_router_1 = require("react-router");
//import * as getAllProducts from './actions/menu';
//import {addItemToCart, removeItemFromCart, addAddress} from './actions/cart';
//import { getPublicMenu } from './reducers/menu';
const Immutable = require("immutable");
const immutable_1 = require("immutable");
function addTodoWithDispatch() {
    const action = {
        type: "VIEW_PUBLIC_MENU",
    };
    //dispatch(action)
}
class Order extends React.Component {
    //props: Props;
    constructor(props) {
        super(props);
        //this.getData();
        //alert("sconely yours1" + this.props.params.order_id);
        this.state = {
            page: "menu",
            //menu_items: this.props.menu_items,
            //here: "",
            delivery_address: Immutable.Map(),
            delivery_address_street: "",
            item_count: 0,
            cart_items: Immutable.fromJS([{ item_id: 1, dozen: 2, quantity: 2, mini: true }, { item_id: 2, dozen: 1, quantity: 5 }]),
            //order: Immutable.fromJS([{item_id: 1, dozen: 2, quantity: 2, mini: true}, {item_id: 2, dozen: 1, quantity: 5}]),
            order: Immutable.fromJS({ name: "name", contact: "contact", cart: [], delivery_address: { street: "" }, payment: "" }),
        };
        //user_type=guest
        //order_type=yours load 
        //state==menu
        //yours_menu
        //just show cart if guest
        //or separate into order_menu and order_delivery_address_payment objects
        //or have everything work of a "pages" flag
        this.addCartItem = this.addCartItem.bind(this);
        this.increaseCartItemQuantity = this.increaseCartItemQuantity.bind(this);
        this.decreaseCartItemQuantity = this.decreaseCartItemQuantity.bind(this);
        this.removeCartItem = this.removeCartItem.bind(this);
        this.addDeliveryAddress = this.addDeliveryAddress.bind(this);
        this.setDeliveryAddressStreet = this.setDeliveryAddressStreet.bind(this);
        this.setDeliveryAddressCity = this.setDeliveryAddressCity.bind(this);
        this.setDeliveryAddressZipcode = this.setDeliveryAddressZipcode.bind(this);
        this.setCardNumber = this.setCardNumber.bind(this);
        this.setExpiryDate = this.setExpiryDate.bind(this);
        this.setSecurityCode = this.setSecurityCode.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.showCart = this.showCart.bind(this);
        this.showDeliveryAddressPayment = this.showDeliveryAddressPayment.bind(this);
        this.completeOrder = this.completeOrder.bind(this);
    }
    static get contextTypes() {
        return {
            router: React.PropTypes.object.isRequired,
        };
    }
    componentDidMount() {
        //alert();
        //window.onhashchange = function() {
        //blah blah blah
        //alert(this.state.page);
        //}.bind(this);
        //var result = map.find(function(obj){return obj.get('id') === 4;});
        //var result = [{'id': 'a'}, {'id': 'b'}];
        //var map = Immutable.Map(result.reduce(function(previous, current) { 
        //    previous[ current.id ] = current;
        //    return previous;
        //}, {}));
        let demoRecord = Immutable.List.of(Immutable.Record({
            property: 'defaultValue',
            index: 0,
            works: true,
            valueList: Immutable.List([])
        }));
        //alert(demoRecord.getIn(["0"], "index"));
        /*let list = demoRecord.update(
          demoRecord.findIndex(function(item: any) {
            return item.get("index") === "0";
          }), function(item: any) {
            return item.set("index", 4);
          }
        );*/
        var result = [{ 'id': 2 }, { 'id': 4 }];
        var map = Immutable.fromJS(result);
        var map_updated = map.set();
        var result1 = map.find(function (obj) { return obj.get('id') === 4; });
        //alert(result1.get("id"));
        /*let arr = fromJS(
          elem: [
            {id: 1, name: "first", count: 2},
            {id: 2, name: "second", count: 1},
            {id: 3, name: "third", count: 2},
            {id: 4, name: "fourth", count: 1}
          ]
        );
    
        arr = arr.setIn(['elem', 3, 'count'], 4);
        If we don’t know the index of the entry we want to update. It’s pretty easy to find it using .findIndex():
    
        
        const indexOfListToUpdate = arr.get('elem').findIndex(listItem => {
          return listItem.get('name') === 'third';
        });
        arr = arr.setIn(['elem', indexOfListingToUpdate, 'count'], 4);*/
        let cart_items_temp = this.state.cart_items;
        //let cart_items_temp_updated = cart_items_temp.updateIn(['items', 'quantity'], value = value + 1);
        //const myNewMap = cart_items_temp.updateIn(['cart_items'], (arr: any) => {arr.push({item_id: 5})});
        const myNewMap = cart_items_temp.push({ item_id: 5 });
        //let hello = cart_items_temp.push({item_id: 5});
        //alert(JSON.stringify(myNewMap));
        //alert(JSON.stringify(myNewMap.delete("0")));
        //hello.findIndex(function(item: any) { 
        //    return item.get("item_id") === "1"; 
        //})
        //var result = map.find(function(obj){return obj.get('id') === 4;});
        //hello = hello.find((layout: any) => {layout.get('item_id') === 1});
        /*let list = hello.update(
          hello.findIndex(function(item: any) {
            return item.get("item_id") === "1";
          }), function(item: any) {
            return item.set("quantity", 44444444444444);
          }
        );*/
        //let list = hello.update(0, function(v: any) {
        //    return {quantity: 44444444444};
        //});
        //alert(JSON.stringify(list.toJS()));
        //alert(cart_items_temp_updated);
        //get menu items
        //this.props;
        //alert(JSON.stringify(this.state.menu_items));
        //alert("products" + JSON.stringify(this.props.menu_items));
        //console.log(this.props.getAllProducts());
        //this.setState({here: this.props.getAllProducts()});
        //console.log(this.props.dispatch(addTodoWithDispatch));
        //this.props.getAllProducts();
    }
    showMenu() {
        //alert();
        this.setState({ page: "menu" });
    }
    showDeliveryAddressPayment() {
        //alert();
        this.setState({ page: "delivery_address_payment" });
    }
    showCart() {
        this.setState({ page: "cart" });
    }
    goToDateTime() {
        //this.context.router.push('/order/12345/datetime_contact_delivery_address_payment');
    }
    addCartItem(item_id, item_dozens, item_quantity, mini) {
        //alert(item_id + "" + item_dozens + "" + item_quantity);
        //add to localstorage
        //if order doesnt exist yet
        localStorage.setState("order", immutable_1.Map({ name: "name", contact: "contact", cart: immutable_1.List([]), delivery_address: { street: "" }, payment: "" }));
        //this.context.router.push('/order/12345');
        let order_temp = this.state.order;
        //item_id, quanity, mini
        let new_cart_items = [];
        //order_temp.set('key', .get('key').push
        let order_temp_updated = order_temp.updateIn(['cart'], (arr) => arr.push({ item_id: item_id, dozens: item_dozens, quantity: item_quantity, mini: mini }));
        //for(let i: any = 0; i <= item_quantity - 1; i++){
        //alert();
        //new_cart_items.push({item_id: 1, dozens: item_dozens, item_quantity: item_quantity, mini: mini});
        /*const myMap = Immutable.fromJS({
          nested: {
            someKey: ['hello', 'world'],
          },
        });
    
        //const myNewMap = myMap.updateIn(['nested', 'someKey'], arr => arr.push('bye'));*/
        //var newMap = myMap.set('key', myMap.get('key').push(newData))
        //let cart_items_temp = this.state.cart_items;
        //let cart_items_temp_updated = cart_items_temp.setIn(['items', 'quantity'], value = value + 1);
        //}
        //alert(JSON.stringify(new_cart_items));
        //let cart_items_temp_updated = cart_items_temp.concat(new_cart_items);
        //alert(JSON.stringify(cart_items_temp_updated));
        this.setState({ order: order_temp_updated });
    }
    //selectItemDozens(e: any){
    //    alert(e.target.value);
    //}
    addDeliveryAddress(street, city, state, zipcode) {
        //alert(street);
        //this.setState({delivery_address: {street: street, city: city, state: state, zipcode: zipcode}});
    }
    removeCartItem(index) {
        let cart_items_temp = this.state.cart_items;
        let cart_items_temp_updated = cart_items_temp.delete(index);
        this.setState({ cart_items: cart_items_temp_updated });
    }
    increaseCartItemQuantity(item_id, index) {
        //alert(JSON.stringify(item_id + "" + index));
        let cart_items_temp = this.state.cart_items;
        let cart_items_temp_updated = cart_items_temp.update(index, (item) => { let quantity_updated = item.get("quantity") + 1; return item.set("quantity", quantity_updated); });
        this.setState({ cart_items: cart_items_temp_updated });
    }
    decreaseCartItemQuantity(item_id, index) {
        let cart_items_temp = this.state.cart_items;
        let cart_items_temp_updated = cart_items_temp.update(index, (item) => { let quantity_updated = item.get("quantity") - 1; return item.set("quantity", quantity_updated); });
        this.setState({ cart_items: cart_items_temp_updated });
    }
    setFirstName(e) {
        //let order_temp = this.state.order;
        //.setIn([ 'user', 'profile', 'name' ], 'Jack')
        //order_temp_updated = order_temp.updateIn([ 'name', 'first_name', 'name' ], (s) => s = e.target.value)
        alert(e.target.value);
        //this.setState({order: order_temp_udated});
    }
    setLastName(e) {
        //let order_temp = this.state.order;
        //.setIn([ 'user', 'profile', 'name' ], 'Jack')
        //order_temp_updated = order_temp.updateIn([ 'name', 'first_name', 'name' ], (s) => s = e.target.value)
        alert(e.target.value);
        //this.setState({order: order_temp_udated});
    }
    setContactEmail(e) {
        //let order_temp = this.state.order;
        //.setIn([ 'user', 'profile', 'name' ], 'Jack')
        //order_temp_updated = order_temp.updateIn([ 'name', 'first_name', 'name' ], (s) => s = e.target.value)
        alert(e.target.value);
        //this.setState({order: order_temp_udated});
    }
    setContactMobile(e) {
        //let order_temp = this.state.order;
        //.setIn([ 'user', 'profile', 'name' ], 'Jack')
        //order_temp_updated = order_temp.updateIn([ 'name', 'first_name', 'name' ], (s) => s = e.target.value)
        alert(e.target.value);
        //this.setState({order: order_temp_udated});
    }
    setCompanyName(e) {
        //let order_temp = this.state.order;
        //.setIn([ 'user', 'profile', 'name' ], 'Jack')
        //order_temp_updated = order_temp.updateIn([ 'name', 'first_name', 'name' ], (s) => s = e.target.value)
        alert(e.target.value);
        //this.setState({order: order_temp_udated});
    }
    setDeliveryAddressStreet(e) {
        //alert(e.target.value);
        //this.state.order
        let delivery_address_temp = this.state.delivery_address;
        let delivery_address_temp_updated = delivery_address_temp.set("street", e.target.value);
        //alert(JSON.stringify(delivery_address_temp_updated.toJS()));
        this.setState({ delivery_address: delivery_address_temp_updated });
    }
    setDeliveryAddressState(e) {
        let delivery_address_temp = this.state.delivery_address;
        let delivery_address_temp_updated = delivery_address_temp.set("city", e.target.value);
        //alert(JSON.stringify(delivery_address_temp_updated.toJS()));
        this.setState({ delivery_address: delivery_address_temp_updated });
    }
    setDeliveryAddressCity(e) {
        let delivery_address_temp = this.state.delivery_address;
        let delivery_address_temp_updated = delivery_address_temp.set("city", e.target.value);
        //alert(JSON.stringify(delivery_address_temp_updated.toJS()));
        this.setState({ delivery_address: delivery_address_temp_updated });
    }
    setDeliveryAddressZipcode(e) {
        let delivery_address_temp = this.state.delivery_address;
        let delivery_address_temp_updated = delivery_address_temp.set("zipcode", e.target.value);
        //alert(JSON.stringify(delivery_address_temp_updated.toJS()));
        this.setState({ delivery_address: delivery_address_temp_updated });
    }
    setCardNumber(e) {
    }
    setExpiryDate(e) {
    }
    setSecurityCode(e) {
    }
    completeOrder() {
        //alert(JSON.stringify(this.state.delivery_address_street));
        //this.setState({delivery_address: {street: street, city: city, state: state, zipcode: zipcode}});
    }
    goToCart() {
        this.context.router.push('/order/12345/cart');
    }
    goToDateTimeContact() {
        this.context.router.push('/order/12345/datetime_contact');
    }
    render() {
        let body = "";
        let item_count = this.state.item_count;
        //alert(item_count);
        //if(this.state.page == "menu"){
        body = React.createElement(menu_tsx_1.default, { showDeliveryAddressPayment: () => this.showDeliveryAddressPayment(), addCartItem: (item_id, item_dozens, item_quantity, mini) => this.addCartItem(item_id, item_dozens, item_quantity, mini) });
        //}else if(this.state.page == "delivery_address_payment"){
        //alert();
        //body = <DeliveryAddressPayment order={this.state.order} setContactEmail={(contact_name: any) => this.setFirstName(name)} setFirstName={(first_name: any) => this.setFirstName(first_name)} addDeliveryAddress={(street: any, city: any, state: any, zipcode: any) => this.addDeliveryAddress(street, city, state, zipcode)} setDeliveryAddressStreet={(street: any) => this.setDeliveryAddressStreet(street)} setDeliveryAddressCity={(city: any) => this.setDeliveryAddressCity(city)} setDeliveryAddressZipcode={(zipcode: any) => this.setDeliveryAddressZipcode(zipcode)}/>;
        //}else{
        //body = <Cart order={this.state.order} cart_items={this.state.cart_items} showMenu={() => this.showMenu()} removeCartItem={(index: any) => this.removeCartItem(index)} showDeliveryAddressPayment={() => this.showDeliveryAddressPayment()} increaseCartItemQuantity={(item_id: any, index: any) => this.increaseCartItemQuantity(item_id, index)} decreaseCartItemQuantity={(item_id: any, index: any) => this.decreaseCartItemQuantity(item_id, index)}/>;//cart
        //}
        let button = "";
        if (this.state.page === "menu") {
            button = React.createElement("a", { onClick: () => this.showDeliveryAddressPayment() }, "Delivery Address and Payment");
        }
        else if (this.state.page === "cart") {
            button = React.createElement("div", null,
                React.createElement("a", { onClick: () => this.showDeliveryAddressPayment() }, "Delivery Address and Payment-submit payment"));
        }
        else if (this.state.page === "delivery_address_payment") {
            button = React.createElement("a", { onClick: () => this.completeOrder() }, "Complete Payment-only active if all elements are filled in");
        }
        return (React.createElement("div", null,
            React.createElement("nav", { className: "navbar navbar-default navbar-fixed-top" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement("div", { className: "navbar-header" },
                        React.createElement("button", { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar" },
                            React.createElement("span", { className: "sr-only" }, "Toggle navigation"),
                            React.createElement("span", { className: "icon-bar" }),
                            React.createElement("span", { className: "icon-bar" }),
                            React.createElement("span", { className: "icon-bar" })),
                        React.createElement("a", { className: "navbar-brand", href: "#" },
                            React.createElement("img", { height: "100", width: "250", src: "/images/logo/Sconely_color_web_300_space3.jpg" }))),
                    React.createElement("div", { className: "hidden-xs navbar-form navbar-right" }),
                    React.createElement("div", { id: "navbar", className: "navbar-collapse collapse navbar-right", style: { zIndex: 10010, background: "white" } },
                        React.createElement("ul", { className: "nav navbar-nav" },
                            React.createElement("li", { className: "inactive" },
                                React.createElement("a", { href: "./" },
                                    "Profile",
                                    React.createElement("span", { className: "sr-only" }, "(current)")))),
                        React.createElement("ul", { className: "nav navbar-nav" },
                            React.createElement("li", { className: "inactive" },
                                React.createElement(react_router_1.Link, { to: "/login" },
                                    "Login",
                                    React.createElement("span", { className: "sr-only" }, "(current)")))),
                        React.createElement("ul", { className: "nav navbar-nav" },
                            React.createElement("li", { className: "inactive" },
                                React.createElement(react_router_1.Link, { to: "/register" },
                                    "Signup",
                                    React.createElement("span", { className: "sr-only" }, "(current)")))),
                        React.createElement("ul", { className: "nav navbar-nav" },
                            React.createElement("li", { className: "inactive" },
                                React.createElement(react_router_1.Link, { to: "/public/menu" }, "Menu"),
                                React.createElement("span", { className: "sr-only" }, "(current)")))))),
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "hidden-xs col-md-2" },
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(cart_tsx_1.default, { order: this.state.order, cart_items: this.state.cart_items, showMenu: () => this.showMenu(), removeCartItem: (index) => this.removeCartItem(index), showDeliveryAddressPayment: () => this.showDeliveryAddressPayment(), increaseCartItemQuantity: (item_id, index) => this.increaseCartItemQuantity(item_id, index), decreaseCartItemQuantity: (item_id, index) => this.decreaseCartItemQuantity(item_id, index) }),
                        React.createElement("br", null),
                        React.createElement("br", null)),
                    React.createElement("div", { className: "col-md-10" },
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        "only show on mobile",
                        React.createElement("br", null),
                        React.createElement("button", { onClick: () => this.goToCart() },
                            "cart(",
                            this.state.order.toJS().cart.length,
                            ")"),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        body,
                        React.createElement("br", null),
                        React.createElement("br", null),
                        button,
                        React.createElement("br", null),
                        React.createElement("button", { onClick: () => this.goToDateTimeContact() }, "datetime")),
                    React.createElement("div", { className: "hidden-xs col-md-2" }, "maybe put something here")))));
    }
}
/*function mapStateToProps(state: any) {
  return {
   menu_items: state.default.menu_items
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
}*/
//export default connect(mapStateToProps, mapDispatchToProps)(Order);
exports.default = Order;
//# sourceMappingURL=order.js.map