module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! storyblok-react */ "storyblok-react");
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(storyblok_react__WEBPACK_IMPORTED_MODULE_8__);










var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      var content = this.props.content;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(storyblok_react__WEBPACK_IMPORTED_MODULE_8___default.a, {
        content: content
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-649922593" + " " + "button"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: content.link.cached_url,
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-649922593"
      }, content.name)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "649922593"
      }, ".button.jsx-649922593 button.jsx-649922593{background-color:#060364;height:36px;width:161px;color:#FFFFFF;border-radius:2px;font-size:14px;font-weight:600;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;line-height:18px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW4vaDEtd2Vic2l0cy1jbXMvY29tcG9uZW50cy9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJrQixBQUlrQyx5QkFDYixZQUNBLFlBQ0UsY0FDSSxrQkFDSCxlQUNDLGdCQUNLLHFHQUNKLGlCQUNDLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvbGluL2gxLXdlYnNpdHMtY21zL2NvbXBvbmVudHMvYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCBTYkVkaXRhYmxlIGZyb20gJ3N0b3J5Ymxvay1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbnJlbmRlcigpe1xuIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5wcm9wc1xuIHJldHVybihcbiAgPFNiRWRpdGFibGUgY29udGVudD17Y29udGVudH0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgXG4gICAgICAgICA8TGluayByb3V0ZT0ge2NvbnRlbnQubGluay5jYWNoZWRfdXJsfXByZWZldGNoPlxuICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICB7Y29udGVudC5uYW1lfVxuICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAuYnV0dG9uIGJ1dHRvbntcbiAgICAgICAgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjAzNjQ7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgd2lkdGg6IDE2MXB4O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgPC9TYkVkaXRhYmxlPlxuIClcblxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=/Users/lin/h1-websits-cms/components/button.js */")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./components/feature.js":
/*!*******************************!*\
  !*** ./components/feature.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index */ "./components/index.js");
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! storyblok-react */ "storyblok-react");
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(storyblok_react__WEBPACK_IMPORTED_MODULE_8__);










var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props));
    _this.state = {
      currentIcon: 0
    };
    return _this;
  } // resizedIcon(index) {
  //   const { content } = this.props
  //   if (typeof content.icons !== 'undefined') {
  //     return content.icon.replace('//a.storyblok.com', '//img2.storyblok.com/50x50')
  //   }
  //   return null
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "icon",
    value: function icon() {
      var _this2 = this;

      var icons = this.props.content.body.filter(function (icon, index) {
        return _this2.state.currentIcon === index;
      });

      if (icons.length) {
        return icons[0];
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.props.content;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(storyblok_react__WEBPACK_IMPORTED_MODULE_8___default.a, {
        content: content
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-487869324" + " " + "feature util__flex-eq"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-487869324"
      }, content.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-487869324" + " " + "feature__description"
      }, content.description), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "487869324"
      }, ".feature.jsx-487869324{text-align:center;padding:30px 10px 20px;}.feature__icon.jsx-487869324{max-width:800px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW4vaDEtd2Vic2l0cy1jbXMvY29tcG9uZW50cy9mZWF0dXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDc0IsQUFHaUMsQUFLRixnQkFDbEIsRUFMeUIsdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9saW4vaDEtd2Vic2l0cy1jbXMvY29tcG9uZW50cy9mZWF0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9pbmRleCdcbmltcG9ydCBTYkVkaXRhYmxlIGZyb20gJ3N0b3J5Ymxvay1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50SWNvbjogMFxuICAgIH1cbiAgfVxuICAvLyByZXNpemVkSWNvbihpbmRleCkge1xuICAvLyAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5wcm9wc1xuICAvLyAgIGlmICh0eXBlb2YgY29udGVudC5pY29ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gICAgIHJldHVybiBjb250ZW50Lmljb24ucmVwbGFjZSgnLy9hLnN0b3J5Ymxvay5jb20nLCAnLy9pbWcyLnN0b3J5Ymxvay5jb20vNTB4NTAnKVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gbnVsbFxuICAvLyB9XG5cbiAgaWNvbigpIHtcbiAgICBsZXQgaWNvbnMgPSB0aGlzLnByb3BzLmNvbnRlbnQuYm9keS5maWx0ZXIoKGljb24sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50SWNvbiA9PT0gaW5kZXhcbiAgICB9KVxuICAgIGlmIChpY29ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBpY29uc1swXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFNiRWRpdGFibGUgY29udGVudD17Y29udGVudH0+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUgdXRpbF9fZmxleC1lcVwiPlxuICAgICAgICAgIHsvKiB7dGhpcy5pY29uKCkgPyBDb21wb25lbnRzKHRoaXMuaWNvbigpKSA6ICcnfSAqL31cbiAgICAgICAgICA8aDI+e2NvbnRlbnQubmFtZX08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZV9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIHtjb250ZW50LmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8aW1nIHNyYz17dGhpcy5yZXNpemVkSWNvbigpfSBjbGFzc05hbWU9XCJmZWF0dXJlX19pY29uXCIgLz4gKi99XG4gICAgICAgICBcbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuZmVhdHVyZSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAxMHB4IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mZWF0dXJlX19pY29uIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgPC9TYkVkaXRhYmxlPlxuICAgIClcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/Users/lin/h1-websits-cms/components/feature.js */")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./components/grid.js":
/*!****************************!*\
  !*** ./components/grid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./components/index.js");
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! storyblok-react */ "storyblok-react");
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(storyblok_react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(storyblok_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    content: "props.content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "util__flex"
  }, props.content.columns.map(function (blok) {
    return Object(_index__WEBPACK_IMPORTED_MODULE_1__["default"])(blok);
  })));
});

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var Head = function Head(_ref) {
  var title = _ref.title,
      description = _ref.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title || ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: description || ''
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Zilla+Slab:400,700"
  }));
};

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/icon.js":
/*!****************************!*\
  !*** ./components/icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! storyblok-react */ "storyblok-react");
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(storyblok_react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(storyblok_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    content: content
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4162558788" + " " + "icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: content.image,
    className: "jsx-4162558788"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4162558788"
  }, ".icon.jsx-4162558788 img.jsx-4162558788{margin-right:20px;margin-left:20px;text-align:center;max-height:88px;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW4vaDEtd2Vic2l0cy1jbXMvY29tcG9uZW50cy9pY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9rQixBQUkyQixrQkFDRCxpQkFFQSxrQkFHRCxnQkFHbEIsc0JBQUMiLCJmaWxlIjoiL1VzZXJzL2xpbi9oMS13ZWJzaXRzLWNtcy9jb21wb25lbnRzL2ljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2JFZGl0YWJsZSBmcm9tICdzdG9yeWJsb2stcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNvbnRlbnQgfSkgPT4gKFxuICA8U2JFZGl0YWJsZSBjb250ZW50PXtjb250ZW50fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgIDxpbWcgc3JjPXtjb250ZW50LmltYWdlfSAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgIC5pY29uIGltZ3tcbiAgICAgICAgXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIFxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBtYXgtaGVpZ2h0OiA4OHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcblxuICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgPC9TYkVkaXRhYmxlPlxuKVxuXG4iXX0= */\n/*@ sourceURL=/Users/lin/h1-websits-cms/components/icon.js */")));
});

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _teaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teaser */ "./components/teaser.js");
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature */ "./components/feature.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "./components/page.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid */ "./components/grid.js");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slide */ "./components/slide.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon */ "./components/icon.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button */ "./components/button.js");









var Components = {
  'teaser': _teaser__WEBPACK_IMPORTED_MODULE_1__["default"],
  'feature': _feature__WEBPACK_IMPORTED_MODULE_2__["default"],
  'page': _page__WEBPACK_IMPORTED_MODULE_3__["default"],
  'grid': _grid__WEBPACK_IMPORTED_MODULE_4__["default"],
  'slide': _slide__WEBPACK_IMPORTED_MODULE_5__["default"],
  'nav': _nav__WEBPACK_IMPORTED_MODULE_6__["default"],
  'icon': _icon__WEBPACK_IMPORTED_MODULE_7__["default"],
  'button': _button__WEBPACK_IMPORTED_MODULE_8__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (function (blok) {
  if (typeof Components[blok.component] !== 'undefined') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components[blok.component], {
      key: blok._uid,
      content: blok
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "The component ", blok.component, " has not been created yet.");
  }, {
    key: blok._uid
  });
});

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _utils_storyblok_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/storyblok-service */ "./utils/storyblok-service.js");





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      _ref$settings = _ref.settings,
      settings = _ref$settings === void 0 ? {} : _ref$settings;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3281040391"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    settings: settings
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3281040391" + " " + "util__container"
  }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3281040391"
  }, "article,aside,footer,header,hgroup,main,nav,section{display:block;}body{font-family:'Montserrat',sans-serif;line-height:1;font-size:18px;color:#000;margin:0;padding:0;}.util__flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:25px;padding-bottom:25px;}.util__flex-col{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.util__flex-eq{-webkit-flex:1;-ms-flex:1;flex:1;}.util__container{max-width:100%;margin-left:auto;margin-right:auto;box-sizing:border-box;}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW4vaDEtd2Vic2l0cy1jbXMvY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3VCLEFBR3VCLEFBSXVCLEFBU3hCLEFBUUMsQUFJUCxBQUtRLEFBUUMsY0FyQ2xCLENBOEJtQixDQVFGLGVBQ0YsQ0FSSyxDQU5wQixHQXJCZ0IsUUFvQ1IsTUFuQ1MsQUE0Qk8sQUFRZixJQXBCVCxHQXFCYSxRQXBDQSxHQXFDQSxJQVRiLEVBckJ5QixFQU5kLEdBcUNYLE1BcENZLFVBQ1osOEVBS21CLGlCQUNHLG9CQUV0QiIsImZpbGUiOiIvVXNlcnMvbGluL2gxLXdlYnNpdHMtY21zL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdidcbmltcG9ydCBTdG9yeWJsb2tTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL3N0b3J5Ymxvay1zZXJ2aWNlJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgc2V0dGluZ3MgPSB7fSB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQgLz5cbiAgICA8TmF2IHNldHRpbmdzPXtzZXR0aW5nc30gLz5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInV0aWxfX2NvbnRhaW5lclwiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGFydGljbGUsIGFzaWRlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtYWluLCBuYXYsIHNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIC51dGlsX19mbGV4IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcblxuICAgICAgfVxuXG4gICAgICAudXRpbF9fZmxleC1jb2wge1xuICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIH1cblxuICAgICAgLnV0aWxfX2ZsZXgtZXEge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAudXRpbF9fY29udGFpbmVyIHtcbiAgICAgICAgXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyOWQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIHtTdG9yeWJsb2tTZXJ2aWNlLmJyaWRnZSgpfVxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=/Users/lin/h1-websits-cms/components/layout.js */"), _utils_storyblok_service__WEBPACK_IMPORTED_MODULE_4__["default"].bridge());
});

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! storyblok-react */ "storyblok-react");
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(storyblok_react__WEBPACK_IMPORTED_MODULE_8__);










var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      var settings = this.props.settings;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: "jsx-3914557076" + " " + "top-header util__flex util__container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("l1", {
        href: "/",
        className: "jsx-3914557076" + " " + " top-header__logo"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("l1", {
        className: "jsx-3914557076"
      }, settings.content.logo)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "jsx-3914557076" + " " + "top-header__col"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-3914557076" + " " + "top-header__nav"
      }, settings && settings.content.main_navi.map(function (navitem, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: index,
          className: "jsx-3914557076"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          route: navitem.link.cached_url,
          prefetch: true
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "jsx-3914557076" + " " + "top-header__link"
        }, navitem.name)));
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "jsx-3914557076" + " " + "top-header__col top-header__second-navi"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-3914557076" + " " + "top-header__nav top-header__nav--right"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3914557076"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "/en/blog"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-3914557076" + " " + "top-header__link"
      }, settings.content.sign_in))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3914557076"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "/en/blog"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-3914557076" + " " + "top-header__link"
      }, settings.content.demo_button))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3914557076"
      }, ".top-header.jsx-3914557076{background-color:#060464;padding-top:30px;padding-bottom:30px;}.top-header__col.jsx-3914557076{margin-right:200px;margin-left:40px;}.top-header__logo.jsx-3914557076{margin-left:160px;height:24px;width:30px;color:#FFFFFF;font-family:Montserrat;font-size:20px;font-weight:bold;line-height:24px;}.top-header.jsx-3914557076 button.jsx-3914557076{background-color:#FAB3A3;border-radius:2px;color:#333333;font-size:14px;font-weight:600;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;line-height:18px;text-align:center;}.top-header__second-navi.jsx-3914557076{text-align:right;margin-left:auto;}.top-header__nav.jsx-3914557076{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;margin:0;padding-left:0px;}.top-header__nav.jsx-3914557076 li.jsx-3914557076{padding:0 40px 0 0;}.top-header__nav--right.jsx-3914557076 li.jsx-3914557076{padding-right:0;padding-left:20px;}.top-header__link.jsx-3914557076{line-height:1.5;color:#FFFFFF;-webkit-text-decoration:none;text-decoration:none;border-bottom:2px solid transparent;-webkit-transition:border .15s ease;transition:border .15s ease;}.top-header__link.jsx-3914557076:hover{border-bottom:2px solid #000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW4vaDEtd2Vic2l0cy1jbXMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENvQixBQUdzQyxBQUtOLEFBSUQsQUFXTyxBQVlSLEFBTUosQUFRTSxBQUdILEFBS0EsQUFPYSxnQkFYWCxBQUtKLENBckJHLENBeEJMLENBSkssQUF5Q25CLE1BOUNtQixBQW9CQyxJQXlDcEIsQ0FuRGEsQUE2Q1UsSUFyQnZCLEFBZ0JBLEVBNUNBLEtBS2dCLENBVk0sQ0FvQk4sWUFUUyxFQVdSLEtBckJqQixVQXNCa0IsRUFjQSxJQXpCRCxFQTJDcUIsUUEvQmYsRUFjWixHQXpCUSxNQTBCQSxXQXpCQSxNQTJCbkIsQUFlOEIsV0F6QzlCLHFEQTBDQSxTQWhDbUIsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9saW4vaDEtd2Vic2l0cy1jbXMvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IFNiRWRpdGFibGUgZnJvbSAnc3RvcnlibG9rLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZXR0aW5ncyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICBcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidG9wLWhlYWRlciB1dGlsX19mbGV4IHV0aWxfX2NvbnRhaW5lclwiPlxuICAgICAgPGwxIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiIHRvcC1oZWFkZXJfX2xvZ29cIj5cbiAgICAgICAgICAgICAgPGwxPntzZXR0aW5ncy5jb250ZW50LmxvZ299PC9sMT5cbiAgICAgICAgICAgIDwvbDE+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwidG9wLWhlYWRlcl9fY29sXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvcC1oZWFkZXJfX25hdlwiPlxuICAgICAgICAgICBcbiAgICAgICAgICAgIHtzZXR0aW5ncyAmJiBzZXR0aW5ncy5jb250ZW50Lm1haW5fbmF2aS5tYXAoKG5hdml0ZW0sIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtuYXZpdGVtLmxpbmsuY2FjaGVkX3VybH0gcHJlZmV0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRvcC1oZWFkZXJfX2xpbmtcIj57bmF2aXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cblxuICAgICAgICBcblxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInRvcC1oZWFkZXJfX2NvbCB0b3AtaGVhZGVyX19zZWNvbmQtbmF2aVwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b3AtaGVhZGVyX19uYXYgdG9wLWhlYWRlcl9fbmF2LS1yaWdodFwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9lbi9ibG9nXCI+PGEgY2xhc3NOYW1lPVwidG9wLWhlYWRlcl9fbGlua1wiPntzZXR0aW5ncy5jb250ZW50LnNpZ25faW59PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2VuL2Jsb2dcIj48YnV0dG9uIGNsYXNzTmFtZT1cInRvcC1oZWFkZXJfX2xpbmtcIj57c2V0dGluZ3MuY29udGVudC5kZW1vX2J1dHRvbn08L2J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC50b3AtaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjA0NjQ7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9wLWhlYWRlcl9fY29se1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9wLWhlYWRlcl9fbG9nbyB7IFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvcC1oZWFkZXIgYnV0dG9ue1xuICAgICAgICBcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUIzQTM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvcC1oZWFkZXJfX3NlY29uZC1uYXZpIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvcC1oZWFkZXJfX25hdiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvcC1oZWFkZXJfX25hdiBsaSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweCAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b3AtaGVhZGVyX19uYXYtLXJpZ2h0IGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b3AtaGVhZGVyX19saW5rIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIC4xNXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvcC1oZWFkZXJfX2xpbms6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgXG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=/Users/lin/h1-websits-cms/components/nav.js */"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./components/page.js":
/*!****************************!*\
  !*** ./components/page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./components/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.content.body.map(function (blok) {
    return Object(_index__WEBPACK_IMPORTED_MODULE_1__["default"])(blok);
  }));
});

/***/ }),

/***/ "./components/slide.js":
/*!*****************************!*\
  !*** ./components/slide.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! storyblok-react */ "storyblok-react");
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(storyblok_react__WEBPACK_IMPORTED_MODULE_7__);









var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "resizedIcon",
    value: function resizedIcon(index) {
      var content = this.props.content;

      if (typeof content.image !== 'undefined') {
        return content.image.replace('//img2.storyblok.com/120x120', '//a.storyblok.com');
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.props.content;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(storyblok_react__WEBPACK_IMPORTED_MODULE_7___default.a, {
        content: content
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3791471347" + " " + "slide"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: content.image,
        className: "jsx-3791471347"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3791471347"
      }, ".slide.jsx-3791471347 img.jsx-3791471347{opacity:0.8;display:block;margin-left:auto;margin-right:auto;text-align:center;width:45%;max-height:700px;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW4vaDEtd2Vic2l0cy1jbXMvY29tcG9uZW50cy9zbGlkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmtCLEFBTXVCLFlBQ0UsY0FDRyxpQkFDQyxrQkFDRCxrQkFDUCxVQUVPLGlCQUlwQixzQkFBQyIsImZpbGUiOiIvVXNlcnMvbGluL2gxLXdlYnNpdHMtY21zL2NvbXBvbmVudHMvc2xpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2JFZGl0YWJsZSBmcm9tICdzdG9yeWJsb2stcmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVzaXplZEljb24oaW5kZXgpIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQuaW1hZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gY29udGVudC5pbWFnZS5yZXBsYWNlKCcvL2ltZzIuc3RvcnlibG9rLmNvbS8xMjB4MTIwJywgJy8vYS5zdG9yeWJsb2suY29tJylcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBcbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICA8U2JFZGl0YWJsZSBjb250ZW50PXtjb250ZW50fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlXCI+XG4gICAgICA8aW1nIHNyYz17Y29udGVudC5pbWFnZX0gLz5cbiAgICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNsaWRle1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zbGlkZSBpbWcge1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICBcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA3MDBweDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcbiAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICA8L1NiRWRpdGFibGU+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=/Users/lin/h1-websits-cms/components/slide.js */")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./components/teaser.js":
/*!******************************!*\
  !*** ./components/teaser.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index */ "./components/index.js");
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! storyblok-react */ "storyblok-react");
/* harmony import */ var storyblok_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(storyblok_react__WEBPACK_IMPORTED_MODULE_8__);










var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props));
    _this.state = {
      currentSlide: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "slide",
    value: function slide() {
      var _this2 = this;

      var slides = this.props.content.body.filter(function (slide, index) {
        return _this2.state.currentSlide === index;
      });

      if (slides.length) {
        return slides[0];
      }

      return null;
    } // pagClass(index) {
    //   return 'teaser__pag-dot ' + (index == this.state.currentSlide ? 'teaser__pag-dot--current' : '')
    // }
    // handleDotClick(index) {
    //   this.setState({
    //     currentSlide: index
    //   })
    // }

  }, {
    key: "render",
    value: function render() {
      var content = this.props.content;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(storyblok_react__WEBPACK_IMPORTED_MODULE_8___default.a, {
        content: content
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-228894503" + " " + "teaser"
      }, this.slide() ? Object(_index__WEBPACK_IMPORTED_MODULE_7__["default"])(this.slide()) : '', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-228894503"
      }, content.headline1, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-228894503"
      }, content.headline2)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "228894503"
      }, ".teaser.jsx-228894503{background-color:#060464;}.teaser.jsx-228894503 div.jsx-228894503{text-align:center;font-size:42px;line-height:52px;position:absolute;top:20%;color:#FFFFFF;left:0;width:100%;}.teaser.jsx-228894503 h2.jsx-228894503{font-size:26px;font-weight:600;text-align:center;position:absolute;color:#FFFFFF;left:0;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW4vaDEtd2Vic2l0cy1jbXMvY29tcG9uZW50cy90ZWFzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNzQixBQUd3QyxBQUdQLEFBV0gsZUFDQyxHQVhELE9BSGhCLE1BZW1CLEVBWEQsZ0JBWUMsQ0FYQSxpQkFZSixDQVhOLFFBQ00sS0FXUixPQUNLLEVBWEwsT0FFVCxFQVVDLFNBVkEiLCJmaWxlIjoiL1VzZXJzL2xpbi9oMS13ZWJzaXRzLWNtcy9jb21wb25lbnRzL3RlYXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgU2JFZGl0YWJsZSBmcm9tICdzdG9yeWJsb2stcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFNsaWRlOiAwXG4gICAgfVxuICB9XG5cbiAgc2xpZGUoKSB7XG4gICAgbGV0IHNsaWRlcyA9IHRoaXMucHJvcHMuY29udGVudC5ib2R5LmZpbHRlcigoc2xpZGUsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGUgPT09IGluZGV4XG4gICAgfSlcbiAgICBpZiAoc2xpZGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHNsaWRlc1swXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gcGFnQ2xhc3MoaW5kZXgpIHtcbiAgLy8gICByZXR1cm4gJ3RlYXNlcl9fcGFnLWRvdCAnICsgKGluZGV4ID09IHRoaXMuc3RhdGUuY3VycmVudFNsaWRlID8gJ3RlYXNlcl9fcGFnLWRvdC0tY3VycmVudCcgOiAnJylcbiAgLy8gfVxuXG4gIC8vIGhhbmRsZURvdENsaWNrKGluZGV4KSB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBjdXJyZW50U2xpZGU6IGluZGV4XG4gIC8vICAgfSlcbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFNiRWRpdGFibGUgY29udGVudD17Y29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhc2VyXCI+XG4gICAgICAgICAge3RoaXMuc2xpZGUoKSA/IENvbXBvbmVudHModGhpcy5zbGlkZSgpKSA6ICcnfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Y29udGVudC5oZWFkbGluZTF9XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIHtjb250ZW50LmhlYWRsaW5lMn1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAudGVhc2Vye1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNDY0O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAudGVhc2VyIGRpdntcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHRcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAudGVhc2VyIGgye1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHRcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NiRWRpdGFibGU+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=/Users/lin/h1-websits-cms/components/teaser.js */")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/index */ "./components/index.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/head */ "./components/head.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _utils_storyblok_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/storyblok-service */ "./utils/storyblok-service.js");

















var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          settings = _this$props.settings,
          blogPosts = _this$props.blogPosts;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
        settings: settings.data.story
      }, blogPosts.data.stories.map(function (blogPost, index) {
        var published_at = blogPost.published_at,
            _blogPost$content = blogPost.content,
            name = _blogPost$content.name,
            intro = _blogPost$content.intro;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: index,
          className: "jsx-3796864019" + " " + "blog__overview"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
          className: "jsx-3796864019"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_11__["Link"], {
          route: '/' + blogPost.full_slug
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          className: "jsx-3796864019" + " " + "blog__detail-link"
        }, name))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("small", {
          className: "jsx-3796864019"
        }, published_at), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3796864019"
        }, intro));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3796864019"
      }, ".blog__overview.jsx-3796864019{padding:0 20px;max-width:600px;margin:40px auto 60px;}.blog__overview.jsx-3796864019 p.jsx-3796864019{line-height:1.6;}.blog__detail-link.jsx-3796864019{color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW4vaDEtd2Vic2l0cy1jbXMvcGFnZXMvYmxvZy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRG9CLEFBRzRCLEFBTUMsQUFJTCxXQUNiLElBVmtCLENBTWxCLGVBTHdCLHNCQUN4QiIsImZpbGUiOiIvVXNlcnMvbGluL2gxLXdlYnNpdHMtY21zL3BhZ2VzL2Jsb2cvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbmRleCdcbmltcG9ydCBIZWFkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgU3RvcnlibG9rU2VydmljZSBmcm9tICcuLi8uLi91dGlscy9zdG9yeWJsb2stc2VydmljZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgIFN0b3J5Ymxva1NlcnZpY2Uuc2V0UXVlcnkocXVlcnkpXG5cbiAgICBsZXQgW2Jsb2dQb3N0cywgc2V0dGluZ3NdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgU3RvcnlibG9rU2VydmljZS5nZXQoJ2Nkbi9zdG9yaWVzJywge1xuICAgICAgICBzdGFydHNfd2l0aDogYCR7cXVlcnkubGFuZ3VhZ2V9L2Jsb2dgXG4gICAgICB9KSxcbiAgICAgIFN0b3J5Ymxva1NlcnZpY2UuZ2V0KGBjZG4vc3Rvcmllcy8ke3F1ZXJ5Lmxhbmd1YWdlfS9zZXR0aW5nc2ApXG4gICAgXSlcblxuICAgIHJldHVybiB7XG4gICAgICBibG9nUG9zdHMsXG4gICAgICBzZXR0aW5nc1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNldHRpbmdzLCBibG9nUG9zdHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCBzZXR0aW5ncz17c2V0dGluZ3MuZGF0YS5zdG9yeX0+XG4gICAgICAgIHtibG9nUG9zdHMuZGF0YS5zdG9yaWVzLm1hcCgoYmxvZ1Bvc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBwdWJsaXNoZWRfYXQsIGNvbnRlbnQ6IHsgbmFtZSwgaW50cm8gfX0gPSBibG9nUG9zdFxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJibG9nX19vdmVydmlld1wiPlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXsnLycgKyBibG9nUG9zdC5mdWxsX3NsdWd9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibG9nX19kZXRhaWwtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICB7cHVibGlzaGVkX2F0fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICB7aW50cm99XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYmxvZ19fb3ZlcnZpZXcge1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogNDBweCBhdXRvIDYwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsb2dfX292ZXJ2aWV3IHAge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmxvZ19fZGV0YWlsLWxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/lin/h1-websits-cms/pages/blog/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, _ref2, _ref3, blogPosts, settings;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _utils_storyblok_service__WEBPACK_IMPORTED_MODULE_15__["default"].setQuery(query);
                _context.next = 4;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([_utils_storyblok_service__WEBPACK_IMPORTED_MODULE_15__["default"].get('cdn/stories', {
                  starts_with: "".concat(query.language, "/blog")
                }), _utils_storyblok_service__WEBPACK_IMPORTED_MODULE_15__["default"].get("cdn/stories/".concat(query.language, "/settings"))]);

              case 4:
                _ref2 = _context.sent;
                _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 2);
                blogPosts = _ref3[0];
                settings = _ref3[1];
                return _context.abrupt("return", {
                  blogPosts: blogPosts,
                  settings: settings
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nextRoutes = __webpack_require__(/*! next-routes */ "next-routes");

var routes = module.exports = nextRoutes();
routes.add('blog', '/:language/blog');
routes.add('blog/detail', '/:language/blog/:slug');
routes.add('index', '/');

/***/ }),

/***/ "./utils/storyblok-service.js":
/*!************************************!*\
  !*** ./utils/storyblok-service.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var storyblok_js_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! storyblok-js-client */ "storyblok-js-client");
/* harmony import */ var storyblok_js_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(storyblok_js_client__WEBPACK_IMPORTED_MODULE_3__);





var StoryblokService =
/*#__PURE__*/
function () {
  function StoryblokService() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StoryblokService);

    this.devMode = true; // Always loads draft

    this.token = 'UZPSBPAFAsiOubxCwKZ0gQtt';
    this.client = new storyblok_js_client__WEBPACK_IMPORTED_MODULE_3___default.a({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    });
    this.query = {};
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StoryblokService, [{
    key: "getCacheVersion",
    value: function getCacheVersion() {
      return this.client.cacheVersion;
    }
  }, {
    key: "get",
    value: function get(slug, params) {
      params = params || {};

      if (this.getQuery('_storyblok') || this.devMode ||  false && false) {
        params.version = 'draft';
      }

      if (false) {}

      return this.client.get(slug, params);
    }
  }, {
    key: "initEditor",
    value: function initEditor(reactComponent) {
      if (window.storyblok) {
        window.storyblok.init();
        window.storyblok.on(['change', 'published'], function () {
          return location.reload(true);
        }); // this will alter the state and replaces the current story with a current raw story object (no resolved relations or links)

        window.storyblok.on('input', function (event) {
          if (event.story.content._uid === reactComponent.state.pageContent._uid) {
            reactComponent.setState({
              pageContent: window.storyblok.addComments(event.story.content, event.story.id)
            });
          }
        });
      }
    }
  }, {
    key: "setQuery",
    value: function setQuery(query) {
      this.query = query;
    }
  }, {
    key: "getQuery",
    value: function getQuery(param) {
      return this.query[param];
    }
  }, {
    key: "bridge",
    value: function bridge() {
      if (!this.getQuery('_storyblok') && !this.devMode) {
        return '';
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("script", {
        src: '//app.storyblok.com/f/storyblok-latest.js?t=' + this.token
      });
    }
  }]);

  return StoryblokService;
}();

var storyblokInstance = new StoryblokService();
/* harmony default export */ __webpack_exports__["default"] = (storyblokInstance);

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/blog/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lin/h1-websits-cms/pages/blog/index.js */"./pages/blog/index.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "storyblok-js-client":
/*!**************************************!*\
  !*** external "storyblok-js-client" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("storyblok-js-client");

/***/ }),

/***/ "storyblok-react":
/*!**********************************!*\
  !*** external "storyblok-react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("storyblok-react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=blog.js.map