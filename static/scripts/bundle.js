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
						_react2.default.createElement("i", { className: "fa fa-instagram fa-2x" })
					),
					_react2.default.createElement(
						"a",
						{ href: "#", className: "sm-icon" },
						_react2.default.createElement("i", { className: "fa fa-facebook fa-2x" })
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

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
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

var _slideshow = __webpack_require__(106);

var _slideshow2 = _interopRequireDefault(_slideshow);

var _recipe = __webpack_require__(105);

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
							"a",
							{ href: "#", className: "catg-link" },
							_react2.default.createElement(
								"span",
								null,
								_react2.default.createElement("i", { className: "recipe-icon fa fa-cutlery", "aria-hidden": "true" })
							),
							_react2.default.createElement(
								"span",
								{ className: "recipe-category" },
								"Recipe"
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
							null,
							_react2.default.createElement(
								"a",
								{ href: "#", className: "catg-link" },
								_react2.default.createElement(
									"span",
									null,
									_react2.default.createElement("i", { className: "recipe-icon fa fa-cutlery", "aria-hidden": "true" })
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
							"a",
							{ href: "#", className: "catg-link" },
							_react2.default.createElement(
								"span",
								null,
								_react2.default.createElement("i", { className: "recipe-icon fa fa-cutlery", "aria-hidden": "true" })
							),
							_react2.default.createElement(
								"span",
								{ className: "recipe-category" },
								"Recipe"
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

var SavingCalc = function (_React$Component) {
	_inherits(SavingCalc, _React$Component);

	function SavingCalc(props) {
		_classCallCheck(this, SavingCalc);

		return _possibleConstructorReturn(this, (SavingCalc.__proto__ || Object.getPrototypeOf(SavingCalc)).call(this, props));
	}

	_createClass(SavingCalc, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "calculator-container" },
				_react2.default.createElement(
					"div",
					{ className: "takeout-input" },
					_react2.default.createElement(
						"label",
						null,
						"Takeout Frequency (per week)"
					),
					_react2.default.createElement("input", { type: "text", className: "calc-input" })
				),
				_react2.default.createElement(
					"div",
					{ className: "caloric-input" },
					_react2.default.createElement(
						"label",
						null,
						"How tall are you ? (inches)"
					),
					_react2.default.createElement("input", { type: "text", className: "calc-input" })
				),
				_react2.default.createElement(
					"div",
					{ className: "ph" },
					_react2.default.createElement(
						"h1",
						null,
						" This is the placeholder for the savings calculator-container"
					),
					_react2.default.createElement(
						"h1",
						null,
						" This is the placeholder for the savings calculator-container"
					),
					_react2.default.createElement(
						"h1",
						null,
						" This is the placeholder for the savings calculator-container"
					)
				)
			);
		}
	}]);

	return SavingCalc;
}(_react2.default.Component);

exports.default = SavingCalc;

/***/ }),

/***/ 108:
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

/***/ 109:
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

var _thankyou = __webpack_require__(108);

var _thankyou2 = _interopRequireDefault(_thankyou);

var _about = __webpack_require__(99);

var _about2 = _interopRequireDefault(_about);

var _svngcalc = __webpack_require__(107);

var _svngcalc2 = _interopRequireDefault(_svngcalc);

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

},[109]);