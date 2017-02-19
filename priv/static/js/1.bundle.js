webpackJsonp([1,0],{

/***/ 635:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(142);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(556);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Homepage = function (_React$Component) {
	  _inherits(Homepage, _React$Component);
	
	  //props: Props;
	
	  function Homepage(props) {
	    _classCallCheck(this, Homepage);
	
	    //this.getData();
	
	    //alert("sconely yours1" + this.props.params.order_id);
	
	    var _this = _possibleConstructorReturn(this, (Homepage.__proto__ || Object.getPrototypeOf(Homepage)).call(this, props));
	
	    _this.state = {};
	
	    return _this;
	  }
	
	  _createClass(Homepage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      //get active items from the database
	
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'hidden-xs col-md-4' },
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            'Home',
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/public/menu' },
	              'Menu'
	            ),
	            _react2.default.createElement('br', null),
	            'About Us',
	            _react2.default.createElement('br', null)
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6 col-md-6' },
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement('br', null),
	              'gallery',
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null)
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6 col-md-2' },
	            'maybe put something here'
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'contextTypes',
	    get: function get() {
	      return {
	        router: _react2.default.PropTypes.object.isRequired
	      };
	    }
	  }]);
	
	  return Homepage;
	}(_react2.default.Component);
	
	exports.default = Homepage;

/***/ },

/***/ 637:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(142);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(556);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import SconelySocialTopMenu from './sconely_social_top_menu'; 
	
	//import Dialog from "rc-dialog";
	
	var Menu = function (_React$Component) {
	  _inherits(Menu, _React$Component);
	
	  //props: Props;
	
	  function Menu(props) {
	    _classCallCheck(this, Menu);
	
	    //this.getData();
	
	    //alert("sconely yours1" + this.props.params.order_id);
	
	    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
	
	    _this.state = {
	      page: "items",
	      items: [{ item_id: 1 }, { item_id: 1 }, { item_id: 1 }]
	    };
	
	    _this.selectItem = _this.selectItem.bind(_this);
	
	    return _this;
	  }
	
	  _createClass(Menu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      //get active items from the database
	
	    }
	  }, {
	    key: 'loadCart',
	    value: function loadCart() {
	
	      this.setState({ page: "cart" });
	      //remove/change quantity
	    }
	  }, {
	    key: 'loadItems',
	    value: function loadItems() {
	
	      this.setState({ page: "items" });
	      //remove/change quantity
	    }
	
	    /*removeitem(item_id){
	       //find item and remove it via split maybe
	      //this.setState({cart: cart_temp});
	       var cart_temp = this.state.cart;
	      var cart_temp1 = "";
	      
	      //var cart_temp = cart_temp.filter(function(item) {
	      //    return item.name !== "John";
	      //});
	       //cart_temp.map(function(i, v){
	               //if v.item_id == item_id{
	                 //.splice(0,1);
	               //}
	            
	      //}
	      
	    }*/
	
	  }, {
	    key: 'mouseOver',
	    value: function mouseOver(e) {
	
	      e.target.src = "/images/menu/DWK_greenrollover3.jpg";
	    }
	  }, {
	    key: 'mouseOut',
	    value: function mouseOut(e) {
	
	      e.target.src = "/images/menu/DWK_greenrollover1.jpg";
	    }
	  }, {
	    key: 'selectItem',
	    value: function selectItem(e) {
	
	      $('#myModal').modal('show');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'hidden-xs col-md-2' },
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              'Home',
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/user/delivery_address' },
	                'Menu'
	              ),
	              _react2.default.createElement('br', null),
	              'About Us',
	              _react2.default.createElement('br', null)
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-md-8' },
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(
	                'div',
	                { className: 'container-fluid' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'row' },
	                  this.state.items.map(function (item) {
	                    var _this2 = this;
	
	                    return _react2.default.createElement(
	                      'div',
	                      { className: 'col-xs-12 col-md-2' },
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'thumbnail' },
	                        _react2.default.createElement('img', { id: '1', onMouseOver: function onMouseOver(e) {
	                            return _this2.mouseOver(e);
	                          }, onMouseOut: function onMouseOut(e) {
	                            return _this2.mouseOut(e);
	                          }, onClick: function onClick() {
	                            return _this2.selectItem(1);
	                          }, src: '/images/menu/DWK_greenrollover1.jpg', 'data-target': 'myModal', alt: '...' }),
	                        _react2.default.createElement(
	                          'div',
	                          { className: 'caption' },
	                          _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Strawberry Scone1'
	                          ),
	                          _react2.default.createElement(
	                            'p',
	                            null,
	                            'Cost'
	                          )
	                        )
	                      )
	                    );
	                  }.bind(this))
	                )
	              )
	            )
	          ),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'div',
	            { className: 'modal fade', id: 'myModal', role: 'dialog', 'aria-labelledby': 'myModalLabel' },
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-dialog', role: 'document' },
	              _react2.default.createElement(
	                'div',
	                { className: 'modal-content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'modal-header' },
	                  _react2.default.createElement(
	                    'button',
	                    { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
	                    _react2.default.createElement(
	                      'span',
	                      { 'aria-hidden': 'true' },
	                      '\xD7'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'h4',
	                    { className: 'modal-title', id: 'myModalLabel' },
	                    'Modal title'
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'modal-body' },
	                  '...',
	                  _react2.default.createElement('img', { src: '/images/strawberry_scones.png' })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'modal-footer' },
	                  _react2.default.createElement(
	                    'button',
	                    { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
	                    'Close'
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement('br', null)
	      );
	    }
	  }], [{
	    key: 'contextTypes',
	    get: function get() {
	      return {
	        router: _react2.default.PropTypes.object.isRequired
	      };
	    }
	  }]);
	
	  return Menu;
	}(_react2.default.Component);
	
	exports.default = Menu;

/***/ },

/***/ 639:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(142);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(556);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import SconelySocialTopMenu from './sconely_social_top_menu'; 
	
	//import Dialog from "rc-dialog";
	
	var Menu = function (_React$Component) {
	  _inherits(Menu, _React$Component);
	
	  //props: Props;
	
	  function Menu(props) {
	    _classCallCheck(this, Menu);
	
	    //this.getData();
	
	    //alert("sconely yours1" + this.props.params.order_id);
	
	    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
	
	    _this.state = {
	      page: "items",
	      items: [{ item_id: 1 }],
	      cart: _this.props.cart
	    };
	
	    _this.loadCart = _this.loadCart.bind(_this);
	
	    return _this;
	  }
	
	  _createClass(Menu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      //get active items from the database
	
	    }
	  }, {
	    key: 'loadCart',
	    value: function loadCart() {
	
	      this.setState({ page: "cart" });
	      //remove/change quantity
	    }
	  }, {
	    key: 'loadItems',
	    value: function loadItems() {
	
	      this.setState({ page: "items" });
	      //remove/change quantity
	    }
	
	    /*removeitem(item_id){
	       //find item and remove it via split maybe
	      //this.setState({cart: cart_temp});
	       var cart_temp = this.state.cart;
	      var cart_temp1 = "";
	      
	      //var cart_temp = cart_temp.filter(function(item) {
	      //    return item.name !== "John";
	      //});
	       //cart_temp.map(function(i, v){
	               //if v.item_id == item_id{
	                 //.splice(0,1);
	               //}
	            
	      //}
	      
	    }*/
	
	  }, {
	    key: 'mouseOver',
	    value: function mouseOver(e) {
	
	      e.target.src = "/images/menu/DWK_greenrollover3.jpg";
	    }
	  }, {
	    key: 'mouseOut',
	    value: function mouseOut(e) {
	
	      e.target.src = "/images/menu/DWK_greenrollover1.jpg";
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var that = this;
	      var page = "";
	
	      var value_12 = "";
	      var value_24 = "";
	      var mini_12 = "";
	
	      this.state.items.map(function (item) {
	
	        value_12 = item.item_id + "_" + 12;
	        value_24 = item.item_id + "_" + 24;
	        mini_12 = value_12 + "_mini";
	      });
	
	      if (this.state.page == "items") {
	
	        page = _react2.default.createElement(
	          'div',
	          null,
	          'cart(',
	          _react2.default.createElement(
	            'a',
	            { onClick: function onClick() {
	                return that.loadCart();
	              } },
	            this.props.total_items
	          ),
	          ')',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'div',
	            { className: 'container-fluid' },
	            _react2.default.createElement(
	              'div',
	              { className: 'row' },
	              _react2.default.createElement(
	                'div',
	                { className: 'col-xs-12 col-md-4' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'thumbnail' },
	                  _react2.default.createElement('img', { id: '1', onMouseOver: function onMouseOver(e) {
	                      return _this2.mouseOver(e);
	                    }, onMouseOut: function onMouseOut(e) {
	                      return _this2.mouseOut(e);
	                    }, onClick: function onClick() {
	                      return _this2.props.selectItem(1);
	                    }, src: '/images/menu/DWK_greenrollover1.jpg', 'data-target': 'myModal', alt: '...' }),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'caption', onClick: function onClick() {
	                        return _this2.props.selectItem;
	                      } },
	                    _react2.default.createElement(
	                      'h3',
	                      null,
	                      'Strawberry Scone1'
	                    ),
	                    _react2.default.createElement(
	                      'p',
	                      null,
	                      'Cost'
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-xs-12 col-md-4' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'thumbnail' },
	                  _react2.default.createElement('img', { src: '/images/strawberry_scones.png', alt: '...' }),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'caption' },
	                    _react2.default.createElement(
	                      'h3',
	                      null,
	                      'Strawberry Scone2'
	                    ),
	                    _react2.default.createElement(
	                      'p',
	                      null,
	                      'Cost'
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-xs-12 col-md-4' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'thumbnail' },
	                  _react2.default.createElement('img', { src: '/images/strawberry_scones.png', alt: '...' }),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'caption' },
	                    _react2.default.createElement(
	                      'h3',
	                      null,
	                      'Strawberry Scone2'
	                    ),
	                    _react2.default.createElement(
	                      'p',
	                      null,
	                      'Cost'
	                    )
	                  )
	                )
	              )
	            )
	          ),
	          this.state.items.map(function (item) {
	            var _this3 = this;
	
	            var value_12 = item.item_id + "_" + 12;
	            var value_24 = item.item_id + "_" + 24;
	
	            return _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'select',
	                { onChange: function onChange(e) {
	                    return _this3.props.addItemToCart(e.target.value);
	                  } },
	                _react2.default.createElement('option', { value: '' }),
	                _react2.default.createElement(
	                  'option',
	                  { value: value_12 },
	                  '12'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { value: value_24 },
	                  '24'
	                )
	              ),
	              _react2.default.createElement('br', null)
	            );
	          }.bind(this)),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'div',
	            { className: 'modal fade', id: 'myModal', role: 'dialog', 'aria-labelledby': 'myModalLabel' },
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-dialog', role: 'document' },
	              _react2.default.createElement(
	                'div',
	                { className: 'modal-content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'modal-header' },
	                  _react2.default.createElement(
	                    'button',
	                    { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
	                    _react2.default.createElement(
	                      'span',
	                      { 'aria-hidden': 'true' },
	                      '\xD7'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'h4',
	                    { className: 'modal-title', id: 'myModalLabel' },
	                    'Modal title'
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'modal-body' },
	                  '...',
	                  _react2.default.createElement('img', { src: '/images/strawberry_scones.png' })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'modal-footer' },
	                  _react2.default.createElement(
	                    'select',
	                    { onChange: function onChange(value) {
	                        return _this2.props.addItemToCart(value);
	                      } },
	                    _react2.default.createElement('option', { value: '' }),
	                    _react2.default.createElement(
	                      'option',
	                      { value: value_12 },
	                      '12'
	                    ),
	                    _react2.default.createElement(
	                      'option',
	                      { value: mini_12 },
	                      'Mini 12'
	                    ),
	                    _react2.default.createElement(
	                      'option',
	                      { value: value_24 },
	                      '24'
	                    )
	                  ),
	                  _react2.default.createElement('br', null),
	                  'X',
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement(
	                    'select',
	                    { onChange: this.props.selectQuantity },
	                    _react2.default.createElement(
	                      'option',
	                      { value: '' },
	                      '1'
	                    ),
	                    _react2.default.createElement(
	                      'option',
	                      { value: value_12 },
	                      '2'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'button',
	                    { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
	                    'Close'
	                  )
	                )
	              )
	            )
	          )
	        );
	      } else {
	
	        page = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'a',
	            { onClick: function onClick() {
	                return _this2.loadItems();
	              } },
	            'items'
	          ),
	          _react2.default.createElement('br', null),
	          this.props.cart.map(function (item) {
	
	            var item_id = item.item_id;
	
	            return _react2.default.createElement(
	              'div',
	              null,
	              'description',
	              item.item_id,
	              'xquantity-',
	              _react2.default.createElement(
	                'a',
	                { onClick: function onClick() {
	                    return that.props.removeItemFromCart(item_id);
	                  } },
	                'remove'
	              )
	            );
	          })
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        page,
	        _react2.default.createElement('br', null)
	      );
	    }
	  }], [{
	    key: 'contextTypes',
	    get: function get() {
	      return {
	        router: _react2.default.PropTypes.object.isRequired
	      };
	    }
	  }]);
	
	  return Menu;
	}(_react2.default.Component);
	
	exports.default = Menu;

/***/ }

});
//# sourceMappingURL=1.bundle.js.map