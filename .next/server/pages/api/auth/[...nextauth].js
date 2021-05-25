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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/auth.js":
/*!*********************!*\
  !*** ./api/auth.js ***!
  \*********************/
/*! exports provided: registerService, loginService, getMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerService", function() { return registerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginService", function() { return loginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMe", function() { return getMe; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _constants_authConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/authConstant */ "./constants/authConstant.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





const registerService = (regObj, callback) => async dispatch => {
  dispatch({
    type: _constants_authConstant__WEBPACK_IMPORTED_MODULE_1__["REGISTER_REQUEST"]
  });

  try {
    const body = {
      username: regObj.username,
      password: regObj.password
    };
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].post(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/register`, false, null, body);
    dispatch({
      type: _constants_authConstant__WEBPACK_IMPORTED_MODULE_1__["REGISTER_SUCCESS"],
      payload: data
    });
    callback(data, null);
  } catch (error) {
    dispatch({
      type: _constants_authConstant__WEBPACK_IMPORTED_MODULE_1__["REGISTER_FAIL"],
      payload: error.response
    });
    callback(null, error.response);
  }
};
const loginService = async (service, token) => {
  //console.log("login service", service, token)
  try {
    console.log("token--------" + token);
    const body = {
      accessToken: token,
      client_secret: _config__WEBPACK_IMPORTED_MODULE_0__["config"].GAV_CLIENT_SECRET,
      client_id: _config__WEBPACK_IMPORTED_MODULE_0__["config"].GAV_CLIENT_ID,
      pessoa_cadastro_id: 2
    };
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].post(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/auth/social/${service}`, false, null, body);
    console.log(data);
    return data;
  } catch (error) {
    console.log("error = ---/api/auth");
    console.log(error.response.data.message);
  }
};
const getMe = async () => {
  try {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["getSession"])();

    if (session) {
      const token = session.access_token;
      const {
        data: me
      } = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json"
        }
      });
      return me;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

/***/ }),

/***/ "./api/cadastro/captasao/createPerson.js":
/*!***********************************************!*\
  !*** ./api/cadastro/captasao/createPerson.js ***!
  \***********************************************/
/*! exports provided: createPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPerson", function() { return createPerson; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ "./config/index.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/request */ "./utils/request.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/common */ "./utils/common.js");

 //import getItem from '../../../utils/localStroageAccess'


const createPerson = async (email, celular, nome, senha, pessoa_cadastro_id, pessoa_tipo_id, cb) => {
  try {
    const body = {
      celular: celular,
      email: email,
      pessoa_tipo_id: pessoa_tipo_id,
      pessoa_cadastro_id: pessoa_cadastro_id,
      pessoa_fisica: {
        nome: nome
      },
      pessoa_juridica: {
        nome: nome
      },
      user: {
        password: senha,
        email: email
      }
    };
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/captacao/pessoas`, false, "", body); //console.log("data", data)

    Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["notify"])('success', "Successfully Created");
    cb();
    return data;
  } catch (error) {
    cb();
    let err = "";

    if ("user.email" in error.response.data.errors) {
      err += error.response.data.errors["user.email"][0];
    }

    if ("user.password" in error.response.data.errors) {
      err += error.response.data.errors["user.password"][0];
    }

    Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["notify"])("error", err); // console.log(error.response.data.errors)

    return null;
  }
};

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const DEVELOPMENT = {
  nextAuthUrl: "https://gavnext.herokuapp.com",
  baseUrl: "https://teste-api.gavclub.com.br",
  grantType: "password",
  basicAuthToken: "YWRtaW5AZ2F2Y2x1Yi5jb20uYnI6RUc4QlpTUjVIOFZZN1ZD",
  GAV_CLIENT_SECRET: "Ydx95WYGrfQ35bby1am60lMGKnuqZsaLTs82R7f8",
  GAV_CLIENT_ID: 10,
  GOOGLE_CLIENT_ID: "1015036690558-07rme60ttao7cuadmc2mnh8luiuqh3lv.apps.googleusercontent.com",
  GOOGLE_CLIENT_SECRET: "xApEWP1AEtjZG-xHI6TNPupu",
  // GOOGLE_CLIENT_ID: '31651057818-h820onhd3h42kpgf5hih2kptc3m2mues.apps.googleusercontent.com',
  // GOOGLE_CLIENT_SECRET: 'VAnfQLrzpQvKFSSzMhfABbhX'
  FACEBOOK_CLIENT_ID: "268359331651972",
  FACEBOOK_CLIENT_SECRET: "5c24107ddfab20892c27c50224f8cd19"
};
const config = DEVELOPMENT;

/***/ }),

/***/ "./constants/authConstant.js":
/*!***********************************!*\
  !*** ./constants/authConstant.js ***!
  \***********************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGOUT", function() { return USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_REQUEST", function() { return REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAIL", function() { return REGISTER_FAIL; });
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';
const REGISTER_REQUEST = 'REGISTER_REQUEST';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./config/index.js");
/* harmony import */ var _utils_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/providers */ "./utils/providers.js");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/auth */ "./api/auth.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const options = {
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Google({
    clientId: _config__WEBPACK_IMPORTED_MODULE_2__["config"].GOOGLE_CLIENT_ID,
    clientSecret: _config__WEBPACK_IMPORTED_MODULE_2__["config"].GOOGLE_CLIENT_SECRET
  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Facebook({
    clientId: _config__WEBPACK_IMPORTED_MODULE_2__["config"].FACEBOOK_CLIENT_ID,
    clientSecret: _config__WEBPACK_IMPORTED_MODULE_2__["config"].FACEBOOK_CLIENT_SECRET
  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Credentials({
    name: "GAV",

    async authorize(credentials) {
      const tokens = await Object(_utils_providers__WEBPACK_IMPORTED_MODULE_3__["getToken"])(credentials);

      if (!tokens) {
        return null;
      }

      const me = await Object(_utils_providers__WEBPACK_IMPORTED_MODULE_3__["getMe"])(tokens.access_token); //console.log("me===>>", me)

      const user = _objectSpread(_objectSpread({}, tokens), {}, {
        name: me.nome,
        email: me.email,
        userId: me.id,
        photo: me.foto_perfil_arquivo ? me.foto_perfil_arquivo.link : ""
      });

      return user;
    }

  })],
  site: "https://gavnext.herokuapp.com",
  pages: {
    signIn: "/login",
    error: '/login'
  },
  session: {
    jwt: true
  },
  callbacks: {
    // async signIn(user, account, profile) {
    //     return true
    // },
    // async redirect(url, baseUrl) {
    //     // console.log('url', url);
    //     // console.log('baseUrl', baseUrl);
    //     return url
    // },
    async redirect(url, baseUrl) {
      return baseUrl;
    },

    async jwt(token, user, account, profile, isNewUser) {
      // console.log("token ===> ", token)
      // console.log("user ===> ", user)
      // console.log("account ===> ", account)
      // console.log("profile ===> ", profile)
      // console.log("isNewUser ===> ", isNewUser)
      if (user) {
        token = _objectSpread(_objectSpread(_objectSpread({}, token), user), account && account);
      }

      return token;
    },

    async session(session, token) {
      if (token && token.type === 'oauth') {
        const data = await Object(_api_auth__WEBPACK_IMPORTED_MODULE_4__["loginService"])(token.provider, token.accessToken); //console.log("data = ", data)

        const me = await Object(_utils_providers__WEBPACK_IMPORTED_MODULE_3__["getMe"])(data.access_token); //console.log("me===>>", me)

        session = _objectSpread(_objectSpread({}, data), {}, {
          name: me.nome,
          email: me.email,
          userId: me.id,
          photo: me.foto_perfil_arquivo ? me.foto_perfil_arquivo.link : token.image ? token.image : ""
        });
      } else {
        session = _objectSpread(_objectSpread({}, session), token);
      }

      console.log("token ==", token);
      console.log("session == ", session);
      return session;
    }

  }
};
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));

/***/ }),

/***/ "./utils/common.js":
/*!*************************!*\
  !*** ./utils/common.js ***!
  \*************************/
/*! exports provided: notify, useInput, ratingDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratingDate", function() { return ratingDate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);


 // convert object to FormData

const notify = (type, message) => {
  if (type === 'success') {
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success(message, {
      style: {
        fontSize: 16
      }
    });
  } else if (type === 'error') {
    // if (!message) message = 'Something Went Wrong. Try Again!'
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(message, {
      style: {
        fontSize: 16
      }
    });
  } else if (type === 'warning') {
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].warning(message);
  } else {
    Object(react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"])(message);
  }
}; // custom helper to take input field

const useInput = (initialValue = '') => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);

  const handleChange = e => setValue(e.target.value);

  return [value, handleChange, setValue];
};
const ratingDate = date => {
  return moment__WEBPACK_IMPORTED_MODULE_2___default.a.utc(date).local().format('DD/MMM/YYYY');
};

/***/ }),

/***/ "./utils/providers.js":
/*!****************************!*\
  !*** ./utils/providers.js ***!
  \****************************/
/*! exports provided: gavProvider, getToken, getMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gavProvider", function() { return gavProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMe", function() { return getMe; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _api_cadastro_captasao_createPerson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/cadastro/captasao/createPerson */ "./api/cadastro/captasao/createPerson.js");



const domain = _config__WEBPACK_IMPORTED_MODULE_1__["config"].baseUrl;
const gavProvider = {
  clientId: _config__WEBPACK_IMPORTED_MODULE_1__["config"].GAV_CLIENT_ID,
  clientSecret: _config__WEBPACK_IMPORTED_MODULE_1__["config"].GAV_CLIENT_SECRET,
  grant_type: _config__WEBPACK_IMPORTED_MODULE_1__["config"].grantType
};
const getToken = async credentials => {
  credentials.scope = '';
  credentials.grant_type = gavProvider.grant_type;
  credentials.client_id = gavProvider.clientId;
  credentials.client_secret = gavProvider.clientSecret; //console.log("creadiantials  = ", credentials)

  try {
    const {
      data: tokens
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${domain}/oauth/token`, credentials); // console.log(tokens)

    return tokens;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getMe = async access_token => {
  try {
    const {
      data: me
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${domain}/api/me`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: 'application/json'
      }
    });
    return me;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/***/ }),

/***/ "./utils/request.js":
/*!**************************!*\
  !*** ./utils/request.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let defaultOptions;

const client = (token = null) => {
  return {
    get: (url, tokenNeed, token, options = {}) => {
      defaultOptions = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': 'en'
        }
      };

      if (tokenNeed) {
        Object.assign(defaultOptions.headers, {
          Authorization: token
        });
      }

      console.log('defaultOptions', defaultOptions);
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, _objectSpread(_objectSpread({}, defaultOptions), options));
    },
    post: (url, tokenNeed, token, data, options = {}) => {
      defaultOptions = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': 'en'
        }
      };

      if (tokenNeed) {
        Object.assign(defaultOptions.headers, {
          Authorization: token
        });
      }

      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data, _objectSpread(_objectSpread({}, defaultOptions), options));
    },
    put: (url, tokenNeed, token, data, options = {}) => {
      defaultOptions = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': 'en'
        }
      };

      if (tokenNeed) {
        Object.assign(defaultOptions.headers, {
          Authorization: token
        });
      }

      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(url, data, _objectSpread(_objectSpread({}, defaultOptions), options));
    },
    patch: (url, tokenNeed, token, data, options = {}) => {
      defaultOptions = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': 'en'
        }
      };

      if (tokenNeed) {
        Object.assign(defaultOptions.headers, {
          Authorization: token
        });
      }

      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(url, data, _objectSpread(_objectSpread({}, defaultOptions), options));
    },
    delete: (url, tokenNeed, token, options = {}) => {
      defaultOptions = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': 'en'
        }
      };

      if (tokenNeed) {
        Object.assign(defaultOptions.headers, {
          Authorization: token
        });
      }

      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(url, _objectSpread(_objectSpread({}, defaultOptions), options));
    }
  };
};

const httpRequest = client(null);
/* harmony default export */ __webpack_exports__["default"] = (httpRequest);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/providers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXBpL2NhZGFzdHJvL2NhcHRhc2FvL2NyZWF0ZVBlcnNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2F1dGhDb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wcm92aWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIl0sIm5hbWVzIjpbInJlZ2lzdGVyU2VydmljZSIsInJlZ09iaiIsImNhbGxiYWNrIiwiZGlzcGF0Y2giLCJ0eXBlIiwiUkVHSVNURVJfUkVRVUVTVCIsImJvZHkiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGF0YSIsImh0dHBSZXF1ZXN0IiwicG9zdCIsImNvbmZpZyIsImJhc2VVcmwiLCJSRUdJU1RFUl9TVUNDRVNTIiwicGF5bG9hZCIsImVycm9yIiwiUkVHSVNURVJfRkFJTCIsInJlc3BvbnNlIiwibG9naW5TZXJ2aWNlIiwic2VydmljZSIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImFjY2Vzc1Rva2VuIiwiY2xpZW50X3NlY3JldCIsIkdBVl9DTElFTlRfU0VDUkVUIiwiY2xpZW50X2lkIiwiR0FWX0NMSUVOVF9JRCIsInBlc3NvYV9jYWRhc3Ryb19pZCIsIm1lc3NhZ2UiLCJnZXRNZSIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwiYWNjZXNzX3Rva2VuIiwibWUiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQWNjZXB0IiwiY3JlYXRlUGVyc29uIiwiZW1haWwiLCJjZWx1bGFyIiwibm9tZSIsInNlbmhhIiwicGVzc29hX3RpcG9faWQiLCJjYiIsInBlc3NvYV9maXNpY2EiLCJwZXNzb2FfanVyaWRpY2EiLCJ1c2VyIiwibm90aWZ5IiwiZXJyIiwiZXJyb3JzIiwiREVWRUxPUE1FTlQiLCJuZXh0QXV0aFVybCIsInByb2Nlc3MiLCJncmFudFR5cGUiLCJiYXNpY0F1dGhUb2tlbiIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIkZBQ0VCT09LX0NMSUVOVF9JRCIsIkZBQ0VCT09LX0NMSUVOVF9TRUNSRVQiLCJMT0dJTl9SRVFVRVNUIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUwiLCJVU0VSX0xPR09VVCIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJHb29nbGUiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsIkZhY2Vib29rIiwiQ3JlZGVudGlhbHMiLCJuYW1lIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJ0b2tlbnMiLCJnZXRUb2tlbiIsInVzZXJJZCIsImlkIiwicGhvdG8iLCJmb3RvX3BlcmZpbF9hcnF1aXZvIiwibGluayIsInNpdGUiLCJwYWdlcyIsInNpZ25JbiIsImp3dCIsImNhbGxiYWNrcyIsInJlZGlyZWN0IiwidXJsIiwiYWNjb3VudCIsInByb2ZpbGUiLCJpc05ld1VzZXIiLCJwcm92aWRlciIsImltYWdlIiwicmVxIiwicmVzIiwiTmV4dEF1dGgiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzdHlsZSIsImZvbnRTaXplIiwid2FybmluZyIsInVzZUlucHV0IiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInJhdGluZ0RhdGUiLCJkYXRlIiwibW9tZW50IiwidXRjIiwibG9jYWwiLCJmb3JtYXQiLCJkb21haW4iLCJnYXZQcm92aWRlciIsImdyYW50X3R5cGUiLCJzY29wZSIsImRlZmF1bHRPcHRpb25zIiwiY2xpZW50IiwidG9rZW5OZWVkIiwiT2JqZWN0IiwiYXNzaWduIiwicHV0IiwicGF0Y2giLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxlQUFlLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTQyxRQUFULEtBQXNCLE1BQU9DLFFBQVAsSUFBb0I7QUFDdkVBLFVBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUVDLHdFQUFnQkE7QUFBeEIsR0FBRCxDQUFSOztBQUVBLE1BQUk7QUFDRixVQUFNQyxJQUFJLEdBQUc7QUFDWEMsY0FBUSxFQUFFTixNQUFNLENBQUNNLFFBRE47QUFFWEMsY0FBUSxFQUFFUCxNQUFNLENBQUNPO0FBRk4sS0FBYjtBQUtBLFVBQU07QUFBRUM7QUFBRixRQUFXLE1BQU1DLHNEQUFXLENBQUNDLElBQVosQ0FDcEIsR0FBRUMsOENBQU0sQ0FBQ0MsT0FBUSxXQURHLEVBRXJCLEtBRnFCLEVBR3JCLElBSHFCLEVBSXJCUCxJQUpxQixDQUF2QjtBQU9BSCxZQUFRLENBQUM7QUFDUEMsVUFBSSxFQUFFVSx3RUFEQztBQUVQQyxhQUFPLEVBQUVOO0FBRkYsS0FBRCxDQUFSO0FBS0FQLFlBQVEsQ0FBQ08sSUFBRCxFQUFPLElBQVAsQ0FBUjtBQUNELEdBbkJELENBbUJFLE9BQU9PLEtBQVAsRUFBYztBQUNkYixZQUFRLENBQUM7QUFDUEMsVUFBSSxFQUFFYSxxRUFEQztBQUVQRixhQUFPLEVBQUVDLEtBQUssQ0FBQ0U7QUFGUixLQUFELENBQVI7QUFLQWhCLFlBQVEsQ0FBQyxJQUFELEVBQU9jLEtBQUssQ0FBQ0UsUUFBYixDQUFSO0FBQ0Q7QUFDRixDQTlCTTtBQWdDQSxNQUFNQyxZQUFZLEdBQUcsT0FBT0MsT0FBUCxFQUFnQkMsS0FBaEIsS0FBMEI7QUFDcEQ7QUFDQSxNQUFJO0FBQ0ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFrQkYsS0FBOUI7QUFDQSxVQUFNZixJQUFJLEdBQUc7QUFDWGtCLGlCQUFXLEVBQUVILEtBREY7QUFFWEksbUJBQWEsRUFBRWIsOENBQU0sQ0FBQ2MsaUJBRlg7QUFHWEMsZUFBUyxFQUFFZiw4Q0FBTSxDQUFDZ0IsYUFIUDtBQUlYQyx3QkFBa0IsRUFBRTtBQUpULEtBQWI7QUFPQSxVQUFNO0FBQUVwQjtBQUFGLFFBQVcsTUFBTUMsc0RBQVcsQ0FBQ0MsSUFBWixDQUNwQixHQUFFQyw4Q0FBTSxDQUFDQyxPQUFRLG9CQUFtQk8sT0FBUSxFQUR4QixFQUVyQixLQUZxQixFQUdyQixJQUhxQixFQUlyQmQsSUFKcUIsQ0FBdkI7QUFNQWdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZCxJQUFaO0FBQ0EsV0FBT0EsSUFBUDtBQUNELEdBakJELENBaUJFLE9BQU9PLEtBQVAsRUFBYztBQUNkTSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBSyxDQUFDRSxRQUFOLENBQWVULElBQWYsQ0FBb0JxQixPQUFoQztBQUNEO0FBQ0YsQ0F2Qk07QUF5QkEsTUFBTUMsS0FBSyxHQUFHLFlBQVk7QUFDL0IsTUFBSTtBQUNGLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxtRUFBVSxFQUFoQzs7QUFDQSxRQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFNWCxLQUFLLEdBQUdXLE9BQU8sQ0FBQ0UsWUFBdEI7QUFDQSxZQUFNO0FBQUV6QixZQUFJLEVBQUUwQjtBQUFSLFVBQWUsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFXLEdBQUV6Qiw4Q0FBTSxDQUFDQyxPQUFRLFNBQTVCLEVBQXNDO0FBQy9EeUIsZUFBTyxFQUFFO0FBQ1BDLHVCQUFhLEVBQUcsVUFBU2xCLEtBQU0sRUFEeEI7QUFFUG1CLGdCQUFNLEVBQUU7QUFGRDtBQURzRCxPQUF0QyxDQUEzQjtBQU1BLGFBQU9MLEVBQVA7QUFDRDtBQUNGLEdBWkQsQ0FZRSxPQUFPbkIsS0FBUCxFQUFjO0FBQ2RNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxLQUFaO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQWpCTSxDOzs7Ozs7Ozs7Ozs7QUNuRVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ0E7QUFJTyxNQUFNeUIsWUFBWSxHQUFHLE9BQU9DLEtBQVAsRUFBY0MsT0FBZCxFQUF1QkMsSUFBdkIsRUFBNkJDLEtBQTdCLEVBQW9DaEIsa0JBQXBDLEVBQXdEaUIsY0FBeEQsRUFBd0VDLEVBQXhFLEtBQStFO0FBQ3ZHLE1BQUk7QUFDQSxVQUFNekMsSUFBSSxHQUFHO0FBQ1RxQyxhQUFPLEVBQUVBLE9BREE7QUFFVEQsV0FBSyxFQUFFQSxLQUZFO0FBR1RJLG9CQUFjLEVBQUVBLGNBSFA7QUFJVGpCLHdCQUFrQixFQUFFQSxrQkFKWDtBQUtUbUIsbUJBQWEsRUFBRTtBQUNYSixZQUFJLEVBQUVBO0FBREssT0FMTjtBQVFUSyxxQkFBZSxFQUFFO0FBQ2JMLFlBQUksRUFBRUE7QUFETyxPQVJSO0FBV1RNLFVBQUksRUFBRTtBQUNGMUMsZ0JBQVEsRUFBRXFDLEtBRFI7QUFFRkgsYUFBSyxFQUFFQTtBQUZMO0FBWEcsS0FBYjtBQWtCQSxVQUFNO0FBQUVqQztBQUFGLFFBQVcsTUFBTUMsc0RBQVcsQ0FBQ0MsSUFBWixDQUNsQixHQUFFQyw4Q0FBTSxDQUFDQyxPQUFRLHVCQURDLEVBRW5CLEtBRm1CLEVBR25CLEVBSG1CLEVBSW5CUCxJQUptQixDQUF2QixDQW5CQSxDQXlCQTs7QUFDQTZDLGdFQUFNLENBQUMsU0FBRCxFQUFZLHNCQUFaLENBQU47QUFDQUosTUFBRTtBQUNGLFdBQU90QyxJQUFQO0FBQ0gsR0E3QkQsQ0E2QkUsT0FBT08sS0FBUCxFQUFjO0FBQ1orQixNQUFFO0FBQ0YsUUFBSUssR0FBRyxHQUFHLEVBQVY7O0FBQ0EsUUFBRyxnQkFBZ0JwQyxLQUFLLENBQUNFLFFBQU4sQ0FBZVQsSUFBZixDQUFvQjRDLE1BQXZDLEVBQStDO0FBQzNDRCxTQUFHLElBQUlwQyxLQUFLLENBQUNFLFFBQU4sQ0FBZVQsSUFBZixDQUFvQjRDLE1BQXBCLENBQTJCLFlBQTNCLEVBQXlDLENBQXpDLENBQVA7QUFDSDs7QUFFRCxRQUFHLG1CQUFtQnJDLEtBQUssQ0FBQ0UsUUFBTixDQUFlVCxJQUFmLENBQW9CNEMsTUFBMUMsRUFBa0Q7QUFDOUNELFNBQUcsSUFBSXBDLEtBQUssQ0FBQ0UsUUFBTixDQUFlVCxJQUFmLENBQW9CNEMsTUFBcEIsQ0FBMkIsZUFBM0IsRUFBNEMsQ0FBNUMsQ0FBUDtBQUNIOztBQUNERixnRUFBTSxDQUFDLE9BQUQsRUFBVUMsR0FBVixDQUFOLENBVlksQ0FXYjs7QUFDQyxXQUFPLElBQVA7QUFDSDtBQUNKLENBNUNNLEM7Ozs7Ozs7Ozs7OztBQ1BQO0FBQUE7QUFBQSxNQUFNRSxXQUFXLEdBQUc7QUFDaEJDLGFBQVcsRUFBRUMsK0JBREc7QUFFaEIzQyxTQUFPLEVBQUUyQyxrQ0FGTztBQUdoQkMsV0FBUyxFQUFFRCxVQUhLO0FBSWhCRSxnQkFBYyxFQUFFRixrREFKQTtBQUtoQjlCLG1CQUFpQixFQUFFOEIsMENBTEg7QUFNaEI1QixlQUFhLEVBQUU0QixFQU5DO0FBT2hCRyxrQkFBZ0IsRUFBRUgsMkVBUEY7QUFRaEJJLHNCQUFvQixFQUFFSiwwQkFSTjtBQVVoQjtBQUNBO0FBQ0FLLG9CQUFrQixFQUFFTCxpQkFaSjtBQWFoQk0sd0JBQXNCLEVBQUdOLGtDQUFrQ007QUFiM0MsQ0FBcEI7QUFnQk8sTUFBTWxELE1BQU0sR0FBRzBDLFdBQWYsQzs7Ozs7Ozs7Ozs7O0FDaEJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNUyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFFQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFFQSxNQUFNN0QsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTVMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUcsYUFBYSxHQUFHLGVBQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNa0QsT0FBTyxHQUFHO0FBQ1pDLFdBQVMsRUFBRSxDQUNQQywwREFBUyxDQUFDQyxNQUFWLENBQWlCO0FBQ2JDLFlBQVEsRUFBRTNELDhDQUFNLENBQUMrQyxnQkFESjtBQUViYSxnQkFBWSxFQUFFNUQsOENBQU0sQ0FBQ2dEO0FBRlIsR0FBakIsQ0FETyxFQU1QUywwREFBUyxDQUFDSSxRQUFWLENBQW1CO0FBQ2ZGLFlBQVEsRUFBRTNELDhDQUFNLENBQUNpRCxrQkFERjtBQUVmVyxnQkFBWSxFQUFFNUQsOENBQU0sQ0FBQ2tEO0FBRk4sR0FBbkIsQ0FOTyxFQVVQTywwREFBUyxDQUFDSyxXQUFWLENBQXNCO0FBQ2xCQyxRQUFJLEVBQUUsS0FEWTs7QUFFbEIsVUFBTUMsU0FBTixDQUFnQkMsV0FBaEIsRUFBNkI7QUFHekIsWUFBTUMsTUFBTSxHQUFHLE1BQU1DLGlFQUFRLENBQUNGLFdBQUQsQ0FBN0I7O0FBQ0EsVUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDVCxlQUFPLElBQVA7QUFDSDs7QUFDRCxZQUFNM0MsRUFBRSxHQUFHLE1BQU1KLDhEQUFLLENBQUMrQyxNQUFNLENBQUM1QyxZQUFSLENBQXRCLENBUHlCLENBUXpCOztBQUNBLFlBQU1nQixJQUFJLG1DQUNINEIsTUFERztBQUVOSCxZQUFJLEVBQUV4QyxFQUFFLENBQUNTLElBRkg7QUFHTkYsYUFBSyxFQUFFUCxFQUFFLENBQUNPLEtBSEo7QUFJTnNDLGNBQU0sRUFBRTdDLEVBQUUsQ0FBQzhDLEVBSkw7QUFLTkMsYUFBSyxFQUFFL0MsRUFBRSxDQUFDZ0QsbUJBQUgsR0FBeUJoRCxFQUFFLENBQUNnRCxtQkFBSCxDQUF1QkMsSUFBaEQsR0FBdUQ7QUFMeEQsUUFBVjs7QUFTQSxhQUFPbEMsSUFBUDtBQUVIOztBQXRCaUIsR0FBdEIsQ0FWTyxDQURDO0FBcUNabUMsTUFBSSxFQUFFN0IsK0JBckNNO0FBc0NaOEIsT0FBSyxFQUFFO0FBQ0hDLFVBQU0sRUFBRSxRQURMO0FBRUh2RSxTQUFLLEVBQUU7QUFGSixHQXRDSztBQTBDWmdCLFNBQU8sRUFBRTtBQUNMd0QsT0FBRyxFQUFFO0FBREEsR0ExQ0c7QUE2Q1pDLFdBQVMsRUFBRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxVQUFNQyxRQUFOLENBQWVDLEdBQWYsRUFBb0I5RSxPQUFwQixFQUE2QjtBQUN6QixhQUFPQSxPQUFQO0FBQ0gsS0FaTTs7QUFjUCxVQUFNMkUsR0FBTixDQUFVbkUsS0FBVixFQUFpQjZCLElBQWpCLEVBQXVCMEMsT0FBdkIsRUFBZ0NDLE9BQWhDLEVBQXlDQyxTQUF6QyxFQUFvRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsVUFBSTVDLElBQUosRUFBVTtBQUVON0IsYUFBSyxpREFDRUEsS0FERixHQUVFNkIsSUFGRixHQUdHMEMsT0FBTyxJQUFJQSxPQUhkLENBQUw7QUFNSDs7QUFFRCxhQUFPdkUsS0FBUDtBQUNILEtBaENNOztBQWlDUCxVQUFNVyxPQUFOLENBQWNBLE9BQWQsRUFBdUJYLEtBQXZCLEVBQThCO0FBRzFCLFVBQUlBLEtBQUssSUFBS0EsS0FBSyxDQUFDakIsSUFBTixLQUFlLE9BQTdCLEVBQXVDO0FBRW5DLGNBQU1LLElBQUksR0FBRyxNQUFNVSw4REFBWSxDQUFDRSxLQUFLLENBQUMwRSxRQUFQLEVBQWlCMUUsS0FBSyxDQUFDRyxXQUF2QixDQUEvQixDQUZtQyxDQUduQzs7QUFDQSxjQUFNVyxFQUFFLEdBQUcsTUFBTUosOERBQUssQ0FBQ3RCLElBQUksQ0FBQ3lCLFlBQU4sQ0FBdEIsQ0FKbUMsQ0FLbkM7O0FBQ0FGLGVBQU8sbUNBQ0F2QixJQURBO0FBRUhrRSxjQUFJLEVBQUV4QyxFQUFFLENBQUNTLElBRk47QUFHSEYsZUFBSyxFQUFFUCxFQUFFLENBQUNPLEtBSFA7QUFJSHNDLGdCQUFNLEVBQUU3QyxFQUFFLENBQUM4QyxFQUpSO0FBS0hDLGVBQUssRUFBRS9DLEVBQUUsQ0FBQ2dELG1CQUFILEdBQXlCaEQsRUFBRSxDQUFDZ0QsbUJBQUgsQ0FBdUJDLElBQWhELEdBQXVEL0QsS0FBSyxDQUFDMkUsS0FBTixHQUFjM0UsS0FBSyxDQUFDMkUsS0FBcEIsR0FBNEI7QUFMdkYsVUFBUDtBQVNILE9BZkQsTUFlTztBQUNIaEUsZUFBTyxtQ0FDQUEsT0FEQSxHQUNZWCxLQURaLENBQVA7QUFHSDs7QUFDREMsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkYsS0FBeEI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQlMsT0FBM0I7QUFDQSxhQUFPQSxPQUFQO0FBQ0g7O0FBM0RNO0FBN0NDLENBQWhCO0FBaUhlLGdFQUFDaUUsR0FBRCxFQUFNQyxHQUFOLEtBQWNDLGdEQUFRLENBQUNGLEdBQUQsRUFBTUMsR0FBTixFQUFXL0IsT0FBWCxDQUFyQyxFOzs7Ozs7Ozs7Ozs7QUN6SEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBR0E7O0FBQ08sTUFBTWhCLE1BQU0sR0FBRyxDQUFDL0MsSUFBRCxFQUFPMEIsT0FBUCxLQUFtQjtBQUN2QyxNQUFJMUIsSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDdEJnRyx3REFBSyxDQUFDQyxPQUFOLENBQWN2RSxPQUFkLEVBQXVCO0FBQ3JCd0UsV0FBSyxFQUFFO0FBQUVDLGdCQUFRLEVBQUU7QUFBWjtBQURjLEtBQXZCO0FBR0QsR0FKRCxNQUlPLElBQUluRyxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQjtBQUNBZ0csd0RBQUssQ0FBQ3BGLEtBQU4sQ0FBWWMsT0FBWixFQUFxQjtBQUNuQndFLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVo7QUFEWSxLQUFyQjtBQUdELEdBTE0sTUFLQSxJQUFJbkcsSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDN0JnRyx3REFBSyxDQUFDSSxPQUFOLENBQWMxRSxPQUFkO0FBQ0QsR0FGTSxNQUVBO0FBQ0xzRSxnRUFBSyxDQUFDdEUsT0FBRCxDQUFMO0FBQ0Q7QUFDRixDQWZNLEMsQ0FpQlA7O0FBQ08sTUFBTTJFLFFBQVEsR0FBRyxDQUFDQyxZQUFZLEdBQUcsRUFBaEIsS0FBdUI7QUFDN0MsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDSCxZQUFELENBQWxDOztBQUNBLFFBQU1JLFlBQVksR0FBSUMsQ0FBRCxJQUFPSCxRQUFRLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxLQUFWLENBQXBDOztBQUNBLFNBQU8sQ0FBQ0EsS0FBRCxFQUFRRyxZQUFSLEVBQXNCRixRQUF0QixDQUFQO0FBQ0QsQ0FKTTtBQU1BLE1BQU1LLFVBQVUsR0FBSUMsSUFBRCxJQUFVO0FBQ2xDLFNBQVFDLDZDQUFNLENBQUNDLEdBQVAsQ0FBV0YsSUFBWCxFQUFrQkcsS0FBbEIsR0FBMEJDLE1BQTFCLENBQWlDLGFBQWpDLENBQVI7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7OztBQzdCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUMsTUFBTSxHQUFHM0csOENBQU0sQ0FBQ0MsT0FBdEI7QUFFTyxNQUFNMkcsV0FBVyxHQUFHO0FBQ3ZCakQsVUFBUSxFQUFFM0QsOENBQU0sQ0FBQ2dCLGFBRE07QUFFdkI0QyxjQUFZLEVBQUU1RCw4Q0FBTSxDQUFDYyxpQkFGRTtBQUd2QitGLFlBQVUsRUFBRTdHLDhDQUFNLENBQUM2QztBQUhJLENBQXBCO0FBTUEsTUFBTXNCLFFBQVEsR0FBRyxNQUFPRixXQUFQLElBQXVCO0FBQzNDQSxhQUFXLENBQUM2QyxLQUFaLEdBQW9CLEVBQXBCO0FBQ0E3QyxhQUFXLENBQUM0QyxVQUFaLEdBQXlCRCxXQUFXLENBQUNDLFVBQXJDO0FBQ0E1QyxhQUFXLENBQUNsRCxTQUFaLEdBQXdCNkYsV0FBVyxDQUFDakQsUUFBcEM7QUFDQU0sYUFBVyxDQUFDcEQsYUFBWixHQUE0QitGLFdBQVcsQ0FBQ2hELFlBQXhDLENBSjJDLENBSzNDOztBQUNBLE1BQUk7QUFDQSxVQUFNO0FBQUUvRCxVQUFJLEVBQUVxRTtBQUFSLFFBQW1CLE1BQU0xQyw0Q0FBSyxDQUFDekIsSUFBTixDQUMxQixHQUFFNEcsTUFBTyxjQURpQixFQUUzQjFDLFdBRjJCLENBQS9CLENBREEsQ0FLRDs7QUFDQyxXQUFPQyxNQUFQO0FBQ0gsR0FQRCxDQU9FLE9BQU85RCxLQUFQLEVBQWM7QUFDYk0sV0FBTyxDQUFDQyxHQUFSLENBQVlQLEtBQVo7QUFDQyxXQUFPLElBQVA7QUFDSDtBQUNKLENBakJNO0FBbUJBLE1BQU1lLEtBQUssR0FBRyxNQUFPRyxZQUFQLElBQXdCO0FBQ3pDLE1BQUk7QUFDQSxVQUFNO0FBQUV6QixVQUFJLEVBQUUwQjtBQUFSLFFBQWUsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUN0QixHQUFFa0YsTUFBTyxTQURhLEVBRXZCO0FBQ0lqRixhQUFPLEVBQUU7QUFDTEMscUJBQWEsRUFBRyxVQUFTTCxZQUFhLEVBRGpDO0FBRUxNLGNBQU0sRUFBRTtBQUZIO0FBRGIsS0FGdUIsQ0FBM0I7QUFTQSxXQUFPTCxFQUFQO0FBQ0gsR0FYRCxDQVdFLE9BQU9uQixLQUFQLEVBQWM7QUFDWk0sV0FBTyxDQUFDQyxHQUFSLENBQVlQLEtBQVo7QUFDQSxXQUFPLElBQVA7QUFDSDtBQUNKLENBaEJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CUDtBQUVBLElBQUkyRyxjQUFKOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxDQUFDdkcsS0FBSyxHQUFHLElBQVQsS0FBa0I7QUFDN0IsU0FBTztBQUNIZ0IsT0FBRyxFQUFFLENBQUNzRCxHQUFELEVBQU1rQyxTQUFOLEVBQWlCeEcsS0FBakIsRUFBd0I4QyxPQUFPLEdBQUcsRUFBbEMsS0FBeUM7QUFDMUN3RCxvQkFBYyxHQUFHO0FBQ2JyRixlQUFPLEVBQUU7QUFDTCxvQkFBVSxrQkFETDtBQUVMLDBCQUFnQixrQkFGWDtBQUdMLDZCQUFtQjtBQUhkO0FBREksT0FBakI7O0FBUUEsVUFBSXVGLFNBQUosRUFBZTtBQUNYQyxjQUFNLENBQUNDLE1BQVAsQ0FBY0osY0FBYyxDQUFDckYsT0FBN0IsRUFBc0M7QUFDbENDLHVCQUFhLEVBQUVsQjtBQURtQixTQUF0QztBQUdIOztBQUVEQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4Qm9HLGNBQTlCO0FBRUEsYUFBT3ZGLDRDQUFLLENBQUNDLEdBQU4sQ0FBVXNELEdBQVYsa0NBQW9CZ0MsY0FBcEIsR0FBdUN4RCxPQUF2QyxFQUFQO0FBQ0gsS0FuQkU7QUFxQkh4RCxRQUFJLEVBQUUsQ0FBQ2dGLEdBQUQsRUFBTWtDLFNBQU4sRUFBaUJ4RyxLQUFqQixFQUF3QlosSUFBeEIsRUFBOEIwRCxPQUFPLEdBQUcsRUFBeEMsS0FBK0M7QUFDakR3RCxvQkFBYyxHQUFHO0FBQ2JyRixlQUFPLEVBQUU7QUFDTCxvQkFBVSxrQkFETDtBQUVMLDBCQUFnQixrQkFGWDtBQUdMLDZCQUFtQjtBQUhkO0FBREksT0FBakI7O0FBUUEsVUFBSXVGLFNBQUosRUFBZTtBQUNYQyxjQUFNLENBQUNDLE1BQVAsQ0FBY0osY0FBYyxDQUFDckYsT0FBN0IsRUFBc0M7QUFDbENDLHVCQUFhLEVBQUVsQjtBQURtQixTQUF0QztBQUdIOztBQUVELGFBQU9lLDRDQUFLLENBQUN6QixJQUFOLENBQVdnRixHQUFYLEVBQWdCbEYsSUFBaEIsa0NBQTJCa0gsY0FBM0IsR0FBOEN4RCxPQUE5QyxFQUFQO0FBQ0gsS0FyQ0U7QUF1Q0g2RCxPQUFHLEVBQUUsQ0FBQ3JDLEdBQUQsRUFBTWtDLFNBQU4sRUFBaUJ4RyxLQUFqQixFQUF3QlosSUFBeEIsRUFBOEIwRCxPQUFPLEdBQUcsRUFBeEMsS0FBK0M7QUFDaER3RCxvQkFBYyxHQUFHO0FBQ2JyRixlQUFPLEVBQUU7QUFDTCxvQkFBVSxrQkFETDtBQUVMLDBCQUFnQixrQkFGWDtBQUdMLDZCQUFtQjtBQUhkO0FBREksT0FBakI7O0FBUUEsVUFBSXVGLFNBQUosRUFBZTtBQUNYQyxjQUFNLENBQUNDLE1BQVAsQ0FBY0osY0FBYyxDQUFDckYsT0FBN0IsRUFBc0M7QUFDbENDLHVCQUFhLEVBQUVsQjtBQURtQixTQUF0QztBQUdIOztBQUVELGFBQU9lLDRDQUFLLENBQUM0RixHQUFOLENBQVVyQyxHQUFWLEVBQWVsRixJQUFmLGtDQUEwQmtILGNBQTFCLEdBQTZDeEQsT0FBN0MsRUFBUDtBQUNILEtBdkRFO0FBeURIOEQsU0FBSyxFQUFFLENBQUN0QyxHQUFELEVBQU1rQyxTQUFOLEVBQWlCeEcsS0FBakIsRUFBd0JaLElBQXhCLEVBQThCMEQsT0FBTyxHQUFHLEVBQXhDLEtBQStDO0FBQ2xEd0Qsb0JBQWMsR0FBRztBQUNickYsZUFBTyxFQUFFO0FBQ0wsb0JBQVUsa0JBREw7QUFFTCwwQkFBZ0Isa0JBRlg7QUFHTCw2QkFBbUI7QUFIZDtBQURJLE9BQWpCOztBQVFBLFVBQUl1RixTQUFKLEVBQWU7QUFDWEMsY0FBTSxDQUFDQyxNQUFQLENBQWNKLGNBQWMsQ0FBQ3JGLE9BQTdCLEVBQXNDO0FBQ2xDQyx1QkFBYSxFQUFFbEI7QUFEbUIsU0FBdEM7QUFHSDs7QUFFRCxhQUFPZSw0Q0FBSyxDQUFDNkYsS0FBTixDQUFZdEMsR0FBWixFQUFpQmxGLElBQWpCLGtDQUE0QmtILGNBQTVCLEdBQStDeEQsT0FBL0MsRUFBUDtBQUNILEtBekVFO0FBMkVIK0QsVUFBTSxFQUFFLENBQUN2QyxHQUFELEVBQU1rQyxTQUFOLEVBQWlCeEcsS0FBakIsRUFBd0I4QyxPQUFPLEdBQUcsRUFBbEMsS0FBeUM7QUFDN0N3RCxvQkFBYyxHQUFHO0FBQ2JyRixlQUFPLEVBQUU7QUFDTCxvQkFBVSxrQkFETDtBQUVMLDBCQUFnQixrQkFGWDtBQUdMLDZCQUFtQjtBQUhkO0FBREksT0FBakI7O0FBUUEsVUFBSXVGLFNBQUosRUFBZTtBQUNYQyxjQUFNLENBQUNDLE1BQVAsQ0FBY0osY0FBYyxDQUFDckYsT0FBN0IsRUFBc0M7QUFDbENDLHVCQUFhLEVBQUVsQjtBQURtQixTQUF0QztBQUdIOztBQUVELGFBQU9lLDRDQUFLLENBQUM4RixNQUFOLENBQWF2QyxHQUFiLGtDQUF1QmdDLGNBQXZCLEdBQTBDeEQsT0FBMUMsRUFBUDtBQUNIO0FBM0ZFLEdBQVA7QUE2RkgsQ0E5RkQ7O0FBK0ZBLE1BQU16RCxXQUFXLEdBQUdrSCxNQUFNLENBQUMsSUFBRCxDQUExQjtBQUNlbEgsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUNuR0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qc1wiKTtcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7XG4gIFJFR0lTVEVSX0ZBSUwsXG4gIFJFR0lTVEVSX1JFUVVFU1QsXG4gIFJFR0lTVEVSX1NVQ0NFU1MsXG59IGZyb20gXCIuLi9jb25zdGFudHMvYXV0aENvbnN0YW50XCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJTZXJ2aWNlID0gKHJlZ09iaiwgY2FsbGJhY2spID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7IHR5cGU6IFJFR0lTVEVSX1JFUVVFU1QgfSk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgdXNlcm5hbWU6IHJlZ09iai51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiByZWdPYmoucGFzc3dvcmQsXG4gICAgfTtcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cFJlcXVlc3QucG9zdChcbiAgICAgIGAke2NvbmZpZy5iYXNlVXJsfS9yZWdpc3RlcmAsXG4gICAgICBmYWxzZSxcbiAgICAgIG51bGwsXG4gICAgICBib2R5XG4gICAgKTtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFR0lTVEVSX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiBkYXRhLFxuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soZGF0YSwgbnVsbCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVHSVNURVJfRkFJTCxcbiAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLFxuICAgIH0pO1xuXG4gICAgY2FsbGJhY2sobnVsbCwgZXJyb3IucmVzcG9uc2UpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5TZXJ2aWNlID0gYXN5bmMgKHNlcnZpY2UsIHRva2VuKSA9PiB7XG4gIC8vY29uc29sZS5sb2coXCJsb2dpbiBzZXJ2aWNlXCIsIHNlcnZpY2UsIHRva2VuKVxuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwidG9rZW4tLS0tLS0tLVwiICsgdG9rZW4pO1xuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICBhY2Nlc3NUb2tlbjogdG9rZW4sXG4gICAgICBjbGllbnRfc2VjcmV0OiBjb25maWcuR0FWX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjbGllbnRfaWQ6IGNvbmZpZy5HQVZfQ0xJRU5UX0lELFxuICAgICAgcGVzc29hX2NhZGFzdHJvX2lkOiAyLFxuICAgIH07XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHBSZXF1ZXN0LnBvc3QoXG4gICAgICBgJHtjb25maWcuYmFzZVVybH0vYXBpL2F1dGgvc29jaWFsLyR7c2VydmljZX1gLFxuICAgICAgZmFsc2UsXG4gICAgICBudWxsLFxuICAgICAgYm9keVxuICAgICk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvciA9IC0tLS9hcGkvYXV0aFwiKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWUgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKTtcbiAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgY29uc3QgdG9rZW4gPSBzZXNzaW9uLmFjY2Vzc190b2tlbjtcbiAgICAgIGNvbnN0IHsgZGF0YTogbWUgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtjb25maWcuYmFzZVVybH0vYXBpL21lYCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1lO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCJcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcmVxdWVzdFwiXG4vL2ltcG9ydCBnZXRJdGVtIGZyb20gJy4uLy4uLy4uL3V0aWxzL2xvY2FsU3Ryb2FnZUFjY2VzcydcbmltcG9ydCB7IG5vdGlmeSwgdXNlSW5wdXQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29tbW9uXCJcblxuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQZXJzb24gPSBhc3luYyAoZW1haWwsIGNlbHVsYXIsIG5vbWUsIHNlbmhhLCBwZXNzb2FfY2FkYXN0cm9faWQsIHBlc3NvYV90aXBvX2lkLCBjYikgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICBjZWx1bGFyOiBjZWx1bGFyLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgcGVzc29hX3RpcG9faWQ6IHBlc3NvYV90aXBvX2lkLFxuICAgICAgICAgICAgcGVzc29hX2NhZGFzdHJvX2lkOiBwZXNzb2FfY2FkYXN0cm9faWQsXG4gICAgICAgICAgICBwZXNzb2FfZmlzaWNhOiB7XG4gICAgICAgICAgICAgICAgbm9tZTogbm9tZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBlc3NvYV9qdXJpZGljYToge1xuICAgICAgICAgICAgICAgIG5vbWU6IG5vbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHNlbmhhLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHBSZXF1ZXN0LnBvc3QoXG4gICAgICAgICAgICBgJHtjb25maWcuYmFzZVVybH0vYXBpL2NhcHRhY2FvL3Blc3NvYXNgLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgYm9keVxuICAgICAgICApXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpXG4gICAgICAgIG5vdGlmeSgnc3VjY2VzcycsIFwiU3VjY2Vzc2Z1bGx5IENyZWF0ZWRcIilcbiAgICAgICAgY2IoKVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNiKClcbiAgICAgICAgbGV0IGVyciA9IFwiXCJcbiAgICAgICAgaWYoXCJ1c2VyLmVtYWlsXCIgaW4gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMgKXtcbiAgICAgICAgICAgIGVyciArPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yc1tcInVzZXIuZW1haWxcIl1bMF1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKFwidXNlci5wYXNzd29yZFwiIGluIGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzICl7XG4gICAgICAgICAgICBlcnIgKz0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbXCJ1c2VyLnBhc3N3b3JkXCJdWzBdXG4gICAgICAgIH1cbiAgICAgICAgbm90aWZ5KFwiZXJyb3JcIiwgZXJyKVxuICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn0iLCJjb25zdCBERVZFTE9QTUVOVCA9IHtcbiAgICBuZXh0QXV0aFVybDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMLFxuICAgIGJhc2VVcmw6IHByb2Nlc3MuZW52LkFQSV9VUkwsXG4gICAgZ3JhbnRUeXBlOiBwcm9jZXNzLmVudi5HUkFOVF9UWVBFLFxuICAgIGJhc2ljQXV0aFRva2VuOiBwcm9jZXNzLmVudi5CQVNJQ19BVVRIX1RPS0VOLFxuICAgIEdBVl9DTElFTlRfU0VDUkVUOiBwcm9jZXNzLmVudi5HQVZfQ0xJRU5UX1NFQ1JFVCxcbiAgICBHQVZfQ0xJRU5UX0lEOiBwcm9jZXNzLmVudi5HQVZfQ0xJRU5UX0lELFxuICAgIEdPT0dMRV9DTElFTlRfSUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgR09PR0xFX0NMSUVOVF9TRUNSRVQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuXG4gICAgLy8gR09PR0xFX0NMSUVOVF9JRDogJzMxNjUxMDU3ODE4LWg4MjBvbmhkM2g0MmtwZ2Y1aGloMmtwdGMzbTJtdWVzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcbiAgICAvLyBHT09HTEVfQ0xJRU5UX1NFQ1JFVDogJ1ZBbmZRTHJ6cFF2S0ZTU3pNaGZBQmJoWCdcbiAgICBGQUNFQk9PS19DTElFTlRfSUQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0NMSUVOVF9JRCxcbiAgICBGQUNFQk9PS19DTElFTlRfU0VDUkVUOiAgcHJvY2Vzcy5lbnYuRkFDRUJPT0tfQ0xJRU5UX1NFQ1JFVFxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0gREVWRUxPUE1FTlRcbiIsImV4cG9ydCBjb25zdCBMT0dJTl9SRVFVRVNUID0gJ0xPR0lOX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgTE9HSU5fU1VDQ0VTUyA9ICdMT0dJTl9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IExPR0lOX0ZBSUwgPSAnTE9HSU5fRkFJTCdcblxuZXhwb3J0IGNvbnN0IFVTRVJfTE9HT1VUID0gJ1VTRVJfTE9HT1VUJ1xuXG5leHBvcnQgY29uc3QgUkVHSVNURVJfUkVRVUVTVCA9ICdSRUdJU1RFUl9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1NVQ0NFU1MgPSAnUkVHSVNURVJfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GQUlMID0gJ1JFR0lTVEVSX0ZBSUwnIiwiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCJcbmltcG9ydCB7IGdhdlByb3ZpZGVyLCBnZXRNZSwgZ2V0VG9rZW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9wcm92aWRlcnMnXG5pbXBvcnQgeyBsb2dpblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcGkvYXV0aCdcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuXG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFByb3ZpZGVycy5Hb29nbGUoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IGNvbmZpZy5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBjb25maWcuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG5cbiAgICAgICAgfSksXG4gICAgICAgIFByb3ZpZGVycy5GYWNlYm9vayh7XG4gICAgICAgICAgICBjbGllbnRJZDogY29uZmlnLkZBQ0VCT09LX0NMSUVOVF9JRCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogY29uZmlnLkZBQ0VCT09LX0NMSUVOVF9TRUNSRVRcbiAgICAgICAgfSksXG4gICAgICAgIFByb3ZpZGVycy5DcmVkZW50aWFscyh7XG4gICAgICAgICAgICBuYW1lOiBcIkdBVlwiLFxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IGF3YWl0IGdldFRva2VuKGNyZWRlbnRpYWxzKVxuICAgICAgICAgICAgICAgIGlmICghdG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG1lID0gYXdhaXQgZ2V0TWUodG9rZW5zLmFjY2Vzc190b2tlbilcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibWU9PT0+PlwiLCBtZSlcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50b2tlbnMsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lLm5vbWUsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBtZS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgcGhvdG86IG1lLmZvdG9fcGVyZmlsX2FycXVpdm8gPyBtZS5mb3RvX3BlcmZpbF9hcnF1aXZvLmxpbmsgOiBcIlwiXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlclxuXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcblxuICAgIF0sXG4gICAgc2l0ZTogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMLFxuICAgIHBhZ2VzOiB7XG4gICAgICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgICAgICAgZXJyb3I6ICcvbG9naW4nXG4gICAgfSxcbiAgICBzZXNzaW9uOiB7XG4gICAgICAgIGp3dDogdHJ1ZSxcbiAgICB9LFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICAvLyBhc3luYyBzaWduSW4odXNlciwgYWNjb3VudCwgcHJvZmlsZSkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYXN5bmMgcmVkaXJlY3QodXJsLCBiYXNlVXJsKSB7XG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygndXJsJywgdXJsKTtcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCdiYXNlVXJsJywgYmFzZVVybCk7XG5cbiAgICAgICAgLy8gICAgIHJldHVybiB1cmxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgYXN5bmMgcmVkaXJlY3QodXJsLCBiYXNlVXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZVVybFxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgYXN5bmMgand0KHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidG9rZW4gPT09PiBcIiwgdG9rZW4pXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVzZXIgPT09PiBcIiwgdXNlcilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWNjb3VudCA9PT0+IFwiLCBhY2NvdW50KVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwcm9maWxlID09PT4gXCIsIHByb2ZpbGUpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlzTmV3VXNlciA9PT0+IFwiLCBpc05ld1VzZXIpXG5cbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG5cbiAgICAgICAgICAgICAgICB0b2tlbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIC4uLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgIC4uLihhY2NvdW50ICYmIGFjY291bnQpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0b2tlblxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBzZXNzaW9uKHNlc3Npb24sIHRva2VuKSB7XG5cblxuICAgICAgICAgICAgaWYgKHRva2VuICYmICh0b2tlbi50eXBlID09PSAnb2F1dGgnKSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGxvZ2luU2VydmljZSh0b2tlbi5wcm92aWRlciwgdG9rZW4uYWNjZXNzVG9rZW4pXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRhdGEgPSBcIiwgZGF0YSlcbiAgICAgICAgICAgICAgICBjb25zdCBtZSA9IGF3YWl0IGdldE1lKGRhdGEuYWNjZXNzX3Rva2VuKVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJtZT09PT4+XCIsIG1lKVxuICAgICAgICAgICAgICAgIHNlc3Npb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lLm5vbWUsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBtZS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgcGhvdG86IG1lLmZvdG9fcGVyZmlsX2FycXVpdm8gPyBtZS5mb3RvX3BlcmZpbF9hcnF1aXZvLmxpbmsgOiB0b2tlbi5pbWFnZSA/IHRva2VuLmltYWdlIDogXCJcIlxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlc3Npb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnNlc3Npb24sIC4uLnRva2VuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiA9PVwiLCB0b2tlbilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Vzc2lvbiA9PSBcIiwgc2Vzc2lvbilcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgICAgIH1cblxuXG4gICAgfSxcblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucykiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG4vLyBjb252ZXJ0IG9iamVjdCB0byBGb3JtRGF0YVxuZXhwb3J0IGNvbnN0IG5vdGlmeSA9ICh0eXBlLCBtZXNzYWdlKSA9PiB7XG4gIGlmICh0eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICB0b2FzdC5zdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiAxNiB9LFxuICAgIH0pXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIC8vIGlmICghbWVzc2FnZSkgbWVzc2FnZSA9ICdTb21ldGhpbmcgV2VudCBXcm9uZy4gVHJ5IEFnYWluISdcbiAgICB0b2FzdC5lcnJvcihtZXNzYWdlLCB7XG4gICAgICBzdHlsZTogeyBmb250U2l6ZTogMTYgfSxcbiAgICB9KVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3YXJuaW5nJykge1xuICAgIHRvYXN0Lndhcm5pbmcobWVzc2FnZSlcbiAgfSBlbHNlIHtcbiAgICB0b2FzdChtZXNzYWdlKVxuICB9XG59XG5cbi8vIGN1c3RvbSBoZWxwZXIgdG8gdGFrZSBpbnB1dCBmaWVsZFxuZXhwb3J0IGNvbnN0IHVzZUlucHV0ID0gKGluaXRpYWxWYWx1ZSA9ICcnKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXG4gIHJldHVybiBbdmFsdWUsIGhhbmRsZUNoYW5nZSwgc2V0VmFsdWVdXG59XG5cbmV4cG9ydCBjb25zdCByYXRpbmdEYXRlID0gKGRhdGUpID0+IHtcbiAgcmV0dXJuICBtb21lbnQudXRjKGRhdGUgKS5sb2NhbCgpLmZvcm1hdCgnREQvTU1NL1lZWVknKTtcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgY3JlYXRlUGVyc29uIH0gZnJvbSAnLi4vYXBpL2NhZGFzdHJvL2NhcHRhc2FvL2NyZWF0ZVBlcnNvbidcblxuY29uc3QgZG9tYWluID0gY29uZmlnLmJhc2VVcmxcblxuZXhwb3J0IGNvbnN0IGdhdlByb3ZpZGVyID0ge1xuICAgIGNsaWVudElkOiBjb25maWcuR0FWX0NMSUVOVF9JRCxcbiAgICBjbGllbnRTZWNyZXQ6IGNvbmZpZy5HQVZfQ0xJRU5UX1NFQ1JFVCxcbiAgICBncmFudF90eXBlOiBjb25maWcuZ3JhbnRUeXBlXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9IGFzeW5jIChjcmVkZW50aWFscykgPT4ge1xuICAgIGNyZWRlbnRpYWxzLnNjb3BlID0gJydcbiAgICBjcmVkZW50aWFscy5ncmFudF90eXBlID0gZ2F2UHJvdmlkZXIuZ3JhbnRfdHlwZVxuICAgIGNyZWRlbnRpYWxzLmNsaWVudF9pZCA9IGdhdlByb3ZpZGVyLmNsaWVudElkXG4gICAgY3JlZGVudGlhbHMuY2xpZW50X3NlY3JldCA9IGdhdlByb3ZpZGVyLmNsaWVudFNlY3JldFxuICAgIC8vY29uc29sZS5sb2coXCJjcmVhZGlhbnRpYWxzICA9IFwiLCBjcmVkZW50aWFscylcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRhdGE6IHRva2VucyB9ID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgICAgIGAke2RvbWFpbn0vb2F1dGgvdG9rZW5gLFxuICAgICAgICAgICAgY3JlZGVudGlhbHNcbiAgICAgICAgKVxuICAgICAgIC8vIGNvbnNvbGUubG9nKHRva2VucylcbiAgICAgICAgcmV0dXJuIHRva2Vuc1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TWUgPSBhc3luYyAoYWNjZXNzX3Rva2VuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBtZSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgYCR7ZG9tYWlufS9hcGkvbWVgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBtZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmxldCBkZWZhdWx0T3B0aW9uc1xuY29uc3QgY2xpZW50ID0gKHRva2VuID0gbnVsbCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldDogKHVybCwgdG9rZW5OZWVkLCB0b2tlbiwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiAnZW4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b2tlbk5lZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLmhlYWRlcnMsIHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHRPcHRpb25zJywgZGVmYXVsdE9wdGlvbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHVybCwgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIHBvc3Q6ICh1cmwsIHRva2VuTmVlZCwgdG9rZW4sIGRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogJ2VuJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9rZW5OZWVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucy5oZWFkZXJzLCB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wb3N0KHVybCwgZGF0YSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIHB1dDogKHVybCwgdG9rZW5OZWVkLCB0b2tlbiwgZGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiAnZW4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b2tlbk5lZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLmhlYWRlcnMsIHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnB1dCh1cmwsIGRhdGEsIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRjaDogKHVybCwgdG9rZW5OZWVkLCB0b2tlbiwgZGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiAnZW4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b2tlbk5lZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLmhlYWRlcnMsIHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnBhdGNoKHVybCwgZGF0YSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZTogKHVybCwgdG9rZW5OZWVkLCB0b2tlbiwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiAnZW4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b2tlbk5lZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLmhlYWRlcnMsIHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmRlbGV0ZSh1cmwsIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfSlcbiAgICAgICAgfSxcbiAgICB9XG59XG5jb25zdCBodHRwUmVxdWVzdCA9IGNsaWVudChudWxsKVxuZXhwb3J0IGRlZmF1bHQgaHR0cFJlcXVlc3QiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9