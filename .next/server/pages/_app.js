module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+pvy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_FAIL; });
/* unused harmony export USER_LOGOUT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REGISTER_FAIL; });
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';
const REGISTER_REQUEST = 'REGISTER_REQUEST';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./constants/authConstant.js
var authConstant = __webpack_require__("+pvy");

// CONCATENATED MODULE: ./redux/reducer/loginReducer.js

const INITIAL_STATE = {};
const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authConstant["b" /* LOGIN_REQUEST */]:
      return state;

    case authConstant["c" /* LOGIN_SUCCESS */]:
      return action.payload;

    case authConstant["a" /* LOGIN_FAIL */]:
      return {
        error: action.payload
      };

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./constants/owner.js
var owner = __webpack_require__("BZ9q");

// CONCATENATED MODULE: ./redux/reducer/ownerListOfCarsReducer.js

const ownerListOfCarsReducer_INITIAL_STATE = {};
const OwnerListOfCarsReducer = (state = ownerListOfCarsReducer_INITIAL_STATE, action) => {
  switch (action.type) {
    case owner["b" /* OWNER_LIST_OF_CARS_REQUEST */]:
      return state;

    case owner["c" /* OWNER_LIST_OF_CARS_SUCCESS */]:
      //localStorage.setItem('ownerListOfCars',JSON.stringify(action.payload))
      return action.payload;

    case owner["a" /* OWNER_LIST_OF_CARS_FAIL */]:
      return {
        error: action.payload
      };

    default:
      return state;
  }
};
// CONCATENATED MODULE: ./redux/reducer/index.js



const appReducers = Object(external_redux_["combineReducers"])({
  userInfo: LoginReducer,
  ownerListOfCarsReducer: OwnerListOfCarsReducer
});

const rootReducer = (state, action) => {
  if (action.type === "FLAG") {
    state.flag = action.payload;
  }

  return appReducers(state, action);
};

/* harmony default export */ var reducer = (rootReducer);
// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__("4DCN");

// CONCATENATED MODULE: ./redux/store/index.js




const initialState = {
  userInfo:  false ? undefined : {}
};
console.log('initialState', initialState);
const LoggerMiddleware = Object(external_redux_logger_["createLogger"])();
let conmposEnhancer;

if (false) {}

const store = Object(external_redux_["createStore"])(reducer, initialState, // conmposEnhancer(applyMiddleware(thunk, LoggerMiddleware))
Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, LoggerMiddleware));
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// EXTERNAL MODULE: ./styles/main.scss
var main = __webpack_require__("WMMs");

// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__("FctI");

// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(client_["Provider"], {
    session: pageProps.session,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_redux_["Provider"], {
      store: store,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
    })
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "BZ9q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OWNER_LIST_OF_CARS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OWNER_LIST_OF_CARS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OWNER_LIST_OF_CARS_FAIL; });
/* unused harmony export OWNER_RECOVER_OWNER_REQUEST */
/* unused harmony export OWNER_RECOVER_OWNER_SUCCESS */
/* unused harmony export OWNER_RECOVER_OWNER_FAIL */
const OWNER_LIST_OF_CARS_REQUEST = 'OWNER_LIST_OF_CARS_REQUEST';
const OWNER_LIST_OF_CARS_SUCCESS = 'OWNER_LIST_OF_CARS_SUCCESS';
const OWNER_LIST_OF_CARS_FAIL = 'OWNER_LIST_OF_CARS_FAIL';
const OWNER_RECOVER_OWNER_REQUEST = 'OWNER_RECOVER_OWNER_REQUEST';
const OWNER_RECOVER_OWNER_SUCCESS = 'OWNER_RECOVER_OWNER_SUCCESS';
const OWNER_RECOVER_OWNER_FAIL = 'OWNER_RECOVER_OWNER_FAIL';

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FctI":
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "WMMs":
/***/ (function(module, exports) {



/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });