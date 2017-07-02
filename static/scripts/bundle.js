webpackJsonp([0],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

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
      caption: 'Caption One'
    }, {
      image: './img/IMG_0239.JPG',
      caption: 'Caption Two'
    }, {
      image: './img/IMG_0828.JPG',
      caption: 'Caption Three'
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

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _slideshow = __webpack_require__(51);

var _slideshow2 = _interopRequireDefault(_slideshow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coming = function (_React$Component) {
	_inherits(Coming, _React$Component);

	function Coming() {
		_classCallCheck(this, Coming);

		return _possibleConstructorReturn(this, (Coming.__proto__ || Object.getPrototypeOf(Coming)).apply(this, arguments));
	}

	_createClass(Coming, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ className: 'main-sctn' },
				_react2.default.createElement(
					'h1',
					{ className: 'headline' },
					' Coming June 22nd '
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
					{ className: 'sign-up', action: '/', method: 'POST' },
					_react2.default.createElement('input', { type: 'text', name: 'name', placeholder: 'Name' }),
					_react2.default.createElement('input', { type: 'text', name: 'email', placeholder: 'Email' }),
					_react2.default.createElement(
						'button',
						null,
						' Submit '
					)
				)
			);
		}
	}]);

	return Coming;
}(_react2.default.Component);

exports.default = Coming;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

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
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"footer",
				{ className: "footer-primary" },
				_react2.default.createElement(
					"div",
					{ className: "footer-items" },
					"PlaceHolder Icon"
				),
				_react2.default.createElement(
					"div",
					{ className: "footer-items" },
					_react2.default.createElement(
						"p",
						null,
						" ",
						_react2.default.createElement(
							"strong",
							null,
							" Follow my Instagram "
						),
						" "
					),
					_react2.default.createElement(
						"a",
						{ href: "https://www.instagram.com/adrianculinary/" },
						_react2.default.createElement("img", { src: "./img/instagram.png", className: "insta-logo" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "footer-items" },
					" PlaceHolder  "
				)
			);
		}
	}]);

	return Nav;
}(_react2.default.Component);

exports.default = Nav;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

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
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"header",
				null,
				_react2.default.createElement("img", { className: "site-branding", src: "./img/logo.png" })
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

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
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"nav",
				{ className: "nav-primary" },
				_react2.default.createElement(
					"ul",
					null,
					_react2.default.createElement(
						"a",
						{ href: "#" },
						" ",
						_react2.default.createElement(
							"li",
							{ className: "nav-items" },
							" About "
						),
						" "
					),
					_react2.default.createElement(
						"a",
						{ href: "#" },
						" ",
						_react2.default.createElement(
							"li",
							{ className: "nav-items" },
							" Recipies "
						),
						" "
					),
					_react2.default.createElement(
						"a",
						{ href: "#" },
						" ",
						_react2.default.createElement(
							"li",
							{ className: "nav-items" },
							" Food Photography "
						),
						" "
					),
					_react2.default.createElement(
						"a",
						{ href: "#" },
						" ",
						_react2.default.createElement(
							"li",
							{ className: "nav-items" },
							" Culinary Contraptions "
						),
						" "
					)
				)
			);
		}
	}]);

	return Nav;
}(_react2.default.Component);

exports.default = Nav;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = __webpack_require__(86);

var _header2 = _interopRequireDefault(_header);

var _nav = __webpack_require__(87);

var _nav2 = _interopRequireDefault(_nav);

var _coming = __webpack_require__(84);

var _coming2 = _interopRequireDefault(_coming);

var _slideshow = __webpack_require__(51);

var _slideshow2 = _interopRequireDefault(_slideshow);

var _footer = __webpack_require__(85);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_React$Component) {
	_inherits(Content, _React$Component);

	function Content() {
		_classCallCheck(this, Content);

		return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this));
	}

	_createClass(Content, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_header2.default, null),
				_react2.default.createElement(_nav2.default, null),
				_react2.default.createElement(_coming2.default, null),
				_react2.default.createElement(_slideshow2.default, null),
				_react2.default.createElement(_footer2.default, null)
			);
		}
	}]);

	return Content;
}(_react2.default.Component);

exports.default = Content;


var contentNode = document.getElementById('contents');

_reactDom2.default.render(_react2.default.createElement(Content, null), contentNode);

/***/ })

},[89]);