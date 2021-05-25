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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ "1Vwm":
/***/ (function(module, exports) {

module.exports = require("next-auth");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("mQn/");


/***/ }),

/***/ "2v50":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ratingDate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wy2R");
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

/***/ "77Mu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gavProvider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMe; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rOcY");
/* harmony import */ var _api_cadastro_captasao_createPerson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FgoO");



const domain = _config__WEBPACK_IMPORTED_MODULE_1__[/* config */ "a"].baseUrl;
const gavProvider = {
  clientId: _config__WEBPACK_IMPORTED_MODULE_1__[/* config */ "a"].GAV_CLIENT_ID,
  clientSecret: _config__WEBPACK_IMPORTED_MODULE_1__[/* config */ "a"].GAV_CLIENT_SECRET,
  grant_type: _config__WEBPACK_IMPORTED_MODULE_1__[/* config */ "a"].grantType
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

/***/ "Ajgj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export registerService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMe; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rOcY");
/* harmony import */ var _constants_authConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+pvy");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZPNs");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FctI");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





const registerService = (regObj, callback) => async dispatch => {
  dispatch({
    type: _constants_authConstant__WEBPACK_IMPORTED_MODULE_1__[/* REGISTER_REQUEST */ "e"]
  });

  try {
    const body = {
      username: regObj.username,
      password: regObj.password
    };
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].post(`${_config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].baseUrl}/register`, false, null, body);
    dispatch({
      type: _constants_authConstant__WEBPACK_IMPORTED_MODULE_1__[/* REGISTER_SUCCESS */ "f"],
      payload: data
    });
    callback(data, null);
  } catch (error) {
    dispatch({
      type: _constants_authConstant__WEBPACK_IMPORTED_MODULE_1__[/* REGISTER_FAIL */ "d"],
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
      client_secret: _config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].GAV_CLIENT_SECRET,
      client_id: _config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].GAV_CLIENT_ID,
      pessoa_cadastro_id: 2
    };
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].post(`${_config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].baseUrl}/api/auth/social/${service}`, false, null, body);
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
      } = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].baseUrl}/api/me`, {
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

/***/ "FctI":
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "FgoO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPerson; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rOcY");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZPNs");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2v50");

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
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post(`${_config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].baseUrl}/api/captacao/pessoas`, false, "", body); //console.log("data", data)

    Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__[/* notify */ "a"])('success', "Successfully Created");
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

    Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__[/* notify */ "a"])("error", err); // console.log(error.response.data.errors)

    return null;
  }
};

/***/ }),

/***/ "ZPNs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
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
/* harmony default export */ __webpack_exports__["a"] = (httpRequest);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kD0u":
/***/ (function(module, exports) {

module.exports = require("next-auth/providers");

/***/ }),

/***/ "mQn/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1Vwm");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kD0u");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rOcY");
/* harmony import */ var _utils_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("77Mu");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Ajgj");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FctI");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const options = {
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Google({
    clientId: _config__WEBPACK_IMPORTED_MODULE_2__[/* config */ "a"].GOOGLE_CLIENT_ID,
    clientSecret: _config__WEBPACK_IMPORTED_MODULE_2__[/* config */ "a"].GOOGLE_CLIENT_SECRET
  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Facebook({
    clientId: _config__WEBPACK_IMPORTED_MODULE_2__[/* config */ "a"].FACEBOOK_CLIENT_ID,
    clientSecret: _config__WEBPACK_IMPORTED_MODULE_2__[/* config */ "a"].FACEBOOK_CLIENT_SECRET
  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Credentials({
    name: "GAV",

    async authorize(credentials) {
      const tokens = await Object(_utils_providers__WEBPACK_IMPORTED_MODULE_3__[/* getToken */ "b"])(credentials);

      if (!tokens) {
        return null;
      }

      const me = await Object(_utils_providers__WEBPACK_IMPORTED_MODULE_3__[/* getMe */ "a"])(tokens.access_token); //console.log("me===>>", me)

      const user = _objectSpread(_objectSpread({}, tokens), {}, {
        name: me.nome,
        email: me.email,
        userId: me.id,
        photo: me.foto_perfil_arquivo ? me.foto_perfil_arquivo.link : ""
      });

      return user;
    }

  })],
  site: "https://carmarketingnext.herokuapp.com",
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
        const data = await Object(_api_auth__WEBPACK_IMPORTED_MODULE_4__[/* loginService */ "b"])(token.provider, token.accessToken); //console.log("data = ", data)

        const me = await Object(_utils_providers__WEBPACK_IMPORTED_MODULE_3__[/* getMe */ "a"])(data.access_token); //console.log("me===>>", me)

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

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "rOcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
const DEVELOPMENT = {
  nextAuthUrl: "https://carmarketingnext.herokuapp.com",
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

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });