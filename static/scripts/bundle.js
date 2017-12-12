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
		'div',
		{ className: 'affil-main' },
		_react2.default.createElement(
			'h1',
			null,
			' CookWare Page'
		),
		_react2.default.createElement(
			'div',
			{ className: 'product-container' },
			_react2.default.createElement(
				'div',
				{ className: 'product clearfix' },
				_react2.default.createElement(
					'div',
					{ className: 'product-image' },
					_react2.default.createElement(
						'a',
						{ target: '_blank', href: 'https://www.amazon.com/gp/product/B008M5U1C2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008M5U1C2&linkCode=as2&tag=drianulinary-20&linkId=7bc955c92b7b552eaf182c2df29d4aff' },
						_react2.default.createElement('img', { src: 'https://s3.amazonaws.com/www.adrianculinary.com/img/affil-knife.jpg' })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'product-snippet' },
					'Blog fixie DIY direct trade jean shorts. Woke yuccie pug tacos next level flexitarian bicycle rights ennui church-key bitters subway tile vegan asymmetrical. Selfies jean shorts wolf stumptown. Semiotics literally photo booth narwhal. Asymmetrical shabby chic try-hard farm-to-table edison bulb, migas austin. Polaroid raw denim kombucha, offal pinterest plaid hexagon butcher yuccie salvia lyft. Adaptogen gastropub vape kale chips'
				)
			),
			_react2.default.createElement('div', { className: 'product-description' })
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
	return _react2.default.createElement(
		'footer',
		null,
		_react2.default.createElement('hr', { className: 'footer-divider' }),
		_react2.default.createElement(
			'h4',
			{ className: 'developer-name' },
			' Designed and Developed by [ Adrian Layton ] '
		),
		_react2.default.createElement(
			'div',
			{ className: 'sm-instagram' },
			_react2.default.createElement('a', { href: 'https://www.instagram.com/adrianculinary' }),
			_react2.default.createElement('i', { className: 'fa fa-instagram' })
		)
	);
};

exports.default = Footer;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _nav = __webpack_require__(104);

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement('header', null),
		_react2.default.createElement(_nav2.default, null)
	);
};

exports.default = Header;

// <img className="site-branding" src="./img/logo.png" />

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

var _slideshow = __webpack_require__(105);

var _slideshow2 = _interopRequireDefault(_slideshow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coming = function (_React$Component) {
	_inherits(Coming, _React$Component);

	function Coming(props) {
		_classCallCheck(this, Coming);

		var _this = _possibleConstructorReturn(this, (Coming.__proto__ || Object.getPrototypeOf(Coming)).call(this, props));

		_this.state = {
			name: '',
			email: ''
		};

		return _this;
	}

	_createClass(Coming, [{
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState({ value: event.target.value });
			console.log(event);
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			document.forms.signup.reset();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_slideshow2.default, null),
				_react2.default.createElement(
					'section',
					{ className: 'main-sctn' },
					_react2.default.createElement(
						'h1',
						{ className: 'headline' },
						' Coming August 15th '
					),
					_react2.default.createElement(
						'p',
						{ className: 'lead-text' },
						' Sign Up for Email List '
					),
					_react2.default.createElement(
						'p',
						{ className: 'lead-text' },
						' You\'ll get 2 exclusive recipies before the public '
					),
					_react2.default.createElement(
						'form',
						{ className: 'sign-up', action: '/', method: 'POST', name: 'signup', onSubmit: this.handleSubmit },
						_react2.default.createElement('input', { type: 'text', name: 'name', placeholder: 'Name', value: this.state.name, onChange: this.handleChange }),
						_react2.default.createElement('input', { type: 'text', name: 'email', placeholder: 'Email', value: this.state.email, onChange: this.handleChange }),
						_react2.default.createElement(
							'button',
							{ className: 'button', value: 'Submit' },
							'Submit'
						)
					)
				)
			);
		}
	}]);

	return Coming;
}(_react2.default.Component);

exports.default = Coming;

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

var _reactRouterDom = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
	_inherits(Nav, _React$Component);

	function Nav() {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	}

	_createClass(Nav, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'nav',
					{ className: 'nav-primary' },
					_react2.default.createElement(
						'h3',
						{ className: 'site-branding' },
						' ',
						_react2.default.createElement(
							'bold',
							null,
							' Adrian Culinary '
						),
						' '
					),
					_react2.default.createElement(
						'ul',
						null,
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

	return Nav;
}(_react2.default.Component);

exports.default = Nav;

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

var Slideshow = function (_React$Component) {
  _inherits(Slideshow, _React$Component);

  function Slideshow(props) {
    _classCallCheck(this, Slideshow);

    var _this = _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).call(this, props));

    _this.state = { slideIndex: 0 };
    _this.slides = [{
      image: './img/DSC_0312.jpg',
      caption: 'Caption One',
      key: 1
    }, {
      image: './img/IMG_0239.JPG',
      caption: 'Caption Two',
      key: 2
    }, {
      image: './img/IMG_0828.JPG',
      caption: 'Caption Three',
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
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'navigation', style: { textAlign: 'center' } },
          this.renderDots()
        )
      );
    }
  }]);

  return Slideshow;
}(_react2.default.Component);

exports.default = Slideshow;

/***/ }),

/***/ 106:
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

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

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

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(39);

var _header = __webpack_require__(102);

var _header2 = _interopRequireDefault(_header);

var _home = __webpack_require__(103);

var _home2 = _interopRequireDefault(_home);

var _footer = __webpack_require__(101);

var _footer2 = _interopRequireDefault(_footer);

var _cookware = __webpack_require__(100);

var _cookware2 = _interopRequireDefault(_cookware);

var _thankyou = __webpack_require__(106);

var _thankyou2 = _interopRequireDefault(_thankyou);

var _about = __webpack_require__(99);

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Nav from './nav.jsx';

// import Slideshow from './slideshow.jsx';
// import Modal from './modal.jsx';


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
						_react2.default.createElement(_reactRouterDom.Route, { path: '/CookWare', component: _cookware2.default }),
						_react2.default.createElement(_reactRouterDom.Route, { path: '/thankyou', component: _thankyou2.default })
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
			{ className: 'about-cook' },
			_react2.default.createElement(
				'p',
				{ className: 'about-description' },
				' It all started with a whimsical story. Of my mother leaving me home alone at 11 and me making my first meal using google, and some chicken from the fridge. My mom wasn\'t to happen about the chicken when she came home, but I learned in over a decade in cooking is you don\'t have to be  a genius to cook a 5-star meal. This site is about luxury cooking for the everday person   '
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'about-site' },
			_react2.default.createElement(
				'p',
				{ className: 'about-description' },
				'I want to use this website to empower people through cooking, and open people\'s eyes to the vast benefits it offers',
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						'You will save anywhere from 50%-70% on food. For a savings of up to $3000 per year. '
					),
					_react2.default.createElement(
						'li',
						null,
						'Your food is infintely more customizable then when you go out to eat'
					),
					_react2.default.createElement(
						'li',
						null,
						' You\'ll become healthier. Resteraunts often use the cheaper ingredients(canola,soybean oil, malodextrin, MSG, sugar) to get the maximum profits. By cutting these out you can see the pounds drop, skin look healthier and more energy during the day. '
					),
					_react2.default.createElement(
						'li',
						null,
						' '
					)
				)
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'cook-media' },
			_react2.default.createElement('img', { className: 'knife-gif', src: 'https://s3.amazonaws.com/www.adrianculinary.com/img/knifeskills.gif' })
		)
	);
};

exports.default = About;

/***/ })

},[107]);