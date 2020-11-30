/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes_routes__WEBPACK_IMPORTED_MODULE_1__);\n\n\nwindow.addEventListener('load', _routes_routes__WEBPACK_IMPORTED_MODULE_1___default.a);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\desktop\\\\developer\\\\to-do-list\\\\src\\\\routes\\\\routes.js: Unexpected token, expected \\\"(\\\" (17:43)\\n\\n  15 | \\n  16 | \\tconst addBTN = null || document.getElementById('add-activity-btn')\\n> 17 | \\taddBTN.addEventListener('click', function {\\n     | \\t                                          ^\\n  18 | \\t\\ttoDo(true, false, false)\\n  19 | \\t})\\n  20 | \\n    at Parser._raise (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:748:17)\\n    at Parser.raiseWithData (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:741:17)\\n    at Parser.raise (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:735:17)\\n    at Parser.unexpected (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9097:16)\\n    at Parser.expect (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9083:28)\\n    at Parser.parseFunctionParams (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12386:10)\\n    at Parser.parseFunction (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12366:10)\\n    at Parser.parseFunctionOrFunctionSent (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10632:17)\\n    at Parser.parseExprAtom (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10468:21)\\n    at Parser.parseExprSubscripts (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10122:23)\\n    at Parser.parseUpdate (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10102:21)\\n    at Parser.parseMaybeUnary (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10091:17)\\n    at Parser.parseExprOps (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9961:23)\\n    at Parser.parseMaybeConditional (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9935:23)\\n    at Parser.parseMaybeAssign (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9898:21)\\n    at D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9865:39\\n    at Parser.allowInAnd (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11521:12)\\n    at Parser.parseMaybeAssignAllowIn (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9865:17)\\n    at Parser.parseExprListItem (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11282:18)\\n    at Parser.parseCallExpressionArguments (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10323:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10231:29)\\n    at Parser.parseSubscript (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10167:19)\\n    at Parser.parseSubscripts (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10139:19)\\n    at Parser.parseExprSubscripts (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10128:17)\\n    at Parser.parseUpdate (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10102:21)\\n    at Parser.parseMaybeUnary (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10091:17)\\n    at Parser.parseExprOps (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9961:23)\\n    at Parser.parseMaybeConditional (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9935:23)\\n    at Parser.parseMaybeAssign (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9898:21)\\n    at Parser.parseExpressionBase (D:\\\\desktop\\\\developer\\\\to-do-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9843:23)\");\n\n//# sourceURL=webpack:///./src/routes/routes.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/styles.css?");

/***/ })

/******/ });