/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _module2 = __webpack_require__(1);

	var _ContextHolder = __webpack_require__(2);

	var m1 = new _module2.module();
	_module2.module.testMethod();
	_module2.module.testMethod2();

	var m2 = function m2(str) {
	  return console.log("tests" + str);
	};

	m2("arrrow");

	var configHolder = new _ContextHolder.ContextHolder();
	console.log(configHolder);
	var map = configHolder.getCacheMap;

	// console.log(map.get(1));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _module = function () {
	  function module() {
	    _classCallCheck(this, module);

	    console.log("LOG TEST");
	  }

	  _createClass(module, null, [{
	    key: "testMethod2",
	    value: function testMethod2() {
	      console.log("LOG TEST 002");
	    }
	  }, {
	    key: "testMethod",
	    value: function testMethod() {
	      console.log('testMethod');
	    }
	  }]);

	  return module;
	}();

	exports.module = _module;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	*
	*
	*
	*
	* @desc ContextHodler Object는 상수풀을 가진 객체를 생성하고 관리하는 오브젝트이다.
	* @author ByeongGi Kim
	* @see
	* @version 0.1
	*/
	var ContextHolder = exports.ContextHolder = function () {
	  function ContextHolder() {
	    _classCallCheck(this, ContextHolder);
	  }

	  _createClass(ContextHolder, [{
	    key: "construct",
	    value: function construct() {
	      this.cacheMap = new Map();
	    }
	  }, {
	    key: "mergeMap",
	    value: function mergeMap() {
	      // return
	    }
	  }, {
	    key: "setCacheMap",
	    set: function set(value) {
	      this.cacheMap = value;
	    }
	  }, {
	    key: "getCacheMap",
	    get: function get() {
	      return this.cacheMap;
	    }
	  }]);

	  return ContextHolder;
	}();

/***/ }
/******/ ]);