webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CookWare = function CookWare() {
	return _react2.default.createElement(
		'section',
		{ className: 'affiliate-col' },
		_react2.default.createElement(
			'div',
			{ className: 'product-highlight' },
			_react2.default.createElement(
				'h4',
				{ className: 'label' },
				'Best Value'
			),
			_react2.default.createElement(
				'div',
				{ className: 'product-group' },
				_react2.default.createElement(
					'div',
					{ className: 'product-img' },
					_react2.default.createElement(
						'a',
						{ target: '_blank', href: 'https://www.amazon.com/gp/product/B008M5U1C2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008M5U1C2&linkCode=as2&tag=drianulinary-20&linkId=7bc955c92b7b552eaf182c2df29d4aff' },
						_react2.default.createElement('img', { src: 'https://s3.amazonaws.com/www.adrianculinary.com/img/affil-knife.jpg', className: 'product-img' })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'product-metadata' },
					_react2.default.createElement(
						'h3',
						{ className: 'product-title' },
						'Victorinox Fibrox Pro Chef\'s Knife, 8-Inch Chef\'s '
					),
					_react2.default.createElement(
						'p',
						null,
						' Whether this is your first proper chef\'s knife, or you experienced and want a knife that dosen\'t cost a fortune. Under $30 and it\'s actually the exact same steel as the much more expensive $100+ Wusthof knife.'
					),
					_react2.default.createElement(
						'a',
						{ target: '_blank', href: 'https://www.amazon.com/gp/product/B008M5U1C2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008M5U1C2&linkCode=as2&tag=drianulinary-20&linkId=7bc955c92b7b552eaf182c2df29d4aff' },
						_react2.default.createElement(
							'button',
							{ className: 'affil-button' },
							' Buy on Amazon '
						)
					)
				)
			)
		)
	);
};

exports.default = CookWare;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Display1 = function Display1() {
	return _react2.default.createElement(
		'div',
		{ className: 'tool-wrapper' },
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ to: 'svngcalc' },
			_react2.default.createElement(
				'div',
				{ className: 'img-container' },
				_react2.default.createElement('img', { src: './img/timemoney.jpeg' })
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'metadata-container' },
			_react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'a',
					{ href: '#', className: 'catg-link' },
					_react2.default.createElement(
						'span',
						null,
						_react2.default.createElement('i', { className: 'recipe-icon fa fa-wrench', 'aria-hidden': 'true' })
					),
					_react2.default.createElement(
						'span',
						{ className: 'recipe-category' },
						'Tools'
					)
				)
			),
			_react2.default.createElement(
				'h4',
				{ className: 'metadata-title' },
				' Calculate Saving\'s from Home Cooking '
			),
			_react2.default.createElement(
				'p',
				{ className: 'metadata-description' },
				' Coming Soon currently developing the API. You will be able to see how much money you save based on your state, caloric intake and what level of restaraunts you go too'
			)
		)
	);
};

exports.default = Display1;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(
			"div",
			{ className: "newsletter" },
			_react2.default.createElement(
				"div",
				{ className: "newsletter-row" },
				_react2.default.createElement(
					"div",
					{ className: "newsletter-tagline" },
					_react2.default.createElement(
						"h3",
						{ className: "newsletter-heading" },
						" Never have a boring meal again"
					),
					_react2.default.createElement(
						"p",
						{ className: "tagline" },
						" Get weekly recipes and our first course free"
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "around-form" },
					_react2.default.createElement(
						"form",
						{ method: "post", action: "/", className: "sign-up" },
						_react2.default.createElement(
							"div",
							{ className: "input-container" },
							_react2.default.createElement("input", { type: "email", name: "email", className: "newsletter-email", placeholder: "name@example.com" }),
							_react2.default.createElement(
								"button",
								{ type: "submit", className: "form-submit" },
								" Subscribe"
							)
						)
					),
					_react2.default.createElement(
						"p",
						{ "aria-hidden": "true" },
						"Thank you! We've sent you a confirmation email"
					)
				)
			)
		),
		_react2.default.createElement(
			"footer",
			null,
			_react2.default.createElement(
				"div",
				{ className: "footer-top" },
				_react2.default.createElement(
					"div",
					{ className: "footer-container" },
					_react2.default.createElement(
						"div",
						{ className: "footer-item" },
						_react2.default.createElement(
							"h2",
							{ className: "written-logo" },
							" Adrian Culinary "
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "footer-item" },
						_react2.default.createElement(
							"ul",
							{ className: "site-links" },
							_react2.default.createElement(
								"li",
								null,
								" Latest recipes"
							),
							_react2.default.createElement(
								"li",
								null,
								" About "
							),
							_react2.default.createElement(
								"li",
								null,
								" Cooking Resources "
							)
						)
					)
				)
			),
			_react2.default.createElement(
				"div",
				{ className: "footer-bottom" },
				_react2.default.createElement(
					"div",
					{ className: "scl-media" },
					_react2.default.createElement(
						"a",
						{ href: "https://www.instagram.com/adrianculinary", className: "sm-icon" },
						_react2.default.createElement("i", { className: "fab fa-instagram fa-2x" })
					),
					_react2.default.createElement(
						"a",
						{ href: "#", className: "sm-icon" },
						_react2.default.createElement("i", { className: "fab fa-facebook-f fa-2x" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "utility-container" },
					_react2.default.createElement(
						"ul",
						{ className: "utility-links" },
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement("a", { href: "#" }),
							" Terms of Use"
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement("a", { href: "#" }),
							" Privacy Policy"
						),
						_react2.default.createElement(
							"li",
							null,
							"\xA9 2018 AdrianCulinary"
						)
					)
				)
			)
		)
	);
};

exports.default = Footer;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

		_this.state = {
			headerClass: "mob-nav"
		};
		// this.handleClick = this.handleClick.bind();
		return _this;
	}

	_createClass(Header, [{
		key: 'handleClick',
		value: function handleClick(e) {
			e.preventDefault();
			this.toggleClass();
			// console.log("Test Pass");
		}
	}, {
		key: 'toggleClass',
		value: function toggleClass() {
			var element = document.getElementById('mob-nav');
			var elementCl = element.classList;
			var isMobNavActive = element.classList.contains('change');
			console.log(element);
			console.log(element.classList.contains('change')
			// isMobNavActive ? this.setState({"mob-nav"}) : this.setState({"mob-nav change"})
			);if (!isMobNavActive) {
				this.setState({
					headerClass: "mob-nav change"
				});
			} else if (isMobNavActive) {
				this.setState({
					headerClass: "mob-nav"
				});
			}

			// this.setState({
			// 	isMobNavActive ? element.classList.remove("change") : element.classList.add("change");
			// })
			// this.setState({
			// 	element.classList('change') ? element.classList.add("change") : element.classList.remove("change");
			// })
			// const oldClassName = document.getElementById('mob-nav').className;
			// const newClassName = oldClassName === 'red' ? 'blue' : 'red'
			// document.getElementById('test').className = newClassName
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'header' },
				_react2.default.createElement(
					'span',
					{ className: 'preview' },
					'This site is currently in preview it will be launched March 2018'
				),
				_react2.default.createElement(
					'div',
					{ className: 'logo-container' },
					_react2.default.createElement('img', { id: 'nav-logo', src: './img/logo.png' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'mob-logo-container' },
					_react2.default.createElement(
						'span',
						{ className: 'logo-left mob-nav' },
						_react2.default.createElement('i', { className: 'logo-icon fas fa-hamburger' }),
						_react2.default.createElement(
							'h2',
							{ className: 'logo-text' },
							'AdrianCulinary'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: this.state.headerClass, id: 'mob-nav',
							onClick: function onClick() {
								return _this2.handleClick(event);
							} },
						_react2.default.createElement('div', { className: 'bar1' }),
						_react2.default.createElement('div', { className: 'bar2' }),
						_react2.default.createElement('div', { className: 'bar3' })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'nav-primary' },
					_react2.default.createElement(
						'ul',
						{ className: 'menu' },
						_react2.default.createElement(
							_reactRouterDom.NavLink,
							{ className: 'nav-items', exact: true, to: '/' },
							' ',
							_react2.default.createElement(
								'li',
								null,
								' Home '
							),
							' '
						),
						_react2.default.createElement(
							_reactRouterDom.NavLink,
							{ className: 'nav-items', to: '/about' },
							' ',
							_react2.default.createElement(
								'li',
								null,
								' About '
							),
							' '
						),
						_react2.default.createElement(
							_reactRouterDom.NavLink,
							{ className: 'nav-items', to: '/CookWare' },
							' ',
							_react2.default.createElement(
								'li',
								null,
								'  Cooking Resources  '
							),
							' '
						)
					)
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// export default class Header extends React.Component {
// 		constructor(props) {
//         super(props);
//         this.addActiveClass= this.addActiveClass.bind(this);
//         this.state = {
//             active: false,
//         };
//     }
//     	toggleClass() {
//         const currentState = this.state.active;
//         this.setState({ active: !currentState });
// 	    };

// 	    handleClick() {
// 	    	this.setState()
// 	    }

// 		render () {		
// 			return (
// 				<div className="header">
// 					<span className="preview">This site is currently in preview it will be launched March 2018</span>
// 					<div className="logo-container">
// 						<img id="nav-logo" src="./img/logo.png" />
// 					</div>
// 					<div className="mob-logo-container">
// 						<span className="logo-left mob-nav">
// 							<i className="logo-icon fas fa-hamburger"></i>
// 							<h2 className="logo-text">AdrianCulinary</h2>
// 						</span>
// 						<div className="container mob-nav" onclick="myFunction(this)">
// 						  <div className="bar1">
// 							  <NavLink className="nav-items" exact to="/"> <li > Home </li> </NavLink>
// 						  </div>
// 						  <div className="bar2">
// 						  	<NavLink className="nav-items" to="/about"> <li > About </li> </NavLink>
// 						  </div>
// 						  <div className="bar3">
// 						  <NavLink className="nav-items" to="/CookWare"> <li >  Cooking Resources  </li> </NavLink></div>
// 						</div>
// 					</div>
// 					<div className="nav-primary">
// 						<ul className="menu">
// 							<NavLink className="nav-items hidden" exact to="/"> <li > Home </li> </NavLink>
// 							<NavLink className="nav-items hidden" to="/about"> <li > About </li> </NavLink>
// 							<NavLink className="nav-items hidden=" to="/CookWare"> <li >  Cooking Resources  </li> </NavLink>
// 						</ul>
// 					</div>
// 				</div>
// )}}


exports.default = Header;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _slideshow = __webpack_require__(107);

var _slideshow2 = _interopRequireDefault(_slideshow);

var _recipe = __webpack_require__(106);

var _recipe2 = _interopRequireDefault(_recipe);

var _dR = __webpack_require__(101);

var _dR2 = _interopRequireDefault(_dR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coming = function (_React$Component) {
	_inherits(Coming, _React$Component);

	function Coming(props) {
		_classCallCheck(this, Coming);

		return _possibleConstructorReturn(this, (Coming.__proto__ || Object.getPrototypeOf(Coming)).call(this, props));
	}

	_createClass(Coming, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'section' },
				_react2.default.createElement(
					'section',
					{ className: 'main-display' },
					_react2.default.createElement(_slideshow2.default, null),
					_react2.default.createElement(_dR2.default, null)
				),
				_react2.default.createElement(_recipe2.default, null)
			);
		}
	}]);

	return Coming;
}(_react2.default.Component);

exports.default = Coming;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recipe = function (_React$Component) {
	_inherits(Recipe, _React$Component);

	function Recipe() {
		_classCallCheck(this, Recipe);

		return _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).apply(this, arguments));
	}

	_createClass(Recipe, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "recipe-page" },
				_react2.default.createElement(
					"div",
					{ className: "recipe-highlight" },
					_react2.default.createElement(
						"div",
						{ className: "highlight-image" },
						_react2.default.createElement("img", { src: "" })
					),
					_react2.default.createElement("div", { className: "highlight-text" })
				),
				_react2.default.createElement(
					"div",
					{ className: "rcp-metadata" },
					_react2.default.createElement(
						"div",
						{ className: "recipie-title pencil" },
						"The Perfect Person"
					),
					_react2.default.createElement(
						"div",
						{ className: "rcp-meta-info" },
						_react2.default.createElement("i", { className: "fa fa-clock-o", "aria-hidden": "true" }),
						_react2.default.createElement(
							"span",
							null,
							"Prep Time: 4 hours"
						),
						_react2.default.createElement("i", { className: "fa fa-clock-o", "aria-hidden": "true" }),
						_react2.default.createElement(
							"span",
							null,
							"Prep Cook: 2 hours"
						),
						_react2.default.createElement("i", { className: "fa fa-user", "aria-hidden": "true" }),
						_react2.default.createElement(
							"span",
							null,
							"Feeds: 3 people"
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "recipe-ingredients pencil rcp-ctn ingr-background" },
					_react2.default.createElement(
						"ul",
						{ className: "recipe-list" },
						_react2.default.createElement(
							"li",
							null,
							"1/2 cup of love"
						),
						_react2.default.createElement(
							"li",
							null,
							"1 tsp happiness "
						),
						_react2.default.createElement(
							"li",
							null,
							"1 gallon of enthusiasm"
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "recipe-desc" },
					_react2.default.createElement(
						"p",
						null,
						" Lorem ipsum dolor amet brunch live-edge meggings disrupt. Palo santo migas distillery mustache. Selfies migas locavore disrupt venmo hammock. Migas polaroid brooklyn enamel pin biodiesel hexagon lo-fi post-ironic wayfarers sriracha raclette af cloud bread marfa."
					)
				),
				_react2.default.createElement("div", { className: "recipe-" })
			);
		}
	}]);

	return Recipe;
}(_react2.default.Component);

exports.default = Recipe;

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recipe = function (_React$Component) {
	_inherits(Recipe, _React$Component);

	function Recipe() {
		_classCallCheck(this, Recipe);

		return _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).apply(this, arguments));
	}

	_createClass(Recipe, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "block-wrapper" },
				_react2.default.createElement(
					"div",
					{ className: "recipe-wrapper" },
					_react2.default.createElement("a", { href: "#" }),
					_react2.default.createElement(
						"div",
						{ className: "img-container" },
						_react2.default.createElement("img", { src: "./img/IMG_0239.JPG" })
					),
					_react2.default.createElement(
						"div",
						{ className: "metadata-container" },
						_react2.default.createElement(
							"div",
							{ className: "tag-container" },
							_react2.default.createElement(
								"a",
								{ href: "#", className: "catg-link" },
								_react2.default.createElement(
									"span",
									null,
									_react2.default.createElement("i", { className: "recipe-icon fas fa-utensils" })
								),
								_react2.default.createElement(
									"span",
									{ className: "recipe-category" },
									"Recipe"
								)
							)
						),
						_react2.default.createElement(
							"h4",
							{ className: "metadata-title" },
							" The Best Sheperd's Pie "
						),
						_react2.default.createElement(
							"p",
							{ className: "metadata-description" },
							" Coming Soon "
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "recipe-wrapper" },
					_react2.default.createElement("a", { href: "#" }),
					_react2.default.createElement(
						"div",
						{ className: "img-container" },
						_react2.default.createElement("img", { src: "./img/DSC_0225.jpg" })
					),
					_react2.default.createElement(
						"div",
						{ className: "metadata-container" },
						_react2.default.createElement(
							"div",
							{ className: "tag-container" },
							_react2.default.createElement(
								"a",
								{ href: "#", className: "catg-link" },
								_react2.default.createElement(
									"span",
									null,
									_react2.default.createElement("i", { className: "recipe-icon fas fa-utensils" })
								),
								_react2.default.createElement(
									"span",
									{ className: "recipe-category" },
									"Recipe"
								)
							)
						),
						_react2.default.createElement(
							"h4",
							{ className: "metadata-title" },
							" Amazing Breakfast Sandwiches "
						),
						_react2.default.createElement(
							"p",
							{ className: "metadata-description" },
							" Coming Soon "
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "recipe-wrapper" },
					_react2.default.createElement("a", { href: "#" }),
					_react2.default.createElement(
						"div",
						{ className: "img-container" },
						_react2.default.createElement("img", { src: "./img/IMG_1666.JPG" })
					),
					_react2.default.createElement(
						"div",
						{ className: "metadata-container" },
						_react2.default.createElement(
							"div",
							{ className: "tag-container" },
							_react2.default.createElement(
								"a",
								{ href: "#", className: "catg-link" },
								_react2.default.createElement(
									"span",
									null,
									_react2.default.createElement("i", { className: "recipe-icon fas fa-utensils" })
								),
								_react2.default.createElement(
									"span",
									{ className: "recipe-category" },
									"Recipe"
								)
							)
						),
						_react2.default.createElement(
							"h4",
							{ className: "metadata-title" },
							" 5 Star Steak "
						),
						_react2.default.createElement(
							"p",
							{ className: "metadata-description" },
							" Coming Soon "
						)
					)
				)
			);
		}
	}]);

	return Recipe;
}(_react2.default.Component);

exports.default = Recipe;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slideshow = function (_React$Component) {
  _inherits(Slideshow, _React$Component);

  function Slideshow(props) {
    _classCallCheck(this, Slideshow);

    var _this = _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).call(this, props));

    _this.state = { slideIndex: 0 };
    _this.slides = [{
      image: './img/DSC_0312.jpg',
      caption: 'Meals Under $2',
      key: 1
    }, {
      image: './img/IMG_0239.JPG',
      caption: 'Sheperd\'s Pie',
      key: 2
    }, {
      image: './img/IMG_0828.JPG',
      caption: 'Mandarin Orange Chicken',
      key: 3
    }];
    return _this;
  }

  _createClass(Slideshow, [{
    key: 'plusSlides',
    value: function plusSlides(n) {
      this.setCurrentSlide(this.state.slideIndex + n);
    }
  }, {
    key: 'setCurrentSlide',
    value: function setCurrentSlide(slideIndex) {
      if (slideIndex >= this.slides.length) {
        slideIndex = 0;
      }
      if (slideIndex < 0) {
        slideIndex = this.slides.length - 1;
      }
      this.setState({ slideIndex: slideIndex });
    }
  }, {
    key: 'renderSlides',
    value: function renderSlides() {
      var _this2 = this;

      var visible = function visible(index) {
        return index == _this2.state.slideIndex ? 'block' : 'none';
      };

      return this.slides.map(function (slide, index) {
        return _react2.default.createElement(
          'div',
          { className: 'mySlides fade', style: { display: visible(index) } },
          _react2.default.createElement(
            'div',
            { className: 'numbertext' },
            index + 1,
            ' / ',
            _this2.slides.length
          ),
          _react2.default.createElement('img', { src: slide.image, style: { width: '100%' } }),
          _react2.default.createElement(
            'div',
            { className: 'text' },
            slide.caption
          )
        );
      });
    }
  }, {
    key: 'renderDots',
    value: function renderDots() {
      var _this3 = this;

      var active = function active(index) {
        return index == _this3.state.slideIndex ? 'active' : '';
      };

      return this.slides.map(function (slide, index) {
        return _react2.default.createElement('span', { className: 'dot ' + active(index),
          onClick: function onClick() {
            return _this3.setCurrentSlide(index);
          } });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'slideshow' },
        _react2.default.createElement(
          'div',
          { className: 'slideshow-container' },
          this.renderSlides(),
          _react2.default.createElement(
            'a',
            { className: 'prev',
              onClick: function onClick() {
                return _this4.plusSlides(-1);
              } },
            '\u276E'
          ),
          _react2.default.createElement(
            'a',
            { className: 'next',
              onClick: function onClick() {
                return _this4.plusSlides(1);
              } },
            '\u276F'
          )
        )
      );
    }
  }]);

  return Slideshow;
}(_react2.default.Component);

exports.default = Slideshow;

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SavingCalc = function (_React$Component) {
	_inherits(SavingCalc, _React$Component);

	function SavingCalc(props) {
		_classCallCheck(this, SavingCalc);

		var _this = _possibleConstructorReturn(this, (SavingCalc.__proto__ || Object.getPrototypeOf(SavingCalc)).call(this, props));

		_this.state = {
			age: '23',
			activity: '',
			height: '74',
			gender: '',
			weight: '170'
		};

		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(SavingCalc, [{
		key: 'calculateCalories',
		value: function calculateCalories(age, height, weight) {
			var ageCalories = age * 6.8;
			var heightCalories = height * 12.9;
			var weightCalories = weight * 6.3;

			var caloricIntake = weightCalories + heightCalories - ageCalories;
			return caloricIntake;
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			// this.calculateCalories(this.state.age,this.state.height,this.state.activity)
			alert(this.state.props.height);
			console.log('A name was submitted: ' + this.state.age);
			event.preventDefault();
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState(_defineProperty({}, evt.target.name, evt.target.value));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'calculator-container' },
				_react2.default.createElement(
					'form',
					{ onSubmit: this.handleSubmit },
					_react2.default.createElement(
						'div',
						{ className: 'caloric-input' },
						_react2.default.createElement(
							'label',
							null,
							'How tall are you ?'
						),
						_react2.default.createElement('input', { type: 'text', className: 'calc-input', value: this.state.height, onChange: this.handleChange }),
						_react2.default.createElement(
							'label',
							null,
							'How Old are you ?'
						),
						_react2.default.createElement('input', { type: 'text', className: 'calc-input', value: this.state.age, onChange: this.handleChange }),
						_react2.default.createElement(
							'label',
							null,
							'How Active are you ?'
						),
						_react2.default.createElement('input', { type: 'text', className: 'calc-input', value: this.state.age, onChange: this.handleChange }),
						_react2.default.createElement(
							'label',
							null,
							'How Much Do you Weigh'
						),
						_react2.default.createElement('input', { type: 'text', className: 'calc-input', value: this.state.activity, onChange: this.handleChange }),
						_react2.default.createElement(
							'label',
							null,
							'Gender'
						),
						_react2.default.createElement('input', { type: 'text', className: 'calc-input', value: this.state.gender, onChange: this.handleChange }),
						_react2.default.createElement('input', { type: 'submit', value: 'Submit', onsubmit: '' })
					)
				)
			);
		}
	}]);

	return SavingCalc;
}(_react2.default.Component);

exports.default = SavingCalc;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThankYou = function ThankYou() {
	return _react2.default.createElement('div', { className: 'thank-you' });
};

exports.default = ThankYou;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(97);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById('contents');

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), contentNode);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(29);

var _header = __webpack_require__(103);

var _header2 = _interopRequireDefault(_header);

var _home = __webpack_require__(104);

var _home2 = _interopRequireDefault(_home);

var _footer = __webpack_require__(102);

var _footer2 = _interopRequireDefault(_footer);

var _cookware = __webpack_require__(100);

var _cookware2 = _interopRequireDefault(_cookware);

var _thankyou = __webpack_require__(109);

var _thankyou2 = _interopRequireDefault(_thankyou);

var _about = __webpack_require__(99);

var _about2 = _interopRequireDefault(_about);

var _svngcalc = __webpack_require__(108);

var _svngcalc2 = _interopRequireDefault(_svngcalc);

var _rcpDisplay = __webpack_require__(105);

var _rcpDisplay2 = _interopRequireDefault(_rcpDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_React$Component) {
	_inherits(Content, _React$Component);

	function Content(props) {
		_classCallCheck(this, Content);

		return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));
	}

	_createClass(Content, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactRouterDom.BrowserRouter,
				null,
				_react2.default.createElement(
					'div',
					{ className: 'main' },
					_react2.default.createElement(_header2.default, null),
					_react2.default.createElement(
						_reactRouterDom.Switch,
						null,
						_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
						_react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _about2.default }),
						_react2.default.createElement(_reactRouterDom.Route, { path: '/cookWare', component: _cookware2.default }),
						_react2.default.createElement(_reactRouterDom.Route, { path: '/recipe', component: _rcpDisplay2.default }),
						_react2.default.createElement(_reactRouterDom.Route, { path: '/thankyou', component: _thankyou2.default }),
						_react2.default.createElement(_reactRouterDom.Route, { path: '/svngcalc', component: _svngcalc2.default })
					),
					_react2.default.createElement(_footer2.default, null)
				)
			);
		}
	}]);

	return Content;
}(_react2.default.Component);

exports.default = Content;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
	return _react2.default.createElement(
		'div',
		{ className: 'about' },
		_react2.default.createElement(
			'div',
			{ id: 'abt-desc' },
			_react2.default.createElement(
				'h2',
				{ className: 'lead-title lead-underline' },
				'Reasons to cook'
			),
			_react2.default.createElement(
				'div',
				{ id: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'desc-section' },
					_react2.default.createElement('i', { className: 'fa fa-money fa-3x about-icon' }),
					_react2.default.createElement(
						'h3',
						{ className: 'under-title' },
						' Savings'
					),
					_react2.default.createElement(
						'p',
						{ className: 'lead-desc' },
						'I want to use this website to empower people through cooking, and open people\'s eyes to the vast benefits it offers '
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'desc-section' },
					_react2.default.createElement('i', { className: 'fa fa-heartbeat fa-3x about-icon' }),
					_react2.default.createElement(
						'h3',
						{ className: 'under-title' },
						' Health'
					),
					_react2.default.createElement(
						'p',
						{ className: 'lead-desc' },
						' You will save anywhere from 50%-70% on food. For a savings of up to $3000 per year. '
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'desc-section' },
					_react2.default.createElement('i', { className: 'fa fa-th fa-3x about-icon' }),
					_react2.default.createElement(
						'h3',
						{ className: 'under-title' },
						' Variety and Excitmemt'
					),
					_react2.default.createElement(
						'p',
						{ className: 'lead-desc' },
						' Your food is infintely more customizable then when you go out to eat '
					),
					_react2.default.createElement(
						'p',
						{ className: 'lead-desc' },
						'  You\'ll become healthier. Resteraunts often use the cheaper ingredients(canola,soybean oil, malodextrin, MSG, sugar) to get the maximum profits. By cutting these out you can see the pounds drop, skin look healthier and more energy during the day.  '
					)
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'container-2' },
				_react2.default.createElement(
					'div',
					{ className: 'desc-section-2' },
					_react2.default.createElement('i', { className: 'fa fa-money fa-3x about-icon' }),
					_react2.default.createElement(
						'h2',
						{ className: 'under-title' },
						'The Mission'
					),
					_react2.default.createElement(
						'h3',
						{ className: 'under-title' },
						' Whimsical Origins'
					),
					_react2.default.createElement(
						'p',
						{ className: 'lead-desc' },
						'I want to use this website to empower people through cooking, and open people\'s eyes to the vast benefits it offers '
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'desc-section-2' },
					_react2.default.createElement('i', { className: 'fa fa-money fa-3x about-icon' }),
					_react2.default.createElement(
						'h2',
						{ className: 'under-title' },
						'The Mission'
					),
					_react2.default.createElement(
						'p',
						{ className: 'lead-desc' },
						'I want to use this website to empower people through cooking, and open people\'s eyes to the vast benefits it offers '
					)
				)
			)
		)
	);
};

exports.default = About;

/***/ })

},[110]);