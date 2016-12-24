/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	//namespace app.components {
	
	var Sconely = function (_React$Component) {
	    _inherits(Sconely, _React$Component);
	
	    function Sconely() {
	        _classCallCheck(this, Sconely);
	
	        return _possibleConstructorReturn(this, (Sconely.__proto__ || Object.getPrototypeOf(Sconely)).apply(this, arguments));
	    }
	
	    _createClass(Sconely, [{
	        key: "render",
	
	        /*constructor(props : HelloProps) {
	            super(props);
	            this.state =
	                menu: {},
	                cart: {},
	                page: "menu"
	             };
	             { editText: this.props.todo.title };
	        }
	        */
	        value: function render() {
	            return React.createElement("h1", null, "Sconely Yours-start with menu - then delivery address - then payment");
	            //return (
	            //	<div>
	            //<div className="detail">
	            // {this.props.children}
	            //</div>
	            //</div>)
	        }
	    }]);
	
	    return Sconely;
	}(React.Component);
	//}
	
	
	ReactDOM.render(React.createElement(Sconely, { compiler: "TypeScript", framework: "React" }), document.getElementById("example"));
	/*render((
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
	      <Route path="about" component={About}/>
	      <Route path="users" component={Users}>
	        <Route path="/user/:userId" component={User}/>
	      </Route>
	      <Route path="*" component={NoMatch}/>
	    </Route>
	  </Router>
	), document.getElementById('root'))*/

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map