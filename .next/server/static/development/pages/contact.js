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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./commons/theme.js":
/*!**************************!*\
  !*** ./commons/theme.js ***!
  \**************************/
/*! exports provided: variables, utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variables", function() { return variables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
var variables = {
  color: {
    brand: {
      main: '#5d73f5'
    },
    gray: {
      base: '#474747'
    }
  },
  font: {
    family: {
      main: 'Roboto',
      alt: 'Oswald'
    },
    size: {
      large: 18,
      base: 14,
      small: 12,
      h1: 60,
      h2: 45,
      h3: 30,
      h4: 26,
      h5: 20,
      h6: 18
    },
    weight: {
      light: 300,
      normal: 500,
      bold: 700
    }
  }
};
var utils = {
  px: function px(number) {
    return "".concat(number, "px");
  }
};

/***/ }),

/***/ "./components/layout/PageFooter.js":
/*!*****************************************!*\
  !*** ./components/layout/PageFooter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/matias/projects/nanlabs/repo/website-v3/components/layout/PageFooter.js";




var PageFooter = function PageFooter() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2893479971" + " " + 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "SERVICES"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Web Applications"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Mobile Applications"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Enterprise Solutions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Digital Transformation"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Research & Development"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Big Data")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "WORK"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "React Native app"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "NodeJS enterprise solution"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Microservices Solution"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Android app"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Ruby on Rails ecommerce")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "COMPANY"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Careers > We are hiring!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Quality Policy")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "BLOG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "News"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Back-end"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Front-end"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Mobile"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Devops"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Methodologies")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2893479971" + " " + 'footer-separator',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2893479971" + " " + 'copyright',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Small enough to care, big enough to get the job done."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "\xA9 2019 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-2893479971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "NaN"), "LABS. All Rights Reserved.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2893479971",
    __self: this
  }, "ul.jsx-2893479971{list-style-type:none;}li.jsx-2893479971{margin-bottom:10px;}li.jsx-2893479971:last-child{margin-bottom:0;}footer.jsx-2893479971{background-color:#474747;color:white;}footer.jsx-2893479971 .container.jsx-2893479971{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:30px;padding-bottom:30px;}.footer-separator.jsx-2893479971{display:block;height:5px;background:linear-gradient(to right,#00EFE6 0%,#5174E7 80%,#8035E8 100%);}.copyright.jsx-2893479971{background-color:white;text-align:center;padding:15px 0;}.copyright.jsx-2893479971 p.jsx-2893479971:first-child{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRpYXMvcHJvamVjdHMvbmFubGFicy9yZXBvL3dlYnNpdGUtdjMvY29tcG9uZW50cy9sYXlvdXQvUGFnZUZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q2dCLEFBSThCLEFBR0YsQUFHSCxBQUlTLEFBSVosQUFPQyxBQUtTLEFBS0osY0FUUixFQWZiLEdBSEEsQUE0QkEsRUEvQkEsRUEwQm9CLEVBaEJOLEFBWWdFLFlBWDlFLElBZ0JpQixlQUNqQixrQkFkZ0Msd0JBU2hDLDJGQVJtQixpQkFDRyxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL21hdGlhcy9wcm9qZWN0cy9uYW5sYWJzL3JlcG8vd2Vic2l0ZS12My9jb21wb25lbnRzL2xheW91dC9QYWdlRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBQYWdlRm9vdGVyID0gKCkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGZvb3Rlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlNFUlZJQ0VTPC9saT5cbiAgICAgICAgICA8bGk+V2ViIEFwcGxpY2F0aW9uczwvbGk+XG4gICAgICAgICAgPGxpPk1vYmlsZSBBcHBsaWNhdGlvbnM8L2xpPlxuICAgICAgICAgIDxsaT5FbnRlcnByaXNlIFNvbHV0aW9uczwvbGk+XG4gICAgICAgICAgPGxpPkRpZ2l0YWwgVHJhbnNmb3JtYXRpb248L2xpPlxuICAgICAgICAgIDxsaT5SZXNlYXJjaCAmIERldmVsb3BtZW50PC9saT5cbiAgICAgICAgICA8bGk+QmlnIERhdGE8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPldPUks8L2xpPlxuICAgICAgICAgIDxsaT5SZWFjdCBOYXRpdmUgYXBwPC9saT5cbiAgICAgICAgICA8bGk+Tm9kZUpTIGVudGVycHJpc2Ugc29sdXRpb248L2xpPlxuICAgICAgICAgIDxsaT5NaWNyb3NlcnZpY2VzIFNvbHV0aW9uPC9saT5cbiAgICAgICAgICA8bGk+QW5kcm9pZCBhcHA8L2xpPlxuICAgICAgICAgIDxsaT5SdWJ5IG9uIFJhaWxzIGVjb21tZXJjZTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+Q09NUEFOWTwvbGk+XG4gICAgICAgICAgPGxpPlRlYW08L2xpPlxuICAgICAgICAgIDxsaT5DYXJlZXJzID4gV2UgYXJlIGhpcmluZyE8L2xpPlxuICAgICAgICAgIDxsaT5RdWFsaXR5IFBvbGljeTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+QkxPRzwvbGk+XG4gICAgICAgICAgPGxpPk5ld3M8L2xpPlxuICAgICAgICAgIDxsaT5CYWNrLWVuZDwvbGk+XG4gICAgICAgICAgPGxpPkZyb250LWVuZDwvbGk+XG4gICAgICAgICAgPGxpPk1vYmlsZTwvbGk+XG4gICAgICAgICAgPGxpPkRldm9wczwvbGk+XG4gICAgICAgICAgPGxpPk1ldGhvZG9sb2dpZXM8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICAgPHNwYW4gY2xhc3NOYW1lPSdmb290ZXItc2VwYXJhdG9yJz48L3NwYW4+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb3B5cmlnaHQnPlxuICAgICAgPHA+U21hbGwgZW5vdWdoIHRvIGNhcmUsIGJpZyBlbm91Z2ggdG8gZ2V0IHRoZSBqb2IgZG9uZS48L3A+XG4gICAgICA8cD7CqSAyMDE5IDxzdHJvbmc+TmFOPC9zdHJvbmc+TEFCUy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC48L3A+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDc0NztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgZm9vdGVyIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgLmZvb3Rlci1zZXBhcmF0b3Ige1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwRUZFNiAwJSwgIzUxNzRFNyA4MCUsICM4MDM1RTggMTAwJSk7XG4gICAgICB9XG4gICAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgICAgfVxuICAgICAgLmNvcHlyaWdodCBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUZvb3RlciJdfQ== */\n/*@ sourceURL=/Users/matias/projects/nanlabs/repo/website-v3/components/layout/PageFooter.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PageFooter);

/***/ }),

/***/ "./components/layout/PageHeader.js":
/*!*****************************************!*\
  !*** ./components/layout/PageHeader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commons_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commons/theme */ "./commons/theme.js");
var _jsxFileName = "/Users/matias/projects/nanlabs/repo/website-v3/components/layout/PageHeader.js";





var PageHeader = function PageHeader() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["637420465", [_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["637420465", [_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main]]]) + " " + 'brand-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/logos/logo.svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["637420465", [_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main]]]) + " " + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/logos/brand.svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["637420465", [_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main]]]) + " " + 'brand',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["637420465", [_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["637420465", [_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["637420465", [_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Services")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["637420465", [_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Work")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["637420465", [_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Blog")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["637420465", [_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Team")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["637420465", [_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "637420465",
    dynamic: [_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, _commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main],
    __self: this
  }, "header.__jsx-style-dynamic-selector{padding:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.brand-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.logo.__jsx-style-dynamic-selector{width:50px;}.brand.__jsx-style-dynamic-selector{height:30px;margin-left:15px;}a.__jsx-style-dynamic-selector{font-family:".concat(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.family.alt, ";font-size:").concat(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["utils"].px(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].font.size.h3), ";text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;color:").concat(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.gray.base, ";margin-right:15px;}a.__jsx-style-dynamic-selector:hover{color:").concat(_commons_theme__WEBPACK_IMPORTED_MODULE_3__["variables"].color.brand.main, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRpYXMvcHJvamVjdHMvbmFubGFicy9yZXBvL3dlYnNpdGUtdjMvY29tcG9uZW50cy9sYXlvdXQvUGFnZUhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmdCLEFBR3NCLEFBTUEsQUFJRixBQUdDLEFBSTZCLEFBUU4sV0FkckMsQ0FHbUIsQ0FiSixnQkFjZixNQVdBLE1BUnlDLGlDQVhwQixNQVlNLE9BakJOLGtCQWtCRSxrREFDYyxZQWJyQyxhQUxnQyxVQW1CWixrQkFDcEIsdUZBbkJBIiwiZmlsZSI6Ii9Vc2Vycy9tYXRpYXMvcHJvamVjdHMvbmFubGFicy9yZXBvL3dlYnNpdGUtdjMvY29tcG9uZW50cy9sYXlvdXQvUGFnZUhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHZhcmlhYmxlcywgdXRpbHMgfSBmcm9tICcuLi8uLi9jb21tb25zL3RoZW1lJ1xuXG5jb25zdCBQYWdlSGVhZGVyID0gKCkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JyYW5kLWNvbnRhaW5lcic+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdsb2dvJyBzcmM9Jy9zdGF0aWMvbG9nb3MvbG9nby5zdmcnIC8+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdicmFuZCcgc3JjPScvc3RhdGljL2xvZ29zL2JyYW5kLnN2ZycgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgICA8bmF2PlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgPGE+U2VydmljZXM8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgPGE+V29yazwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICA8YT5CbG9nPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxhPlRlYW08L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPScvY29udGFjdCc+XG4gICAgICAgIDxhPkNvbnRhY3Q8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9uYXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgICAgLmJyYW5kLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgfVxuICAgICAgLmJyYW5kIHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LWZhbWlseTogJHt2YXJpYWJsZXMuZm9udC5mYW1pbHkuYWx0fTtcbiAgICAgICAgZm9udC1zaXplOiAke3V0aWxzLnB4KHZhcmlhYmxlcy5mb250LnNpemUuaDMpfTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogJHt2YXJpYWJsZXMuY29sb3IuZ3JheS5iYXNlfTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke3ZhcmlhYmxlcy5jb2xvci5icmFuZC5tYWlufTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyIl19 */\n/*@ sourceURL=/Users/matias/projects/nanlabs/repo/website-v3/components/layout/PageHeader.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (PageHeader);

/***/ }),

/***/ "./components/layout/PageLayout.js":
/*!*****************************************!*\
  !*** ./components/layout/PageLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageHeader */ "./components/layout/PageHeader.js");
/* harmony import */ var _PageFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageFooter */ "./components/layout/PageFooter.js");
/* harmony import */ var _commons_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commons/theme */ "./commons/theme.js");
var _jsxFileName = "/Users/matias/projects/nanlabs/repo/website-v3/components/layout/PageLayout.js";







var PageLayout = function PageLayout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/styles/font-faces.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3375431556", [_commons_theme__WEBPACK_IMPORTED_MODULE_5__["variables"].font.family.main, _commons_theme__WEBPACK_IMPORTED_MODULE_5__["variables"].font.weight.light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    href: "/static/logos/favicon.ico",
    sizes: "32x32",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3375431556", [_commons_theme__WEBPACK_IMPORTED_MODULE_5__["variables"].font.family.main, _commons_theme__WEBPACK_IMPORTED_MODULE_5__["variables"].font.weight.light]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3375431556",
    dynamic: [_commons_theme__WEBPACK_IMPORTED_MODULE_5__["variables"].font.family.main, _commons_theme__WEBPACK_IMPORTED_MODULE_5__["variables"].font.weight.light],
    __self: this
  }, "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body{font-family:".concat(_commons_theme__WEBPACK_IMPORTED_MODULE_5__["variables"].font.family.main, ";font-weight:").concat(_commons_theme__WEBPACK_IMPORTED_MODULE_5__["variables"].font.weight.light, ";}.container{width:1200px;margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRpYXMvcHJvamVjdHMvbmFubGFicy9yZXBvL3dlYnNpdGUtdjMvY29tcG9uZW50cy9sYXlvdXQvUGFnZUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXeUIsQUFpQm9CLEFBU0ssQUFHQSxBQUdFLEFBR0osQUFJRCxBQUljLEFBTUgsQUFHSCxBQUtzQixBQUk1QixTQTNDSCxFQXNCRyxDQUpmLENBMEJvQixDQW5DcEIsQUFHQSxFQUdBLEdBZFcsQUFrQ1gsR0FIQSxFQVRBLENBR21CLEdBeEJGLEdBMkNFLFVBTHdCLENBYjNDLENBeEJlLEtBMkNLLFFBMUNNLFVBMkNMLGNBMUNyQixFQW9DQSxHQU9BIiwiZmlsZSI6Ii9Vc2Vycy9tYXRpYXMvcHJvamVjdHMvbmFubGFicy9yZXBvL3dlYnNpdGUtdjMvY29tcG9uZW50cy9sYXlvdXQvUGFnZUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJy4vUGFnZUhlYWRlcidcbmltcG9ydCBQYWdlRm9vdGVyIGZyb20gJy4vUGFnZUZvb3RlcidcblxuaW1wb3J0IHsgdmFyaWFibGVzLCB1dGlscyB9IGZyb20gJy4uLy4uL2NvbW1vbnMvdGhlbWUnXG5cbmNvbnN0IFBhZ2VMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9Jy9zdGF0aWMvc3R5bGVzL2ZvbnQtZmFjZXMuY3NzJz48L2xpbms+XG4gICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9zdGF0aWMvbG9nb3MvZmF2aWNvbi5pY28nIHNpemVzPSczMngzMic+PC9saW5rPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuICAgICAgICAvKiBodHRwczovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gKi9cbiAgICAgICAgaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG4gICAgICAgIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbiAgICAgICAgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuICAgICAgICBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuICAgICAgICBiLCB1LCBpLCBjZW50ZXIsXG4gICAgICAgIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG4gICAgICAgIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxuICAgICAgICB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbiAgICAgICAgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuICAgICAgICBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxuICAgICAgICBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbiAgICAgICAgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICB9XG4gICAgICAgIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuICAgICAgICBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICB9XG4gICAgICAgIG9sLCB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBibG9ja3F1b3RlLCBxIHtcbiAgICAgICAgICBxdW90ZXM6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG4gICAgICAgIHE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaHR0cHM6Ly93d3cucGF1bGlyaXNoLmNvbS8yMDEyL2JveC1zaXppbmctYm9yZGVyLWJveC1mdHcvICovXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBDdXN0b20gc3R5bGVzICovXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3ZhcmlhYmxlcy5mb250LmZhbWlseS5tYWlufTtcbiAgICAgICAgICBmb250LXdlaWdodDogJHt2YXJpYWJsZXMuZm9udC53ZWlnaHQubGlnaHR9O1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvSGVhZD5cbiAgICA8UGFnZUhlYWRlciAvPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8UGFnZUZvb3RlciAvPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dCJdfQ== */\n/*@ sourceURL=/Users/matias/projects/nanlabs/repo/website-v3/components/layout/PageLayout.js */"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PageFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PageLayout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/PageLayout */ "./components/layout/PageLayout.js");
var _jsxFileName = "/Users/matias/projects/nanlabs/repo/website-v3/pages/contact.js";



function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_PageLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-647494632" + " " + 'container page-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Let's ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), "join ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), "forces"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Whatever your ambition, we\u2019d love to design and build your next big idea or lend a hand on an existing one.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-647494632" + " " + 'container page-content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-647494632" + " " + 'field-group',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-647494632" + " " + 'field',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "firstName",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "First Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: "firstName",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-647494632" + " " + 'field',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "lastName",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: "lastName",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-647494632" + " " + 'field-group',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-647494632" + " " + 'field',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "email",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: "email",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-647494632" + " " + 'field',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "companyName",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Company Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: "companyName",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "source",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "How did you hear about us?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: "source",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "source",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "I'd like to discuss"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Doing a project with NaNLABS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Possibility to join NaNLABS team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "I want to offer my services"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Other"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "description",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "What do you think we can accomplish together?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    id: "description",
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-647494632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Send"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "647494632",
    __self: this
  }, ".page-header.jsx-647494632{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:90px;margin-bottom:150px;}.page-content.jsx-647494632{margin-bottom:120px;}h1.jsx-647494632{font-size:100px;font-family:'Oswald';font-weight:700;text-transform:uppercase;text-align:left;-webkit-flex:1;-ms-flex:1;flex:1;}h3.jsx-647494632{font-family:'Oswald';font-weight:100;font-size:30px;padding-left:15px;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;-webkit-flex:1;-ms-flex:1;flex:1;}form.jsx-647494632{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}label.jsx-647494632{display:block;margin-bottom:5px;}input.jsx-647494632,select.jsx-647494632,textarea.jsx-647494632{width:100%;padding:10px;margin-bottom:30px;border:1px #ccc solid;border-radius:0;}textarea.jsx-647494632{height:150px;}.field-group.jsx-647494632{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.field-group.jsx-647494632 .field.jsx-647494632{width:100%;}.field-group.jsx-647494632 .field.jsx-647494632:first-child{margin-right:7.5px;}.field-group.jsx-647494632 .field.jsx-647494632:last-child{margin-left:7.5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRpYXMvcHJvamVjdHMvbmFubGFicy9yZXBvL3dlYnNpdGUtdjMvcGFnZXMvY29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCLEFBR3dCLEFBS08sQUFJSixBQVFLLEFBU1IsQUFLQyxBQU9ILEFBUUUsQUFJQSxBQUlGLEFBSVEsQUFHRCxXQXRCTCxBQWdCZixFQVJBLENBZm9CLEVBdEJHLEVBb0R2QixDQUhBLENBckRBLENBWWtCLEdBc0JHLFFBUHJCLEtBdEJrQixBQVFELE1Bc0JPLFNBckJKLENBUk8sWUE4QlQsS0FyQkksSUFwQkosQUEwQk0sQUF3QnhCLElBdENrQixHQThCbEIsU0F6Q3NCLElBWWIsZ0JBWFQsaUJBWUEsZUFPUyxVQU1ULHVCQUxBIiwiZmlsZSI6Ii9Vc2Vycy9tYXRpYXMvcHJvamVjdHMvbmFubGFicy9yZXBvL3dlYnNpdGUtdjMvcGFnZXMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvUGFnZUxheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcGFnZS1oZWFkZXInPlxuICAgICAgICA8aDE+TGV0J3MgPGJyIC8+am9pbiA8YnIgLz5mb3JjZXM8L2gxPlxuICAgICAgICA8aDM+V2hhdGV2ZXIgeW91ciBhbWJpdGlvbiwgd2XigJlkIGxvdmUgdG8gZGVzaWduIGFuZCBidWlsZCB5b3VyIG5leHQgYmlnIGlkZWEgb3IgbGVuZCBhIGhhbmQgb24gYW4gZXhpc3Rpbmcgb25lLjwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcGFnZS1jb250ZW50Jz5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkLWdyb3VwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdmaXJzdE5hbWUnPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2ZpcnN0TmFtZScgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2xhc3ROYW1lJz5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2xhc3ROYW1lJyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkLWdyb3VwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2VtYWlsJyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY29tcGFueU5hbWUnPkNvbXBhbnkgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nY29tcGFueU5hbWUnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3NvdXJjZSc+SG93IGRpZCB5b3UgaGVhciBhYm91dCB1cz88L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzb3VyY2UnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdzb3VyY2UnPkknZCBsaWtlIHRvIGRpc2N1c3M8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgPG9wdGlvbj5Eb2luZyBhIHByb2plY3Qgd2l0aCBOYU5MQUJTPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+UG9zc2liaWxpdHkgdG8gam9pbiBOYU5MQUJTIHRlYW08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj5JIHdhbnQgdG8gb2ZmZXIgbXkgc2VydmljZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj5PdGhlcjwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdkZXNjcmlwdGlvbic+V2hhdCBkbyB5b3UgdGhpbmsgd2UgY2FuIGFjY29tcGxpc2ggdG9nZXRoZXI/PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD0nZGVzY3JpcHRpb24nPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbj5TZW5kPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGFnZS1oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbiAgICAgICAgfVxuICAgICAgICAucGFnZS1jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCc7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQsIFxuICAgICAgICBzZWxlY3QsIFxuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4ICNjY2Mgc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpZWxkLWdyb3VwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpZWxkLWdyb3VwIC5maWVsZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZmllbGQtZ3JvdXAgLmZpZWxkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDcuNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5maWVsZC1ncm91cCAuZmllbGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDcuNXB4O1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59Il19 */\n/*@ sourceURL=/Users/matias/projects/nanlabs/repo/website-v3/pages/contact.js */"));
}

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/contact.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matias/projects/nanlabs/repo/website-v3/pages/contact.js */"./pages/contact.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=contact.js.map