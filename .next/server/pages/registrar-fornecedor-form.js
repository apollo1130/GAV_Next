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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/registrar-fornecedor-form/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

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

/***/ "./api/driver/updateDriver.js":
/*!************************************!*\
  !*** ./api/driver/updateDriver.js ***!
  \************************************/
/*! exports provided: updateDriver, getCep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDriver", function() { return updateDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCep", function() { return getCep; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const updateDriver = async (newData, obj) => {
  try {
    const pessoa_fisica = _objectSpread(_objectSpread({}, obj.pessoa_fisica), {}, {
      cpf: newData.cpf,
      nome: newData.nome
    });

    const endereco = [{
      "latitude": obj.latitude,
      "longitude": obj.longitude,
      "logradouro": newData.rua,
      "cep": newData.cep,
      "numero": newData.numero,
      "complemento": newData.complemento,
      "bairro": newData.bairro,
      "cidade_id": newData.cidadeId
    }];
    let pessoa_arquivos = [];

    if (obj.pessoa_arquivos) {
      pessoa_arquivos = [...obj.pessoa_arquivos];
    }

    if (newData.cnhId) {
      pessoa_arquivos.push({
        arquivo_id: newData.cnhId,
        pessoa_arquivo_tipo_id: 1
      });
    }

    if (newData.segurandoId) {
      pessoa_arquivos.push({
        arquivo_id: newData.segurandoId,
        pessoa_arquivo_tipo_id: 2
      });
    }

    if (newData.comprovanteId) {
      pessoa_arquivos.push({
        arquivo_id: newData.comprovanteId,
        pessoa_arquivo_tipo_id: 3
      });
    }

    if (newData.rgId) {
      pessoa_arquivos.push({
        arquivo_id: newData.rgId,
        pessoa_arquivo_tipo_id: 5
      });
    }

    const body = _objectSpread(_objectSpread({
      telefone: obj.telefone,
      celular: newData.celular,
      email: newData.email,
      pessoa_tipo_id: obj.pessoa_tipo_id,
      pessoa_cadastro_id: obj.pessoa_cadastro_id,
      pessoa_status_id: obj.pessoa_status_id,
      recebe_via_administrador: obj.recebe_via_administrador,
      pessoa_fisica: pessoa_fisica,
      pessoa_juridica: obj.pessoa_juridica,
      endereco: [endereco],
      carros: obj.carros,
      pessoa_arquivos: obj.pessoa_arquivos,
      conta_bancaria: obj.conta_bancaria
    }, pessoa_arquivos.length && {
      pessoa_arquivos: pessoa_arquivos
    }), newData.prefilId && {
      foto_perfil_arquivo_id: newData.prefilId
    }); //cnhID, rgId, segurandoId, comprovanteId, prefilId
    // debugger


    console.log("body = ", body);
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])();
    const token = 'Bearer ' + session.access_token;
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].patch(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/motorista`, true, token, body);
    console.log("updated data = ", data);
    return data;
  } catch (error) {
    console.log(error);
    Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["notify"])("error", error.response ? error.response.data.message : '');
    return null;
  }
};
const getCep = async cep => {
  try {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])();
    const token = 'Bearer ' + session.access_token;
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].get(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/cep/${cep}`, true, token);
    return data;
  } catch (error) {
    //console.log(error.response.data)
    return null;
  }
};

/***/ }),

/***/ "./api/files/createFiles.js":
/*!**********************************!*\
  !*** ./api/files/createFiles.js ***!
  \**********************************/
/*! exports provided: createFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFile", function() { return createFile; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const createFile = async formData => {
  try {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["getSession"])();
    const token = 'Bearer ' + session.access_token;
    let defaultOptions = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Accept-Language': 'en'
      }
    };
    Object.assign(defaultOptions.headers, {
      Authorization: token
    });
    const res = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/arquivos`, formData, _objectSpread({}, defaultOptions));
    console.log('res', res.data); //debugger

    return res && res.data ? res.data : res;
  } catch (error) {
    console.log(error.response); // notify("error", error.response ? error.response.data : '')

    return null;
  }
};

/***/ }),

/***/ "./api/owner/cars/createCar.js":
/*!*************************************!*\
  !*** ./api/owner/cars/createCar.js ***!
  \*************************************/
/*! exports provided: createCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCar", function() { return createCar; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/request */ "./utils/request.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/common */ "./utils/common.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./config/index.js");





const createCar = async newData => {
  try {
    const endereco_retirada_principal = {
      "logradouro": newData.ruaCar,
      "cep": newData.cepCar,
      "numero": newData.numeroCar,
      "complemento": newData.complementoCar,
      "bairro": newData.bairroCar,
      "cidade_id": newData.cidadeIdCar
    };
    let arquivos = [];

    if (newData.frontalId) {
      arquivos.push({
        arquivo_id: newData.frontalId,
        carro_arquivo_tipo_id: 1,
        position: 1
      });
    }

    if (newData.lateralDireitaId) {
      arquivos.push({
        arquivo_id: newData.lateralDireitaId,
        carro_arquivo_tipo_id: 1,
        position: 2
      });
    }

    if (newData.lateralEsquerdaId) {
      arquivos.push({
        arquivo_id: newData.lateralEsquerdaId,
        carro_arquivo_tipo_id: 1,
        position: 3
      });
    }

    if (newData.fundoId) {
      arquivos.push({
        arquivo_id: newData.fundoId,
        carro_arquivo_tipo_id: 1,
        position: 4
      });
    }

    if (newData.painelInternoId) {
      arquivos.push({
        arquivo_id: newData.painelInternoId,
        carro_arquivo_tipo_id: 1,
        position: 5
      });
    }

    const model = {
      description: newData.modelo,
      brand: {
        description: newData.marca
      }
    };
    const body = {
      ano: newData.anoCar,
      placa: newData.placaCar,
      endereco_retirada_principal: endereco_retirada_principal,
      model: model,
      arquivos
    };
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])();
    const token = 'Bearer ' + session.access_token;
    console.log("body =", body);
    const res = await _utils_request__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_config__WEBPACK_IMPORTED_MODULE_4__["config"].baseUrl}/api/proprietario/carros`, true, token, body);
    return res && res.data ? res.data : res;
  } catch (error) {
    console.log('error', error.response); // notify("error", error.response ? error.response.data : '')

    return null;
  }
};

/***/ }),

/***/ "./api/owner/recoverOwner.js":
/*!***********************************!*\
  !*** ./api/owner/recoverOwner.js ***!
  \***********************************/
/*! exports provided: recoverOwner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recoverOwner", function() { return recoverOwner; });
/* harmony import */ var _constants_owner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/owner */ "./constants/owner.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);





const recoverOwner = async (queryParamsObj, callback) => {
  try {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_4__["getSession"])(); //console.log(session)

    const token = 'Bearer ' + session.access_token;
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${_config__WEBPACK_IMPORTED_MODULE_1__["config"].baseUrl}/api/proprietario`, true, token);
    callback();
    return data;
  } catch (error) {
    callback(); // notify("error",  error.response && error.response.data.message)

    return null;
  }
};

/***/ }),

/***/ "./api/owner/updateOwner.js":
/*!**********************************!*\
  !*** ./api/owner/updateOwner.js ***!
  \**********************************/
/*! exports provided: updateOwner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOwner", function() { return updateOwner; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const updateOwner = async (newData, obj) => {
  try {
    const pessoa_fisica = _objectSpread(_objectSpread({}, obj.pessoa_fisica), {}, {
      cpf: newData.cpf,
      nome: newData.nome
    });

    const endereco = [{
      "latitude": obj.latitude,
      "longitude": obj.longitude,
      "logradouro": newData.rua,
      "cep": newData.cep,
      "numero": newData.numero,
      "complemento": newData.complemento,
      "bairro": newData.bairro,
      "cidade_id": newData.cidadeId
    }];
    let pessoa_arquivos = [];

    if (obj.pessoa_arquivos) {
      pessoa_arquivos = [...obj.pessoa_arquivos];
    }

    if (newData.cnhId) {
      pessoa_arquivos.push({
        arquivo_id: newData.cnhId,
        pessoa_arquivo_tipo_id: 1
      });
    }

    if (newData.comprovanteId) {
      pessoa_arquivos.push({
        arquivo_id: newData.comprovanteId,
        pessoa_arquivo_tipo_id: 2
      });
    }

    const body = _objectSpread(_objectSpread({
      telefone: obj.telefone,
      celular: newData.celular,
      email: newData.email,
      pessoa_tipo_id: obj.pessoa_tipo_id,
      pessoa_cadastro_id: obj.pessoa_cadastro_id,
      pessoa_status_id: obj.pessoa_status_id,
      recebe_via_administrador: obj.recebe_via_administrador,
      pessoa_fisica: pessoa_fisica,
      pessoa_juridica: obj.pessoa_juridica,
      endereco: [endereco],
      carros: obj.carros,
      pessoa_arquivos: obj.pessoa_arquivos,
      conta_bancaria: obj.conta_bancaria
    }, pessoa_arquivos.length && {
      pessoa_arquivos: pessoa_arquivos
    }), newData.prefilId && {
      foto_perfil_arquivo_id: newData.prefilId
    });

    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["getSession"])();
    const token = 'Bearer ' + session.access_token;
    console.log("body =", body);
    const res = await _utils_request__WEBPACK_IMPORTED_MODULE_1__["default"].patch(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/proprietario`, true, token, body);
    return res && res.data ? res.data : res;
  } catch (error) {
    console.log(error); // notify("error", error.response ? error.response.data : '')

    return null;
  }
};

/***/ }),

/***/ "./components/Partial/Dashboard/Footer.js":
/*!************************************************!*\
  !*** ./components/Partial/Dashboard/Footer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\gav(1)\\components\\Partial\\Dashboard\\Footer.js";





const PublicFooter = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "public-footer ",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "justify-content-center align-items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "4",
          className: "public-footer__left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "public-footer__title",
            children: "XD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "public-footer__tag",
            children: "\xA9 2021 GAV - Todos os direitos reservados."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "2",
          className: "public-footer__middle",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Sobre"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Contato"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Termo de Uso"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "public-footer__social",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFacebookF"], {
              className: "public-footer__social-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Facebook"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "public-footer__social",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiInstagram"], {
              className: "public-footer__social-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Instagram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "public-footer__social",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineTwitter"], {
              className: "public-footer__social-icon mr-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Twitter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "4",
          className: "public-footer__right",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Subscribe to our newsletter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              placeholder: "Email Address",
              "aria-label": "Recipient's username",
              "aria-describedby": "basic-addon2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "ok"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PublicFooter);

/***/ }),

/***/ "./components/Partial/Dashboard/Header.js":
/*!************************************************!*\
  !*** ./components/Partial/Dashboard/Header.js ***!
  \************************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ "react-icons/hi");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "D:\\gav(1)\\components\\Partial\\Dashboard\\Header.js";










const DashboardHeader = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      collapseOnSelect: true,
      expand: "lg",
      className: "w-100 border-bottom mb-3 px-md-3 px-0 py-2 dashboard-header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
        id: "responsive-navbar-nav",
        className: "d-flex flex-row justify-content-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          className: "align-items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__["HiMenuAlt2"], {
            size: "70",
            onClick: openMenu,
            className: "cursor-pointer",
            color: "#0044c8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          className: "ml-lg-auto align-items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "cursor-pointer",
              src: "/images/logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          className: "ml-lg-auto align-items-center custom-dropdown",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
            drop: "down",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
              id: "dropdown-basic",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "header-logo",
                src: "/images/icon/user-icon.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
                href: "/perfil-fornecedor/1124",
                children: "Ver perfil"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
                onSelect: () => Object(next_auth_client__WEBPACK_IMPORTED_MODULE_9__["signOut"])(),
                children: "Sair"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `floating-wrapper ${isOpen ? 'floating-wrapper-open' : ''}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-flex align-items-center flex-column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-3 mb-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__["HiMenuAlt2"], {
            onClick: closeMenu,
            size: "70",
            color: "#fff",
            className: "cursor-pointer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/meus-veiculos",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex align-items-center justify-content-between single-floating-item mb-5 cursor-pointer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "p-0 text-white h2",
              children: "Meus alugu\xE9is"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__["RiCarLine"], {
              size: "40",
              color: "#fff",
              className: "ml-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/listar-carros-disponiveis-fornecedor",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex align-items-center justify-content-between single-floating-item mb-5 cursor-pointer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "p-0 text-white h2",
              children: "Conversas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaRegCommentDots"], {
              size: "40",
              color: "#fff",
              className: "ml-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/registrar-fornecedor-form",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex align-items-center justify-content-between single-floating-item mb-5 cursor-pointer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "p-0 text-white h2",
              children: "Meus dados"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__["RiContactsBookLine"], {
              size: "40",
              color: "#fff",
              className: "ml-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined), isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: closeMenu,
      className: "back-shed"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 23
    }, undefined) : null]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardHeader);
async function getServerSideProps(ctx) {
  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_9__["getSession"])(ctx);
  console.log(session);

  if (!session) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
    return {};
  }
}

/***/ }),

/***/ "./components/SupplierRegistration/PersonalInfo.js":
/*!*********************************************************!*\
  !*** ./components/SupplierRegistration/PersonalInfo.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button/index.js");
/* harmony import */ var _UI_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/TextInput */ "./components/UI/TextInput/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\gav(1)\\components\\SupplierRegistration\\PersonalInfo.js";





const PersonalInfo = ({
  activeStep,
  personalNextClick,
  owner,
  handleOwner,
  processing
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mr-lg-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Nome:",
              name: "nome",
              value: owner.nome,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Email:",
              name: "email",
              value: owner.email,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Celular:",
              name: "celular",
              value: owner.celular,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "CPF/CNPJ:",
              name: "cpf",
              value: owner.cpf,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "CEP:",
              name: "cep",
              value: owner.cep,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Estado:",
              name: "estado",
              value: owner.estado,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Cidade:",
              name: "cidade",
              value: owner.cidade,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Bairro:",
              name: "bairro",
              value: owner.bairro,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Rua:",
              name: "rua",
              value: owner.rua,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ml-lg-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "N\xFAmero:",
              name: "numero",
              value: owner.numero,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Complemento:",
              name: "complemento",
              value: owner.complemento,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mx-lg-5 d-sm-flex d-lg-block ",
            children: [activeStep === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
              title: "Cancelar",
              variant: "secondary",
              className: "w-100 mb-lg-4 mb-sm-0 mr-sm-3 mr-lg-0 next-btn personal-info-r-btn",
              onClick: () => router.push("/")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
              title: "Voltar",
              variant: "secondary",
              className: "w-100 mb-4 next-btn",
              onClick: () => router.push("/")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
              title: "Pr\xF3ximo",
              className: "w-100 next-btn mt-sm-0 mt-3",
              onClick: personalNextClick,
              loading: processing
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PersonalInfo);

/***/ }),

/***/ "./components/SupplierRegistration/UploadPhotos.js":
/*!*********************************************************!*\
  !*** ./components/SupplierRegistration/UploadPhotos.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_Photo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Photo */ "./components/UI/Photo/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_files_createFiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/files/createFiles */ "./api/files/createFiles.js");
/* harmony import */ var _api_owner_updateOwner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/owner/updateOwner */ "./api/owner/updateOwner.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");

var _jsxFileName = "D:\\gav(1)\\components\\SupplierRegistration\\UploadPhotos.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const UploadPhotos = ({
  activeStep,
  uploadBack,
  personalNextClick,
  owner,
  prevOwner
}) => {
  // console.log(owner)
  const {
    0: processing,
    1: setProcessing
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("");
  const {
    0: cnhId,
    1: setCnhId
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: comprovanteId,
    1: setComprovanteId
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: prefilId,
    1: setPrefilId
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: cnhUrl,
    1: setCnhUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: comprovanteUrl,
    1: setComprovanteUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: prefilUrl,
    1: setPrefilUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);

  const onCnhChange = async event => {
    // Update the state 
    const value = event.target.files[0];

    if (value) {
      setCnhUrl(URL.createObjectURL(value));
    }

    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_6__["createFile"])(formData);

    if (res) {
      setCnhId(res.id);
    }
  };

  const onComChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setComprovanteUrl(URL.createObjectURL(value));
    }

    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_6__["createFile"])(formData);

    if (res) {
      setComprovanteId(res.id);
    }
  };

  const onPrefilChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setPrefilUrl(URL.createObjectURL(value));
    }

    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_6__["createFile"])(formData);

    if (res) {
      setPrefilId(res.id);
    }
  };

  const uploadAndNext = async () => {
    setProcessing(true); // Create an object of formData 
    //debugger
    //console.log("-------------", cnhId)

    await Object(_api_owner_updateOwner__WEBPACK_IMPORTED_MODULE_7__["updateOwner"])(_objectSpread(_objectSpread({}, owner), {}, {
      cnhId,
      comprovanteId,
      prefilId
    }), prevOwner);
    Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__["notify"])('success', 'User data updated');
    setProcessing(false);
    personalNextClick();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-lg-0 mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mr-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "CNH/RG:",
            name: "cnh",
            src: cnhUrl,
            id: "cnh",
            onFileChange: onCnhChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-lg-0 mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "Comprovante de resid\xEAncia",
            src: comprovanteUrl,
            id: "comprovante",
            name: "comprovante",
            onFileChange: onComChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-lg-0 mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "Foto de perfil",
            name: "prefil",
            src: prefilUrl,
            id: "prefil",
            onFileChange: onPrefilChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-lg-0 mb-4 upload-photos-top",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ml-lg-3",
          children: [activeStep === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
            title: "Cancelar",
            variant: "secondary",
            className: "w-100 mb-4 next-btn",
            onClick: () => router.push("/")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
            title: "Voltar",
            variant: "secondary",
            className: "w-100 mb-4 next-btn",
            onClick: uploadBack
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
            title: "Pr\xF3ximo",
            className: "w-100 next-btn",
            onClick: uploadAndNext
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UploadPhotos);

/***/ }),

/***/ "./components/SupplierRegistration/UploadVehiclePhotos.js":
/*!****************************************************************!*\
  !*** ./components/SupplierRegistration/UploadVehiclePhotos.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Photo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Photo */ "./components/UI/Photo/index.js");

var _jsxFileName = "D:\\gav(1)\\components\\SupplierRegistration\\UploadVehiclePhotos.js";






const UploadVehiclePhotos = ({
  loadingFrontal,
  frontalUrl,
  onFrontalChange,
  loadingLateralDireita,
  lateralDireitaUrl,
  onLateralDireitaChange,
  loadingLateralEsquerda,
  lateralEsquerdaUrl,
  onLateralEsquerdaChange,
  loadingFundo,
  fundoUrl,
  onFundoChange,
  loadingPainelInterno,
  painelInternoUrl,
  onPainelInternoChange,
  processing,
  activeStep,
  uploadBack,
  uploadCarDetails
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mr-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: "Frontal",
            name: "frontal",
            id: "frontal",
            loading: loadingFrontal,
            src: frontalUrl,
            onFileChange: onFrontalChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: "Lateral Direita",
            name: "lateralDireita",
            loading: loadingLateralDireita,
            id: "lateralDireita",
            src: lateralDireitaUrl,
            onFileChange: onLateralDireitaChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: "Lateral Esquerda",
            name: "lateralEsquerda",
            loading: loadingLateralEsquerda,
            id: "lateralEsquerda",
            src: lateralEsquerdaUrl,
            onFileChange: onLateralEsquerdaChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: "Fundo",
            name: "fundo",
            id: "fundo",
            loading: loadingFundo,
            src: fundoUrl,
            onFileChange: onFundoChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "justify-content-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: "Painel Interno",
            name: "painelInterno",
            id: "painelInterno",
            loading: loadingPainelInterno,
            src: painelInternoUrl,
            onFileChange: onPainelInternoChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        className: "mb-5 mt-lg-5 pt-lg-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: [activeStep === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["UiButton"], {
            title: "Cancelar",
            variant: "secondary",
            className: "w-100 mb-4 next-btn",
            onClick: () => router.push('/')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["UiButton"], {
            title: "Voltar",
            variant: "secondary",
            className: "w-100 mb-4 next-btn",
            onClick: uploadBack
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["UiButton"], {
            title: "Pr\xF3ximo",
            className: "w-100 next-btn",
            loading: processing,
            onClick: uploadCarDetails
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UploadVehiclePhotos);

/***/ }),

/***/ "./components/SupplierRegistration/VehicleDetails.js":
/*!***********************************************************!*\
  !*** ./components/SupplierRegistration/VehicleDetails.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button/index.js");
/* harmony import */ var _UI_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/TextInput */ "./components/UI/TextInput/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_driver_updateDriver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/driver/updateDriver */ "./api/driver/updateDriver.js");
/* harmony import */ var _api_owner_cars_createCar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/owner/cars/createCar */ "./api/owner/cars/createCar.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");

var _jsxFileName = "D:\\gav(1)\\components\\SupplierRegistration\\VehicleDetails.js";









const VehicleDetails = ({
  marca,
  modelo,
  ano,
  placa,
  cep,
  estado,
  cidade,
  rua,
  semana,
  caucao,
  diaria,
  numero,
  complemento,
  bairro,
  cidadeId,
  handleCarInput,
  processing,
  activeStep,
  vehicleNextClick,
  vehicleBack
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 12,
        className: "mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center h5",
          children: "Onde o motorista vai retirar o ve\xEDculo?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        md: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mr-lg-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Marca:",
              name: "marca",
              value: marca,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Modelo:",
              name: "modelo",
              value: modelo,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Ano:",
              name: "ano",
              value: ano,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Placa:",
              name: "placa",
              value: placa,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "h3 font-weight-bold",
            children: "Motorista pode comprar ap\xF3s o contrato?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "custom-radios mt-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                id: "yes",
                name: "color",
                value: "yes",
                checked: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "yes",
                children: "Sim"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                id: "no",
                name: "color",
                value: "no"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "no",
                children: "N\xE3o"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "CEP:",
              name: "cep",
              value: cep,
              handleOwner: handleCarInput,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Estado:",
              name: "estado",
              value: estado,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Cidade:",
              name: "cidade",
              value: cidade,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Rua:",
              name: "rua",
              value: rua,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Complemento:",
              name: "complemento",
              value: complemento,
              handleOwner: handleCarInput,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ml-lg-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Di\xE1ria:",
              name: "diaria",
              value: diaria,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Semana:",
              name: "semana",
              value: semana,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Cau\xE7\xE3o:",
              name: "caucao",
              value: caucao,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mx-lg-5",
            children: [activeStep === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
              title: "Cancelar",
              variant: "secondary",
              className: "w-100 mb-4 next-btn",
              onClick: () => router.push('/')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 19
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
              title: "Voltar",
              variant: "secondary",
              className: "w-100 mb-4 next-btn",
              onClick: vehicleBack
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
              title: "Pr\xF3ximo",
              className: "w-100 next-btn",
              onClick: vehicleNextClick,
              loading: processing
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (VehicleDetails);

/***/ }),

/***/ "./components/UI/Button/index.js":
/*!***************************************!*\
  !*** ./components/UI/Button/index.js ***!
  \***************************************/
/*! exports provided: UiButton, SocialButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiButton", function() { return UiButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialButton", function() { return SocialButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\gav(1)\\components\\UI\\Button\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const UiButton = (_ref) => {
  let {
    title,
    loading,
    size,
    loaderMsg
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["title", "loading", "size", "loaderMsg"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], _objectSpread(_objectSpread({}, rest), {}, {
    children: [title, loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      className: "ml-3 mb-1",
      animation: "border",
      role: "status",
      size: size,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "sr-only",
        children: `${loaderMsg}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};
UiButton.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  loaderMsg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
UiButton.defaultProps = {
  title: "My Button",
  size: "sm",
  variant: "primary",
  loaderMsg: "Loading..."
};
const SocialButton = (_ref2) => {
  let {
    title,
    icon
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["title", "icon"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], _objectSpread(_objectSpread({
    variant: "outline-primary",
    className: "d-flex align-items-center justify-content-between w-100 social-btn px-3 pb-sm-2 pb-0 pt-sm-1 pt-0"
  }, rest), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "social-btn-icon",
      children: icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), title, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};
SocialButton.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
SocialButton.defaultProps = {
  title: "My Social Button"
};

/***/ }),

/***/ "./components/UI/Loader/index.js":
/*!***************************************!*\
  !*** ./components/UI/Loader/index.js ***!
  \***************************************/
/*! exports provided: FullPageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPageLoader", function() { return FullPageLoader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\gav(1)\\components\\UI\\Loader\\index.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const FullPageLoader = (_ref) => {
  let {
    loading,
    animation
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["loading", "animation"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "text-center my-5 py-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      animation: loading ? animation : '',
      role: "status"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};
FullPageLoader.propTypes = {
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
FullPageLoader.defaultProps = {
  animation: 'border'
};

/***/ }),

/***/ "./components/UI/Photo/index.js":
/*!**************************************!*\
  !*** ./components/UI/Photo/index.js ***!
  \**************************************/
/*! exports provided: UploadPhoto, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPhoto", function() { return UploadPhoto; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loader */ "./components/UI/Loader/index.js");

var _jsxFileName = "D:\\gav(1)\\components\\UI\\Photo\\index.js";


const UploadPhoto = ({
  text,
  src,
  name,
  loading,
  id,
  onFileChange
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "upload-photo text-md-left text-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "h4 mb-3",
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
        animation: "border",
        role: "status"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: "cursor-pointer",
      htmlFor: id,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: src ? src : '/images/upload.png',
        className: "img-fluid"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "file",
      id: id,
      name: name,
      onChange: onFileChange,
      style: {
        position: 'absolute',
        left: -100000
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (UploadPhoto);

/***/ }),

/***/ "./components/UI/TextInput/index.js":
/*!******************************************!*\
  !*** ./components/UI/TextInput/index.js ***!
  \******************************************/
/*! exports provided: AuthInput, WizardInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInput", function() { return AuthInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardInput", function() { return WizardInput; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\gav(1)\\components\\UI\\TextInput\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const AuthInput = ({
  label,
  type,
  name,
  value,
  onChange
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "auth-input-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      autoComplete: "off",
      name: name,
      type: type,
      required: true,
      value: value,
      onChange: event => onChange(event)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "text",
      className: "auth-input-label-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "auth-input-label-name",
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};
AuthInput.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
AuthInput.defaultProps = {
  type: 'text'
};
const WizardInput = (_ref) => {
  let {
    label,
    type,
    value,
    name,
    handleOwner
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["label", "type", "value", "name", "handleOwner"]);

  //console.log("props = ", label, type,value, handleOwner )
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "reg-form-input d-xl-flex justify-content-between",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: "d-lg-inline-block d-block",
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
      type: type,
      value: value,
      name: name,
      onChange: e => handleOwner(e)
    }, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined);
};
WizardInput.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
WizardInput.defaultProps = {
  type: 'text'
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

/***/ "./constants/owner.js":
/*!****************************!*\
  !*** ./constants/owner.js ***!
  \****************************/
/*! exports provided: OWNER_LIST_OF_CARS_REQUEST, OWNER_LIST_OF_CARS_SUCCESS, OWNER_LIST_OF_CARS_FAIL, OWNER_RECOVER_OWNER_REQUEST, OWNER_RECOVER_OWNER_SUCCESS, OWNER_RECOVER_OWNER_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER_LIST_OF_CARS_REQUEST", function() { return OWNER_LIST_OF_CARS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER_LIST_OF_CARS_SUCCESS", function() { return OWNER_LIST_OF_CARS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER_LIST_OF_CARS_FAIL", function() { return OWNER_LIST_OF_CARS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER_RECOVER_OWNER_REQUEST", function() { return OWNER_RECOVER_OWNER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER_RECOVER_OWNER_SUCCESS", function() { return OWNER_RECOVER_OWNER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER_RECOVER_OWNER_FAIL", function() { return OWNER_RECOVER_OWNER_FAIL; });
const OWNER_LIST_OF_CARS_REQUEST = 'OWNER_LIST_OF_CARS_REQUEST';
const OWNER_LIST_OF_CARS_SUCCESS = 'OWNER_LIST_OF_CARS_SUCCESS';
const OWNER_LIST_OF_CARS_FAIL = 'OWNER_LIST_OF_CARS_FAIL';
const OWNER_RECOVER_OWNER_REQUEST = 'OWNER_RECOVER_OWNER_REQUEST';
const OWNER_RECOVER_OWNER_SUCCESS = 'OWNER_RECOVER_OWNER_SUCCESS';
const OWNER_RECOVER_OWNER_FAIL = 'OWNER_RECOVER_OWNER_FAIL';

/***/ }),

/***/ "./layouts/Dashboard/index.js":
/*!************************************!*\
  !*** ./layouts/Dashboard/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Partial_Dashboard_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Partial/Dashboard/Header */ "./components/Partial/Dashboard/Header.js");
/* harmony import */ var _components_Partial_Dashboard_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Partial/Dashboard/Footer */ "./components/Partial/Dashboard/Footer.js");
/* harmony import */ var _utils_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/withAuth */ "./utils/withAuth.js");


var _jsxFileName = "D:\\gav(1)\\layouts\\Dashboard\\index.js";





const DashboardLayout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Partial_Dashboard_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(DashboardLayout));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/registrar-fornecedor-form/index.js":
/*!**************************************************!*\
  !*** ./pages/registrar-fornecedor-form/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/Dashboard */ "./layouts/Dashboard/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SupplierRegistration_PersonalInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SupplierRegistration/PersonalInfo */ "./components/SupplierRegistration/PersonalInfo.js");
/* harmony import */ var _components_SupplierRegistration_UploadPhotos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SupplierRegistration/UploadPhotos */ "./components/SupplierRegistration/UploadPhotos.js");
/* harmony import */ var _components_SupplierRegistration_VehicleDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SupplierRegistration/VehicleDetails */ "./components/SupplierRegistration/VehicleDetails.js");
/* harmony import */ var _components_SupplierRegistration_UploadVehiclePhotos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SupplierRegistration/UploadVehiclePhotos */ "./components/SupplierRegistration/UploadVehiclePhotos.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/providers */ "./utils/providers.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_owner_recoverOwner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api/owner/recoverOwner */ "./api/owner/recoverOwner.js");
/* harmony import */ var _api_driver_updateDriver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../api/driver/updateDriver */ "./api/driver/updateDriver.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");
/* harmony import */ var _components_UI_Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/UI/Loader */ "./components/UI/Loader/index.js");
/* harmony import */ var _api_files_createFiles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../api/files/createFiles */ "./api/files/createFiles.js");
/* harmony import */ var _api_owner_cars_createCar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../api/owner/cars/createCar */ "./api/owner/cars/createCar.js");

var _jsxFileName = "D:\\gav(1)\\pages\\registrar-fornecedor-form\\index.js";

















const SupplierRegistrationForm = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: owner,
    1: setOwner
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  const {
    0: activeStep,
    1: setActiveStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    0: nome,
    1: setnome
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: email,
    1: setemail
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: celular,
    1: setcelular
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: cpf,
    1: setcpf
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: cep,
    1: setcep
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: estado,
    1: setestado
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: bairro,
    1: setbairro
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: rua,
    1: setrua
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: numero,
    1: setnumero
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: cidade,
    1: setcidade
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: complemento,
    1: setcomplemento
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: cidadeId,
    1: setCidadeId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: processing,
    1: setProcessing
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: marcaCar,
    1: setMarcaCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("aa");
  const {
    0: modeloCar,
    1: setModeloCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: anoCar,
    1: setAnoCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("2021");
  const {
    0: placaCar,
    1: setPlacaCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: cepCar,
    1: setCepCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: estadoCar,
    1: setEstadoCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: cidadeCar,
    1: setCidadeCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: ruaCar,
    1: setRuaCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: semanaCar,
    1: setSemanaCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: caucaoCar,
    1: setCaucaoCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: diariaCar,
    1: setDiariaCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: numeroCar,
    1: setNumeroCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: complementoCar,
    1: setComplementoCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: bairroCar,
    1: setBairroCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: cidadeIdCar,
    1: setCidadeIdCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: frontalId,
    1: setFrontalId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: frontalUrl,
    1: setFrontalUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: loadingFrontal,
    1: setLoadingFrontal
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: lateralDireitaId,
    1: setLateralDireitaId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: lateralDireitaUrl,
    1: setLateralDireitaUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: loadingLateralDireita,
    1: setLoadingLateralDireita
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: lateralEsquerdaId,
    1: setLateralEsquerdaId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: lateralEsquerdaUrl,
    1: setLateralEsquerdaUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: loadingLateralEsquerda,
    1: setLoadingLateralEsquerda
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: fundoId,
    1: setFundoId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: fundoUrl,
    1: setFundoUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: loadingFundo,
    1: setLoadingFundo
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: painelInternoId,
    1: setPainelInternoId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: painelInternoUrl,
    1: setPainelInternoUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: loadingPainelInterno,
    1: setLoadingPainelInterno
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: carProcessing,
    1: setCarProcessing
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(async () => {
    setLoading(true);
    const data = await Object(_api_owner_recoverOwner__WEBPACK_IMPORTED_MODULE_10__["recoverOwner"])({}, () => {
      setLoading(false);
    });

    if (data) {
      console.log(data);
      setOwner(data);
      setnome(data.nome);
      setemail(data.email);
      setcelular(data.celular);

      if (data.pessoa_fisica && data.pessoa_fisica.cpf) {
        setcpf(data.pessoa_fisica.cpf);
      }

      if (data.endereco.length) {
        const addr = data.endereco[0];

        if (addr.cidade && addr.cidade.descricao) {
          setcidade(addr.cidade.descricao);
          setCidadeId(addr.cidade.id);
        }

        if (addr.cidade && addr.cidade.estado && addr.cidade.estado.descricao) {
          setestado(addr.cidade.estado.descricao);
        }

        if (addr.cep) {
          setcep(addr.cep);
        }

        if (addr.bairro) {
          setbairro(addr.bairro);
        }

        if (addr.logradouro) {
          setrua(addr.logradouro);
        }

        if (addr.numero) {
          setnumero(addr.numero);
        }

        if (addr.complemento) {
          setcomplemento(addr.complemento);
        }
      }
    }

    if (router.query && router.query.step) {
      setActiveStep(parseInt(router.query.step));
    } else {
      setActiveStep(2);
    }
  }, []);

  const handleOwner = async e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "nome":
        setnome(value);
        break;

      case "email":
        setemail(value);
        break;

      case "celular":
        setcelular(value);
        break;

      case "cpf":
        setcpf(value);
        break;

      case "cep":
        console.log("value = ", value);
        setcep(value);
        setLoading(true);
        const addr = await Object(_api_driver_updateDriver__WEBPACK_IMPORTED_MODULE_11__["getCep"])(value);

        if (addr) {
          console.log("add = ", addr);
          setbairro(addr.bairro);
          setrua(addr.logradouro);
          setcidade(addr.cidade.descricao);
          setestado(addr.cidade.estado.descricao);
          setCidadeId(addr.cidade.id);
        }

        setLoading(false);
        break;

      case "estado":
        setestado(value);
        break;

      case "bairro":
        setbairro(value);
        break;

      case "rua":
        setrua(value);
        break;

      case "cidade":
        setcidade(value);
        break;

      case "numero":
        setnumero(value);
        break;

      case "complemento":
        setcomplemento(value);
        break;
    }
  };

  const handleCarInput = async e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "marca":
        setMarcaCar(value);
        break;

      case "modelo":
        setModeloCar(value);
        break;

      case "ano":
        setAnoCar(value);
        break;

      case "placa":
        setPlacaCar(value);
        break;

      case "cep":
        console.log("value = ", value);
        setCepCar(value);
        const addr = await Object(_api_driver_updateDriver__WEBPACK_IMPORTED_MODULE_11__["getCep"])(value);

        if (addr) {
          console.log("add = ", addr);
          setBairroCar(addr.bairro);
          setRuaCar(addr.logradouro);
          setCidadeCar(addr.cidade.descricao);
          setEstadoCar(addr.cidade.estado.descricao);
          setCidadeIdCar(addr.cidade.id);
        }

        break;

      case "estado":
        setEstadoCar(value);
        break;

      case "rua":
        setRuaCar(value);
        break;

      case "numero":
        setNumeroCar(value);
        break;

      case "complemento":
        setComplementoCar(value);
        break;

      case "semana":
        setSemanaCar(value);
        break;

      case "caucao":
        setCaucaoCar(value);
        break;

      case "diaria":
        setDiariaCar(value);
        break;

      case "cidade":
        setCidadeCar(value);
        break;
    }
  };

  const onFrontalChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setFrontalUrl(URL.createObjectURL(value));
    }

    setLoadingFrontal(true);
    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_15__["createFile"])(formData);
    setLoadingFrontal(false);

    if (res) {
      setFrontalId(res.id);
    }
  };

  const onLateralDireitaChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setLateralDireitaUrl(URL.createObjectURL(value));
    }

    setLoadingLateralDireita(true);
    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_15__["createFile"])(formData);
    setLoadingLateralDireita(false);

    if (res) {
      setLateralDireitaId(res.id);
    }
  };

  const onLateralEsquerdaChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setLateralEsquerdaUrl(URL.createObjectURL(value));
    }

    setLoadingLateralEsquerda(true);
    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_15__["createFile"])(formData);
    setLoadingLateralEsquerda(false);

    if (res) {
      setLateralEsquerdaId(res.id);
    }
  };

  const onFundoChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setFundoUrl(URL.createObjectURL(value));
    }

    setLoadingFundo(true);
    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_15__["createFile"])(formData);
    setLoadingFundo(false);

    if (res) {
      setFundoId(res.id);
    }
  };

  const onPainelInternoChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setPainelInternoUrl(URL.createObjectURL(value));
    }

    setLoadingPainelInterno(true);
    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_15__["createFile"])(formData);
    setLoadingPainelInterno(false);

    if (res) {
      setPainelInternoId(res.id);
    }
  };

  const vehicleNextClick = () => {
    if (!marcaCar || !modeloCar || !anoCar || !placaCar || !cepCar || !estadoCar || !cidadeCar || !ruaCar || !semanaCar || !caucaoCar) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["notify"])('error', 'Please check the input fields');
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };

  const uploadCarDetails = async () => {
    console.log('hi'); //debugger

    setCarProcessing(true);
    const data = await Object(_api_owner_cars_createCar__WEBPACK_IMPORTED_MODULE_16__["createCar"])({
      marcaCar,
      modeloCar,
      anoCar,
      placaCar,
      cepCar,
      estadoCar,
      cidadeCar,
      ruaCar,
      semanaCar,
      caucaoCar,
      diariaCar,
      numeroCar,
      complementoCar,
      bairroCar,
      cidadeIdCar,
      frontalId,
      lateralDireitaId,
      lateralEsquerdaId,
      fundoId,
      painelInternoId
    });

    if (data) {
      console.log("updated data", data);
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["notify"])('success', 'Car added successfully');
    }

    setCarProcessing(false); // setActiveStep(prevActiveStep => prevActiveStep + 1)
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SupplierRegistration_PersonalInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
          activeStep: activeStep,
          owner: {
            nome,
            email,
            celular,
            cpf,
            cep,
            estado,
            bairro,
            rua,
            numero,
            cidade,
            complemento,
            cidadeId
          },
          handleOwner: handleOwner,
          personalNextClick: () => setActiveStep(prevActiveStep => prevActiveStep + 1),
          processing: processing
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 16
        }, undefined);

      case 1:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SupplierRegistration_UploadPhotos__WEBPACK_IMPORTED_MODULE_4__["default"], {
          activeStep: activeStep,
          owner: {
            nome,
            email,
            celular,
            cpf,
            cep,
            estado,
            bairro,
            rua,
            numero,
            cidade,
            complemento,
            cidadeId
          },
          prevOwner: owner,
          personalNextClick: () => setActiveStep(prevActiveStep => prevActiveStep + 1),
          uploadBack: () => setActiveStep(prevActiveStep => prevActiveStep - 1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 16
        }, undefined);

      case 2:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SupplierRegistration_VehicleDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
          marca: marcaCar,
          modelo: modeloCar,
          ano: anoCar,
          placa: placaCar,
          cep: cepCar,
          estado: estadoCar,
          cidade: cidadeCar,
          rua: ruaCar,
          semana: semanaCar,
          caucao: caucaoCar,
          diaria: diariaCar,
          numero: numeroCar,
          complemento: complementoCar,
          bairro: bairroCar,
          cidadeId: cidadeIdCar,
          activeStep: activeStep,
          handleCarInput: handleCarInput,
          vehicleNextClick: vehicleNextClick,
          vehicleBack: () => setActiveStep(prevActiveStep => prevActiveStep - 1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 16
        }, undefined);

      case 3:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SupplierRegistration_UploadVehiclePhotos__WEBPACK_IMPORTED_MODULE_6__["default"], {
          loadingFrontal: loadingFrontal,
          frontalUrl: frontalUrl,
          onFrontalChange: onFrontalChange,
          loadingLateralDireita: loadingLateralDireita,
          lateralDireitaUrl: lateralDireitaUrl,
          onLateralDireitaChange: onLateralDireitaChange,
          loadingLateralEsquerda: loadingLateralEsquerda,
          lateralEsquerdaUrl: lateralEsquerdaUrl,
          onLateralEsquerdaChange: onLateralEsquerdaChange,
          loadingFundo: loadingFundo,
          fundoUrl: fundoUrl,
          onFundoChange: onFundoChange,
          loadingPainelInterno: loadingPainelInterno,
          painelInternoUrl: painelInternoUrl,
          onPainelInternoChange: onPainelInternoChange,
          activeStep: activeStep,
          personalNextClick: () => setActiveStep(prevActiveStep => prevActiveStep + 1),
          uploadBack: () => setActiveStep(prevActiveStep => prevActiveStep - 1),
          processing: carProcessing,
          uploadCarDetails: uploadCarDetails
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 16
        }, undefined);

      default:
        return null;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loader__WEBPACK_IMPORTED_MODULE_14__["FullPageLoader"], {
      loading: isLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 21
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "supplier-reg-area mb-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_9__["ToastContainer"], {
        style: {
          zIndex: 99999
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-primary mb-3",
        children: activeStep === 0 ? 'Meus dados' : activeStep === 1 ? 'Upload Fotos' : activeStep === 2 ? 'Dados do Veículo' : activeStep === 3 && 'Fotos do Veículo'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "-12 d-flex justify-content-between mb-5 pb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: `reg-step-btn ${activeStep === 0 ? 'reg-step-btn-active' : activeStep > 0 ? 'reg-step-btn-done' : ''}`,
          onClick: () => setActiveStep(0),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "reg-step-header"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 477,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Dados Pessoais"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 478,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          disabled: activeStep === 0 ? true : false,
          className: `reg-step-btn ${activeStep === 1 ? 'reg-step-btn-active' : activeStep > 1 ? 'reg-step-btn-done' : ''}`,
          onClick: () => setActiveStep(1),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "reg-step-header"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 484,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Upload Fotos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 485,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: `reg-step-btn ${activeStep === 2 ? 'reg-step-btn-active' : activeStep > 2 ? 'reg-step-btn-done' : ''}`,
          onClick: () => setActiveStep(2),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "reg-step-header"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 490,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Dados do Ve\xEDculo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 491,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          disabled: activeStep === 0 || 2 ? true : false,
          className: `reg-step-btn ${activeStep === 3 ? 'reg-step-btn-active' : activeStep > 3 ? 'reg-step-btn-done' : ''}`,
          onClick: () => setActiveStep(3),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "reg-step-header"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 497,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Fotos do Ve\xEDculo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 498,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 13
      }, undefined), getStepContent(activeStep)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 461,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SupplierRegistrationForm);

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

/***/ "./utils/withAuth.js":
/*!***************************!*\
  !*** ./utils/withAuth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\gav(1)\\utils\\withAuth.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const withAuth = WrappedComponent => {
  return props => {
    const Router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
    const {
      0: verified,
      1: setVerified
    } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(async () => {
      const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])();

      if (session) {
        setVerified(true);
      } else {
        Router.replace("/login");
      }
    }, []);

    if (verified) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WrappedComponent, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 20
      }, undefined);
    } else {
      return null;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

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

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/hi":
/*!*********************************!*\
  !*** external "react-icons/hi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/hi");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9hcGkvY2FkYXN0cm8vY2FwdGFzYW8vY3JlYXRlUGVyc29uLmpzIiwid2VicGFjazovLy8uL2FwaS9kcml2ZXIvdXBkYXRlRHJpdmVyLmpzIiwid2VicGFjazovLy8uL2FwaS9maWxlcy9jcmVhdGVGaWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvb3duZXIvY2Fycy9jcmVhdGVDYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBpL293bmVyL3JlY292ZXJPd25lci5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvb3duZXIvdXBkYXRlT3duZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJ0aWFsL0Rhc2hib2FyZC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJ0aWFsL0Rhc2hib2FyZC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdXBwbGllclJlZ2lzdHJhdGlvbi9QZXJzb25hbEluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdXBwbGllclJlZ2lzdHJhdGlvbi9VcGxvYWRQaG90b3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdXBwbGllclJlZ2lzdHJhdGlvbi9VcGxvYWRWZWhpY2xlUGhvdG9zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3VwcGxpZXJSZWdpc3RyYXRpb24vVmVoaWNsZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9QaG90by9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL1RleHRJbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL293bmVyLmpzIiwid2VicGFjazovLy8uL2xheW91dHMvRGFzaGJvYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3RyYXItZm9ybmVjZWRvci1mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wcm92aWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy93aXRoQXV0aC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2hpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvcmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJjcmVhdGVQZXJzb24iLCJlbWFpbCIsImNlbHVsYXIiLCJub21lIiwic2VuaGEiLCJwZXNzb2FfY2FkYXN0cm9faWQiLCJwZXNzb2FfdGlwb19pZCIsImNiIiwiYm9keSIsInBlc3NvYV9maXNpY2EiLCJwZXNzb2FfanVyaWRpY2EiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhIiwiaHR0cFJlcXVlc3QiLCJwb3N0IiwiY29uZmlnIiwiYmFzZVVybCIsIm5vdGlmeSIsImVycm9yIiwiZXJyIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJ1cGRhdGVEcml2ZXIiLCJuZXdEYXRhIiwib2JqIiwiY3BmIiwiZW5kZXJlY28iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInJ1YSIsImNlcCIsIm51bWVybyIsImNvbXBsZW1lbnRvIiwiYmFpcnJvIiwiY2lkYWRlSWQiLCJwZXNzb2FfYXJxdWl2b3MiLCJjbmhJZCIsInB1c2giLCJhcnF1aXZvX2lkIiwicGVzc29hX2FycXVpdm9fdGlwb19pZCIsInNlZ3VyYW5kb0lkIiwiY29tcHJvdmFudGVJZCIsInJnSWQiLCJ0ZWxlZm9uZSIsInBlc3NvYV9zdGF0dXNfaWQiLCJyZWNlYmVfdmlhX2FkbWluaXN0cmFkb3IiLCJjYXJyb3MiLCJjb250YV9iYW5jYXJpYSIsImxlbmd0aCIsInByZWZpbElkIiwiZm90b19wZXJmaWxfYXJxdWl2b19pZCIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsInRva2VuIiwiYWNjZXNzX3Rva2VuIiwicGF0Y2giLCJtZXNzYWdlIiwiZ2V0Q2VwIiwiZ2V0IiwiY3JlYXRlRmlsZSIsImZvcm1EYXRhIiwiZGVmYXVsdE9wdGlvbnMiLCJoZWFkZXJzIiwiT2JqZWN0IiwiYXNzaWduIiwiQXV0aG9yaXphdGlvbiIsInJlcyIsImF4aW9zIiwiY3JlYXRlQ2FyIiwiZW5kZXJlY29fcmV0aXJhZGFfcHJpbmNpcGFsIiwicnVhQ2FyIiwiY2VwQ2FyIiwibnVtZXJvQ2FyIiwiY29tcGxlbWVudG9DYXIiLCJiYWlycm9DYXIiLCJjaWRhZGVJZENhciIsImFycXVpdm9zIiwiZnJvbnRhbElkIiwiY2Fycm9fYXJxdWl2b190aXBvX2lkIiwicG9zaXRpb24iLCJsYXRlcmFsRGlyZWl0YUlkIiwibGF0ZXJhbEVzcXVlcmRhSWQiLCJmdW5kb0lkIiwicGFpbmVsSW50ZXJub0lkIiwibW9kZWwiLCJkZXNjcmlwdGlvbiIsIm1vZGVsbyIsImJyYW5kIiwibWFyY2EiLCJhbm8iLCJhbm9DYXIiLCJwbGFjYSIsInBsYWNhQ2FyIiwicmVjb3Zlck93bmVyIiwicXVlcnlQYXJhbXNPYmoiLCJjYWxsYmFjayIsInVwZGF0ZU93bmVyIiwiUHVibGljRm9vdGVyIiwiRGFzaGJvYXJkSGVhZGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJzaWduT3V0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4Iiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJQZXJzb25hbEluZm8iLCJhY3RpdmVTdGVwIiwicGVyc29uYWxOZXh0Q2xpY2siLCJvd25lciIsImhhbmRsZU93bmVyIiwicHJvY2Vzc2luZyIsImVzdGFkbyIsImNpZGFkZSIsIlVwbG9hZFBob3RvcyIsInVwbG9hZEJhY2siLCJwcmV2T3duZXIiLCJzZXRQcm9jZXNzaW5nIiwic2V0Q25oSWQiLCJzZXRDb21wcm92YW50ZUlkIiwic2V0UHJlZmlsSWQiLCJjbmhVcmwiLCJzZXRDbmhVcmwiLCJjb21wcm92YW50ZVVybCIsInNldENvbXByb3ZhbnRlVXJsIiwicHJlZmlsVXJsIiwic2V0UHJlZmlsVXJsIiwib25DbmhDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJGb3JtRGF0YSIsImFwcGVuZCIsImlkIiwib25Db21DaGFuZ2UiLCJvblByZWZpbENoYW5nZSIsInVwbG9hZEFuZE5leHQiLCJVcGxvYWRWZWhpY2xlUGhvdG9zIiwibG9hZGluZ0Zyb250YWwiLCJmcm9udGFsVXJsIiwib25Gcm9udGFsQ2hhbmdlIiwibG9hZGluZ0xhdGVyYWxEaXJlaXRhIiwibGF0ZXJhbERpcmVpdGFVcmwiLCJvbkxhdGVyYWxEaXJlaXRhQ2hhbmdlIiwibG9hZGluZ0xhdGVyYWxFc3F1ZXJkYSIsImxhdGVyYWxFc3F1ZXJkYVVybCIsIm9uTGF0ZXJhbEVzcXVlcmRhQ2hhbmdlIiwibG9hZGluZ0Z1bmRvIiwiZnVuZG9VcmwiLCJvbkZ1bmRvQ2hhbmdlIiwibG9hZGluZ1BhaW5lbEludGVybm8iLCJwYWluZWxJbnRlcm5vVXJsIiwib25QYWluZWxJbnRlcm5vQ2hhbmdlIiwidXBsb2FkQ2FyRGV0YWlscyIsIlZlaGljbGVEZXRhaWxzIiwic2VtYW5hIiwiY2F1Y2FvIiwiZGlhcmlhIiwiaGFuZGxlQ2FySW5wdXQiLCJ2ZWhpY2xlTmV4dENsaWNrIiwidmVoaWNsZUJhY2siLCJVaUJ1dHRvbiIsInRpdGxlIiwibG9hZGluZyIsInNpemUiLCJsb2FkZXJNc2ciLCJyZXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsInZhcmlhbnQiLCJTb2NpYWxCdXR0b24iLCJpY29uIiwibm9kZSIsIkZ1bGxQYWdlTG9hZGVyIiwiYW5pbWF0aW9uIiwiaXNSZXF1aXJlZCIsIlVwbG9hZFBob3RvIiwidGV4dCIsInNyYyIsIm5hbWUiLCJvbkZpbGVDaGFuZ2UiLCJsZWZ0IiwiQXV0aElucHV0IiwibGFiZWwiLCJ0eXBlIiwib25DaGFuZ2UiLCJXaXphcmRJbnB1dCIsImUiLCJERVZFTE9QTUVOVCIsIm5leHRBdXRoVXJsIiwicHJvY2VzcyIsImdyYW50VHlwZSIsImJhc2ljQXV0aFRva2VuIiwiR0FWX0NMSUVOVF9TRUNSRVQiLCJHQVZfQ0xJRU5UX0lEIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiRkFDRUJPT0tfQ0xJRU5UX0lEIiwiRkFDRUJPT0tfQ0xJRU5UX1NFQ1JFVCIsIk9XTkVSX0xJU1RfT0ZfQ0FSU19SRVFVRVNUIiwiT1dORVJfTElTVF9PRl9DQVJTX1NVQ0NFU1MiLCJPV05FUl9MSVNUX09GX0NBUlNfRkFJTCIsIk9XTkVSX1JFQ09WRVJfT1dORVJfUkVRVUVTVCIsIk9XTkVSX1JFQ09WRVJfT1dORVJfU1VDQ0VTUyIsIk9XTkVSX1JFQ09WRVJfT1dORVJfRkFJTCIsIkRhc2hib2FyZExheW91dCIsImNoaWxkcmVuIiwid2l0aEF1dGgiLCJwcmVmZXRjaGVkIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwicGFnZSIsInBhcnNlZEhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwibWV0aG9kIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJTdXBwbGllclJlZ2lzdHJhdGlvbkZvcm0iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0T3duZXIiLCJzZXRBY3RpdmVTdGVwIiwic2V0bm9tZSIsInNldGVtYWlsIiwic2V0Y2VsdWxhciIsInNldGNwZiIsInNldGNlcCIsInNldGVzdGFkbyIsInNldGJhaXJybyIsInNldHJ1YSIsInNldG51bWVybyIsInNldGNpZGFkZSIsInNldGNvbXBsZW1lbnRvIiwic2V0Q2lkYWRlSWQiLCJtYXJjYUNhciIsInNldE1hcmNhQ2FyIiwibW9kZWxvQ2FyIiwic2V0TW9kZWxvQ2FyIiwic2V0QW5vQ2FyIiwic2V0UGxhY2FDYXIiLCJzZXRDZXBDYXIiLCJlc3RhZG9DYXIiLCJzZXRFc3RhZG9DYXIiLCJjaWRhZGVDYXIiLCJzZXRDaWRhZGVDYXIiLCJzZXRSdWFDYXIiLCJzZW1hbmFDYXIiLCJzZXRTZW1hbmFDYXIiLCJjYXVjYW9DYXIiLCJzZXRDYXVjYW9DYXIiLCJkaWFyaWFDYXIiLCJzZXREaWFyaWFDYXIiLCJzZXROdW1lcm9DYXIiLCJzZXRDb21wbGVtZW50b0NhciIsInNldEJhaXJyb0NhciIsInNldENpZGFkZUlkQ2FyIiwic2V0RnJvbnRhbElkIiwic2V0RnJvbnRhbFVybCIsInNldExvYWRpbmdGcm9udGFsIiwic2V0TGF0ZXJhbERpcmVpdGFJZCIsInNldExhdGVyYWxEaXJlaXRhVXJsIiwic2V0TG9hZGluZ0xhdGVyYWxEaXJlaXRhIiwic2V0TGF0ZXJhbEVzcXVlcmRhSWQiLCJzZXRMYXRlcmFsRXNxdWVyZGFVcmwiLCJzZXRMb2FkaW5nTGF0ZXJhbEVzcXVlcmRhIiwic2V0RnVuZG9JZCIsInNldEZ1bmRvVXJsIiwic2V0TG9hZGluZ0Z1bmRvIiwic2V0UGFpbmVsSW50ZXJub0lkIiwic2V0UGFpbmVsSW50ZXJub1VybCIsInNldExvYWRpbmdQYWluZWxJbnRlcm5vIiwiY2FyUHJvY2Vzc2luZyIsInNldENhclByb2Nlc3NpbmciLCJ1c2VFZmZlY3QiLCJhZGRyIiwiZGVzY3JpY2FvIiwibG9ncmFkb3VybyIsInN0ZXAiLCJwcmV2QWN0aXZlU3RlcCIsImdldFN0ZXBDb250ZW50IiwiekluZGV4IiwidG9hc3QiLCJzdHlsZSIsImZvbnRTaXplIiwid2FybmluZyIsInVzZUlucHV0IiwiaW5pdGlhbFZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJyYXRpbmdEYXRlIiwiZGF0ZSIsIm1vbWVudCIsInV0YyIsImxvY2FsIiwiZm9ybWF0IiwiZG9tYWluIiwiZ2F2UHJvdmlkZXIiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImdyYW50X3R5cGUiLCJnZXRUb2tlbiIsInNjb3BlIiwiY2xpZW50X2lkIiwiY2xpZW50X3NlY3JldCIsInRva2VucyIsImdldE1lIiwibWUiLCJBY2NlcHQiLCJjbGllbnQiLCJ0b2tlbk5lZWQiLCJwdXQiLCJkZWxldGUiLCJXcmFwcGVkQ29tcG9uZW50IiwidmVyaWZpZWQiLCJzZXRWZXJpZmllZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDQTtBQUlPLE1BQU1BLFlBQVksR0FBRyxPQUFPQyxLQUFQLEVBQWNDLE9BQWQsRUFBdUJDLElBQXZCLEVBQTZCQyxLQUE3QixFQUFvQ0Msa0JBQXBD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QUFzQnhhLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPLElBQVA7QUFDSDtBQUNKLEdBbEJEO0FBbUJILENBcEJEOztBQXFCZWxCLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDekJBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3JlZ2lzdHJhci1mb3JuZWNlZG9yLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3JlZ2lzdHJhci1mb3JuZWNlZG9yLWZvcm0vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiXG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3JlcXVlc3RcIlxuLy9pbXBvcnQgZ2V0SXRlbSBmcm9tICcuLi8uLi8uLi91dGlscy9sb2NhbFN0cm9hZ2VBY2Nlc3MnXG5pbXBvcnQgeyBub3RpZnksIHVzZUlucHV0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvbW1vblwiXG5cblxuXG5leHBvcnQgY29uc3QgY3JlYXRlUGVyc29uID0gYXN5bmMgKGVtYWlsLCBjZWx1bGFyLCBub21lLCBzZW5oYSwgcGVzc29hX2NhZGFzdHJvX2lkLCBwZXNzb2FfdGlwb19pZCwgY2IpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgY2VsdWxhcjogY2VsdWxhcixcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgIHBlc3NvYV90aXBvX2lkOiBwZXNzb2FfdGlwb19pZCxcbiAgICAgICAgICAgIHBlc3NvYV9jYWRhc3Ryb19pZDogcGVzc29hX2NhZGFzdHJvX2lkLFxuICAgICAgICAgICAgcGVzc29hX2Zpc2ljYToge1xuICAgICAgICAgICAgICAgIG5vbWU6IG5vbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwZXNzb2FfanVyaWRpY2E6IHtcbiAgICAgICAgICAgICAgICBub21lOiBub21lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBzZW5oYSxcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWxcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBodHRwUmVxdWVzdC5wb3N0KFxuICAgICAgICAgICAgYCR7Y29uZmlnLmJhc2VVcmx9L2FwaS9jYXB0YWNhby9wZXNzb2FzYCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIGJvZHlcbiAgICAgICAgKVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKVxuICAgICAgICBub3RpZnkoJ3N1Y2Nlc3MnLCBcIlN1Y2Nlc3NmdWxseSBDcmVhdGVkXCIpXG4gICAgICAgIGNiKClcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjYigpXG4gICAgICAgIGxldCBlcnIgPSBcIlwiXG4gICAgICAgIGlmKFwidXNlci5lbWFpbFwiIGluIGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzICl7XG4gICAgICAgICAgICBlcnIgKz0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbXCJ1c2VyLmVtYWlsXCJdWzBdXG4gICAgICAgIH1cblxuICAgICAgICBpZihcInVzZXIucGFzc3dvcmRcIiBpbiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyApe1xuICAgICAgICAgICAgZXJyICs9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzW1widXNlci5wYXNzd29yZFwiXVswXVxuICAgICAgICB9XG4gICAgICAgIG5vdGlmeShcImVycm9yXCIsIGVycilcbiAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycylcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59IiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi4vLi4vdXRpbHMvcmVxdWVzdFwiXG5pbXBvcnQgeyBub3RpZnksIHVzZUlucHV0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vblwiXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEcml2ZXIgPSBhc3luYyAobmV3RGF0YSwgb2JqKSA9PiB7XG4gICAgdHJ5IHtcblxuICAgICAgICBjb25zdCBwZXNzb2FfZmlzaWNhID0geyAuLi5vYmoucGVzc29hX2Zpc2ljYSwgY3BmOiBuZXdEYXRhLmNwZiwgbm9tZTogbmV3RGF0YS5ub21lIH1cbiAgICAgICAgY29uc3QgZW5kZXJlY28gPSBbe1xuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiBvYmoubGF0aXR1ZGUsXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiBvYmoubG9uZ2l0dWRlLFxuICAgICAgICAgICAgXCJsb2dyYWRvdXJvXCI6IG5ld0RhdGEucnVhLFxuICAgICAgICAgICAgXCJjZXBcIjogbmV3RGF0YS5jZXAsXG4gICAgICAgICAgICBcIm51bWVyb1wiOiBuZXdEYXRhLm51bWVybyxcbiAgICAgICAgICAgIFwiY29tcGxlbWVudG9cIjogbmV3RGF0YS5jb21wbGVtZW50byxcbiAgICAgICAgICAgIFwiYmFpcnJvXCI6IG5ld0RhdGEuYmFpcnJvLFxuICAgICAgICAgICAgXCJjaWRhZGVfaWRcIjogbmV3RGF0YS5jaWRhZGVJZFxuICAgICAgICB9XVxuXG4gICAgICAgIGxldCBwZXNzb2FfYXJxdWl2b3MgPSBbXVxuXG4gICAgICAgIGlmIChvYmoucGVzc29hX2FycXVpdm9zKSB7XG4gICAgICAgICAgICBwZXNzb2FfYXJxdWl2b3MgPSBbLi4ub2JqLnBlc3NvYV9hcnF1aXZvc11cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdEYXRhLmNuaElkKSB7XG4gICAgICAgICAgICBwZXNzb2FfYXJxdWl2b3MucHVzaCh7IGFycXVpdm9faWQ6IG5ld0RhdGEuY25oSWQsIHBlc3NvYV9hcnF1aXZvX3RpcG9faWQ6IDEgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3RGF0YS5zZWd1cmFuZG9JZCkge1xuICAgICAgICAgICAgcGVzc29hX2FycXVpdm9zLnB1c2goe2FycXVpdm9faWQ6IG5ld0RhdGEuc2VndXJhbmRvSWQsIHBlc3NvYV9hcnF1aXZvX3RpcG9faWQ6IDIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdEYXRhLmNvbXByb3ZhbnRlSWQpIHtcbiAgICAgICAgICAgIHBlc3NvYV9hcnF1aXZvcy5wdXNoKHsgYXJxdWl2b19pZDogbmV3RGF0YS5jb21wcm92YW50ZUlkLCBwZXNzb2FfYXJxdWl2b190aXBvX2lkOiAzIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0RhdGEucmdJZCkge1xuICAgICAgICAgICAgcGVzc29hX2FycXVpdm9zLnB1c2goeyBhcnF1aXZvX2lkOiBuZXdEYXRhLnJnSWQsIHBlc3NvYV9hcnF1aXZvX3RpcG9faWQ6IDUgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICB0ZWxlZm9uZTogb2JqLnRlbGVmb25lLFxuICAgICAgICAgICAgY2VsdWxhcjogbmV3RGF0YS5jZWx1bGFyLFxuICAgICAgICAgICAgZW1haWw6IG5ld0RhdGEuZW1haWwsXG4gICAgICAgICAgICBwZXNzb2FfdGlwb19pZDogb2JqLnBlc3NvYV90aXBvX2lkLFxuICAgICAgICAgICAgcGVzc29hX2NhZGFzdHJvX2lkOiBvYmoucGVzc29hX2NhZGFzdHJvX2lkLFxuICAgICAgICAgICAgcGVzc29hX3N0YXR1c19pZDogb2JqLnBlc3NvYV9zdGF0dXNfaWQsXG4gICAgICAgICAgICByZWNlYmVfdmlhX2FkbWluaXN0cmFkb3I6IG9iai5yZWNlYmVfdmlhX2FkbWluaXN0cmFkb3IsXG4gICAgICAgICAgICBwZXNzb2FfZmlzaWNhOiBwZXNzb2FfZmlzaWNhLFxuICAgICAgICAgICAgcGVzc29hX2p1cmlkaWNhOiBvYmoucGVzc29hX2p1cmlkaWNhLFxuICAgICAgICAgICAgZW5kZXJlY286IFtlbmRlcmVjb10sXG4gICAgICAgICAgICBjYXJyb3M6IG9iai5jYXJyb3MsXG4gICAgICAgICAgICBwZXNzb2FfYXJxdWl2b3M6IG9iai5wZXNzb2FfYXJxdWl2b3MsXG4gICAgICAgICAgICBjb250YV9iYW5jYXJpYTogb2JqLmNvbnRhX2JhbmNhcmlhLFxuICAgICAgICAgICAgLi4uKHBlc3NvYV9hcnF1aXZvcy5sZW5ndGggJiYge3Blc3NvYV9hcnF1aXZvczogcGVzc29hX2FycXVpdm9zfSksXG4gICAgICAgICAgICAuLi4obmV3RGF0YS5wcmVmaWxJZCAmJiB7IGZvdG9fcGVyZmlsX2FycXVpdm9faWQ6IG5ld0RhdGEucHJlZmlsSWQgfSlcbiAgICAgICAgfVxuICAgICAgICAvL2NuaElELCByZ0lkLCBzZWd1cmFuZG9JZCwgY29tcHJvdmFudGVJZCwgcHJlZmlsSWRcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgY29uc29sZS5sb2coXCJib2R5ID0gXCIsIGJvZHkpXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICAgICAgY29uc3QgdG9rZW4gPSAnQmVhcmVyICcgKyBzZXNzaW9uLmFjY2Vzc190b2tlblxuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cFJlcXVlc3QucGF0Y2goXG4gICAgICAgICAgICBgJHtjb25maWcuYmFzZVVybH0vYXBpL21vdG9yaXN0YWAsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICBib2R5XG4gICAgICAgIClcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVkIGRhdGEgPSBcIiwgZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGFcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICBub3RpZnkoXCJlcnJvclwiLCBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICcnKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0Q2VwID0gYXN5bmMgKGNlcCkgPT4ge1xuICAgIHRyeSB7XG5cblxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgICAgIGNvbnN0IHRva2VuID0gJ0JlYXJlciAnICsgc2Vzc2lvbi5hY2Nlc3NfdG9rZW5cblxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHBSZXF1ZXN0LmdldChcbiAgICAgICAgICAgIGAke2NvbmZpZy5iYXNlVXJsfS9hcGkvY2VwLyR7Y2VwfWAsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgdG9rZW4pXG4gICAgICAgIHJldHVybiBkYXRhXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59IiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uLy4uL3V0aWxzL3JlcXVlc3RcIlxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgeyBub3RpZnksIHVzZUlucHV0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vblwiXG5pbXBvcnQgeyBSaU1hc3RlcmNhcmRGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuXG5leHBvcnQgY29uc3QgY3JlYXRlRmlsZSA9IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuXG4gICAgdHJ5IHtcblxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgICAgIGNvbnN0IHRva2VuID0gJ0JlYXJlciAnICsgc2Vzc2lvbi5hY2Nlc3NfdG9rZW5cblxuICAgICAgICBcblxuICAgICAgICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiAnZW4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuXG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucy5oZWFkZXJzLCB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgfSlcblxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7Y29uZmlnLmJhc2VVcmx9L2FwaS9hcnF1aXZvc2AsIGZvcm1EYXRhLCB7IC4uLmRlZmF1bHRPcHRpb25zIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXMnLCByZXMuZGF0YSk7XG4gICAgICAgIFxuICAgICAgICAvL2RlYnVnZ2VyXG4gICAgICAgIHJldHVybiByZXMgJiYgcmVzLmRhdGEgPyByZXMuZGF0YSA6IHJlc1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpXG4gICAgICAgIC8vIG5vdGlmeShcImVycm9yXCIsIGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YSA6ICcnKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn0iLCJcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcmVxdWVzdFwiXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCB7IG5vdGlmeSwgdXNlSW5wdXQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29tbW9uXCJcbmltcG9ydCB7IFJpTWFzdGVyY2FyZEZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIlxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiXG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhciA9IGFzeW5jIChuZXdEYXRhKSA9PiB7XG4gIFxuICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3QgZW5kZXJlY29fcmV0aXJhZGFfcHJpbmNpcGFsID0ge1xuICAgICAgICAgICAgXCJsb2dyYWRvdXJvXCI6IG5ld0RhdGEucnVhQ2FyLFxuICAgICAgICAgICAgXCJjZXBcIjogbmV3RGF0YS5jZXBDYXIsXG4gICAgICAgICAgICBcIm51bWVyb1wiOiBuZXdEYXRhLm51bWVyb0NhcixcbiAgICAgICAgICAgIFwiY29tcGxlbWVudG9cIjogbmV3RGF0YS5jb21wbGVtZW50b0NhcixcbiAgICAgICAgICAgIFwiYmFpcnJvXCI6IG5ld0RhdGEuYmFpcnJvQ2FyLFxuICAgICAgICAgICAgXCJjaWRhZGVfaWRcIjogbmV3RGF0YS5jaWRhZGVJZENhclxuICAgICAgICB9XG4gICAgICAgIGxldCBhcnF1aXZvcyA9IFtdXG4gICAgICAgIGlmIChuZXdEYXRhLmZyb250YWxJZCkge1xuICAgICAgICAgICAgYXJxdWl2b3MucHVzaCh7IGFycXVpdm9faWQ6IG5ld0RhdGEuZnJvbnRhbElkLCBjYXJyb19hcnF1aXZvX3RpcG9faWQ6IDEsIHBvc2l0aW9uOiAxIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3RGF0YS5sYXRlcmFsRGlyZWl0YUlkKSB7XG4gICAgICAgICAgICBhcnF1aXZvcy5wdXNoKHsgYXJxdWl2b19pZDogbmV3RGF0YS5sYXRlcmFsRGlyZWl0YUlkLCBjYXJyb19hcnF1aXZvX3RpcG9faWQ6IDEsIHBvc2l0aW9uOiAyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3RGF0YS5sYXRlcmFsRXNxdWVyZGFJZCkge1xuICAgICAgICAgICAgYXJxdWl2b3MucHVzaCh7IGFycXVpdm9faWQ6IG5ld0RhdGEubGF0ZXJhbEVzcXVlcmRhSWQsIGNhcnJvX2FycXVpdm9fdGlwb19pZDogMSwgcG9zaXRpb246IDMgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdEYXRhLmZ1bmRvSWQpIHtcbiAgICAgICAgICAgIGFycXVpdm9zLnB1c2goeyBhcnF1aXZvX2lkOiBuZXdEYXRhLmZ1bmRvSWQsIGNhcnJvX2FycXVpdm9fdGlwb19pZDogMSwgcG9zaXRpb246IDQgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdEYXRhLnBhaW5lbEludGVybm9JZCkge1xuICAgICAgICAgICAgYXJxdWl2b3MucHVzaCh7IGFycXVpdm9faWQ6IG5ld0RhdGEucGFpbmVsSW50ZXJub0lkLCBjYXJyb19hcnF1aXZvX3RpcG9faWQ6IDEsIHBvc2l0aW9uOiA1IH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2RlbCA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBuZXdEYXRhLm1vZGVsbyxcbiAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG5ld0RhdGEubWFyY2FcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICBhbm86IG5ld0RhdGEuYW5vQ2FyLFxuICAgICAgICAgICAgcGxhY2E6IG5ld0RhdGEucGxhY2FDYXIsXG4gICAgICAgICAgICBlbmRlcmVjb19yZXRpcmFkYV9wcmluY2lwYWw6IGVuZGVyZWNvX3JldGlyYWRhX3ByaW5jaXBhbCxcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIGFycXVpdm9zXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgICAgICBjb25zdCB0b2tlbiA9ICdCZWFyZXIgJyArIHNlc3Npb24uYWNjZXNzX3Rva2VuXG5cbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJib2R5ID1cIiwgYm9keSlcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwUmVxdWVzdC5wb3N0KFxuICAgICAgICAgICAgYCR7Y29uZmlnLmJhc2VVcmx9L2FwaS9wcm9wcmlldGFyaW8vY2Fycm9zYCxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICAgIGJvZHkpXG5cblxuICAgICAgICByZXR1cm4gcmVzICYmIHJlcy5kYXRhID8gcmVzLmRhdGEgOiByZXNcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yLnJlc3BvbnNlKTtcblxuICAgICAgICAvLyBub3RpZnkoXCJlcnJvclwiLCBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEgOiAnJylcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59IiwiaW1wb3J0IHtcbiAgICBPV05FUl9SRUNPVkVSX09XTkVSX1JFUVVFU1QsXG4gICAgT1dORVJfUkVDT1ZFUl9PV05FUl9GQUlMLFxuICAgIE9XTkVSX1JFQ09WRVJfT1dORVJfU1VDQ0VTU1xufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL293bmVyXCJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWdcIlxuaW1wb3J0IHsgbm90aWZ5LCB1c2VJbnB1dCB9IGZyb20gXCIuLi8uLi91dGlscy9jb21tb25cIlxuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi8uLi91dGlscy9yZXF1ZXN0XCJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuXG5leHBvcnQgY29uc3QgcmVjb3Zlck93bmVyID0gYXN5bmMgKHF1ZXJ5UGFyYW1zT2JqLCBjYWxsYmFjaykgPT4ge1xuXG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgICAgIC8vY29uc29sZS5sb2coc2Vzc2lvbilcbiAgICAgICAgY29uc3QgdG9rZW4gPSAnQmVhcmVyICcgKyBzZXNzaW9uLmFjY2Vzc190b2tlblxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHBSZXF1ZXN0LmdldChcbiAgICAgICAgICAgIGAke2NvbmZpZy5iYXNlVXJsfS9hcGkvcHJvcHJpZXRhcmlvYCxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB0b2tlbilcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICByZXR1cm4gZGF0YVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAvLyBub3RpZnkoXCJlcnJvclwiLCAgZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn0iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcblxuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi8uLi91dGlscy9yZXF1ZXN0XCJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IHsgbm90aWZ5LCB1c2VJbnB1dCB9IGZyb20gXCIuLi8uLi91dGlscy9jb21tb25cIlxuXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVPd25lciA9IGFzeW5jIChuZXdEYXRhLCBvYmopID0+IHtcblxuICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3QgcGVzc29hX2Zpc2ljYSA9IHsgLi4ub2JqLnBlc3NvYV9maXNpY2EsIGNwZjogbmV3RGF0YS5jcGYsIG5vbWU6IG5ld0RhdGEubm9tZSB9XG4gICAgICAgIGNvbnN0IGVuZGVyZWNvID0gW3tcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogb2JqLmxhdGl0dWRlLFxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogb2JqLmxvbmdpdHVkZSxcbiAgICAgICAgICAgIFwibG9ncmFkb3Vyb1wiOiBuZXdEYXRhLnJ1YSxcbiAgICAgICAgICAgIFwiY2VwXCI6IG5ld0RhdGEuY2VwLFxuICAgICAgICAgICAgXCJudW1lcm9cIjogbmV3RGF0YS5udW1lcm8sXG4gICAgICAgICAgICBcImNvbXBsZW1lbnRvXCI6IG5ld0RhdGEuY29tcGxlbWVudG8sXG4gICAgICAgICAgICBcImJhaXJyb1wiOiBuZXdEYXRhLmJhaXJybyxcbiAgICAgICAgICAgIFwiY2lkYWRlX2lkXCI6IG5ld0RhdGEuY2lkYWRlSWRcbiAgICAgICAgfV1cbiAgICAgICAgbGV0IHBlc3NvYV9hcnF1aXZvcyA9IFtdXG5cbiAgICAgICAgaWYgKG9iai5wZXNzb2FfYXJxdWl2b3MpIHtcbiAgICAgICAgICAgIHBlc3NvYV9hcnF1aXZvcyA9IFsuLi5vYmoucGVzc29hX2FycXVpdm9zXVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0RhdGEuY25oSWQpIHtcbiAgICAgICAgICAgIHBlc3NvYV9hcnF1aXZvcy5wdXNoKHsgYXJxdWl2b19pZDogbmV3RGF0YS5jbmhJZCwgcGVzc29hX2FycXVpdm9fdGlwb19pZDogMSB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdEYXRhLmNvbXByb3ZhbnRlSWQpIHtcbiAgICAgICAgICAgIHBlc3NvYV9hcnF1aXZvcy5wdXNoKHsgYXJxdWl2b19pZDogbmV3RGF0YS5jb21wcm92YW50ZUlkLCBwZXNzb2FfYXJxdWl2b190aXBvX2lkOiAyIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIHRlbGVmb25lOiBvYmoudGVsZWZvbmUsXG4gICAgICAgICAgICBjZWx1bGFyOiBuZXdEYXRhLmNlbHVsYXIsXG4gICAgICAgICAgICBlbWFpbDogbmV3RGF0YS5lbWFpbCxcbiAgICAgICAgICAgIHBlc3NvYV90aXBvX2lkOiBvYmoucGVzc29hX3RpcG9faWQsXG4gICAgICAgICAgICBwZXNzb2FfY2FkYXN0cm9faWQ6IG9iai5wZXNzb2FfY2FkYXN0cm9faWQsXG4gICAgICAgICAgICBwZXNzb2Ffc3RhdHVzX2lkOiBvYmoucGVzc29hX3N0YXR1c19pZCxcbiAgICAgICAgICAgIHJlY2ViZV92aWFfYWRtaW5pc3RyYWRvcjogb2JqLnJlY2ViZV92aWFfYWRtaW5pc3RyYWRvcixcbiAgICAgICAgICAgIHBlc3NvYV9maXNpY2E6IHBlc3NvYV9maXNpY2EsXG4gICAgICAgICAgICBwZXNzb2FfanVyaWRpY2E6IG9iai5wZXNzb2FfanVyaWRpY2EsXG4gICAgICAgICAgICBlbmRlcmVjbzogW2VuZGVyZWNvXSxcbiAgICAgICAgICAgIGNhcnJvczogb2JqLmNhcnJvcyxcbiAgICAgICAgICAgIHBlc3NvYV9hcnF1aXZvczogb2JqLnBlc3NvYV9hcnF1aXZvcyxcbiAgICAgICAgICAgIGNvbnRhX2JhbmNhcmlhOiBvYmouY29udGFfYmFuY2FyaWEsXG4gICAgICAgICAgICAuLi4ocGVzc29hX2FycXVpdm9zLmxlbmd0aCAmJiB7cGVzc29hX2FycXVpdm9zOiBwZXNzb2FfYXJxdWl2b3N9KSxcbiAgICAgICAgICAgIC4uLihuZXdEYXRhLnByZWZpbElkICYmIHsgZm90b19wZXJmaWxfYXJxdWl2b19pZDogbmV3RGF0YS5wcmVmaWxJZCB9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICAgICAgY29uc3QgdG9rZW4gPSAnQmVhcmVyICcgKyBzZXNzaW9uLmFjY2Vzc190b2tlblxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYm9keSA9XCIsIGJvZHkpXG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgaHR0cFJlcXVlc3QucGF0Y2goXG4gICAgICAgICAgICBgJHtjb25maWcuYmFzZVVybH0vYXBpL3Byb3ByaWV0YXJpb2AsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICBib2R5KVxuXG5cbiAgICAgICAgcmV0dXJuIHJlcyAmJiByZXMuZGF0YSA/IHJlcy5kYXRhIDogcmVzXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgLy8gbm90aWZ5KFwiZXJyb3JcIiwgZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5kYXRhIDogJycpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufSIsImltcG9ydCB7IENvbnRhaW5lciwgQ29sLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcbmltcG9ydCB7IEZhRmFjZWJvb2tGIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBGaUluc3RhZ3JhbSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgQWlPdXRsaW5lVHdpdHRlciB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuXG5cbmNvbnN0IFB1YmxpY0Zvb3RlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1YmxpYy1mb290ZXIgXCI+XG4gICAgICAgICAgICA8Q29udGFpbmVyID5cbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI0XCIgY2xhc3NOYW1lPVwicHVibGljLWZvb3Rlcl9fbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHVibGljLWZvb3Rlcl9fdGl0bGVcIj5YRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB1YmxpYy1mb290ZXJfX3RhZ1wiPsKpIDIwMjEgR0FWIC0gVG9kb3Mgb3MgZGlyZWl0b3MgcmVzZXJ2YWRvcy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiMlwiIGNsYXNzTmFtZT1cInB1YmxpYy1mb290ZXJfX21pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U29icmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Db250YXRvPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVybW8gZGUgVXNvPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVibGljLWZvb3Rlcl9fc29jaWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhRmFjZWJvb2tGIGNsYXNzTmFtZT1cInB1YmxpYy1mb290ZXJfX3NvY2lhbC1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GYWNlYm9vazwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWJsaWMtZm9vdGVyX19zb2NpYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlJbnN0YWdyYW0gY2xhc3NOYW1lPVwicHVibGljLWZvb3Rlcl9fc29jaWFsLWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkluc3RhZ3JhbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWJsaWMtZm9vdGVyX19zb2NpYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lVHdpdHRlciBjbGFzc05hbWU9XCJwdWJsaWMtZm9vdGVyX19zb2NpYWwtaWNvbiBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ud2l0dGVyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI0XCIgY2xhc3NOYW1lPVwicHVibGljLWZvb3Rlcl9fcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3Vic2NyaWJlIHRvIG91ciBuZXdzbGV0dGVyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIGFyaWEtbGFiZWw9XCJSZWNpcGllbnQncyB1c2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjJcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm9rPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHVibGljRm9vdGVyXG5cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IE5hdiwgTmF2YmFyLCBEcm9wZG93biB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuaW1wb3J0IHsgSGlNZW51QWx0MiB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiXG5pbXBvcnQgeyBSaUNhckxpbmUsIFJpQ29udGFjdHNCb29rTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiXG5pbXBvcnQgeyBGYVJlZ0NvbW1lbnREb3RzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IHNpZ25PdXQsIGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuXG5cblxuY29uc3QgRGFzaGJvYXJkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3Qgb3Blbk1lbnUgPSAoKSA9PiB7XG4gICAgICAgIHNldElzT3Blbih0cnVlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmF2YmFyIGNvbGxhcHNlT25TZWxlY3QgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9XCJ3LTEwMCBib3JkZXItYm90dG9tIG1iLTMgcHgtbWQtMyBweC0wIHB5LTIgZGFzaGJvYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHsvKiA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCIgLz4gKi99XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpTWVudUFsdDIgc2l6ZT1cIjcwXCIgb25DbGljaz17b3Blbk1lbnV9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgY29sb3I9XCIjMDA0NGM4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtbGctYXV0byBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtbGctYXV0byBhbGlnbi1pdGVtcy1jZW50ZXIgY3VzdG9tLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gZHJvcD1cImRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGlkPVwiZHJvcGRvd24tYmFzaWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoZWFkZXItbG9nb1wiIHNyYz1cIi9pbWFnZXMvaWNvbi91c2VyLWljb24ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiL3BlcmZpbC1mb3JuZWNlZG9yLzExMjRcIj5WZXIgcGVyZmlsPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvblNlbGVjdD17KCkgPT4gc2lnbk91dCgpfT5TYWlyPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPC9OYXZiYXI+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbG9hdGluZy13cmFwcGVyICR7aXNPcGVuID8gJ2Zsb2F0aW5nLXdyYXBwZXItb3BlbicgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIaU1lbnVBbHQyIG9uQ2xpY2s9e2Nsb3NlTWVudX0gc2l6ZT1cIjcwXCIgY29sb3I9XCIjZmZmXCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21ldXMtdmVpY3Vsb3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBzaW5nbGUtZmxvYXRpbmctaXRlbSBtYi01IGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC0wIHRleHQtd2hpdGUgaDJcIj5NZXVzIGFsdWd1w6lpczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmlDYXJMaW5lIHNpemU9XCI0MFwiIGNvbG9yPVwiI2ZmZlwiIGNsYXNzTmFtZT1cIm1sLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xpc3Rhci1jYXJyb3MtZGlzcG9uaXZlaXMtZm9ybmVjZWRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHNpbmdsZS1mbG9hdGluZy1pdGVtIG1iLTUgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTAgdGV4dC13aGl0ZSBoMlwiPkNvbnZlcnNhczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFSZWdDb21tZW50RG90cyBzaXplPVwiNDBcIiBjb2xvcj1cIiNmZmZcIiBjbGFzc05hbWU9XCJtbC01XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cblxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdHJhci1mb3JuZWNlZG9yLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBzaW5nbGUtZmxvYXRpbmctaXRlbSBtYi01IGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC0wIHRleHQtd2hpdGUgaDJcIj5NZXVzIGRhZG9zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaUNvbnRhY3RzQm9va0xpbmUgc2l6ZT1cIjQwXCIgY29sb3I9XCIjZmZmXCIgY2xhc3NOYW1lPVwibWwtNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtpc09wZW4gPyA8ZGl2IG9uQ2xpY2s9e2Nsb3NlTWVudX0gY2xhc3NOYW1lPVwiYmFjay1zaGVkXCI+PC9kaXY+IDogbnVsbH1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRIZWFkZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY3R4KVxuICAgIGNvbnNvbGUubG9nKHNlc3Npb24pXG4gICAgaWYgKCFzZXNzaW9uKSB7XG4gICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogJy9sb2dpbicgfSlcbiAgICAgICAgY3R4LnJlcy5lbmQoKVxuICAgICAgICByZXR1cm4ge31cbiAgICB9XG59IiwiaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIi4uL1VJL0J1dHRvblwiXG5pbXBvcnQgeyBXaXphcmRJbnB1dCB9IGZyb20gXCIuLi9VSS9UZXh0SW5wdXRcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuXG5jb25zdCBQZXJzb25hbEluZm8gPSAoeyBhY3RpdmVTdGVwLCBwZXJzb25hbE5leHRDbGljaywgb3duZXIsIGhhbmRsZU93bmVyLCBwcm9jZXNzaW5nIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBsZz17NH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1sZy0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiTm9tZTpcIiBuYW1lPVwibm9tZVwiIHZhbHVlPXtvd25lci5ub21lfSBoYW5kbGVPd25lcj17aGFuZGxlT3duZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJFbWFpbDpcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17b3duZXIuZW1haWx9IGhhbmRsZU93bmVyPXtoYW5kbGVPd25lcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIkNlbHVsYXI6XCIgbmFtZT1cImNlbHVsYXJcIiB2YWx1ZT17b3duZXIuY2VsdWxhcn0gaGFuZGxlT3duZXI9e2hhbmRsZU93bmVyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiQ1BGL0NOUEo6XCIgbmFtZT1cImNwZlwiIHZhbHVlPXtvd25lci5jcGZ9IGhhbmRsZU93bmVyPXtoYW5kbGVPd25lcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIGxnPXs0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWxnLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJDRVA6XCIgbmFtZT1cImNlcFwiIHZhbHVlPXtvd25lci5jZXB9IGhhbmRsZU93bmVyPXtoYW5kbGVPd25lcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIkVzdGFkbzpcIiBuYW1lPVwiZXN0YWRvXCIgdmFsdWU9e293bmVyLmVzdGFkb30gaGFuZGxlT3duZXI9e2hhbmRsZU93bmVyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiQ2lkYWRlOlwiIG5hbWU9XCJjaWRhZGVcIiB2YWx1ZT17b3duZXIuY2lkYWRlfSBoYW5kbGVPd25lcj17aGFuZGxlT3duZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJCYWlycm86XCIgbmFtZT1cImJhaXJyb1wiIHZhbHVlPXtvd25lci5iYWlycm99IGhhbmRsZU93bmVyPXtoYW5kbGVPd25lcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIlJ1YTpcIiBuYW1lPVwicnVhXCIgdmFsdWU9e293bmVyLnJ1YX0gaGFuZGxlT3duZXI9e2hhbmRsZU93bmVyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuXG5cbiAgICAgICAgPENvbCBsZz17NH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1sZy0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiTsO6bWVybzpcIiBuYW1lPVwibnVtZXJvXCIgdmFsdWU9e293bmVyLm51bWVyb30gaGFuZGxlT3duZXI9e2hhbmRsZU93bmVyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiQ29tcGxlbWVudG86XCIgbmFtZT1cImNvbXBsZW1lbnRvXCIgdmFsdWU9e293bmVyLmNvbXBsZW1lbnRvfSBoYW5kbGVPd25lcj17aGFuZGxlT3duZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1sZy01IGQtc20tZmxleCBkLWxnLWJsb2NrIFwiPlxuICAgICAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8VWlCdXR0b25cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2FuY2VsYXJcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBtYi1sZy00IG1iLXNtLTAgbXItc20tMyBtci1sZy0wIG5leHQtYnRuIHBlcnNvbmFsLWluZm8tci1idG5cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8VWlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWb2x0YXJcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbWItNCBuZXh0LWJ0blwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPFVpQnV0dG9uXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJQcsOzeGltb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbmV4dC1idG4gbXQtc20tMCBtdC0zXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwZXJzb25hbE5leHRDbGlja31cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtwcm9jZXNzaW5nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxJbmZvXG4iLCJpbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiLi4vVUkvQnV0dG9uXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgVXBsb2FkUGhvdG8gZnJvbSBcIi4uL1VJL1Bob3RvXCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUZhY3RvcnkgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY3JlYXRlRmlsZSB9IGZyb20gJy4uLy4uL2FwaS9maWxlcy9jcmVhdGVGaWxlcydcbmltcG9ydCB7IHVwZGF0ZU93bmVyIH0gZnJvbSAnLi4vLi4vYXBpL293bmVyL3VwZGF0ZU93bmVyJ1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vblwiXG5cblxuY29uc3QgVXBsb2FkUGhvdG9zID0gKHsgYWN0aXZlU3RlcCwgdXBsb2FkQmFjaywgcGVyc29uYWxOZXh0Q2xpY2ssIG93bmVyLCBwcmV2T3duZXIgfSkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhvd25lcilcblxuICBjb25zdCBbcHJvY2Vzc2luZywgc2V0UHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbY25oSWQsIHNldENuaElkXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtjb21wcm92YW50ZUlkLCBzZXRDb21wcm92YW50ZUlkXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtwcmVmaWxJZCwgc2V0UHJlZmlsSWRdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBbY25oVXJsLCBzZXRDbmhVcmxdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2NvbXByb3ZhbnRlVXJsLCBzZXRDb21wcm92YW50ZVVybF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcHJlZmlsVXJsLCBzZXRQcmVmaWxVcmxdID0gdXNlU3RhdGUobnVsbClcblxuXG5cbiAgY29uc3Qgb25DbmhDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIFxuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRDbmhVcmwoVVJMLmNyZWF0ZU9iamVjdFVSTCh2YWx1ZSkpXG4gICAgfVxuXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgIFwiZmlsZVwiLFxuICAgICAgdmFsdWVcbiAgICApXG4gICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlRmlsZShmb3JtRGF0YSlcblxuICAgIGlmIChyZXMpIHtcbiAgICAgIHNldENuaElkKHJlcy5pZClcblxuICAgIH1cblxuICB9XG5cbiAgY29uc3Qgb25Db21DaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgc2V0Q29tcHJvdmFudGVVcmwoVVJMLmNyZWF0ZU9iamVjdFVSTCh2YWx1ZSkpXG4gICAgfVxuXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgIFwiZmlsZVwiLFxuICAgICAgdmFsdWVcbiAgICApXG4gICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlRmlsZShmb3JtRGF0YSlcblxuICAgIGlmIChyZXMpIHtcbiAgICAgIHNldENvbXByb3ZhbnRlSWQocmVzLmlkKVxuXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25QcmVmaWxDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgc2V0UHJlZmlsVXJsKFVSTC5jcmVhdGVPYmplY3RVUkwodmFsdWUpKVxuICAgIH1cblxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICBcImZpbGVcIixcbiAgICAgIHZhbHVlXG4gICAgKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZUZpbGUoZm9ybURhdGEpXG5cbiAgICBpZiAocmVzKSB7XG4gICAgICBzZXRQcmVmaWxJZChyZXMuaWQpXG5cbiAgICB9XG4gIH1cblxuXG5cbiAgY29uc3QgdXBsb2FkQW5kTmV4dCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRQcm9jZXNzaW5nKHRydWUpXG4gICAgLy8gQ3JlYXRlIGFuIG9iamVjdCBvZiBmb3JtRGF0YSBcblxuICAgIC8vZGVidWdnZXJcbiAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLVwiLCBjbmhJZClcbiAgICBhd2FpdCB1cGRhdGVPd25lcih7IC4uLm93bmVyLCBjbmhJZCwgY29tcHJvdmFudGVJZCwgcHJlZmlsSWQgfSwgcHJldk93bmVyKVxuXG4gICAgbm90aWZ5KCdzdWNjZXNzJywgJ1VzZXIgZGF0YSB1cGRhdGVkJylcblxuICAgIHNldFByb2Nlc3NpbmcoZmFsc2UpXG4gICAgcGVyc29uYWxOZXh0Q2xpY2soKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBsZz17M30gbWQ9ezZ9IGNsYXNzTmFtZT1cIm1iLWxnLTAgbWItNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItbGctM1wiPlxuICAgICAgICAgICAgPFVwbG9hZFBob3RvIHRleHQ9XCJDTkgvUkc6XCIgbmFtZT1cImNuaFwiIHNyYz17Y25oVXJsfSBpZD1cImNuaFwiIG9uRmlsZUNoYW5nZT17b25DbmhDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgbGc9ezN9IG1kPXs2fSBjbGFzc05hbWU9XCJtYi1sZy0wIG1iLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWxnLTNcIj5cbiAgICAgICAgICAgIDxVcGxvYWRQaG90byB0ZXh0PVwiQ29tcHJvdmFudGUgZGUgcmVzaWTDqm5jaWFcIiBzcmM9e2NvbXByb3ZhbnRlVXJsfSBpZD1cImNvbXByb3ZhbnRlXCIgbmFtZT1cImNvbXByb3ZhbnRlXCIgb25GaWxlQ2hhbmdlPXtvbkNvbUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPENvbCBsZz17M30gbWQ9ezZ9IGNsYXNzTmFtZT1cIm1iLWxnLTAgbWItNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtbGctM1wiPlxuICAgICAgICAgICAgPFVwbG9hZFBob3RvIHRleHQ9XCJGb3RvIGRlIHBlcmZpbFwiIG5hbWU9XCJwcmVmaWxcIiBzcmM9e3ByZWZpbFVybH0gaWQ9XCJwcmVmaWxcIiBvbkZpbGVDaGFuZ2U9e29uUHJlZmlsQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gY2xhc3NOYW1lPVwibWItbGctMCBtYi00IHVwbG9hZC1waG90b3MtdG9wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1sZy0zXCI+XG4gICAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPFVpQnV0dG9uXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDYW5jZWxhclwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbWItNCBuZXh0LWJ0blwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8VWlCdXR0b25cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVm9sdGFyXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbWItNCBuZXh0LWJ0blwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt1cGxvYWRCYWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8VWlCdXR0b25cbiAgICAgICAgICAgICAgdGl0bGU9XCJQcsOzeGltb1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG5leHQtYnRuXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dXBsb2FkQW5kTmV4dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkUGhvdG9zXG4iLCJpbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gXCIuLi9VSS9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgVXBsb2FkUGhvdG8gZnJvbSBcIi4uL1VJL1Bob3RvXCJcblxuY29uc3QgVXBsb2FkVmVoaWNsZVBob3RvcyA9ICh7XG4gIGxvYWRpbmdGcm9udGFsLCBmcm9udGFsVXJsLCBvbkZyb250YWxDaGFuZ2UsXG4gIGxvYWRpbmdMYXRlcmFsRGlyZWl0YSwgbGF0ZXJhbERpcmVpdGFVcmwsIG9uTGF0ZXJhbERpcmVpdGFDaGFuZ2UsXG4gIGxvYWRpbmdMYXRlcmFsRXNxdWVyZGEsIGxhdGVyYWxFc3F1ZXJkYVVybCwgb25MYXRlcmFsRXNxdWVyZGFDaGFuZ2UsXG4gIGxvYWRpbmdGdW5kbywgZnVuZG9VcmwsIG9uRnVuZG9DaGFuZ2UsXG4gIGxvYWRpbmdQYWluZWxJbnRlcm5vLCBwYWluZWxJbnRlcm5vVXJsLCBvblBhaW5lbEludGVybm9DaGFuZ2UsXG4gIHByb2Nlc3NpbmcsIGFjdGl2ZVN0ZXAsIHVwbG9hZEJhY2ssIHVwbG9hZENhckRldGFpbHNcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItbGctM1wiPlxuICAgICAgICAgICAgPFVwbG9hZFBob3RvIHRleHQ9XCJGcm9udGFsXCIgbmFtZT1cImZyb250YWxcIiBpZD1cImZyb250YWxcIiBsb2FkaW5nPXtsb2FkaW5nRnJvbnRhbH0gc3JjPXtmcm9udGFsVXJsfSBvbkZpbGVDaGFuZ2U9e29uRnJvbnRhbENoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPENvbCBsZz17M30gbWQ9ezZ9IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWxnLTNcIj5cbiAgICAgICAgICAgIDxVcGxvYWRQaG90byB0ZXh0PVwiTGF0ZXJhbCBEaXJlaXRhXCIgbmFtZT1cImxhdGVyYWxEaXJlaXRhXCIgbG9hZGluZz17bG9hZGluZ0xhdGVyYWxEaXJlaXRhfSBpZD1cImxhdGVyYWxEaXJlaXRhXCIgc3JjPXtsYXRlcmFsRGlyZWl0YVVybH0gb25GaWxlQ2hhbmdlPXtvbkxhdGVyYWxEaXJlaXRhQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtbGctM1wiPlxuICAgICAgICAgICAgPFVwbG9hZFBob3RvIHRleHQ9XCJMYXRlcmFsIEVzcXVlcmRhXCIgbmFtZT1cImxhdGVyYWxFc3F1ZXJkYVwiIGxvYWRpbmc9e2xvYWRpbmdMYXRlcmFsRXNxdWVyZGF9IGlkPVwibGF0ZXJhbEVzcXVlcmRhXCIgc3JjPXtsYXRlcmFsRXNxdWVyZGFVcmx9IG9uRmlsZUNoYW5nZT17b25MYXRlcmFsRXNxdWVyZGFDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgbGc9ezN9IG1kPXs2fSBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1sZy0zXCI+XG4gICAgICAgICAgICA8VXBsb2FkUGhvdG8gdGV4dD1cIkZ1bmRvXCIgbmFtZT1cImZ1bmRvXCIgaWQ9XCJmdW5kb1wiIGxvYWRpbmc9e2xvYWRpbmdGdW5kb30gc3JjPXtmdW5kb1VybH0gb25GaWxlQ2hhbmdlPXtvbkZ1bmRvQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cblxuXG4gICAgICA8L1Jvdz5cblxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtbGctM1wiPlxuICAgICAgICAgICAgPFVwbG9hZFBob3RvIHRleHQ9XCJQYWluZWwgSW50ZXJub1wiIG5hbWU9XCJwYWluZWxJbnRlcm5vXCIgaWQ9XCJwYWluZWxJbnRlcm5vXCIgbG9hZGluZz17bG9hZGluZ1BhaW5lbEludGVybm99IHNyYz17cGFpbmVsSW50ZXJub1VybH0gb25GaWxlQ2hhbmdlPXtvblBhaW5lbEludGVybm9DaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIHsvKiA8Q29sIGxnPXszfSBtZD17Nn0gY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtbGctM1wiPlxuICAgICAgICAgICAgPFVwbG9hZFBob3RvIHRleHQ9XCJBZGljaW9uYXIgKyBGb3Rvc1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPiAqL31cblxuICAgICAgICA8Q29sIGxnPXs0fSBjbGFzc05hbWU9XCJtYi01IG10LWxnLTUgcHQtbGctNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtbGctM1wiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhY3RpdmVTdGVwID09PSAwID9cbiAgICAgICAgICAgICAgICA8VWlCdXR0b24gdGl0bGU9XCJDYW5jZWxhclwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9XCJ3LTEwMCBtYi00IG5leHQtYnRuXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0gLz4gOlxuICAgICAgICAgICAgICAgIDxVaUJ1dHRvbiB0aXRsZT1cIlZvbHRhclwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9XCJ3LTEwMCBtYi00IG5leHQtYnRuXCIgb25DbGljaz17dXBsb2FkQmFja30gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxVaUJ1dHRvbiB0aXRsZT1cIlByw7N4aW1vXCIgY2xhc3NOYW1lPVwidy0xMDAgbmV4dC1idG5cIiBsb2FkaW5nPXtwcm9jZXNzaW5nfSBvbkNsaWNrPXt1cGxvYWRDYXJEZXRhaWxzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZFZlaGljbGVQaG90b3NcbiIsImltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gXCIuLi9VSS9CdXR0b25cIlxuaW1wb3J0IHsgV2l6YXJkSW5wdXQgfSBmcm9tIFwiLi4vVUkvVGV4dElucHV0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBnZXRDZXAgfSBmcm9tICcuLi8uLi9hcGkvZHJpdmVyL3VwZGF0ZURyaXZlcidcbmltcG9ydCB7IGNyZWF0ZUNhciB9IGZyb20gJy4uLy4uL2FwaS9vd25lci9jYXJzL2NyZWF0ZUNhcidcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gXCIuLi8uLi91dGlscy9jb21tb25cIlxuXG5cbmNvbnN0IFZlaGljbGVEZXRhaWxzID0gKHtcbiAgbWFyY2EsIG1vZGVsbywgYW5vLCBwbGFjYSwgY2VwLCBlc3RhZG8sIGNpZGFkZSwgcnVhLCBzZW1hbmEsXG4gIGNhdWNhbywgZGlhcmlhLCBudW1lcm8sIGNvbXBsZW1lbnRvLCBiYWlycm8sIGNpZGFkZUlkLFxuICBoYW5kbGVDYXJJbnB1dCwgIHByb2Nlc3NpbmcsXG4gIGFjdGl2ZVN0ZXAsIHZlaGljbGVOZXh0Q2xpY2ssIHZlaGljbGVCYWNrXG59KSA9PiB7XG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGg1XCI+T25kZSBvIG1vdG9yaXN0YSB2YWkgcmV0aXJhciBvIHZlw61jdWxvPzwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBsZz17NH0gbWQ9ezZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItbGctM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIk1hcmNhOlwiIG5hbWU9XCJtYXJjYVwiIHZhbHVlPXttYXJjYX0gaGFuZGxlT3duZXI9e2hhbmRsZUNhcklucHV0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiTW9kZWxvOlwiIG5hbWU9XCJtb2RlbG9cIiB2YWx1ZT17bW9kZWxvfSBoYW5kbGVPd25lcj17aGFuZGxlQ2FySW5wdXR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJBbm86XCIgbmFtZT1cImFub1wiIHZhbHVlPXthbm99IGhhbmRsZU93bmVyPXtoYW5kbGVDYXJJbnB1dH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIlBsYWNhOlwiIG5hbWU9XCJwbGFjYVwiIHZhbHVlPXtwbGFjYX0gaGFuZGxlT3duZXI9e2hhbmRsZUNhcklucHV0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaDMgZm9udC13ZWlnaHQtYm9sZFwiPk1vdG9yaXN0YSBwb2RlIGNvbXByYXIgYXDDs3MgbyBjb250cmF0bz88L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXJhZGlvcyBtdC0yXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwieWVzXCIgbmFtZT1cImNvbG9yXCIgdmFsdWU9XCJ5ZXNcIiBjaGVja2VkIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInllc1wiPlxuICAgICAgICAgICAgICAgICAgU2ltXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJub1wiIG5hbWU9XCJjb2xvclwiIHZhbHVlPVwibm9cIiAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJub1wiPlxuICAgICAgICAgICAgICAgICAgTsOjb1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPENvbCBsZz17NH0gbWQ9ezZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtbGctM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIkNFUDpcIiBuYW1lPVwiY2VwXCIgdmFsdWU9e2NlcH0gaGFuZGxlT3duZXI9e2hhbmRsZUNhcklucHV0fSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiRXN0YWRvOlwiIG5hbWU9XCJlc3RhZG9cIiB2YWx1ZT17ZXN0YWRvfSBoYW5kbGVPd25lcj17aGFuZGxlQ2FySW5wdXR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJDaWRhZGU6XCIgbmFtZT1cImNpZGFkZVwiIHZhbHVlPXtjaWRhZGV9IGhhbmRsZU93bmVyPXtoYW5kbGVDYXJJbnB1dH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIlJ1YTpcIiBuYW1lPVwicnVhXCIgdmFsdWU9e3J1YX0gaGFuZGxlT3duZXI9e2hhbmRsZUNhcklucHV0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiQ29tcGxlbWVudG86XCIgbmFtZT1cImNvbXBsZW1lbnRvXCIgdmFsdWU9e2NvbXBsZW1lbnRvfSBoYW5kbGVPd25lcj17aGFuZGxlQ2FySW5wdXR9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPENvbCBsZz17NH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1sZy0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiRGnDoXJpYTpcIiBuYW1lPVwiZGlhcmlhXCIgdmFsdWU9e2RpYXJpYX0gaGFuZGxlT3duZXI9e2hhbmRsZUNhcklucHV0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiU2VtYW5hOlwiIG5hbWU9XCJzZW1hbmFcIiB2YWx1ZT17c2VtYW5hfSBoYW5kbGVPd25lcj17aGFuZGxlQ2FySW5wdXR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJDYXXDp8OjbzpcIiBuYW1lPVwiY2F1Y2FvXCIgdmFsdWU9e2NhdWNhb30gaGFuZGxlT3duZXI9e2hhbmRsZUNhcklucHV0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtbGctNVwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWN0aXZlU3RlcCA9PT0gMCA/XG4gICAgICAgICAgICAgICAgICA8VWlCdXR0b24gdGl0bGU9XCJDYW5jZWxhclwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9XCJ3LTEwMCBtYi00IG5leHQtYnRuXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0gLz4gOlxuICAgICAgICAgICAgICAgICAgPFVpQnV0dG9uIHRpdGxlPVwiVm9sdGFyXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cInctMTAwIG1iLTQgbmV4dC1idG5cIiBvbkNsaWNrPXt2ZWhpY2xlQmFja30gLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8VWlCdXR0b24gdGl0bGU9XCJQcsOzeGltb1wiIGNsYXNzTmFtZT1cInctMTAwIG5leHQtYnRuXCIgb25DbGljaz17dmVoaWNsZU5leHRDbGlja30gbG9hZGluZz17cHJvY2Vzc2luZ30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlaGljbGVEZXRhaWxzXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBCdXR0b24sIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBjb25zdCBVaUJ1dHRvbiA9ICh7IHRpdGxlLCBsb2FkaW5nLCBzaXplLCBsb2FkZXJNc2csIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b24gey4uLnJlc3R9PlxuICAgICAge3RpdGxlfVxuICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTMgbWItMVwiXG4gICAgICAgICAgYW5pbWF0aW9uPVwiYm9yZGVyXCJcbiAgICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPntgJHtsb2FkZXJNc2d9YH08L3NwYW4+XG4gICAgICAgIDwvU3Bpbm5lcj5cbiAgICAgICl9XG4gICAgPC9CdXR0b24+XG4gICk7XG59O1xuXG5VaUJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9hZGVyTXNnOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuVWlCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogXCJNeSBCdXR0b25cIixcbiAgc2l6ZTogXCJzbVwiLFxuICB2YXJpYW50OiBcInByaW1hcnlcIixcbiAgbG9hZGVyTXNnOiBcIkxvYWRpbmcuLi5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBTb2NpYWxCdXR0b24gPSAoeyB0aXRsZSwgaWNvbiwgLi4ucmVzdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwIHNvY2lhbC1idG4gcHgtMyBwYi1zbS0yIHBiLTAgcHQtc20tMSBwdC0wXCJcbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNvY2lhbC1idG4taWNvblwiPntpY29ufTwvc3Bhbj5cbiAgICAgIHt0aXRsZX1cbiAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn07XG5cblNvY2lhbEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblNvY2lhbEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBcIk15IFNvY2lhbCBCdXR0b25cIixcbn07XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgY29uc3QgRnVsbFBhZ2VMb2FkZXIgPSAoeyBsb2FkaW5nLCBhbmltYXRpb24sIC4uLnJlc3QgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktNSBweS01XCI+XG4gICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249e2xvYWRpbmcgPyBhbmltYXRpb24gOiAnJ30gcm9sZT1cInN0YXR1c1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuRnVsbFBhZ2VMb2FkZXIucHJvcFR5cGVzID0ge1xuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgYW5pbWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5GdWxsUGFnZUxvYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYW5pbWF0aW9uOiAnYm9yZGVyJyxcbn0iLCJpbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgeyBGdWxsUGFnZUxvYWRlciB9IGZyb20gXCIuLi9Mb2FkZXJcIlxuXG5leHBvcnQgY29uc3QgVXBsb2FkUGhvdG8gPSAoeyB0ZXh0LCBzcmMsIG5hbWUsIGxvYWRpbmcsIGlkLCBvbkZpbGVDaGFuZ2UgfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtcGhvdG8gdGV4dC1tZC1sZWZ0IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoNCBtYi0zXCI+e3RleHR9PC9wPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgaHRtbEZvcj17aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NyYyA/IHNyYyA6ICcvaW1hZ2VzL3VwbG9hZC5wbmcnfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9e2lkfSBuYW1lPXtuYW1lfSBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDAwMDBcbiAgICAgICAgICAgIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRQaG90byIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGNvbnN0IEF1dGhJbnB1dCA9ICh7IGxhYmVsLCB0eXBlLCBuYW1lLCB2YWx1ZSwgb25DaGFuZ2UgfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0IGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5hbWU9e25hbWV9IHR5cGU9e3R5cGV9IHJlcXVpcmVkIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gb25DaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYXV0aC1pbnB1dC1sYWJlbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRoLWlucHV0LWxhYmVsLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5BdXRoSW5wdXQucHJvcFR5cGVzID0ge1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG5cbkF1dGhJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ3RleHQnLFxufVxuXG5cbmV4cG9ydCBjb25zdCBXaXphcmRJbnB1dCA9ICh7IGxhYmVsLCB0eXBlLCB2YWx1ZSwgbmFtZSwgaGFuZGxlT3duZXIsIC4uLnJlc3QgfSkgPT4ge1xuICAgIC8vY29uc29sZS5sb2coXCJwcm9wcyA9IFwiLCBsYWJlbCwgdHlwZSx2YWx1ZSwgaGFuZGxlT3duZXIgKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnLWZvcm0taW5wdXQgZC14bC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZC1sZy1pbmxpbmUtYmxvY2sgZC1ibG9ja1wiPntsYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IHZhbHVlPXt2YWx1ZX0gbmFtZT17bmFtZX0gb25DaGFuZ2U9eyhlKT0+aGFuZGxlT3duZXIoZSl9IHsuLi5yZXN0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuV2l6YXJkSW5wdXQucHJvcFR5cGVzID0ge1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5XaXphcmRJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ3RleHQnLFxufSIsImNvbnN0IERFVkVMT1BNRU5UID0ge1xuICAgIG5leHRBdXRoVXJsOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwsXG4gICAgYmFzZVVybDogcHJvY2Vzcy5lbnYuQVBJX1VSTCxcbiAgICBncmFudFR5cGU6IHByb2Nlc3MuZW52LkdSQU5UX1RZUEUsXG4gICAgYmFzaWNBdXRoVG9rZW46IHByb2Nlc3MuZW52LkJBU0lDX0FVVEhfVE9LRU4sXG4gICAgR0FWX0NMSUVOVF9TRUNSRVQ6IHByb2Nlc3MuZW52LkdBVl9DTElFTlRfU0VDUkVULFxuICAgIEdBVl9DTElFTlRfSUQ6IHByb2Nlc3MuZW52LkdBVl9DTElFTlRfSUQsXG4gICAgR09PR0xFX0NMSUVOVF9JRDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICBHT09HTEVfQ0xJRU5UX1NFQ1JFVDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG5cbiAgICAvLyBHT09HTEVfQ0xJRU5UX0lEOiAnMzE2NTEwNTc4MTgtaDgyMG9uaGQzaDQya3BnZjVoaWgya3B0YzNtMm11ZXMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxuICAgIC8vIEdPT0dMRV9DTElFTlRfU0VDUkVUOiAnVkFuZlFMcnpwUXZLRlNTek1oZkFCYmhYJ1xuICAgIEZBQ0VCT09LX0NMSUVOVF9JRDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfQ0xJRU5UX0lELFxuICAgIEZBQ0VCT09LX0NMSUVOVF9TRUNSRVQ6ICBwcm9jZXNzLmVudi5GQUNFQk9PS19DTElFTlRfU0VDUkVUXG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBERVZFTE9QTUVOVFxuIiwiZXhwb3J0IGNvbnN0IE9XTkVSX0xJU1RfT0ZfQ0FSU19SRVFVRVNUID0gJ09XTkVSX0xJU1RfT0ZfQ0FSU19SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IE9XTkVSX0xJU1RfT0ZfQ0FSU19TVUNDRVNTID0gJ09XTkVSX0xJU1RfT0ZfQ0FSU19TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IE9XTkVSX0xJU1RfT0ZfQ0FSU19GQUlMID0gJ09XTkVSX0xJU1RfT0ZfQ0FSU19GQUlMJ1xuXG5leHBvcnQgY29uc3QgT1dORVJfUkVDT1ZFUl9PV05FUl9SRVFVRVNUID0gJ09XTkVSX1JFQ09WRVJfT1dORVJfUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBPV05FUl9SRUNPVkVSX09XTkVSX1NVQ0NFU1MgPSAnT1dORVJfUkVDT1ZFUl9PV05FUl9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IE9XTkVSX1JFQ09WRVJfT1dORVJfRkFJTCA9ICdPV05FUl9SRUNPVkVSX09XTkVSX0ZBSUwnIiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgRGFzaGJvYXJkSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhcnRpYWwvRGFzaGJvYXJkL0hlYWRlclwiXG5pbXBvcnQgRGFzaGJvYXJkRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhcnRpYWwvRGFzaGJvYXJkL0Zvb3RlclwiXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vdXRpbHMvd2l0aEF1dGgnXG5cbmNvbnN0IERhc2hib2FyZExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8RGFzaGJvYXJkSGVhZGVyIC8+XG5cbiAgICAgICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvbWFpbj5cblxuXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIHsvKiA8RGFzaGJvYXJkRm9vdGVyIC8+ICovfVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKERhc2hib2FyZExheW91dClcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlkbGVUaW1lb3V0PFQ+KG1zOiBudW1iZXIsIGVycjogRXJyb3IpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKSwgbXMpKVxuICApXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgaWRsZVRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gICAgKSxcbiAgXSlcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBpZGxlVGltZW91dDxSb3V0ZUxvYWRlckVudHJ5PihcbiAgICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgcGFyc2VkSHJlZjogVXJsT2JqZWN0LFxuICBwYWdlczogc3RyaW5nW10sXG4gIGFwcGx5QmFzZVBhdGggPSB0cnVlXG4pIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgcmV0dXJuIHBhcnNlZEhyZWZcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHJvdXRlID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlbXVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXNQYXRoKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHJvdXRlID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyh1cmwpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgRGFzaGJvYXJkTGF5b3V0IGZyb20gJy4uLy4uL2xheW91dHMvRGFzaGJvYXJkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlRmFjdG9yeSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUGVyc29uYWxJbmZvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3VwcGxpZXJSZWdpc3RyYXRpb24vUGVyc29uYWxJbmZvJ1xuaW1wb3J0IFVwbG9hZFBob3RvcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N1cHBsaWVyUmVnaXN0cmF0aW9uL1VwbG9hZFBob3RvcydcbmltcG9ydCBWZWhpY2xlRGV0YWlscyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N1cHBsaWVyUmVnaXN0cmF0aW9uL1ZlaGljbGVEZXRhaWxzJ1xuaW1wb3J0IFVwbG9hZFZlaGljbGVQaG90b3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdXBwbGllclJlZ2lzdHJhdGlvbi9VcGxvYWRWZWhpY2xlUGhvdG9zJ1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgeyBnZXRNZSB9IGZyb20gJy4uLy4uL3V0aWxzL3Byb3ZpZGVycydcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyByZWNvdmVyT3duZXIgfSBmcm9tICcuLi8uLi9hcGkvb3duZXIvcmVjb3Zlck93bmVyJ1xuaW1wb3J0IHsgZ2V0Q2VwIH0gZnJvbSAnLi4vLi4vYXBpL2RyaXZlci91cGRhdGVEcml2ZXInXG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRnVsbFBhZ2VMb2FkZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VJL0xvYWRlcidcbmltcG9ydCB7IGNyZWF0ZUZpbGUgfSBmcm9tICcuLi8uLi9hcGkvZmlsZXMvY3JlYXRlRmlsZXMnXG5pbXBvcnQgeyBjcmVhdGVDYXIgfSBmcm9tICcuLi8uLi9hcGkvb3duZXIvY2Fycy9jcmVhdGVDYXInXG5cblxuXG5jb25zdCBTdXBwbGllclJlZ2lzdHJhdGlvbkZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW293bmVyLCBzZXRPd25lcl0gPSB1c2VTdGF0ZSh7fSlcblxuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbbm9tZSwgc2V0bm9tZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjZWx1bGFyLCBzZXRjZWx1bGFyXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjcGYsIHNldGNwZl0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbY2VwLCBzZXRjZXBdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2VzdGFkbywgc2V0ZXN0YWRvXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtiYWlycm8sIHNldGJhaXJyb10gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbcnVhLCBzZXRydWFdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW251bWVybywgc2V0bnVtZXJvXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjaWRhZGUsIHNldGNpZGFkZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbY29tcGxlbWVudG8sIHNldGNvbXBsZW1lbnRvXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjaWRhZGVJZCwgc2V0Q2lkYWRlSWRdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW3Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuXG4gIGNvbnN0IFttYXJjYUNhciwgc2V0TWFyY2FDYXJdID0gdXNlU3RhdGUoXCJhYVwiKVxuICBjb25zdCBbbW9kZWxvQ2FyLCBzZXRNb2RlbG9DYXJdID0gdXNlU3RhdGUoXCJhXCIpXG4gIGNvbnN0IFthbm9DYXIsIHNldEFub0Nhcl0gPSB1c2VTdGF0ZShcIjIwMjFcIilcbiAgY29uc3QgW3BsYWNhQ2FyLCBzZXRQbGFjYUNhcl0gPSB1c2VTdGF0ZShcImFcIilcbiAgY29uc3QgW2NlcENhciwgc2V0Q2VwQ2FyXSA9IHVzZVN0YXRlKFwiYVwiKVxuICBjb25zdCBbZXN0YWRvQ2FyLCBzZXRFc3RhZG9DYXJdID0gdXNlU3RhdGUoXCJhXCIpXG4gIGNvbnN0IFtjaWRhZGVDYXIsIHNldENpZGFkZUNhcl0gPSB1c2VTdGF0ZShcImFcIilcbiAgY29uc3QgW3J1YUNhciwgc2V0UnVhQ2FyXSA9IHVzZVN0YXRlKFwiYVwiKVxuICBjb25zdCBbc2VtYW5hQ2FyLCBzZXRTZW1hbmFDYXJdID0gdXNlU3RhdGUoXCJhXCIpXG4gIGNvbnN0IFtjYXVjYW9DYXIsIHNldENhdWNhb0Nhcl0gPSB1c2VTdGF0ZShcImFcIilcbiAgY29uc3QgW2RpYXJpYUNhciwgc2V0RGlhcmlhQ2FyXSA9IHVzZVN0YXRlKFwiYVwiKVxuICBjb25zdCBbbnVtZXJvQ2FyLCBzZXROdW1lcm9DYXJdID0gdXNlU3RhdGUoXCJhXCIpXG4gIGNvbnN0IFtjb21wbGVtZW50b0Nhciwgc2V0Q29tcGxlbWVudG9DYXJdID0gdXNlU3RhdGUoXCJhXCIpXG4gIGNvbnN0IFtiYWlycm9DYXIsIHNldEJhaXJyb0Nhcl0gPSB1c2VTdGF0ZShcImFcIilcbiAgY29uc3QgW2NpZGFkZUlkQ2FyLCBzZXRDaWRhZGVJZENhcl0gPSB1c2VTdGF0ZShcImFcIilcblxuICBjb25zdCBbZnJvbnRhbElkLCBzZXRGcm9udGFsSWRdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2Zyb250YWxVcmwsIHNldEZyb250YWxVcmxdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2xvYWRpbmdGcm9udGFsLCBzZXRMb2FkaW5nRnJvbnRhbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2xhdGVyYWxEaXJlaXRhSWQsIHNldExhdGVyYWxEaXJlaXRhSWRdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2xhdGVyYWxEaXJlaXRhVXJsLCBzZXRMYXRlcmFsRGlyZWl0YVVybF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbG9hZGluZ0xhdGVyYWxEaXJlaXRhLCBzZXRMb2FkaW5nTGF0ZXJhbERpcmVpdGFdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtsYXRlcmFsRXNxdWVyZGFJZCwgc2V0TGF0ZXJhbEVzcXVlcmRhSWRdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2xhdGVyYWxFc3F1ZXJkYVVybCwgc2V0TGF0ZXJhbEVzcXVlcmRhVXJsXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtsb2FkaW5nTGF0ZXJhbEVzcXVlcmRhLCBzZXRMb2FkaW5nTGF0ZXJhbEVzcXVlcmRhXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZnVuZG9JZCwgc2V0RnVuZG9JZF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZnVuZG9VcmwsIHNldEZ1bmRvVXJsXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtsb2FkaW5nRnVuZG8sIHNldExvYWRpbmdGdW5kb10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3BhaW5lbEludGVybm9JZCwgc2V0UGFpbmVsSW50ZXJub0lkXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtwYWluZWxJbnRlcm5vVXJsLCBzZXRQYWluZWxJbnRlcm5vVXJsXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtsb2FkaW5nUGFpbmVsSW50ZXJubywgc2V0TG9hZGluZ1BhaW5lbEludGVybm9dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjYXJQcm9jZXNzaW5nLCBzZXRDYXJQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlY292ZXJPd25lcih7fSwgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9KVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBzZXRPd25lcihkYXRhKVxuICAgICAgc2V0bm9tZShkYXRhLm5vbWUpXG4gICAgICBzZXRlbWFpbChkYXRhLmVtYWlsKVxuICAgICAgc2V0Y2VsdWxhcihkYXRhLmNlbHVsYXIpXG4gICAgICBpZiAoZGF0YS5wZXNzb2FfZmlzaWNhICYmIGRhdGEucGVzc29hX2Zpc2ljYS5jcGYpIHtcbiAgICAgICAgc2V0Y3BmKGRhdGEucGVzc29hX2Zpc2ljYS5jcGYpXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmVuZGVyZWNvLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBhZGRyID0gZGF0YS5lbmRlcmVjb1swXVxuICAgICAgICBpZiAoYWRkci5jaWRhZGUgJiYgYWRkci5jaWRhZGUuZGVzY3JpY2FvKSB7XG4gICAgICAgICAgc2V0Y2lkYWRlKGFkZHIuY2lkYWRlLmRlc2NyaWNhbylcbiAgICAgICAgICBzZXRDaWRhZGVJZChhZGRyLmNpZGFkZS5pZClcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWRkci5jaWRhZGUgJiYgYWRkci5jaWRhZGUuZXN0YWRvICYmIGFkZHIuY2lkYWRlLmVzdGFkby5kZXNjcmljYW8pIHtcbiAgICAgICAgICBzZXRlc3RhZG8oYWRkci5jaWRhZGUuZXN0YWRvLmRlc2NyaWNhbylcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWRkci5jZXApIHtcbiAgICAgICAgICBzZXRjZXAoYWRkci5jZXApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFkZHIuYmFpcnJvKSB7XG4gICAgICAgICAgc2V0YmFpcnJvKGFkZHIuYmFpcnJvKVxuICAgICAgICB9XG4gICAgICAgIGlmIChhZGRyLmxvZ3JhZG91cm8pIHtcbiAgICAgICAgICBzZXRydWEoYWRkci5sb2dyYWRvdXJvKVxuICAgICAgICB9XG4gICAgICAgIGlmIChhZGRyLm51bWVybykge1xuICAgICAgICAgIHNldG51bWVybyhhZGRyLm51bWVybylcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWRkci5jb21wbGVtZW50bykge1xuICAgICAgICAgIHNldGNvbXBsZW1lbnRvKGFkZHIuY29tcGxlbWVudG8pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJvdXRlci5xdWVyeSAmJiByb3V0ZXIucXVlcnkuc3RlcCkge1xuICAgICAgc2V0QWN0aXZlU3RlcChwYXJzZUludChyb3V0ZXIucXVlcnkuc3RlcCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFjdGl2ZVN0ZXAoMilcbiAgICB9XG4gIH0sIFtdKVxuXG5cbiAgY29uc3QgaGFuZGxlT3duZXIgPSBhc3luYyAoZSkgPT4ge1xuXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWVcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgXCJub21lXCI6XG4gICAgICAgIHNldG5vbWUodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiZW1haWxcIjpcbiAgICAgICAgc2V0ZW1haWwodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiY2VsdWxhclwiOlxuICAgICAgICBzZXRjZWx1bGFyKHZhbHVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImNwZlwiOlxuICAgICAgICBzZXRjcGYodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiY2VwXCI6XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWUgPSBcIiwgdmFsdWUpXG4gICAgICAgIHNldGNlcCh2YWx1ZSlcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBjb25zdCBhZGRyID0gYXdhaXQgZ2V0Q2VwKHZhbHVlKVxuICAgICAgICBpZiAoYWRkcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkID0gXCIsIGFkZHIpXG4gICAgICAgICAgc2V0YmFpcnJvKGFkZHIuYmFpcnJvKVxuICAgICAgICAgIHNldHJ1YShhZGRyLmxvZ3JhZG91cm8pXG4gICAgICAgICAgc2V0Y2lkYWRlKGFkZHIuY2lkYWRlLmRlc2NyaWNhbylcbiAgICAgICAgICBzZXRlc3RhZG8oYWRkci5jaWRhZGUuZXN0YWRvLmRlc2NyaWNhbylcbiAgICAgICAgICBzZXRDaWRhZGVJZChhZGRyLmNpZGFkZS5pZClcbiAgICAgICAgfVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImVzdGFkb1wiOlxuICAgICAgICBzZXRlc3RhZG8odmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiYmFpcnJvXCI6XG4gICAgICAgIHNldGJhaXJybyh2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJydWFcIjpcbiAgICAgICAgc2V0cnVhKHZhbHVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImNpZGFkZVwiOlxuICAgICAgICBzZXRjaWRhZGUodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwibnVtZXJvXCI6XG4gICAgICAgIHNldG51bWVybyh2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJjb21wbGVtZW50b1wiOlxuICAgICAgICBzZXRjb21wbGVtZW50byh2YWx1ZSlcbiAgICAgICAgYnJlYWtcblxuICAgIH1cblxuICB9XG5cblxuICBjb25zdCBoYW5kbGVDYXJJbnB1dCA9IGFzeW5jIChlKSA9PiB7XG5cbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZVxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBcIm1hcmNhXCI6XG4gICAgICAgIHNldE1hcmNhQ2FyKHZhbHVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcIm1vZGVsb1wiOlxuICAgICAgICBzZXRNb2RlbG9DYXIodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiYW5vXCI6XG4gICAgICAgIHNldEFub0Nhcih2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJwbGFjYVwiOlxuICAgICAgICBzZXRQbGFjYUNhcih2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJjZXBcIjpcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZSA9IFwiLCB2YWx1ZSlcbiAgICAgICAgc2V0Q2VwQ2FyKHZhbHVlKVxuICAgICAgICBjb25zdCBhZGRyID0gYXdhaXQgZ2V0Q2VwKHZhbHVlKVxuICAgICAgICBpZiAoYWRkcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkID0gXCIsIGFkZHIpXG4gICAgICAgICAgc2V0QmFpcnJvQ2FyKGFkZHIuYmFpcnJvKVxuICAgICAgICAgIHNldFJ1YUNhcihhZGRyLmxvZ3JhZG91cm8pXG4gICAgICAgICAgc2V0Q2lkYWRlQ2FyKGFkZHIuY2lkYWRlLmRlc2NyaWNhbylcbiAgICAgICAgICBzZXRFc3RhZG9DYXIoYWRkci5jaWRhZGUuZXN0YWRvLmRlc2NyaWNhbylcbiAgICAgICAgICBzZXRDaWRhZGVJZENhcihhZGRyLmNpZGFkZS5pZClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImVzdGFkb1wiOlxuICAgICAgICBzZXRFc3RhZG9DYXIodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwicnVhXCI6XG4gICAgICAgIHNldFJ1YUNhcih2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJudW1lcm9cIjpcbiAgICAgICAgc2V0TnVtZXJvQ2FyKHZhbHVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImNvbXBsZW1lbnRvXCI6XG4gICAgICAgIHNldENvbXBsZW1lbnRvQ2FyKHZhbHVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcInNlbWFuYVwiOlxuICAgICAgICBzZXRTZW1hbmFDYXIodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiY2F1Y2FvXCI6XG4gICAgICAgIHNldENhdWNhb0Nhcih2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJkaWFyaWFcIjpcbiAgICAgICAgc2V0RGlhcmlhQ2FyKHZhbHVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImNpZGFkZVwiOlxuICAgICAgICBzZXRDaWRhZGVDYXIodmFsdWUpXG4gICAgICAgIGJyZWFrXG5cbiAgICB9XG4gIH1cblxuXG4gIGNvbnN0IG9uRnJvbnRhbENoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRGcm9udGFsVXJsKFVSTC5jcmVhdGVPYmplY3RVUkwodmFsdWUpKVxuICAgIH1cblxuICAgIHNldExvYWRpbmdGcm9udGFsKHRydWUpXG5cbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgXCJmaWxlXCIsXG4gICAgICB2YWx1ZVxuICAgIClcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjcmVhdGVGaWxlKGZvcm1EYXRhKVxuXG4gICAgc2V0TG9hZGluZ0Zyb250YWwoZmFsc2UpXG5cbiAgICBpZiAocmVzKSB7XG4gICAgICBzZXRGcm9udGFsSWQocmVzLmlkKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uTGF0ZXJhbERpcmVpdGFDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgc2V0TGF0ZXJhbERpcmVpdGFVcmwoVVJMLmNyZWF0ZU9iamVjdFVSTCh2YWx1ZSkpXG4gICAgfVxuICAgIHNldExvYWRpbmdMYXRlcmFsRGlyZWl0YSh0cnVlKVxuXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgIFwiZmlsZVwiLFxuICAgICAgdmFsdWVcbiAgICApXG4gICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlRmlsZShmb3JtRGF0YSlcbiAgICBzZXRMb2FkaW5nTGF0ZXJhbERpcmVpdGEoZmFsc2UpXG5cbiAgICBpZiAocmVzKSB7XG4gICAgICBzZXRMYXRlcmFsRGlyZWl0YUlkKHJlcy5pZClcblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uTGF0ZXJhbEVzcXVlcmRhQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNldExhdGVyYWxFc3F1ZXJkYVVybChVUkwuY3JlYXRlT2JqZWN0VVJMKHZhbHVlKSlcbiAgICB9XG4gICAgc2V0TG9hZGluZ0xhdGVyYWxFc3F1ZXJkYSh0cnVlKVxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICBcImZpbGVcIixcbiAgICAgIHZhbHVlXG4gICAgKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZUZpbGUoZm9ybURhdGEpXG4gICAgc2V0TG9hZGluZ0xhdGVyYWxFc3F1ZXJkYShmYWxzZSlcblxuICAgIGlmIChyZXMpIHtcbiAgICAgIHNldExhdGVyYWxFc3F1ZXJkYUlkKHJlcy5pZClcblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uRnVuZG9DaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgc2V0RnVuZG9VcmwoVVJMLmNyZWF0ZU9iamVjdFVSTCh2YWx1ZSkpXG4gICAgfVxuICAgIHNldExvYWRpbmdGdW5kbyh0cnVlKVxuXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgIFwiZmlsZVwiLFxuICAgICAgdmFsdWVcbiAgICApXG4gICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlRmlsZShmb3JtRGF0YSlcbiAgICBzZXRMb2FkaW5nRnVuZG8oZmFsc2UpXG5cbiAgICBpZiAocmVzKSB7XG4gICAgICBzZXRGdW5kb0lkKHJlcy5pZClcblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uUGFpbmVsSW50ZXJub0NoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRQYWluZWxJbnRlcm5vVXJsKFVSTC5jcmVhdGVPYmplY3RVUkwodmFsdWUpKVxuICAgIH1cbiAgICBzZXRMb2FkaW5nUGFpbmVsSW50ZXJubyh0cnVlKVxuXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgIFwiZmlsZVwiLFxuICAgICAgdmFsdWVcbiAgICApXG4gICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlRmlsZShmb3JtRGF0YSlcbiAgICBzZXRMb2FkaW5nUGFpbmVsSW50ZXJubyhmYWxzZSlcblxuICAgIGlmIChyZXMpIHtcbiAgICAgIHNldFBhaW5lbEludGVybm9JZChyZXMuaWQpXG5cbiAgICB9XG4gIH1cblxuICBjb25zdCB2ZWhpY2xlTmV4dENsaWNrID0gKCkgPT4ge1xuICAgIGlmICghbWFyY2FDYXIgfHwgIW1vZGVsb0NhciB8fCAhYW5vQ2FyIHx8ICFwbGFjYUNhciB8fCAhY2VwQ2FyIHx8ICFlc3RhZG9DYXIgfHwgIWNpZGFkZUNhciB8fCAhcnVhQ2FyIHx8ICFzZW1hbmFDYXIgfHwgIWNhdWNhb0Nhcikge1xuICAgICAgbm90aWZ5KCdlcnJvcicsICdQbGVhc2UgY2hlY2sgdGhlIGlucHV0IGZpZWxkcycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFjdGl2ZVN0ZXAocHJldkFjdGl2ZVN0ZXAgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVwbG9hZENhckRldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hpJyk7XG4gICAgLy9kZWJ1Z2dlclxuICAgXG4gICAgc2V0Q2FyUHJvY2Vzc2luZyh0cnVlKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjcmVhdGVDYXIoe1xuICAgICAgbWFyY2FDYXIsIG1vZGVsb0NhciwgYW5vQ2FyLCBwbGFjYUNhciwgY2VwQ2FyLCBlc3RhZG9DYXIsIGNpZGFkZUNhciwgcnVhQ2FyLCBzZW1hbmFDYXIsXG4gICAgICBjYXVjYW9DYXIsIGRpYXJpYUNhciwgbnVtZXJvQ2FyLCBjb21wbGVtZW50b0NhciwgYmFpcnJvQ2FyLCBjaWRhZGVJZENhcixcbiAgICAgIGZyb250YWxJZCwgbGF0ZXJhbERpcmVpdGFJZCwgbGF0ZXJhbEVzcXVlcmRhSWQsIGZ1bmRvSWQsIHBhaW5lbEludGVybm9JZFxuICAgIH0pXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlZCBkYXRhXCIsIGRhdGEpXG4gICAgICBub3RpZnkoJ3N1Y2Nlc3MnLCAnQ2FyIGFkZGVkIHN1Y2Nlc3NmdWxseScpXG4gICAgfVxuICAgIHNldENhclByb2Nlc3NpbmcoZmFsc2UpXG5cbiAgICAvLyBzZXRBY3RpdmVTdGVwKHByZXZBY3RpdmVTdGVwID0+IHByZXZBY3RpdmVTdGVwICsgMSlcbiAgfVxuXG5cbiAgY29uc3QgZ2V0U3RlcENvbnRlbnQgPSBzdGVwID0+IHtcbiAgICBzd2l0Y2ggKHN0ZXApIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIDxQZXJzb25hbEluZm9cbiAgICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxuICAgICAgICAgIG93bmVyPXt7IG5vbWUsIGVtYWlsLCBjZWx1bGFyLCBjcGYsIGNlcCwgZXN0YWRvLCBiYWlycm8sIHJ1YSwgbnVtZXJvLCBjaWRhZGUsIGNvbXBsZW1lbnRvLCBjaWRhZGVJZCB9fVxuICAgICAgICAgIGhhbmRsZU93bmVyPXtoYW5kbGVPd25lcn1cbiAgICAgICAgICBwZXJzb25hbE5leHRDbGljaz17KCkgPT4gc2V0QWN0aXZlU3RlcChwcmV2QWN0aXZlU3RlcCA9PiBwcmV2QWN0aXZlU3RlcCArIDEpfVxuICAgICAgICAgIHByb2Nlc3Npbmc9e3Byb2Nlc3Npbmd9XG4gICAgICAgIC8+XG5cbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIDxVcGxvYWRQaG90b3NcbiAgICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxuICAgICAgICAgIG93bmVyPXt7IG5vbWUsIGVtYWlsLCBjZWx1bGFyLCBjcGYsIGNlcCwgZXN0YWRvLCBiYWlycm8sIHJ1YSwgbnVtZXJvLCBjaWRhZGUsIGNvbXBsZW1lbnRvLCBjaWRhZGVJZCB9fVxuICAgICAgICAgIHByZXZPd25lcj17b3duZXJ9XG4gICAgICAgICAgcGVyc29uYWxOZXh0Q2xpY2s9eygpID0+IHNldEFjdGl2ZVN0ZXAocHJldkFjdGl2ZVN0ZXAgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKX1cbiAgICAgICAgICB1cGxvYWRCYWNrPXsoKSA9PiBzZXRBY3RpdmVTdGVwKHByZXZBY3RpdmVTdGVwID0+IHByZXZBY3RpdmVTdGVwIC0gMSl9XG4gICAgICAgIC8+XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIDxWZWhpY2xlRGV0YWlsc1xuICAgICAgICAgIG1hcmNhPXttYXJjYUNhcn1cbiAgICAgICAgICBtb2RlbG89e21vZGVsb0Nhcn1cbiAgICAgICAgICBhbm89e2Fub0Nhcn1cbiAgICAgICAgICBwbGFjYT17cGxhY2FDYXJ9XG4gICAgICAgICAgY2VwPXtjZXBDYXJ9XG4gICAgICAgICAgZXN0YWRvPXtlc3RhZG9DYXJ9XG4gICAgICAgICAgY2lkYWRlPXtjaWRhZGVDYXJ9XG4gICAgICAgICAgcnVhPXtydWFDYXJ9XG4gICAgICAgICAgc2VtYW5hPXtzZW1hbmFDYXJ9XG4gICAgICAgICAgY2F1Y2FvPXtjYXVjYW9DYXJ9XG4gICAgICAgICAgZGlhcmlhPXtkaWFyaWFDYXJ9XG4gICAgICAgICAgbnVtZXJvPXtudW1lcm9DYXJ9XG4gICAgICAgICAgY29tcGxlbWVudG89e2NvbXBsZW1lbnRvQ2FyfVxuICAgICAgICAgIGJhaXJybz17YmFpcnJvQ2FyfVxuICAgICAgICAgIGNpZGFkZUlkPXtjaWRhZGVJZENhcn1cbiAgICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxuICAgICAgICAgIGhhbmRsZUNhcklucHV0PXtoYW5kbGVDYXJJbnB1dH1cbiAgICAgICAgICB2ZWhpY2xlTmV4dENsaWNrPXt2ZWhpY2xlTmV4dENsaWNrfVxuICAgICAgICAgIHZlaGljbGVCYWNrPXsoKSA9PiBzZXRBY3RpdmVTdGVwKHByZXZBY3RpdmVTdGVwID0+IHByZXZBY3RpdmVTdGVwIC0gMSl9XG4gICAgICAgIC8+XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIDxVcGxvYWRWZWhpY2xlUGhvdG9zXG4gICAgICAgICAgbG9hZGluZ0Zyb250YWw9e2xvYWRpbmdGcm9udGFsfVxuICAgICAgICAgIGZyb250YWxVcmw9e2Zyb250YWxVcmx9XG4gICAgICAgICAgb25Gcm9udGFsQ2hhbmdlPXtvbkZyb250YWxDaGFuZ2V9XG5cbiAgICAgICAgICBsb2FkaW5nTGF0ZXJhbERpcmVpdGE9e2xvYWRpbmdMYXRlcmFsRGlyZWl0YX1cbiAgICAgICAgICBsYXRlcmFsRGlyZWl0YVVybD17bGF0ZXJhbERpcmVpdGFVcmx9XG4gICAgICAgICAgb25MYXRlcmFsRGlyZWl0YUNoYW5nZT17b25MYXRlcmFsRGlyZWl0YUNoYW5nZX1cblxuICAgICAgICAgIGxvYWRpbmdMYXRlcmFsRXNxdWVyZGE9e2xvYWRpbmdMYXRlcmFsRXNxdWVyZGF9XG4gICAgICAgICAgbGF0ZXJhbEVzcXVlcmRhVXJsPXtsYXRlcmFsRXNxdWVyZGFVcmx9XG4gICAgICAgICAgb25MYXRlcmFsRXNxdWVyZGFDaGFuZ2U9e29uTGF0ZXJhbEVzcXVlcmRhQ2hhbmdlfVxuXG4gICAgICAgICAgbG9hZGluZ0Z1bmRvPXtsb2FkaW5nRnVuZG99XG4gICAgICAgICAgZnVuZG9Vcmw9e2Z1bmRvVXJsfVxuICAgICAgICAgIG9uRnVuZG9DaGFuZ2U9e29uRnVuZG9DaGFuZ2V9XG5cbiAgICAgICAgICBsb2FkaW5nUGFpbmVsSW50ZXJubz17bG9hZGluZ1BhaW5lbEludGVybm99XG4gICAgICAgICAgcGFpbmVsSW50ZXJub1VybD17cGFpbmVsSW50ZXJub1VybH1cbiAgICAgICAgICBvblBhaW5lbEludGVybm9DaGFuZ2U9e29uUGFpbmVsSW50ZXJub0NoYW5nZX1cblxuICAgICAgICAgIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XG4gICAgICAgICAgcGVyc29uYWxOZXh0Q2xpY2s9eygpID0+IHNldEFjdGl2ZVN0ZXAocHJldkFjdGl2ZVN0ZXAgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKX1cbiAgICAgICAgICB1cGxvYWRCYWNrPXsoKSA9PiBzZXRBY3RpdmVTdGVwKHByZXZBY3RpdmVTdGVwID0+IHByZXZBY3RpdmVTdGVwIC0gMSl9XG4gICAgICAgICAgcHJvY2Vzc2luZz17Y2FyUHJvY2Vzc2luZ31cbiAgICAgICAgICB1cGxvYWRDYXJEZXRhaWxzPXt1cGxvYWRDYXJEZXRhaWxzfVxuICAgICAgICAvPlxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERhc2hib2FyZExheW91dD5cbiAgICAgIHtcbiAgICAgICAgaXNMb2FkaW5nID8gPEZ1bGxQYWdlTG9hZGVyIGxvYWRpbmc9e2lzTG9hZGluZ30gLz4gOlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VwcGxpZXItcmVnLWFyZWEgbWItNVwiPlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHN0eWxlPXt7IHpJbmRleDogOTk5OTkgfX0gLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgbWItM1wiPlxuICAgICAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMCA/ICdNZXVzIGRhZG9zJyA6XG4gICAgICAgICAgICAgICAgYWN0aXZlU3RlcCA9PT0gMSA/ICdVcGxvYWQgRm90b3MnIDpcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVN0ZXAgPT09IDIgPyAnRGFkb3MgZG8gVmXDrWN1bG8nIDpcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3RlcCA9PT0gMyAmJiAnRm90b3MgZG8gVmXDrWN1bG8nfVxuICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTUgcGItM1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVnLXN0ZXAtYnRuICR7YWN0aXZlU3RlcCA9PT0gMCA/ICdyZWctc3RlcC1idG4tYWN0aXZlJyA6IGFjdGl2ZVN0ZXAgPiAwID8gJ3JlZy1zdGVwLWJ0bi1kb25lJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlU3RlcCgwKX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVnLXN0ZXAtaGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPkRhZG9zIFBlc3NvYWlzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlZy1zdGVwLWJ0biAke2FjdGl2ZVN0ZXAgPT09IDEgPyAncmVnLXN0ZXAtYnRuLWFjdGl2ZScgOiBhY3RpdmVTdGVwID4gMSA/ICdyZWctc3RlcC1idG4tZG9uZScgOiAnJ31gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVN0ZXAoMSl9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZy1zdGVwLWhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5VcGxvYWQgRm90b3M8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVnLXN0ZXAtYnRuICR7YWN0aXZlU3RlcCA9PT0gMiA/ICdyZWctc3RlcC1idG4tYWN0aXZlJyA6IGFjdGl2ZVN0ZXAgPiAyID8gJ3JlZy1zdGVwLWJ0bi1kb25lJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlU3RlcCgyKX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVnLXN0ZXAtaGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPkRhZG9zIGRvIFZlw61jdWxvPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwIHx8IDIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVnLXN0ZXAtYnRuICR7YWN0aXZlU3RlcCA9PT0gMyA/ICdyZWctc3RlcC1idG4tYWN0aXZlJyA6IGFjdGl2ZVN0ZXAgPiAzID8gJ3JlZy1zdGVwLWJ0bi1kb25lJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlU3RlcCgzKX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVnLXN0ZXAtaGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPkZvdG9zIGRvIFZlw61jdWxvPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7Z2V0U3RlcENvbnRlbnQoYWN0aXZlU3RlcCl9XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L0Rhc2hib2FyZExheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdXBwbGllclJlZ2lzdHJhdGlvbkZvcm1cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbi8vIGNvbnZlcnQgb2JqZWN0IHRvIEZvcm1EYXRhXG5leHBvcnQgY29uc3Qgbm90aWZ5ID0gKHR5cGUsIG1lc3NhZ2UpID0+IHtcbiAgaWYgKHR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgIHRvYXN0LnN1Y2Nlc3MobWVzc2FnZSwge1xuICAgICAgc3R5bGU6IHsgZm9udFNpemU6IDE2IH0sXG4gICAgfSlcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgLy8gaWYgKCFtZXNzYWdlKSBtZXNzYWdlID0gJ1NvbWV0aGluZyBXZW50IFdyb25nLiBUcnkgQWdhaW4hJ1xuICAgIHRvYXN0LmVycm9yKG1lc3NhZ2UsIHtcbiAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiAxNiB9LFxuICAgIH0pXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgdG9hc3Qud2FybmluZyhtZXNzYWdlKVxuICB9IGVsc2Uge1xuICAgIHRvYXN0KG1lc3NhZ2UpXG4gIH1cbn1cblxuLy8gY3VzdG9tIGhlbHBlciB0byB0YWtlIGlucHV0IGZpZWxkXG5leHBvcnQgY29uc3QgdXNlSW5wdXQgPSAoaW5pdGlhbFZhbHVlID0gJycpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlQ2hhbmdlLCBzZXRWYWx1ZV1cbn1cblxuZXhwb3J0IGNvbnN0IHJhdGluZ0RhdGUgPSAoZGF0ZSkgPT4ge1xuICByZXR1cm4gIG1vbWVudC51dGMoZGF0ZSApLmxvY2FsKCkuZm9ybWF0KCdERC9NTU0vWVlZWScpO1xufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBjcmVhdGVQZXJzb24gfSBmcm9tICcuLi9hcGkvY2FkYXN0cm8vY2FwdGFzYW8vY3JlYXRlUGVyc29uJ1xuXG5jb25zdCBkb21haW4gPSBjb25maWcuYmFzZVVybFxuXG5leHBvcnQgY29uc3QgZ2F2UHJvdmlkZXIgPSB7XG4gICAgY2xpZW50SWQ6IGNvbmZpZy5HQVZfQ0xJRU5UX0lELFxuICAgIGNsaWVudFNlY3JldDogY29uZmlnLkdBVl9DTElFTlRfU0VDUkVULFxuICAgIGdyYW50X3R5cGU6IGNvbmZpZy5ncmFudFR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gYXN5bmMgKGNyZWRlbnRpYWxzKSA9PiB7XG4gICAgY3JlZGVudGlhbHMuc2NvcGUgPSAnJ1xuICAgIGNyZWRlbnRpYWxzLmdyYW50X3R5cGUgPSBnYXZQcm92aWRlci5ncmFudF90eXBlXG4gICAgY3JlZGVudGlhbHMuY2xpZW50X2lkID0gZ2F2UHJvdmlkZXIuY2xpZW50SWRcbiAgICBjcmVkZW50aWFscy5jbGllbnRfc2VjcmV0ID0gZ2F2UHJvdmlkZXIuY2xpZW50U2VjcmV0XG4gICAgLy9jb25zb2xlLmxvZyhcImNyZWFkaWFudGlhbHMgID0gXCIsIGNyZWRlbnRpYWxzKVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogdG9rZW5zIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAgICAgYCR7ZG9tYWlufS9vYXV0aC90b2tlbmAsXG4gICAgICAgICAgICBjcmVkZW50aWFsc1xuICAgICAgICApXG4gICAgICAgLy8gY29uc29sZS5sb2codG9rZW5zKVxuICAgICAgICByZXR1cm4gdG9rZW5zXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNZSA9IGFzeW5jIChhY2Nlc3NfdG9rZW4pID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRhdGE6IG1lIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgICBgJHtkb21haW59L2FwaS9tZWAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIG1lXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxubGV0IGRlZmF1bHRPcHRpb25zXG5jb25zdCBjbGllbnQgPSAodG9rZW4gPSBudWxsKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiAodXJsLCB0b2tlbk5lZWQsIHRva2VuLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICdlbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRva2VuTmVlZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMuaGVhZGVycywge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdE9wdGlvbnMnLCBkZWZhdWx0T3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBheGlvcy5nZXQodXJsLCB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgcG9zdDogKHVybCwgdG9rZW5OZWVkLCB0b2tlbiwgZGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiAnZW4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b2tlbk5lZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLmhlYWRlcnMsIHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QodXJsLCBkYXRhLCB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgcHV0OiAodXJsLCB0b2tlbk5lZWQsIHRva2VuLCBkYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICdlbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRva2VuTmVlZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMuaGVhZGVycywge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucHV0KHVybCwgZGF0YSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIHBhdGNoOiAodXJsLCB0b2tlbk5lZWQsIHRva2VuLCBkYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICdlbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRva2VuTmVlZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMuaGVhZGVycywge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucGF0Y2godXJsLCBkYXRhLCB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlOiAodXJsLCB0b2tlbk5lZWQsIHRva2VuLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICdlbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRva2VuTmVlZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMuaGVhZGVycywge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKHVybCwgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9KVxuICAgICAgICB9LFxuICAgIH1cbn1cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gY2xpZW50KG51bGwpXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdCIsImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IHdpdGhBdXRoID0gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgICAgIGNvbnN0IFt2ZXJpZmllZCwgc2V0VmVyaWZpZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICAgICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICAgICAgICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgc2V0VmVyaWZpZWQodHJ1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pXG5cbiAgICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9maVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9oaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9yaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==