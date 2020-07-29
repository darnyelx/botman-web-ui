(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["package_name"] = factory();
	else
		root["package_name"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 142);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(29)('wks');
var uid = __webpack_require__(21);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(40);
var isBuffer = __webpack_require__(132);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(43);
var toPrimitive = __webpack_require__(32);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(3);
var ctx = __webpack_require__(17);
var hide = __webpack_require__(7);
var has = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(100);
var defined = __webpack_require__(23);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(16);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(48);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f;
var has = __webpack_require__(6);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(2);
var normalizeHeaderName = __webpack_require__(79);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(36);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(36);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(16);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(29)('keys');
var uid = __webpack_require__(21);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(15) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(23);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(15);
var wksExt = __webpack_require__(34);
var defineProperty = __webpack_require__(9).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(2);
var settle = __webpack_require__(71);
var buildURL = __webpack_require__(74);
var parseHeaders = __webpack_require__(80);
var isURLSameOrigin = __webpack_require__(78);
var createError = __webpack_require__(39);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(73);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(76);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(70);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(12);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(24)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(15);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(51);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(14);
var $iterCreate = __webpack_require__(104);
var setToStringTag = __webpack_require__(20);
var getPrototypeOf = __webpack_require__(112);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(109);
var enumBugKeys = __webpack_require__(25);
var IE_PROTO = __webpack_require__(28)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(24)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(42).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(48);
var hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toIObject = __webpack_require__(11);
var arrayIndexOf = __webpack_require__(96)(false);
var IE_PROTO = __webpack_require__(28)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(26);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(16);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(17);
var invoke = __webpack_require__(99);
var html = __webpack_require__(42);
var cel = __webpack_require__(24);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(12)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(30);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(116)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(44)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120);
var global = __webpack_require__(0);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(14);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ReCaptchaInstance = (function () {
    function ReCaptchaInstance(siteKey, recaptchaID, recaptcha) {
        this.siteKey = siteKey;
        this.recaptchaID = recaptchaID;
        this.recaptcha = recaptcha;
        this.styleContainer = null;
    }
    ReCaptchaInstance.prototype.execute = function (action) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.recaptcha.execute(this.recaptchaID, { action: action })];
            });
        });
    };
    ReCaptchaInstance.prototype.getSiteKey = function () {
        return this.siteKey;
    };
    ReCaptchaInstance.prototype.hideBadge = function () {
        if (this.styleContainer !== null) {
            return;
        }
        this.styleContainer = document.createElement('style');
        this.styleContainer.innerHTML = '.grecaptcha-badge{display:none !important;}';
        document.head.appendChild(this.styleContainer);
    };
    ReCaptchaInstance.prototype.showBadge = function () {
        if (this.styleContainer === null) {
            return;
        }
        document.head.removeChild(this.styleContainer);
        this.styleContainer = null;
    };
    return ReCaptchaInstance;
}());
exports.ReCaptchaInstance = ReCaptchaInstance;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4a5d4d855d11fae79cc864bdacb2f479.eot";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b20949b3a679c30d09f64acd5d3317d.eot";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9a1672a8a8d91fbf82c71f451d495253.eot";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(139)
}
var Component = __webpack_require__(137)(
  /* script */
  __webpack_require__(82),
  /* template */
  __webpack_require__(138),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);
var bind = __webpack_require__(40);
var Axios = __webpack_require__(67);
var defaults = __webpack_require__(22);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(37);
axios.CancelToken = __webpack_require__(66);
axios.isCancel = __webpack_require__(38);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(81);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(37);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(22);
var utils = __webpack_require__(2);
var InterceptorManager = __webpack_require__(68);
var dispatchRequest = __webpack_require__(69);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);
var transformData = __webpack_require__(72);
var isCancel = __webpack_require__(38);
var defaults = __webpack_require__(22);
var isAbsoluteURL = __webpack_require__(77);
var combineURLs = __webpack_require__(75);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(39);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(89), __webpack_require__(87), __webpack_require__(83), __webpack_require__(88), __webpack_require__(133), __webpack_require__(64)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('babel-runtime/regenerator'), require('babel-runtime/helpers/asyncToGenerator'), require('babel-runtime/core-js/object/keys'), require('babel-runtime/helpers/typeof'), require('recaptcha-v3'), require('axios'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.regenerator, global.asyncToGenerator, global.keys, global._typeof, global.recaptchaV3, global.axios);
        global.TinkerComponent = mod.exports;
    }
})(this, function (exports, _regenerator, _asyncToGenerator2, _keys, _typeof2, _recaptchaV, axios) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _regenerator2 = _interopRequireDefault(_regenerator);

    var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

    var _keys2 = _interopRequireDefault(_keys);

    var _typeof3 = _interopRequireDefault(_typeof2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = {
        props: {
            apiEndpoint: {
                default: '/botman'
            },
            userId: {
                default: +new Date()
            }
        },

        data: function data() {
            return {
                messages: [],
                newMessage: null
            };
        },
        mounted: function mounted() {
            var _this = this;

            var control = document.getElementById("attachment");
            control.addEventListener("change", function () {
                var file = control.files[0];
                if (file) {
                    var type = file.type.split('/')[0];
                    var reader = new FileReader();

                    if (type !== 'video' && type !== 'audio' && type !== 'image') {
                        type = 'file';
                    }

                    reader.addEventListener("load", function () {
                        _this._addMessage(null, {
                            type: type,
                            url: reader.result
                        }, true);

                        _this.callAPI(null, false, type);

                        control.value = '';
                    }, false);

                    reader.readAsDataURL(file);
                }
            }, false);
            this.callAPI("rdb", false);
        },
        updated: function updated() {
            var objDiv = document.getElementById("messageBody");
            objDiv.scrollTop = objDiv.scrollHeight;
        },


        methods: {
            parseMessage: function parseMessage(text) {
                console.log(typeof text === 'undefined' ? 'undefined' : (0, _typeof3.default)(text));
                if (typeof text == "string") {

                    text = text.replace(/##link.*(?=.*goto='(.*?)')(?=.*name='(.*?)').*?##/gi, '<a target="_blank" href=\"$1\">$2</a>');
                    return text;
                }
                return text;
            },
            callAPI: function callAPI(text) {
                var interactive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var attachment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                var _this2 = this;

                var callback = arguments[3];
                var captcha_response = arguments[4];

                var data = new FormData();
                var postData = {
                    driver: 'web',
                    userId: this.userId,
                    message: text,
                    captcha_response: captcha_response,
                    attachment: attachment,
                    interactive: interactive,
                    attachment_data: document.getElementById('attachment').files[0]
                };

                (0, _keys2.default)(postData).forEach(function (key) {
                    return data.append(key, postData[key]);
                });

                axios.post(this.apiEndpoint, data).then(function (response) {
                    var messages = response.data.messages || [];
                    messages.forEach(function (msg) {
                        _this2._addMessage(msg.text, msg.attachment, false, msg);
                    });

                    if (callback) {
                        callback(response.data);
                    }
                });
            },
            performAction: function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(value, message, isCaptchaVerification) {
                    var captcha_response, recaptcha;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    captcha_response = void 0;

                                    if (!isCaptchaVerification) {
                                        _context.next = 14;
                                        break;
                                    }

                                    _context.prev = 2;
                                    _context.next = 5;
                                    return (0, _recaptchaV.load)('6LcOh7QZAAAAAF-ZopcjRqThzJ1kW9QtVxRfLzm-');

                                case 5:
                                    recaptcha = _context.sent;
                                    _context.next = 8;
                                    return recaptcha.execute('submit');

                                case 8:
                                    captcha_response = _context.sent;
                                    _context.next = 14;
                                    break;

                                case 11:
                                    _context.prev = 11;
                                    _context.t0 = _context['catch'](2);

                                    console.log(_context.t0);

                                case 14:

                                    this.callAPI(value, true, null, function (response) {
                                        message.actions = null;
                                    }, captcha_response);

                                case 15:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[2, 11]]);
                }));

                function performAction(_x3, _x4, _x5) {
                    return _ref.apply(this, arguments);
                }

                return performAction;
            }(),
            _addMessage: function _addMessage(text, attachment, isMine) {
                var original = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

                this.messages.push({
                    'isMine': isMine,
                    'user': isMine ? '👨' : '🤖',
                    'text': this.parseMessage(text),
                    'original': original,
                    'attachment': attachment || {}
                });
            },
            sendMessage: function sendMessage() {
                var messageText = this.newMessage;
                this.newMessage = '';
                if (messageText === 'clear') {
                    this.messages = [];
                    return;
                }

                //Don't send empty messages
                if (messageText == "") {
                    return;
                }

                this._addMessage(messageText, null, true);
                this.callAPI(messageText);
            }
        }
    };
});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(84);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
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
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(86);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(85);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(135);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
module.exports = __webpack_require__(3).Object.keys;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(122);
__webpack_require__(124);
__webpack_require__(125);
module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
__webpack_require__(55);
__webpack_require__(126);
__webpack_require__(127);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(57);
module.exports = __webpack_require__(34).f('iterator');


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11);
var toLength = __webpack_require__(54);
var toAbsoluteIndex = __webpack_require__(117);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(47);
var pIE = __webpack_require__(27);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(17);
var call = __webpack_require__(103);
var isArrayIter = __webpack_require__(101);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(54);
var getIterFn = __webpack_require__(119);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(12);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(14);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(12);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(45);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(20);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(21)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(6);
var setDesc = __webpack_require__(9).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(13)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(53).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(12)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(18);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(27);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(32);
var has = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(43);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11);
var gOPN = __webpack_require__(46).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(6);
var toObject = __webpack_require__(31);
var IE_PROTO = __webpack_require__(28)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10);
var core = __webpack_require__(3);
var fails = __webpack_require__(13);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(3);
var dP = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(5);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30);
var defined = __webpack_require__(23);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(41);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(14);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(94);
var step = __webpack_require__(106);
var Iterators = __webpack_require__(14);
var toIObject = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(44)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(31);
var $keys = __webpack_require__(18);

__webpack_require__(113)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(15);
var global = __webpack_require__(0);
var ctx = __webpack_require__(17);
var classof = __webpack_require__(41);
var $export = __webpack_require__(10);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(16);
var anInstance = __webpack_require__(95);
var forOf = __webpack_require__(98);
var speciesConstructor = __webpack_require__(52);
var task = __webpack_require__(53).set;
var microtask = __webpack_require__(108)();
var newPromiseCapabilityModule = __webpack_require__(26);
var perform = __webpack_require__(49);
var userAgent = __webpack_require__(118);
var promiseResolve = __webpack_require__(50);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(114)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(20)($Promise, PROMISE);
__webpack_require__(115)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(105)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(51);
var META = __webpack_require__(107).KEY;
var $fails = __webpack_require__(13);
var shared = __webpack_require__(29);
var setToStringTag = __webpack_require__(20);
var uid = __webpack_require__(21);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(34);
var wksDefine = __webpack_require__(33);
var enumKeys = __webpack_require__(97);
var isArray = __webpack_require__(102);
var anObject = __webpack_require__(4);
var isObject = __webpack_require__(8);
var toObject = __webpack_require__(31);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(32);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(45);
var gOPNExt = __webpack_require__(111);
var $GOPD = __webpack_require__(110);
var $GOPS = __webpack_require__(47);
var $DP = __webpack_require__(9);
var $keys = __webpack_require__(18);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(46).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(27).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(15)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(10);
var core = __webpack_require__(3);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(52);
var promiseResolve = __webpack_require__(50);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(26);
var perform = __webpack_require__(49);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33)('asyncIterator');


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33)('observable');


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback);", ""]);
exports.i(__webpack_require__(130), "");
exports.i(__webpack_require__(129), "");

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "/*!\n *   AdminLTE v3.0.6-pre\n *   Author: Colorlib\n *   Website: AdminLTE.io <http://adminlte.io>\n *   License: Open source - MIT <http://opensource.org/licenses/MIT>\n *//*!\n * Bootstrap v4.4.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:\"Source Sans Pro\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;background-color:transparent}a,a:hover{text-decoration:none}a:hover{color:#0056b3}a:not([href]),a:not([href]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem}.display-1,.display-2{font-weight:300;line-height:1.2}.display-2{font-size:5.5rem}.display-3{font-size:4.5rem}.display-3,.display-4{font-weight:300;line-height:1.2}.display-4{font-size:3.5rem}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer:before{content:\"\\2014\\A0\"}.img-fluid,.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;box-shadow:0 1px 2px rgba(0,0,0,.075)}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem;box-shadow:inset 0 -.1rem 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:700;box-shadow:none}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:7.5px;padding-left:7.5px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:7.5px;padding-left:7.5px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-7.5px;margin-left:-7.5px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{position:relative;width:100%;padding-right:7.5px;padding-left:7.5px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-ms-flex-order:-1;order:-1}.order-last{-ms-flex-order:13;order:13}.order-0{-ms-flex-order:0;order:0}.order-1{-ms-flex-order:1;order:1}.order-2{-ms-flex-order:2;order:2}.order-3{-ms-flex-order:3;order:3}.order-4{-ms-flex-order:4;order:4}.order-5{-ms-flex-order:5;order:5}.order-6{-ms-flex-order:6;order:6}.order-7{-ms-flex-order:7;order:7}.order-8{-ms-flex-order:8;order:8}.order-9{-ms-flex-order:9;order:9}.order-10{-ms-flex-order:10;order:10}.order-11{-ms-flex-order:11;order:11}.order-12{-ms-flex-order:12;order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-sm-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-sm-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-ms-flex-order:-1;order:-1}.order-sm-last{-ms-flex-order:13;order:13}.order-sm-0{-ms-flex-order:0;order:0}.order-sm-1{-ms-flex-order:1;order:1}.order-sm-2{-ms-flex-order:2;order:2}.order-sm-3{-ms-flex-order:3;order:3}.order-sm-4{-ms-flex-order:4;order:4}.order-sm-5{-ms-flex-order:5;order:5}.order-sm-6{-ms-flex-order:6;order:6}.order-sm-7{-ms-flex-order:7;order:7}.order-sm-8{-ms-flex-order:8;order:8}.order-sm-9{-ms-flex-order:9;order:9}.order-sm-10{-ms-flex-order:10;order:10}.order-sm-11{-ms-flex-order:11;order:11}.order-sm-12{-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-md-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-md-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-md-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-md-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-md-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-md-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-md-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-ms-flex-order:-1;order:-1}.order-md-last{-ms-flex-order:13;order:13}.order-md-0{-ms-flex-order:0;order:0}.order-md-1{-ms-flex-order:1;order:1}.order-md-2{-ms-flex-order:2;order:2}.order-md-3{-ms-flex-order:3;order:3}.order-md-4{-ms-flex-order:4;order:4}.order-md-5{-ms-flex-order:5;order:5}.order-md-6{-ms-flex-order:6;order:6}.order-md-7{-ms-flex-order:7;order:7}.order-md-8{-ms-flex-order:8;order:8}.order-md-9{-ms-flex-order:9;order:9}.order-md-10{-ms-flex-order:10;order:10}.order-md-11{-ms-flex-order:11;order:11}.order-md-12{-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-lg-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-lg-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-ms-flex-order:-1;order:-1}.order-lg-last{-ms-flex-order:13;order:13}.order-lg-0{-ms-flex-order:0;order:0}.order-lg-1{-ms-flex-order:1;order:1}.order-lg-2{-ms-flex-order:2;order:2}.order-lg-3{-ms-flex-order:3;order:3}.order-lg-4{-ms-flex-order:4;order:4}.order-lg-5{-ms-flex-order:5;order:5}.order-lg-6{-ms-flex-order:6;order:6}.order-lg-7{-ms-flex-order:7;order:7}.order-lg-8{-ms-flex-order:8;order:8}.order-lg-9{-ms-flex-order:9;order:9}.order-lg-10{-ms-flex-order:10;order:10}.order-lg-11{-ms-flex-order:11;order:11}.order-lg-12{-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-xl-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-xl-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-ms-flex-order:-1;order:-1}.order-xl-last{-ms-flex-order:13;order:13}.order-xl-0{-ms-flex-order:0;order:0}.order-xl-1{-ms-flex-order:1;order:1}.order-xl-2{-ms-flex-order:2;order:2}.order-xl-3{-ms-flex-order:3;order:3}.order-xl-4{-ms-flex-order:4;order:4}.order-xl-5{-ms-flex-order:5;order:5}.order-xl-6{-ms-flex-order:6;order:6}.order-xl-7{-ms-flex-order:7;order:7}.order-xl-8{-ms-flex-order:8;order:8}.order-xl-9{-ms-flex-order:9;order:9}.order-xl-10{-ms-flex-order:10;order:10}.order-xl-11{-ms-flex-order:11;order:11}.order-xl-12{-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;color:#212529;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#383f45}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#383f45}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:hsla(0,0%,100%,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(2.25rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;box-shadow:inset 0 0 0 transparent;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:inset 0 0 0 transparent,none}.form-control::-webkit-input-placeholder{color:#939ba2;opacity:1}.form-control::-moz-placeholder{color:#939ba2;opacity:1}.form-control:-ms-input-placeholder,.form-control::-ms-input-placeholder{color:#939ba2;opacity:1}.form-control::placeholder{color:#939ba2;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.8125rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(2.875rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size],textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#28a745;padding-right:2.25rem;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 0 rgba(40,167,69,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:2.25rem;background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#28a745;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 0 rgba(40,167,69,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{border-color:#28a745}.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{box-shadow:0 0 0 0 rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 0 rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:2.25rem;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 0 rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:2.25rem;background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#dc3545;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 0 rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{border-color:#dc3545}.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{box-shadow:0 0 0 0 rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 0 rgba(220,53,69,.25)}.form-inline{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{-ms-flex-align:center;-ms-flex-pack:center;justify-content:center}.form-inline .form-group,.form-inline label{display:-ms-flexbox;display:flex;align-items:center;margin-bottom:0}.form-inline .form-group{-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;-ms-flex-negative:0;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:none}.btn.disabled,.btn:disabled{opacity:.65;box-shadow:none}.btn:not(:disabled):not(.disabled).active,.btn:not(:disabled):not(.disabled):active{box-shadow:none}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff;box-shadow:none}.btn-primary.focus,.btn-primary:focus,.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:none,0 0 0 0 rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d;box-shadow:none}.btn-secondary.focus,.btn-secondary:focus,.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{box-shadow:none,0 0 0 0 hsla(208,6%,54%,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 0 hsla(208,6%,54%,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745;box-shadow:none}.btn-success.focus,.btn-success:focus,.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:none,0 0 0 0 rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8;box-shadow:none}.btn-info.focus,.btn-info:focus,.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:none,0 0 0 0 rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(58,176,195,.5)}.btn-warning{color:#1f2d3d;background-color:#ffc107;border-color:#ffc107;box-shadow:none}.btn-warning.focus,.btn-warning:focus,.btn-warning:hover{color:#1f2d3d;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:none,0 0 0 0 rgba(221,171,15,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#1f2d3d;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#1f2d3d;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(221,171,15,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545;box-shadow:none}.btn-danger.focus,.btn-danger:focus,.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:none,0 0 0 0 rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(225,83,97,.5)}.btn-light{color:#1f2d3d;background-color:#f8f9fa;border-color:#f8f9fa;box-shadow:none}.btn-light.focus,.btn-light:focus,.btn-light:hover{color:#1f2d3d;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:none,0 0 0 0 rgba(215,218,222,.5)}.btn-light.disabled,.btn-light:disabled{color:#1f2d3d;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#1f2d3d;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(215,218,222,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40;box-shadow:none}.btn-dark.focus,.btn-dark:focus,.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:none,0 0 0 0 rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 0 rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 0 hsla(208,7%,46%,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 0 hsla(208,7%,46%,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 0 rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 0 rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#1f2d3d;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 0 rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#1f2d3d;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 0 rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#1f2d3d;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 0 rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#1f2d3d;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 0 rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3;text-decoration:none}.btn-link.focus,.btn-link:focus{text-decoration:none;box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;box-shadow:0 .5rem 1rem rgba(0,0,0,.175)}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split:after,.dropright .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropleft .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group.show .dropdown-toggle,.btn-group.show .dropdown-toggle.btn-link{box-shadow:none}.btn-group-vertical{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;-ms-flex:1 1 0%;flex:1 1 0%;min-width:0;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label:after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:-ms-flexbox;display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(2.875rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.8125rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:-ms-inline-flexbox;display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label:before{color:#fff;border-color:#007bff;background-color:#007bff;box-shadow:none}.custom-control-input:focus~.custom-control-label:before{box-shadow:inset 0 0 0 transparent,none}.custom-control-input:focus:not(:checked)~.custom-control-label:before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label:before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff;box-shadow:none}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label:before,.custom-control-input[disabled]~.custom-control-label:before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label:before{pointer-events:none;background-color:#dee2e6;border:1px solid #adb5bd;box-shadow:inset 0 .25rem .25rem rgba(0,0,0,.1)}.custom-control-label:after,.custom-control-label:before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\"}.custom-control-label:after{background:no-repeat 50%/50% 50%}.custom-checkbox .custom-control-label:before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{border-color:#007bff;background-color:#007bff;box-shadow:none}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23ffffff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label:before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23ffffff'/%3E%3C/svg%3E\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label:before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label:after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label:after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label:after{background-color:#dee2e6;-webkit-transform:translateX(.75rem);transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px;border:1px solid #ced4da;border-radius:.25rem;box-shadow:inset 0 1px 2px rgba(0,0,0,.075);-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:inset 0 1px 2px rgba(0,0,0,.075),none}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.8125rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:75%}.custom-select-lg{height:calc(2.875rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:125%}.custom-file{display:inline-block;margin-bottom:0}.custom-file,.custom-file-input{position:relative;width:100%;height:calc(2.25rem + 2px)}.custom-file-input{z-index:2;margin:0;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:none}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label:after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]:after{content:attr(data-browse)}.custom-file-label{left:0;z-index:1;height:calc(2.25rem + 2px);font-weight:400;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;box-shadow:none}.custom-file-label,.custom-file-label:after{position:absolute;top:0;right:0;padding:.375rem .75rem;line-height:1.5;color:#495057}.custom-file-label:after{bottom:0;z-index:3;display:block;height:2.25rem;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;box-shadow:0 .1rem .25rem rgba(0,0,0,.1);-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem;box-shadow:inset 0 .25rem .25rem rgba(0,0,0,.1)}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;box-shadow:0 .1rem .25rem rgba(0,0,0,.1);-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem;box-shadow:inset 0 .25rem .25rem rgba(0,0,0,.1)}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:0;margin-left:0;background-color:#007bff;border:0;border-radius:1rem;box-shadow:0 .1rem .25rem rgba(0,0,0,.1);-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem;box-shadow:inset 0 .25rem .25rem rgba(0,0,0,.1)}.custom-range::-ms-fill-lower,.custom-range::-ms-fill-upper{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label:before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label:before,.custom-file-label,.custom-select{transition:none}}.nav{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;padding:.5rem}.navbar,.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:.5rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat 50%;background-size:100% 100%}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:1rem;padding-left:1rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:1rem;padding-left:1rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:1rem;padding-left:1rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:1rem;padding-left:1rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:1rem;padding-left:1rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:#fff}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:hsla(0,0%,100%,.75);border-color:hsla(0,0%,100%,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.75)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0 solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{-ms-flex:1 1 auto;flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:0 solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:0.25rem 0.25rem 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:0 solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 0.25rem 0.25rem}.card-header-tabs{margin-bottom:-.75rem;border-bottom:0}.card-header-pills,.card-header-tabs{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img,.card-img-bottom,.card-img-top{-ms-flex-negative:0;flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}.card-img,.card-img-bottom{border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem}.card-deck .card{margin-bottom:7.5px}@media (min-width:576px){.card-deck{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-7.5px;margin-left:-7.5px}.card-deck .card{-ms-flex:1 0 0%;flex:1 0 0%;margin-right:7.5px;margin-bottom:0;margin-left:7.5px}}.card-group>.card{margin-bottom:7.5px}@media (min-width:576px){.card-group{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group>.card{-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:0}.breadcrumb{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item:before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:underline;text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem hsla(208,7%,46%,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#1f2d3d;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#1f2d3d;background-color:#d39e00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#1f2d3d;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#1f2d3d;background-color:#dae0e5}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close,.alert-dismissible .mailbox-attachment-close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.progress{height:1rem;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem;box-shadow:inset 0 .1rem .1rem rgba(0,0,0,.1)}.progress,.progress-bar{display:-ms-flexbox;display:flex;overflow:hidden}.progress-bar{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.media-body{-ms-flex:1;flex:1}.list-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal .list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal .list-group-item.active{margin-top:0}.list-group-horizontal .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-sm .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm .list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm .list-group-item.active{margin-top:0}.list-group-horizontal-sm .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-md .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md .list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md .list-group-item.active{margin-top:0}.list-group-horizontal-md .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-lg .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg .list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg .list-group-item.active{margin-top:0}.list-group-horizontal-lg .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-xl .list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl .list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl .list-group-item.active{margin-top:0}.list-group-horizontal-xl .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush .list-group-item{border-right-width:0;border-left-width:0;border-radius:0}.list-group-flush .list-group-item:first-child{border-top-width:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close,.mailbox-attachment-close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover,.mailbox-attachment-close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover,.mailbox-attachment-close:not(:disabled):not(.disabled):focus,.mailbox-attachment-close:not(:disabled):not(.disabled):hover{opacity:.75}button.close,button.mailbox-attachment-close{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}a.close.disabled,a.disabled.mailbox-attachment-close{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:.875rem;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translateY(-50px);transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{-webkit-transform:none;transform:none}.modal.modal-static .modal-dialog{-webkit-transform:scale(1.02);transform:scale(1.02)}.modal-dialog-scrollable{display:-ms-flexbox;display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{-ms-flex-negative:0;flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered:before{display:block;height:calc(100vh - 1rem);content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable:before{content:none}.modal-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;box-shadow:0 .25rem .5rem rgba(0,0,0,.5);outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between;padding:1rem;border-bottom:1px solid #e9ecef;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close,.modal-header .mailbox-attachment-close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.modal-footer{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:.75rem;border-top:1px solid #e9ecef;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered:before{height:calc(100vh - 3.5rem)}.modal-content{box-shadow:0 .5rem 1rem rgba(0,0,0,.5)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow:before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{top:0;left:0;z-index:1060;max-width:276px;font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;box-shadow:0 .25rem .5rem rgba(0,0,0,.2)}.popover,.popover .arrow{position:absolute;display:block}.popover .arrow{width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow:after,.popover .arrow:before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow:before,.bs-popover-top>.arrow:before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow:after,.bs-popover-top>.arrow:after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow:before,.bs-popover-right>.arrow:before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow:after,.bs-popover-right>.arrow:after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow:before,.bs-popover-bottom>.arrow:before{top:0;border-width:0 .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow:after,.bs-popover-bottom>.arrow:after{top:1px;border-width:0 .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow:before,.bs-popover-left>.arrow:before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow:after,.bs-popover-left>.arrow:after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{-ms-touch-action:pan-y;touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner:after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:-webkit-transform .6s ease;transition:transform .6s ease;transition:transform .6s ease,-webkit-transform .6s ease}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){-webkit-transform:translateX(100%);transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;-webkit-transform:none;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50%/100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-border{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important}.rounded-right,.rounded-top{border-top-right-radius:.25rem!important}.rounded-bottom,.rounded-right{border-bottom-right-radius:.25rem!important}.rounded-bottom,.rounded-left{border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix:after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:-ms-flexbox!important;display:flex!important}.d-print-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive:before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9:before{padding-top:42.857143%}.embed-responsive-16by9:before{padding-top:56.25%}.embed-responsive-4by3:before{padding-top:75%}.embed-responsive-1by1:before{padding-top:100%}.flex-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center{-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-sm-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-sm-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-sm-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-sm-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-sm-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-sm-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center{-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-sm-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-sm-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-md-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-md-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-md-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-md-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-md-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-md-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center{-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-md-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-md-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-lg-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-lg-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-lg-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-lg-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-lg-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-lg-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center{-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-lg-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-lg-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-xl-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-xl-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-xl-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-xl-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-xl-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-xl-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center{-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-xl-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-xl-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{top:0}.fixed-bottom,.fixed-top{position:fixed;right:0;left:0;z-index:1030}.fixed-bottom{bottom:0}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.stretched-link:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:transparent}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:hsla(0,0%,100%,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;overflow-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,:after,:before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]:after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}html.scroll-smooth{scroll-behavior:smooth}.wrapper,body,html{min-height:100%}.wrapper{position:relative}.wrapper .content-wrapper{min-height:calc(100vh - (3.5rem + 1px) - (3.5rem + 1px))}.layout-boxed .wrapper{box-shadow:0 0 10 rgba(0,0,0,.3)}.layout-boxed .wrapper,.layout-boxed .wrapper:before{margin:0 auto;max-width:1250px}.layout-boxed .wrapper .main-sidebar{left:inherit}@supports not (-webkit-touch-callout:none){.layout-fixed .wrapper .sidebar{height:calc(100vh - (3.5rem + 1px))}.layout-fixed.text-sm .wrapper .sidebar{height:calc(100vh - (2.93725rem + 1px))}}.layout-navbar-fixed.layout-fixed .wrapper .main-header.text-sm~.control-sidebar{top:calc(2.93725rem + 1px)}.layout-navbar-fixed.layout-fixed .wrapper .brand-link.text-sm~.sidebar{margin-top:calc(2.93725rem + 1px)}.layout-navbar-fixed.sidebar-mini-md.sidebar-collapse .wrapper .brand-link,.layout-navbar-fixed.sidebar-mini.sidebar-collapse .wrapper .brand-link{height:calc(3.5rem + 1px);width:4.6rem}.layout-navbar-fixed.sidebar-mini-md.sidebar-collapse.text-sm .wrapper .brand-link,.layout-navbar-fixed.sidebar-mini-md.sidebar-collapse .wrapper .brand-link.text-sm,.layout-navbar-fixed.sidebar-mini.sidebar-collapse.text-sm .wrapper .brand-link,.layout-navbar-fixed.sidebar-mini.sidebar-collapse .wrapper .brand-link.text-sm{height:calc(2.93725rem + 1px)}.layout-navbar-fixed .wrapper .main-sidebar:hover .brand-link{transition:width .3s ease-in-out;width:250px}.layout-navbar-fixed .wrapper .main-header.text-sm~.content-wrapper{margin-top:calc(2.93725rem + 1px)}.layout-navbar-fixed .wrapper .main-header{z-index:1033}.layout-navbar-fixed.layout-fixed .wrapper .control-sidebar{top:calc(3.5rem + 1px)}.layout-navbar-fixed.layout-fixed .wrapper .main-header.text-sm~.control-sidebar,.text-sm .layout-navbar-fixed.layout-fixed .wrapper .main-header~.control-sidebar{top:calc(2.93725rem + 1px)}.layout-navbar-fixed.layout-fixed .wrapper .sidebar{margin-top:calc(3.5rem + 1px)}.layout-navbar-fixed.layout-fixed .wrapper .brand-link.text-sm~.sidebar,.text-sm .layout-navbar-fixed.layout-fixed .wrapper .brand-link~.sidebar{margin-top:calc(2.93725rem + 1px)}.layout-navbar-fixed.layout-fixed.text-sm .wrapper .control-sidebar{top:calc(2.93725rem + 1px)}.layout-navbar-fixed.layout-fixed.text-sm .wrapper .sidebar{margin-top:calc(2.93725rem + 1px)}.layout-navbar-fixed .wrapper .control-sidebar{top:0}.layout-navbar-fixed .wrapper a.anchor{display:block;position:relative;top:calc((3.5rem + 1px + 1rem) / -1)}.layout-navbar-fixed .wrapper.sidebar-collapse .brand-link{height:calc(3.5rem + 1px);transition:width .3s ease-in-out;width:4.6rem}.layout-navbar-fixed .wrapper.sidebar-collapse .brand-link.text-sm,.text-sm .layout-navbar-fixed .wrapper.sidebar-collapse .brand-link{height:calc(2.93725rem + 1px)}.layout-navbar-fixed .wrapper .brand-link,.layout-navbar-fixed .wrapper.sidebar-collapse .main-sidebar:hover .brand-link{transition:width .3s ease-in-out;width:250px}.layout-navbar-fixed .wrapper .brand-link{overflow:hidden;position:fixed;top:0;z-index:1035}.layout-navbar-fixed .wrapper .sidebar-dark-primary .brand-link:not([class*=navbar]){background-color:#343a40}.layout-navbar-fixed .wrapper .sidebar-light-primary .brand-link:not([class*=navbar]){background-color:#fff}.layout-navbar-fixed .wrapper .sidebar-dark-secondary .brand-link:not([class*=navbar]){background-color:#343a40}.layout-navbar-fixed .wrapper .sidebar-light-secondary .brand-link:not([class*=navbar]){background-color:#fff}.layout-navbar-fixed .wrapper .sidebar-dark-success .brand-link:not([class*=navbar]){background-color:#343a40}.layout-navbar-fixed .wrapper .sidebar-light-success .brand-link:not([class*=navbar]){background-color:#fff}.layout-navbar-fixed .wrapper .sidebar-dark-info .brand-link:not([class*=navbar]){background-color:#343a40}.layout-navbar-fixed .wrapper .sidebar-light-info .brand-link:not([class*=navbar]){background-color:#fff}.layout-navbar-fixed .wrapper .sidebar-dark-warning .brand-link:not([class*=navbar]){background-color:#343a40}.layout-navbar-fixed .wrapper .sidebar-light-warning .brand-link:not([class*=navbar]){background-color:#fff}.layout-navbar-fixed .wrapper .sidebar-dark-danger .brand-link:not([class*=navbar]){background-color:#343a40}.layout-navbar-fixed .wrapper .sidebar-light-danger .brand-link:not([class*=navbar]){background-color:#fff}.layout-navbar-fixed .wrapper .sidebar-dark-light .brand-link:not([class*=navbar]){background-color:#343a40}.layout-navbar-fixed .wrapper .sidebar-light-light .brand-link:not([class*=navbar]){background-color:#fff}.layout-navbar-fixed .wrapper .sidebar-dark-dark .brand-link:not([class*=navbar]){background-color:#343a40}.layout-navbar-fixed .wrapper .sidebar-light-dark .brand-link:not([class*=navbar]){background-color:#fff}.layout-navbar-fixed .wrapper .content-wrapper{margin-top:calc(3.5rem + 1px)}.layout-navbar-fixed .wrapper .main-header.text-sm~.content-wrapper,.text-sm .layout-navbar-fixed .wrapper .main-header~.content-wrapper{margin-top:calc(2.93725rem + 1px)}.layout-navbar-fixed .wrapper .main-header{left:0;position:fixed;right:0;top:0;z-index:1037}.layout-navbar-fixed.text-sm .wrapper .content-wrapper{margin-top:calc(2.93725rem + 1px)}body:not(.layout-fixed).layout-navbar-fixed.text-sm .wrapper .main-sidebar{margin-top:calc((2.93725rem + 1px) / -1)}body:not(.layout-fixed).layout-navbar-fixed.text-sm .wrapper .main-sidebar .sidebar{margin-top:calc(2.93725rem + 1px)}.layout-navbar-not-fixed .wrapper .brand-link{position:static}.layout-navbar-not-fixed .wrapper .content-wrapper,.layout-navbar-not-fixed .wrapper .sidebar{margin-top:0}.layout-navbar-not-fixed .wrapper .main-header{position:static}.layout-navbar-not-fixed.layout-fixed .wrapper .sidebar{margin-top:0}@media (min-width:576px){.layout-sm-navbar-fixed.layout-fixed .wrapper .control-sidebar{top:calc(3.5rem + 1px)}.layout-sm-navbar-fixed.layout-fixed .wrapper .main-header.text-sm~.control-sidebar,.text-sm .layout-sm-navbar-fixed.layout-fixed .wrapper .main-header~.control-sidebar{top:calc(2.93725rem + 1px)}.layout-sm-navbar-fixed.layout-fixed .wrapper .sidebar{margin-top:calc(3.5rem + 1px)}.layout-sm-navbar-fixed.layout-fixed .wrapper .brand-link.text-sm~.sidebar,.text-sm .layout-sm-navbar-fixed.layout-fixed .wrapper .brand-link~.sidebar{margin-top:calc(2.93725rem + 1px)}.layout-sm-navbar-fixed.layout-fixed.text-sm .wrapper .control-sidebar{top:calc(2.93725rem + 1px)}.layout-sm-navbar-fixed.layout-fixed.text-sm .wrapper .sidebar{margin-top:calc(2.93725rem + 1px)}.layout-sm-navbar-fixed .wrapper .control-sidebar{top:0}.layout-sm-navbar-fixed .wrapper a.anchor{display:block;position:relative;top:calc((3.5rem + 1px + 1rem) / -1)}.layout-sm-navbar-fixed .wrapper.sidebar-collapse .brand-link{height:calc(3.5rem + 1px);transition:width .3s ease-in-out;width:4.6rem}.layout-sm-navbar-fixed .wrapper.sidebar-collapse .brand-link.text-sm,.text-sm .layout-sm-navbar-fixed .wrapper.sidebar-collapse .brand-link{height:calc(2.93725rem + 1px)}.layout-sm-navbar-fixed .wrapper.sidebar-collapse .main-sidebar:hover .brand-link{transition:width .3s ease-in-out;width:250px}.layout-sm-navbar-fixed .wrapper .brand-link{overflow:hidden;position:fixed;top:0;transition:width .3s ease-in-out;width:250px;z-index:1035}.layout-sm-navbar-fixed .wrapper .sidebar-dark-primary .brand-link:not([class*=navbar]){background-color:#343a40}.layout-sm-navbar-fixed .wrapper .sidebar-light-primary .brand-link:not([class*=navbar]){background-color:#fff}.layout-sm-navbar-fixed .wrapper .sidebar-dark-secondary .brand-link:not([class*=navbar]){background-color:#343a40}.layout-sm-navbar-fixed .wrapper .sidebar-light-secondary .brand-link:not([class*=navbar]){background-color:#fff}.layout-sm-navbar-fixed .wrapper .sidebar-dark-success .brand-link:not([class*=navbar]){background-color:#343a40}.layout-sm-navbar-fixed .wrapper .sidebar-light-success .brand-link:not([class*=navbar]){background-color:#fff}.layout-sm-navbar-fixed .wrapper .sidebar-dark-info .brand-link:not([class*=navbar]){background-color:#343a40}.layout-sm-navbar-fixed .wrapper .sidebar-light-info .brand-link:not([class*=navbar]){background-color:#fff}.layout-sm-navbar-fixed .wrapper .sidebar-dark-warning .brand-link:not([class*=navbar]){background-color:#343a40}.layout-sm-navbar-fixed .wrapper .sidebar-light-warning .brand-link:not([class*=navbar]){background-color:#fff}.layout-sm-navbar-fixed .wrapper .sidebar-dark-danger .brand-link:not([class*=navbar]){background-color:#343a40}.layout-sm-navbar-fixed .wrapper .sidebar-light-danger .brand-link:not([class*=navbar]){background-color:#fff}.layout-sm-navbar-fixed .wrapper .sidebar-dark-light .brand-link:not([class*=navbar]){background-color:#343a40}.layout-sm-navbar-fixed .wrapper .sidebar-light-light .brand-link:not([class*=navbar]){background-color:#fff}.layout-sm-navbar-fixed .wrapper .sidebar-dark-dark .brand-link:not([class*=navbar]){background-color:#343a40}.layout-sm-navbar-fixed .wrapper .sidebar-light-dark .brand-link:not([class*=navbar]){background-color:#fff}.layout-sm-navbar-fixed .wrapper .content-wrapper{margin-top:calc(3.5rem + 1px)}.layout-sm-navbar-fixed .wrapper .main-header.text-sm~.content-wrapper,.text-sm .layout-sm-navbar-fixed .wrapper .main-header~.content-wrapper{margin-top:calc(2.93725rem + 1px)}.layout-sm-navbar-fixed .wrapper .main-header{left:0;position:fixed;right:0;top:0;z-index:1037}.layout-sm-navbar-fixed.text-sm .wrapper .content-wrapper{margin-top:calc(2.93725rem + 1px)}body:not(.layout-fixed).layout-sm-navbar-fixed.text-sm .wrapper .main-sidebar{margin-top:calc((2.93725rem + 1px) / -1)}body:not(.layout-fixed).layout-sm-navbar-fixed.text-sm .wrapper .main-sidebar .sidebar{margin-top:calc(2.93725rem + 1px)}.layout-sm-navbar-not-fixed .wrapper .brand-link{position:static}.layout-sm-navbar-not-fixed .wrapper .content-wrapper,.layout-sm-navbar-not-fixed .wrapper .sidebar{margin-top:0}.layout-sm-navbar-not-fixed .wrapper .main-header{position:static}.layout-sm-navbar-not-fixed.layout-fixed .wrapper .sidebar{margin-top:0}}@media (min-width:768px){.layout-md-navbar-fixed.layout-fixed .wrapper .control-sidebar{top:calc(3.5rem + 1px)}.layout-md-navbar-fixed.layout-fixed .wrapper .main-header.text-sm~.control-sidebar,.text-sm .layout-md-navbar-fixed.layout-fixed .wrapper .main-header~.control-sidebar{top:calc(2.93725rem + 1px)}.layout-md-navbar-fixed.layout-fixed .wrapper .sidebar{margin-top:calc(3.5rem + 1px)}.layout-md-navbar-fixed.layout-fixed .wrapper .brand-link.text-sm~.sidebar,.text-sm .layout-md-navbar-fixed.layout-fixed .wrapper .brand-link~.sidebar{margin-top:calc(2.93725rem + 1px)}.layout-md-navbar-fixed.layout-fixed.text-sm .wrapper .control-sidebar{top:calc(2.93725rem + 1px)}.layout-md-navbar-fixed.layout-fixed.text-sm .wrapper .sidebar{margin-top:calc(2.93725rem + 1px)}.layout-md-navbar-fixed .wrapper .control-sidebar{top:0}.layout-md-navbar-fixed .wrapper a.anchor{display:block;position:relative;top:calc((3.5rem + 1px + 1rem) / -1)}.layout-md-navbar-fixed .wrapper.sidebar-collapse .brand-link{height:calc(3.5rem + 1px);transition:width .3s ease-in-out;width:4.6rem}.layout-md-navbar-fixed .wrapper.sidebar-collapse .brand-link.text-sm,.text-sm .layout-md-navbar-fixed .wrapper.sidebar-collapse .brand-link{height:calc(2.93725rem + 1px)}.layout-md-navbar-fixed .wrapper.sidebar-collapse .main-sidebar:hover .brand-link{transition:width .3s ease-in-out;width:250px}.layout-md-navbar-fixed .wrapper .brand-link{overflow:hidden;position:fixed;top:0;transition:width .3s ease-in-out;width:250px;z-index:1035}.layout-md-navbar-fixed .wrapper .sidebar-dark-primary .brand-link:not([class*=navbar]){background-color:#343a40}.layout-md-navbar-fixed .wrapper .sidebar-light-primary .brand-link:not([class*=navbar]){background-color:#fff}.layout-md-navbar-fixed .wrapper .sidebar-dark-secondary .brand-link:not([class*=navbar]){background-color:#343a40}.layout-md-navbar-fixed .wrapper .sidebar-light-secondary .brand-link:not([class*=navbar]){background-color:#fff}.layout-md-navbar-fixed .wrapper .sidebar-dark-success .brand-link:not([class*=navbar]){background-color:#343a40}.layout-md-navbar-fixed .wrapper .sidebar-light-success .brand-link:not([class*=navbar]){background-color:#fff}.layout-md-navbar-fixed .wrapper .sidebar-dark-info .brand-link:not([class*=navbar]){background-color:#343a40}.layout-md-navbar-fixed .wrapper .sidebar-light-info .brand-link:not([class*=navbar]){background-color:#fff}.layout-md-navbar-fixed .wrapper .sidebar-dark-warning .brand-link:not([class*=navbar]){background-color:#343a40}.layout-md-navbar-fixed .wrapper .sidebar-light-warning .brand-link:not([class*=navbar]){background-color:#fff}.layout-md-navbar-fixed .wrapper .sidebar-dark-danger .brand-link:not([class*=navbar]){background-color:#343a40}.layout-md-navbar-fixed .wrapper .sidebar-light-danger .brand-link:not([class*=navbar]){background-color:#fff}.layout-md-navbar-fixed .wrapper .sidebar-dark-light .brand-link:not([class*=navbar]){background-color:#343a40}.layout-md-navbar-fixed .wrapper .sidebar-light-light .brand-link:not([class*=navbar]){background-color:#fff}.layout-md-navbar-fixed .wrapper .sidebar-dark-dark .brand-link:not([class*=navbar]){background-color:#343a40}.layout-md-navbar-fixed .wrapper .sidebar-light-dark .brand-link:not([class*=navbar]){background-color:#fff}.layout-md-navbar-fixed .wrapper .content-wrapper{margin-top:calc(3.5rem + 1px)}.layout-md-navbar-fixed .wrapper .main-header.text-sm~.content-wrapper,.text-sm .layout-md-navbar-fixed .wrapper .main-header~.content-wrapper{margin-top:calc(2.93725rem + 1px)}.layout-md-navbar-fixed .wrapper .main-header{left:0;position:fixed;right:0;top:0;z-index:1037}.layout-md-navbar-fixed.text-sm .wrapper .content-wrapper{margin-top:calc(2.93725rem + 1px)}body:not(.layout-fixed).layout-md-navbar-fixed.text-sm .wrapper .main-sidebar{margin-top:calc((2.93725rem + 1px) / -1)}body:not(.layout-fixed).layout-md-navbar-fixed.text-sm .wrapper .main-sidebar .sidebar{margin-top:calc(2.93725rem + 1px)}.layout-md-navbar-not-fixed .wrapper .brand-link{position:static}.layout-md-navbar-not-fixed .wrapper .content-wrapper,.layout-md-navbar-not-fixed .wrapper .sidebar{margin-top:0}.layout-md-navbar-not-fixed .wrapper .main-header{position:static}.layout-md-navbar-not-fixed.layout-fixed .wrapper .sidebar{margin-top:0}}@media (min-width:992px){.layout-lg-navbar-fixed.layout-fixed .wrapper .control-sidebar{top:calc(3.5rem + 1px)}.layout-lg-navbar-fixed.layout-fixed .wrapper .main-header.text-sm~.control-sidebar,.text-sm .layout-lg-navbar-fixed.layout-fixed .wrapper .main-header~.control-sidebar{top:calc(2.93725rem + 1px)}.layout-lg-navbar-fixed.layout-fixed .wrapper .sidebar{margin-top:calc(3.5rem + 1px)}.layout-lg-navbar-fixed.layout-fixed .wrapper .brand-link.text-sm~.sidebar,.text-sm .layout-lg-navbar-fixed.layout-fixed .wrapper .brand-link~.sidebar{margin-top:calc(2.93725rem + 1px)}.layout-lg-navbar-fixed.layout-fixed.text-sm .wrapper .control-sidebar{top:calc(2.93725rem + 1px)}.layout-lg-navbar-fixed.layout-fixed.text-sm .wrapper .sidebar{margin-top:calc(2.93725rem + 1px)}.layout-lg-navbar-fixed .wrapper .control-sidebar{top:0}.layout-lg-navbar-fixed .wrapper a.anchor{display:block;position:relative;top:calc((3.5rem + 1px + 1rem) / -1)}.layout-lg-navbar-fixed .wrapper.sidebar-collapse .brand-link{height:calc(3.5rem + 1px);transition:width .3s ease-in-out;width:4.6rem}.layout-lg-navbar-fixed .wrapper.sidebar-collapse .brand-link.text-sm,.text-sm .layout-lg-navbar-fixed .wrapper.sidebar-collapse .brand-link{height:calc(2.93725rem + 1px)}.layout-lg-navbar-fixed .wrapper.sidebar-collapse .main-sidebar:hover .brand-link{transition:width .3s ease-in-out;width:250px}.layout-lg-navbar-fixed .wrapper .brand-link{overflow:hidden;position:fixed;top:0;transition:width .3s ease-in-out;width:250px;z-index:1035}.layout-lg-navbar-fixed .wrapper .sidebar-dark-primary .brand-link:not([class*=navbar]){background-color:#343a40}.layout-lg-navbar-fixed .wrapper .sidebar-light-primary .brand-link:not([class*=navbar]){background-color:#fff}.layout-lg-navbar-fixed .wrapper .sidebar-dark-secondary .brand-link:not([class*=navbar]){background-color:#343a40}.layout-lg-navbar-fixed .wrapper .sidebar-light-secondary .brand-link:not([class*=navbar]){background-color:#fff}.layout-lg-navbar-fixed .wrapper .sidebar-dark-success .brand-link:not([class*=navbar]){background-color:#343a40}.layout-lg-navbar-fixed .wrapper .sidebar-light-success .brand-link:not([class*=navbar]){background-color:#fff}.layout-lg-navbar-fixed .wrapper .sidebar-dark-info .brand-link:not([class*=navbar]){background-color:#343a40}.layout-lg-navbar-fixed .wrapper .sidebar-light-info .brand-link:not([class*=navbar]){background-color:#fff}.layout-lg-navbar-fixed .wrapper .sidebar-dark-warning .brand-link:not([class*=navbar]){background-color:#343a40}.layout-lg-navbar-fixed .wrapper .sidebar-light-warning .brand-link:not([class*=navbar]){background-color:#fff}.layout-lg-navbar-fixed .wrapper .sidebar-dark-danger .brand-link:not([class*=navbar]){background-color:#343a40}.layout-lg-navbar-fixed .wrapper .sidebar-light-danger .brand-link:not([class*=navbar]){background-color:#fff}.layout-lg-navbar-fixed .wrapper .sidebar-dark-light .brand-link:not([class*=navbar]){background-color:#343a40}.layout-lg-navbar-fixed .wrapper .sidebar-light-light .brand-link:not([class*=navbar]){background-color:#fff}.layout-lg-navbar-fixed .wrapper .sidebar-dark-dark .brand-link:not([class*=navbar]){background-color:#343a40}.layout-lg-navbar-fixed .wrapper .sidebar-light-dark .brand-link:not([class*=navbar]){background-color:#fff}.layout-lg-navbar-fixed .wrapper .content-wrapper{margin-top:calc(3.5rem + 1px)}.layout-lg-navbar-fixed .wrapper .main-header.text-sm~.content-wrapper,.text-sm .layout-lg-navbar-fixed .wrapper .main-header~.content-wrapper{margin-top:calc(2.93725rem + 1px)}.layout-lg-navbar-fixed .wrapper .main-header{left:0;position:fixed;right:0;top:0;z-index:1037}.layout-lg-navbar-fixed.text-sm .wrapper .content-wrapper{margin-top:calc(2.93725rem + 1px)}body:not(.layout-fixed).layout-lg-navbar-fixed.text-sm .wrapper .main-sidebar{margin-top:calc((2.93725rem + 1px) / -1)}body:not(.layout-fixed).layout-lg-navbar-fixed.text-sm .wrapper .main-sidebar .sidebar{margin-top:calc(2.93725rem + 1px)}.layout-lg-navbar-not-fixed .wrapper .brand-link{position:static}.layout-lg-navbar-not-fixed .wrapper .content-wrapper,.layout-lg-navbar-not-fixed .wrapper .sidebar{margin-top:0}.layout-lg-navbar-not-fixed .wrapper .main-header{position:static}.layout-lg-navbar-not-fixed.layout-fixed .wrapper .sidebar{margin-top:0}}@media (min-width:1200px){.layout-xl-navbar-fixed.layout-fixed .wrapper .control-sidebar{top:calc(3.5rem + 1px)}.layout-xl-navbar-fixed.layout-fixed .wrapper .main-header.text-sm~.control-sidebar,.text-sm .layout-xl-navbar-fixed.layout-fixed .wrapper .main-header~.control-sidebar{top:calc(2.93725rem + 1px)}.layout-xl-navbar-fixed.layout-fixed .wrapper .sidebar{margin-top:calc(3.5rem + 1px)}.layout-xl-navbar-fixed.layout-fixed .wrapper .brand-link.text-sm~.sidebar,.text-sm .layout-xl-navbar-fixed.layout-fixed .wrapper .brand-link~.sidebar{margin-top:calc(2.93725rem + 1px)}.layout-xl-navbar-fixed.layout-fixed.text-sm .wrapper .control-sidebar{top:calc(2.93725rem + 1px)}.layout-xl-navbar-fixed.layout-fixed.text-sm .wrapper .sidebar{margin-top:calc(2.93725rem + 1px)}.layout-xl-navbar-fixed .wrapper .control-sidebar{top:0}.layout-xl-navbar-fixed .wrapper a.anchor{display:block;position:relative;top:calc((3.5rem + 1px + 1rem) / -1)}.layout-xl-navbar-fixed .wrapper.sidebar-collapse .brand-link{height:calc(3.5rem + 1px);transition:width .3s ease-in-out;width:4.6rem}.layout-xl-navbar-fixed .wrapper.sidebar-collapse .brand-link.text-sm,.text-sm .layout-xl-navbar-fixed .wrapper.sidebar-collapse .brand-link{height:calc(2.93725rem + 1px)}.layout-xl-navbar-fixed .wrapper.sidebar-collapse .main-sidebar:hover .brand-link{transition:width .3s ease-in-out;width:250px}.layout-xl-navbar-fixed .wrapper .brand-link{overflow:hidden;position:fixed;top:0;transition:width .3s ease-in-out;width:250px;z-index:1035}.layout-xl-navbar-fixed .wrapper .sidebar-dark-primary .brand-link:not([class*=navbar]){background-color:#343a40}.layout-xl-navbar-fixed .wrapper .sidebar-light-primary .brand-link:not([class*=navbar]){background-color:#fff}.layout-xl-navbar-fixed .wrapper .sidebar-dark-secondary .brand-link:not([class*=navbar]){background-color:#343a40}.layout-xl-navbar-fixed .wrapper .sidebar-light-secondary .brand-link:not([class*=navbar]){background-color:#fff}.layout-xl-navbar-fixed .wrapper .sidebar-dark-success .brand-link:not([class*=navbar]){background-color:#343a40}.layout-xl-navbar-fixed .wrapper .sidebar-light-success .brand-link:not([class*=navbar]){background-color:#fff}.layout-xl-navbar-fixed .wrapper .sidebar-dark-info .brand-link:not([class*=navbar]){background-color:#343a40}.layout-xl-navbar-fixed .wrapper .sidebar-light-info .brand-link:not([class*=navbar]){background-color:#fff}.layout-xl-navbar-fixed .wrapper .sidebar-dark-warning .brand-link:not([class*=navbar]){background-color:#343a40}.layout-xl-navbar-fixed .wrapper .sidebar-light-warning .brand-link:not([class*=navbar]){background-color:#fff}.layout-xl-navbar-fixed .wrapper .sidebar-dark-danger .brand-link:not([class*=navbar]){background-color:#343a40}.layout-xl-navbar-fixed .wrapper .sidebar-light-danger .brand-link:not([class*=navbar]){background-color:#fff}.layout-xl-navbar-fixed .wrapper .sidebar-dark-light .brand-link:not([class*=navbar]){background-color:#343a40}.layout-xl-navbar-fixed .wrapper .sidebar-light-light .brand-link:not([class*=navbar]){background-color:#fff}.layout-xl-navbar-fixed .wrapper .sidebar-dark-dark .brand-link:not([class*=navbar]){background-color:#343a40}.layout-xl-navbar-fixed .wrapper .sidebar-light-dark .brand-link:not([class*=navbar]){background-color:#fff}.layout-xl-navbar-fixed .wrapper .content-wrapper{margin-top:calc(3.5rem + 1px)}.layout-xl-navbar-fixed .wrapper .main-header.text-sm~.content-wrapper,.text-sm .layout-xl-navbar-fixed .wrapper .main-header~.content-wrapper{margin-top:calc(2.93725rem + 1px)}.layout-xl-navbar-fixed .wrapper .main-header{left:0;position:fixed;right:0;top:0;z-index:1037}.layout-xl-navbar-fixed.text-sm .wrapper .content-wrapper{margin-top:calc(2.93725rem + 1px)}body:not(.layout-fixed).layout-xl-navbar-fixed.text-sm .wrapper .main-sidebar{margin-top:calc((2.93725rem + 1px) / -1)}body:not(.layout-fixed).layout-xl-navbar-fixed.text-sm .wrapper .main-sidebar .sidebar{margin-top:calc(2.93725rem + 1px)}.layout-xl-navbar-not-fixed .wrapper .brand-link{position:static}.layout-xl-navbar-not-fixed .wrapper .content-wrapper,.layout-xl-navbar-not-fixed .wrapper .sidebar{margin-top:0}.layout-xl-navbar-not-fixed .wrapper .main-header{position:static}.layout-xl-navbar-not-fixed.layout-fixed .wrapper .sidebar{margin-top:0}}.layout-footer-not-fixed .wrapper .content-wrapper{margin-bottom:0}.layout-footer-fixed .wrapper .control-sidebar{bottom:0}.layout-footer-fixed .wrapper .main-footer{bottom:0;left:0;position:fixed;right:0;z-index:1032}.layout-footer-fixed .wrapper .content-wrapper{padding-bottom:calc(3.5rem + 1px)}.layout-footer-not-fixed .wrapper .main-footer{position:static}@media (min-width:576px){.layout-sm-footer-fixed .wrapper .control-sidebar{bottom:0}.layout-sm-footer-fixed .wrapper .main-footer{bottom:0;left:0;position:fixed;right:0;z-index:1032}.layout-sm-footer-fixed .wrapper .content-wrapper{padding-bottom:calc(3.5rem + 1px)}.layout-sm-footer-not-fixed .wrapper .main-footer{position:static}}@media (min-width:768px){.layout-md-footer-fixed .wrapper .control-sidebar{bottom:0}.layout-md-footer-fixed .wrapper .main-footer{bottom:0;left:0;position:fixed;right:0;z-index:1032}.layout-md-footer-fixed .wrapper .content-wrapper{padding-bottom:calc(3.5rem + 1px)}.layout-md-footer-not-fixed .wrapper .main-footer{position:static}}@media (min-width:992px){.layout-lg-footer-fixed .wrapper .control-sidebar{bottom:0}.layout-lg-footer-fixed .wrapper .main-footer{bottom:0;left:0;position:fixed;right:0;z-index:1032}.layout-lg-footer-fixed .wrapper .content-wrapper{padding-bottom:calc(3.5rem + 1px)}.layout-lg-footer-not-fixed .wrapper .main-footer{position:static}}@media (min-width:1200px){.layout-xl-footer-fixed .wrapper .control-sidebar{bottom:0}.layout-xl-footer-fixed .wrapper .main-footer{bottom:0;left:0;position:fixed;right:0;z-index:1032}.layout-xl-footer-fixed .wrapper .content-wrapper{padding-bottom:calc(3.5rem + 1px)}.layout-xl-footer-not-fixed .wrapper .main-footer{position:static}}.layout-top-nav .wrapper{margin-left:0}.layout-top-nav .wrapper .main-header .brand-image{margin-top:-.5rem;margin-right:.2rem;height:33px}.layout-top-nav .wrapper .main-sidebar{bottom:inherit;height:inherit}.layout-top-nav .wrapper .content-wrapper,.layout-top-nav .wrapper .main-footer,.layout-top-nav .wrapper .main-header,body.sidebar-collapse:not(.sidebar-mini-md):not(.sidebar-mini) .content-wrapper,body.sidebar-collapse:not(.sidebar-mini-md):not(.sidebar-mini) .content-wrapper:before,body.sidebar-collapse:not(.sidebar-mini-md):not(.sidebar-mini) .main-footer,body.sidebar-collapse:not(.sidebar-mini-md):not(.sidebar-mini) .main-footer:before,body.sidebar-collapse:not(.sidebar-mini-md):not(.sidebar-mini) .main-header,body.sidebar-collapse:not(.sidebar-mini-md):not(.sidebar-mini) .main-header:before{margin-left:0}@media (min-width:768px){body:not(.sidebar-mini-md) .content-wrapper,body:not(.sidebar-mini-md) .main-footer,body:not(.sidebar-mini-md) .main-header{transition:margin-left .3s ease-in-out;margin-left:250px}}@media (min-width:768px) and (prefers-reduced-motion:reduce){body:not(.sidebar-mini-md) .content-wrapper,body:not(.sidebar-mini-md) .main-footer,body:not(.sidebar-mini-md) .main-header{transition:none}}@media (min-width:768px){.sidebar-collapse body:not(.sidebar-mini-md) .content-wrapper,.sidebar-collapse body:not(.sidebar-mini-md) .main-footer,.sidebar-collapse body:not(.sidebar-mini-md) .main-header{margin-left:0}}@media (max-width:991.98px){body:not(.sidebar-mini-md) .content-wrapper,body:not(.sidebar-mini-md) .content-wrapper:before,body:not(.sidebar-mini-md) .main-footer,body:not(.sidebar-mini-md) .main-footer:before,body:not(.sidebar-mini-md) .main-header,body:not(.sidebar-mini-md) .main-header:before{margin-left:0}}@media (min-width:768px){.sidebar-mini-md .content-wrapper,.sidebar-mini-md .main-footer,.sidebar-mini-md .main-header{transition:margin-left .3s ease-in-out;margin-left:250px}}@media (min-width:768px) and (prefers-reduced-motion:reduce){.sidebar-mini-md .content-wrapper,.sidebar-mini-md .main-footer,.sidebar-mini-md .main-header{transition:none}}@media (min-width:768px){.sidebar-collapse .sidebar-mini-md .content-wrapper,.sidebar-collapse .sidebar-mini-md .main-footer,.sidebar-collapse .sidebar-mini-md .main-header{margin-left:4.6rem}}@media (max-width:991.98px){.sidebar-mini-md .content-wrapper,.sidebar-mini-md .content-wrapper:before,.sidebar-mini-md .main-footer,.sidebar-mini-md .main-footer:before,.sidebar-mini-md .main-header,.sidebar-mini-md .main-header:before{margin-left:4.6rem}}.content-wrapper{background:#f4f6f9}.content-wrapper>.content{padding:0 .5rem}.main-sidebar,.main-sidebar:before{transition:margin-left .3s ease-in-out,width .3s ease-in-out;width:250px}@media (prefers-reduced-motion:reduce){.main-sidebar,.main-sidebar:before{transition:none}}.sidebar-collapse:not(.sidebar-mini):not(.sidebar-mini-md) .main-sidebar,.sidebar-collapse:not(.sidebar-mini):not(.sidebar-mini-md) .main-sidebar:before{box-shadow:none!important}.sidebar-collapse .main-sidebar,.sidebar-collapse .main-sidebar:before{margin-left:-250px}.sidebar-collapse .main-sidebar .nav-sidebar.nav-child-indent .nav-treeview{padding:0}@media (max-width:767.98px){.main-sidebar,.main-sidebar:before{box-shadow:none!important;margin-left:-250px}.sidebar-open .main-sidebar,.sidebar-open .main-sidebar:before{margin-left:0}}:not(.layout-fixed) .main-sidebar{height:inherit;min-height:100%;position:absolute;top:0}.layout-fixed .brand-link{width:250px}.layout-fixed .main-sidebar{left:0}.layout-fixed .control-sidebar,.layout-fixed .main-sidebar{bottom:0;float:none;height:100vh;position:fixed;top:0}.layout-fixed .control-sidebar .control-sidebar-content{height:calc(100vh - (3.5rem + 1px))}@supports (-webkit-touch-callout:none){.layout-fixed .main-sidebar{height:inherit}}.main-footer{background:#fff;border-top:1px solid #dee2e6;color:#869099;padding:1rem}.main-footer.text-sm,.text-sm .main-footer{padding:.812rem}.content-header{padding:15px .5rem}.text-sm .content-header{padding:10px .5rem}.content-header h1{font-size:1.8rem;margin:0}.text-sm .content-header h1{font-size:1.5rem}.content-header .breadcrumb{background:0 0;line-height:1.8rem;margin-bottom:0;padding:0}.text-sm .content-header .breadcrumb{line-height:1.5rem}.hold-transition .content-wrapper,.hold-transition .control-sidebar,.hold-transition .control-sidebar *,.hold-transition .main-footer,.hold-transition .main-header,.hold-transition .main-sidebar,.hold-transition .main-sidebar *{transition:none!important;-webkit-animation-duration:0s!important;animation-duration:0s!important}.main-header{border-bottom:1px solid #dee2e6;z-index:1034}.main-header .nav-link{height:2.5rem;position:relative}.main-header.text-sm .nav-link,.text-sm .main-header .nav-link{height:1.93725rem;padding:.35rem 1rem}.main-header.text-sm .nav-link>.fa,.main-header.text-sm .nav-link>.fab,.main-header.text-sm .nav-link>.far,.main-header.text-sm .nav-link>.fas,.main-header.text-sm .nav-link>.glyphicon,.main-header.text-sm .nav-link>.ion,.text-sm .main-header .nav-link>.fa,.text-sm .main-header .nav-link>.fab,.text-sm .main-header .nav-link>.far,.text-sm .main-header .nav-link>.fas,.text-sm .main-header .nav-link>.glyphicon,.text-sm .main-header .nav-link>.ion{font-size:.875rem}.main-header .navbar-nav .nav-item{margin:0}.main-header .navbar-nav[class*=-right] .dropdown-menu{left:auto;margin-top:-3px;right:0}@media (max-width:575.98px){.main-header .navbar-nav[class*=-right] .dropdown-menu{left:0;right:auto}}.navbar-img{height:calc(3.5rem + 1px)/2;width:auto}.navbar-badge{font-size:.6rem;font-weight:300;padding:2px 4px;position:absolute;right:5px;top:9px}.btn-navbar{background-color:transparent;border-left-width:0}.form-control-navbar{border-right-width:0}.form-control-navbar+.input-group-append{margin-left:0}.btn-navbar,.form-control-navbar{transition:none}.navbar-dark .btn-navbar,.navbar-dark .form-control-navbar{background-color:hsla(0,0%,100%,.2);border:0}.navbar-dark .form-control-navbar::-webkit-input-placeholder{color:hsla(0,0%,100%,.6)}.navbar-dark .form-control-navbar::-moz-placeholder{color:hsla(0,0%,100%,.6)}.navbar-dark .form-control-navbar:-ms-input-placeholder,.navbar-dark .form-control-navbar::-ms-input-placeholder{color:hsla(0,0%,100%,.6)}.navbar-dark .form-control-navbar::placeholder{color:hsla(0,0%,100%,.6)}.navbar-dark .form-control-navbar+.input-group-append>.btn-navbar{color:hsla(0,0%,100%,.6)}.navbar-dark .form-control-navbar:focus,.navbar-dark .form-control-navbar:focus+.input-group-append .btn-navbar{background-color:hsla(0,0%,100%,.6);border:0!important;color:#343a40}.navbar-light .btn-navbar,.navbar-light .form-control-navbar{background-color:#f2f4f6;border:0}.navbar-light .form-control-navbar::-webkit-input-placeholder{color:rgba(0,0,0,.6)}.navbar-light .form-control-navbar::-moz-placeholder{color:rgba(0,0,0,.6)}.navbar-light .form-control-navbar:-ms-input-placeholder,.navbar-light .form-control-navbar::-ms-input-placeholder{color:rgba(0,0,0,.6)}.navbar-light .form-control-navbar::placeholder{color:rgba(0,0,0,.6)}.navbar-light .form-control-navbar+.input-group-append>.btn-navbar{color:rgba(0,0,0,.6)}.navbar-light .form-control-navbar:focus,.navbar-light .form-control-navbar:focus+.input-group-append .btn-navbar{background-color:#e9ecef;border:0!important;color:#343a40}.brand-link{display:block;font-size:1.25rem;line-height:1.5;padding:.8125rem .5rem;transition:width .3s ease-in-out;white-space:nowrap}.brand-link:hover{color:#fff;text-decoration:none}.text-sm .brand-link{font-size:inherit}[class*=sidebar-dark] .brand-link{border-bottom:1px solid #4b545c;color:hsla(0,0%,100%,.8)}[class*=sidebar-light] .brand-link{border-bottom:1px solid #dee2e6;color:rgba(0,0,0,.8)}.brand-link .brand-image{float:left;line-height:.8;margin-left:.8rem;margin-right:.5rem;margin-top:-3px;max-height:33px;width:auto}.brand-link .brand-image-xs{float:left;line-height:.8;margin-top:-.1rem;max-height:33px;width:auto}.brand-link .brand-image-xl{line-height:.8;max-height:40px;width:auto}.brand-link .brand-image-xl.single{margin-top:-.3rem}.brand-link.text-sm .brand-image,.text-sm .brand-link .brand-image{height:29px;margin-bottom:-.25rem;margin-left:.95rem;margin-top:-.25rem}.brand-link.text-sm .brand-image-xs,.text-sm .brand-link .brand-image-xs{margin-top:-.2rem;max-height:29px}.brand-link.text-sm .brand-image-xl,.text-sm .brand-link .brand-image-xl{margin-top:-.225rem;max-height:38px}.main-sidebar{height:100vh;overflow-y:hidden;z-index:1038}.main-sidebar a:-moz-focusring{border:0;outline:0}.sidebar{height:calc(100% - (3.5rem + 1px));overflow-y:auto;padding:0 .5rem}.user-panel{position:relative}[class*=sidebar-dark] .user-panel{border-bottom:1px solid #4f5962}[class*=sidebar-light] .user-panel{border-bottom:1px solid #dee2e6}.user-panel,.user-panel .info{overflow:hidden;white-space:nowrap}.user-panel .image{display:inline-block;padding-left:.8rem}.user-panel img{height:auto;width:2.1rem}.user-panel .info{display:inline-block;padding:5px 5px 5px 10px}.user-panel .dropdown-menu,.user-panel .status{font-size:.875rem}.nav-sidebar .nav-item>.nav-link{margin-bottom:.2rem}.nav-sidebar .nav-item>.nav-link .right{transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-sidebar .nav-item>.nav-link .right{transition:none}}.nav-sidebar .nav-link>.right,.nav-sidebar .nav-link>p>.right{position:absolute;right:1rem;top:.7rem}.nav-sidebar .nav-link>.right i,.nav-sidebar .nav-link>.right span,.nav-sidebar .nav-link>p>.right i,.nav-sidebar .nav-link>p>.right span{margin-left:.5rem}.nav-sidebar .nav-link>.right:nth-child(2),.nav-sidebar .nav-link>p>.right:nth-child(2){right:2.2rem}.nav-sidebar .menu-open>.nav-treeview{display:block}.nav-sidebar .menu-open>.nav-link i.right{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.nav-sidebar>.nav-item{margin-bottom:0}.nav-sidebar>.nav-item .nav-icon{margin-left:.05rem;font-size:1.2rem;margin-right:.2rem;text-align:center;width:1.6rem}.nav-sidebar>.nav-item .nav-icon.fa,.nav-sidebar>.nav-item .nav-icon.fab,.nav-sidebar>.nav-item .nav-icon.far,.nav-sidebar>.nav-item .nav-icon.fas,.nav-sidebar>.nav-item .nav-icon.glyphicon,.nav-sidebar>.nav-item .nav-icon.ion{font-size:1.1rem}.nav-sidebar>.nav-item .float-right{margin-top:3px}.nav-sidebar .nav-treeview{display:none;list-style:none;padding:0}.nav-sidebar .nav-treeview>.nav-item>.nav-link>.nav-icon{width:1.6rem}.nav-sidebar.nav-child-indent .nav-treeview{transition:padding .3s ease-in-out;padding-left:1rem}.text-sm .nav-sidebar.nav-child-indent .nav-treeview{padding-left:.5rem}.nav-sidebar.nav-child-indent.nav-legacy .nav-treeview .nav-treeview{padding-left:2rem;margin-left:-1rem}.text-sm .nav-sidebar.nav-child-indent.nav-legacy .nav-treeview .nav-treeview{padding-left:1rem;margin-left:-.5rem}.nav-sidebar .nav-header{font-size:.9rem;padding:.5rem}.nav-sidebar .nav-header:not(:first-of-type){padding:1.7rem 1rem .5rem}.nav-sidebar .nav-link p{display:inline-block;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;margin:0}#sidebar-overlay{background-color:rgba(0,0,0,.1);bottom:0;display:none;left:0;position:fixed;right:0;top:0;z-index:1037}@media (max-width:991.98px){.sidebar-open #sidebar-overlay{display:block}}[class*=sidebar-light-]{background-color:#fff}[class*=sidebar-light-] .user-panel a:hover{color:#212529}[class*=sidebar-light-] .user-panel .status{background:rgba(0,0,0,.1);color:#343a40}[class*=sidebar-light-] .user-panel .status:active,[class*=sidebar-light-] .user-panel .status:focus,[class*=sidebar-light-] .user-panel .status:hover{background:rgba(0,0,0,.1);color:#212529}[class*=sidebar-light-] .user-panel .dropdown-menu{box-shadow:0 2px 4px rgba(0,0,0,.4);border-color:rgba(0,0,0,.1)}[class*=sidebar-light-] .user-panel .dropdown-item{color:#212529}[class*=sidebar-light-] .nav-sidebar>.nav-item>.nav-link:active,[class*=sidebar-light-] .nav-sidebar>.nav-item>.nav-link:focus{color:#343a40}[class*=sidebar-light-] .nav-sidebar>.nav-item.menu-open>.nav-link,[class*=sidebar-light-] .nav-sidebar>.nav-item:hover>.nav-link{background-color:rgba(0,0,0,.1);color:#212529}[class*=sidebar-light-] .nav-sidebar>.nav-item>.nav-link.active{color:#000;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}[class*=sidebar-light-] .nav-sidebar>.nav-item>.nav-treeview{background:0 0}[class*=sidebar-light-] .nav-header{background:inherit;color:#292d32}[class*=sidebar-light-] .sidebar a{color:#343a40}[class*=sidebar-light-] .sidebar a:hover{text-decoration:none}[class*=sidebar-light-] .nav-treeview>.nav-item>.nav-link{color:#777}[class*=sidebar-light-] .nav-treeview>.nav-item>.nav-link.active,[class*=sidebar-light-] .nav-treeview>.nav-item>.nav-link.active:hover{background-color:rgba(0,0,0,.1);color:#212529}[class*=sidebar-light-] .nav-treeview>.nav-item>.nav-link:hover{background-color:rgba(0,0,0,.1)}[class*=sidebar-light-] .nav-flat .nav-item .nav-treeview .nav-treeview,[class*=sidebar-light-] .nav-flat .nav-item .nav-treeview>.nav-item>.nav-link,[class*=sidebar-light-] .nav-flat .nav-item .nav-treeview>.nav-item>.nav-link.active{border-color:rgba(0,0,0,.1)}[class*=sidebar-dark-]{background-color:#343a40}[class*=sidebar-dark-] .user-panel a:hover{color:#fff}[class*=sidebar-dark-] .user-panel .status{background:hsla(0,0%,100%,.1);color:#c2c7d0}[class*=sidebar-dark-] .user-panel .status:active,[class*=sidebar-dark-] .user-panel .status:focus,[class*=sidebar-dark-] .user-panel .status:hover{background:hsla(0,0%,97%,.1);color:#fff}[class*=sidebar-dark-] .user-panel .dropdown-menu{box-shadow:0 2px 4px rgba(0,0,0,.4);border-color:hsla(0,0%,95%,.1)}[class*=sidebar-dark-] .user-panel .dropdown-item{color:#212529}[class*=sidebar-dark-] .nav-sidebar>.nav-item>.nav-link:active{color:#c2c7d0}[class*=sidebar-dark-] .nav-sidebar>.nav-item.menu-open>.nav-link,[class*=sidebar-dark-] .nav-sidebar>.nav-item:hover>.nav-link,[class*=sidebar-dark-] .nav-sidebar>.nav-item>.nav-link:focus{background-color:hsla(0,0%,100%,.1);color:#fff}[class*=sidebar-dark-] .nav-sidebar>.nav-item>.nav-link.active{color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}[class*=sidebar-dark-] .nav-sidebar>.nav-item>.nav-treeview{background:0 0}[class*=sidebar-dark-] .nav-header{background:inherit;color:#d0d4db}[class*=sidebar-dark-] .sidebar a{color:#c2c7d0}[class*=sidebar-dark-] .sidebar a:focus,[class*=sidebar-dark-] .sidebar a:hover{text-decoration:none}[class*=sidebar-dark-] .nav-treeview>.nav-item>.nav-link{color:#c2c7d0}[class*=sidebar-dark-] .nav-treeview>.nav-item>.nav-link:focus,[class*=sidebar-dark-] .nav-treeview>.nav-item>.nav-link:hover{background-color:hsla(0,0%,100%,.1);color:#fff}[class*=sidebar-dark-] .nav-treeview>.nav-item>.nav-link.active,[class*=sidebar-dark-] .nav-treeview>.nav-item>.nav-link.active:focus,[class*=sidebar-dark-] .nav-treeview>.nav-item>.nav-link.active:hover{background-color:hsla(0,0%,100%,.9);color:#343a40}[class*=sidebar-dark-] .nav-flat .nav-item .nav-treeview .nav-treeview,[class*=sidebar-dark-] .nav-flat .nav-item .nav-treeview>.nav-item>.nav-link,[class*=sidebar-dark-] .nav-flat .nav-item .nav-treeview>.nav-item>.nav-link.active{border-color:hsla(0,0%,100%,.9)}.sidebar-dark-primary .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-primary .nav-sidebar>.nav-item>.nav-link.active{background-color:#007bff;color:#fff}.sidebar-dark-primary .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-primary .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#007bff}.sidebar-dark-secondary .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-secondary .nav-sidebar>.nav-item>.nav-link.active{background-color:#6c757d;color:#fff}.sidebar-dark-secondary .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-secondary .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#6c757d}.sidebar-dark-success .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-success .nav-sidebar>.nav-item>.nav-link.active{background-color:#28a745;color:#fff}.sidebar-dark-success .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-success .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#28a745}.sidebar-dark-info .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-info .nav-sidebar>.nav-item>.nav-link.active{background-color:#17a2b8;color:#fff}.sidebar-dark-info .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-info .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#17a2b8}.sidebar-dark-warning .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-warning .nav-sidebar>.nav-item>.nav-link.active{background-color:#ffc107;color:#1f2d3d}.sidebar-dark-warning .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-warning .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#ffc107}.sidebar-dark-danger .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-danger .nav-sidebar>.nav-item>.nav-link.active{background-color:#dc3545;color:#fff}.sidebar-dark-danger .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-danger .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#dc3545}.sidebar-dark-light .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-light .nav-sidebar>.nav-item>.nav-link.active{background-color:#f8f9fa;color:#1f2d3d}.sidebar-dark-light .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-light .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#f8f9fa}.sidebar-dark-dark .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-dark .nav-sidebar>.nav-item>.nav-link.active{background-color:#343a40;color:#fff}.sidebar-dark-dark .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-dark .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#343a40}.sidebar-dark-lightblue .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-lightblue .nav-sidebar>.nav-item>.nav-link.active{background-color:#3c8dbc;color:#fff}.sidebar-dark-lightblue .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-lightblue .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#3c8dbc}.sidebar-dark-navy .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-navy .nav-sidebar>.nav-item>.nav-link.active{background-color:#001f3f;color:#fff}.sidebar-dark-navy .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-navy .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#001f3f}.sidebar-dark-olive .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-olive .nav-sidebar>.nav-item>.nav-link.active{background-color:#3d9970;color:#fff}.sidebar-dark-olive .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-olive .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#3d9970}.sidebar-dark-lime .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-lime .nav-sidebar>.nav-item>.nav-link.active{background-color:#01ff70;color:#1f2d3d}.sidebar-dark-lime .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-lime .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#01ff70}.sidebar-dark-fuchsia .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-fuchsia .nav-sidebar>.nav-item>.nav-link.active{background-color:#f012be;color:#fff}.sidebar-dark-fuchsia .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-fuchsia .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#f012be}.sidebar-dark-maroon .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-maroon .nav-sidebar>.nav-item>.nav-link.active{background-color:#d81b60;color:#fff}.sidebar-dark-maroon .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-maroon .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#d81b60}.sidebar-dark-blue .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-blue .nav-sidebar>.nav-item>.nav-link.active{background-color:#007bff;color:#fff}.sidebar-dark-blue .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-blue .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#007bff}.sidebar-dark-indigo .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-indigo .nav-sidebar>.nav-item>.nav-link.active{background-color:#6610f2;color:#fff}.sidebar-dark-indigo .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-indigo .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#6610f2}.sidebar-dark-purple .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-purple .nav-sidebar>.nav-item>.nav-link.active{background-color:#6f42c1;color:#fff}.sidebar-dark-purple .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-purple .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#6f42c1}.sidebar-dark-pink .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-pink .nav-sidebar>.nav-item>.nav-link.active{background-color:#e83e8c;color:#fff}.sidebar-dark-pink .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-pink .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#e83e8c}.sidebar-dark-red .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-red .nav-sidebar>.nav-item>.nav-link.active{background-color:#dc3545;color:#fff}.sidebar-dark-red .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-red .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#dc3545}.sidebar-dark-orange .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-orange .nav-sidebar>.nav-item>.nav-link.active{background-color:#fd7e14;color:#1f2d3d}.sidebar-dark-orange .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-orange .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#fd7e14}.sidebar-dark-yellow .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-yellow .nav-sidebar>.nav-item>.nav-link.active{background-color:#ffc107;color:#1f2d3d}.sidebar-dark-yellow .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-yellow .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#ffc107}.sidebar-dark-green .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-green .nav-sidebar>.nav-item>.nav-link.active{background-color:#28a745;color:#fff}.sidebar-dark-green .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-green .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#28a745}.sidebar-dark-teal .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-teal .nav-sidebar>.nav-item>.nav-link.active{background-color:#20c997;color:#fff}.sidebar-dark-teal .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-teal .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#20c997}.sidebar-dark-cyan .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-cyan .nav-sidebar>.nav-item>.nav-link.active{background-color:#17a2b8;color:#fff}.sidebar-dark-cyan .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-cyan .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#17a2b8}.sidebar-dark-white .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-white .nav-sidebar>.nav-item>.nav-link.active{background-color:#fff;color:#1f2d3d}.sidebar-dark-white .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-white .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#fff}.sidebar-dark-gray .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-gray .nav-sidebar>.nav-item>.nav-link.active{background-color:#6c757d;color:#fff}.sidebar-dark-gray .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-gray .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#6c757d}.sidebar-dark-gray-dark .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-gray-dark .nav-sidebar>.nav-item>.nav-link.active{background-color:#343a40;color:#fff}.sidebar-dark-gray-dark .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,.sidebar-light-gray-dark .nav-sidebar.nav-legacy>.nav-item>.nav-link.active{border-color:#343a40}.sidebar-mini-md .main-sidebar.sidebar-focused .nav-compact.nav-sidebar.nav-child-indent:not(.nav-flat) .nav-treeview,.sidebar-mini-md .main-sidebar:not(.sidebar-no-expand) .nav-compact.nav-sidebar.nav-child-indent:not(.nav-flat) .nav-treeview,.sidebar-mini-md .main-sidebar:not(.sidebar-no-expand):hover .nav-compact.nav-sidebar.nav-child-indent:not(.nav-flat) .nav-treeview,.sidebar-mini .main-sidebar.sidebar-focused .nav-compact.nav-sidebar.nav-child-indent:not(.nav-flat) .nav-treeview,.sidebar-mini .main-sidebar:not(.sidebar-no-expand) .nav-compact.nav-sidebar.nav-child-indent:not(.nav-flat) .nav-treeview,.sidebar-mini .main-sidebar:not(.sidebar-no-expand):hover .nav-compact.nav-sidebar.nav-child-indent:not(.nav-flat) .nav-treeview{padding-left:1rem;margin-left:-.5rem}.nav-flat{margin:-.25rem -.5rem 0}.nav-flat .nav-item>.nav-link{border-radius:0;margin-bottom:0}.nav-flat .nav-item>.nav-link>.nav-icon{margin-left:.55rem}.nav-flat:not(.nav-child-indent) .nav-treeview .nav-item>.nav-link>.nav-icon{margin-left:.4rem}.nav-flat.nav-child-indent .nav-treeview{padding-left:0}.nav-flat.nav-child-indent .nav-treeview .nav-icon{margin-left:.85rem}.nav-flat.nav-child-indent .nav-treeview .nav-treeview{border-left:.2rem solid}.nav-flat.nav-child-indent .nav-treeview .nav-treeview .nav-icon{margin-left:1.15rem}.nav-flat.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-icon{margin-left:1.45rem}.nav-flat.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-icon{margin-left:1.75rem}.nav-flat.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-icon{margin-left:2.05rem}.sidebar-collapse .nav-flat.nav-child-indent .nav-treeview .nav-icon{margin-left:.55rem}.sidebar-collapse .nav-flat.nav-child-indent .nav-treeview .nav-link{padding-left:0.8rem}.sidebar-collapse .nav-flat.nav-child-indent .nav-treeview .nav-treeview .nav-icon{margin-left:.35rem}.sidebar-collapse .nav-flat.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-icon{margin-left:.15rem}.sidebar-collapse .nav-flat.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-icon{margin-left:-.15rem}.sidebar-collapse .nav-flat.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-icon{margin-left:-.35rem}.sidebar-mini-md .main-sidebar.sidebar-focused .nav-flat.nav-compact.nav-sidebar .nav-treeview .nav-icon,.sidebar-mini-md .main-sidebar:not(.sidebar-no-expand):hover .nav-flat.nav-compact.nav-sidebar .nav-treeview .nav-icon,.sidebar-mini .main-sidebar.sidebar-focused .nav-flat.nav-compact.nav-sidebar .nav-treeview .nav-icon,.sidebar-mini .main-sidebar:not(.sidebar-no-expand):hover .nav-flat.nav-compact.nav-sidebar .nav-treeview .nav-icon{margin-left:.4rem}.sidebar-mini-md .main-sidebar.sidebar-focused .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-icon,.sidebar-mini-md .main-sidebar:not(.sidebar-no-expand):hover .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-icon,.sidebar-mini .main-sidebar.sidebar-focused .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-icon,.sidebar-mini .main-sidebar:not(.sidebar-no-expand):hover .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-icon{margin-left:.85rem}.sidebar-mini-md .main-sidebar.sidebar-focused .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-icon,.sidebar-mini-md .main-sidebar:not(.sidebar-no-expand):hover .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-icon,.sidebar-mini .main-sidebar.sidebar-focused .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-icon,.sidebar-mini .main-sidebar:not(.sidebar-no-expand):hover .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-icon{margin-left:1.15rem}.sidebar-mini-md .main-sidebar.sidebar-focused .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-icon,.sidebar-mini-md .main-sidebar:not(.sidebar-no-expand):hover .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-icon,.sidebar-mini .main-sidebar.sidebar-focused .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-icon,.sidebar-mini .main-sidebar:not(.sidebar-no-expand):hover .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-icon{margin-left:1.45rem}.sidebar-mini-md .main-sidebar.sidebar-focused .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-icon,.sidebar-mini-md .main-sidebar:not(.sidebar-no-expand):hover .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-icon,.sidebar-mini .main-sidebar.sidebar-focused .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-icon,.sidebar-mini .main-sidebar:not(.sidebar-no-expand):hover .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-icon{margin-left:1.75rem}.sidebar-mini-md .main-sidebar.sidebar-focused .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-icon,.sidebar-mini-md .main-sidebar:not(.sidebar-no-expand):hover .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-icon,.sidebar-mini .main-sidebar.sidebar-focused .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-icon,.sidebar-mini .main-sidebar:not(.sidebar-no-expand):hover .nav-flat.nav-sidebar.nav-child-indent .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-treeview .nav-icon{margin-left:2.05rem}.nav-flat .nav-icon{transition:margin-left .3s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-flat .nav-icon{transition:none}}.nav-flat .nav-treeview .nav-icon{margin-left:-.2rem}.nav-flat.nav-sidebar>.nav-item .nav-treeview,.nav-flat.nav-sidebar>.nav-item>.nav-treeview{background:hsla(0,0%,100%,.05)}.nav-flat.nav-sidebar>.nav-item .nav-treeview .nav-item>.nav-link,.nav-flat.nav-sidebar>.nav-item>.nav-treeview .nav-item>.nav-link{border-left:.2rem solid}.nav-legacy{margin:-.25rem -.5rem 0}.nav-legacy.nav-sidebar .nav-item>.nav-link{border-radius:0;margin-bottom:0}.nav-legacy.nav-sidebar .nav-item>.nav-link>.nav-icon{margin-left:.55rem}.text-sm .nav-legacy.nav-sidebar .nav-item>.nav-link>.nav-icon{margin-left:.75rem}.nav-legacy.nav-sidebar>.nav-item>.nav-link.active{background:inherit;border-left:3px solid transparent;box-shadow:none}.nav-legacy.nav-sidebar>.nav-item>.nav-link.active>.nav-icon{margin-left:calc(.55rem - 3px)}.text-sm .nav-legacy.nav-sidebar.nav-flat .nav-treeview .nav-item>.nav-link>.nav-icon,.text-sm .nav-legacy.nav-sidebar>.nav-item>.nav-link.active>.nav-icon{margin-left:calc(.75rem - 3px)}.sidebar-mini-md .nav-legacy>.nav-item .nav-link .nav-icon,.sidebar-mini .nav-legacy>.nav-item .nav-link .nav-icon{transition:margin-left .3s ease-in-out;margin-left:.75rem}@media (prefers-reduced-motion:reduce){.sidebar-mini-md .nav-legacy>.nav-item .nav-link .nav-icon,.sidebar-mini .nav-legacy>.nav-item .nav-link .nav-icon{transition:none}}.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .nav-legacy.nav-child-indent .nav-treeview,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .nav-legacy.nav-child-indent .nav-treeview,.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .nav-legacy.nav-child-indent .nav-treeview,.sidebar-mini.sidebar-collapse .main-sidebar:hover .nav-legacy.nav-child-indent .nav-treeview{padding-left:1rem}.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .nav-legacy.nav-child-indent .nav-treeview .nav-treeview,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .nav-legacy.nav-child-indent .nav-treeview .nav-treeview,.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .nav-legacy.nav-child-indent .nav-treeview .nav-treeview,.sidebar-mini.sidebar-collapse .main-sidebar:hover .nav-legacy.nav-child-indent .nav-treeview .nav-treeview{padding-left:2rem;margin-left:-1rem}.sidebar-mini-md.sidebar-collapse.text-sm .main-sidebar.sidebar-focused .nav-legacy.nav-child-indent .nav-treeview,.sidebar-mini-md.sidebar-collapse.text-sm .main-sidebar:hover .nav-legacy.nav-child-indent .nav-treeview,.sidebar-mini.sidebar-collapse.text-sm .main-sidebar.sidebar-focused .nav-legacy.nav-child-indent .nav-treeview,.sidebar-mini.sidebar-collapse.text-sm .main-sidebar:hover .nav-legacy.nav-child-indent .nav-treeview{padding-left:.5rem}.sidebar-mini-md.sidebar-collapse.text-sm .main-sidebar.sidebar-focused .nav-legacy.nav-child-indent .nav-treeview .nav-treeview,.sidebar-mini-md.sidebar-collapse.text-sm .main-sidebar:hover .nav-legacy.nav-child-indent .nav-treeview .nav-treeview,.sidebar-mini.sidebar-collapse.text-sm .main-sidebar.sidebar-focused .nav-legacy.nav-child-indent .nav-treeview .nav-treeview,.sidebar-mini.sidebar-collapse.text-sm .main-sidebar:hover .nav-legacy.nav-child-indent .nav-treeview .nav-treeview{padding-left:1rem;margin-left:-.5rem}.sidebar-mini-md.sidebar-collapse .nav-legacy>.nav-item>.nav-link .nav-icon,.sidebar-mini.sidebar-collapse .nav-legacy>.nav-item>.nav-link .nav-icon{margin-left:.55rem}.sidebar-mini-md.sidebar-collapse .nav-legacy>.nav-item>.nav-link.active>.nav-icon,.sidebar-mini.sidebar-collapse .nav-legacy>.nav-item>.nav-link.active>.nav-icon{margin-left:.36rem}.sidebar-mini-md.sidebar-collapse .nav-legacy.nav-child-indent .nav-treeview .nav-treeview,.sidebar-mini.sidebar-collapse .nav-legacy.nav-child-indent .nav-treeview .nav-treeview{padding-left:0;margin-left:0}.sidebar-mini-md.sidebar-collapse.text-sm .nav-legacy>.nav-item>.nav-link .nav-icon,.sidebar-mini.sidebar-collapse.text-sm .nav-legacy>.nav-item>.nav-link .nav-icon{margin-left:.75rem}.sidebar-mini-md.sidebar-collapse.text-sm .nav-legacy>.nav-item>.nav-link.active>.nav-icon,.sidebar-mini.sidebar-collapse.text-sm .nav-legacy>.nav-item>.nav-link.active>.nav-icon{margin-left:calc(.75rem - 3px)}[class*=sidebar-dark] .nav-legacy.nav-sidebar>.nav-item .nav-treeview,[class*=sidebar-dark] .nav-legacy.nav-sidebar>.nav-item>.nav-treeview{background:hsla(0,0%,100%,.05)}[class*=sidebar-dark] .nav-legacy.nav-sidebar>.nav-item>.nav-link.active{color:#fff}[class*=sidebar-dark] .nav-legacy .nav-treeview>.nav-item>.nav-link.active,[class*=sidebar-dark] .nav-legacy .nav-treeview>.nav-item>.nav-link:focus,[class*=sidebar-dark] .nav-legacy .nav-treeview>.nav-item>.nav-link:hover{background:0 0;color:#fff}[class*=sidebar-light] .nav-legacy.nav-sidebar>.nav-item .nav-treeview,[class*=sidebar-light] .nav-legacy.nav-sidebar>.nav-item>.nav-treeview{background:rgba(0,0,0,.05)}[class*=sidebar-light] .nav-legacy.nav-sidebar>.nav-item>.nav-link.active{color:#000}[class*=sidebar-light] .nav-legacy .nav-treeview>.nav-item>.nav-link.active,[class*=sidebar-light] .nav-legacy .nav-treeview>.nav-item>.nav-link:focus,[class*=sidebar-light] .nav-legacy .nav-treeview>.nav-item>.nav-link:hover{background:0 0;color:#000}.nav-collapse-hide-child .menu-open>.nav-treeview{max-height:-webkit-min-content;max-height:-moz-min-content;max-height:min-content;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.sidebar-collapse .nav-collapse-hide-child .menu-open>.nav-treeview{max-height:0;-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .nav-collapse-hide-child .menu-open>.nav-treeview,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .nav-collapse-hide-child .menu-open>.nav-treeview,.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .nav-collapse-hide-child .menu-open>.nav-treeview,.sidebar-mini.sidebar-collapse .main-sidebar:hover .nav-collapse-hide-child .menu-open>.nav-treeview{max-height:-webkit-min-content;max-height:-moz-min-content;max-height:min-content;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.nav-compact .nav-header,.nav-compact .nav-link{padding-top:.25rem;padding-bottom:.25rem}.nav-compact .nav-header:not(:first-of-type){padding-top:.75rem;padding-bottom:.25rem}.nav-compact .nav-link>.right,.nav-compact .nav-link>p>.right{top:.465rem}.text-sm .nav-compact .nav-link>.right,.text-sm .nav-compact .nav-link>p>.right{top:.7rem}[class*=sidebar-dark] .btn-sidebar,[class*=sidebar-dark] .form-control-sidebar{background:#3f474e;border:1px solid #56606a;color:#fff}[class*=sidebar-dark] .btn-sidebar:focus,[class*=sidebar-dark] .form-control-sidebar:focus{border:1px solid #7a8793}[class*=sidebar-dark] .btn-sidebar:hover{background:#454d55}[class*=sidebar-dark] .btn-sidebar:focus{background:#4b545c}[class*=sidebar-light] .btn-sidebar,[class*=sidebar-light] .form-control-sidebar{background:#f2f2f2;border:1px solid #d9d9d9;color:#1f2d3d}[class*=sidebar-light] .btn-sidebar:focus,[class*=sidebar-light] .form-control-sidebar:focus{border:1px solid #b3b3b3}[class*=sidebar-light] .btn-sidebar:hover{background:#ececec}[class*=sidebar-light] .btn-sidebar:focus{background:#e6e6e6}.sidebar .form-inline .input-group{width:100%}.sidebar nav .form-inline{margin-bottom:.2rem}.layout-boxed:not(.sidebar-mini):not(.sidebar-mini-md).sidebar-collapse .main-sidebar{margin-left:0}.layout-boxed:not(.sidebar-mini):not(.sidebar-mini-md) .content-wrapper,.layout-boxed:not(.sidebar-mini):not(.sidebar-mini-md) .main-footer,.layout-boxed:not(.sidebar-mini):not(.sidebar-mini-md) .main-header{z-index:9999;position:relative}.logo-xl,.logo-xs{opacity:1;position:absolute;visibility:visible}.logo-xl.brand-image-xs,.logo-xs.brand-image-xs{left:18px;top:12px}.logo-xl.brand-image-xl,.logo-xs.brand-image-xl{left:12px;top:6px}.logo-xs{opacity:0;visibility:hidden}.logo-xs.brand-image-xl{left:16px;top:8px}.brand-link.logo-switch:before{content:\"\\A0\"}@media (min-width:992px){.sidebar-mini .nav-sidebar,.sidebar-mini .nav-sidebar .nav-link,.sidebar-mini .nav-sidebar>.nav-header{white-space:nowrap;overflow:hidden}.sidebar-mini.sidebar-collapse .d-hidden-mini{display:none}.sidebar-mini.sidebar-collapse .content-wrapper,.sidebar-mini.sidebar-collapse .main-footer,.sidebar-mini.sidebar-collapse .main-header{margin-left:4.6rem!important}.sidebar-mini.sidebar-collapse .nav-sidebar .nav-header{display:none}.sidebar-mini.sidebar-collapse .nav-sidebar .nav-link p{width:0}.sidebar-mini.sidebar-collapse .brand-text,.sidebar-mini.sidebar-collapse .nav-sidebar .nav-link p,.sidebar-mini.sidebar-collapse .sidebar .user-panel>.info{margin-left:-10px}.sidebar-mini.sidebar-collapse .brand-text,.sidebar-mini.sidebar-collapse .logo-xl,.sidebar-mini.sidebar-collapse .nav-sidebar .nav-link p,.sidebar-mini.sidebar-collapse .sidebar .user-panel>.info{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;visibility:hidden}.sidebar-mini.sidebar-collapse .logo-xs{display:inline-block;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;visibility:visible}.sidebar-mini.sidebar-collapse .main-sidebar{overflow-x:hidden}.sidebar-mini.sidebar-collapse .main-sidebar,.sidebar-mini.sidebar-collapse .main-sidebar:before{margin-left:0;width:4.6rem}.sidebar-mini.sidebar-collapse .main-sidebar .user-panel .image{float:none}.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused,.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .brand-link,.sidebar-mini.sidebar-collapse .main-sidebar:hover,.sidebar-mini.sidebar-collapse .main-sidebar:hover .brand-link{width:250px}.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .user-panel,.sidebar-mini.sidebar-collapse .main-sidebar:hover .user-panel{text-align:left}.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .user-panel .image,.sidebar-mini.sidebar-collapse .main-sidebar:hover .user-panel .image{float:left}.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .brand-text,.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .logo-xl,.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .nav-sidebar .nav-link p,.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .user-panel>.info,.sidebar-mini.sidebar-collapse .main-sidebar:hover .brand-text,.sidebar-mini.sidebar-collapse .main-sidebar:hover .logo-xl,.sidebar-mini.sidebar-collapse .main-sidebar:hover .nav-sidebar .nav-link p,.sidebar-mini.sidebar-collapse .main-sidebar:hover .user-panel>.info{display:inline-block;margin-left:0;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;visibility:visible}.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .logo-xs,.sidebar-mini.sidebar-collapse .main-sidebar:hover .logo-xs{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;visibility:hidden}.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .brand-image,.sidebar-mini.sidebar-collapse .main-sidebar:hover .brand-image{margin-right:.5rem}.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .sidebar-form,.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .user-panel>.info,.sidebar-mini.sidebar-collapse .main-sidebar:hover .sidebar-form,.sidebar-mini.sidebar-collapse .main-sidebar:hover .user-panel>.info{display:block!important;-webkit-transform:translateZ(0)}.sidebar-mini.sidebar-collapse .main-sidebar.sidebar-focused .nav-sidebar>.nav-item>.nav-link>span,.sidebar-mini.sidebar-collapse .main-sidebar:hover .nav-sidebar>.nav-item>.nav-link>span{display:inline-block!important}.sidebar-mini.sidebar-collapse .visible-sidebar-mini{display:block!important}.sidebar-mini.sidebar-collapse.layout-fixed .main-sidebar:hover .brand-link{width:250px}.sidebar-mini.sidebar-collapse.layout-fixed .brand-link{width:4.6rem}}@media (max-width:991.98px){.sidebar-mini.sidebar-collapse .main-sidebar{box-shadow:none!important}}@media (min-width:768px){.sidebar-mini-md .nav-sidebar,.sidebar-mini-md .nav-sidebar .nav-link,.sidebar-mini-md .nav-sidebar>.nav-header{white-space:nowrap;overflow:hidden}.sidebar-mini-md.sidebar-collapse .d-hidden-mini{display:none}.sidebar-mini-md.sidebar-collapse .content-wrapper,.sidebar-mini-md.sidebar-collapse .main-footer,.sidebar-mini-md.sidebar-collapse .main-header{margin-left:4.6rem!important}.sidebar-mini-md.sidebar-collapse .nav-sidebar .nav-header{display:none}.sidebar-mini-md.sidebar-collapse .nav-sidebar .nav-link p{width:0}.sidebar-mini-md.sidebar-collapse .brand-text,.sidebar-mini-md.sidebar-collapse .nav-sidebar .nav-link p,.sidebar-mini-md.sidebar-collapse .sidebar .user-panel>.info{margin-left:-10px}.sidebar-mini-md.sidebar-collapse .brand-text,.sidebar-mini-md.sidebar-collapse .logo-xl,.sidebar-mini-md.sidebar-collapse .nav-sidebar .nav-link p,.sidebar-mini-md.sidebar-collapse .sidebar .user-panel>.info{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;visibility:hidden}.sidebar-mini-md.sidebar-collapse .logo-xs{display:inline-block;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;visibility:visible}.sidebar-mini-md.sidebar-collapse .main-sidebar{overflow-x:hidden}.sidebar-mini-md.sidebar-collapse .main-sidebar,.sidebar-mini-md.sidebar-collapse .main-sidebar:before{margin-left:0;width:4.6rem}.sidebar-mini-md.sidebar-collapse .main-sidebar .user-panel .image{float:none}.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused,.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .brand-link,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .brand-link{width:250px}.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .user-panel,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .user-panel{text-align:left}.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .user-panel .image,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .user-panel .image{float:left}.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .brand-text,.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .logo-xl,.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .nav-sidebar .nav-link p,.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .user-panel>.info,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .brand-text,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .logo-xl,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .nav-sidebar .nav-link p,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .user-panel>.info{display:inline-block;margin-left:0;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;visibility:visible}.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .logo-xs,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .logo-xs{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;visibility:hidden}.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .brand-image,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .brand-image{margin-right:.5rem}.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .sidebar-form,.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .user-panel>.info,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .sidebar-form,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .user-panel>.info{display:block!important;-webkit-transform:translateZ(0)}.sidebar-mini-md.sidebar-collapse .main-sidebar.sidebar-focused .nav-sidebar>.nav-item>.nav-link>span,.sidebar-mini-md.sidebar-collapse .main-sidebar:hover .nav-sidebar>.nav-item>.nav-link>span{display:inline-block!important}.sidebar-mini-md.sidebar-collapse .visible-sidebar-mini{display:block!important}.sidebar-mini-md.sidebar-collapse.layout-fixed .main-sidebar:hover .brand-link{width:250px}.sidebar-mini-md.sidebar-collapse.layout-fixed .brand-link{width:4.6rem}}@media (max-width:767.98px){.sidebar-mini-md.sidebar-collapse .main-sidebar{box-shadow:none!important}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.sidebar-collapse .main-sidebar.sidebar-focused .nav-header,.sidebar-collapse .main-sidebar:hover .nav-header{display:inline-block}.sidebar-collapse .sidebar-no-expand.main-sidebar.sidebar-focused,.sidebar-collapse .sidebar-no-expand.main-sidebar:hover{width:4.6rem}.sidebar-collapse .sidebar-no-expand.main-sidebar.sidebar-focused .nav-header,.sidebar-collapse .sidebar-no-expand.main-sidebar:hover .nav-header{display:none}.sidebar-collapse .sidebar-no-expand.main-sidebar.sidebar-focused .brand-link,.sidebar-collapse .sidebar-no-expand.main-sidebar:hover .brand-link{width:4.6rem!important}.sidebar-collapse .sidebar-no-expand.main-sidebar.sidebar-focused .user-panel .image,.sidebar-collapse .sidebar-no-expand.main-sidebar:hover .user-panel .image{float:none!important}.sidebar-collapse .sidebar-no-expand.main-sidebar.sidebar-focused .logo-xs,.sidebar-collapse .sidebar-no-expand.main-sidebar:hover .logo-xs{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;visibility:visible}.sidebar-collapse .sidebar-no-expand.main-sidebar.sidebar-focused .logo-xl,.sidebar-collapse .sidebar-no-expand.main-sidebar:hover .logo-xl{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;visibility:hidden}.sidebar-collapse .sidebar-no-expand.main-sidebar.sidebar-focused .nav-sidebar.nav-child-indent .nav-treeview,.sidebar-collapse .sidebar-no-expand.main-sidebar:hover .nav-sidebar.nav-child-indent .nav-treeview{padding-left:0}.sidebar-collapse .sidebar-no-expand.main-sidebar.sidebar-focused .brand-text,.sidebar-collapse .sidebar-no-expand.main-sidebar.sidebar-focused .nav-sidebar .nav-link p,.sidebar-collapse .sidebar-no-expand.main-sidebar.sidebar-focused .user-panel>.info,.sidebar-collapse .sidebar-no-expand.main-sidebar:hover .brand-text,.sidebar-collapse .sidebar-no-expand.main-sidebar:hover .nav-sidebar .nav-link p,.sidebar-collapse .sidebar-no-expand.main-sidebar:hover .user-panel>.info{margin-left:-10px;-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;visibility:hidden;width:0}.sidebar-collapse .sidebar-no-expand.main-sidebar.sidebar-focused .nav-sidebar>.nav-item .nav-icon,.sidebar-collapse .sidebar-no-expand.main-sidebar:hover .nav-sidebar>.nav-item .nav-icon{margin-right:0}.nav-sidebar{position:relative}.nav-sidebar:hover{overflow:visible}.nav-sidebar>.nav-header,.sidebar-form{overflow:hidden;text-overflow:clip}.nav-sidebar .nav-item>.nav-link{position:relative}.nav-sidebar .nav-item>.nav-link>.float-right{margin-top:-7px;position:absolute;right:10px;top:50%}.main-sidebar .brand-text,.main-sidebar .logo-xl,.main-sidebar .logo-xs,.sidebar .nav-link p,.sidebar .user-panel .info{transition:margin-left .3s linear,opacity .3s ease,visibility .3s ease}@media (prefers-reduced-motion:reduce){.main-sidebar .brand-text,.main-sidebar .logo-xl,.main-sidebar .logo-xs,.sidebar .nav-link p,.sidebar .user-panel .info{transition:none}}html.control-sidebar-animate{overflow-x:hidden}.control-sidebar{bottom:calc(3.5rem + 1px);position:absolute;top:calc(3.5rem + 1px);z-index:1031}.control-sidebar,.control-sidebar:before{bottom:calc(3.5rem + 1px);display:none;right:-250px;width:250px;transition:right .3s ease-in-out,display .3s ease-in-out}@media (prefers-reduced-motion:reduce){.control-sidebar,.control-sidebar:before{transition:none}}.control-sidebar:before{content:\"\";display:block;position:fixed;top:0;z-index:-1}body.text-sm .control-sidebar{bottom:calc(2.9365rem + 1px);top:calc(2.93725rem + 1px)}.main-header.text-sm~.control-sidebar{top:calc(2.93725rem + 1px)}.main-footer.text-sm~.control-sidebar{bottom:calc(2.9365rem + 1px)}.control-sidebar-push-slide .content-wrapper,.control-sidebar-push-slide .main-footer{transition:margin-right .3s ease-in-out}@media (prefers-reduced-motion:reduce){.control-sidebar-push-slide .content-wrapper,.control-sidebar-push-slide .main-footer{transition:none}}.control-sidebar-open .control-sidebar{display:block}.control-sidebar-open .control-sidebar,.control-sidebar-open .control-sidebar:before{right:0}.control-sidebar-open.control-sidebar-push-slide .content-wrapper,.control-sidebar-open.control-sidebar-push-slide .main-footer,.control-sidebar-open.control-sidebar-push .content-wrapper,.control-sidebar-open.control-sidebar-push .main-footer{margin-right:250px}.control-sidebar-slide-open .control-sidebar{display:block}.control-sidebar-slide-open .control-sidebar,.control-sidebar-slide-open .control-sidebar:before{right:0;transition:right .3s ease-in-out,display .3s ease-in-out}@media (prefers-reduced-motion:reduce){.control-sidebar-slide-open .control-sidebar,.control-sidebar-slide-open .control-sidebar:before{transition:none}}.control-sidebar-slide-open.control-sidebar-push-slide .content-wrapper,.control-sidebar-slide-open.control-sidebar-push-slide .main-footer,.control-sidebar-slide-open.control-sidebar-push .content-wrapper,.control-sidebar-slide-open.control-sidebar-push .main-footer{margin-right:250px}.control-sidebar-dark,.control-sidebar-dark .nav-link,.control-sidebar-dark a{color:#c2c7d0}.control-sidebar-dark{background:#343a40}.control-sidebar-dark a:hover,.control-sidebar-dark h1,.control-sidebar-dark h2,.control-sidebar-dark h3,.control-sidebar-dark h4,.control-sidebar-dark h5,.control-sidebar-dark h6,.control-sidebar-dark label{color:#fff}.control-sidebar-dark .nav-tabs{background-color:hsla(0,0%,100%,.1);border-bottom:0;margin-bottom:5px}.control-sidebar-dark .nav-tabs .nav-item{margin:0}.control-sidebar-dark .nav-tabs .nav-link{border-radius:0;padding:10px 20px;position:relative;text-align:center}.control-sidebar-dark .nav-tabs .nav-link,.control-sidebar-dark .nav-tabs .nav-link.active,.control-sidebar-dark .nav-tabs .nav-link:active,.control-sidebar-dark .nav-tabs .nav-link:focus,.control-sidebar-dark .nav-tabs .nav-link:hover{border:0}.control-sidebar-dark .nav-tabs .nav-link.active,.control-sidebar-dark .nav-tabs .nav-link:active,.control-sidebar-dark .nav-tabs .nav-link:focus,.control-sidebar-dark .nav-tabs .nav-link:hover{border-bottom-color:transparent;border-left-color:transparent;border-top-color:transparent;color:#fff}.control-sidebar-dark .nav-tabs .nav-link.active{background-color:#343a40}.control-sidebar-dark .tab-pane{padding:10px 15px}.control-sidebar-light{color:#4b545c;background:#fff;border-left:1px solid #dee2e6}.text-sm .dropdown-menu{font-size:.875rem!important}.text-sm .dropdown-toggle:after{vertical-align:.2rem}.dropdown-item-title{font-size:1rem;margin:0}.dropdown-icon:after{margin-left:0}.dropdown-menu-lg{max-width:300px;min-width:280px;padding:0}.dropdown-menu-lg .dropdown-divider{margin:0}.dropdown-menu-lg .dropdown-item{padding:.5rem 1rem}.dropdown-menu-lg p{margin:0;white-space:normal}.dropdown-submenu{position:relative}.dropdown-submenu>a:after{border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid;float:right;margin-left:.5rem;margin-top:.5rem}.dropdown-submenu>.dropdown-menu{left:100%;margin-left:0;margin-top:0;top:0}.dropdown-hover.dropdown-submenu:hover>.dropdown-menu,.dropdown-hover .dropdown-submenu:hover>.dropdown-menu,.dropdown-hover.nav-item.dropdown:hover>.dropdown-menu,.dropdown-hover:hover>.dropdown-menu{display:block}.dropdown-menu-xl{max-width:420px;min-width:360px;padding:0}.dropdown-menu-xl .dropdown-divider{margin:0}.dropdown-menu-xl .dropdown-item{padding:.5rem 1rem}.dropdown-menu-xl p{margin:0;white-space:normal}.dropdown-footer,.dropdown-header{display:block;font-size:.875rem;padding:.5rem 1rem;text-align:center}.open:not(.dropup)>.animated-dropdown-menu{-webkit-animation:flipInX .7s both;animation:flipInX .7s both;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);transition-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);transition-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);transition-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);transition-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.navbar-custom-menu>.navbar-nav>li{position:relative}.navbar-custom-menu>.navbar-nav>li>.dropdown-menu{position:absolute;right:0;left:auto}@media (max-width:767.98px){.navbar-custom-menu>.navbar-nav{float:right}.navbar-custom-menu>.navbar-nav>li{position:static}.navbar-custom-menu>.navbar-nav>li>.dropdown-menu{position:absolute;right:5%;left:auto;border:1px solid #ddd;background:#fff}}.navbar-nav>.user-menu>.nav-link:after{content:none}.navbar-nav>.user-menu>.dropdown-menu{border-top-left-radius:0;border-top-right-radius:0;padding:0;width:280px}.navbar-nav>.user-menu>.dropdown-menu,.navbar-nav>.user-menu>.dropdown-menu>.user-body{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.navbar-nav>.user-menu>.dropdown-menu>li.user-header{height:175px;padding:10px;text-align:center}.navbar-nav>.user-menu>.dropdown-menu>li.user-header>img{z-index:5;height:90px;width:90px;border:3px solid;border-color:transparent;border-color:hsla(0,0%,100%,.2)}.navbar-nav>.user-menu>.dropdown-menu>li.user-header>p{z-index:5;font-size:17px;margin-top:10px}.navbar-nav>.user-menu>.dropdown-menu>li.user-header>p>small{display:block;font-size:12px}.navbar-nav>.user-menu>.dropdown-menu>.user-body{border-bottom:1px solid #495057;border-top:1px solid #dee2e6;padding:15px}.navbar-nav>.user-menu>.dropdown-menu>.user-body:after{display:block;clear:both;content:\"\"}@media (min-width:576px){.navbar-nav>.user-menu>.dropdown-menu>.user-body a{background:#fff!important;color:#495057!important}}.navbar-nav>.user-menu>.dropdown-menu>.user-footer{background-color:#f8f9fa;padding:10px}.navbar-nav>.user-menu>.dropdown-menu>.user-footer:after{display:block;clear:both;content:\"\"}.navbar-nav>.user-menu>.dropdown-menu>.user-footer .btn-default{color:#6c757d}@media (min-width:576px){.navbar-nav>.user-menu>.dropdown-menu>.user-footer .btn-default:hover{background-color:#f8f9fa}}.navbar-nav>.user-menu .user-image{border-radius:50%;float:left;height:2.1rem;margin-right:10px;margin-top:-2px;width:2.1rem}@media (min-width:576px){.navbar-nav>.user-menu .user-image{float:none;line-height:10px;margin-right:.4rem;margin-top:-8px}}.nav-pills .nav-link{color:#6c757d}.nav-pills .nav-link:not(.active):hover{color:#007bff}.nav-pills .nav-item.dropdown.show .nav-link:hover{color:#fff}.nav-tabs.flex-column{border-bottom:0;border-right:1px solid #dee2e6}.nav-tabs.flex-column .nav-link{border-bottom-left-radius:.25rem;border-top-right-radius:0;margin-right:-1px}.nav-tabs.flex-column .nav-link:focus,.nav-tabs.flex-column .nav-link:hover{border-color:#e9ecef transparent #e9ecef #e9ecef}.nav-tabs.flex-column .nav-item.show .nav-link,.nav-tabs.flex-column .nav-link.active{border-color:#dee2e6 transparent #dee2e6 #dee2e6}.nav-tabs.flex-column.nav-tabs-right{border-left:1px solid #dee2e6;border-right:0}.nav-tabs.flex-column.nav-tabs-right .nav-link{border-bottom-left-radius:0;border-bottom-right-radius:.25rem;border-top-left-radius:0;border-top-right-radius:.25rem;margin-left:-1px}.nav-tabs.flex-column.nav-tabs-right .nav-link:focus,.nav-tabs.flex-column.nav-tabs-right .nav-link:hover{border-color:#e9ecef #e9ecef #e9ecef transparent}.nav-tabs.flex-column.nav-tabs-right .nav-item.show .nav-link,.nav-tabs.flex-column.nav-tabs-right .nav-link.active{border-color:#dee2e6 #dee2e6 #dee2e6 transparent}.navbar-no-expand{-ms-flex-direction:row;flex-direction:row}.navbar-no-expand .nav-link{padding-left:1rem;padding-right:1rem}.navbar-no-expand .dropdown-menu{position:absolute}.navbar-light{background-color:#f8f9fa}.navbar-dark{background-color:#343a40}.navbar-primary{background-color:#007bff}.navbar-secondary{background-color:#6c757d}.navbar-success{background-color:#28a745}.navbar-info{background-color:#17a2b8}.navbar-warning{background-color:#ffc107}.navbar-danger{background-color:#dc3545}.navbar-lightblue{background-color:#3c8dbc}.navbar-navy{background-color:#001f3f}.navbar-olive{background-color:#3d9970}.navbar-lime{background-color:#01ff70}.navbar-fuchsia{background-color:#f012be}.navbar-maroon{background-color:#d81b60}.navbar-blue{background-color:#007bff}.navbar-indigo{background-color:#6610f2}.navbar-purple{background-color:#6f42c1}.navbar-pink{background-color:#e83e8c}.navbar-red{background-color:#dc3545}.navbar-orange{background-color:#fd7e14}.navbar-yellow{background-color:#ffc107}.navbar-green{background-color:#28a745}.navbar-teal{background-color:#20c997}.navbar-cyan{background-color:#17a2b8}.navbar-white{background-color:#fff}.navbar-gray{background-color:#6c757d}.navbar-gray-dark{background-color:#343a40}.form-group.has-icon{position:relative}.form-group.has-icon .form-control{padding-right:35px}.form-group.has-icon .form-icon{background-color:transparent;border:0;cursor:pointer;font-size:1rem;padding:.375rem .75rem;position:absolute;right:3px;top:0}.btn-group-vertical .btn.btn-flat:first-of-type,.btn-group-vertical .btn.btn-flat:last-of-type{border-radius:0}.form-control-feedback.fa,.form-control-feedback.fab,.form-control-feedback.far,.form-control-feedback.fas,.form-control-feedback.glyphicon,.form-control-feedback.ion{line-height:calc(2.25rem + 2px)}.form-group-lg .form-control+.form-control-feedback.fa,.form-group-lg .form-control+.form-control-feedback.fab,.form-group-lg .form-control+.form-control-feedback.far,.form-group-lg .form-control+.form-control-feedback.fas,.form-group-lg .form-control+.form-control-feedback.glyphicon,.form-group-lg .form-control+.form-control-feedback.ion,.input-group-lg+.form-control-feedback.fa,.input-group-lg+.form-control-feedback.fab,.input-group-lg+.form-control-feedback.far,.input-group-lg+.form-control-feedback.fas,.input-group-lg+.form-control-feedback.glyphicon,.input-group-lg+.form-control-feedback.ion,.input-lg+.form-control-feedback.fa,.input-lg+.form-control-feedback.fab,.input-lg+.form-control-feedback.far,.input-lg+.form-control-feedback.fas,.input-lg+.form-control-feedback.glyphicon,.input-lg+.form-control-feedback.ion{line-height:calc(2.875rem + 2px)}.form-group-sm .form-control+.form-control-feedback.fa,.form-group-sm .form-control+.form-control-feedback.fab,.form-group-sm .form-control+.form-control-feedback.far,.form-group-sm .form-control+.form-control-feedback.fas,.form-group-sm .form-control+.form-control-feedback.glyphicon,.form-group-sm .form-control+.form-control-feedback.ion,.input-group-sm+.form-control-feedback.fa,.input-group-sm+.form-control-feedback.fab,.input-group-sm+.form-control-feedback.far,.input-group-sm+.form-control-feedback.fas,.input-group-sm+.form-control-feedback.glyphicon,.input-group-sm+.form-control-feedback.ion,.input-sm+.form-control-feedback.fa,.input-sm+.form-control-feedback.fab,.input-sm+.form-control-feedback.far,.input-sm+.form-control-feedback.fas,.input-sm+.form-control-feedback.glyphicon,.input-sm+.form-control-feedback.ion{line-height:calc(1.8125rem + 2px)}label:not(.form-check-label):not(.custom-file-label){font-weight:700}.warning-feedback{font-size:80%;color:#ffc107;display:none;margin-top:.25rem;width:100%}.warning-tooltip{border-radius:.25rem;font-size:.875rem;background-color:rgba(255,193,7,.9);color:#1f2d3d;display:none;line-height:1.5;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.form-control.is-warning{border-color:#ffc107}.form-control.is-warning:focus{border-color:#ffc107;box-shadow:0 0 0 0 rgba(255,193,7,.25)}.form-control.is-warning~.warning-feedback,.form-control.is-warning~.warning-tooltip{display:block}textarea.form-control.is-warning{padding-right:2.25rem;background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-warning{border-color:#ffc107}.custom-select.is-warning:focus{border-color:#ffc107;box-shadow:0 0 0 0 rgba(255,193,7,.25)}.custom-select.is-warning~.warning-feedback,.custom-select.is-warning~.warning-tooltip,.form-control-file.is-warning~.warning-feedback,.form-control-file.is-warning~.warning-tooltip{display:block}.form-check-input.is-warning~.form-check-label{color:#ffc107}.form-check-input.is-warning~.warning-feedback,.form-check-input.is-warning~.warning-tooltip{display:block}.custom-control-input.is-warning~.custom-control-label{color:#ffc107}.custom-control-input.is-warning~.custom-control-label:before{border-color:#ffc107}.custom-control-input.is-warning~.warning-feedback,.custom-control-input.is-warning~.warning-tooltip{display:block}.custom-control-input.is-warning:checked~.custom-control-label:before{background-color:#ffce3a;border-color:#ffce3a}.custom-control-input.is-warning:focus~.custom-control-label:before{box-shadow:0 0 0 0 rgba(255,193,7,.25)}.custom-control-input.is-warning:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-warning~.custom-file-label{border-color:#ffc107}.custom-file-input.is-warning~.warning-feedback,.custom-file-input.is-warning~.warning-tooltip{display:block}.custom-file-input.is-warning:focus~.custom-file-label{border-color:#ffc107;box-shadow:0 0 0 0 rgba(255,193,7,.25)}.custom-switch.custom-switch-off-primary .custom-control-input~.custom-control-label:before{background:#007bff;border-color:#004a99}.custom-switch.custom-switch-off-primary .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,123,255,.25)}.custom-switch.custom-switch-off-primary .custom-control-input~.custom-control-label:after{background:#003e80}.custom-switch.custom-switch-on-primary .custom-control-input:checked~.custom-control-label:before{background:#007bff;border-color:#004a99}.custom-switch.custom-switch-on-primary .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,123,255,.25)}.custom-switch.custom-switch-on-primary .custom-control-input:checked~.custom-control-label:after{background:#99caff}.custom-switch.custom-switch-off-secondary .custom-control-input~.custom-control-label:before{background:#6c757d;border-color:#3d4246}.custom-switch.custom-switch-off-secondary .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(208,7%,46%,.25)}.custom-switch.custom-switch-off-secondary .custom-control-input~.custom-control-label:after{background:#313539}.custom-switch.custom-switch-on-secondary .custom-control-input:checked~.custom-control-label:before{background:#6c757d;border-color:#3d4246}.custom-switch.custom-switch-on-secondary .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(208,7%,46%,.25)}.custom-switch.custom-switch-on-secondary .custom-control-input:checked~.custom-control-label:after{background:#bcc1c6}.custom-switch.custom-switch-off-success .custom-control-input~.custom-control-label:before{background:#28a745;border-color:#145523}.custom-switch.custom-switch-off-success .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(40,167,69,.25)}.custom-switch.custom-switch-off-success .custom-control-input~.custom-control-label:after{background:#0f401b}.custom-switch.custom-switch-on-success .custom-control-input:checked~.custom-control-label:before{background:#28a745;border-color:#145523}.custom-switch.custom-switch-on-success .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(40,167,69,.25)}.custom-switch.custom-switch-on-success .custom-control-input:checked~.custom-control-label:after{background:#86e29b}.custom-switch.custom-switch-off-info .custom-control-input~.custom-control-label:before{background:#17a2b8;border-color:#0c525d}.custom-switch.custom-switch-off-info .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(23,162,184,.25)}.custom-switch.custom-switch-off-info .custom-control-input~.custom-control-label:after{background:#093e47}.custom-switch.custom-switch-on-info .custom-control-input:checked~.custom-control-label:before{background:#17a2b8;border-color:#0c525d}.custom-switch.custom-switch-on-info .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(23,162,184,.25)}.custom-switch.custom-switch-on-info .custom-control-input:checked~.custom-control-label:after{background:#7adeee}.custom-switch.custom-switch-off-warning .custom-control-input~.custom-control-label:before{background:#ffc107;border-color:#a07800}.custom-switch.custom-switch-off-warning .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(255,193,7,.25)}.custom-switch.custom-switch-off-warning .custom-control-input~.custom-control-label:after{background:#876500}.custom-switch.custom-switch-on-warning .custom-control-input:checked~.custom-control-label:before{background:#ffc107;border-color:#a07800}.custom-switch.custom-switch-on-warning .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(255,193,7,.25)}.custom-switch.custom-switch-on-warning .custom-control-input:checked~.custom-control-label:after{background:#ffe7a0}.custom-switch.custom-switch-off-danger .custom-control-input~.custom-control-label:before{background:#dc3545;border-color:#921925}.custom-switch.custom-switch-off-danger .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(220,53,69,.25)}.custom-switch.custom-switch-off-danger .custom-control-input~.custom-control-label:after{background:#7c151f}.custom-switch.custom-switch-on-danger .custom-control-input:checked~.custom-control-label:before{background:#dc3545;border-color:#921925}.custom-switch.custom-switch-on-danger .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(220,53,69,.25)}.custom-switch.custom-switch-on-danger .custom-control-input:checked~.custom-control-label:after{background:#f3b7bd}.custom-switch.custom-switch-off-light .custom-control-input~.custom-control-label:before{background:#f8f9fa;border-color:#bdc6d0}.custom-switch.custom-switch-off-light .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(248,249,250,.25)}.custom-switch.custom-switch-off-light .custom-control-input~.custom-control-label:after{background:#aeb9c5}.custom-switch.custom-switch-on-light .custom-control-input:checked~.custom-control-label:before{background:#f8f9fa;border-color:#bdc6d0}.custom-switch.custom-switch-on-light .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(248,249,250,.25)}.custom-switch.custom-switch-on-light .custom-control-input:checked~.custom-control-label:after{background:#fff}.custom-switch.custom-switch-off-dark .custom-control-input~.custom-control-label:before{background:#343a40;border-color:#060708}.custom-switch.custom-switch-off-dark .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(52,58,64,.25)}.custom-switch.custom-switch-off-dark .custom-control-input~.custom-control-label:after{background:#000}.custom-switch.custom-switch-on-dark .custom-control-input:checked~.custom-control-label:before{background:#343a40;border-color:#060708}.custom-switch.custom-switch-on-dark .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(52,58,64,.25)}.custom-switch.custom-switch-on-dark .custom-control-input:checked~.custom-control-label:after{background:#7a8793}.custom-switch.custom-switch-off-lightblue .custom-control-input~.custom-control-label:before{background:#3c8dbc;border-color:#23536f}.custom-switch.custom-switch-off-lightblue .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(60,141,188,.25)}.custom-switch.custom-switch-off-lightblue .custom-control-input~.custom-control-label:after{background:#1d455b}.custom-switch.custom-switch-on-lightblue .custom-control-input:checked~.custom-control-label:before{background:#3c8dbc;border-color:#23536f}.custom-switch.custom-switch-on-lightblue .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(60,141,188,.25)}.custom-switch.custom-switch-on-lightblue .custom-control-input:checked~.custom-control-label:after{background:#acd0e5}.custom-switch.custom-switch-off-navy .custom-control-input~.custom-control-label:before{background:#001f3f;border-color:#000}.custom-switch.custom-switch-off-navy .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,31,63,.25)}.custom-switch.custom-switch-off-navy .custom-control-input~.custom-control-label:after{background:#000}.custom-switch.custom-switch-on-navy .custom-control-input:checked~.custom-control-label:before{background:#001f3f;border-color:#000}.custom-switch.custom-switch-on-navy .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,31,63,.25)}.custom-switch.custom-switch-on-navy .custom-control-input:checked~.custom-control-label:after{background:#006ad8}.custom-switch.custom-switch-off-olive .custom-control-input~.custom-control-label:before{background:#3d9970;border-color:#20503b}.custom-switch.custom-switch-off-olive .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(61,153,112,.25)}.custom-switch.custom-switch-off-olive .custom-control-input~.custom-control-label:after{background:#193e2d}.custom-switch.custom-switch-on-olive .custom-control-input:checked~.custom-control-label:before{background:#3d9970;border-color:#20503b}.custom-switch.custom-switch-on-olive .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(61,153,112,.25)}.custom-switch.custom-switch-on-olive .custom-control-input:checked~.custom-control-label:after{background:#99d6bb}.custom-switch.custom-switch-off-lime .custom-control-input~.custom-control-label:before{background:#01ff70;border-color:#009a43}.custom-switch.custom-switch-off-lime .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(1,255,112,.25)}.custom-switch.custom-switch-off-lime .custom-control-input~.custom-control-label:after{background:#008138}.custom-switch.custom-switch-on-lime .custom-control-input:checked~.custom-control-label:before{background:#01ff70;border-color:#009a43}.custom-switch.custom-switch-on-lime .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(1,255,112,.25)}.custom-switch.custom-switch-on-lime .custom-control-input:checked~.custom-control-label:after{background:#9affc6}.custom-switch.custom-switch-off-fuchsia .custom-control-input~.custom-control-label:before{background:#f012be;border-color:#930974}.custom-switch.custom-switch-off-fuchsia .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(240,18,190,.25)}.custom-switch.custom-switch-off-fuchsia .custom-control-input~.custom-control-label:after{background:#7b0861}.custom-switch.custom-switch-on-fuchsia .custom-control-input:checked~.custom-control-label:before{background:#f012be;border-color:#930974}.custom-switch.custom-switch-on-fuchsia .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(240,18,190,.25)}.custom-switch.custom-switch-on-fuchsia .custom-control-input:checked~.custom-control-label:after{background:#f9a2e5}.custom-switch.custom-switch-off-maroon .custom-control-input~.custom-control-label:before{background:#d81b60;border-color:#7d1038}.custom-switch.custom-switch-off-maroon .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(216,27,96,.25)}.custom-switch.custom-switch-off-maroon .custom-control-input~.custom-control-label:after{background:#670d2e}.custom-switch.custom-switch-on-maroon .custom-control-input:checked~.custom-control-label:before{background:#d81b60;border-color:#7d1038}.custom-switch.custom-switch-on-maroon .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(216,27,96,.25)}.custom-switch.custom-switch-on-maroon .custom-control-input:checked~.custom-control-label:after{background:#f29aba}.custom-switch.custom-switch-off-blue .custom-control-input~.custom-control-label:before{background:#007bff;border-color:#004a99}.custom-switch.custom-switch-off-blue .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,123,255,.25)}.custom-switch.custom-switch-off-blue .custom-control-input~.custom-control-label:after{background:#003e80}.custom-switch.custom-switch-on-blue .custom-control-input:checked~.custom-control-label:before{background:#007bff;border-color:#004a99}.custom-switch.custom-switch-on-blue .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,123,255,.25)}.custom-switch.custom-switch-on-blue .custom-control-input:checked~.custom-control-label:after{background:#99caff}.custom-switch.custom-switch-off-indigo .custom-control-input~.custom-control-label:before{background:#6610f2;border-color:#3d0894}.custom-switch.custom-switch-off-indigo .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(102,16,242,.25)}.custom-switch.custom-switch-off-indigo .custom-control-input~.custom-control-label:after{background:#33077c}.custom-switch.custom-switch-on-indigo .custom-control-input:checked~.custom-control-label:before{background:#6610f2;border-color:#3d0894}.custom-switch.custom-switch-on-indigo .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(102,16,242,.25)}.custom-switch.custom-switch-on-indigo .custom-control-input:checked~.custom-control-label:after{background:#c3a1fa}.custom-switch.custom-switch-off-purple .custom-control-input~.custom-control-label:before{background:#6f42c1;border-color:#432776}.custom-switch.custom-switch-off-purple .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(111,66,193,.25)}.custom-switch.custom-switch-off-purple .custom-control-input~.custom-control-label:after{background:#382063}.custom-switch.custom-switch-on-purple .custom-control-input:checked~.custom-control-label:before{background:#6f42c1;border-color:#432776}.custom-switch.custom-switch-on-purple .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(111,66,193,.25)}.custom-switch.custom-switch-on-purple .custom-control-input:checked~.custom-control-label:after{background:#c7b5e7}.custom-switch.custom-switch-off-pink .custom-control-input~.custom-control-label:before{background:#e83e8c;border-color:#ac145a}.custom-switch.custom-switch-off-pink .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(232,62,140,.25)}.custom-switch.custom-switch-off-pink .custom-control-input~.custom-control-label:after{background:#95124e}.custom-switch.custom-switch-on-pink .custom-control-input:checked~.custom-control-label:before{background:#e83e8c;border-color:#ac145a}.custom-switch.custom-switch-on-pink .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(232,62,140,.25)}.custom-switch.custom-switch-on-pink .custom-control-input:checked~.custom-control-label:after{background:#f8c7dd}.custom-switch.custom-switch-off-red .custom-control-input~.custom-control-label:before{background:#dc3545;border-color:#921925}.custom-switch.custom-switch-off-red .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(220,53,69,.25)}.custom-switch.custom-switch-off-red .custom-control-input~.custom-control-label:after{background:#7c151f}.custom-switch.custom-switch-on-red .custom-control-input:checked~.custom-control-label:before{background:#dc3545;border-color:#921925}.custom-switch.custom-switch-on-red .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(220,53,69,.25)}.custom-switch.custom-switch-on-red .custom-control-input:checked~.custom-control-label:after{background:#f3b7bd}.custom-switch.custom-switch-off-orange .custom-control-input~.custom-control-label:before{background:#fd7e14;border-color:#aa4e01}.custom-switch.custom-switch-off-orange .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(253,126,20,.25)}.custom-switch.custom-switch-off-orange .custom-control-input~.custom-control-label:after{background:#904201}.custom-switch.custom-switch-on-orange .custom-control-input:checked~.custom-control-label:before{background:#fd7e14;border-color:#aa4e01}.custom-switch.custom-switch-on-orange .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(253,126,20,.25)}.custom-switch.custom-switch-on-orange .custom-control-input:checked~.custom-control-label:after{background:#fed1ac}.custom-switch.custom-switch-off-yellow .custom-control-input~.custom-control-label:before{background:#ffc107;border-color:#a07800}.custom-switch.custom-switch-off-yellow .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(255,193,7,.25)}.custom-switch.custom-switch-off-yellow .custom-control-input~.custom-control-label:after{background:#876500}.custom-switch.custom-switch-on-yellow .custom-control-input:checked~.custom-control-label:before{background:#ffc107;border-color:#a07800}.custom-switch.custom-switch-on-yellow .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(255,193,7,.25)}.custom-switch.custom-switch-on-yellow .custom-control-input:checked~.custom-control-label:after{background:#ffe7a0}.custom-switch.custom-switch-off-green .custom-control-input~.custom-control-label:before{background:#28a745;border-color:#145523}.custom-switch.custom-switch-off-green .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(40,167,69,.25)}.custom-switch.custom-switch-off-green .custom-control-input~.custom-control-label:after{background:#0f401b}.custom-switch.custom-switch-on-green .custom-control-input:checked~.custom-control-label:before{background:#28a745;border-color:#145523}.custom-switch.custom-switch-on-green .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(40,167,69,.25)}.custom-switch.custom-switch-on-green .custom-control-input:checked~.custom-control-label:after{background:#86e29b}.custom-switch.custom-switch-off-teal .custom-control-input~.custom-control-label:before{background:#20c997;border-color:#127155}.custom-switch.custom-switch-off-teal .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(32,201,151,.25)}.custom-switch.custom-switch-off-teal .custom-control-input~.custom-control-label:after{background:#0e5b44}.custom-switch.custom-switch-on-teal .custom-control-input:checked~.custom-control-label:before{background:#20c997;border-color:#127155}.custom-switch.custom-switch-on-teal .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(32,201,151,.25)}.custom-switch.custom-switch-on-teal .custom-control-input:checked~.custom-control-label:after{background:#94eed3}.custom-switch.custom-switch-off-cyan .custom-control-input~.custom-control-label:before{background:#17a2b8;border-color:#0c525d}.custom-switch.custom-switch-off-cyan .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(23,162,184,.25)}.custom-switch.custom-switch-off-cyan .custom-control-input~.custom-control-label:after{background:#093e47}.custom-switch.custom-switch-on-cyan .custom-control-input:checked~.custom-control-label:before{background:#17a2b8;border-color:#0c525d}.custom-switch.custom-switch-on-cyan .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(23,162,184,.25)}.custom-switch.custom-switch-on-cyan .custom-control-input:checked~.custom-control-label:after{background:#7adeee}.custom-switch.custom-switch-off-white .custom-control-input~.custom-control-label:before{background:#fff;border-color:#ccc}.custom-switch.custom-switch-off-white .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(0,0%,100%,.25)}.custom-switch.custom-switch-off-white .custom-control-input~.custom-control-label:after{background:#bfbfbf}.custom-switch.custom-switch-on-white .custom-control-input:checked~.custom-control-label:before{background:#fff;border-color:#ccc}.custom-switch.custom-switch-on-white .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(0,0%,100%,.25)}.custom-switch.custom-switch-on-white .custom-control-input:checked~.custom-control-label:after{background:#fff}.custom-switch.custom-switch-off-gray .custom-control-input~.custom-control-label:before{background:#6c757d;border-color:#3d4246}.custom-switch.custom-switch-off-gray .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(208,7%,46%,.25)}.custom-switch.custom-switch-off-gray .custom-control-input~.custom-control-label:after{background:#313539}.custom-switch.custom-switch-on-gray .custom-control-input:checked~.custom-control-label:before{background:#6c757d;border-color:#3d4246}.custom-switch.custom-switch-on-gray .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(208,7%,46%,.25)}.custom-switch.custom-switch-on-gray .custom-control-input:checked~.custom-control-label:after{background:#bcc1c6}.custom-switch.custom-switch-off-gray-dark .custom-control-input~.custom-control-label:before{background:#343a40;border-color:#060708}.custom-switch.custom-switch-off-gray-dark .custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(52,58,64,.25)}.custom-switch.custom-switch-off-gray-dark .custom-control-input~.custom-control-label:after{background:#000}.custom-switch.custom-switch-on-gray-dark .custom-control-input:checked~.custom-control-label:before{background:#343a40;border-color:#060708}.custom-switch.custom-switch-on-gray-dark .custom-control-input:checked:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(52,58,64,.25)}.custom-switch.custom-switch-on-gray-dark .custom-control-input:checked~.custom-control-label:after{background:#7a8793}.custom-range.custom-range-primary:focus{outline:0}.custom-range.custom-range-primary:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,123,255,.25)}.custom-range.custom-range-primary:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,123,255,.25)}.custom-range.custom-range-primary:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,123,255,.25)}.custom-range.custom-range-primary::-webkit-slider-thumb{background-color:#007bff}.custom-range.custom-range-primary::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range.custom-range-primary::-moz-range-thumb{background-color:#007bff}.custom-range.custom-range-primary::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range.custom-range-primary::-ms-thumb{background-color:#007bff}.custom-range.custom-range-primary::-ms-thumb:active{background-color:#b3d7ff}.custom-range.custom-range-secondary:focus{outline:0}.custom-range.custom-range-secondary:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(208,7%,46%,.25)}.custom-range.custom-range-secondary:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(208,7%,46%,.25)}.custom-range.custom-range-secondary:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(208,7%,46%,.25)}.custom-range.custom-range-secondary::-webkit-slider-thumb{background-color:#6c757d}.custom-range.custom-range-secondary::-webkit-slider-thumb:active{background-color:#caced1}.custom-range.custom-range-secondary::-moz-range-thumb{background-color:#6c757d}.custom-range.custom-range-secondary::-moz-range-thumb:active{background-color:#caced1}.custom-range.custom-range-secondary::-ms-thumb{background-color:#6c757d}.custom-range.custom-range-secondary::-ms-thumb:active{background-color:#caced1}.custom-range.custom-range-success:focus{outline:0}.custom-range.custom-range-success:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(40,167,69,.25)}.custom-range.custom-range-success:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(40,167,69,.25)}.custom-range.custom-range-success:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(40,167,69,.25)}.custom-range.custom-range-success::-webkit-slider-thumb{background-color:#28a745}.custom-range.custom-range-success::-webkit-slider-thumb:active{background-color:#9be7ac}.custom-range.custom-range-success::-moz-range-thumb{background-color:#28a745}.custom-range.custom-range-success::-moz-range-thumb:active{background-color:#9be7ac}.custom-range.custom-range-success::-ms-thumb{background-color:#28a745}.custom-range.custom-range-success::-ms-thumb:active{background-color:#9be7ac}.custom-range.custom-range-info:focus{outline:0}.custom-range.custom-range-info:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(23,162,184,.25)}.custom-range.custom-range-info:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(23,162,184,.25)}.custom-range.custom-range-info:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(23,162,184,.25)}.custom-range.custom-range-info::-webkit-slider-thumb{background-color:#17a2b8}.custom-range.custom-range-info::-webkit-slider-thumb:active{background-color:#90e4f1}.custom-range.custom-range-info::-moz-range-thumb{background-color:#17a2b8}.custom-range.custom-range-info::-moz-range-thumb:active{background-color:#90e4f1}.custom-range.custom-range-info::-ms-thumb{background-color:#17a2b8}.custom-range.custom-range-info::-ms-thumb:active{background-color:#90e4f1}.custom-range.custom-range-warning:focus{outline:0}.custom-range.custom-range-warning:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(255,193,7,.25)}.custom-range.custom-range-warning:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(255,193,7,.25)}.custom-range.custom-range-warning:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(255,193,7,.25)}.custom-range.custom-range-warning::-webkit-slider-thumb{background-color:#ffc107}.custom-range.custom-range-warning::-webkit-slider-thumb:active{background-color:#ffeeba}.custom-range.custom-range-warning::-moz-range-thumb{background-color:#ffc107}.custom-range.custom-range-warning::-moz-range-thumb:active{background-color:#ffeeba}.custom-range.custom-range-warning::-ms-thumb{background-color:#ffc107}.custom-range.custom-range-warning::-ms-thumb:active{background-color:#ffeeba}.custom-range.custom-range-danger:focus{outline:0}.custom-range.custom-range-danger:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(220,53,69,.25)}.custom-range.custom-range-danger:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(220,53,69,.25)}.custom-range.custom-range-danger:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(220,53,69,.25)}.custom-range.custom-range-danger::-webkit-slider-thumb{background-color:#dc3545}.custom-range.custom-range-danger::-webkit-slider-thumb:active{background-color:#f6cdd1}.custom-range.custom-range-danger::-moz-range-thumb{background-color:#dc3545}.custom-range.custom-range-danger::-moz-range-thumb:active{background-color:#f6cdd1}.custom-range.custom-range-danger::-ms-thumb{background-color:#dc3545}.custom-range.custom-range-danger::-ms-thumb:active{background-color:#f6cdd1}.custom-range.custom-range-light:focus{outline:0}.custom-range.custom-range-light:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(248,249,250,.25)}.custom-range.custom-range-light:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(248,249,250,.25)}.custom-range.custom-range-light:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(248,249,250,.25)}.custom-range.custom-range-light::-webkit-slider-thumb{background-color:#f8f9fa}.custom-range.custom-range-light::-webkit-slider-thumb:active{background-color:#fff}.custom-range.custom-range-light::-moz-range-thumb{background-color:#f8f9fa}.custom-range.custom-range-light::-moz-range-thumb:active{background-color:#fff}.custom-range.custom-range-light::-ms-thumb{background-color:#f8f9fa}.custom-range.custom-range-light::-ms-thumb:active{background-color:#fff}.custom-range.custom-range-dark:focus{outline:0}.custom-range.custom-range-dark:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(52,58,64,.25)}.custom-range.custom-range-dark:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(52,58,64,.25)}.custom-range.custom-range-dark:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(52,58,64,.25)}.custom-range.custom-range-dark::-webkit-slider-thumb{background-color:#343a40}.custom-range.custom-range-dark::-webkit-slider-thumb:active{background-color:#88939e}.custom-range.custom-range-dark::-moz-range-thumb{background-color:#343a40}.custom-range.custom-range-dark::-moz-range-thumb:active{background-color:#88939e}.custom-range.custom-range-dark::-ms-thumb{background-color:#343a40}.custom-range.custom-range-dark::-ms-thumb:active{background-color:#88939e}.custom-range.custom-range-lightblue:focus{outline:0}.custom-range.custom-range-lightblue:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(60,141,188,.25)}.custom-range.custom-range-lightblue:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(60,141,188,.25)}.custom-range.custom-range-lightblue:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(60,141,188,.25)}.custom-range.custom-range-lightblue::-webkit-slider-thumb{background-color:#3c8dbc}.custom-range.custom-range-lightblue::-webkit-slider-thumb:active{background-color:#c0dbeb}.custom-range.custom-range-lightblue::-moz-range-thumb{background-color:#3c8dbc}.custom-range.custom-range-lightblue::-moz-range-thumb:active{background-color:#c0dbeb}.custom-range.custom-range-lightblue::-ms-thumb{background-color:#3c8dbc}.custom-range.custom-range-lightblue::-ms-thumb:active{background-color:#c0dbeb}.custom-range.custom-range-navy:focus{outline:0}.custom-range.custom-range-navy:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,31,63,.25)}.custom-range.custom-range-navy:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,31,63,.25)}.custom-range.custom-range-navy:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,31,63,.25)}.custom-range.custom-range-navy::-webkit-slider-thumb{background-color:#001f3f}.custom-range.custom-range-navy::-webkit-slider-thumb:active{background-color:#0077f2}.custom-range.custom-range-navy::-moz-range-thumb{background-color:#001f3f}.custom-range.custom-range-navy::-moz-range-thumb:active{background-color:#0077f2}.custom-range.custom-range-navy::-ms-thumb{background-color:#001f3f}.custom-range.custom-range-navy::-ms-thumb:active{background-color:#0077f2}.custom-range.custom-range-olive:focus{outline:0}.custom-range.custom-range-olive:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(61,153,112,.25)}.custom-range.custom-range-olive:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(61,153,112,.25)}.custom-range.custom-range-olive:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(61,153,112,.25)}.custom-range.custom-range-olive::-webkit-slider-thumb{background-color:#3d9970}.custom-range.custom-range-olive::-webkit-slider-thumb:active{background-color:#abdec7}.custom-range.custom-range-olive::-moz-range-thumb{background-color:#3d9970}.custom-range.custom-range-olive::-moz-range-thumb:active{background-color:#abdec7}.custom-range.custom-range-olive::-ms-thumb{background-color:#3d9970}.custom-range.custom-range-olive::-ms-thumb:active{background-color:#abdec7}.custom-range.custom-range-lime:focus{outline:0}.custom-range.custom-range-lime:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(1,255,112,.25)}.custom-range.custom-range-lime:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(1,255,112,.25)}.custom-range.custom-range-lime:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(1,255,112,.25)}.custom-range.custom-range-lime::-webkit-slider-thumb{background-color:#01ff70}.custom-range.custom-range-lime::-webkit-slider-thumb:active{background-color:#b4ffd4}.custom-range.custom-range-lime::-moz-range-thumb{background-color:#01ff70}.custom-range.custom-range-lime::-moz-range-thumb:active{background-color:#b4ffd4}.custom-range.custom-range-lime::-ms-thumb{background-color:#01ff70}.custom-range.custom-range-lime::-ms-thumb:active{background-color:#b4ffd4}.custom-range.custom-range-fuchsia:focus{outline:0}.custom-range.custom-range-fuchsia:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(240,18,190,.25)}.custom-range.custom-range-fuchsia:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(240,18,190,.25)}.custom-range.custom-range-fuchsia:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(240,18,190,.25)}.custom-range.custom-range-fuchsia::-webkit-slider-thumb{background-color:#f012be}.custom-range.custom-range-fuchsia::-webkit-slider-thumb:active{background-color:#fbbaec}.custom-range.custom-range-fuchsia::-moz-range-thumb{background-color:#f012be}.custom-range.custom-range-fuchsia::-moz-range-thumb:active{background-color:#fbbaec}.custom-range.custom-range-fuchsia::-ms-thumb{background-color:#f012be}.custom-range.custom-range-fuchsia::-ms-thumb:active{background-color:#fbbaec}.custom-range.custom-range-maroon:focus{outline:0}.custom-range.custom-range-maroon:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(216,27,96,.25)}.custom-range.custom-range-maroon:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(216,27,96,.25)}.custom-range.custom-range-maroon:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(216,27,96,.25)}.custom-range.custom-range-maroon::-webkit-slider-thumb{background-color:#d81b60}.custom-range.custom-range-maroon::-webkit-slider-thumb:active{background-color:#f5b0c9}.custom-range.custom-range-maroon::-moz-range-thumb{background-color:#d81b60}.custom-range.custom-range-maroon::-moz-range-thumb:active{background-color:#f5b0c9}.custom-range.custom-range-maroon::-ms-thumb{background-color:#d81b60}.custom-range.custom-range-maroon::-ms-thumb:active{background-color:#f5b0c9}.custom-range.custom-range-blue:focus{outline:0}.custom-range.custom-range-blue:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,123,255,.25)}.custom-range.custom-range-blue:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,123,255,.25)}.custom-range.custom-range-blue:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(0,123,255,.25)}.custom-range.custom-range-blue::-webkit-slider-thumb{background-color:#007bff}.custom-range.custom-range-blue::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range.custom-range-blue::-moz-range-thumb{background-color:#007bff}.custom-range.custom-range-blue::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range.custom-range-blue::-ms-thumb{background-color:#007bff}.custom-range.custom-range-blue::-ms-thumb:active{background-color:#b3d7ff}.custom-range.custom-range-indigo:focus{outline:0}.custom-range.custom-range-indigo:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(102,16,242,.25)}.custom-range.custom-range-indigo:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(102,16,242,.25)}.custom-range.custom-range-indigo:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(102,16,242,.25)}.custom-range.custom-range-indigo::-webkit-slider-thumb{background-color:#6610f2}.custom-range.custom-range-indigo::-webkit-slider-thumb:active{background-color:#d2b9fb}.custom-range.custom-range-indigo::-moz-range-thumb{background-color:#6610f2}.custom-range.custom-range-indigo::-moz-range-thumb:active{background-color:#d2b9fb}.custom-range.custom-range-indigo::-ms-thumb{background-color:#6610f2}.custom-range.custom-range-indigo::-ms-thumb:active{background-color:#d2b9fb}.custom-range.custom-range-purple:focus{outline:0}.custom-range.custom-range-purple:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(111,66,193,.25)}.custom-range.custom-range-purple:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(111,66,193,.25)}.custom-range.custom-range-purple:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(111,66,193,.25)}.custom-range.custom-range-purple::-webkit-slider-thumb{background-color:#6f42c1}.custom-range.custom-range-purple::-webkit-slider-thumb:active{background-color:#d5c8ed}.custom-range.custom-range-purple::-moz-range-thumb{background-color:#6f42c1}.custom-range.custom-range-purple::-moz-range-thumb:active{background-color:#d5c8ed}.custom-range.custom-range-purple::-ms-thumb{background-color:#6f42c1}.custom-range.custom-range-purple::-ms-thumb:active{background-color:#d5c8ed}.custom-range.custom-range-pink:focus{outline:0}.custom-range.custom-range-pink:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(232,62,140,.25)}.custom-range.custom-range-pink:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(232,62,140,.25)}.custom-range.custom-range-pink:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(232,62,140,.25)}.custom-range.custom-range-pink::-webkit-slider-thumb{background-color:#e83e8c}.custom-range.custom-range-pink::-webkit-slider-thumb:active{background-color:#fbddeb}.custom-range.custom-range-pink::-moz-range-thumb{background-color:#e83e8c}.custom-range.custom-range-pink::-moz-range-thumb:active{background-color:#fbddeb}.custom-range.custom-range-pink::-ms-thumb{background-color:#e83e8c}.custom-range.custom-range-pink::-ms-thumb:active{background-color:#fbddeb}.custom-range.custom-range-red:focus{outline:0}.custom-range.custom-range-red:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(220,53,69,.25)}.custom-range.custom-range-red:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(220,53,69,.25)}.custom-range.custom-range-red:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(220,53,69,.25)}.custom-range.custom-range-red::-webkit-slider-thumb{background-color:#dc3545}.custom-range.custom-range-red::-webkit-slider-thumb:active{background-color:#f6cdd1}.custom-range.custom-range-red::-moz-range-thumb{background-color:#dc3545}.custom-range.custom-range-red::-moz-range-thumb:active{background-color:#f6cdd1}.custom-range.custom-range-red::-ms-thumb{background-color:#dc3545}.custom-range.custom-range-red::-ms-thumb:active{background-color:#f6cdd1}.custom-range.custom-range-orange:focus{outline:0}.custom-range.custom-range-orange:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(253,126,20,.25)}.custom-range.custom-range-orange:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(253,126,20,.25)}.custom-range.custom-range-orange:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(253,126,20,.25)}.custom-range.custom-range-orange::-webkit-slider-thumb{background-color:#fd7e14}.custom-range.custom-range-orange::-webkit-slider-thumb:active{background-color:#ffdfc5}.custom-range.custom-range-orange::-moz-range-thumb{background-color:#fd7e14}.custom-range.custom-range-orange::-moz-range-thumb:active{background-color:#ffdfc5}.custom-range.custom-range-orange::-ms-thumb{background-color:#fd7e14}.custom-range.custom-range-orange::-ms-thumb:active{background-color:#ffdfc5}.custom-range.custom-range-yellow:focus{outline:0}.custom-range.custom-range-yellow:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(255,193,7,.25)}.custom-range.custom-range-yellow:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(255,193,7,.25)}.custom-range.custom-range-yellow:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(255,193,7,.25)}.custom-range.custom-range-yellow::-webkit-slider-thumb{background-color:#ffc107}.custom-range.custom-range-yellow::-webkit-slider-thumb:active{background-color:#ffeeba}.custom-range.custom-range-yellow::-moz-range-thumb{background-color:#ffc107}.custom-range.custom-range-yellow::-moz-range-thumb:active{background-color:#ffeeba}.custom-range.custom-range-yellow::-ms-thumb{background-color:#ffc107}.custom-range.custom-range-yellow::-ms-thumb:active{background-color:#ffeeba}.custom-range.custom-range-green:focus{outline:0}.custom-range.custom-range-green:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(40,167,69,.25)}.custom-range.custom-range-green:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(40,167,69,.25)}.custom-range.custom-range-green:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(40,167,69,.25)}.custom-range.custom-range-green::-webkit-slider-thumb{background-color:#28a745}.custom-range.custom-range-green::-webkit-slider-thumb:active{background-color:#9be7ac}.custom-range.custom-range-green::-moz-range-thumb{background-color:#28a745}.custom-range.custom-range-green::-moz-range-thumb:active{background-color:#9be7ac}.custom-range.custom-range-green::-ms-thumb{background-color:#28a745}.custom-range.custom-range-green::-ms-thumb:active{background-color:#9be7ac}.custom-range.custom-range-teal:focus{outline:0}.custom-range.custom-range-teal:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(32,201,151,.25)}.custom-range.custom-range-teal:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(32,201,151,.25)}.custom-range.custom-range-teal:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(32,201,151,.25)}.custom-range.custom-range-teal::-webkit-slider-thumb{background-color:#20c997}.custom-range.custom-range-teal::-webkit-slider-thumb:active{background-color:#aaf1dc}.custom-range.custom-range-teal::-moz-range-thumb{background-color:#20c997}.custom-range.custom-range-teal::-moz-range-thumb:active{background-color:#aaf1dc}.custom-range.custom-range-teal::-ms-thumb{background-color:#20c997}.custom-range.custom-range-teal::-ms-thumb:active{background-color:#aaf1dc}.custom-range.custom-range-cyan:focus{outline:0}.custom-range.custom-range-cyan:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(23,162,184,.25)}.custom-range.custom-range-cyan:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(23,162,184,.25)}.custom-range.custom-range-cyan:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(23,162,184,.25)}.custom-range.custom-range-cyan::-webkit-slider-thumb{background-color:#17a2b8}.custom-range.custom-range-cyan::-webkit-slider-thumb:active{background-color:#90e4f1}.custom-range.custom-range-cyan::-moz-range-thumb{background-color:#17a2b8}.custom-range.custom-range-cyan::-moz-range-thumb:active{background-color:#90e4f1}.custom-range.custom-range-cyan::-ms-thumb{background-color:#17a2b8}.custom-range.custom-range-cyan::-ms-thumb:active{background-color:#90e4f1}.custom-range.custom-range-white:focus{outline:0}.custom-range.custom-range-white:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(0,0%,100%,.25)}.custom-range.custom-range-white:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(0,0%,100%,.25)}.custom-range.custom-range-white:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(0,0%,100%,.25)}.custom-range.custom-range-white::-webkit-slider-thumb,.custom-range.custom-range-white::-webkit-slider-thumb:active{background-color:#fff}.custom-range.custom-range-white::-moz-range-thumb,.custom-range.custom-range-white::-moz-range-thumb:active{background-color:#fff}.custom-range.custom-range-white::-ms-thumb,.custom-range.custom-range-white::-ms-thumb:active{background-color:#fff}.custom-range.custom-range-gray:focus{outline:0}.custom-range.custom-range-gray:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(208,7%,46%,.25)}.custom-range.custom-range-gray:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(208,7%,46%,.25)}.custom-range.custom-range-gray:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px hsla(208,7%,46%,.25)}.custom-range.custom-range-gray::-webkit-slider-thumb{background-color:#6c757d}.custom-range.custom-range-gray::-webkit-slider-thumb:active{background-color:#caced1}.custom-range.custom-range-gray::-moz-range-thumb{background-color:#6c757d}.custom-range.custom-range-gray::-moz-range-thumb:active{background-color:#caced1}.custom-range.custom-range-gray::-ms-thumb{background-color:#6c757d}.custom-range.custom-range-gray::-ms-thumb:active{background-color:#caced1}.custom-range.custom-range-gray-dark:focus{outline:0}.custom-range.custom-range-gray-dark:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(52,58,64,.25)}.custom-range.custom-range-gray-dark:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(52,58,64,.25)}.custom-range.custom-range-gray-dark:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 2px rgba(52,58,64,.25)}.custom-range.custom-range-gray-dark::-webkit-slider-thumb{background-color:#343a40}.custom-range.custom-range-gray-dark::-webkit-slider-thumb:active{background-color:#88939e}.custom-range.custom-range-gray-dark::-moz-range-thumb{background-color:#343a40}.custom-range.custom-range-gray-dark::-moz-range-thumb:active{background-color:#88939e}.custom-range.custom-range-gray-dark::-ms-thumb{background-color:#343a40}.custom-range.custom-range-gray-dark::-ms-thumb:active{background-color:#88939e}.progress{box-shadow:none;border-radius:1px}.progress.vertical{display:inline-block;height:200px;margin-right:10px;position:relative;width:30px}.progress.vertical>.progress-bar{bottom:0;position:absolute;width:100%}.progress.vertical.progress-sm,.progress.vertical.sm{width:20px}.progress.vertical.progress-xs,.progress.vertical.xs{width:10px}.progress.vertical.progress-xxs,.progress.vertical.xxs{width:3px}.progress-group{margin-bottom:.5rem}.progress-sm{height:10px}.progress-xs{height:7px}.progress-xxs{height:3px}.table tr>td .progress{margin:0}.card-primary:not(.card-outline)>.card-header{background-color:#007bff}.card-primary:not(.card-outline)>.card-header,.card-primary:not(.card-outline)>.card-header a{color:#fff}.card-primary:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-primary.card-outline{border-top:3px solid #007bff}.card-primary.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-primary.card-outline-tabs>.card-header a.active{border-top:3px solid #007bff}.bg-gradient-primary .btn-tool,.bg-primary .btn-tool,.card-primary:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-primary .btn-tool:hover,.bg-primary .btn-tool:hover,.card-primary:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-primary .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-primary .bootstrap-datetimepicker-widget .table th,.card.bg-primary .bootstrap-datetimepicker-widget .table td,.card.bg-primary .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-primary .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-primary .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-primary .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-primary .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-primary .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-primary .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-primary .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-primary .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-primary .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-primary .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#0067d6;color:#fff}.card.bg-gradient-primary .bootstrap-datetimepicker-widget table td.today:before,.card.bg-primary .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-primary .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-primary .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-primary .bootstrap-datetimepicker-widget table td.active,.card.bg-primary .bootstrap-datetimepicker-widget table td.active:hover{background:#3395ff;color:#fff}.card-secondary:not(.card-outline)>.card-header{background-color:#6c757d}.card-secondary:not(.card-outline)>.card-header,.card-secondary:not(.card-outline)>.card-header a{color:#fff}.card-secondary:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-secondary.card-outline{border-top:3px solid #6c757d}.card-secondary.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-secondary.card-outline-tabs>.card-header a.active{border-top:3px solid #6c757d}.bg-gradient-secondary .btn-tool,.bg-secondary .btn-tool,.card-secondary:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-secondary .btn-tool:hover,.bg-secondary .btn-tool:hover,.card-secondary:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-secondary .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-secondary .bootstrap-datetimepicker-widget .table th,.card.bg-secondary .bootstrap-datetimepicker-widget .table td,.card.bg-secondary .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-secondary .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-secondary .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-secondary .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-secondary .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-secondary .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-secondary .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-secondary .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-secondary .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-secondary .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-secondary .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#596167;color:#fff}.card.bg-gradient-secondary .bootstrap-datetimepicker-widget table td.today:before,.card.bg-secondary .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-secondary .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-secondary .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-secondary .bootstrap-datetimepicker-widget table td.active,.card.bg-secondary .bootstrap-datetimepicker-widget table td.active:hover{background:#868e96;color:#fff}.card-success:not(.card-outline)>.card-header{background-color:#28a745}.card-success:not(.card-outline)>.card-header,.card-success:not(.card-outline)>.card-header a{color:#fff}.card-success:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-success.card-outline{border-top:3px solid #28a745}.card-success.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-success.card-outline-tabs>.card-header a.active{border-top:3px solid #28a745}.bg-gradient-success .btn-tool,.bg-success .btn-tool,.card-success:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-success .btn-tool:hover,.bg-success .btn-tool:hover,.card-success:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-success .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-success .bootstrap-datetimepicker-widget .table th,.card.bg-success .bootstrap-datetimepicker-widget .table td,.card.bg-success .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-success .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-success .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-success .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-success .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-success .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-success .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-success .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-success .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-success .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-success .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#208637;color:#fff}.card.bg-gradient-success .bootstrap-datetimepicker-widget table td.today:before,.card.bg-success .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-success .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-success .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-success .bootstrap-datetimepicker-widget table td.active,.card.bg-success .bootstrap-datetimepicker-widget table td.active:hover{background:#34ce57;color:#fff}.card-info:not(.card-outline)>.card-header{background-color:#17a2b8}.card-info:not(.card-outline)>.card-header,.card-info:not(.card-outline)>.card-header a{color:#fff}.card-info:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-info.card-outline{border-top:3px solid #17a2b8}.card-info.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-info.card-outline-tabs>.card-header a.active{border-top:3px solid #17a2b8}.bg-gradient-info .btn-tool,.bg-info .btn-tool,.card-info:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-info .btn-tool:hover,.bg-info .btn-tool:hover,.card-info:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-info .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-info .bootstrap-datetimepicker-widget .table th,.card.bg-info .bootstrap-datetimepicker-widget .table td,.card.bg-info .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-info .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-info .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-info .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-info .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-info .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-info .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-info .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-info .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-info .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-info .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#128294;color:#fff}.card.bg-gradient-info .bootstrap-datetimepicker-widget table td.today:before,.card.bg-info .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-info .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-info .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-info .bootstrap-datetimepicker-widget table td.active,.card.bg-info .bootstrap-datetimepicker-widget table td.active:hover{background:#1fc8e3;color:#fff}.card-warning:not(.card-outline)>.card-header{background-color:#ffc107}.card-warning:not(.card-outline)>.card-header,.card-warning:not(.card-outline)>.card-header a,.card-warning:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-warning.card-outline{border-top:3px solid #ffc107}.card-warning.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-warning.card-outline-tabs>.card-header a.active{border-top:3px solid #ffc107}.bg-gradient-warning .btn-tool,.bg-warning .btn-tool,.card-warning:not(.card-outline) .btn-tool{color:rgba(31,45,61,.8)}.bg-gradient-warning .btn-tool:hover,.bg-warning .btn-tool:hover,.card-warning:not(.card-outline) .btn-tool:hover{color:#1f2d3d}.card.bg-gradient-warning .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-warning .bootstrap-datetimepicker-widget .table th,.card.bg-warning .bootstrap-datetimepicker-widget .table td,.card.bg-warning .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-warning .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-warning .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-warning .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-warning .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-warning .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-warning .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-warning .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-warning .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-warning .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-warning .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#dda600;color:#1f2d3d}.card.bg-gradient-warning .bootstrap-datetimepicker-widget table td.today:before,.card.bg-warning .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#1f2d3d}.card.bg-gradient-warning .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-warning .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-warning .bootstrap-datetimepicker-widget table td.active,.card.bg-warning .bootstrap-datetimepicker-widget table td.active:hover{background:#ffce3a;color:#1f2d3d}.card-danger:not(.card-outline)>.card-header{background-color:#dc3545}.card-danger:not(.card-outline)>.card-header,.card-danger:not(.card-outline)>.card-header a{color:#fff}.card-danger:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-danger.card-outline{border-top:3px solid #dc3545}.card-danger.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-danger.card-outline-tabs>.card-header a.active{border-top:3px solid #dc3545}.bg-danger .btn-tool,.bg-gradient-danger .btn-tool,.card-danger:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-danger .btn-tool:hover,.bg-gradient-danger .btn-tool:hover,.card-danger:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-danger .bootstrap-datetimepicker-widget .table td,.card.bg-danger .bootstrap-datetimepicker-widget .table th,.card.bg-gradient-danger .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-danger .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-danger .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-danger .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-danger .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-danger .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-danger .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-gradient-danger .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-danger .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-danger .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-danger .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-danger .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#c62232;color:#fff}.card.bg-danger .bootstrap-datetimepicker-widget table td.today:before,.card.bg-gradient-danger .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-danger .bootstrap-datetimepicker-widget table td.active,.card.bg-danger .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-gradient-danger .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-danger .bootstrap-datetimepicker-widget table td.active:hover{background:#e4606d;color:#fff}.card-light:not(.card-outline)>.card-header{background-color:#f8f9fa}.card-light:not(.card-outline)>.card-header,.card-light:not(.card-outline)>.card-header a,.card-light:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-light.card-outline{border-top:3px solid #f8f9fa}.card-light.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-light.card-outline-tabs>.card-header a.active{border-top:3px solid #f8f9fa}.bg-gradient-light .btn-tool,.bg-light .btn-tool,.card-light:not(.card-outline) .btn-tool{color:rgba(31,45,61,.8)}.bg-gradient-light .btn-tool:hover,.bg-light .btn-tool:hover,.card-light:not(.card-outline) .btn-tool:hover{color:#1f2d3d}.card.bg-gradient-light .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-light .bootstrap-datetimepicker-widget .table th,.card.bg-light .bootstrap-datetimepicker-widget .table td,.card.bg-light .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-light .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-light .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-light .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-light .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-light .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-light .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-light .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-light .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-light .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-light .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#e0e5e9;color:#1f2d3d}.card.bg-gradient-light .bootstrap-datetimepicker-widget table td.today:before,.card.bg-light .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#1f2d3d}.card.bg-gradient-light .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-light .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-light .bootstrap-datetimepicker-widget table td.active,.card.bg-light .bootstrap-datetimepicker-widget table td.active:hover{background:#fff;color:#1f2d3d}.card-dark:not(.card-outline)>.card-header{background-color:#343a40}.card-dark:not(.card-outline)>.card-header,.card-dark:not(.card-outline)>.card-header a{color:#fff}.card-dark:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-dark.card-outline{border-top:3px solid #343a40}.card-dark.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-dark.card-outline-tabs>.card-header a.active{border-top:3px solid #343a40}.bg-dark .btn-tool,.bg-gradient-dark .btn-tool,.card-dark:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-dark .btn-tool:hover,.bg-gradient-dark .btn-tool:hover,.card-dark:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-dark .bootstrap-datetimepicker-widget .table td,.card.bg-dark .bootstrap-datetimepicker-widget .table th,.card.bg-gradient-dark .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-dark .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-dark .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-dark .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-dark .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-dark .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-dark .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-gradient-dark .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-dark .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-dark .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-dark .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-dark .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#222629;color:#fff}.card.bg-dark .bootstrap-datetimepicker-widget table td.today:before,.card.bg-gradient-dark .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-dark .bootstrap-datetimepicker-widget table td.active,.card.bg-dark .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-gradient-dark .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-dark .bootstrap-datetimepicker-widget table td.active:hover{background:#4b545c;color:#fff}.card-lightblue:not(.card-outline)>.card-header{background-color:#3c8dbc}.card-lightblue:not(.card-outline)>.card-header,.card-lightblue:not(.card-outline)>.card-header a{color:#fff}.card-lightblue:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-lightblue.card-outline{border-top:3px solid #3c8dbc}.card-lightblue.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-lightblue.card-outline-tabs>.card-header a.active{border-top:3px solid #3c8dbc}.bg-gradient-lightblue .btn-tool,.bg-lightblue .btn-tool,.card-lightblue:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-lightblue .btn-tool:hover,.bg-lightblue .btn-tool:hover,.card-lightblue:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-lightblue .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-lightblue .bootstrap-datetimepicker-widget .table th,.card.bg-lightblue .bootstrap-datetimepicker-widget .table td,.card.bg-lightblue .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-lightblue .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-lightblue .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-lightblue .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-lightblue .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-lightblue .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-lightblue .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-lightblue .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-lightblue .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-lightblue .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-lightblue .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#32769d;color:#fff}.card.bg-gradient-lightblue .bootstrap-datetimepicker-widget table td.today:before,.card.bg-lightblue .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-lightblue .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-lightblue .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-lightblue .bootstrap-datetimepicker-widget table td.active,.card.bg-lightblue .bootstrap-datetimepicker-widget table td.active:hover{background:#5fa4cc;color:#fff}.card-navy:not(.card-outline)>.card-header{background-color:#001f3f}.card-navy:not(.card-outline)>.card-header,.card-navy:not(.card-outline)>.card-header a{color:#fff}.card-navy:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-navy.card-outline{border-top:3px solid #001f3f}.card-navy.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-navy.card-outline-tabs>.card-header a.active{border-top:3px solid #001f3f}.bg-gradient-navy .btn-tool,.bg-navy .btn-tool,.card-navy:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-navy .btn-tool:hover,.bg-navy .btn-tool:hover,.card-navy:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-navy .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-navy .bootstrap-datetimepicker-widget .table th,.card.bg-navy .bootstrap-datetimepicker-widget .table td,.card.bg-navy .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-navy .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-navy .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-navy .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-navy .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-navy .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-navy .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-navy .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-navy .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-navy .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-navy .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#000b16;color:#fff}.card.bg-gradient-navy .bootstrap-datetimepicker-widget table td.today:before,.card.bg-navy .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-navy .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-navy .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-navy .bootstrap-datetimepicker-widget table td.active,.card.bg-navy .bootstrap-datetimepicker-widget table td.active:hover{background:#003872;color:#fff}.card-olive:not(.card-outline)>.card-header{background-color:#3d9970}.card-olive:not(.card-outline)>.card-header,.card-olive:not(.card-outline)>.card-header a{color:#fff}.card-olive:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-olive.card-outline{border-top:3px solid #3d9970}.card-olive.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-olive.card-outline-tabs>.card-header a.active{border-top:3px solid #3d9970}.bg-gradient-olive .btn-tool,.bg-olive .btn-tool,.card-olive:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-olive .btn-tool:hover,.bg-olive .btn-tool:hover,.card-olive:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-olive .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-olive .bootstrap-datetimepicker-widget .table th,.card.bg-olive .bootstrap-datetimepicker-widget .table td,.card.bg-olive .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-olive .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-olive .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-olive .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-olive .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-olive .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-olive .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-olive .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-olive .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-olive .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-olive .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#317c5b;color:#fff}.card.bg-gradient-olive .bootstrap-datetimepicker-widget table td.today:before,.card.bg-olive .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-olive .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-olive .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-olive .bootstrap-datetimepicker-widget table td.active,.card.bg-olive .bootstrap-datetimepicker-widget table td.active:hover{background:#50b98a;color:#fff}.card-lime:not(.card-outline)>.card-header{background-color:#01ff70}.card-lime:not(.card-outline)>.card-header,.card-lime:not(.card-outline)>.card-header a,.card-lime:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-lime.card-outline{border-top:3px solid #01ff70}.card-lime.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-lime.card-outline-tabs>.card-header a.active{border-top:3px solid #01ff70}.bg-gradient-lime .btn-tool,.bg-lime .btn-tool,.card-lime:not(.card-outline) .btn-tool{color:rgba(31,45,61,.8)}.bg-gradient-lime .btn-tool:hover,.bg-lime .btn-tool:hover,.card-lime:not(.card-outline) .btn-tool:hover{color:#1f2d3d}.card.bg-gradient-lime .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-lime .bootstrap-datetimepicker-widget .table th,.card.bg-lime .bootstrap-datetimepicker-widget .table td,.card.bg-lime .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-lime .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-lime .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-lime .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-lime .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-lime .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-lime .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-lime .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-lime .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-lime .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-lime .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#00d75e;color:#1f2d3d}.card.bg-gradient-lime .bootstrap-datetimepicker-widget table td.today:before,.card.bg-lime .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#1f2d3d}.card.bg-gradient-lime .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-lime .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-lime .bootstrap-datetimepicker-widget table td.active,.card.bg-lime .bootstrap-datetimepicker-widget table td.active:hover{background:#34ff8d;color:#1f2d3d}.card-fuchsia:not(.card-outline)>.card-header{background-color:#f012be}.card-fuchsia:not(.card-outline)>.card-header,.card-fuchsia:not(.card-outline)>.card-header a{color:#fff}.card-fuchsia:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-fuchsia.card-outline{border-top:3px solid #f012be}.card-fuchsia.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-fuchsia.card-outline-tabs>.card-header a.active{border-top:3px solid #f012be}.bg-fuchsia .btn-tool,.bg-gradient-fuchsia .btn-tool,.card-fuchsia:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-fuchsia .btn-tool:hover,.bg-gradient-fuchsia .btn-tool:hover,.card-fuchsia:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-fuchsia .bootstrap-datetimepicker-widget .table td,.card.bg-fuchsia .bootstrap-datetimepicker-widget .table th,.card.bg-gradient-fuchsia .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-fuchsia .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-fuchsia .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-fuchsia .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-fuchsia .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-fuchsia .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-fuchsia .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-gradient-fuchsia .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-fuchsia .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-fuchsia .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-fuchsia .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-fuchsia .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#cc0da1;color:#fff}.card.bg-fuchsia .bootstrap-datetimepicker-widget table td.today:before,.card.bg-gradient-fuchsia .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-fuchsia .bootstrap-datetimepicker-widget table td.active,.card.bg-fuchsia .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-gradient-fuchsia .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-fuchsia .bootstrap-datetimepicker-widget table td.active:hover{background:#f342cb;color:#fff}.card-maroon:not(.card-outline)>.card-header{background-color:#d81b60}.card-maroon:not(.card-outline)>.card-header,.card-maroon:not(.card-outline)>.card-header a{color:#fff}.card-maroon:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-maroon.card-outline{border-top:3px solid #d81b60}.card-maroon.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-maroon.card-outline-tabs>.card-header a.active{border-top:3px solid #d81b60}.bg-gradient-maroon .btn-tool,.bg-maroon .btn-tool,.card-maroon:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-maroon .btn-tool:hover,.bg-maroon .btn-tool:hover,.card-maroon:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-maroon .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-maroon .bootstrap-datetimepicker-widget .table th,.card.bg-maroon .bootstrap-datetimepicker-widget .table td,.card.bg-maroon .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-maroon .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-maroon .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-maroon .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-maroon .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-maroon .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-maroon .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-maroon .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-maroon .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-maroon .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-maroon .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#b41650;color:#fff}.card.bg-gradient-maroon .bootstrap-datetimepicker-widget table td.today:before,.card.bg-maroon .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-maroon .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-maroon .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-maroon .bootstrap-datetimepicker-widget table td.active,.card.bg-maroon .bootstrap-datetimepicker-widget table td.active:hover{background:#e73f7c;color:#fff}.card-blue:not(.card-outline)>.card-header{background-color:#007bff}.card-blue:not(.card-outline)>.card-header,.card-blue:not(.card-outline)>.card-header a{color:#fff}.card-blue:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-blue.card-outline{border-top:3px solid #007bff}.card-blue.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-blue.card-outline-tabs>.card-header a.active{border-top:3px solid #007bff}.bg-blue .btn-tool,.bg-gradient-blue .btn-tool,.card-blue:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-blue .btn-tool:hover,.bg-gradient-blue .btn-tool:hover,.card-blue:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-blue .bootstrap-datetimepicker-widget .table td,.card.bg-blue .bootstrap-datetimepicker-widget .table th,.card.bg-gradient-blue .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-blue .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-blue .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-blue .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-blue .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-blue .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-blue .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-gradient-blue .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-blue .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-blue .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-blue .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-blue .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#0067d6;color:#fff}.card.bg-blue .bootstrap-datetimepicker-widget table td.today:before,.card.bg-gradient-blue .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-blue .bootstrap-datetimepicker-widget table td.active,.card.bg-blue .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-gradient-blue .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-blue .bootstrap-datetimepicker-widget table td.active:hover{background:#3395ff;color:#fff}.card-indigo:not(.card-outline)>.card-header{background-color:#6610f2}.card-indigo:not(.card-outline)>.card-header,.card-indigo:not(.card-outline)>.card-header a{color:#fff}.card-indigo:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-indigo.card-outline{border-top:3px solid #6610f2}.card-indigo.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-indigo.card-outline-tabs>.card-header a.active{border-top:3px solid #6610f2}.bg-gradient-indigo .btn-tool,.bg-indigo .btn-tool,.card-indigo:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-indigo .btn-tool:hover,.bg-indigo .btn-tool:hover,.card-indigo:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-indigo .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-indigo .bootstrap-datetimepicker-widget .table th,.card.bg-indigo .bootstrap-datetimepicker-widget .table td,.card.bg-indigo .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-indigo .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-indigo .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-indigo .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-indigo .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-indigo .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-indigo .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-indigo .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-indigo .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-indigo .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-indigo .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#550bce;color:#fff}.card.bg-gradient-indigo .bootstrap-datetimepicker-widget table td.today:before,.card.bg-indigo .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-indigo .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-indigo .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-indigo .bootstrap-datetimepicker-widget table td.active,.card.bg-indigo .bootstrap-datetimepicker-widget table td.active:hover{background:#8540f5;color:#fff}.card-purple:not(.card-outline)>.card-header{background-color:#6f42c1}.card-purple:not(.card-outline)>.card-header,.card-purple:not(.card-outline)>.card-header a{color:#fff}.card-purple:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-purple.card-outline{border-top:3px solid #6f42c1}.card-purple.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-purple.card-outline-tabs>.card-header a.active{border-top:3px solid #6f42c1}.bg-gradient-purple .btn-tool,.bg-purple .btn-tool,.card-purple:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-purple .btn-tool:hover,.bg-purple .btn-tool:hover,.card-purple:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-purple .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-purple .bootstrap-datetimepicker-widget .table th,.card.bg-purple .bootstrap-datetimepicker-widget .table td,.card.bg-purple .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-purple .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-purple .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-purple .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-purple .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-purple .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-purple .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-purple .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-purple .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-purple .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-purple .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#5d36a4;color:#fff}.card.bg-gradient-purple .bootstrap-datetimepicker-widget table td.today:before,.card.bg-purple .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-purple .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-purple .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-purple .bootstrap-datetimepicker-widget table td.active,.card.bg-purple .bootstrap-datetimepicker-widget table td.active:hover{background:#8c68ce;color:#fff}.card-pink:not(.card-outline)>.card-header{background-color:#e83e8c}.card-pink:not(.card-outline)>.card-header,.card-pink:not(.card-outline)>.card-header a{color:#fff}.card-pink:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-pink.card-outline{border-top:3px solid #e83e8c}.card-pink.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-pink.card-outline-tabs>.card-header a.active{border-top:3px solid #e83e8c}.bg-gradient-pink .btn-tool,.bg-pink .btn-tool,.card-pink:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-pink .btn-tool:hover,.bg-pink .btn-tool:hover,.card-pink:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-pink .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-pink .bootstrap-datetimepicker-widget .table th,.card.bg-pink .bootstrap-datetimepicker-widget .table td,.card.bg-pink .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-pink .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-pink .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-pink .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-pink .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-pink .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-pink .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-pink .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-pink .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-pink .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-pink .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#e21b76;color:#fff}.card.bg-gradient-pink .bootstrap-datetimepicker-widget table td.today:before,.card.bg-pink .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-pink .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-pink .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-pink .bootstrap-datetimepicker-widget table td.active,.card.bg-pink .bootstrap-datetimepicker-widget table td.active:hover{background:#ed6ca7;color:#fff}.card-red:not(.card-outline)>.card-header{background-color:#dc3545}.card-red:not(.card-outline)>.card-header,.card-red:not(.card-outline)>.card-header a{color:#fff}.card-red:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-red.card-outline{border-top:3px solid #dc3545}.card-red.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-red.card-outline-tabs>.card-header a.active{border-top:3px solid #dc3545}.bg-gradient-red .btn-tool,.bg-red .btn-tool,.card-red:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-red .btn-tool:hover,.bg-red .btn-tool:hover,.card-red:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-red .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-red .bootstrap-datetimepicker-widget .table th,.card.bg-red .bootstrap-datetimepicker-widget .table td,.card.bg-red .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-red .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-red .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-red .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-red .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-red .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-red .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-red .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-red .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-red .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-red .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#c62232;color:#fff}.card.bg-gradient-red .bootstrap-datetimepicker-widget table td.today:before,.card.bg-red .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-red .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-red .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-red .bootstrap-datetimepicker-widget table td.active,.card.bg-red .bootstrap-datetimepicker-widget table td.active:hover{background:#e4606d;color:#fff}.card-orange:not(.card-outline)>.card-header{background-color:#fd7e14}.card-orange:not(.card-outline)>.card-header,.card-orange:not(.card-outline)>.card-header a,.card-orange:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-orange.card-outline{border-top:3px solid #fd7e14}.card-orange.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-orange.card-outline-tabs>.card-header a.active{border-top:3px solid #fd7e14}.bg-gradient-orange .btn-tool,.bg-orange .btn-tool,.card-orange:not(.card-outline) .btn-tool{color:rgba(31,45,61,.8)}.bg-gradient-orange .btn-tool:hover,.bg-orange .btn-tool:hover,.card-orange:not(.card-outline) .btn-tool:hover{color:#1f2d3d}.card.bg-gradient-orange .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-orange .bootstrap-datetimepicker-widget .table th,.card.bg-orange .bootstrap-datetimepicker-widget .table td,.card.bg-orange .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-orange .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-orange .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-orange .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-orange .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-orange .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-orange .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-orange .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-orange .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-orange .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-orange .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#e66a02;color:#1f2d3d}.card.bg-gradient-orange .bootstrap-datetimepicker-widget table td.today:before,.card.bg-orange .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#1f2d3d}.card.bg-gradient-orange .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-orange .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-orange .bootstrap-datetimepicker-widget table td.active,.card.bg-orange .bootstrap-datetimepicker-widget table td.active:hover{background:#fd9a47;color:#1f2d3d}.card-yellow:not(.card-outline)>.card-header{background-color:#ffc107}.card-yellow:not(.card-outline)>.card-header,.card-yellow:not(.card-outline)>.card-header a,.card-yellow:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-yellow.card-outline{border-top:3px solid #ffc107}.card-yellow.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-yellow.card-outline-tabs>.card-header a.active{border-top:3px solid #ffc107}.bg-gradient-yellow .btn-tool,.bg-yellow .btn-tool,.card-yellow:not(.card-outline) .btn-tool{color:rgba(31,45,61,.8)}.bg-gradient-yellow .btn-tool:hover,.bg-yellow .btn-tool:hover,.card-yellow:not(.card-outline) .btn-tool:hover{color:#1f2d3d}.card.bg-gradient-yellow .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-yellow .bootstrap-datetimepicker-widget .table th,.card.bg-yellow .bootstrap-datetimepicker-widget .table td,.card.bg-yellow .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-yellow .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-yellow .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-yellow .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-yellow .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-yellow .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-yellow .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-yellow .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-yellow .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-yellow .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-yellow .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#dda600;color:#1f2d3d}.card.bg-gradient-yellow .bootstrap-datetimepicker-widget table td.today:before,.card.bg-yellow .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#1f2d3d}.card.bg-gradient-yellow .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-yellow .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-yellow .bootstrap-datetimepicker-widget table td.active,.card.bg-yellow .bootstrap-datetimepicker-widget table td.active:hover{background:#ffce3a;color:#1f2d3d}.card-green:not(.card-outline)>.card-header{background-color:#28a745}.card-green:not(.card-outline)>.card-header,.card-green:not(.card-outline)>.card-header a{color:#fff}.card-green:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-green.card-outline{border-top:3px solid #28a745}.card-green.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-green.card-outline-tabs>.card-header a.active{border-top:3px solid #28a745}.bg-gradient-green .btn-tool,.bg-green .btn-tool,.card-green:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-green .btn-tool:hover,.bg-green .btn-tool:hover,.card-green:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-green .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-green .bootstrap-datetimepicker-widget .table th,.card.bg-green .bootstrap-datetimepicker-widget .table td,.card.bg-green .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-green .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-green .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-green .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-green .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-green .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-green .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-green .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-green .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-green .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-green .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#208637;color:#fff}.card.bg-gradient-green .bootstrap-datetimepicker-widget table td.today:before,.card.bg-green .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-green .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-green .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-green .bootstrap-datetimepicker-widget table td.active,.card.bg-green .bootstrap-datetimepicker-widget table td.active:hover{background:#34ce57;color:#fff}.card-teal:not(.card-outline)>.card-header{background-color:#20c997}.card-teal:not(.card-outline)>.card-header,.card-teal:not(.card-outline)>.card-header a{color:#fff}.card-teal:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-teal.card-outline{border-top:3px solid #20c997}.card-teal.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-teal.card-outline-tabs>.card-header a.active{border-top:3px solid #20c997}.bg-gradient-teal .btn-tool,.bg-teal .btn-tool,.card-teal:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-teal .btn-tool:hover,.bg-teal .btn-tool:hover,.card-teal:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-teal .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-teal .bootstrap-datetimepicker-widget .table th,.card.bg-teal .bootstrap-datetimepicker-widget .table td,.card.bg-teal .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-teal .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-teal .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-teal .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-teal .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-teal .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-teal .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-teal .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-teal .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-teal .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-teal .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#1aa67d;color:#fff}.card.bg-gradient-teal .bootstrap-datetimepicker-widget table td.today:before,.card.bg-teal .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-teal .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-teal .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-teal .bootstrap-datetimepicker-widget table td.active,.card.bg-teal .bootstrap-datetimepicker-widget table td.active:hover{background:#3ce0af;color:#fff}.card-cyan:not(.card-outline)>.card-header{background-color:#17a2b8}.card-cyan:not(.card-outline)>.card-header,.card-cyan:not(.card-outline)>.card-header a{color:#fff}.card-cyan:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-cyan.card-outline{border-top:3px solid #17a2b8}.card-cyan.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-cyan.card-outline-tabs>.card-header a.active{border-top:3px solid #17a2b8}.bg-cyan .btn-tool,.bg-gradient-cyan .btn-tool,.card-cyan:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-cyan .btn-tool:hover,.bg-gradient-cyan .btn-tool:hover,.card-cyan:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-cyan .bootstrap-datetimepicker-widget .table td,.card.bg-cyan .bootstrap-datetimepicker-widget .table th,.card.bg-gradient-cyan .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-cyan .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-cyan .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-cyan .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-cyan .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-cyan .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-cyan .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-gradient-cyan .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-cyan .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-cyan .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-cyan .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-cyan .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#128294;color:#fff}.card.bg-cyan .bootstrap-datetimepicker-widget table td.today:before,.card.bg-gradient-cyan .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-cyan .bootstrap-datetimepicker-widget table td.active,.card.bg-cyan .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-gradient-cyan .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-cyan .bootstrap-datetimepicker-widget table td.active:hover{background:#1fc8e3;color:#fff}.card-white:not(.card-outline)>.card-header{background-color:#fff}.card-white:not(.card-outline)>.card-header,.card-white:not(.card-outline)>.card-header a,.card-white:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-white.card-outline{border-top:3px solid #fff}.card-white.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-white.card-outline-tabs>.card-header a.active{border-top:3px solid #fff}.bg-gradient-white .btn-tool,.bg-white .btn-tool,.card-white:not(.card-outline) .btn-tool{color:rgba(31,45,61,.8)}.bg-gradient-white .btn-tool:hover,.bg-white .btn-tool:hover,.card-white:not(.card-outline) .btn-tool:hover{color:#1f2d3d}.card.bg-gradient-white .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-white .bootstrap-datetimepicker-widget .table th,.card.bg-white .bootstrap-datetimepicker-widget .table td,.card.bg-white .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-white .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-white .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-white .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-white .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-white .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-white .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-white .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-white .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-white .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-white .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#ebebeb;color:#1f2d3d}.card.bg-gradient-white .bootstrap-datetimepicker-widget table td.today:before,.card.bg-white .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#1f2d3d}.card.bg-gradient-white .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-white .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-white .bootstrap-datetimepicker-widget table td.active,.card.bg-white .bootstrap-datetimepicker-widget table td.active:hover{background:#fff;color:#1f2d3d}.card-gray:not(.card-outline)>.card-header{background-color:#6c757d}.card-gray:not(.card-outline)>.card-header,.card-gray:not(.card-outline)>.card-header a{color:#fff}.card-gray:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-gray.card-outline{border-top:3px solid #6c757d}.card-gray.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-gray.card-outline-tabs>.card-header a.active{border-top:3px solid #6c757d}.bg-gradient-gray .btn-tool,.bg-gray .btn-tool,.card-gray:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-gray .btn-tool:hover,.bg-gray .btn-tool:hover,.card-gray:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-gray .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-gray .bootstrap-datetimepicker-widget .table th,.card.bg-gray .bootstrap-datetimepicker-widget .table td,.card.bg-gray .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-gray .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-gray .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-gray .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-gray .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-gray .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-gray .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gray .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gray .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gray .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gray .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#596167;color:#fff}.card.bg-gradient-gray .bootstrap-datetimepicker-widget table td.today:before,.card.bg-gray .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-gray .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-gray .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-gray .bootstrap-datetimepicker-widget table td.active,.card.bg-gray .bootstrap-datetimepicker-widget table td.active:hover{background:#868e96;color:#fff}.card-gray-dark:not(.card-outline)>.card-header{background-color:#343a40}.card-gray-dark:not(.card-outline)>.card-header,.card-gray-dark:not(.card-outline)>.card-header a{color:#fff}.card-gray-dark:not(.card-outline)>.card-header a.active{color:#1f2d3d}.card-gray-dark.card-outline{border-top:3px solid #343a40}.card-gray-dark.card-outline-tabs>.card-header a:hover{border-top:3px solid #dee2e6}.card-gray-dark.card-outline-tabs>.card-header a.active{border-top:3px solid #343a40}.bg-gradient-gray-dark .btn-tool,.bg-gray-dark .btn-tool,.card-gray-dark:not(.card-outline) .btn-tool{color:hsla(0,0%,100%,.8)}.bg-gradient-gray-dark .btn-tool:hover,.bg-gray-dark .btn-tool:hover,.card-gray-dark:not(.card-outline) .btn-tool:hover{color:#fff}.card.bg-gradient-gray-dark .bootstrap-datetimepicker-widget .table td,.card.bg-gradient-gray-dark .bootstrap-datetimepicker-widget .table th,.card.bg-gray-dark .bootstrap-datetimepicker-widget .table td,.card.bg-gray-dark .bootstrap-datetimepicker-widget .table th{border:none}.card.bg-gradient-gray-dark .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gradient-gray-dark .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gradient-gray-dark .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gradient-gray-dark .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gradient-gray-dark .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,.card.bg-gray-dark .bootstrap-datetimepicker-widget table td.day:hover,.card.bg-gray-dark .bootstrap-datetimepicker-widget table td.hour:hover,.card.bg-gray-dark .bootstrap-datetimepicker-widget table td.minute:hover,.card.bg-gray-dark .bootstrap-datetimepicker-widget table td.second:hover,.card.bg-gray-dark .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#222629;color:#fff}.card.bg-gradient-gray-dark .bootstrap-datetimepicker-widget table td.today:before,.card.bg-gray-dark .bootstrap-datetimepicker-widget table td.today:before{border-bottom-color:#fff}.card.bg-gradient-gray-dark .bootstrap-datetimepicker-widget table td.active,.card.bg-gradient-gray-dark .bootstrap-datetimepicker-widget table td.active:hover,.card.bg-gray-dark .bootstrap-datetimepicker-widget table td.active,.card.bg-gray-dark .bootstrap-datetimepicker-widget table td.active:hover{background:#4b545c;color:#fff}.card{box-shadow:0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2)}.card.bg-dark .card-header{border-color:#383f45}.card.bg-dark,.card.bg-dark .card-body{color:#fff}.card.maximized-card{height:100%!important;left:0;max-height:100%!important;max-width:100%!important;position:fixed;top:0;width:100%!important;z-index:9999}.card.maximized-card.was-collapsed .card-body{display:block!important}.card.maximized-card [data-widget=collapse]{display:none}.card.maximized-card .card-footer,.card.maximized-card .card-header{border-radius:0!important}.card.collapsed-card .card-body,.card.collapsed-card .card-footer{display:none}.card .nav.flex-column>li{border-bottom:1px solid rgba(0,0,0,.125);margin:0}.card .nav.flex-column>li:last-of-type{border-bottom:0}.card.height-control .card-body{max-height:300px;overflow:auto}.card .border-right{border-right:1px solid rgba(0,0,0,.125)}.card .border-left{border-left:1px solid rgba(0,0,0,.125)}.card.card-tabs:not(.card-outline)>.card-header{border-bottom:0}.card.card-tabs:not(.card-outline)>.card-header .nav-item:first-child .nav-link{margin-left:-1px}.card.card-tabs.card-outline .nav-item{border-bottom:0}.card.card-tabs.card-outline .nav-item:first-child .nav-link{border-left:0;margin-left:0}.card.card-tabs .card-tools{margin:.3rem .5rem}.card.card-tabs:not(.expanding-card).collapsed-card .card-header,.card.card-tabs:not(.expanding-card).collapsed-card .card-header .nav-tabs{border-bottom:0}.card.card-tabs:not(.expanding-card).collapsed-card .card-header .nav-tabs .nav-item{margin-bottom:0}.card.card-tabs.expanding-card .card-header .nav-tabs .nav-item{margin-bottom:-1px}.card.card-outline-tabs{border-top:0}.card.card-outline-tabs .card-header .nav-item:first-child .nav-link{border-left:0;margin-left:0}.card.card-outline-tabs .card-header a{border-top:3px solid transparent}.card.card-outline-tabs .card-header a:hover{border-top:3px solid #dee2e6}.card.card-outline-tabs .card-header a.active:hover{margin-top:0}.card.card-outline-tabs .card-tools{margin:.5rem .5rem .3rem}.card.card-outline-tabs:not(.expanding-card).collapsed-card .card-header,.card.card-outline-tabs:not(.expanding-card).collapsed-card .card-header .nav-tabs{border-bottom:0}.card.card-outline-tabs:not(.expanding-card).collapsed-card .card-header .nav-tabs .nav-item{margin-bottom:0}.card.card-outline-tabs.expanding-card .card-header .nav-tabs .nav-item{margin-bottom:-1px}html.maximized-card{overflow:hidden}.card-body:after,.card-footer:after,.card-header:after{display:block;clear:both;content:\"\"}.card-header{background-color:transparent;border-bottom:1px solid rgba(0,0,0,.125);padding:.75rem 1.25rem;position:relative;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.collapsed-card .card-header{border-bottom:0}.card-header>.card-tools{float:right;margin-right:-.625rem}.card-header>.card-tools .input-group,.card-header>.card-tools .nav,.card-header>.card-tools .pagination{margin-bottom:-.3rem;margin-top:-.3rem}.card-header>.card-tools [data-toggle=tooltip]{position:relative}.card-title{float:left;font-size:1.1rem;font-weight:400;margin:0}.card-text{clear:both}.btn-tool{background:0 0;color:#adb5bd;font-size:.875rem;margin:-.75rem 0;padding:.25rem .5rem}.btn-group.show .btn-tool,.btn-tool:hover{color:#495057}.btn-tool:focus,.show .btn-tool{box-shadow:none!important}.text-sm .card-title{font-size:1rem}.text-sm .nav-link{padding:.4rem .8rem}.card-body>.table{margin-bottom:0}.card-body>.table>thead>tr>td,.card-body>.table>thead>tr>th{border-top-width:0}.card-body .fc{margin-top:5px}.card-body .full-width-chart{margin:-19px}.card-body.p-0 .full-width-chart{margin:-9px}.chart-legend{padding-left:0;list-style:none;margin:10px 0}@media (max-width:576px){.chart-legend>li{float:left;margin-right:10px}}.card-comments{background:#f8f9fa}.card-comments .card-comment{border-bottom:1px solid #e9ecef;padding:8px 0}.card-comments .card-comment:after{display:block;clear:both;content:\"\"}.card-comments .card-comment:last-of-type{border-bottom:0}.card-comments .card-comment:first-of-type{padding-top:0}.card-comments .card-comment img{height:1.875rem;width:1.875rem;float:left}.card-comments .comment-text{color:#78838e;margin-left:40px}.card-comments .username{color:#495057;display:block;font-weight:600}.card-comments .text-muted{font-size:12px;font-weight:400}.todo-list{list-style:none;margin:0;overflow:auto;padding:0}.todo-list>li{border-radius:2px;background:#f8f9fa;border-left:2px solid #e9ecef;color:#495057;margin-bottom:2px;padding:10px}.todo-list>li:last-of-type{margin-bottom:0}.todo-list>li>input[type=checkbox]{margin:0 10px 0 5px}.todo-list>li .text{display:inline-block;font-weight:600;margin-left:5px}.todo-list>li .badge{font-size:.7rem;margin-left:10px}.todo-list>li .tools{color:#dc3545;display:none;float:right}.todo-list>li .tools>.fa,.todo-list>li .tools>.fab,.todo-list>li .tools>.far,.todo-list>li .tools>.fas,.todo-list>li .tools>.glyphicon,.todo-list>li .tools>.ion{cursor:pointer;margin-right:5px}.todo-list>li:hover .tools{display:inline-block}.todo-list>li.done{color:#697582}.todo-list>li.done .text{font-weight:500;text-decoration:line-through}.todo-list>li.done .badge{background:#adb5bd!important}.todo-list .primary{border-left-color:#007bff}.todo-list .secondary{border-left-color:#6c757d}.todo-list .success{border-left-color:#28a745}.todo-list .info{border-left-color:#17a2b8}.todo-list .warning{border-left-color:#ffc107}.todo-list .danger{border-left-color:#dc3545}.todo-list .light{border-left-color:#f8f9fa}.todo-list .dark{border-left-color:#343a40}.todo-list .lightblue{border-left-color:#3c8dbc}.todo-list .navy{border-left-color:#001f3f}.todo-list .olive{border-left-color:#3d9970}.todo-list .lime{border-left-color:#01ff70}.todo-list .fuchsia{border-left-color:#f012be}.todo-list .maroon{border-left-color:#d81b60}.todo-list .blue{border-left-color:#007bff}.todo-list .indigo{border-left-color:#6610f2}.todo-list .purple{border-left-color:#6f42c1}.todo-list .pink{border-left-color:#e83e8c}.todo-list .red{border-left-color:#dc3545}.todo-list .orange{border-left-color:#fd7e14}.todo-list .yellow{border-left-color:#ffc107}.todo-list .green{border-left-color:#28a745}.todo-list .teal{border-left-color:#20c997}.todo-list .cyan{border-left-color:#17a2b8}.todo-list .white{border-left-color:#fff}.todo-list .gray{border-left-color:#6c757d}.todo-list .gray-dark{border-left-color:#343a40}.todo-list .handle{cursor:move;display:inline-block;margin:0 5px}.card-input{max-width:200px}.card-default .nav-item:first-child .nav-link{border-left:0}.modal-dialog .overlay{background-color:#000;display:block;height:100%;left:0;opacity:.7;position:absolute;top:0;width:100%;z-index:1052}.modal-content.bg-warning .modal-footer,.modal-content.bg-warning .modal-header{border-color:#343a40}.modal-content.bg-danger .close,.modal-content.bg-danger .mailbox-attachment-close,.modal-content.bg-info .close,.modal-content.bg-info .mailbox-attachment-close,.modal-content.bg-primary .close,.modal-content.bg-primary .mailbox-attachment-close,.modal-content.bg-secondary .close,.modal-content.bg-secondary .mailbox-attachment-close,.modal-content.bg-success .close,.modal-content.bg-success .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toasts-top-right{position:absolute;right:0;top:0;z-index:1040}.toasts-top-right.fixed{position:fixed}.toasts-top-left{left:0;position:absolute;top:0;z-index:1040}.toasts-top-left.fixed{position:fixed}.toasts-bottom-right{bottom:0;position:absolute;right:0;z-index:1040}.toasts-bottom-right.fixed{position:fixed}.toasts-bottom-left{bottom:0;left:0;position:absolute;z-index:1040}.toasts-bottom-left.fixed{position:fixed}.toast.bg-primary{background:rgba(0,123,255,.9)!important}.toast.bg-primary .close,.toast.bg-primary .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-primary .toast-header{background:rgba(0,123,255,.85);color:#fff}.toast.bg-secondary{background:hsla(208,7%,46%,.9)!important}.toast.bg-secondary .close,.toast.bg-secondary .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-secondary .toast-header{background:hsla(208,7%,46%,.85);color:#fff}.toast.bg-success{background:rgba(40,167,69,.9)!important}.toast.bg-success .close,.toast.bg-success .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-success .toast-header{background:rgba(40,167,69,.85);color:#fff}.toast.bg-info{background:rgba(23,162,184,.9)!important}.toast.bg-info .close,.toast.bg-info .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-info .toast-header{background:rgba(23,162,184,.85);color:#fff}.toast.bg-warning{background:rgba(255,193,7,.9)!important}.toast.bg-warning .toast-header{background:rgba(255,193,7,.85);color:#1f2d3d}.toast.bg-danger{background:rgba(220,53,69,.9)!important}.toast.bg-danger .close,.toast.bg-danger .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-danger .toast-header{background:rgba(220,53,69,.85);color:#fff}.toast.bg-light{background:rgba(248,249,250,.9)!important}.toast.bg-light .toast-header{background:rgba(248,249,250,.85);color:#1f2d3d}.toast.bg-dark{background:rgba(52,58,64,.9)!important}.toast.bg-dark .close,.toast.bg-dark .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-dark .toast-header{background:rgba(52,58,64,.85);color:#fff}.toast.bg-lightblue{background:rgba(60,141,188,.9)!important}.toast.bg-lightblue .close,.toast.bg-lightblue .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-lightblue .toast-header{background:rgba(60,141,188,.85);color:#fff}.toast.bg-navy{background:rgba(0,31,63,.9)!important}.toast.bg-navy .close,.toast.bg-navy .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-navy .toast-header{background:rgba(0,31,63,.85);color:#fff}.toast.bg-olive{background:rgba(61,153,112,.9)!important}.toast.bg-olive .close,.toast.bg-olive .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-olive .toast-header{background:rgba(61,153,112,.85);color:#fff}.toast.bg-lime{background:rgba(1,255,112,.9)!important}.toast.bg-lime .toast-header{background:rgba(1,255,112,.85);color:#1f2d3d}.toast.bg-fuchsia{background:rgba(240,18,190,.9)!important}.toast.bg-fuchsia .close,.toast.bg-fuchsia .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-fuchsia .toast-header{background:rgba(240,18,190,.85);color:#fff}.toast.bg-maroon{background:rgba(216,27,96,.9)!important}.toast.bg-maroon .close,.toast.bg-maroon .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-maroon .toast-header{background:rgba(216,27,96,.85);color:#fff}.toast.bg-blue{background:rgba(0,123,255,.9)!important}.toast.bg-blue .close,.toast.bg-blue .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-blue .toast-header{background:rgba(0,123,255,.85);color:#fff}.toast.bg-indigo{background:rgba(102,16,242,.9)!important}.toast.bg-indigo .close,.toast.bg-indigo .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-indigo .toast-header{background:rgba(102,16,242,.85);color:#fff}.toast.bg-purple{background:rgba(111,66,193,.9)!important}.toast.bg-purple .close,.toast.bg-purple .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-purple .toast-header{background:rgba(111,66,193,.85);color:#fff}.toast.bg-pink{background:rgba(232,62,140,.9)!important}.toast.bg-pink .close,.toast.bg-pink .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-pink .toast-header{background:rgba(232,62,140,.85);color:#fff}.toast.bg-red{background:rgba(220,53,69,.9)!important}.toast.bg-red .close,.toast.bg-red .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-red .toast-header{background:rgba(220,53,69,.85);color:#fff}.toast.bg-orange{background:rgba(253,126,20,.9)!important}.toast.bg-orange .toast-header{background:rgba(253,126,20,.85);color:#1f2d3d}.toast.bg-yellow{background:rgba(255,193,7,.9)!important}.toast.bg-yellow .toast-header{background:rgba(255,193,7,.85);color:#1f2d3d}.toast.bg-green{background:rgba(40,167,69,.9)!important}.toast.bg-green .close,.toast.bg-green .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-green .toast-header{background:rgba(40,167,69,.85);color:#fff}.toast.bg-teal{background:rgba(32,201,151,.9)!important}.toast.bg-teal .close,.toast.bg-teal .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-teal .toast-header{background:rgba(32,201,151,.85);color:#fff}.toast.bg-cyan{background:rgba(23,162,184,.9)!important}.toast.bg-cyan .close,.toast.bg-cyan .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-cyan .toast-header{background:rgba(23,162,184,.85);color:#fff}.toast.bg-white{background:hsla(0,0%,100%,.9)!important}.toast.bg-white .toast-header{background:hsla(0,0%,100%,.85);color:#1f2d3d}.toast.bg-gray{background:hsla(208,7%,46%,.9)!important}.toast.bg-gray .close,.toast.bg-gray .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-gray .toast-header{background:hsla(208,7%,46%,.85);color:#fff}.toast.bg-gray-dark{background:rgba(52,58,64,.9)!important}.toast.bg-gray-dark .close,.toast.bg-gray-dark .mailbox-attachment-close{color:#fff;text-shadow:0 1px 0 #000}.toast.bg-gray-dark .toast-header{background:rgba(52,58,64,.85);color:#fff}.btn.disabled,.btn:disabled{cursor:not-allowed}.btn.btn-flat{border-radius:0;border-width:1px;box-shadow:none}.btn.btn-file{overflow:hidden;position:relative}.btn.btn-file>input[type=file]{background:#fff;cursor:inherit;display:block;font-size:100px;min-height:100%;min-width:100%;opacity:0;outline:0;position:absolute;right:0;text-align:right;top:0}.text-sm .btn{font-size:.875rem!important}.btn-default{background-color:#f8f9fa;border-color:#ddd;color:#444}.btn-default.hover,.btn-default:active,.btn-default:hover{background-color:#e9ecef;color:#2b2b2b}.btn-app{border-radius:3px;background-color:#f8f9fa;border:1px solid #ddd;color:#6c757d;font-size:12px;height:60px;margin:0 0 10px 10px;min-width:80px;padding:15px 5px;position:relative;text-align:center}.btn-app>.fa,.btn-app>.fab,.btn-app>.far,.btn-app>.fas,.btn-app>.glyphicon,.btn-app>.ion{display:block;font-size:20px}.btn-app:hover{background:#f8f9fa;border-color:#aaa;color:#444}.btn-app:active,.btn-app:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-app>.badge{font-size:10px;font-weight:400;position:absolute;right:-10px;top:-3px}.btn-xs{padding:.125rem .25rem;font-size:.75rem;line-height:1.5;border-radius:.15rem}.callout{border-radius:.25rem;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);background-color:#fff;border-left:5px solid #e9ecef;margin-bottom:1rem;padding:1rem}.callout a{color:#495057;text-decoration:underline}.callout a:hover{color:#e9ecef}.callout p:last-child{margin-bottom:0}.callout.callout-danger{border-left-color:#bd2130}.callout.callout-warning{border-left-color:#d39e00}.callout.callout-info{border-left-color:#117a8b}.callout.callout-success{border-left-color:#1e7e34}.alert .icon{margin-right:10px}.alert .close,.alert .mailbox-attachment-close{color:#000;opacity:.2}.alert .close:hover,.alert .mailbox-attachment-close:hover{opacity:.5}.alert a{color:#fff;text-decoration:underline}.alert-primary{color:#fff;background:#007bff;border-color:#006fe6}.alert-default-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-default-primary hr{border-top-color:#9fcdff}.alert-default-primary .alert-link{color:#002752}.alert-secondary{color:#fff;background:#6c757d;border-color:#60686f}.alert-default-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-default-secondary hr{border-top-color:#c8cbcf}.alert-default-secondary .alert-link{color:#202326}.alert-success{color:#fff;background:#28a745;border-color:#23923d}.alert-default-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-default-success hr{border-top-color:#b1dfbb}.alert-default-success .alert-link{color:#0b2e13}.alert-info{color:#fff;background:#17a2b8;border-color:#148ea1}.alert-default-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-default-info hr{border-top-color:#abdde5}.alert-default-info .alert-link{color:#062c33}.alert-warning{color:#1f2d3d;background:#ffc107;border-color:#edb100}.alert-default-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-default-warning hr{border-top-color:#ffe8a1}.alert-default-warning .alert-link{color:#533f03}.alert-danger{color:#fff;background:#dc3545;border-color:#d32535}.alert-default-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-default-danger hr{border-top-color:#f1b0b7}.alert-default-danger .alert-link{color:#491217}.alert-light{color:#1f2d3d;background:#f8f9fa;border-color:#e9ecef}.alert-default-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-default-light hr{border-top-color:#ececf6}.alert-default-light .alert-link{color:#686868}.alert-dark{color:#fff;background:#343a40;border-color:#292d32}.alert-default-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-default-dark hr{border-top-color:#b9bbbe}.alert-default-dark .alert-link{color:#040505}.table:not(.table-dark){color:inherit}.table.table-head-fixed thead tr:first-child th{background-color:#fff;border-bottom:0;box-shadow:inset 0 1px 0 #dee2e6,inset 0 -1px 0 #dee2e6;position:-webkit-sticky;position:sticky;top:0;z-index:10}.table.table-head-fixed.table-dark thead tr:first-child th{background-color:#212529;box-shadow:inset 0 1px 0 #383f45,inset 0 -1px 0 #383f45}.table.no-border,.table.no-border td,.table.no-border th{border:0}.table.text-center,.table.text-center td,.table.text-center th{text-align:center}.table.table-valign-middle tbody>tr>td,.table.table-valign-middle tbody>tr>th,.table.table-valign-middle thead>tr>td,.table.table-valign-middle thead>tr>th{vertical-align:middle}.card-body.p-0 .table tbody>tr>td:first-of-type,.card-body.p-0 .table tbody>tr>th:first-of-type,.card-body.p-0 .table thead>tr>td:first-of-type,.card-body.p-0 .table thead>tr>th:first-of-type{padding-left:1.5rem}.card-body.p-0 .table tbody>tr>td:last-of-type,.card-body.p-0 .table tbody>tr>th:last-of-type,.card-body.p-0 .table thead>tr>td:last-of-type,.card-body.p-0 .table thead>tr>th:last-of-type{padding-right:1.5rem}.carousel-control.left,.carousel-control.right{background-image:none}.carousel-control>.fa,.carousel-control>.fab,.carousel-control>.far,.carousel-control>.fas,.carousel-control>.glyphicon,.carousel-control>.ion{display:inline-block;font-size:40px;margin-top:-20px;position:absolute;top:50%;z-index:5}.small-box{border-radius:.25rem;box-shadow:0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2);display:block;margin-bottom:20px;position:relative}.small-box>.inner{padding:10px}.small-box>.small-box-footer{background:rgba(0,0,0,.1);color:hsla(0,0%,100%,.8);display:block;padding:3px 0;position:relative;text-align:center;text-decoration:none;z-index:10}.small-box>.small-box-footer:hover{background:rgba(0,0,0,.15);color:#fff}.small-box h3{font-size:2.2rem;font-weight:700;margin:0 0 10px;padding:0;white-space:nowrap}@media (min-width:992px){.col-lg-2 .small-box h3,.col-lg-3 .small-box h3,.col-md-2 .small-box h3,.col-md-3 .small-box h3,.col-xl-2 .small-box h3,.col-xl-3 .small-box h3{font-size:1.6rem}}@media (min-width:1200px){.col-lg-2 .small-box h3,.col-lg-3 .small-box h3,.col-md-2 .small-box h3,.col-md-3 .small-box h3,.col-xl-2 .small-box h3,.col-xl-3 .small-box h3{font-size:2.2rem}}.small-box p{font-size:1rem}.small-box p>small{color:#f8f9fa;display:block;font-size:.9rem;margin-top:5px}.small-box h3,.small-box p{z-index:5}.small-box .icon{color:rgba(0,0,0,.15);z-index:0}.small-box .icon>i{font-size:90px;position:absolute;right:15px;top:15px;transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear}.small-box .icon>i.fa,.small-box .icon>i.fab,.small-box .icon>i.far,.small-box .icon>i.fas,.small-box .icon>i.glyphicon,.small-box .icon>i.ion{font-size:70px;top:20px}.small-box:hover{text-decoration:none}.small-box:hover .icon>i,.small-box:hover .icon>i.fa,.small-box:hover .icon>i.fab,.small-box:hover .icon>i.far,.small-box:hover .icon>i.fas,.small-box:hover .icon>i.glyphicon,.small-box:hover .icon>i.ion{-webkit-transform:scale(1.1);transform:scale(1.1)}@media (max-width:767.98px){.small-box{text-align:center}.small-box .icon{display:none}.small-box p{font-size:12px}}.info-box{box-shadow:0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2);border-radius:.25rem;background:#fff;display:-ms-flexbox;display:flex;margin-bottom:1rem;min-height:80px;padding:.5rem;position:relative;width:100%}.info-box .progress{background-color:rgba(0,0,0,.125);height:2px;margin:5px 0}.info-box .progress .progress-bar{background-color:#fff}.info-box .info-box-icon{border-radius:.25rem;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;font-size:1.875rem;-ms-flex-pack:center;justify-content:center;text-align:center;width:70px}.info-box .info-box-icon>img{max-width:100%}.info-box .info-box-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;line-height:120%;-ms-flex:1;flex:1;padding:0 10px}.info-box .info-box-number{display:block;margin-top:.25rem;font-weight:700}.info-box .info-box-text,.info-box .progress-description{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.info-box .info-box .bg-gradient-primary,.info-box .info-box .bg-primary{color:#fff}.info-box .info-box .bg-gradient-primary .progress-bar,.info-box .info-box .bg-primary .progress-bar{background-color:#fff}.info-box .info-box .bg-gradient-secondary,.info-box .info-box .bg-secondary{color:#fff}.info-box .info-box .bg-gradient-secondary .progress-bar,.info-box .info-box .bg-secondary .progress-bar{background-color:#fff}.info-box .info-box .bg-gradient-success,.info-box .info-box .bg-success{color:#fff}.info-box .info-box .bg-gradient-success .progress-bar,.info-box .info-box .bg-success .progress-bar{background-color:#fff}.info-box .info-box .bg-gradient-info,.info-box .info-box .bg-info{color:#fff}.info-box .info-box .bg-gradient-info .progress-bar,.info-box .info-box .bg-info .progress-bar{background-color:#fff}.info-box .info-box .bg-gradient-warning,.info-box .info-box .bg-warning{color:#1f2d3d}.info-box .info-box .bg-gradient-warning .progress-bar,.info-box .info-box .bg-warning .progress-bar{background-color:#1f2d3d}.info-box .info-box .bg-danger,.info-box .info-box .bg-gradient-danger{color:#fff}.info-box .info-box .bg-danger .progress-bar,.info-box .info-box .bg-gradient-danger .progress-bar{background-color:#fff}.info-box .info-box .bg-gradient-light,.info-box .info-box .bg-light{color:#1f2d3d}.info-box .info-box .bg-gradient-light .progress-bar,.info-box .info-box .bg-light .progress-bar{background-color:#1f2d3d}.info-box .info-box .bg-dark,.info-box .info-box .bg-gradient-dark{color:#fff}.info-box .info-box .bg-dark .progress-bar,.info-box .info-box .bg-gradient-dark .progress-bar{background-color:#fff}.info-box .info-box-more{display:block}.info-box .progress-description{margin:0}@media (min-width:768px){.col-lg-2 .info-box .progress-description,.col-lg-3 .info-box .progress-description,.col-md-2 .info-box .progress-description,.col-md-3 .info-box .progress-description,.col-xl-2 .info-box .progress-description,.col-xl-3 .info-box .progress-description{display:none}}@media (min-width:992px){.col-lg-2 .info-box .progress-description,.col-lg-3 .info-box .progress-description,.col-md-2 .info-box .progress-description,.col-md-3 .info-box .progress-description,.col-xl-2 .info-box .progress-description,.col-xl-3 .info-box .progress-description{font-size:.75rem;display:block}}@media (min-width:1200px){.col-lg-2 .info-box .progress-description,.col-lg-3 .info-box .progress-description,.col-md-2 .info-box .progress-description,.col-md-3 .info-box .progress-description,.col-xl-2 .info-box .progress-description,.col-xl-3 .info-box .progress-description{font-size:1rem;display:block}}.timeline{margin:0 0 45px;padding:0;position:relative}.timeline:before{border-radius:.25rem;background:#dee2e6;bottom:0;content:\"\";left:31px;margin:0;position:absolute;top:0;width:4px}.timeline>div{margin-bottom:15px;margin-right:10px;position:relative}.timeline>div:after,.timeline>div:before{content:\"\";display:table}.timeline>div>.timeline-item{box-shadow:0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2);border-radius:.25rem;background:#fff;color:#495057;margin-left:60px;margin-right:15px;margin-top:0;padding:0;position:relative}.timeline>div>.timeline-item>.time{color:#999;float:right;font-size:12px;padding:10px}.timeline>div>.timeline-item>.timeline-header{border-bottom:1px solid rgba(0,0,0,.125);color:#495057;font-size:16px;line-height:1.1;margin:0;padding:10px}.timeline>div>.timeline-item>.timeline-header>a{font-weight:600}.timeline>div>.timeline-item>.timeline-body,.timeline>div>.timeline-item>.timeline-footer{padding:10px}.timeline>div>.timeline-item>.timeline-body>img{margin:10px}.timeline>div>.timeline-item>.timeline-body>dl,.timeline>div>.timeline-item>.timeline-body ol,.timeline>div>.timeline-item>.timeline-body ul{margin:0}.timeline>div>.timeline-item>.timeline-footer>a{color:#fff}.timeline>div>.fa,.timeline>div>.fab,.timeline>div>.far,.timeline>div>.fas,.timeline>div>.glyphicon,.timeline>div>.ion{background:#adb5bd;border-radius:50%;font-size:15px;height:30px;left:18px;line-height:30px;position:absolute;text-align:center;top:0;width:30px}.timeline>.time-label>span{border-radius:4px;background-color:#fff;display:inline-block;font-weight:600;padding:5px}.timeline-inverse>div>.timeline-item{box-shadow:none;background:#f8f9fa;border:1px solid #dee2e6}.timeline-inverse>div>.timeline-item>.timeline-header{border-bottom-color:#dee2e6}.products-list{list-style:none;margin:0;padding:0}.products-list>.item{border-radius:.25rem;background:#fff;padding:10px 0}.products-list>.item:after{display:block;clear:both;content:\"\"}.products-list .product-img{float:left}.products-list .product-img img{height:50px;width:50px}.products-list .product-info{margin-left:60px}.products-list .product-title{font-weight:600}.products-list .product-description{color:#6c757d;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.product-list-in-card>.item{border-radius:0;border-bottom:1px solid rgba(0,0,0,.125)}.product-list-in-card>.item:last-of-type{border-bottom-width:0}.direct-chat .card-body{overflow-x:hidden;padding:0;position:relative}.direct-chat.chat-pane-open .direct-chat-contacts{-webkit-transform:translate(0);transform:translate(0)}.direct-chat.timestamp-light .direct-chat-timestamp{color:#30465f}.direct-chat.timestamp-dark .direct-chat-timestamp{color:#ccc}.direct-chat-messages{-webkit-transform:translate(0);transform:translate(0);height:350px;overflow:auto;padding:10px}.direct-chat-msg,.direct-chat-text{display:block}.direct-chat-msg{margin-bottom:10px}.direct-chat-msg:after{display:block;clear:both;content:\"\"}.direct-chat-contacts,.direct-chat-messages{transition:-webkit-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out,-webkit-transform .5s ease-in-out}.direct-chat-text{border-radius:.3rem;background:#d2d6de;border:1px solid #d2d6de;color:#444;margin:5px 30px 0 0;padding:5px 10px;position:relative}.direct-chat-text:after,.direct-chat-text:before{border:solid transparent;border-right-color:#d2d6de;content:\" \";height:0;pointer-events:none;position:absolute;right:100%;top:15px;width:0}.direct-chat-text:after{border-width:5px;margin-top:-5px}.direct-chat-text:before{border-width:6px;margin-top:-6px}.right .direct-chat-text{margin-left:50px;margin-right:0}.right .direct-chat-text:after,.right .direct-chat-text:before{border-left-color:#d2d6de;border-right-color:transparent;left:100%;right:auto}.direct-chat-img{border-radius:50%;float:left;height:40px;width:40px}.right .direct-chat-img{float:right}.direct-chat-infos{display:block;font-size:.875rem;margin-bottom:2px}.direct-chat-name{font-weight:600}.direct-chat-timestamp{color:#697582}.direct-chat-contacts-open .direct-chat-contacts{-webkit-transform:translate(0);transform:translate(0)}.direct-chat-contacts{-webkit-transform:translate(101%);transform:translate(101%);background:#343a40;bottom:0;color:#fff;height:250px;overflow:auto;position:absolute;top:0;width:100%}.direct-chat-contacts-light{background:#f8f9fa}.direct-chat-contacts-light .contacts-list-name{color:#495057}.direct-chat-contacts-light .contacts-list-date{color:#6c757d}.direct-chat-contacts-light .contacts-list-msg{color:#545b62}.contacts-list{padding-left:0;list-style:none}.contacts-list>li{border-bottom:1px solid rgba(0,0,0,.2);margin:0;padding:10px}.contacts-list>li:after{display:block;clear:both;content:\"\"}.contacts-list>li:last-of-type{border-bottom:0}.contacts-list-img{border-radius:50%;float:left;width:40px}.contacts-list-info{color:#fff;margin-left:45px}.contacts-list-name,.contacts-list-status{display:block}.contacts-list-name{font-weight:600}.contacts-list-status{font-size:.875rem}.contacts-list-date{color:#ced4da;font-weight:400}.contacts-list-msg{color:#b1bbc4}.direct-chat-primary .right>.direct-chat-text{background:#007bff;border-color:#007bff;color:#fff}.direct-chat-primary .right>.direct-chat-text:after,.direct-chat-primary .right>.direct-chat-text:before{border-left-color:#007bff}.direct-chat-secondary .right>.direct-chat-text{background:#6c757d;border-color:#6c757d;color:#fff}.direct-chat-secondary .right>.direct-chat-text:after,.direct-chat-secondary .right>.direct-chat-text:before{border-left-color:#6c757d}.direct-chat-success .right>.direct-chat-text{background:#28a745;border-color:#28a745;color:#fff}.direct-chat-success .right>.direct-chat-text:after,.direct-chat-success .right>.direct-chat-text:before{border-left-color:#28a745}.direct-chat-info .right>.direct-chat-text{background:#17a2b8;border-color:#17a2b8;color:#fff}.direct-chat-info .right>.direct-chat-text:after,.direct-chat-info .right>.direct-chat-text:before{border-left-color:#17a2b8}.direct-chat-warning .right>.direct-chat-text{background:#ffc107;border-color:#ffc107;color:#1f2d3d}.direct-chat-warning .right>.direct-chat-text:after,.direct-chat-warning .right>.direct-chat-text:before{border-left-color:#ffc107}.direct-chat-danger .right>.direct-chat-text{background:#dc3545;border-color:#dc3545;color:#fff}.direct-chat-danger .right>.direct-chat-text:after,.direct-chat-danger .right>.direct-chat-text:before{border-left-color:#dc3545}.direct-chat-light .right>.direct-chat-text{background:#f8f9fa;border-color:#f8f9fa;color:#1f2d3d}.direct-chat-light .right>.direct-chat-text:after,.direct-chat-light .right>.direct-chat-text:before{border-left-color:#f8f9fa}.direct-chat-dark .right>.direct-chat-text{background:#343a40;border-color:#343a40;color:#fff}.direct-chat-dark .right>.direct-chat-text:after,.direct-chat-dark .right>.direct-chat-text:before{border-left-color:#343a40}.direct-chat-lightblue .right>.direct-chat-text{background:#3c8dbc;border-color:#3c8dbc;color:#fff}.direct-chat-lightblue .right>.direct-chat-text:after,.direct-chat-lightblue .right>.direct-chat-text:before{border-left-color:#3c8dbc}.direct-chat-navy .right>.direct-chat-text{background:#001f3f;border-color:#001f3f;color:#fff}.direct-chat-navy .right>.direct-chat-text:after,.direct-chat-navy .right>.direct-chat-text:before{border-left-color:#001f3f}.direct-chat-olive .right>.direct-chat-text{background:#3d9970;border-color:#3d9970;color:#fff}.direct-chat-olive .right>.direct-chat-text:after,.direct-chat-olive .right>.direct-chat-text:before{border-left-color:#3d9970}.direct-chat-lime .right>.direct-chat-text{background:#01ff70;border-color:#01ff70;color:#1f2d3d}.direct-chat-lime .right>.direct-chat-text:after,.direct-chat-lime .right>.direct-chat-text:before{border-left-color:#01ff70}.direct-chat-fuchsia .right>.direct-chat-text{background:#f012be;border-color:#f012be;color:#fff}.direct-chat-fuchsia .right>.direct-chat-text:after,.direct-chat-fuchsia .right>.direct-chat-text:before{border-left-color:#f012be}.direct-chat-maroon .right>.direct-chat-text{background:#d81b60;border-color:#d81b60;color:#fff}.direct-chat-maroon .right>.direct-chat-text:after,.direct-chat-maroon .right>.direct-chat-text:before{border-left-color:#d81b60}.direct-chat-blue .right>.direct-chat-text{background:#007bff;border-color:#007bff;color:#fff}.direct-chat-blue .right>.direct-chat-text:after,.direct-chat-blue .right>.direct-chat-text:before{border-left-color:#007bff}.direct-chat-indigo .right>.direct-chat-text{background:#6610f2;border-color:#6610f2;color:#fff}.direct-chat-indigo .right>.direct-chat-text:after,.direct-chat-indigo .right>.direct-chat-text:before{border-left-color:#6610f2}.direct-chat-purple .right>.direct-chat-text{background:#6f42c1;border-color:#6f42c1;color:#fff}.direct-chat-purple .right>.direct-chat-text:after,.direct-chat-purple .right>.direct-chat-text:before{border-left-color:#6f42c1}.direct-chat-pink .right>.direct-chat-text{background:#e83e8c;border-color:#e83e8c;color:#fff}.direct-chat-pink .right>.direct-chat-text:after,.direct-chat-pink .right>.direct-chat-text:before{border-left-color:#e83e8c}.direct-chat-red .right>.direct-chat-text{background:#dc3545;border-color:#dc3545;color:#fff}.direct-chat-red .right>.direct-chat-text:after,.direct-chat-red .right>.direct-chat-text:before{border-left-color:#dc3545}.direct-chat-orange .right>.direct-chat-text{background:#fd7e14;border-color:#fd7e14;color:#1f2d3d}.direct-chat-orange .right>.direct-chat-text:after,.direct-chat-orange .right>.direct-chat-text:before{border-left-color:#fd7e14}.direct-chat-yellow .right>.direct-chat-text{background:#ffc107;border-color:#ffc107;color:#1f2d3d}.direct-chat-yellow .right>.direct-chat-text:after,.direct-chat-yellow .right>.direct-chat-text:before{border-left-color:#ffc107}.direct-chat-green .right>.direct-chat-text{background:#28a745;border-color:#28a745;color:#fff}.direct-chat-green .right>.direct-chat-text:after,.direct-chat-green .right>.direct-chat-text:before{border-left-color:#28a745}.direct-chat-teal .right>.direct-chat-text{background:#20c997;border-color:#20c997;color:#fff}.direct-chat-teal .right>.direct-chat-text:after,.direct-chat-teal .right>.direct-chat-text:before{border-left-color:#20c997}.direct-chat-cyan .right>.direct-chat-text{background:#17a2b8;border-color:#17a2b8;color:#fff}.direct-chat-cyan .right>.direct-chat-text:after,.direct-chat-cyan .right>.direct-chat-text:before{border-left-color:#17a2b8}.direct-chat-white .right>.direct-chat-text{background:#fff;border-color:#fff;color:#1f2d3d}.direct-chat-white .right>.direct-chat-text:after,.direct-chat-white .right>.direct-chat-text:before{border-left-color:#fff}.direct-chat-gray .right>.direct-chat-text{background:#6c757d;border-color:#6c757d;color:#fff}.direct-chat-gray .right>.direct-chat-text:after,.direct-chat-gray .right>.direct-chat-text:before{border-left-color:#6c757d}.direct-chat-gray-dark .right>.direct-chat-text{background:#343a40;border-color:#343a40;color:#fff}.direct-chat-gray-dark .right>.direct-chat-text:after,.direct-chat-gray-dark .right>.direct-chat-text:before{border-left-color:#343a40}.users-list{padding-left:0;list-style:none}.users-list>li{float:left;padding:10px;text-align:center;width:25%}.users-list>li img{border-radius:50%;height:auto;max-width:100%}.users-list>li>a:hover,.users-list>li>a:hover .users-list-name{color:#999}.users-list-date,.users-list-name{display:block}.users-list-name{color:#495057;font-size:.875rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.users-list-date{color:#748290;font-size:12px}.card-widget{border:0;position:relative}.widget-user .widget-user-header{border-top-left-radius:.25rem;border-top-right-radius:.25rem;height:135px;padding:1rem;text-align:center}.widget-user .widget-user-username{font-size:25px;font-weight:300;margin-bottom:0;margin-top:0;text-shadow:0 1px 1px rgba(0,0,0,.2)}.widget-user .widget-user-desc{margin-top:0}.widget-user .widget-user-image{left:50%;margin-left:-45px;position:absolute;top:80px}.widget-user .widget-user-image>img{border:3px solid #fff;height:auto;width:90px}.widget-user .card-footer{padding-top:50px}.widget-user-2 .widget-user-header{border-top-left-radius:.25rem;border-top-right-radius:.25rem;padding:1rem}.widget-user-2 .widget-user-username{font-size:25px;font-weight:300;margin-bottom:5px;margin-top:5px}.widget-user-2 .widget-user-desc{margin-top:0}.widget-user-2 .widget-user-desc,.widget-user-2 .widget-user-username{margin-left:75px}.widget-user-2 .widget-user-image>img{float:left;height:auto;width:65px}.mailbox-messages>.table{margin:0}.mailbox-controls{padding:5px}.mailbox-controls.with-border,.mailbox-read-info{border-bottom:1px solid rgba(0,0,0,.125)}.mailbox-read-info{padding:10px}.mailbox-read-info h3{font-size:20px;margin:0}.mailbox-read-info h5{margin:0;padding:5px 0 0}.mailbox-read-time{color:#999;font-size:13px}.mailbox-read-message{padding:10px}.mailbox-attachments{padding-left:0;list-style:none}.mailbox-attachments li{border:1px solid #eee;float:left;margin-bottom:10px;margin-right:10px;width:200px}.mailbox-attachment-name{color:#666;font-weight:700}.mailbox-attachment-icon,.mailbox-attachment-info,.mailbox-attachment-size{display:block}.mailbox-attachment-info{background:#f8f9fa;padding:10px}.mailbox-attachment-size{color:#999;font-size:12px}.mailbox-attachment-size>span{display:inline-block;padding-top:.75rem}.mailbox-attachment-icon{color:#666;font-size:65px;max-height:132.5px;padding:20px 10px;text-align:center}.mailbox-attachment-icon.has-img{padding:0}.mailbox-attachment-icon.has-img>img{height:auto;max-width:100%}.lockscreen{background:#e9ecef}.lockscreen .lockscreen-name{font-weight:600;text-align:center}.lockscreen-logo{font-size:35px;font-weight:300;margin-bottom:25px;text-align:center}.lockscreen-logo a{color:#495057}.lockscreen-wrapper{margin:0 auto;margin-top:10%;max-width:400px}.lockscreen-item{border-radius:4px;background:#fff;margin:10px auto 30px;padding:0;position:relative;width:290px}.lockscreen-image{border-radius:50%;background:#fff;left:-10px;padding:5px;position:absolute;top:-25px;z-index:10}.lockscreen-image>img{border-radius:50%;height:70px;width:70px}.lockscreen-credentials{margin-left:70px}.lockscreen-credentials .form-control{border:0}.lockscreen-credentials .btn{background-color:#fff;border:0;padding:0 10px}.lockscreen-footer{margin-top:10px}.login-logo,.register-logo{font-size:2.1rem;font-weight:300;margin-bottom:.9rem;text-align:center}.login-logo a,.register-logo a{color:#495057}.login-page,.register-page{-ms-flex-align:center;align-items:center;background:#e9ecef;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100vh;-ms-flex-pack:center;justify-content:center}.login-box,.register-box{width:360px}@media (max-width:576px){.login-box,.register-box{margin-top:.5rem;width:90%}}.login-card-body,.register-card-body{background:#fff;border-top:0;color:#666;padding:20px}.login-card-body .input-group .form-control,.register-card-body .input-group .form-control{border-right:0}.login-card-body .input-group .form-control:focus,.register-card-body .input-group .form-control:focus{box-shadow:none}.login-card-body .input-group .form-control:focus~.input-group-append .input-group-text,.register-card-body .input-group .form-control:focus~.input-group-append .input-group-text{border-color:#80bdff}.login-card-body .input-group .form-control.is-valid:focus,.register-card-body .input-group .form-control.is-valid:focus{box-shadow:none}.login-card-body .input-group .form-control.is-valid~.input-group-append .input-group-text,.register-card-body .input-group .form-control.is-valid~.input-group-append .input-group-text{border-color:#28a745}.login-card-body .input-group .form-control.is-invalid:focus,.register-card-body .input-group .form-control.is-invalid:focus{box-shadow:none}.login-card-body .input-group .form-control.is-invalid~.input-group-append .input-group-text,.register-card-body .input-group .form-control.is-invalid~.input-group-append .input-group-text{border-color:#dc3545}.login-card-body .input-group .input-group-text,.register-card-body .input-group .input-group-text{background-color:transparent;border-bottom-right-radius:.25rem;border-left:0;border-top-right-radius:.25rem;color:#777;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.login-box-msg,.register-box-msg{margin:0;padding:0 20px 20px;text-align:center}.social-auth-links{margin:10px 0}.error-page{margin:20px auto 0;width:600px}@media (max-width:767.98px){.error-page{width:100%}}.error-page>.headline{float:left;font-size:100px;font-weight:300}@media (max-width:767.98px){.error-page>.headline{float:none;text-align:center}}.error-page>.error-content{display:block;margin-left:190px}@media (max-width:767.98px){.error-page>.error-content{margin-left:0}}.error-page>.error-content>h3{font-size:25px;font-weight:300}@media (max-width:767.98px){.error-page>.error-content>h3{text-align:center}}.invoice{background:#fff;border:1px solid rgba(0,0,0,.125);position:relative}.invoice-title{margin-top:0}.profile-user-img{border:3px solid #adb5bd;margin:0 auto;padding:3px;width:100px}.profile-username{font-size:21px;margin-top:5px}.post{border-bottom:1px solid #adb5bd;color:#666;margin-bottom:15px;padding-bottom:15px}.post:last-of-type{border-bottom:0;margin-bottom:0;padding-bottom:0}.post .user-block{margin-bottom:15px;width:100%}.post .row{width:100%}.product-image{max-width:100%;height:auto;width:100%}.product-image-thumbs{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;margin-top:2rem}.product-image-thumb{box-shadow:0 1px 2px rgba(0,0,0,.075);border-radius:.25rem;background-color:#fff;border:1px solid #dee2e6;display:-ms-flexbox;display:flex;margin-right:1rem;max-width:7rem;padding:.5rem}.product-image-thumb img{max-width:100%;height:auto;-ms-flex-item-align:center;align-self:center}.product-image-thumb:hover{opacity:.5}.product-share a{margin-right:.5rem}.projects td{vertical-align:middle}.projects .list-inline{margin-bottom:0}.projects .table-avatar img,.projects img.table-avatar{border-radius:50%;display:inline;width:2.5rem}.projects .project-state{text-align:center}.fc-button{background:#f8f9fa;background-image:none;border-bottom-color:#ddd;border-color:#ddd;color:#495057}.fc-button.hover,.fc-button:active,.fc-button:hover{background-color:#e9e9e9}.fc-header-title h2{color:#666;font-size:15px;line-height:1.6em;margin-left:10px}.fc-header-right{padding-right:10px}.fc-header-left{padding-left:10px}.fc-widget-header{background:#fafafa}.fc-grid{border:0;width:100%}.fc-widget-content:first-of-type,.fc-widget-header:first-of-type{border-left:0;border-right:0}.fc-widget-content:last-of-type,.fc-widget-header:last-of-type{border-right:0}.fc-toolbar,.fc-toolbar.fc-header-toolbar{margin:0;padding:1rem}@media (max-width:575.98px){.fc-toolbar{-ms-flex-direction:column;flex-direction:column}.fc-toolbar .fc-left{-ms-flex-order:1;order:1;margin-bottom:.5rem}.fc-toolbar .fc-center{-ms-flex-order:0;order:0;margin-bottom:.375rem}.fc-toolbar .fc-right{-ms-flex-order:2;order:2}}.fc-day-number{font-size:20px;font-weight:300;padding-right:10px}.fc-color-picker{list-style:none;margin:0;padding:0}.fc-color-picker>li{float:left;font-size:30px;line-height:30px;margin-right:5px}.fc-color-picker>li .fa,.fc-color-picker>li .fab,.fc-color-picker>li .far,.fc-color-picker>li .fas,.fc-color-picker>li .glyphicon,.fc-color-picker>li .ion{transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear}.fc-color-picker>li .fa:hover,.fc-color-picker>li .fab:hover,.fc-color-picker>li .far:hover,.fc-color-picker>li .fas:hover,.fc-color-picker>li .glyphicon:hover,.fc-color-picker>li .ion:hover{-webkit-transform:rotate(30deg);transform:rotate(30deg)}#add-new-event{transition:all .3s linear}.external-event{box-shadow:0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2);border-radius:.25rem;cursor:move;font-weight:700;margin-bottom:4px;padding:5px 10px}.external-event:hover{box-shadow:inset 0 0 90px rgba(0,0,0,.2)}.select2-container--default .select2-selection--single{border:1px solid #ced4da;padding:.46875rem .75rem;height:calc(2.25rem + 2px)}.select2-container--default.select2-container--open .select2-selection--single{border-color:#80bdff}.select2-container--default .select2-dropdown{border:1px solid #ced4da}.select2-container--default .select2-results__option{padding:6px 12px;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}.select2-container--default .select2-selection--single .select2-selection__rendered{padding-left:0;height:auto;margin-top:-3px}.select2-container--default[dir=rtl] .select2-selection--single .select2-selection__rendered{padding-right:6px;padding-left:20px}.select2-container--default .select2-selection--single .select2-selection__arrow{height:31px;right:6px}.select2-container--default .select2-selection--single .select2-selection__arrow b{margin-top:0}.select2-container--default .select2-dropdown .select2-search__field,.select2-container--default .select2-search--inline .select2-search__field{border:1px solid #ced4da}.select2-container--default .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-search--inline .select2-search__field:focus{outline:0;border:1px solid #80bdff}.select2-container--default .select2-dropdown.select2-dropdown--below{border-top:0}.select2-container--default .select2-dropdown.select2-dropdown--above{border-bottom:0}.select2-container--default .select2-results__option[aria-disabled=true]{color:#6c757d}.select2-container--default .select2-results__option[aria-selected=true]{background-color:#dee2e6}.select2-container--default .select2-results__option[aria-selected=true],.select2-container--default .select2-results__option[aria-selected=true]:hover{color:#1f2d3d}.select2-container--default .select2-results__option--highlighted{background-color:#007bff;color:#fff}.select2-container--default .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#0074f0;color:#fff}.select2-container--default .select2-selection--multiple{border:1px solid #ced4da;min-height:calc(2.25rem + 2px)}.select2-container--default .select2-selection--multiple:focus{border-color:#80bdff}.select2-container--default .select2-selection--multiple .select2-selection__rendered{padding:0 .375rem .375rem;margin-bottom:-.375rem}.select2-container--default .select2-selection--multiple .select2-selection__rendered li:first-child.select2-search.select2-search--inline{width:100%;margin-left:.375rem}.select2-container--default .select2-selection--multiple .select2-selection__rendered li:first-child.select2-search.select2-search--inline .select2-search__field{width:100%!important}.select2-container--default .select2-selection--multiple .select2-selection__rendered .select2-search.select2-search--inline .select2-search__field{border:0;margin-top:6px}.select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#007bff;border-color:#006fe6;color:#fff;padding:0 10px;margin-top:.31rem}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7);float:right;margin-left:5px;margin-right:-2px}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-selection--multiple.text-sm .select2-search.select2-search--inline .select2-search__field,.text-sm .select2-container--default .select2-selection--multiple .select2-search.select2-search--inline .select2-search__field{margin-top:8px}.select2-container--default .select2-selection--multiple.text-sm .select2-selection__choice,.text-sm .select2-container--default .select2-selection--multiple .select2-selection__choice{margin-top:.4rem}.select2-container--default.select2-container--focus .select2-selection--multiple,.select2-container--default.select2-container--focus .select2-selection--single{border-color:#80bdff}.select2-container--default.select2-container--focus .select2-search__field{border:0}.select2-container--default .select2-selection--single .select2-selection__rendered li{padding-right:10px}.input-group-prepend~.select2-container--default .select2-selection{border-bottom-left-radius:0;border-top-left-radius:0}.input-group>.select2-container--default:not(:last-child) .select2-selection{border-bottom-right-radius:0;border-top-right-radius:0}.select2-container--bootstrap4.select2-container--focus .select2-selection{box-shadow:none}select.form-control-sm~.select2-container--default{font-size:.875rem}.text-sm .select2-container--default .select2-selection--single,select.form-control-sm~.select2-container--default .select2-selection--single{height:calc(1.8125rem + 2px)}.text-sm .select2-container--default .select2-selection--single .select2-selection__rendered,select.form-control-sm~.select2-container--default .select2-selection--single .select2-selection__rendered{margin-top:-.4rem}.text-sm .select2-container--default .select2-selection--single .select2-selection__arrow,select.form-control-sm~.select2-container--default .select2-selection--single .select2-selection__arrow{top:-.12rem}.text-sm .select2-container--default .select2-selection--multiple,select.form-control-sm~.select2-container--default .select2-selection--multiple{min-height:calc(1.8125rem + 2px)}.text-sm .select2-container--default .select2-selection--multiple .select2-selection__rendered,select.form-control-sm~.select2-container--default .select2-selection--multiple .select2-selection__rendered{padding:0 .25rem .25rem;margin-top:-.1rem}.text-sm .select2-container--default .select2-selection--multiple .select2-selection__rendered li:first-child.select2-search.select2-search--inline,select.form-control-sm~.select2-container--default .select2-selection--multiple .select2-selection__rendered li:first-child.select2-search.select2-search--inline{margin-left:.25rem}.text-sm .select2-container--default .select2-selection--multiple .select2-selection__rendered .select2-search.select2-search--inline .select2-search__field,select.form-control-sm~.select2-container--default .select2-selection--multiple .select2-selection__rendered .select2-search.select2-search--inline .select2-search__field{margin-top:6px}.maximized-card .select2-dropdown{z-index:9999}.select2-primary+.select2-container--default.select2-container--focus .select2-selection--single,.select2-primary+.select2-container--default.select2-container--open .select2-selection--single{border-color:#80bdff}.select2-container--default .select2-primary.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-primary .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-primary .select2-search--inline .select2-search__field:focus,.select2-primary .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-primary .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-primary .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #80bdff}.select2-container--default .select2-primary .select2-results__option--highlighted,.select2-primary .select2-container--default .select2-results__option--highlighted{background-color:#007bff;color:#fff}.select2-container--default .select2-primary .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-primary .select2-results__option--highlighted[aria-selected]:hover,.select2-primary .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-primary .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#0074f0;color:#fff}.select2-container--default .select2-primary .select2-selection--multiple:focus,.select2-primary .select2-container--default .select2-selection--multiple:focus{border-color:#80bdff}.select2-container--default .select2-primary .select2-selection--multiple .select2-selection__choice,.select2-primary .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#007bff;border-color:#006fe6;color:#fff}.select2-container--default .select2-primary .select2-selection--multiple .select2-selection__choice__remove,.select2-primary .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-primary .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-primary .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-primary.select2-container--focus .select2-selection--multiple,.select2-primary .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#80bdff}.select2-secondary+.select2-container--default.select2-container--focus .select2-selection--single,.select2-secondary+.select2-container--default.select2-container--open .select2-selection--single{border-color:#afb5ba}.select2-container--default .select2-secondary.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-secondary .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-secondary .select2-search--inline .select2-search__field:focus,.select2-secondary .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-secondary .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-secondary .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #afb5ba}.select2-container--default .select2-secondary .select2-results__option--highlighted,.select2-secondary .select2-container--default .select2-results__option--highlighted{background-color:#6c757d;color:#fff}.select2-container--default .select2-secondary .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-secondary .select2-results__option--highlighted[aria-selected]:hover,.select2-secondary .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-secondary .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#656d75;color:#fff}.select2-container--default .select2-secondary .select2-selection--multiple:focus,.select2-secondary .select2-container--default .select2-selection--multiple:focus{border-color:#afb5ba}.select2-container--default .select2-secondary .select2-selection--multiple .select2-selection__choice,.select2-secondary .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#6c757d;border-color:#60686f;color:#fff}.select2-container--default .select2-secondary .select2-selection--multiple .select2-selection__choice__remove,.select2-secondary .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-secondary .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-secondary .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-secondary.select2-container--focus .select2-selection--multiple,.select2-secondary .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#afb5ba}.select2-success+.select2-container--default.select2-container--focus .select2-selection--single,.select2-success+.select2-container--default.select2-container--open .select2-selection--single{border-color:#71dd8a}.select2-container--default .select2-success.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-success .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-success .select2-search--inline .select2-search__field:focus,.select2-success .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-success .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-success .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #71dd8a}.select2-container--default .select2-success .select2-results__option--highlighted,.select2-success .select2-container--default .select2-results__option--highlighted{background-color:#28a745;color:#fff}.select2-container--default .select2-success .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-success .select2-results__option--highlighted[aria-selected]:hover,.select2-success .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-success .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#259b40;color:#fff}.select2-container--default .select2-success .select2-selection--multiple:focus,.select2-success .select2-container--default .select2-selection--multiple:focus{border-color:#71dd8a}.select2-container--default .select2-success .select2-selection--multiple .select2-selection__choice,.select2-success .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#28a745;border-color:#23923d;color:#fff}.select2-container--default .select2-success .select2-selection--multiple .select2-selection__choice__remove,.select2-success .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-success .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-success .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-success.select2-container--focus .select2-selection--multiple,.select2-success .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#71dd8a}.select2-info+.select2-container--default.select2-container--focus .select2-selection--single,.select2-info+.select2-container--default.select2-container--open .select2-selection--single{border-color:#63d9ec}.select2-container--default .select2-info.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-info .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-info .select2-search--inline .select2-search__field:focus,.select2-info .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-info .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-info .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #63d9ec}.select2-container--default .select2-info .select2-results__option--highlighted,.select2-info .select2-container--default .select2-results__option--highlighted{background-color:#17a2b8;color:#fff}.select2-container--default .select2-info .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-info .select2-results__option--highlighted[aria-selected]:hover,.select2-info .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-info .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#1596aa;color:#fff}.select2-container--default .select2-info .select2-selection--multiple:focus,.select2-info .select2-container--default .select2-selection--multiple:focus{border-color:#63d9ec}.select2-container--default .select2-info .select2-selection--multiple .select2-selection__choice,.select2-info .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#17a2b8;border-color:#148ea1;color:#fff}.select2-container--default .select2-info .select2-selection--multiple .select2-selection__choice__remove,.select2-info .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-info .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-info .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-info.select2-container--focus .select2-selection--multiple,.select2-info .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#63d9ec}.select2-warning+.select2-container--default.select2-container--focus .select2-selection--single,.select2-warning+.select2-container--default.select2-container--open .select2-selection--single{border-color:#ffe187}.select2-container--default .select2-warning.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-warning .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-warning .select2-search--inline .select2-search__field:focus,.select2-warning .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-warning .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-warning .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #ffe187}.select2-container--default .select2-warning .select2-results__option--highlighted,.select2-warning .select2-container--default .select2-results__option--highlighted{background-color:#ffc107;color:#1f2d3d}.select2-container--default .select2-warning .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-warning .select2-results__option--highlighted[aria-selected]:hover,.select2-warning .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-warning .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#f7b900;color:#1f2d3d}.select2-container--default .select2-warning .select2-selection--multiple:focus,.select2-warning .select2-container--default .select2-selection--multiple:focus{border-color:#ffe187}.select2-container--default .select2-warning .select2-selection--multiple .select2-selection__choice,.select2-warning .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#ffc107;border-color:#edb100;color:#1f2d3d}.select2-container--default .select2-warning .select2-selection--multiple .select2-selection__choice__remove,.select2-warning .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:rgba(31,45,61,.7)}.select2-container--default .select2-warning .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-warning .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#1f2d3d}.select2-container--default .select2-warning.select2-container--focus .select2-selection--multiple,.select2-warning .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#ffe187}.select2-danger+.select2-container--default.select2-container--focus .select2-selection--single,.select2-danger+.select2-container--default.select2-container--open .select2-selection--single{border-color:#efa2a9}.select2-container--default .select2-danger.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-danger .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-danger .select2-search--inline .select2-search__field:focus,.select2-danger .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-danger .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-danger .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #efa2a9}.select2-container--default .select2-danger .select2-results__option--highlighted,.select2-danger .select2-container--default .select2-results__option--highlighted{background-color:#dc3545;color:#fff}.select2-container--default .select2-danger .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-danger .select2-results__option--highlighted[aria-selected]:hover,.select2-danger .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-danger .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#da2839;color:#fff}.select2-container--default .select2-danger .select2-selection--multiple:focus,.select2-danger .select2-container--default .select2-selection--multiple:focus{border-color:#efa2a9}.select2-container--default .select2-danger .select2-selection--multiple .select2-selection__choice,.select2-danger .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#dc3545;border-color:#d32535;color:#fff}.select2-container--default .select2-danger .select2-selection--multiple .select2-selection__choice__remove,.select2-danger .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-danger .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-danger .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-danger.select2-container--focus .select2-selection--multiple,.select2-danger .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#efa2a9}.select2-light+.select2-container--default.select2-container--focus .select2-selection--single,.select2-light+.select2-container--default.select2-container--open .select2-selection--single{border-color:#fff}.select2-container--default .select2-light.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-light .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-light .select2-search--inline .select2-search__field:focus,.select2-light .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-light .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-light .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #fff}.select2-container--default .select2-light .select2-results__option--highlighted,.select2-light .select2-container--default .select2-results__option--highlighted{background-color:#f8f9fa;color:#1f2d3d}.select2-container--default .select2-light .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-light .select2-results__option--highlighted[aria-selected]:hover,.select2-light .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-light .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#eff1f4;color:#1f2d3d}.select2-container--default .select2-light .select2-selection--multiple:focus,.select2-light .select2-container--default .select2-selection--multiple:focus{border-color:#fff}.select2-container--default .select2-light .select2-selection--multiple .select2-selection__choice,.select2-light .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#f8f9fa;border-color:#e9ecef;color:#1f2d3d}.select2-container--default .select2-light .select2-selection--multiple .select2-selection__choice__remove,.select2-light .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:rgba(31,45,61,.7)}.select2-container--default .select2-light .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-light .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#1f2d3d}.select2-container--default .select2-light.select2-container--focus .select2-selection--multiple,.select2-light .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#fff}.select2-dark+.select2-container--default.select2-container--focus .select2-selection--single,.select2-dark+.select2-container--default.select2-container--open .select2-selection--single{border-color:#6d7a86}.select2-container--default .select2-dark.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-dark .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-dark .select2-search--inline .select2-search__field:focus,.select2-dark .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-dark .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-dark .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #6d7a86}.select2-container--default .select2-dark .select2-results__option--highlighted,.select2-dark .select2-container--default .select2-results__option--highlighted{background-color:#343a40;color:#fff}.select2-container--default .select2-dark .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-dark .select2-results__option--highlighted[aria-selected]:hover,.select2-dark .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-dark .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#2d3238;color:#fff}.select2-container--default .select2-dark .select2-selection--multiple:focus,.select2-dark .select2-container--default .select2-selection--multiple:focus{border-color:#6d7a86}.select2-container--default .select2-dark .select2-selection--multiple .select2-selection__choice,.select2-dark .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#343a40;border-color:#292d32;color:#fff}.select2-container--default .select2-dark .select2-selection--multiple .select2-selection__choice__remove,.select2-dark .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-dark .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-dark .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-dark.select2-container--focus .select2-selection--multiple,.select2-dark .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#6d7a86}.select2-lightblue+.select2-container--default.select2-container--focus .select2-selection--single,.select2-lightblue+.select2-container--default.select2-container--open .select2-selection--single{border-color:#99c5de}.select2-container--default .select2-lightblue.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-lightblue .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-lightblue .select2-search--inline .select2-search__field:focus,.select2-lightblue .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-lightblue .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-lightblue .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #99c5de}.select2-container--default .select2-lightblue .select2-results__option--highlighted,.select2-lightblue .select2-container--default .select2-results__option--highlighted{background-color:#3c8dbc;color:#fff}.select2-container--default .select2-lightblue .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-lightblue .select2-results__option--highlighted[aria-selected]:hover,.select2-lightblue .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-lightblue .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#3884b0;color:#fff}.select2-container--default .select2-lightblue .select2-selection--multiple:focus,.select2-lightblue .select2-container--default .select2-selection--multiple:focus{border-color:#99c5de}.select2-container--default .select2-lightblue .select2-selection--multiple .select2-selection__choice,.select2-lightblue .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#3c8dbc;border-color:#367fa9;color:#fff}.select2-container--default .select2-lightblue .select2-selection--multiple .select2-selection__choice__remove,.select2-lightblue .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-lightblue .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-lightblue .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-lightblue.select2-container--focus .select2-selection--multiple,.select2-lightblue .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#99c5de}.select2-navy+.select2-container--default.select2-container--focus .select2-selection--single,.select2-navy+.select2-container--default.select2-container--open .select2-selection--single{border-color:#005ebf}.select2-container--default .select2-navy.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-navy .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-navy .select2-search--inline .select2-search__field:focus,.select2-navy .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-navy .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-navy .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #005ebf}.select2-container--default .select2-navy .select2-results__option--highlighted,.select2-navy .select2-container--default .select2-results__option--highlighted{background-color:#001f3f;color:#fff}.select2-container--default .select2-navy .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-navy .select2-results__option--highlighted[aria-selected]:hover,.select2-navy .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-navy .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#001730;color:#fff}.select2-container--default .select2-navy .select2-selection--multiple:focus,.select2-navy .select2-container--default .select2-selection--multiple:focus{border-color:#005ebf}.select2-container--default .select2-navy .select2-selection--multiple .select2-selection__choice,.select2-navy .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#001f3f;border-color:#001226;color:#fff}.select2-container--default .select2-navy .select2-selection--multiple .select2-selection__choice__remove,.select2-navy .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-navy .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-navy .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-navy.select2-container--focus .select2-selection--multiple,.select2-navy .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#005ebf}.select2-olive+.select2-container--default.select2-container--focus .select2-selection--single,.select2-olive+.select2-container--default.select2-container--open .select2-selection--single{border-color:#87cfaf}.select2-container--default .select2-olive.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-olive .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-olive .select2-search--inline .select2-search__field:focus,.select2-olive .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-olive .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-olive .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #87cfaf}.select2-container--default .select2-olive .select2-results__option--highlighted,.select2-olive .select2-container--default .select2-results__option--highlighted{background-color:#3d9970;color:#fff}.select2-container--default .select2-olive .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-olive .select2-results__option--highlighted[aria-selected]:hover,.select2-olive .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-olive .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#398e68;color:#fff}.select2-container--default .select2-olive .select2-selection--multiple:focus,.select2-olive .select2-container--default .select2-selection--multiple:focus{border-color:#87cfaf}.select2-container--default .select2-olive .select2-selection--multiple .select2-selection__choice,.select2-olive .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#3d9970;border-color:#368763;color:#fff}.select2-container--default .select2-olive .select2-selection--multiple .select2-selection__choice__remove,.select2-olive .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-olive .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-olive .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-olive.select2-container--focus .select2-selection--multiple,.select2-olive .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#87cfaf}.select2-lime+.select2-container--default.select2-container--focus .select2-selection--single,.select2-lime+.select2-container--default.select2-container--open .select2-selection--single{border-color:#81ffb8}.select2-container--default .select2-lime.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-lime .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-lime .select2-search--inline .select2-search__field:focus,.select2-lime .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-lime .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-lime .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #81ffb8}.select2-container--default .select2-lime .select2-results__option--highlighted,.select2-lime .select2-container--default .select2-results__option--highlighted{background-color:#01ff70;color:#1f2d3d}.select2-container--default .select2-lime .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-lime .select2-results__option--highlighted[aria-selected]:hover,.select2-lime .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-lime .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#00f169;color:#1f2d3d}.select2-container--default .select2-lime .select2-selection--multiple:focus,.select2-lime .select2-container--default .select2-selection--multiple:focus{border-color:#81ffb8}.select2-container--default .select2-lime .select2-selection--multiple .select2-selection__choice,.select2-lime .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#01ff70;border-color:#00e765;color:#1f2d3d}.select2-container--default .select2-lime .select2-selection--multiple .select2-selection__choice__remove,.select2-lime .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:rgba(31,45,61,.7)}.select2-container--default .select2-lime .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-lime .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#1f2d3d}.select2-container--default .select2-lime.select2-container--focus .select2-selection--multiple,.select2-lime .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#81ffb8}.select2-fuchsia+.select2-container--default.select2-container--focus .select2-selection--single,.select2-fuchsia+.select2-container--default.select2-container--open .select2-selection--single{border-color:#f88adf}.select2-container--default .select2-fuchsia.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-fuchsia .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-fuchsia .select2-search--inline .select2-search__field:focus,.select2-fuchsia .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-fuchsia .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-fuchsia .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #f88adf}.select2-container--default .select2-fuchsia .select2-results__option--highlighted,.select2-fuchsia .select2-container--default .select2-results__option--highlighted{background-color:#f012be;color:#fff}.select2-container--default .select2-fuchsia .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-fuchsia .select2-results__option--highlighted[aria-selected]:hover,.select2-fuchsia .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-fuchsia .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#e40eb4;color:#fff}.select2-container--default .select2-fuchsia .select2-selection--multiple:focus,.select2-fuchsia .select2-container--default .select2-selection--multiple:focus{border-color:#f88adf}.select2-container--default .select2-fuchsia .select2-selection--multiple .select2-selection__choice,.select2-fuchsia .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#f012be;border-color:#db0ead;color:#fff}.select2-container--default .select2-fuchsia .select2-selection--multiple .select2-selection__choice__remove,.select2-fuchsia .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-fuchsia .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-fuchsia .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-fuchsia.select2-container--focus .select2-selection--multiple,.select2-fuchsia .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#f88adf}.select2-maroon+.select2-container--default.select2-container--focus .select2-selection--single,.select2-maroon+.select2-container--default.select2-container--open .select2-selection--single{border-color:#f083ab}.select2-container--default .select2-maroon.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-maroon .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-maroon .select2-search--inline .select2-search__field:focus,.select2-maroon .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-maroon .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-maroon .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #f083ab}.select2-container--default .select2-maroon .select2-results__option--highlighted,.select2-maroon .select2-container--default .select2-results__option--highlighted{background-color:#d81b60;color:#fff}.select2-container--default .select2-maroon .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-maroon .select2-results__option--highlighted[aria-selected]:hover,.select2-maroon .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-maroon .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#ca195a;color:#fff}.select2-container--default .select2-maroon .select2-selection--multiple:focus,.select2-maroon .select2-container--default .select2-selection--multiple:focus{border-color:#f083ab}.select2-container--default .select2-maroon .select2-selection--multiple .select2-selection__choice,.select2-maroon .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#d81b60;border-color:#c11856;color:#fff}.select2-container--default .select2-maroon .select2-selection--multiple .select2-selection__choice__remove,.select2-maroon .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-maroon .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-maroon .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-maroon.select2-container--focus .select2-selection--multiple,.select2-maroon .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#f083ab}.select2-blue+.select2-container--default.select2-container--focus .select2-selection--single,.select2-blue+.select2-container--default.select2-container--open .select2-selection--single{border-color:#80bdff}.select2-blue .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-blue .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-blue .select2-container--default .select2-search--inline .select2-search__field:focus,.select2-container--default .select2-blue.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-blue .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-blue .select2-search--inline .select2-search__field:focus{border:1px solid #80bdff}.select2-blue .select2-container--default .select2-results__option--highlighted,.select2-container--default .select2-blue .select2-results__option--highlighted{background-color:#007bff;color:#fff}.select2-blue .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-blue .select2-container--default .select2-results__option--highlighted[aria-selected]:hover,.select2-container--default .select2-blue .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-blue .select2-results__option--highlighted[aria-selected]:hover{background-color:#0074f0;color:#fff}.select2-blue .select2-container--default .select2-selection--multiple:focus,.select2-container--default .select2-blue .select2-selection--multiple:focus{border-color:#80bdff}.select2-blue .select2-container--default .select2-selection--multiple .select2-selection__choice,.select2-container--default .select2-blue .select2-selection--multiple .select2-selection__choice{background-color:#007bff;border-color:#006fe6;color:#fff}.select2-blue .select2-container--default .select2-selection--multiple .select2-selection__choice__remove,.select2-container--default .select2-blue .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-blue .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-container--default .select2-blue .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-blue .select2-container--default.select2-container--focus .select2-selection--multiple,.select2-container--default .select2-blue.select2-container--focus .select2-selection--multiple{border-color:#80bdff}.select2-indigo+.select2-container--default.select2-container--focus .select2-selection--single,.select2-indigo+.select2-container--default.select2-container--open .select2-selection--single{border-color:#b389f9}.select2-container--default .select2-indigo.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-indigo .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-indigo .select2-search--inline .select2-search__field:focus,.select2-indigo .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-indigo .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-indigo .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #b389f9}.select2-container--default .select2-indigo .select2-results__option--highlighted,.select2-indigo .select2-container--default .select2-results__option--highlighted{background-color:#6610f2;color:#fff}.select2-container--default .select2-indigo .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-indigo .select2-results__option--highlighted[aria-selected]:hover,.select2-indigo .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-indigo .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#5f0de6;color:#fff}.select2-container--default .select2-indigo .select2-selection--multiple:focus,.select2-indigo .select2-container--default .select2-selection--multiple:focus{border-color:#b389f9}.select2-container--default .select2-indigo .select2-selection--multiple .select2-selection__choice,.select2-indigo .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#6610f2;border-color:#5b0cdd;color:#fff}.select2-container--default .select2-indigo .select2-selection--multiple .select2-selection__choice__remove,.select2-indigo .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-indigo .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-indigo .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-indigo.select2-container--focus .select2-selection--multiple,.select2-indigo .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#b389f9}.select2-purple+.select2-container--default.select2-container--focus .select2-selection--single,.select2-purple+.select2-container--default.select2-container--open .select2-selection--single{border-color:#b8a2e0}.select2-container--default .select2-purple.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-purple .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-purple .select2-search--inline .select2-search__field:focus,.select2-purple .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-purple .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-purple .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #b8a2e0}.select2-container--default .select2-purple .select2-results__option--highlighted,.select2-purple .select2-container--default .select2-results__option--highlighted{background-color:#6f42c1;color:#fff}.select2-container--default .select2-purple .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-purple .select2-results__option--highlighted[aria-selected]:hover,.select2-purple .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-purple .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#683cb8;color:#fff}.select2-container--default .select2-purple .select2-selection--multiple:focus,.select2-purple .select2-container--default .select2-selection--multiple:focus{border-color:#b8a2e0}.select2-container--default .select2-purple .select2-selection--multiple .select2-selection__choice,.select2-purple .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#6f42c1;border-color:#643ab0;color:#fff}.select2-container--default .select2-purple .select2-selection--multiple .select2-selection__choice__remove,.select2-purple .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-purple .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-purple .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-purple.select2-container--focus .select2-selection--multiple,.select2-purple .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#b8a2e0}.select2-pink+.select2-container--default.select2-container--focus .select2-selection--single,.select2-pink+.select2-container--default.select2-container--open .select2-selection--single{border-color:#f6b0d0}.select2-container--default .select2-pink.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-pink .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-pink .select2-search--inline .select2-search__field:focus,.select2-pink .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-pink .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-pink .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #f6b0d0}.select2-container--default .select2-pink .select2-results__option--highlighted,.select2-pink .select2-container--default .select2-results__option--highlighted{background-color:#e83e8c;color:#fff}.select2-container--default .select2-pink .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-pink .select2-results__option--highlighted[aria-selected]:hover,.select2-pink .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-pink .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#e63084;color:#fff}.select2-container--default .select2-pink .select2-selection--multiple:focus,.select2-pink .select2-container--default .select2-selection--multiple:focus{border-color:#f6b0d0}.select2-container--default .select2-pink .select2-selection--multiple .select2-selection__choice,.select2-pink .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#e83e8c;border-color:#e5277e;color:#fff}.select2-container--default .select2-pink .select2-selection--multiple .select2-selection__choice__remove,.select2-pink .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-pink .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-pink .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-pink.select2-container--focus .select2-selection--multiple,.select2-pink .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#f6b0d0}.select2-red+.select2-container--default.select2-container--focus .select2-selection--single,.select2-red+.select2-container--default.select2-container--open .select2-selection--single{border-color:#efa2a9}.select2-container--default .select2-red.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-red .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-red .select2-search--inline .select2-search__field:focus,.select2-red .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-red .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-red .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #efa2a9}.select2-container--default .select2-red .select2-results__option--highlighted,.select2-red .select2-container--default .select2-results__option--highlighted{background-color:#dc3545;color:#fff}.select2-container--default .select2-red .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-red .select2-results__option--highlighted[aria-selected]:hover,.select2-red .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-red .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#da2839;color:#fff}.select2-container--default .select2-red .select2-selection--multiple:focus,.select2-red .select2-container--default .select2-selection--multiple:focus{border-color:#efa2a9}.select2-container--default .select2-red .select2-selection--multiple .select2-selection__choice,.select2-red .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#dc3545;border-color:#d32535;color:#fff}.select2-container--default .select2-red .select2-selection--multiple .select2-selection__choice__remove,.select2-red .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-red .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-red .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-red.select2-container--focus .select2-selection--multiple,.select2-red .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#efa2a9}.select2-orange+.select2-container--default.select2-container--focus .select2-selection--single,.select2-orange+.select2-container--default.select2-container--open .select2-selection--single{border-color:#fec392}.select2-container--default .select2-orange.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-orange .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-orange .select2-search--inline .select2-search__field:focus,.select2-orange .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-orange .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-orange .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #fec392}.select2-container--default .select2-orange .select2-results__option--highlighted,.select2-orange .select2-container--default .select2-results__option--highlighted{background-color:#fd7e14;color:#1f2d3d}.select2-container--default .select2-orange .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-orange .select2-results__option--highlighted[aria-selected]:hover,.select2-orange .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-orange .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#fd7605;color:#fff}.select2-container--default .select2-orange .select2-selection--multiple:focus,.select2-orange .select2-container--default .select2-selection--multiple:focus{border-color:#fec392}.select2-container--default .select2-orange .select2-selection--multiple .select2-selection__choice,.select2-orange .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#fd7e14;border-color:#f57102;color:#1f2d3d}.select2-container--default .select2-orange .select2-selection--multiple .select2-selection__choice__remove,.select2-orange .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:rgba(31,45,61,.7)}.select2-container--default .select2-orange .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-orange .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#1f2d3d}.select2-container--default .select2-orange.select2-container--focus .select2-selection--multiple,.select2-orange .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#fec392}.select2-yellow+.select2-container--default.select2-container--focus .select2-selection--single,.select2-yellow+.select2-container--default.select2-container--open .select2-selection--single{border-color:#ffe187}.select2-container--default .select2-yellow.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-yellow .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-yellow .select2-search--inline .select2-search__field:focus,.select2-yellow .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-yellow .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-yellow .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #ffe187}.select2-container--default .select2-yellow .select2-results__option--highlighted,.select2-yellow .select2-container--default .select2-results__option--highlighted{background-color:#ffc107;color:#1f2d3d}.select2-container--default .select2-yellow .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-yellow .select2-results__option--highlighted[aria-selected]:hover,.select2-yellow .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-yellow .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#f7b900;color:#1f2d3d}.select2-container--default .select2-yellow .select2-selection--multiple:focus,.select2-yellow .select2-container--default .select2-selection--multiple:focus{border-color:#ffe187}.select2-container--default .select2-yellow .select2-selection--multiple .select2-selection__choice,.select2-yellow .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#ffc107;border-color:#edb100;color:#1f2d3d}.select2-container--default .select2-yellow .select2-selection--multiple .select2-selection__choice__remove,.select2-yellow .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:rgba(31,45,61,.7)}.select2-container--default .select2-yellow .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-yellow .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#1f2d3d}.select2-container--default .select2-yellow.select2-container--focus .select2-selection--multiple,.select2-yellow .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#ffe187}.select2-green+.select2-container--default.select2-container--focus .select2-selection--single,.select2-green+.select2-container--default.select2-container--open .select2-selection--single{border-color:#71dd8a}.select2-container--default .select2-green.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-green .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-green .select2-search--inline .select2-search__field:focus,.select2-green .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-green .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-green .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #71dd8a}.select2-container--default .select2-green .select2-results__option--highlighted,.select2-green .select2-container--default .select2-results__option--highlighted{background-color:#28a745;color:#fff}.select2-container--default .select2-green .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-green .select2-results__option--highlighted[aria-selected]:hover,.select2-green .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-green .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#259b40;color:#fff}.select2-container--default .select2-green .select2-selection--multiple:focus,.select2-green .select2-container--default .select2-selection--multiple:focus{border-color:#71dd8a}.select2-container--default .select2-green .select2-selection--multiple .select2-selection__choice,.select2-green .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#28a745;border-color:#23923d;color:#fff}.select2-container--default .select2-green .select2-selection--multiple .select2-selection__choice__remove,.select2-green .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-green .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-green .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-green.select2-container--focus .select2-selection--multiple,.select2-green .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#71dd8a}.select2-teal+.select2-container--default.select2-container--focus .select2-selection--single,.select2-teal+.select2-container--default.select2-container--open .select2-selection--single{border-color:#7eeaca}.select2-container--default .select2-teal.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-teal .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-teal .select2-search--inline .select2-search__field:focus,.select2-teal .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-teal .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-teal .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #7eeaca}.select2-container--default .select2-teal .select2-results__option--highlighted,.select2-teal .select2-container--default .select2-results__option--highlighted{background-color:#20c997;color:#fff}.select2-container--default .select2-teal .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-teal .select2-results__option--highlighted[aria-selected]:hover,.select2-teal .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-teal .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#1ebc8d;color:#fff}.select2-container--default .select2-teal .select2-selection--multiple:focus,.select2-teal .select2-container--default .select2-selection--multiple:focus{border-color:#7eeaca}.select2-container--default .select2-teal .select2-selection--multiple .select2-selection__choice,.select2-teal .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#20c997;border-color:#1cb386;color:#fff}.select2-container--default .select2-teal .select2-selection--multiple .select2-selection__choice__remove,.select2-teal .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-teal .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-teal .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-teal.select2-container--focus .select2-selection--multiple,.select2-teal .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#7eeaca}.select2-cyan+.select2-container--default.select2-container--focus .select2-selection--single,.select2-cyan+.select2-container--default.select2-container--open .select2-selection--single{border-color:#63d9ec}.select2-container--default .select2-cyan.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-cyan .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-cyan .select2-search--inline .select2-search__field:focus,.select2-cyan .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-cyan .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-cyan .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #63d9ec}.select2-container--default .select2-cyan .select2-results__option--highlighted,.select2-cyan .select2-container--default .select2-results__option--highlighted{background-color:#17a2b8;color:#fff}.select2-container--default .select2-cyan .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-cyan .select2-results__option--highlighted[aria-selected]:hover,.select2-cyan .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-cyan .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#1596aa;color:#fff}.select2-container--default .select2-cyan .select2-selection--multiple:focus,.select2-cyan .select2-container--default .select2-selection--multiple:focus{border-color:#63d9ec}.select2-container--default .select2-cyan .select2-selection--multiple .select2-selection__choice,.select2-cyan .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#17a2b8;border-color:#148ea1;color:#fff}.select2-container--default .select2-cyan .select2-selection--multiple .select2-selection__choice__remove,.select2-cyan .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-cyan .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-cyan .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-cyan.select2-container--focus .select2-selection--multiple,.select2-cyan .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#63d9ec}.select2-white+.select2-container--default.select2-container--focus .select2-selection--single,.select2-white+.select2-container--default.select2-container--open .select2-selection--single{border-color:#fff}.select2-container--default .select2-white.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-white .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-white .select2-search--inline .select2-search__field:focus,.select2-white .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-white .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-white .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #fff}.select2-container--default .select2-white .select2-results__option--highlighted,.select2-white .select2-container--default .select2-results__option--highlighted{background-color:#fff;color:#1f2d3d}.select2-container--default .select2-white .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-white .select2-results__option--highlighted[aria-selected]:hover,.select2-white .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-white .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#f7f7f7;color:#1f2d3d}.select2-container--default .select2-white .select2-selection--multiple:focus,.select2-white .select2-container--default .select2-selection--multiple:focus{border-color:#fff}.select2-container--default .select2-white .select2-selection--multiple .select2-selection__choice,.select2-white .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#fff;border-color:#f2f2f2;color:#1f2d3d}.select2-container--default .select2-white .select2-selection--multiple .select2-selection__choice__remove,.select2-white .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:rgba(31,45,61,.7)}.select2-container--default .select2-white .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-white .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#1f2d3d}.select2-container--default .select2-white.select2-container--focus .select2-selection--multiple,.select2-white .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#fff}.select2-gray+.select2-container--default.select2-container--focus .select2-selection--single,.select2-gray+.select2-container--default.select2-container--open .select2-selection--single{border-color:#afb5ba}.select2-container--default .select2-gray.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-gray .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-gray .select2-search--inline .select2-search__field:focus,.select2-gray .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-gray .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-gray .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #afb5ba}.select2-container--default .select2-gray .select2-results__option--highlighted,.select2-gray .select2-container--default .select2-results__option--highlighted{background-color:#6c757d;color:#fff}.select2-container--default .select2-gray .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-gray .select2-results__option--highlighted[aria-selected]:hover,.select2-gray .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-gray .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#656d75;color:#fff}.select2-container--default .select2-gray .select2-selection--multiple:focus,.select2-gray .select2-container--default .select2-selection--multiple:focus{border-color:#afb5ba}.select2-container--default .select2-gray .select2-selection--multiple .select2-selection__choice,.select2-gray .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#6c757d;border-color:#60686f;color:#fff}.select2-container--default .select2-gray .select2-selection--multiple .select2-selection__choice__remove,.select2-gray .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-gray .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-gray .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-gray.select2-container--focus .select2-selection--multiple,.select2-gray .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#afb5ba}.select2-gray-dark+.select2-container--default.select2-container--focus .select2-selection--single,.select2-gray-dark+.select2-container--default.select2-container--open .select2-selection--single{border-color:#6d7a86}.select2-container--default .select2-gray-dark.select2-dropdown .select2-search__field:focus,.select2-container--default .select2-gray-dark .select2-dropdown .select2-search__field:focus,.select2-container--default .select2-gray-dark .select2-search--inline .select2-search__field:focus,.select2-gray-dark .select2-container--default.select2-dropdown .select2-search__field:focus,.select2-gray-dark .select2-container--default .select2-dropdown .select2-search__field:focus,.select2-gray-dark .select2-container--default .select2-search--inline .select2-search__field:focus{border:1px solid #6d7a86}.select2-container--default .select2-gray-dark .select2-results__option--highlighted,.select2-gray-dark .select2-container--default .select2-results__option--highlighted{background-color:#343a40;color:#fff}.select2-container--default .select2-gray-dark .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-gray-dark .select2-results__option--highlighted[aria-selected]:hover,.select2-gray-dark .select2-container--default .select2-results__option--highlighted[aria-selected],.select2-gray-dark .select2-container--default .select2-results__option--highlighted[aria-selected]:hover{background-color:#2d3238;color:#fff}.select2-container--default .select2-gray-dark .select2-selection--multiple:focus,.select2-gray-dark .select2-container--default .select2-selection--multiple:focus{border-color:#6d7a86}.select2-container--default .select2-gray-dark .select2-selection--multiple .select2-selection__choice,.select2-gray-dark .select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#343a40;border-color:#292d32;color:#fff}.select2-container--default .select2-gray-dark .select2-selection--multiple .select2-selection__choice__remove,.select2-gray-dark .select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:hsla(0,0%,100%,.7)}.select2-container--default .select2-gray-dark .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-gray-dark .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#fff}.select2-container--default .select2-gray-dark.select2-container--focus .select2-selection--multiple,.select2-gray-dark .select2-container--default.select2-container--focus .select2-selection--multiple{border-color:#6d7a86}.slider .tooltip.in{opacity:.9}.slider.slider-vertical{height:100%}.slider.slider-horizontal{width:100%}.slider-primary .slider .slider-selection{background:#007bff}.slider-secondary .slider .slider-selection{background:#6c757d}.slider-success .slider .slider-selection{background:#28a745}.slider-info .slider .slider-selection{background:#17a2b8}.slider-warning .slider .slider-selection{background:#ffc107}.slider-danger .slider .slider-selection{background:#dc3545}.slider-light .slider .slider-selection{background:#f8f9fa}.slider-dark .slider .slider-selection{background:#343a40}.slider-lightblue .slider .slider-selection{background:#3c8dbc}.slider-navy .slider .slider-selection{background:#001f3f}.slider-olive .slider .slider-selection{background:#3d9970}.slider-lime .slider .slider-selection{background:#01ff70}.slider-fuchsia .slider .slider-selection{background:#f012be}.slider-maroon .slider .slider-selection{background:#d81b60}.slider-blue .slider .slider-selection{background:#007bff}.slider-indigo .slider .slider-selection{background:#6610f2}.slider-purple .slider .slider-selection{background:#6f42c1}.slider-pink .slider .slider-selection{background:#e83e8c}.slider-red .slider .slider-selection{background:#dc3545}.slider-orange .slider .slider-selection{background:#fd7e14}.slider-yellow .slider .slider-selection{background:#ffc107}.slider-green .slider .slider-selection{background:#28a745}.slider-teal .slider .slider-selection{background:#20c997}.slider-cyan .slider .slider-selection{background:#17a2b8}.slider-white .slider .slider-selection{background:#fff}.slider-gray .slider .slider-selection{background:#6c757d}.slider-gray-dark .slider .slider-selection{background:#343a40}.icheck-primary>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-primary>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-primary>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-primary>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#007bff}.icheck-primary>input:first-child:checked+input[type=hidden]+label:before,.icheck-primary>input:first-child:checked+label:before{background-color:#007bff;border-color:#007bff}.icheck-secondary>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-secondary>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-secondary>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-secondary>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#6c757d}.icheck-secondary>input:first-child:checked+input[type=hidden]+label:before,.icheck-secondary>input:first-child:checked+label:before{background-color:#6c757d;border-color:#6c757d}.icheck-success>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-success>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-success>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-success>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#28a745}.icheck-success>input:first-child:checked+input[type=hidden]+label:before,.icheck-success>input:first-child:checked+label:before{background-color:#28a745;border-color:#28a745}.icheck-info>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-info>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-info>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-info>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#17a2b8}.icheck-info>input:first-child:checked+input[type=hidden]+label:before,.icheck-info>input:first-child:checked+label:before{background-color:#17a2b8;border-color:#17a2b8}.icheck-warning>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-warning>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-warning>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-warning>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#ffc107}.icheck-warning>input:first-child:checked+input[type=hidden]+label:before,.icheck-warning>input:first-child:checked+label:before{background-color:#ffc107;border-color:#ffc107}.icheck-danger>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-danger>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-danger>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-danger>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#dc3545}.icheck-danger>input:first-child:checked+input[type=hidden]+label:before,.icheck-danger>input:first-child:checked+label:before{background-color:#dc3545;border-color:#dc3545}.icheck-light>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-light>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-light>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-light>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#f8f9fa}.icheck-light>input:first-child:checked+input[type=hidden]+label:before,.icheck-light>input:first-child:checked+label:before{background-color:#f8f9fa;border-color:#f8f9fa}.icheck-dark>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-dark>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-dark>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-dark>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#343a40}.icheck-dark>input:first-child:checked+input[type=hidden]+label:before,.icheck-dark>input:first-child:checked+label:before{background-color:#343a40;border-color:#343a40}.icheck-lightblue>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-lightblue>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-lightblue>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-lightblue>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#3c8dbc}.icheck-lightblue>input:first-child:checked+input[type=hidden]+label:before,.icheck-lightblue>input:first-child:checked+label:before{background-color:#3c8dbc;border-color:#3c8dbc}.icheck-navy>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-navy>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-navy>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-navy>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#001f3f}.icheck-navy>input:first-child:checked+input[type=hidden]+label:before,.icheck-navy>input:first-child:checked+label:before{background-color:#001f3f;border-color:#001f3f}.icheck-olive>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-olive>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-olive>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-olive>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#3d9970}.icheck-olive>input:first-child:checked+input[type=hidden]+label:before,.icheck-olive>input:first-child:checked+label:before{background-color:#3d9970;border-color:#3d9970}.icheck-lime>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-lime>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-lime>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-lime>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#01ff70}.icheck-lime>input:first-child:checked+input[type=hidden]+label:before,.icheck-lime>input:first-child:checked+label:before{background-color:#01ff70;border-color:#01ff70}.icheck-fuchsia>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-fuchsia>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-fuchsia>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-fuchsia>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#f012be}.icheck-fuchsia>input:first-child:checked+input[type=hidden]+label:before,.icheck-fuchsia>input:first-child:checked+label:before{background-color:#f012be;border-color:#f012be}.icheck-maroon>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-maroon>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-maroon>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-maroon>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#d81b60}.icheck-maroon>input:first-child:checked+input[type=hidden]+label:before,.icheck-maroon>input:first-child:checked+label:before{background-color:#d81b60;border-color:#d81b60}.icheck-blue>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-blue>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-blue>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-blue>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#007bff}.icheck-blue>input:first-child:checked+input[type=hidden]+label:before,.icheck-blue>input:first-child:checked+label:before{background-color:#007bff;border-color:#007bff}.icheck-indigo>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-indigo>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-indigo>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-indigo>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#6610f2}.icheck-indigo>input:first-child:checked+input[type=hidden]+label:before,.icheck-indigo>input:first-child:checked+label:before{background-color:#6610f2;border-color:#6610f2}.icheck-purple>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-purple>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-purple>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-purple>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#6f42c1}.icheck-purple>input:first-child:checked+input[type=hidden]+label:before,.icheck-purple>input:first-child:checked+label:before{background-color:#6f42c1;border-color:#6f42c1}.icheck-pink>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-pink>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-pink>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-pink>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#e83e8c}.icheck-pink>input:first-child:checked+input[type=hidden]+label:before,.icheck-pink>input:first-child:checked+label:before{background-color:#e83e8c;border-color:#e83e8c}.icheck-red>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-red>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-red>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-red>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#dc3545}.icheck-red>input:first-child:checked+input[type=hidden]+label:before,.icheck-red>input:first-child:checked+label:before{background-color:#dc3545;border-color:#dc3545}.icheck-orange>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-orange>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-orange>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-orange>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#fd7e14}.icheck-orange>input:first-child:checked+input[type=hidden]+label:before,.icheck-orange>input:first-child:checked+label:before{background-color:#fd7e14;border-color:#fd7e14}.icheck-yellow>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-yellow>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-yellow>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-yellow>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#ffc107}.icheck-yellow>input:first-child:checked+input[type=hidden]+label:before,.icheck-yellow>input:first-child:checked+label:before{background-color:#ffc107;border-color:#ffc107}.icheck-green>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-green>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-green>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-green>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#28a745}.icheck-green>input:first-child:checked+input[type=hidden]+label:before,.icheck-green>input:first-child:checked+label:before{background-color:#28a745;border-color:#28a745}.icheck-teal>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-teal>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-teal>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-teal>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#20c997}.icheck-teal>input:first-child:checked+input[type=hidden]+label:before,.icheck-teal>input:first-child:checked+label:before{background-color:#20c997;border-color:#20c997}.icheck-cyan>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-cyan>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-cyan>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-cyan>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#17a2b8}.icheck-cyan>input:first-child:checked+input[type=hidden]+label:before,.icheck-cyan>input:first-child:checked+label:before{background-color:#17a2b8;border-color:#17a2b8}.icheck-white>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-white>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-white>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-white>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#fff}.icheck-white>input:first-child:checked+input[type=hidden]+label:before,.icheck-white>input:first-child:checked+label:before{background-color:#fff;border-color:#fff}.icheck-gray>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-gray>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-gray>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-gray>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#6c757d}.icheck-gray>input:first-child:checked+input[type=hidden]+label:before,.icheck-gray>input:first-child:checked+label:before{background-color:#6c757d;border-color:#6c757d}.icheck-gray-dark>input:first-child:not(:checked):not(:disabled):focus+input[type=hidden]+label:before,.icheck-gray-dark>input:first-child:not(:checked):not(:disabled):focus+label:before,.icheck-gray-dark>input:first-child:not(:checked):not(:disabled):hover+input[type=hidden]+label:before,.icheck-gray-dark>input:first-child:not(:checked):not(:disabled):hover+label:before{border-color:#343a40}.icheck-gray-dark>input:first-child:checked+input[type=hidden]+label:before,.icheck-gray-dark>input:first-child:checked+label:before{background-color:#343a40;border-color:#343a40}.mapael .map{position:relative}.mapael .mapTooltip{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;border-radius:.25rem;font-size:.875rem;background-color:#000;color:#fff;display:block;max-width:200px;padding:.25rem .5rem;position:absolute;text-align:center;word-wrap:break-word;z-index:1070}.mapael .myLegend{background-color:#f8f9fa;border:1px solid #adb5bd;padding:10px;width:600px}.mapael .zoomButton{background-color:#f8f9fa;border:1px solid #ddd;border-radius:.25rem;color:#444;cursor:pointer;font-weight:700;height:16px;left:10px;line-height:14px;padding-left:1px;position:absolute;text-align:center;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:16px}.mapael .zoomButton.hover,.mapael .zoomButton:active,.mapael .zoomButton:hover{background-color:#e9ecef;color:#2b2b2b}.mapael .zoomReset{line-height:12px;top:10px}.mapael .zoomIn{top:30px}.mapael .zoomOut{top:50px}.jqvmap-zoomin,.jqvmap-zoomout{background-color:#f8f9fa;border:1px solid #ddd;border-radius:.25rem;color:#444;height:15px;width:15px}.jqvmap-zoomin.hover,.jqvmap-zoomin:active,.jqvmap-zoomin:hover,.jqvmap-zoomout.hover,.jqvmap-zoomout:active,.jqvmap-zoomout:hover{background-color:#e9ecef;color:#2b2b2b}.swal2-icon.swal2-info{border-color:ligthen(#17a2b8,20%);color:#17a2b8}.swal2-icon.swal2-warning{border-color:ligthen(#ffc107,20%);color:#ffc107}.swal2-icon.swal2-error{border-color:ligthen(#dc3545,20%);color:#dc3545}.swal2-icon.swal2-question{border-color:ligthen(#6c757d,20%);color:#6c757d}.swal2-icon.swal2-success{color:#28a745}.swal2-icon.swal2-success,.swal2-icon.swal2-success .swal2-success-ring{border-color:ligthen(#28a745,20%)}.swal2-icon.swal2-success [class^=swal2-success-line]{background-color:#28a745}#toast-container .toast{background-color:#007bff}#toast-container .toast-success{background-color:#28a745}#toast-container .toast-error{background-color:#dc3545}#toast-container .toast-info{background-color:#17a2b8}#toast-container .toast-warning{background-color:#ffc107}.toast-bottom-full-width .toast,.toast-top-full-width .toast{max-width:inherit}.pace{z-index:1048}.pace .pace-progress{z-index:1049}.pace .pace-activity{z-index:1050}.pace-primary .pace .pace-progress{background:#007bff}.pace-barber-shop-primary .pace{background:#fff}.pace-barber-shop-primary .pace .pace-progress{background:#007bff}.pace-barber-shop-primary .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-primary .pace .pace-progress:after{color:rgba(0,123,255,.2)}.pace-bounce-primary .pace .pace-activity{background:#007bff}.pace-center-atom-primary .pace-progress{height:100px;width:80px}.pace-center-atom-primary .pace-progress:before{background:#007bff;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-primary .pace-activity,.pace-center-atom-primary .pace-activity:after,.pace-center-atom-primary .pace-activity:before{border-color:#007bff}.pace-center-circle-primary .pace .pace-progress{background:rgba(0,123,255,.8);color:#fff}.pace-center-radar-primary .pace .pace-activity,.pace-center-radar-primary .pace .pace-activity:before{border-color:#007bff transparent transparent}.pace-center-simple-primary .pace{background:#fff;border-color:#007bff}.pace-center-simple-primary .pace .pace-progress{background:#007bff}.pace-material-primary .pace{color:#007bff}.pace-corner-indicator-primary .pace .pace-activity{background:#007bff}.pace-corner-indicator-primary .pace .pace-activity:after,.pace-corner-indicator-primary .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-primary .pace .pace-activity:before{border-right-color:rgba(0,123,255,.2);border-left-color:rgba(0,123,255,.2)}.pace-corner-indicator-primary .pace .pace-activity:after{border-top-color:rgba(0,123,255,.2);border-bottom-color:rgba(0,123,255,.2)}.pace-fill-left-primary .pace .pace-progress{background-color:rgba(0,123,255,.2)}.pace-flash-primary .pace .pace-progress{background:#007bff}.pace-flash-primary .pace .pace-progress-inner{box-shadow:0 0 10px #007bff,0 0 5px #007bff}.pace-flash-primary .pace .pace-activity{border-top-color:#007bff;border-left-color:#007bff}.pace-loading-bar-primary .pace .pace-progress{background:#007bff;color:#007bff;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-primary .pace .pace-activity{box-shadow:inset 0 0 0 2px #007bff,inset 0 0 0 7px #fff}.pace-mac-osx-primary .pace .pace-progress{background-color:#007bff;box-shadow:inset -1px 0 #007bff,inset 0 -1px #007bff,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-primary .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-primary .pace-progress{color:#007bff}.pace-secondary .pace .pace-progress{background:#6c757d}.pace-barber-shop-secondary .pace{background:#fff}.pace-barber-shop-secondary .pace .pace-progress{background:#6c757d}.pace-barber-shop-secondary .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-secondary .pace .pace-progress:after{color:hsla(208,7%,46%,.2)}.pace-bounce-secondary .pace .pace-activity{background:#6c757d}.pace-center-atom-secondary .pace-progress{height:100px;width:80px}.pace-center-atom-secondary .pace-progress:before{background:#6c757d;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-secondary .pace-activity,.pace-center-atom-secondary .pace-activity:after,.pace-center-atom-secondary .pace-activity:before{border-color:#6c757d}.pace-center-circle-secondary .pace .pace-progress{background:hsla(208,7%,46%,.8);color:#fff}.pace-center-radar-secondary .pace .pace-activity,.pace-center-radar-secondary .pace .pace-activity:before{border-color:#6c757d transparent transparent}.pace-center-simple-secondary .pace{background:#fff;border-color:#6c757d}.pace-center-simple-secondary .pace .pace-progress{background:#6c757d}.pace-material-secondary .pace{color:#6c757d}.pace-corner-indicator-secondary .pace .pace-activity{background:#6c757d}.pace-corner-indicator-secondary .pace .pace-activity:after,.pace-corner-indicator-secondary .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-secondary .pace .pace-activity:before{border-right-color:hsla(208,7%,46%,.2);border-left-color:hsla(208,7%,46%,.2)}.pace-corner-indicator-secondary .pace .pace-activity:after{border-top-color:hsla(208,7%,46%,.2);border-bottom-color:hsla(208,7%,46%,.2)}.pace-fill-left-secondary .pace .pace-progress{background-color:hsla(208,7%,46%,.2)}.pace-flash-secondary .pace .pace-progress{background:#6c757d}.pace-flash-secondary .pace .pace-progress-inner{box-shadow:0 0 10px #6c757d,0 0 5px #6c757d}.pace-flash-secondary .pace .pace-activity{border-top-color:#6c757d;border-left-color:#6c757d}.pace-loading-bar-secondary .pace .pace-progress{background:#6c757d;color:#6c757d;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-secondary .pace .pace-activity{box-shadow:inset 0 0 0 2px #6c757d,inset 0 0 0 7px #fff}.pace-mac-osx-secondary .pace .pace-progress{background-color:#6c757d;box-shadow:inset -1px 0 #6c757d,inset 0 -1px #6c757d,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-secondary .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-secondary .pace-progress{color:#6c757d}.pace-success .pace .pace-progress{background:#28a745}.pace-barber-shop-success .pace{background:#fff}.pace-barber-shop-success .pace .pace-progress{background:#28a745}.pace-barber-shop-success .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-success .pace .pace-progress:after{color:rgba(40,167,69,.2)}.pace-bounce-success .pace .pace-activity{background:#28a745}.pace-center-atom-success .pace-progress{height:100px;width:80px}.pace-center-atom-success .pace-progress:before{background:#28a745;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-success .pace-activity,.pace-center-atom-success .pace-activity:after,.pace-center-atom-success .pace-activity:before{border-color:#28a745}.pace-center-circle-success .pace .pace-progress{background:rgba(40,167,69,.8);color:#fff}.pace-center-radar-success .pace .pace-activity,.pace-center-radar-success .pace .pace-activity:before{border-color:#28a745 transparent transparent}.pace-center-simple-success .pace{background:#fff;border-color:#28a745}.pace-center-simple-success .pace .pace-progress{background:#28a745}.pace-material-success .pace{color:#28a745}.pace-corner-indicator-success .pace .pace-activity{background:#28a745}.pace-corner-indicator-success .pace .pace-activity:after,.pace-corner-indicator-success .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-success .pace .pace-activity:before{border-right-color:rgba(40,167,69,.2);border-left-color:rgba(40,167,69,.2)}.pace-corner-indicator-success .pace .pace-activity:after{border-top-color:rgba(40,167,69,.2);border-bottom-color:rgba(40,167,69,.2)}.pace-fill-left-success .pace .pace-progress{background-color:rgba(40,167,69,.2)}.pace-flash-success .pace .pace-progress{background:#28a745}.pace-flash-success .pace .pace-progress-inner{box-shadow:0 0 10px #28a745,0 0 5px #28a745}.pace-flash-success .pace .pace-activity{border-top-color:#28a745;border-left-color:#28a745}.pace-loading-bar-success .pace .pace-progress{background:#28a745;color:#28a745;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-success .pace .pace-activity{box-shadow:inset 0 0 0 2px #28a745,inset 0 0 0 7px #fff}.pace-mac-osx-success .pace .pace-progress{background-color:#28a745;box-shadow:inset -1px 0 #28a745,inset 0 -1px #28a745,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-success .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-success .pace-progress{color:#28a745}.pace-info .pace .pace-progress{background:#17a2b8}.pace-barber-shop-info .pace{background:#fff}.pace-barber-shop-info .pace .pace-progress{background:#17a2b8}.pace-barber-shop-info .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-info .pace .pace-progress:after{color:rgba(23,162,184,.2)}.pace-bounce-info .pace .pace-activity{background:#17a2b8}.pace-center-atom-info .pace-progress{height:100px;width:80px}.pace-center-atom-info .pace-progress:before{background:#17a2b8;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-info .pace-activity,.pace-center-atom-info .pace-activity:after,.pace-center-atom-info .pace-activity:before{border-color:#17a2b8}.pace-center-circle-info .pace .pace-progress{background:rgba(23,162,184,.8);color:#fff}.pace-center-radar-info .pace .pace-activity,.pace-center-radar-info .pace .pace-activity:before{border-color:#17a2b8 transparent transparent}.pace-center-simple-info .pace{background:#fff;border-color:#17a2b8}.pace-center-simple-info .pace .pace-progress{background:#17a2b8}.pace-material-info .pace{color:#17a2b8}.pace-corner-indicator-info .pace .pace-activity{background:#17a2b8}.pace-corner-indicator-info .pace .pace-activity:after,.pace-corner-indicator-info .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-info .pace .pace-activity:before{border-right-color:rgba(23,162,184,.2);border-left-color:rgba(23,162,184,.2)}.pace-corner-indicator-info .pace .pace-activity:after{border-top-color:rgba(23,162,184,.2);border-bottom-color:rgba(23,162,184,.2)}.pace-fill-left-info .pace .pace-progress{background-color:rgba(23,162,184,.2)}.pace-flash-info .pace .pace-progress{background:#17a2b8}.pace-flash-info .pace .pace-progress-inner{box-shadow:0 0 10px #17a2b8,0 0 5px #17a2b8}.pace-flash-info .pace .pace-activity{border-top-color:#17a2b8;border-left-color:#17a2b8}.pace-loading-bar-info .pace .pace-progress{background:#17a2b8;color:#17a2b8;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-info .pace .pace-activity{box-shadow:inset 0 0 0 2px #17a2b8,inset 0 0 0 7px #fff}.pace-mac-osx-info .pace .pace-progress{background-color:#17a2b8;box-shadow:inset -1px 0 #17a2b8,inset 0 -1px #17a2b8,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-info .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-info .pace-progress{color:#17a2b8}.pace-warning .pace .pace-progress{background:#ffc107}.pace-barber-shop-warning .pace{background:#1f2d3d}.pace-barber-shop-warning .pace .pace-progress{background:#ffc107}.pace-barber-shop-warning .pace .pace-activity{background-image:linear-gradient(45deg,rgba(31,45,61,.2) 25%,transparent 0,transparent 50%,rgba(31,45,61,.2) 0,rgba(31,45,61,.2) 75%,transparent 0,transparent)}.pace-big-counter-warning .pace .pace-progress:after{color:rgba(255,193,7,.2)}.pace-bounce-warning .pace .pace-activity{background:#ffc107}.pace-center-atom-warning .pace-progress{height:100px;width:80px}.pace-center-atom-warning .pace-progress:before{background:#ffc107;color:#1f2d3d;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-warning .pace-activity,.pace-center-atom-warning .pace-activity:after,.pace-center-atom-warning .pace-activity:before{border-color:#ffc107}.pace-center-circle-warning .pace .pace-progress{background:rgba(255,193,7,.8);color:#1f2d3d}.pace-center-radar-warning .pace .pace-activity,.pace-center-radar-warning .pace .pace-activity:before{border-color:#ffc107 transparent transparent}.pace-center-simple-warning .pace{background:#1f2d3d;border-color:#ffc107}.pace-center-simple-warning .pace .pace-progress{background:#ffc107}.pace-material-warning .pace{color:#ffc107}.pace-corner-indicator-warning .pace .pace-activity{background:#ffc107}.pace-corner-indicator-warning .pace .pace-activity:after,.pace-corner-indicator-warning .pace .pace-activity:before{border:5px solid #1f2d3d}.pace-corner-indicator-warning .pace .pace-activity:before{border-right-color:rgba(255,193,7,.2);border-left-color:rgba(255,193,7,.2)}.pace-corner-indicator-warning .pace .pace-activity:after{border-top-color:rgba(255,193,7,.2);border-bottom-color:rgba(255,193,7,.2)}.pace-fill-left-warning .pace .pace-progress{background-color:rgba(255,193,7,.2)}.pace-flash-warning .pace .pace-progress{background:#ffc107}.pace-flash-warning .pace .pace-progress-inner{box-shadow:0 0 10px #ffc107,0 0 5px #ffc107}.pace-flash-warning .pace .pace-activity{border-top-color:#ffc107;border-left-color:#ffc107}.pace-loading-bar-warning .pace .pace-progress{background:#ffc107;color:#ffc107;box-shadow:120px 0 #1f2d3d,240px 0 #1f2d3d}.pace-loading-bar-warning .pace .pace-activity{box-shadow:inset 0 0 0 2px #ffc107,inset 0 0 0 7px #1f2d3d}.pace-mac-osx-warning .pace .pace-progress{background-color:#ffc107;box-shadow:inset -1px 0 #ffc107,inset 0 -1px #ffc107,inset 0 2px rgba(31,45,61,.5),inset 0 6px rgba(31,45,61,.3)}.pace-mac-osx-warning .pace .pace-activity{background-image:radial-gradient(rgba(31,45,61,.65) 0,rgba(31,45,61,.15) 100%);height:12px}.pace-progress-color-warning .pace-progress{color:#ffc107}.pace-danger .pace .pace-progress{background:#dc3545}.pace-barber-shop-danger .pace{background:#fff}.pace-barber-shop-danger .pace .pace-progress{background:#dc3545}.pace-barber-shop-danger .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-danger .pace .pace-progress:after{color:rgba(220,53,69,.2)}.pace-bounce-danger .pace .pace-activity{background:#dc3545}.pace-center-atom-danger .pace-progress{height:100px;width:80px}.pace-center-atom-danger .pace-progress:before{background:#dc3545;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-danger .pace-activity,.pace-center-atom-danger .pace-activity:after,.pace-center-atom-danger .pace-activity:before{border-color:#dc3545}.pace-center-circle-danger .pace .pace-progress{background:rgba(220,53,69,.8);color:#fff}.pace-center-radar-danger .pace .pace-activity,.pace-center-radar-danger .pace .pace-activity:before{border-color:#dc3545 transparent transparent}.pace-center-simple-danger .pace{background:#fff;border-color:#dc3545}.pace-center-simple-danger .pace .pace-progress{background:#dc3545}.pace-material-danger .pace{color:#dc3545}.pace-corner-indicator-danger .pace .pace-activity{background:#dc3545}.pace-corner-indicator-danger .pace .pace-activity:after,.pace-corner-indicator-danger .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-danger .pace .pace-activity:before{border-right-color:rgba(220,53,69,.2);border-left-color:rgba(220,53,69,.2)}.pace-corner-indicator-danger .pace .pace-activity:after{border-top-color:rgba(220,53,69,.2);border-bottom-color:rgba(220,53,69,.2)}.pace-fill-left-danger .pace .pace-progress{background-color:rgba(220,53,69,.2)}.pace-flash-danger .pace .pace-progress{background:#dc3545}.pace-flash-danger .pace .pace-progress-inner{box-shadow:0 0 10px #dc3545,0 0 5px #dc3545}.pace-flash-danger .pace .pace-activity{border-top-color:#dc3545;border-left-color:#dc3545}.pace-loading-bar-danger .pace .pace-progress{background:#dc3545;color:#dc3545;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-danger .pace .pace-activity{box-shadow:inset 0 0 0 2px #dc3545,inset 0 0 0 7px #fff}.pace-mac-osx-danger .pace .pace-progress{background-color:#dc3545;box-shadow:inset -1px 0 #dc3545,inset 0 -1px #dc3545,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-danger .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-danger .pace-progress{color:#dc3545}.pace-light .pace .pace-progress{background:#f8f9fa}.pace-barber-shop-light .pace{background:#1f2d3d}.pace-barber-shop-light .pace .pace-progress{background:#f8f9fa}.pace-barber-shop-light .pace .pace-activity{background-image:linear-gradient(45deg,rgba(31,45,61,.2) 25%,transparent 0,transparent 50%,rgba(31,45,61,.2) 0,rgba(31,45,61,.2) 75%,transparent 0,transparent)}.pace-big-counter-light .pace .pace-progress:after{color:rgba(248,249,250,.2)}.pace-bounce-light .pace .pace-activity{background:#f8f9fa}.pace-center-atom-light .pace-progress{height:100px;width:80px}.pace-center-atom-light .pace-progress:before{background:#f8f9fa;color:#1f2d3d;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-light .pace-activity,.pace-center-atom-light .pace-activity:after,.pace-center-atom-light .pace-activity:before{border-color:#f8f9fa}.pace-center-circle-light .pace .pace-progress{background:rgba(248,249,250,.8);color:#1f2d3d}.pace-center-radar-light .pace .pace-activity,.pace-center-radar-light .pace .pace-activity:before{border-color:#f8f9fa transparent transparent}.pace-center-simple-light .pace{background:#1f2d3d;border-color:#f8f9fa}.pace-center-simple-light .pace .pace-progress{background:#f8f9fa}.pace-material-light .pace{color:#f8f9fa}.pace-corner-indicator-light .pace .pace-activity{background:#f8f9fa}.pace-corner-indicator-light .pace .pace-activity:after,.pace-corner-indicator-light .pace .pace-activity:before{border:5px solid #1f2d3d}.pace-corner-indicator-light .pace .pace-activity:before{border-right-color:rgba(248,249,250,.2);border-left-color:rgba(248,249,250,.2)}.pace-corner-indicator-light .pace .pace-activity:after{border-top-color:rgba(248,249,250,.2);border-bottom-color:rgba(248,249,250,.2)}.pace-fill-left-light .pace .pace-progress{background-color:rgba(248,249,250,.2)}.pace-flash-light .pace .pace-progress{background:#f8f9fa}.pace-flash-light .pace .pace-progress-inner{box-shadow:0 0 10px #f8f9fa,0 0 5px #f8f9fa}.pace-flash-light .pace .pace-activity{border-top-color:#f8f9fa;border-left-color:#f8f9fa}.pace-loading-bar-light .pace .pace-progress{background:#f8f9fa;color:#f8f9fa;box-shadow:120px 0 #1f2d3d,240px 0 #1f2d3d}.pace-loading-bar-light .pace .pace-activity{box-shadow:inset 0 0 0 2px #f8f9fa,inset 0 0 0 7px #1f2d3d}.pace-mac-osx-light .pace .pace-progress{background-color:#f8f9fa;box-shadow:inset -1px 0 #f8f9fa,inset 0 -1px #f8f9fa,inset 0 2px rgba(31,45,61,.5),inset 0 6px rgba(31,45,61,.3)}.pace-mac-osx-light .pace .pace-activity{background-image:radial-gradient(rgba(31,45,61,.65) 0,rgba(31,45,61,.15) 100%);height:12px}.pace-progress-color-light .pace-progress{color:#f8f9fa}.pace-dark .pace .pace-progress{background:#343a40}.pace-barber-shop-dark .pace{background:#fff}.pace-barber-shop-dark .pace .pace-progress{background:#343a40}.pace-barber-shop-dark .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-dark .pace .pace-progress:after{color:rgba(52,58,64,.2)}.pace-bounce-dark .pace .pace-activity{background:#343a40}.pace-center-atom-dark .pace-progress{height:100px;width:80px}.pace-center-atom-dark .pace-progress:before{background:#343a40;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-dark .pace-activity,.pace-center-atom-dark .pace-activity:after,.pace-center-atom-dark .pace-activity:before{border-color:#343a40}.pace-center-circle-dark .pace .pace-progress{background:rgba(52,58,64,.8);color:#fff}.pace-center-radar-dark .pace .pace-activity,.pace-center-radar-dark .pace .pace-activity:before{border-color:#343a40 transparent transparent}.pace-center-simple-dark .pace{background:#fff;border-color:#343a40}.pace-center-simple-dark .pace .pace-progress{background:#343a40}.pace-material-dark .pace{color:#343a40}.pace-corner-indicator-dark .pace .pace-activity{background:#343a40}.pace-corner-indicator-dark .pace .pace-activity:after,.pace-corner-indicator-dark .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-dark .pace .pace-activity:before{border-right-color:rgba(52,58,64,.2);border-left-color:rgba(52,58,64,.2)}.pace-corner-indicator-dark .pace .pace-activity:after{border-top-color:rgba(52,58,64,.2);border-bottom-color:rgba(52,58,64,.2)}.pace-fill-left-dark .pace .pace-progress{background-color:rgba(52,58,64,.2)}.pace-flash-dark .pace .pace-progress{background:#343a40}.pace-flash-dark .pace .pace-progress-inner{box-shadow:0 0 10px #343a40,0 0 5px #343a40}.pace-flash-dark .pace .pace-activity{border-top-color:#343a40;border-left-color:#343a40}.pace-loading-bar-dark .pace .pace-progress{background:#343a40;color:#343a40;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-dark .pace .pace-activity{box-shadow:inset 0 0 0 2px #343a40,inset 0 0 0 7px #fff}.pace-mac-osx-dark .pace .pace-progress{background-color:#343a40;box-shadow:inset -1px 0 #343a40,inset 0 -1px #343a40,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-dark .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-dark .pace-progress{color:#343a40}.pace-lightblue .pace .pace-progress{background:#3c8dbc}.pace-barber-shop-lightblue .pace{background:#fff}.pace-barber-shop-lightblue .pace .pace-progress{background:#3c8dbc}.pace-barber-shop-lightblue .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-lightblue .pace .pace-progress:after{color:rgba(60,141,188,.2)}.pace-bounce-lightblue .pace .pace-activity{background:#3c8dbc}.pace-center-atom-lightblue .pace-progress{height:100px;width:80px}.pace-center-atom-lightblue .pace-progress:before{background:#3c8dbc;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-lightblue .pace-activity,.pace-center-atom-lightblue .pace-activity:after,.pace-center-atom-lightblue .pace-activity:before{border-color:#3c8dbc}.pace-center-circle-lightblue .pace .pace-progress{background:rgba(60,141,188,.8);color:#fff}.pace-center-radar-lightblue .pace .pace-activity,.pace-center-radar-lightblue .pace .pace-activity:before{border-color:#3c8dbc transparent transparent}.pace-center-simple-lightblue .pace{background:#fff;border-color:#3c8dbc}.pace-center-simple-lightblue .pace .pace-progress{background:#3c8dbc}.pace-material-lightblue .pace{color:#3c8dbc}.pace-corner-indicator-lightblue .pace .pace-activity{background:#3c8dbc}.pace-corner-indicator-lightblue .pace .pace-activity:after,.pace-corner-indicator-lightblue .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-lightblue .pace .pace-activity:before{border-right-color:rgba(60,141,188,.2);border-left-color:rgba(60,141,188,.2)}.pace-corner-indicator-lightblue .pace .pace-activity:after{border-top-color:rgba(60,141,188,.2);border-bottom-color:rgba(60,141,188,.2)}.pace-fill-left-lightblue .pace .pace-progress{background-color:rgba(60,141,188,.2)}.pace-flash-lightblue .pace .pace-progress{background:#3c8dbc}.pace-flash-lightblue .pace .pace-progress-inner{box-shadow:0 0 10px #3c8dbc,0 0 5px #3c8dbc}.pace-flash-lightblue .pace .pace-activity{border-top-color:#3c8dbc;border-left-color:#3c8dbc}.pace-loading-bar-lightblue .pace .pace-progress{background:#3c8dbc;color:#3c8dbc;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-lightblue .pace .pace-activity{box-shadow:inset 0 0 0 2px #3c8dbc,inset 0 0 0 7px #fff}.pace-mac-osx-lightblue .pace .pace-progress{background-color:#3c8dbc;box-shadow:inset -1px 0 #3c8dbc,inset 0 -1px #3c8dbc,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-lightblue .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-lightblue .pace-progress{color:#3c8dbc}.pace-navy .pace .pace-progress{background:#001f3f}.pace-barber-shop-navy .pace{background:#fff}.pace-barber-shop-navy .pace .pace-progress{background:#001f3f}.pace-barber-shop-navy .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-navy .pace .pace-progress:after{color:rgba(0,31,63,.2)}.pace-bounce-navy .pace .pace-activity{background:#001f3f}.pace-center-atom-navy .pace-progress{height:100px;width:80px}.pace-center-atom-navy .pace-progress:before{background:#001f3f;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-navy .pace-activity,.pace-center-atom-navy .pace-activity:after,.pace-center-atom-navy .pace-activity:before{border-color:#001f3f}.pace-center-circle-navy .pace .pace-progress{background:rgba(0,31,63,.8);color:#fff}.pace-center-radar-navy .pace .pace-activity,.pace-center-radar-navy .pace .pace-activity:before{border-color:#001f3f transparent transparent}.pace-center-simple-navy .pace{background:#fff;border-color:#001f3f}.pace-center-simple-navy .pace .pace-progress{background:#001f3f}.pace-material-navy .pace{color:#001f3f}.pace-corner-indicator-navy .pace .pace-activity{background:#001f3f}.pace-corner-indicator-navy .pace .pace-activity:after,.pace-corner-indicator-navy .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-navy .pace .pace-activity:before{border-right-color:rgba(0,31,63,.2);border-left-color:rgba(0,31,63,.2)}.pace-corner-indicator-navy .pace .pace-activity:after{border-top-color:rgba(0,31,63,.2);border-bottom-color:rgba(0,31,63,.2)}.pace-fill-left-navy .pace .pace-progress{background-color:rgba(0,31,63,.2)}.pace-flash-navy .pace .pace-progress{background:#001f3f}.pace-flash-navy .pace .pace-progress-inner{box-shadow:0 0 10px #001f3f,0 0 5px #001f3f}.pace-flash-navy .pace .pace-activity{border-top-color:#001f3f;border-left-color:#001f3f}.pace-loading-bar-navy .pace .pace-progress{background:#001f3f;color:#001f3f;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-navy .pace .pace-activity{box-shadow:inset 0 0 0 2px #001f3f,inset 0 0 0 7px #fff}.pace-mac-osx-navy .pace .pace-progress{background-color:#001f3f;box-shadow:inset -1px 0 #001f3f,inset 0 -1px #001f3f,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-navy .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-navy .pace-progress{color:#001f3f}.pace-olive .pace .pace-progress{background:#3d9970}.pace-barber-shop-olive .pace{background:#fff}.pace-barber-shop-olive .pace .pace-progress{background:#3d9970}.pace-barber-shop-olive .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-olive .pace .pace-progress:after{color:rgba(61,153,112,.2)}.pace-bounce-olive .pace .pace-activity{background:#3d9970}.pace-center-atom-olive .pace-progress{height:100px;width:80px}.pace-center-atom-olive .pace-progress:before{background:#3d9970;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-olive .pace-activity,.pace-center-atom-olive .pace-activity:after,.pace-center-atom-olive .pace-activity:before{border-color:#3d9970}.pace-center-circle-olive .pace .pace-progress{background:rgba(61,153,112,.8);color:#fff}.pace-center-radar-olive .pace .pace-activity,.pace-center-radar-olive .pace .pace-activity:before{border-color:#3d9970 transparent transparent}.pace-center-simple-olive .pace{background:#fff;border-color:#3d9970}.pace-center-simple-olive .pace .pace-progress{background:#3d9970}.pace-material-olive .pace{color:#3d9970}.pace-corner-indicator-olive .pace .pace-activity{background:#3d9970}.pace-corner-indicator-olive .pace .pace-activity:after,.pace-corner-indicator-olive .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-olive .pace .pace-activity:before{border-right-color:rgba(61,153,112,.2);border-left-color:rgba(61,153,112,.2)}.pace-corner-indicator-olive .pace .pace-activity:after{border-top-color:rgba(61,153,112,.2);border-bottom-color:rgba(61,153,112,.2)}.pace-fill-left-olive .pace .pace-progress{background-color:rgba(61,153,112,.2)}.pace-flash-olive .pace .pace-progress{background:#3d9970}.pace-flash-olive .pace .pace-progress-inner{box-shadow:0 0 10px #3d9970,0 0 5px #3d9970}.pace-flash-olive .pace .pace-activity{border-top-color:#3d9970;border-left-color:#3d9970}.pace-loading-bar-olive .pace .pace-progress{background:#3d9970;color:#3d9970;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-olive .pace .pace-activity{box-shadow:inset 0 0 0 2px #3d9970,inset 0 0 0 7px #fff}.pace-mac-osx-olive .pace .pace-progress{background-color:#3d9970;box-shadow:inset -1px 0 #3d9970,inset 0 -1px #3d9970,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-olive .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-olive .pace-progress{color:#3d9970}.pace-lime .pace .pace-progress{background:#01ff70}.pace-barber-shop-lime .pace{background:#1f2d3d}.pace-barber-shop-lime .pace .pace-progress{background:#01ff70}.pace-barber-shop-lime .pace .pace-activity{background-image:linear-gradient(45deg,rgba(31,45,61,.2) 25%,transparent 0,transparent 50%,rgba(31,45,61,.2) 0,rgba(31,45,61,.2) 75%,transparent 0,transparent)}.pace-big-counter-lime .pace .pace-progress:after{color:rgba(1,255,112,.2)}.pace-bounce-lime .pace .pace-activity{background:#01ff70}.pace-center-atom-lime .pace-progress{height:100px;width:80px}.pace-center-atom-lime .pace-progress:before{background:#01ff70;color:#1f2d3d;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-lime .pace-activity,.pace-center-atom-lime .pace-activity:after,.pace-center-atom-lime .pace-activity:before{border-color:#01ff70}.pace-center-circle-lime .pace .pace-progress{background:rgba(1,255,112,.8);color:#1f2d3d}.pace-center-radar-lime .pace .pace-activity,.pace-center-radar-lime .pace .pace-activity:before{border-color:#01ff70 transparent transparent}.pace-center-simple-lime .pace{background:#1f2d3d;border-color:#01ff70}.pace-center-simple-lime .pace .pace-progress{background:#01ff70}.pace-material-lime .pace{color:#01ff70}.pace-corner-indicator-lime .pace .pace-activity{background:#01ff70}.pace-corner-indicator-lime .pace .pace-activity:after,.pace-corner-indicator-lime .pace .pace-activity:before{border:5px solid #1f2d3d}.pace-corner-indicator-lime .pace .pace-activity:before{border-right-color:rgba(1,255,112,.2);border-left-color:rgba(1,255,112,.2)}.pace-corner-indicator-lime .pace .pace-activity:after{border-top-color:rgba(1,255,112,.2);border-bottom-color:rgba(1,255,112,.2)}.pace-fill-left-lime .pace .pace-progress{background-color:rgba(1,255,112,.2)}.pace-flash-lime .pace .pace-progress{background:#01ff70}.pace-flash-lime .pace .pace-progress-inner{box-shadow:0 0 10px #01ff70,0 0 5px #01ff70}.pace-flash-lime .pace .pace-activity{border-top-color:#01ff70;border-left-color:#01ff70}.pace-loading-bar-lime .pace .pace-progress{background:#01ff70;color:#01ff70;box-shadow:120px 0 #1f2d3d,240px 0 #1f2d3d}.pace-loading-bar-lime .pace .pace-activity{box-shadow:inset 0 0 0 2px #01ff70,inset 0 0 0 7px #1f2d3d}.pace-mac-osx-lime .pace .pace-progress{background-color:#01ff70;box-shadow:inset -1px 0 #01ff70,inset 0 -1px #01ff70,inset 0 2px rgba(31,45,61,.5),inset 0 6px rgba(31,45,61,.3)}.pace-mac-osx-lime .pace .pace-activity{background-image:radial-gradient(rgba(31,45,61,.65) 0,rgba(31,45,61,.15) 100%);height:12px}.pace-progress-color-lime .pace-progress{color:#01ff70}.pace-fuchsia .pace .pace-progress{background:#f012be}.pace-barber-shop-fuchsia .pace{background:#fff}.pace-barber-shop-fuchsia .pace .pace-progress{background:#f012be}.pace-barber-shop-fuchsia .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-fuchsia .pace .pace-progress:after{color:rgba(240,18,190,.2)}.pace-bounce-fuchsia .pace .pace-activity{background:#f012be}.pace-center-atom-fuchsia .pace-progress{height:100px;width:80px}.pace-center-atom-fuchsia .pace-progress:before{background:#f012be;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-fuchsia .pace-activity,.pace-center-atom-fuchsia .pace-activity:after,.pace-center-atom-fuchsia .pace-activity:before{border-color:#f012be}.pace-center-circle-fuchsia .pace .pace-progress{background:rgba(240,18,190,.8);color:#fff}.pace-center-radar-fuchsia .pace .pace-activity,.pace-center-radar-fuchsia .pace .pace-activity:before{border-color:#f012be transparent transparent}.pace-center-simple-fuchsia .pace{background:#fff;border-color:#f012be}.pace-center-simple-fuchsia .pace .pace-progress{background:#f012be}.pace-material-fuchsia .pace{color:#f012be}.pace-corner-indicator-fuchsia .pace .pace-activity{background:#f012be}.pace-corner-indicator-fuchsia .pace .pace-activity:after,.pace-corner-indicator-fuchsia .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-fuchsia .pace .pace-activity:before{border-right-color:rgba(240,18,190,.2);border-left-color:rgba(240,18,190,.2)}.pace-corner-indicator-fuchsia .pace .pace-activity:after{border-top-color:rgba(240,18,190,.2);border-bottom-color:rgba(240,18,190,.2)}.pace-fill-left-fuchsia .pace .pace-progress{background-color:rgba(240,18,190,.2)}.pace-flash-fuchsia .pace .pace-progress{background:#f012be}.pace-flash-fuchsia .pace .pace-progress-inner{box-shadow:0 0 10px #f012be,0 0 5px #f012be}.pace-flash-fuchsia .pace .pace-activity{border-top-color:#f012be;border-left-color:#f012be}.pace-loading-bar-fuchsia .pace .pace-progress{background:#f012be;color:#f012be;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-fuchsia .pace .pace-activity{box-shadow:inset 0 0 0 2px #f012be,inset 0 0 0 7px #fff}.pace-mac-osx-fuchsia .pace .pace-progress{background-color:#f012be;box-shadow:inset -1px 0 #f012be,inset 0 -1px #f012be,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-fuchsia .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-fuchsia .pace-progress{color:#f012be}.pace-maroon .pace .pace-progress{background:#d81b60}.pace-barber-shop-maroon .pace{background:#fff}.pace-barber-shop-maroon .pace .pace-progress{background:#d81b60}.pace-barber-shop-maroon .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-maroon .pace .pace-progress:after{color:rgba(216,27,96,.2)}.pace-bounce-maroon .pace .pace-activity{background:#d81b60}.pace-center-atom-maroon .pace-progress{height:100px;width:80px}.pace-center-atom-maroon .pace-progress:before{background:#d81b60;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-maroon .pace-activity,.pace-center-atom-maroon .pace-activity:after,.pace-center-atom-maroon .pace-activity:before{border-color:#d81b60}.pace-center-circle-maroon .pace .pace-progress{background:rgba(216,27,96,.8);color:#fff}.pace-center-radar-maroon .pace .pace-activity,.pace-center-radar-maroon .pace .pace-activity:before{border-color:#d81b60 transparent transparent}.pace-center-simple-maroon .pace{background:#fff;border-color:#d81b60}.pace-center-simple-maroon .pace .pace-progress{background:#d81b60}.pace-material-maroon .pace{color:#d81b60}.pace-corner-indicator-maroon .pace .pace-activity{background:#d81b60}.pace-corner-indicator-maroon .pace .pace-activity:after,.pace-corner-indicator-maroon .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-maroon .pace .pace-activity:before{border-right-color:rgba(216,27,96,.2);border-left-color:rgba(216,27,96,.2)}.pace-corner-indicator-maroon .pace .pace-activity:after{border-top-color:rgba(216,27,96,.2);border-bottom-color:rgba(216,27,96,.2)}.pace-fill-left-maroon .pace .pace-progress{background-color:rgba(216,27,96,.2)}.pace-flash-maroon .pace .pace-progress{background:#d81b60}.pace-flash-maroon .pace .pace-progress-inner{box-shadow:0 0 10px #d81b60,0 0 5px #d81b60}.pace-flash-maroon .pace .pace-activity{border-top-color:#d81b60;border-left-color:#d81b60}.pace-loading-bar-maroon .pace .pace-progress{background:#d81b60;color:#d81b60;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-maroon .pace .pace-activity{box-shadow:inset 0 0 0 2px #d81b60,inset 0 0 0 7px #fff}.pace-mac-osx-maroon .pace .pace-progress{background-color:#d81b60;box-shadow:inset -1px 0 #d81b60,inset 0 -1px #d81b60,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-maroon .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-maroon .pace-progress{color:#d81b60}.pace-blue .pace .pace-progress{background:#007bff}.pace-barber-shop-blue .pace{background:#fff}.pace-barber-shop-blue .pace .pace-progress{background:#007bff}.pace-barber-shop-blue .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-blue .pace .pace-progress:after{color:rgba(0,123,255,.2)}.pace-bounce-blue .pace .pace-activity{background:#007bff}.pace-center-atom-blue .pace-progress{height:100px;width:80px}.pace-center-atom-blue .pace-progress:before{background:#007bff;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-blue .pace-activity,.pace-center-atom-blue .pace-activity:after,.pace-center-atom-blue .pace-activity:before{border-color:#007bff}.pace-center-circle-blue .pace .pace-progress{background:rgba(0,123,255,.8);color:#fff}.pace-center-radar-blue .pace .pace-activity,.pace-center-radar-blue .pace .pace-activity:before{border-color:#007bff transparent transparent}.pace-center-simple-blue .pace{background:#fff;border-color:#007bff}.pace-center-simple-blue .pace .pace-progress{background:#007bff}.pace-material-blue .pace{color:#007bff}.pace-corner-indicator-blue .pace .pace-activity{background:#007bff}.pace-corner-indicator-blue .pace .pace-activity:after,.pace-corner-indicator-blue .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-blue .pace .pace-activity:before{border-right-color:rgba(0,123,255,.2);border-left-color:rgba(0,123,255,.2)}.pace-corner-indicator-blue .pace .pace-activity:after{border-top-color:rgba(0,123,255,.2);border-bottom-color:rgba(0,123,255,.2)}.pace-fill-left-blue .pace .pace-progress{background-color:rgba(0,123,255,.2)}.pace-flash-blue .pace .pace-progress{background:#007bff}.pace-flash-blue .pace .pace-progress-inner{box-shadow:0 0 10px #007bff,0 0 5px #007bff}.pace-flash-blue .pace .pace-activity{border-top-color:#007bff;border-left-color:#007bff}.pace-loading-bar-blue .pace .pace-progress{background:#007bff;color:#007bff;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-blue .pace .pace-activity{box-shadow:inset 0 0 0 2px #007bff,inset 0 0 0 7px #fff}.pace-mac-osx-blue .pace .pace-progress{background-color:#007bff;box-shadow:inset -1px 0 #007bff,inset 0 -1px #007bff,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-blue .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-blue .pace-progress{color:#007bff}.pace-indigo .pace .pace-progress{background:#6610f2}.pace-barber-shop-indigo .pace{background:#fff}.pace-barber-shop-indigo .pace .pace-progress{background:#6610f2}.pace-barber-shop-indigo .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-indigo .pace .pace-progress:after{color:rgba(102,16,242,.2)}.pace-bounce-indigo .pace .pace-activity{background:#6610f2}.pace-center-atom-indigo .pace-progress{height:100px;width:80px}.pace-center-atom-indigo .pace-progress:before{background:#6610f2;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-indigo .pace-activity,.pace-center-atom-indigo .pace-activity:after,.pace-center-atom-indigo .pace-activity:before{border-color:#6610f2}.pace-center-circle-indigo .pace .pace-progress{background:rgba(102,16,242,.8);color:#fff}.pace-center-radar-indigo .pace .pace-activity,.pace-center-radar-indigo .pace .pace-activity:before{border-color:#6610f2 transparent transparent}.pace-center-simple-indigo .pace{background:#fff;border-color:#6610f2}.pace-center-simple-indigo .pace .pace-progress{background:#6610f2}.pace-material-indigo .pace{color:#6610f2}.pace-corner-indicator-indigo .pace .pace-activity{background:#6610f2}.pace-corner-indicator-indigo .pace .pace-activity:after,.pace-corner-indicator-indigo .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-indigo .pace .pace-activity:before{border-right-color:rgba(102,16,242,.2);border-left-color:rgba(102,16,242,.2)}.pace-corner-indicator-indigo .pace .pace-activity:after{border-top-color:rgba(102,16,242,.2);border-bottom-color:rgba(102,16,242,.2)}.pace-fill-left-indigo .pace .pace-progress{background-color:rgba(102,16,242,.2)}.pace-flash-indigo .pace .pace-progress{background:#6610f2}.pace-flash-indigo .pace .pace-progress-inner{box-shadow:0 0 10px #6610f2,0 0 5px #6610f2}.pace-flash-indigo .pace .pace-activity{border-top-color:#6610f2;border-left-color:#6610f2}.pace-loading-bar-indigo .pace .pace-progress{background:#6610f2;color:#6610f2;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-indigo .pace .pace-activity{box-shadow:inset 0 0 0 2px #6610f2,inset 0 0 0 7px #fff}.pace-mac-osx-indigo .pace .pace-progress{background-color:#6610f2;box-shadow:inset -1px 0 #6610f2,inset 0 -1px #6610f2,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-indigo .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-indigo .pace-progress{color:#6610f2}.pace-purple .pace .pace-progress{background:#6f42c1}.pace-barber-shop-purple .pace{background:#fff}.pace-barber-shop-purple .pace .pace-progress{background:#6f42c1}.pace-barber-shop-purple .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-purple .pace .pace-progress:after{color:rgba(111,66,193,.2)}.pace-bounce-purple .pace .pace-activity{background:#6f42c1}.pace-center-atom-purple .pace-progress{height:100px;width:80px}.pace-center-atom-purple .pace-progress:before{background:#6f42c1;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-purple .pace-activity,.pace-center-atom-purple .pace-activity:after,.pace-center-atom-purple .pace-activity:before{border-color:#6f42c1}.pace-center-circle-purple .pace .pace-progress{background:rgba(111,66,193,.8);color:#fff}.pace-center-radar-purple .pace .pace-activity,.pace-center-radar-purple .pace .pace-activity:before{border-color:#6f42c1 transparent transparent}.pace-center-simple-purple .pace{background:#fff;border-color:#6f42c1}.pace-center-simple-purple .pace .pace-progress{background:#6f42c1}.pace-material-purple .pace{color:#6f42c1}.pace-corner-indicator-purple .pace .pace-activity{background:#6f42c1}.pace-corner-indicator-purple .pace .pace-activity:after,.pace-corner-indicator-purple .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-purple .pace .pace-activity:before{border-right-color:rgba(111,66,193,.2);border-left-color:rgba(111,66,193,.2)}.pace-corner-indicator-purple .pace .pace-activity:after{border-top-color:rgba(111,66,193,.2);border-bottom-color:rgba(111,66,193,.2)}.pace-fill-left-purple .pace .pace-progress{background-color:rgba(111,66,193,.2)}.pace-flash-purple .pace .pace-progress{background:#6f42c1}.pace-flash-purple .pace .pace-progress-inner{box-shadow:0 0 10px #6f42c1,0 0 5px #6f42c1}.pace-flash-purple .pace .pace-activity{border-top-color:#6f42c1;border-left-color:#6f42c1}.pace-loading-bar-purple .pace .pace-progress{background:#6f42c1;color:#6f42c1;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-purple .pace .pace-activity{box-shadow:inset 0 0 0 2px #6f42c1,inset 0 0 0 7px #fff}.pace-mac-osx-purple .pace .pace-progress{background-color:#6f42c1;box-shadow:inset -1px 0 #6f42c1,inset 0 -1px #6f42c1,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-purple .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-purple .pace-progress{color:#6f42c1}.pace-pink .pace .pace-progress{background:#e83e8c}.pace-barber-shop-pink .pace{background:#fff}.pace-barber-shop-pink .pace .pace-progress{background:#e83e8c}.pace-barber-shop-pink .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-pink .pace .pace-progress:after{color:rgba(232,62,140,.2)}.pace-bounce-pink .pace .pace-activity{background:#e83e8c}.pace-center-atom-pink .pace-progress{height:100px;width:80px}.pace-center-atom-pink .pace-progress:before{background:#e83e8c;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-pink .pace-activity,.pace-center-atom-pink .pace-activity:after,.pace-center-atom-pink .pace-activity:before{border-color:#e83e8c}.pace-center-circle-pink .pace .pace-progress{background:rgba(232,62,140,.8);color:#fff}.pace-center-radar-pink .pace .pace-activity,.pace-center-radar-pink .pace .pace-activity:before{border-color:#e83e8c transparent transparent}.pace-center-simple-pink .pace{background:#fff;border-color:#e83e8c}.pace-center-simple-pink .pace .pace-progress{background:#e83e8c}.pace-material-pink .pace{color:#e83e8c}.pace-corner-indicator-pink .pace .pace-activity{background:#e83e8c}.pace-corner-indicator-pink .pace .pace-activity:after,.pace-corner-indicator-pink .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-pink .pace .pace-activity:before{border-right-color:rgba(232,62,140,.2);border-left-color:rgba(232,62,140,.2)}.pace-corner-indicator-pink .pace .pace-activity:after{border-top-color:rgba(232,62,140,.2);border-bottom-color:rgba(232,62,140,.2)}.pace-fill-left-pink .pace .pace-progress{background-color:rgba(232,62,140,.2)}.pace-flash-pink .pace .pace-progress{background:#e83e8c}.pace-flash-pink .pace .pace-progress-inner{box-shadow:0 0 10px #e83e8c,0 0 5px #e83e8c}.pace-flash-pink .pace .pace-activity{border-top-color:#e83e8c;border-left-color:#e83e8c}.pace-loading-bar-pink .pace .pace-progress{background:#e83e8c;color:#e83e8c;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-pink .pace .pace-activity{box-shadow:inset 0 0 0 2px #e83e8c,inset 0 0 0 7px #fff}.pace-mac-osx-pink .pace .pace-progress{background-color:#e83e8c;box-shadow:inset -1px 0 #e83e8c,inset 0 -1px #e83e8c,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-pink .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-pink .pace-progress{color:#e83e8c}.pace-red .pace .pace-progress{background:#dc3545}.pace-barber-shop-red .pace{background:#fff}.pace-barber-shop-red .pace .pace-progress{background:#dc3545}.pace-barber-shop-red .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-red .pace .pace-progress:after{color:rgba(220,53,69,.2)}.pace-bounce-red .pace .pace-activity{background:#dc3545}.pace-center-atom-red .pace-progress{height:100px;width:80px}.pace-center-atom-red .pace-progress:before{background:#dc3545;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-red .pace-activity,.pace-center-atom-red .pace-activity:after,.pace-center-atom-red .pace-activity:before{border-color:#dc3545}.pace-center-circle-red .pace .pace-progress{background:rgba(220,53,69,.8);color:#fff}.pace-center-radar-red .pace .pace-activity,.pace-center-radar-red .pace .pace-activity:before{border-color:#dc3545 transparent transparent}.pace-center-simple-red .pace{background:#fff;border-color:#dc3545}.pace-center-simple-red .pace .pace-progress{background:#dc3545}.pace-material-red .pace{color:#dc3545}.pace-corner-indicator-red .pace .pace-activity{background:#dc3545}.pace-corner-indicator-red .pace .pace-activity:after,.pace-corner-indicator-red .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-red .pace .pace-activity:before{border-right-color:rgba(220,53,69,.2);border-left-color:rgba(220,53,69,.2)}.pace-corner-indicator-red .pace .pace-activity:after{border-top-color:rgba(220,53,69,.2);border-bottom-color:rgba(220,53,69,.2)}.pace-fill-left-red .pace .pace-progress{background-color:rgba(220,53,69,.2)}.pace-flash-red .pace .pace-progress{background:#dc3545}.pace-flash-red .pace .pace-progress-inner{box-shadow:0 0 10px #dc3545,0 0 5px #dc3545}.pace-flash-red .pace .pace-activity{border-top-color:#dc3545;border-left-color:#dc3545}.pace-loading-bar-red .pace .pace-progress{background:#dc3545;color:#dc3545;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-red .pace .pace-activity{box-shadow:inset 0 0 0 2px #dc3545,inset 0 0 0 7px #fff}.pace-mac-osx-red .pace .pace-progress{background-color:#dc3545;box-shadow:inset -1px 0 #dc3545,inset 0 -1px #dc3545,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-red .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-red .pace-progress{color:#dc3545}.pace-orange .pace .pace-progress{background:#fd7e14}.pace-barber-shop-orange .pace{background:#1f2d3d}.pace-barber-shop-orange .pace .pace-progress{background:#fd7e14}.pace-barber-shop-orange .pace .pace-activity{background-image:linear-gradient(45deg,rgba(31,45,61,.2) 25%,transparent 0,transparent 50%,rgba(31,45,61,.2) 0,rgba(31,45,61,.2) 75%,transparent 0,transparent)}.pace-big-counter-orange .pace .pace-progress:after{color:rgba(253,126,20,.2)}.pace-bounce-orange .pace .pace-activity{background:#fd7e14}.pace-center-atom-orange .pace-progress{height:100px;width:80px}.pace-center-atom-orange .pace-progress:before{background:#fd7e14;color:#1f2d3d;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-orange .pace-activity,.pace-center-atom-orange .pace-activity:after,.pace-center-atom-orange .pace-activity:before{border-color:#fd7e14}.pace-center-circle-orange .pace .pace-progress{background:rgba(253,126,20,.8);color:#1f2d3d}.pace-center-radar-orange .pace .pace-activity,.pace-center-radar-orange .pace .pace-activity:before{border-color:#fd7e14 transparent transparent}.pace-center-simple-orange .pace{background:#1f2d3d;border-color:#fd7e14}.pace-center-simple-orange .pace .pace-progress{background:#fd7e14}.pace-material-orange .pace{color:#fd7e14}.pace-corner-indicator-orange .pace .pace-activity{background:#fd7e14}.pace-corner-indicator-orange .pace .pace-activity:after,.pace-corner-indicator-orange .pace .pace-activity:before{border:5px solid #1f2d3d}.pace-corner-indicator-orange .pace .pace-activity:before{border-right-color:rgba(253,126,20,.2);border-left-color:rgba(253,126,20,.2)}.pace-corner-indicator-orange .pace .pace-activity:after{border-top-color:rgba(253,126,20,.2);border-bottom-color:rgba(253,126,20,.2)}.pace-fill-left-orange .pace .pace-progress{background-color:rgba(253,126,20,.2)}.pace-flash-orange .pace .pace-progress{background:#fd7e14}.pace-flash-orange .pace .pace-progress-inner{box-shadow:0 0 10px #fd7e14,0 0 5px #fd7e14}.pace-flash-orange .pace .pace-activity{border-top-color:#fd7e14;border-left-color:#fd7e14}.pace-loading-bar-orange .pace .pace-progress{background:#fd7e14;color:#fd7e14;box-shadow:120px 0 #1f2d3d,240px 0 #1f2d3d}.pace-loading-bar-orange .pace .pace-activity{box-shadow:inset 0 0 0 2px #fd7e14,inset 0 0 0 7px #1f2d3d}.pace-mac-osx-orange .pace .pace-progress{background-color:#fd7e14;box-shadow:inset -1px 0 #fd7e14,inset 0 -1px #fd7e14,inset 0 2px rgba(31,45,61,.5),inset 0 6px rgba(31,45,61,.3)}.pace-mac-osx-orange .pace .pace-activity{background-image:radial-gradient(rgba(31,45,61,.65) 0,rgba(31,45,61,.15) 100%);height:12px}.pace-progress-color-orange .pace-progress{color:#fd7e14}.pace-yellow .pace .pace-progress{background:#ffc107}.pace-barber-shop-yellow .pace{background:#1f2d3d}.pace-barber-shop-yellow .pace .pace-progress{background:#ffc107}.pace-barber-shop-yellow .pace .pace-activity{background-image:linear-gradient(45deg,rgba(31,45,61,.2) 25%,transparent 0,transparent 50%,rgba(31,45,61,.2) 0,rgba(31,45,61,.2) 75%,transparent 0,transparent)}.pace-big-counter-yellow .pace .pace-progress:after{color:rgba(255,193,7,.2)}.pace-bounce-yellow .pace .pace-activity{background:#ffc107}.pace-center-atom-yellow .pace-progress{height:100px;width:80px}.pace-center-atom-yellow .pace-progress:before{background:#ffc107;color:#1f2d3d;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-yellow .pace-activity,.pace-center-atom-yellow .pace-activity:after,.pace-center-atom-yellow .pace-activity:before{border-color:#ffc107}.pace-center-circle-yellow .pace .pace-progress{background:rgba(255,193,7,.8);color:#1f2d3d}.pace-center-radar-yellow .pace .pace-activity,.pace-center-radar-yellow .pace .pace-activity:before{border-color:#ffc107 transparent transparent}.pace-center-simple-yellow .pace{background:#1f2d3d;border-color:#ffc107}.pace-center-simple-yellow .pace .pace-progress{background:#ffc107}.pace-material-yellow .pace{color:#ffc107}.pace-corner-indicator-yellow .pace .pace-activity{background:#ffc107}.pace-corner-indicator-yellow .pace .pace-activity:after,.pace-corner-indicator-yellow .pace .pace-activity:before{border:5px solid #1f2d3d}.pace-corner-indicator-yellow .pace .pace-activity:before{border-right-color:rgba(255,193,7,.2);border-left-color:rgba(255,193,7,.2)}.pace-corner-indicator-yellow .pace .pace-activity:after{border-top-color:rgba(255,193,7,.2);border-bottom-color:rgba(255,193,7,.2)}.pace-fill-left-yellow .pace .pace-progress{background-color:rgba(255,193,7,.2)}.pace-flash-yellow .pace .pace-progress{background:#ffc107}.pace-flash-yellow .pace .pace-progress-inner{box-shadow:0 0 10px #ffc107,0 0 5px #ffc107}.pace-flash-yellow .pace .pace-activity{border-top-color:#ffc107;border-left-color:#ffc107}.pace-loading-bar-yellow .pace .pace-progress{background:#ffc107;color:#ffc107;box-shadow:120px 0 #1f2d3d,240px 0 #1f2d3d}.pace-loading-bar-yellow .pace .pace-activity{box-shadow:inset 0 0 0 2px #ffc107,inset 0 0 0 7px #1f2d3d}.pace-mac-osx-yellow .pace .pace-progress{background-color:#ffc107;box-shadow:inset -1px 0 #ffc107,inset 0 -1px #ffc107,inset 0 2px rgba(31,45,61,.5),inset 0 6px rgba(31,45,61,.3)}.pace-mac-osx-yellow .pace .pace-activity{background-image:radial-gradient(rgba(31,45,61,.65) 0,rgba(31,45,61,.15) 100%);height:12px}.pace-progress-color-yellow .pace-progress{color:#ffc107}.pace-green .pace .pace-progress{background:#28a745}.pace-barber-shop-green .pace{background:#fff}.pace-barber-shop-green .pace .pace-progress{background:#28a745}.pace-barber-shop-green .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-green .pace .pace-progress:after{color:rgba(40,167,69,.2)}.pace-bounce-green .pace .pace-activity{background:#28a745}.pace-center-atom-green .pace-progress{height:100px;width:80px}.pace-center-atom-green .pace-progress:before{background:#28a745;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-green .pace-activity,.pace-center-atom-green .pace-activity:after,.pace-center-atom-green .pace-activity:before{border-color:#28a745}.pace-center-circle-green .pace .pace-progress{background:rgba(40,167,69,.8);color:#fff}.pace-center-radar-green .pace .pace-activity,.pace-center-radar-green .pace .pace-activity:before{border-color:#28a745 transparent transparent}.pace-center-simple-green .pace{background:#fff;border-color:#28a745}.pace-center-simple-green .pace .pace-progress{background:#28a745}.pace-material-green .pace{color:#28a745}.pace-corner-indicator-green .pace .pace-activity{background:#28a745}.pace-corner-indicator-green .pace .pace-activity:after,.pace-corner-indicator-green .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-green .pace .pace-activity:before{border-right-color:rgba(40,167,69,.2);border-left-color:rgba(40,167,69,.2)}.pace-corner-indicator-green .pace .pace-activity:after{border-top-color:rgba(40,167,69,.2);border-bottom-color:rgba(40,167,69,.2)}.pace-fill-left-green .pace .pace-progress{background-color:rgba(40,167,69,.2)}.pace-flash-green .pace .pace-progress{background:#28a745}.pace-flash-green .pace .pace-progress-inner{box-shadow:0 0 10px #28a745,0 0 5px #28a745}.pace-flash-green .pace .pace-activity{border-top-color:#28a745;border-left-color:#28a745}.pace-loading-bar-green .pace .pace-progress{background:#28a745;color:#28a745;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-green .pace .pace-activity{box-shadow:inset 0 0 0 2px #28a745,inset 0 0 0 7px #fff}.pace-mac-osx-green .pace .pace-progress{background-color:#28a745;box-shadow:inset -1px 0 #28a745,inset 0 -1px #28a745,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-green .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-green .pace-progress{color:#28a745}.pace-teal .pace .pace-progress{background:#20c997}.pace-barber-shop-teal .pace{background:#fff}.pace-barber-shop-teal .pace .pace-progress{background:#20c997}.pace-barber-shop-teal .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-teal .pace .pace-progress:after{color:rgba(32,201,151,.2)}.pace-bounce-teal .pace .pace-activity{background:#20c997}.pace-center-atom-teal .pace-progress{height:100px;width:80px}.pace-center-atom-teal .pace-progress:before{background:#20c997;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-teal .pace-activity,.pace-center-atom-teal .pace-activity:after,.pace-center-atom-teal .pace-activity:before{border-color:#20c997}.pace-center-circle-teal .pace .pace-progress{background:rgba(32,201,151,.8);color:#fff}.pace-center-radar-teal .pace .pace-activity,.pace-center-radar-teal .pace .pace-activity:before{border-color:#20c997 transparent transparent}.pace-center-simple-teal .pace{background:#fff;border-color:#20c997}.pace-center-simple-teal .pace .pace-progress{background:#20c997}.pace-material-teal .pace{color:#20c997}.pace-corner-indicator-teal .pace .pace-activity{background:#20c997}.pace-corner-indicator-teal .pace .pace-activity:after,.pace-corner-indicator-teal .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-teal .pace .pace-activity:before{border-right-color:rgba(32,201,151,.2);border-left-color:rgba(32,201,151,.2)}.pace-corner-indicator-teal .pace .pace-activity:after{border-top-color:rgba(32,201,151,.2);border-bottom-color:rgba(32,201,151,.2)}.pace-fill-left-teal .pace .pace-progress{background-color:rgba(32,201,151,.2)}.pace-flash-teal .pace .pace-progress{background:#20c997}.pace-flash-teal .pace .pace-progress-inner{box-shadow:0 0 10px #20c997,0 0 5px #20c997}.pace-flash-teal .pace .pace-activity{border-top-color:#20c997;border-left-color:#20c997}.pace-loading-bar-teal .pace .pace-progress{background:#20c997;color:#20c997;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-teal .pace .pace-activity{box-shadow:inset 0 0 0 2px #20c997,inset 0 0 0 7px #fff}.pace-mac-osx-teal .pace .pace-progress{background-color:#20c997;box-shadow:inset -1px 0 #20c997,inset 0 -1px #20c997,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-teal .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-teal .pace-progress{color:#20c997}.pace-cyan .pace .pace-progress{background:#17a2b8}.pace-barber-shop-cyan .pace{background:#fff}.pace-barber-shop-cyan .pace .pace-progress{background:#17a2b8}.pace-barber-shop-cyan .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-cyan .pace .pace-progress:after{color:rgba(23,162,184,.2)}.pace-bounce-cyan .pace .pace-activity{background:#17a2b8}.pace-center-atom-cyan .pace-progress{height:100px;width:80px}.pace-center-atom-cyan .pace-progress:before{background:#17a2b8;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-cyan .pace-activity,.pace-center-atom-cyan .pace-activity:after,.pace-center-atom-cyan .pace-activity:before{border-color:#17a2b8}.pace-center-circle-cyan .pace .pace-progress{background:rgba(23,162,184,.8);color:#fff}.pace-center-radar-cyan .pace .pace-activity,.pace-center-radar-cyan .pace .pace-activity:before{border-color:#17a2b8 transparent transparent}.pace-center-simple-cyan .pace{background:#fff;border-color:#17a2b8}.pace-center-simple-cyan .pace .pace-progress{background:#17a2b8}.pace-material-cyan .pace{color:#17a2b8}.pace-corner-indicator-cyan .pace .pace-activity{background:#17a2b8}.pace-corner-indicator-cyan .pace .pace-activity:after,.pace-corner-indicator-cyan .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-cyan .pace .pace-activity:before{border-right-color:rgba(23,162,184,.2);border-left-color:rgba(23,162,184,.2)}.pace-corner-indicator-cyan .pace .pace-activity:after{border-top-color:rgba(23,162,184,.2);border-bottom-color:rgba(23,162,184,.2)}.pace-fill-left-cyan .pace .pace-progress{background-color:rgba(23,162,184,.2)}.pace-flash-cyan .pace .pace-progress{background:#17a2b8}.pace-flash-cyan .pace .pace-progress-inner{box-shadow:0 0 10px #17a2b8,0 0 5px #17a2b8}.pace-flash-cyan .pace .pace-activity{border-top-color:#17a2b8;border-left-color:#17a2b8}.pace-loading-bar-cyan .pace .pace-progress{background:#17a2b8;color:#17a2b8;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-cyan .pace .pace-activity{box-shadow:inset 0 0 0 2px #17a2b8,inset 0 0 0 7px #fff}.pace-mac-osx-cyan .pace .pace-progress{background-color:#17a2b8;box-shadow:inset -1px 0 #17a2b8,inset 0 -1px #17a2b8,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-cyan .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-cyan .pace-progress{color:#17a2b8}.pace-white .pace .pace-progress{background:#fff}.pace-barber-shop-white .pace{background:#1f2d3d}.pace-barber-shop-white .pace .pace-progress{background:#fff}.pace-barber-shop-white .pace .pace-activity{background-image:linear-gradient(45deg,rgba(31,45,61,.2) 25%,transparent 0,transparent 50%,rgba(31,45,61,.2) 0,rgba(31,45,61,.2) 75%,transparent 0,transparent)}.pace-big-counter-white .pace .pace-progress:after{color:hsla(0,0%,100%,.2)}.pace-bounce-white .pace .pace-activity{background:#fff}.pace-center-atom-white .pace-progress{height:100px;width:80px}.pace-center-atom-white .pace-progress:before{background:#fff;color:#1f2d3d;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-white .pace-activity,.pace-center-atom-white .pace-activity:after,.pace-center-atom-white .pace-activity:before{border-color:#fff}.pace-center-circle-white .pace .pace-progress{background:hsla(0,0%,100%,.8);color:#1f2d3d}.pace-center-radar-white .pace .pace-activity,.pace-center-radar-white .pace .pace-activity:before{border-color:#fff transparent transparent}.pace-center-simple-white .pace{background:#1f2d3d;border-color:#fff}.pace-center-simple-white .pace .pace-progress{background:#fff}.pace-material-white .pace{color:#fff}.pace-corner-indicator-white .pace .pace-activity{background:#fff}.pace-corner-indicator-white .pace .pace-activity:after,.pace-corner-indicator-white .pace .pace-activity:before{border:5px solid #1f2d3d}.pace-corner-indicator-white .pace .pace-activity:before{border-right-color:hsla(0,0%,100%,.2);border-left-color:hsla(0,0%,100%,.2)}.pace-corner-indicator-white .pace .pace-activity:after{border-top-color:hsla(0,0%,100%,.2);border-bottom-color:hsla(0,0%,100%,.2)}.pace-fill-left-white .pace .pace-progress{background-color:hsla(0,0%,100%,.2)}.pace-flash-white .pace .pace-progress{background:#fff}.pace-flash-white .pace .pace-progress-inner{box-shadow:0 0 10px #fff,0 0 5px #fff}.pace-flash-white .pace .pace-activity{border-top-color:#fff;border-left-color:#fff}.pace-loading-bar-white .pace .pace-progress{background:#fff;color:#fff;box-shadow:120px 0 #1f2d3d,240px 0 #1f2d3d}.pace-loading-bar-white .pace .pace-activity{box-shadow:inset 0 0 0 2px #fff,inset 0 0 0 7px #1f2d3d}.pace-mac-osx-white .pace .pace-progress{background-color:#fff;box-shadow:inset -1px 0 #fff,inset 0 -1px #fff,inset 0 2px rgba(31,45,61,.5),inset 0 6px rgba(31,45,61,.3)}.pace-mac-osx-white .pace .pace-activity{background-image:radial-gradient(rgba(31,45,61,.65) 0,rgba(31,45,61,.15) 100%);height:12px}.pace-progress-color-white .pace-progress{color:#fff}.pace-gray .pace .pace-progress{background:#6c757d}.pace-barber-shop-gray .pace{background:#fff}.pace-barber-shop-gray .pace .pace-progress{background:#6c757d}.pace-barber-shop-gray .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-gray .pace .pace-progress:after{color:hsla(208,7%,46%,.2)}.pace-bounce-gray .pace .pace-activity{background:#6c757d}.pace-center-atom-gray .pace-progress{height:100px;width:80px}.pace-center-atom-gray .pace-progress:before{background:#6c757d;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-gray .pace-activity,.pace-center-atom-gray .pace-activity:after,.pace-center-atom-gray .pace-activity:before{border-color:#6c757d}.pace-center-circle-gray .pace .pace-progress{background:hsla(208,7%,46%,.8);color:#fff}.pace-center-radar-gray .pace .pace-activity,.pace-center-radar-gray .pace .pace-activity:before{border-color:#6c757d transparent transparent}.pace-center-simple-gray .pace{background:#fff;border-color:#6c757d}.pace-center-simple-gray .pace .pace-progress{background:#6c757d}.pace-material-gray .pace{color:#6c757d}.pace-corner-indicator-gray .pace .pace-activity{background:#6c757d}.pace-corner-indicator-gray .pace .pace-activity:after,.pace-corner-indicator-gray .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-gray .pace .pace-activity:before{border-right-color:hsla(208,7%,46%,.2);border-left-color:hsla(208,7%,46%,.2)}.pace-corner-indicator-gray .pace .pace-activity:after{border-top-color:hsla(208,7%,46%,.2);border-bottom-color:hsla(208,7%,46%,.2)}.pace-fill-left-gray .pace .pace-progress{background-color:hsla(208,7%,46%,.2)}.pace-flash-gray .pace .pace-progress{background:#6c757d}.pace-flash-gray .pace .pace-progress-inner{box-shadow:0 0 10px #6c757d,0 0 5px #6c757d}.pace-flash-gray .pace .pace-activity{border-top-color:#6c757d;border-left-color:#6c757d}.pace-loading-bar-gray .pace .pace-progress{background:#6c757d;color:#6c757d;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-gray .pace .pace-activity{box-shadow:inset 0 0 0 2px #6c757d,inset 0 0 0 7px #fff}.pace-mac-osx-gray .pace .pace-progress{background-color:#6c757d;box-shadow:inset -1px 0 #6c757d,inset 0 -1px #6c757d,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-gray .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-gray .pace-progress{color:#6c757d}.pace-gray-dark .pace .pace-progress{background:#343a40}.pace-barber-shop-gray-dark .pace{background:#fff}.pace-barber-shop-gray-dark .pace .pace-progress{background:#343a40}.pace-barber-shop-gray-dark .pace .pace-activity{background-image:linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)}.pace-big-counter-gray-dark .pace .pace-progress:after{color:rgba(52,58,64,.2)}.pace-bounce-gray-dark .pace .pace-activity{background:#343a40}.pace-center-atom-gray-dark .pace-progress{height:100px;width:80px}.pace-center-atom-gray-dark .pace-progress:before{background:#343a40;color:#fff;font-size:.8rem;line-height:.7rem;padding-top:17%}.pace-center-atom-gray-dark .pace-activity,.pace-center-atom-gray-dark .pace-activity:after,.pace-center-atom-gray-dark .pace-activity:before{border-color:#343a40}.pace-center-circle-gray-dark .pace .pace-progress{background:rgba(52,58,64,.8);color:#fff}.pace-center-radar-gray-dark .pace .pace-activity,.pace-center-radar-gray-dark .pace .pace-activity:before{border-color:#343a40 transparent transparent}.pace-center-simple-gray-dark .pace{background:#fff;border-color:#343a40}.pace-center-simple-gray-dark .pace .pace-progress{background:#343a40}.pace-material-gray-dark .pace{color:#343a40}.pace-corner-indicator-gray-dark .pace .pace-activity{background:#343a40}.pace-corner-indicator-gray-dark .pace .pace-activity:after,.pace-corner-indicator-gray-dark .pace .pace-activity:before{border:5px solid #fff}.pace-corner-indicator-gray-dark .pace .pace-activity:before{border-right-color:rgba(52,58,64,.2);border-left-color:rgba(52,58,64,.2)}.pace-corner-indicator-gray-dark .pace .pace-activity:after{border-top-color:rgba(52,58,64,.2);border-bottom-color:rgba(52,58,64,.2)}.pace-fill-left-gray-dark .pace .pace-progress{background-color:rgba(52,58,64,.2)}.pace-flash-gray-dark .pace .pace-progress{background:#343a40}.pace-flash-gray-dark .pace .pace-progress-inner{box-shadow:0 0 10px #343a40,0 0 5px #343a40}.pace-flash-gray-dark .pace .pace-activity{border-top-color:#343a40;border-left-color:#343a40}.pace-loading-bar-gray-dark .pace .pace-progress{background:#343a40;color:#343a40;box-shadow:120px 0 #fff,240px 0 #fff}.pace-loading-bar-gray-dark .pace .pace-activity{box-shadow:inset 0 0 0 2px #343a40,inset 0 0 0 7px #fff}.pace-mac-osx-gray-dark .pace .pace-progress{background-color:#343a40;box-shadow:inset -1px 0 #343a40,inset 0 -1px #343a40,inset 0 2px hsla(0,0%,100%,.5),inset 0 6px hsla(0,0%,100%,.3)}.pace-mac-osx-gray-dark .pace .pace-activity{background-image:radial-gradient(hsla(0,0%,100%,.65) 0,hsla(0,0%,100%,.15) 100%);height:12px}.pace-progress-color-gray-dark .pace-progress{color:#343a40}.bootstrap-switch{border:1px solid #ced4da;border-radius:.25rem;cursor:pointer;direction:ltr;display:inline-block;line-height:.5rem;overflow:hidden;position:relative;text-align:left;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;z-index:0}.bootstrap-switch .bootstrap-switch-container{border-radius:.25rem;display:inline-block;top:0;-webkit-transform:translateZ(0);transform:translateZ(0)}.bootstrap-switch:focus-within{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.bootstrap-switch .bootstrap-switch-handle-off,.bootstrap-switch .bootstrap-switch-handle-on,.bootstrap-switch .bootstrap-switch-label{box-sizing:border-box;cursor:pointer;display:table-cell;font-size:1rem;font-weight:500;line-height:1.2rem;padding:.25rem .5rem;vertical-align:middle}.bootstrap-switch .bootstrap-switch-handle-off,.bootstrap-switch .bootstrap-switch-handle-on{text-align:center;z-index:1}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-default,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-default{background:#e9ecef;color:#1f2d3d}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-primary,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-primary{background:#007bff;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-secondary,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-secondary{background:#6c757d;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-success,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-success{background:#28a745;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-info,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-info{background:#17a2b8;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-warning,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-warning{background:#ffc107;color:#1f2d3d}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-danger,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-danger{background:#dc3545;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-light,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-light{background:#f8f9fa;color:#1f2d3d}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-dark,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-dark{background:#343a40;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-lightblue,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-lightblue{background:#3c8dbc;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-navy,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-navy{background:#001f3f;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-olive,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-olive{background:#3d9970;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-lime,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-lime{background:#01ff70;color:#1f2d3d}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-fuchsia,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-fuchsia{background:#f012be;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-maroon,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-maroon{background:#d81b60;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-blue,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-blue{background:#007bff;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-indigo,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-indigo{background:#6610f2;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-purple,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-purple{background:#6f42c1;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-pink,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-pink{background:#e83e8c;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-red,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-red{background:#dc3545;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-orange,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-orange{background:#fd7e14;color:#1f2d3d}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-yellow,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-yellow{background:#ffc107;color:#1f2d3d}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-green,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-green{background:#28a745;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-teal,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-teal{background:#20c997;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-cyan,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-cyan{background:#17a2b8;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-white,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-white{background:#fff;color:#1f2d3d}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-gray,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-gray{background:#6c757d;color:#fff}.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-gray-dark,.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-gray-dark{background:#343a40;color:#fff}.bootstrap-switch .bootstrap-switch-handle-on{border-bottom-left-radius:.1rem;border-top-left-radius:.1rem}.bootstrap-switch .bootstrap-switch-handle-off{border-bottom-right-radius:.1rem;border-top-right-radius:.1rem}.bootstrap-switch input[type=checkbox],.bootstrap-switch input[type=radio]{left:0;margin:0;opacity:0;position:absolute;top:0;visibility:hidden;z-index:-1}.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-off,.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-on,.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-label{font-size:.875rem;line-height:1.5;padding:.1rem .3rem}.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-off,.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-on,.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-label{font-size:.875rem;line-height:1.5;padding:.2rem .4rem}.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-off,.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-on,.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-label{font-size:1.25rem;line-height:1.3333333rem;padding:.3rem .5rem}.bootstrap-switch.bootstrap-switch-disabled,.bootstrap-switch.bootstrap-switch-indeterminate,.bootstrap-switch.bootstrap-switch-readonly{cursor:default}.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-off,.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-on,.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-label,.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-off,.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-on,.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-label,.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-off,.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-on,.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-label{cursor:default;opacity:.5}.bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container{transition:margin-left .5s}.bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-on{border-radius:0 .1rem .1rem 0}.bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-off{border-radius:.1rem 0 0 .1rem}.bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-off .bootstrap-switch-label,.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-label{border-bottom-right-radius:.1rem;border-top-right-radius:.1rem}.bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-on .bootstrap-switch-label,.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-label{border-bottom-left-radius:.1rem;border-top-left-radius:.1rem}.jqstooltip{height:auto!important;padding:5px!important;width:auto!important}.connectedSortable{min-height:100px}.ui-helper-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sort-highlight{background:#f8f9fa;border:1px dashed #dee2e6;margin-bottom:10px}.chart{overflow:hidden;position:relative}.border-transparent{border-color:transparent!important}.description-block{display:block;margin:10px 0;text-align:center}.description-block.margin-bottom{margin-bottom:25px}.description-block>.description-header{font-size:16px;font-weight:600;margin:0;padding:0}.description-block>.description-text{text-transform:uppercase}.description-block .description-icon{font-size:16px}.list-group-unbordered>.list-group-item{border-left:0;border-radius:0;border-right:0;padding-left:0;padding-right:0}.list-header{color:#6c757d;font-size:15px;font-weight:700;padding:10px 4px}.list-seperator{background:rgba(0,0,0,.125);height:1px;margin:15px 0 9px}.list-link>a{color:#6c757d;padding:4px}.list-link>a:hover{color:#212529}.user-block{float:left}.user-block img{float:left;height:40px;width:40px}.user-block .comment,.user-block .description,.user-block .username{display:block;margin-left:50px}.user-block .username{font-size:16px;font-weight:600;margin-top:-1px}.user-block .description{color:#6c757d;font-size:13px;margin-top:-3px}.user-block.user-block-sm img{width:1.875rem;height:1.875rem}.user-block.user-block-sm .comment,.user-block.user-block-sm .description,.user-block.user-block-sm .username{margin-left:40px}.user-block.user-block-sm .username{font-size:14px}.img-lg,.img-md,.img-sm{float:left}.img-sm{height:1.875rem;width:1.875rem}.img-sm+.img-push{margin-left:2.5rem}.img-md{width:3.75rem;height:3.75rem}.img-md+.img-push{margin-left:4.375rem}.img-lg{width:6.25rem;height:6.25rem}.img-lg+.img-push{margin-left:6.875rem}.img-bordered{border:3px solid #adb5bd;padding:3px}.img-bordered-sm{border:2px solid #adb5bd;padding:2px}.img-rounded{border-radius:.25rem}.img-circle{border-radius:50%}.img-size-32,.img-size-50,.img-size-64{height:auto}.img-size-64{width:64px}.img-size-50{width:50px}.img-size-32{width:32px}.size-32,.size-40,.size-50{display:block;text-align:center}.size-32{height:32px;line-height:32px;width:32px}.size-40{height:40px;line-height:40px;width:40px}.size-50{height:50px;line-height:50px;width:50px}.attachment-block{background:#f8f9fa;border:1px solid rgba(0,0,0,.125);margin-bottom:10px;padding:5px}.attachment-block .attachment-img{float:left;height:auto;max-height:100px;max-width:100px}.attachment-block .attachment-pushed{margin-left:110px}.attachment-block .attachment-heading{margin:0}.attachment-block .attachment-text{color:#495057}.card>.loading-img,.card>.overlay,.info-box>.loading-img,.info-box>.overlay,.overlay-wrapper>.loading-img,.overlay-wrapper>.overlay,.small-box>.loading-img,.small-box>.overlay{height:100%;left:0;position:absolute;top:0;width:100%}.card .overlay,.info-box .overlay,.overlay-wrapper .overlay,.small-box .overlay{border-radius:.25rem;-ms-flex-align:center;align-items:center;background:hsla(0,0%,100%,.7);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;z-index:50}.card .overlay>.fa,.card .overlay>.fab,.card .overlay>.far,.card .overlay>.fas,.card .overlay>.glyphicon,.card .overlay>.ion,.info-box .overlay>.fa,.info-box .overlay>.fab,.info-box .overlay>.far,.info-box .overlay>.fas,.info-box .overlay>.glyphicon,.info-box .overlay>.ion,.overlay-wrapper .overlay>.fa,.overlay-wrapper .overlay>.fab,.overlay-wrapper .overlay>.far,.overlay-wrapper .overlay>.fas,.overlay-wrapper .overlay>.glyphicon,.overlay-wrapper .overlay>.ion,.small-box .overlay>.fa,.small-box .overlay>.fab,.small-box .overlay>.far,.small-box .overlay>.fas,.small-box .overlay>.glyphicon,.small-box .overlay>.ion{color:#343a40}.card .overlay.dark,.info-box .overlay.dark,.overlay-wrapper .overlay.dark,.small-box .overlay.dark{background:rgba(0,0,0,.5)}.card .overlay.dark>.fa,.card .overlay.dark>.fab,.card .overlay.dark>.far,.card .overlay.dark>.fas,.card .overlay.dark>.glyphicon,.card .overlay.dark>.ion,.info-box .overlay.dark>.fa,.info-box .overlay.dark>.fab,.info-box .overlay.dark>.far,.info-box .overlay.dark>.fas,.info-box .overlay.dark>.glyphicon,.info-box .overlay.dark>.ion,.overlay-wrapper .overlay.dark>.fa,.overlay-wrapper .overlay.dark>.fab,.overlay-wrapper .overlay.dark>.far,.overlay-wrapper .overlay.dark>.fas,.overlay-wrapper .overlay.dark>.glyphicon,.overlay-wrapper .overlay.dark>.ion,.small-box .overlay.dark>.fa,.small-box .overlay.dark>.fab,.small-box .overlay.dark>.far,.small-box .overlay.dark>.fas,.small-box .overlay.dark>.glyphicon,.small-box .overlay.dark>.ion{color:#ced4da}.tab-pane>.overlay-wrapper{position:relative}.tab-pane>.overlay-wrapper>.overlay{border-top-left-radius:0;border-top-right-radius:0;-ms-flex-direction:column;flex-direction:column;margin-top:-1.25rem;margin-left:-1.25rem;height:calc(100% + 2 * 1.25rem);width:calc(100% + 2 * 1.25rem)}.tab-pane>.overlay-wrapper>.overlay.dark{color:#fff}.ribbon-wrapper{height:70px;overflow:hidden;position:absolute;right:-2px;top:-2px;width:70px;z-index:10}.ribbon-wrapper.ribbon-lg{height:120px;width:120px}.ribbon-wrapper.ribbon-lg .ribbon{right:0;top:26px;width:160px}.ribbon-wrapper.ribbon-xl{height:180px;width:180px}.ribbon-wrapper.ribbon-xl .ribbon{right:4px;top:47px;width:240px}.ribbon-wrapper .ribbon{box-shadow:0 0 3px rgba(0,0,0,.3);font-size:.8rem;line-height:100%;padding:.375rem 0;position:relative;right:-2px;text-align:center;text-shadow:0 -1px 0 rgba(0,0,0,.4);text-transform:uppercase;top:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:90px}.ribbon-wrapper .ribbon:after,.ribbon-wrapper .ribbon:before{border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #9e9e9e;bottom:-3px;content:\"\";position:absolute}.ribbon-wrapper .ribbon:before{left:0}.ribbon-wrapper .ribbon:after{right:0}.back-to-top{bottom:1.25rem;position:fixed;right:1.25rem;z-index:1032}.back-to-top:focus{box-shadow:none}pre{padding:.75rem}blockquote{background:#fff;border-left:.7rem solid #007bff;margin:1.5em .7rem;padding:.5em .7rem}.box blockquote{background:#e9ecef}blockquote p:last-child{margin-bottom:0}blockquote h1,blockquote h2,blockquote h3,blockquote h4,blockquote h5,blockquote h6{color:#007bff;font-size:1.25rem;font-weight:600}blockquote.quote-primary{border-color:#007bff}blockquote.quote-primary h1,blockquote.quote-primary h2,blockquote.quote-primary h3,blockquote.quote-primary h4,blockquote.quote-primary h5,blockquote.quote-primary h6{color:#007bff}blockquote.quote-secondary{border-color:#6c757d}blockquote.quote-secondary h1,blockquote.quote-secondary h2,blockquote.quote-secondary h3,blockquote.quote-secondary h4,blockquote.quote-secondary h5,blockquote.quote-secondary h6{color:#6c757d}blockquote.quote-success{border-color:#28a745}blockquote.quote-success h1,blockquote.quote-success h2,blockquote.quote-success h3,blockquote.quote-success h4,blockquote.quote-success h5,blockquote.quote-success h6{color:#28a745}blockquote.quote-info{border-color:#17a2b8}blockquote.quote-info h1,blockquote.quote-info h2,blockquote.quote-info h3,blockquote.quote-info h4,blockquote.quote-info h5,blockquote.quote-info h6{color:#17a2b8}blockquote.quote-warning{border-color:#ffc107}blockquote.quote-warning h1,blockquote.quote-warning h2,blockquote.quote-warning h3,blockquote.quote-warning h4,blockquote.quote-warning h5,blockquote.quote-warning h6{color:#ffc107}blockquote.quote-danger{border-color:#dc3545}blockquote.quote-danger h1,blockquote.quote-danger h2,blockquote.quote-danger h3,blockquote.quote-danger h4,blockquote.quote-danger h5,blockquote.quote-danger h6{color:#dc3545}blockquote.quote-light{border-color:#f8f9fa}blockquote.quote-light h1,blockquote.quote-light h2,blockquote.quote-light h3,blockquote.quote-light h4,blockquote.quote-light h5,blockquote.quote-light h6{color:#f8f9fa}blockquote.quote-dark{border-color:#343a40}blockquote.quote-dark h1,blockquote.quote-dark h2,blockquote.quote-dark h3,blockquote.quote-dark h4,blockquote.quote-dark h5,blockquote.quote-dark h6{color:#343a40}blockquote.quote-lightblue{border-color:#3c8dbc}blockquote.quote-lightblue h1,blockquote.quote-lightblue h2,blockquote.quote-lightblue h3,blockquote.quote-lightblue h4,blockquote.quote-lightblue h5,blockquote.quote-lightblue h6{color:#3c8dbc}blockquote.quote-navy{border-color:#001f3f}blockquote.quote-navy h1,blockquote.quote-navy h2,blockquote.quote-navy h3,blockquote.quote-navy h4,blockquote.quote-navy h5,blockquote.quote-navy h6{color:#001f3f}blockquote.quote-olive{border-color:#3d9970}blockquote.quote-olive h1,blockquote.quote-olive h2,blockquote.quote-olive h3,blockquote.quote-olive h4,blockquote.quote-olive h5,blockquote.quote-olive h6{color:#3d9970}blockquote.quote-lime{border-color:#01ff70}blockquote.quote-lime h1,blockquote.quote-lime h2,blockquote.quote-lime h3,blockquote.quote-lime h4,blockquote.quote-lime h5,blockquote.quote-lime h6{color:#01ff70}blockquote.quote-fuchsia{border-color:#f012be}blockquote.quote-fuchsia h1,blockquote.quote-fuchsia h2,blockquote.quote-fuchsia h3,blockquote.quote-fuchsia h4,blockquote.quote-fuchsia h5,blockquote.quote-fuchsia h6{color:#f012be}blockquote.quote-maroon{border-color:#d81b60}blockquote.quote-maroon h1,blockquote.quote-maroon h2,blockquote.quote-maroon h3,blockquote.quote-maroon h4,blockquote.quote-maroon h5,blockquote.quote-maroon h6{color:#d81b60}blockquote.quote-blue{border-color:#007bff}blockquote.quote-blue h1,blockquote.quote-blue h2,blockquote.quote-blue h3,blockquote.quote-blue h4,blockquote.quote-blue h5,blockquote.quote-blue h6{color:#007bff}blockquote.quote-indigo{border-color:#6610f2}blockquote.quote-indigo h1,blockquote.quote-indigo h2,blockquote.quote-indigo h3,blockquote.quote-indigo h4,blockquote.quote-indigo h5,blockquote.quote-indigo h6{color:#6610f2}blockquote.quote-purple{border-color:#6f42c1}blockquote.quote-purple h1,blockquote.quote-purple h2,blockquote.quote-purple h3,blockquote.quote-purple h4,blockquote.quote-purple h5,blockquote.quote-purple h6{color:#6f42c1}blockquote.quote-pink{border-color:#e83e8c}blockquote.quote-pink h1,blockquote.quote-pink h2,blockquote.quote-pink h3,blockquote.quote-pink h4,blockquote.quote-pink h5,blockquote.quote-pink h6{color:#e83e8c}blockquote.quote-red{border-color:#dc3545}blockquote.quote-red h1,blockquote.quote-red h2,blockquote.quote-red h3,blockquote.quote-red h4,blockquote.quote-red h5,blockquote.quote-red h6{color:#dc3545}blockquote.quote-orange{border-color:#fd7e14}blockquote.quote-orange h1,blockquote.quote-orange h2,blockquote.quote-orange h3,blockquote.quote-orange h4,blockquote.quote-orange h5,blockquote.quote-orange h6{color:#fd7e14}blockquote.quote-yellow{border-color:#ffc107}blockquote.quote-yellow h1,blockquote.quote-yellow h2,blockquote.quote-yellow h3,blockquote.quote-yellow h4,blockquote.quote-yellow h5,blockquote.quote-yellow h6{color:#ffc107}blockquote.quote-green{border-color:#28a745}blockquote.quote-green h1,blockquote.quote-green h2,blockquote.quote-green h3,blockquote.quote-green h4,blockquote.quote-green h5,blockquote.quote-green h6{color:#28a745}blockquote.quote-teal{border-color:#20c997}blockquote.quote-teal h1,blockquote.quote-teal h2,blockquote.quote-teal h3,blockquote.quote-teal h4,blockquote.quote-teal h5,blockquote.quote-teal h6{color:#20c997}blockquote.quote-cyan{border-color:#17a2b8}blockquote.quote-cyan h1,blockquote.quote-cyan h2,blockquote.quote-cyan h3,blockquote.quote-cyan h4,blockquote.quote-cyan h5,blockquote.quote-cyan h6{color:#17a2b8}blockquote.quote-white{border-color:#fff}blockquote.quote-white h1,blockquote.quote-white h2,blockquote.quote-white h3,blockquote.quote-white h4,blockquote.quote-white h5,blockquote.quote-white h6{color:#fff}blockquote.quote-gray{border-color:#6c757d}blockquote.quote-gray h1,blockquote.quote-gray h2,blockquote.quote-gray h3,blockquote.quote-gray h4,blockquote.quote-gray h5,blockquote.quote-gray h6{color:#6c757d}blockquote.quote-gray-dark{border-color:#343a40}blockquote.quote-gray-dark h1,blockquote.quote-gray-dark h2,blockquote.quote-gray-dark h3,blockquote.quote-gray-dark h4,blockquote.quote-gray-dark h5,blockquote.quote-gray-dark h6{color:#343a40}.tab-custom-content{border-top:1px solid #dee2e6;margin-top:.5rem;padding-top:.5rem}.nav+.tab-custom-content{border-top:none;border-bottom:1px solid #dee2e6;margin-top:0;margin-bottom:.5rem;padding-bottom:.5rem}.badge-btn{border-radius:.15rem;font-size:.75rem;font-weight:400;padding:.25rem .5rem}.badge-btn.badge-pill{padding:.375rem .6rem}@media print{.content-header,.main-header,.main-sidebar,.no-print{display:none!important}.content-wrapper,.main-footer{-webkit-transform:translate(0);transform:translate(0);margin-left:0!important;min-height:0!important}.layout-fixed .content-wrapper{padding-top:0!important}.invoice{border:0;margin:0;padding:0;width:100%}.invoice-col{float:left;width:33.3333333%}.table-responsive{overflow:auto}.table-responsive>.table tr td,.table-responsive>.table tr th{white-space:normal!important}}.text-bold,.text-bold.table td,.text-bold.table th{font-weight:700}.text-xs{font-size:.75rem!important}.text-sm{font-size:.875rem!important}.text-md{font-size:1rem!important}.text-lg{font-size:1.25rem!important}.text-xl{font-size:2rem!important}.text-lightblue{color:#3c8dbc!important}.text-navy{color:#001f3f!important}.text-olive{color:#3d9970!important}.text-lime{color:#01ff70!important}.text-fuchsia{color:#f012be!important}.text-maroon{color:#d81b60!important}.text-blue{color:#007bff!important}.text-indigo{color:#6610f2!important}.text-purple{color:#6f42c1!important}.text-pink{color:#e83e8c!important}.text-red{color:#dc3545!important}.text-orange{color:#fd7e14!important}.text-yellow{color:#ffc107!important}.text-green{color:#28a745!important}.text-teal{color:#20c997!important}.text-cyan{color:#17a2b8!important}.text-white{color:#fff!important}.text-gray{color:#6c757d!important}.text-gray-dark{color:#343a40!important}.elevation-0{box-shadow:none!important}.elevation-1{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)!important}.elevation-2{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)!important}.elevation-3{box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)!important}.elevation-4{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)!important}.elevation-5{box-shadow:0 19px 38px rgba(0,0,0,.3),0 15px 12px rgba(0,0,0,.22)!important}.bg-primary{background-color:#007bff!important}.bg-primary,.bg-primary>a{color:#fff!important}.bg-primary.btn:hover{border-color:#0062cc;color:#ececec}.bg-primary.btn.active,.bg-primary.btn:active,.bg-primary.btn:not(:disabled):not(.disabled).active,.bg-primary.btn:not(:disabled):not(.disabled):active{background-color:#0062cc!important;border-color:#005cbf;color:#fff}.bg-secondary{background-color:#6c757d!important}.bg-secondary,.bg-secondary>a{color:#fff!important}.bg-secondary.btn:hover{border-color:#545b62;color:#ececec}.bg-secondary.btn.active,.bg-secondary.btn:active,.bg-secondary.btn:not(:disabled):not(.disabled).active,.bg-secondary.btn:not(:disabled):not(.disabled):active{background-color:#545b62!important;border-color:#4e555b;color:#fff}.bg-success{background-color:#28a745!important}.bg-success,.bg-success>a{color:#fff!important}.bg-success.btn:hover{border-color:#1e7e34;color:#ececec}.bg-success.btn.active,.bg-success.btn:active,.bg-success.btn:not(:disabled):not(.disabled).active,.bg-success.btn:not(:disabled):not(.disabled):active{background-color:#1e7e34!important;border-color:#1c7430;color:#fff}.bg-info{background-color:#17a2b8!important}.bg-info,.bg-info>a{color:#fff!important}.bg-info.btn:hover{border-color:#117a8b;color:#ececec}.bg-info.btn.active,.bg-info.btn:active,.bg-info.btn:not(:disabled):not(.disabled).active,.bg-info.btn:not(:disabled):not(.disabled):active{background-color:#117a8b!important;border-color:#10707f;color:#fff}.bg-warning{background-color:#ffc107!important}.bg-warning,.bg-warning>a{color:#1f2d3d!important}.bg-warning.btn:hover{border-color:#d39e00;color:#121a24}.bg-warning.btn.active,.bg-warning.btn:active,.bg-warning.btn:not(:disabled):not(.disabled).active,.bg-warning.btn:not(:disabled):not(.disabled):active{background-color:#d39e00!important;border-color:#c69500;color:#1f2d3d}.bg-danger{background-color:#dc3545!important}.bg-danger,.bg-danger>a{color:#fff!important}.bg-danger.btn:hover{border-color:#bd2130;color:#ececec}.bg-danger.btn.active,.bg-danger.btn:active,.bg-danger.btn:not(:disabled):not(.disabled).active,.bg-danger.btn:not(:disabled):not(.disabled):active{background-color:#bd2130!important;border-color:#b21f2d;color:#fff}.bg-light{background-color:#f8f9fa!important}.bg-light,.bg-light>a{color:#1f2d3d!important}.bg-light.btn:hover{border-color:#dae0e5;color:#121a24}.bg-light.btn.active,.bg-light.btn:active,.bg-light.btn:not(:disabled):not(.disabled).active,.bg-light.btn:not(:disabled):not(.disabled):active{background-color:#dae0e5!important;border-color:#d3d9df;color:#1f2d3d}.bg-dark{background-color:#343a40!important}.bg-dark,.bg-dark>a{color:#fff!important}.bg-dark.btn:hover{border-color:#1d2124;color:#ececec}.bg-dark.btn.active,.bg-dark.btn:active,.bg-dark.btn:not(:disabled):not(.disabled).active,.bg-dark.btn:not(:disabled):not(.disabled):active{background-color:#1d2124!important;border-color:#171a1d;color:#fff}.bg-lightblue{background-color:#3c8dbc!important}.bg-lightblue,.bg-lightblue>a{color:#fff!important}.bg-lightblue.btn:hover{border-color:#307095;color:#ececec}.bg-lightblue.btn.active,.bg-lightblue.btn:active,.bg-lightblue.btn:not(:disabled):not(.disabled).active,.bg-lightblue.btn:not(:disabled):not(.disabled):active{background-color:#307095!important;border-color:#2d698c;color:#fff}.bg-navy{background-color:#001f3f!important}.bg-navy,.bg-navy>a{color:#fff!important}.bg-navy.btn:hover{border-color:#00060c;color:#ececec}.bg-navy.btn.active,.bg-navy.btn:active,.bg-navy.btn:not(:disabled):not(.disabled).active,.bg-navy.btn:not(:disabled):not(.disabled):active{background-color:#00060c!important;border-color:#000;color:#fff}.bg-olive{background-color:#3d9970!important}.bg-olive,.bg-olive>a{color:#fff!important}.bg-olive.btn:hover{border-color:#2e7555;color:#ececec}.bg-olive.btn.active,.bg-olive.btn:active,.bg-olive.btn:not(:disabled):not(.disabled).active,.bg-olive.btn:not(:disabled):not(.disabled):active{background-color:#2e7555!important;border-color:#2b6b4f;color:#fff}.bg-lime{background-color:#01ff70!important}.bg-lime,.bg-lime>a{color:#1f2d3d!important}.bg-lime.btn:hover{border-color:#00cd5a;color:#121a24}.bg-lime.btn.active,.bg-lime.btn:active,.bg-lime.btn:not(:disabled):not(.disabled).active,.bg-lime.btn:not(:disabled):not(.disabled):active{background-color:#00cd5a!important;border-color:#00c054;color:#fff}.bg-fuchsia{background-color:#f012be!important}.bg-fuchsia,.bg-fuchsia>a{color:#fff!important}.bg-fuchsia.btn:hover{border-color:#c30c9a;color:#ececec}.bg-fuchsia.btn.active,.bg-fuchsia.btn:active,.bg-fuchsia.btn:not(:disabled):not(.disabled).active,.bg-fuchsia.btn:not(:disabled):not(.disabled):active{background-color:#c30c9a!important;border-color:#b70c90;color:#fff}.bg-maroon{background-color:#d81b60!important}.bg-maroon,.bg-maroon>a{color:#fff!important}.bg-maroon.btn:hover{border-color:#ab154c;color:#ececec}.bg-maroon.btn.active,.bg-maroon.btn:active,.bg-maroon.btn:not(:disabled):not(.disabled).active,.bg-maroon.btn:not(:disabled):not(.disabled):active{background-color:#ab154c!important;border-color:#9f1447;color:#fff}.bg-blue{background-color:#007bff!important}.bg-blue,.bg-blue>a{color:#fff!important}.bg-blue.btn:hover{border-color:#0062cc;color:#ececec}.bg-blue.btn.active,.bg-blue.btn:active,.bg-blue.btn:not(:disabled):not(.disabled).active,.bg-blue.btn:not(:disabled):not(.disabled):active{background-color:#0062cc!important;border-color:#005cbf;color:#fff}.bg-indigo{background-color:#6610f2!important}.bg-indigo,.bg-indigo>a{color:#fff!important}.bg-indigo.btn:hover{border-color:#510bc4;color:#ececec}.bg-indigo.btn.active,.bg-indigo.btn:active,.bg-indigo.btn:not(:disabled):not(.disabled).active,.bg-indigo.btn:not(:disabled):not(.disabled):active{background-color:#510bc4!important;border-color:#4c0ab8;color:#fff}.bg-purple{background-color:#6f42c1!important}.bg-purple,.bg-purple>a{color:#fff!important}.bg-purple.btn:hover{border-color:#59339d;color:#ececec}.bg-purple.btn.active,.bg-purple.btn:active,.bg-purple.btn:not(:disabled):not(.disabled).active,.bg-purple.btn:not(:disabled):not(.disabled):active{background-color:#59339d!important;border-color:#533093;color:#fff}.bg-pink{background-color:#e83e8c!important}.bg-pink,.bg-pink>a{color:#fff!important}.bg-pink.btn:hover{border-color:#d91a72;color:#ececec}.bg-pink.btn.active,.bg-pink.btn:active,.bg-pink.btn:not(:disabled):not(.disabled).active,.bg-pink.btn:not(:disabled):not(.disabled):active{background-color:#d91a72!important;border-color:#ce196c;color:#fff}.bg-red{background-color:#dc3545!important}.bg-red,.bg-red>a{color:#fff!important}.bg-red.btn:hover{border-color:#bd2130;color:#ececec}.bg-red.btn.active,.bg-red.btn:active,.bg-red.btn:not(:disabled):not(.disabled).active,.bg-red.btn:not(:disabled):not(.disabled):active{background-color:#bd2130!important;border-color:#b21f2d;color:#fff}.bg-orange{background-color:#fd7e14!important}.bg-orange,.bg-orange>a{color:#1f2d3d!important}.bg-orange.btn:hover{border-color:#dc6502;color:#121a24}.bg-orange.btn.active,.bg-orange.btn:active,.bg-orange.btn:not(:disabled):not(.disabled).active,.bg-orange.btn:not(:disabled):not(.disabled):active{background-color:#dc6502!important;border-color:#cf5f02;color:#fff}.bg-yellow{background-color:#ffc107!important}.bg-yellow,.bg-yellow>a{color:#1f2d3d!important}.bg-yellow.btn:hover{border-color:#d39e00;color:#121a24}.bg-yellow.btn.active,.bg-yellow.btn:active,.bg-yellow.btn:not(:disabled):not(.disabled).active,.bg-yellow.btn:not(:disabled):not(.disabled):active{background-color:#d39e00!important;border-color:#c69500;color:#1f2d3d}.bg-green{background-color:#28a745!important}.bg-green,.bg-green>a{color:#fff!important}.bg-green.btn:hover{border-color:#1e7e34;color:#ececec}.bg-green.btn.active,.bg-green.btn:active,.bg-green.btn:not(:disabled):not(.disabled).active,.bg-green.btn:not(:disabled):not(.disabled):active{background-color:#1e7e34!important;border-color:#1c7430;color:#fff}.bg-teal{background-color:#20c997!important}.bg-teal,.bg-teal>a{color:#fff!important}.bg-teal.btn:hover{border-color:#199d76;color:#ececec}.bg-teal.btn.active,.bg-teal.btn:active,.bg-teal.btn:not(:disabled):not(.disabled).active,.bg-teal.btn:not(:disabled):not(.disabled):active{background-color:#199d76!important;border-color:#17926e;color:#fff}.bg-cyan{background-color:#17a2b8!important}.bg-cyan,.bg-cyan>a{color:#fff!important}.bg-cyan.btn:hover{border-color:#117a8b;color:#ececec}.bg-cyan.btn.active,.bg-cyan.btn:active,.bg-cyan.btn:not(:disabled):not(.disabled).active,.bg-cyan.btn:not(:disabled):not(.disabled):active{background-color:#117a8b!important;border-color:#10707f;color:#fff}.bg-white{background-color:#fff!important}.bg-white,.bg-white>a{color:#1f2d3d!important}.bg-white.btn:hover{border-color:#e6e6e6;color:#121a24}.bg-white.btn.active,.bg-white.btn:active,.bg-white.btn:not(:disabled):not(.disabled).active,.bg-white.btn:not(:disabled):not(.disabled):active{background-color:#e6e6e6!important;border-color:#dfdfdf;color:#1f2d3d}.bg-gray{background-color:#6c757d!important}.bg-gray,.bg-gray>a{color:#fff!important}.bg-gray.btn:hover{border-color:#545b62;color:#ececec}.bg-gray.btn.active,.bg-gray.btn:active,.bg-gray.btn:not(:disabled):not(.disabled).active,.bg-gray.btn:not(:disabled):not(.disabled):active{background-color:#545b62!important;border-color:#4e555b;color:#fff}.bg-gray-dark{background-color:#343a40!important}.bg-gray-dark,.bg-gray-dark>a{color:#fff!important}.bg-gray-dark.btn:hover{border-color:#1d2124;color:#ececec}.bg-gray-dark.btn.active,.bg-gray-dark.btn:active,.bg-gray-dark.btn:not(:disabled):not(.disabled).active,.bg-gray-dark.btn:not(:disabled):not(.disabled):active{background-color:#1d2124!important;border-color:#171a1d;color:#fff}.bg-gray{background-color:#adb5bd;color:#1f2d3d}.bg-gray-light{background-color:#f2f4f5;color:#1f2d3d!important}.bg-black{background-color:#000;color:#fff!important}.bg-white{background-color:#fff;color:#1f2d3d!important}.bg-gradient-primary{color:#fff;background:#007bff linear-gradient(180deg,#268fff,#007bff) repeat-x!important}.bg-gradient-primary.btn.disabled,.bg-gradient-primary.btn:disabled,.bg-gradient-primary.btn:not(:disabled):not(.disabled).active,.bg-gradient-primary.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-primary.btn.dropdown-toggle{background-image:none!important}.bg-gradient-primary.btn:hover{border-color:#0062cc;color:#ececec;background:#0069d9 linear-gradient(180deg,#267fde,#0069d9) repeat-x!important}.bg-gradient-primary.btn.active,.bg-gradient-primary.btn:active,.bg-gradient-primary.btn:not(:disabled):not(.disabled).active,.bg-gradient-primary.btn:not(:disabled):not(.disabled):active{border-color:#005cbf;color:#fff;background:#0062cc linear-gradient(180deg,#267ad4,#0062cc) repeat-x!important}.bg-gradient-secondary{color:#fff;background:#6c757d linear-gradient(180deg,#828a91,#6c757d) repeat-x!important}.bg-gradient-secondary.btn.disabled,.bg-gradient-secondary.btn:disabled,.bg-gradient-secondary.btn:not(:disabled):not(.disabled).active,.bg-gradient-secondary.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-secondary.btn.dropdown-toggle{background-image:none!important}.bg-gradient-secondary.btn:hover{border-color:#545b62;color:#ececec;background:#5a6268 linear-gradient(180deg,#73797f,#5a6268) repeat-x!important}.bg-gradient-secondary.btn.active,.bg-gradient-secondary.btn:active,.bg-gradient-secondary.btn:not(:disabled):not(.disabled).active,.bg-gradient-secondary.btn:not(:disabled):not(.disabled):active{border-color:#4e555b;color:#fff;background:#545b62 linear-gradient(180deg,#6e7479,#545b62) repeat-x!important}.bg-gradient-success{color:#fff;background:#28a745 linear-gradient(180deg,#48b461,#28a745) repeat-x!important}.bg-gradient-success.btn.disabled,.bg-gradient-success.btn:disabled,.bg-gradient-success.btn:not(:disabled):not(.disabled).active,.bg-gradient-success.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-success.btn.dropdown-toggle{background-image:none!important}.bg-gradient-success.btn:hover{border-color:#1e7e34;color:#ececec;background:#218838 linear-gradient(180deg,#429a56,#218838) repeat-x!important}.bg-gradient-success.btn.active,.bg-gradient-success.btn:active,.bg-gradient-success.btn:not(:disabled):not(.disabled).active,.bg-gradient-success.btn:not(:disabled):not(.disabled):active{border-color:#1c7430;color:#fff;background:#1e7e34 linear-gradient(180deg,#409152,#1e7e34) repeat-x!important}.bg-gradient-info{color:#fff;background:#17a2b8 linear-gradient(180deg,#3ab0c3,#17a2b8) repeat-x!important}.bg-gradient-info.btn.disabled,.bg-gradient-info.btn:disabled,.bg-gradient-info.btn:not(:disabled):not(.disabled).active,.bg-gradient-info.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-info.btn.dropdown-toggle{background-image:none!important}.bg-gradient-info.btn:hover{border-color:#117a8b;color:#ececec;background:#138496 linear-gradient(180deg,#3697a6,#138496) repeat-x!important}.bg-gradient-info.btn.active,.bg-gradient-info.btn:active,.bg-gradient-info.btn:not(:disabled):not(.disabled).active,.bg-gradient-info.btn:not(:disabled):not(.disabled):active{border-color:#10707f;color:#fff;background:#117a8b linear-gradient(180deg,#358e9c,#117a8b) repeat-x!important}.bg-gradient-warning{color:#1f2d3d;background:#ffc107 linear-gradient(180deg,#ffca2c,#ffc107) repeat-x!important}.bg-gradient-warning.btn.disabled,.bg-gradient-warning.btn:disabled,.bg-gradient-warning.btn:not(:disabled):not(.disabled).active,.bg-gradient-warning.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-warning.btn.dropdown-toggle{background-image:none!important}.bg-gradient-warning.btn:hover{border-color:#d39e00;color:#121a24;background:#e0a800 linear-gradient(180deg,#e4b526,#e0a800) repeat-x!important}.bg-gradient-warning.btn.active,.bg-gradient-warning.btn:active,.bg-gradient-warning.btn:not(:disabled):not(.disabled).active,.bg-gradient-warning.btn:not(:disabled):not(.disabled):active{border-color:#c69500;color:#1f2d3d;background:#d39e00 linear-gradient(180deg,#daad26,#d39e00) repeat-x!important}.bg-gradient-danger{color:#fff;background:#dc3545 linear-gradient(180deg,#e15361,#dc3545) repeat-x!important}.bg-gradient-danger.btn.disabled,.bg-gradient-danger.btn:disabled,.bg-gradient-danger.btn:not(:disabled):not(.disabled).active,.bg-gradient-danger.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-danger.btn.dropdown-toggle{background-image:none!important}.bg-gradient-danger.btn:hover{border-color:#bd2130;color:#ececec;background:#c82333 linear-gradient(180deg,#d04451,#c82333) repeat-x!important}.bg-gradient-danger.btn.active,.bg-gradient-danger.btn:active,.bg-gradient-danger.btn:not(:disabled):not(.disabled).active,.bg-gradient-danger.btn:not(:disabled):not(.disabled):active{border-color:#b21f2d;color:#fff;background:#bd2130 linear-gradient(180deg,#c7424f,#bd2130) repeat-x!important}.bg-gradient-light{color:#1f2d3d;background:#f8f9fa linear-gradient(180deg,#f9fafb,#f8f9fa) repeat-x!important}.bg-gradient-light.btn.disabled,.bg-gradient-light.btn:disabled,.bg-gradient-light.btn:not(:disabled):not(.disabled).active,.bg-gradient-light.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-light.btn.dropdown-toggle{background-image:none!important}.bg-gradient-light.btn:hover{border-color:#dae0e5;color:#121a24;background:#e2e6ea linear-gradient(180deg,#e6eaed,#e2e6ea) repeat-x!important}.bg-gradient-light.btn.active,.bg-gradient-light.btn:active,.bg-gradient-light.btn:not(:disabled):not(.disabled).active,.bg-gradient-light.btn:not(:disabled):not(.disabled):active{border-color:#d3d9df;color:#1f2d3d;background:#dae0e5 linear-gradient(180deg,#e0e4e9,#dae0e5) repeat-x!important}.bg-gradient-dark{color:#fff;background:#343a40 linear-gradient(180deg,#52585d,#343a40) repeat-x!important}.bg-gradient-dark.btn.disabled,.bg-gradient-dark.btn:disabled,.bg-gradient-dark.btn:not(:disabled):not(.disabled).active,.bg-gradient-dark.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-dark.btn.dropdown-toggle{background-image:none!important}.bg-gradient-dark.btn:hover{border-color:#1d2124;color:#ececec;background:#23272b linear-gradient(180deg,#44474b,#23272b) repeat-x!important}.bg-gradient-dark.btn.active,.bg-gradient-dark.btn:active,.bg-gradient-dark.btn:not(:disabled):not(.disabled).active,.bg-gradient-dark.btn:not(:disabled):not(.disabled):active{border-color:#171a1d;color:#fff;background:#1d2124 linear-gradient(180deg,#3f4245,#1d2124) repeat-x!important}.bg-gradient-lightblue{color:#fff;background:#3c8dbc linear-gradient(180deg,#599ec6,#3c8dbc) repeat-x!important}.bg-gradient-lightblue.btn.disabled,.bg-gradient-lightblue.btn:disabled,.bg-gradient-lightblue.btn:not(:disabled):not(.disabled).active,.bg-gradient-lightblue.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-lightblue.btn.dropdown-toggle{background-image:none!important}.bg-gradient-lightblue.btn:hover{border-color:#307095;color:#ececec;background:#33779f linear-gradient(180deg,#518cad,#33779f) repeat-x!important}.bg-gradient-lightblue.btn.active,.bg-gradient-lightblue.btn:active,.bg-gradient-lightblue.btn:not(:disabled):not(.disabled).active,.bg-gradient-lightblue.btn:not(:disabled):not(.disabled):active{border-color:#2d698c;color:#fff;background:#307095 linear-gradient(180deg,#4f85a5,#307095) repeat-x!important}.bg-gradient-navy{color:#fff;background:#001f3f linear-gradient(180deg,#26415c,#001f3f) repeat-x!important}.bg-gradient-navy.btn.disabled,.bg-gradient-navy.btn:disabled,.bg-gradient-navy.btn:not(:disabled):not(.disabled).active,.bg-gradient-navy.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-navy.btn.dropdown-toggle{background-image:none!important}.bg-gradient-navy.btn:hover{border-color:#00060c;color:#ececec;background:#000c19 linear-gradient(180deg,#26313b,#000c19) repeat-x!important}.bg-gradient-navy.btn.active,.bg-gradient-navy.btn:active,.bg-gradient-navy.btn:not(:disabled):not(.disabled).active,.bg-gradient-navy.btn:not(:disabled):not(.disabled):active{border-color:#000;color:#fff;background:#00060c linear-gradient(180deg,#262b30,#00060c) repeat-x!important}.bg-gradient-olive{color:#fff;background:#3d9970 linear-gradient(180deg,#5aa885,#3d9970) repeat-x!important}.bg-gradient-olive.btn.disabled,.bg-gradient-olive.btn:disabled,.bg-gradient-olive.btn:not(:disabled):not(.disabled).active,.bg-gradient-olive.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-olive.btn.dropdown-toggle{background-image:none!important}.bg-gradient-olive.btn:hover{border-color:#2e7555;color:#ececec;background:#327e5c linear-gradient(180deg,#519174,#327e5c) repeat-x!important}.bg-gradient-olive.btn.active,.bg-gradient-olive.btn:active,.bg-gradient-olive.btn:not(:disabled):not(.disabled).active,.bg-gradient-olive.btn:not(:disabled):not(.disabled):active{border-color:#2b6b4f;color:#fff;background:#2e7555 linear-gradient(180deg,#4e896f,#2e7555) repeat-x!important}.bg-gradient-lime{color:#1f2d3d;background:#01ff70 linear-gradient(180deg,#27ff85,#01ff70) repeat-x!important}.bg-gradient-lime.btn.disabled,.bg-gradient-lime.btn:disabled,.bg-gradient-lime.btn:not(:disabled):not(.disabled).active,.bg-gradient-lime.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-lime.btn.dropdown-toggle{background-image:none!important}.bg-gradient-lime.btn:hover{border-color:#00cd5a;color:#121a24;background:#00da5f linear-gradient(180deg,#26df77,#00da5f) repeat-x!important}.bg-gradient-lime.btn.active,.bg-gradient-lime.btn:active,.bg-gradient-lime.btn:not(:disabled):not(.disabled).active,.bg-gradient-lime.btn:not(:disabled):not(.disabled):active{border-color:#00c054;color:#fff;background:#00cd5a linear-gradient(180deg,#26d572,#00cd5a) repeat-x!important}.bg-gradient-fuchsia{color:#fff;background:#f012be linear-gradient(180deg,#f236c8,#f012be) repeat-x!important}.bg-gradient-fuchsia.btn.disabled,.bg-gradient-fuchsia.btn:disabled,.bg-gradient-fuchsia.btn:not(:disabled):not(.disabled).active,.bg-gradient-fuchsia.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-fuchsia.btn.dropdown-toggle{background-image:none!important}.bg-gradient-fuchsia.btn:hover{border-color:#c30c9a;color:#ececec;background:#cf0da3 linear-gradient(180deg,#d631b1,#cf0da3) repeat-x!important}.bg-gradient-fuchsia.btn.active,.bg-gradient-fuchsia.btn:active,.bg-gradient-fuchsia.btn:not(:disabled):not(.disabled).active,.bg-gradient-fuchsia.btn:not(:disabled):not(.disabled):active{border-color:#b70c90;color:#fff;background:#c30c9a linear-gradient(180deg,#cc31a9,#c30c9a) repeat-x!important}.bg-gradient-maroon{color:#fff;background:#d81b60 linear-gradient(180deg,#de3d78,#d81b60) repeat-x!important}.bg-gradient-maroon.btn.disabled,.bg-gradient-maroon.btn:disabled,.bg-gradient-maroon.btn:not(:disabled):not(.disabled).active,.bg-gradient-maroon.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-maroon.btn.dropdown-toggle{background-image:none!important}.bg-gradient-maroon.btn:hover{border-color:#ab154c;color:#ececec;background:#b61751 linear-gradient(180deg,#c13a6b,#b61751) repeat-x!important}.bg-gradient-maroon.btn.active,.bg-gradient-maroon.btn:active,.bg-gradient-maroon.btn:not(:disabled):not(.disabled).active,.bg-gradient-maroon.btn:not(:disabled):not(.disabled):active{border-color:#9f1447;color:#fff;background:#ab154c linear-gradient(180deg,#b73867,#ab154c) repeat-x!important}.bg-gradient-blue{color:#fff;background:#007bff linear-gradient(180deg,#268fff,#007bff) repeat-x!important}.bg-gradient-blue.btn.disabled,.bg-gradient-blue.btn:disabled,.bg-gradient-blue.btn:not(:disabled):not(.disabled).active,.bg-gradient-blue.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-blue.btn.dropdown-toggle{background-image:none!important}.bg-gradient-blue.btn:hover{border-color:#0062cc;color:#ececec;background:#0069d9 linear-gradient(180deg,#267fde,#0069d9) repeat-x!important}.bg-gradient-blue.btn.active,.bg-gradient-blue.btn:active,.bg-gradient-blue.btn:not(:disabled):not(.disabled).active,.bg-gradient-blue.btn:not(:disabled):not(.disabled):active{border-color:#005cbf;color:#fff;background:#0062cc linear-gradient(180deg,#267ad4,#0062cc) repeat-x!important}.bg-gradient-indigo{color:#fff;background:#6610f2 linear-gradient(180deg,#7d34f4,#6610f2) repeat-x!important}.bg-gradient-indigo.btn.disabled,.bg-gradient-indigo.btn:disabled,.bg-gradient-indigo.btn:not(:disabled):not(.disabled).active,.bg-gradient-indigo.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-indigo.btn.dropdown-toggle{background-image:none!important}.bg-gradient-indigo.btn:hover{border-color:#510bc4;color:#ececec;background:#560bd0 linear-gradient(180deg,#7030d7,#560bd0) repeat-x!important}.bg-gradient-indigo.btn.active,.bg-gradient-indigo.btn:active,.bg-gradient-indigo.btn:not(:disabled):not(.disabled).active,.bg-gradient-indigo.btn:not(:disabled):not(.disabled):active{border-color:#4c0ab8;color:#fff;background:#510bc4 linear-gradient(180deg,#6b2fcd,#510bc4) repeat-x!important}.bg-gradient-purple{color:#fff;background:#6f42c1 linear-gradient(180deg,#855eca,#6f42c1) repeat-x!important}.bg-gradient-purple.btn.disabled,.bg-gradient-purple.btn:disabled,.bg-gradient-purple.btn:not(:disabled):not(.disabled).active,.bg-gradient-purple.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-purple.btn.dropdown-toggle{background-image:none!important}.bg-gradient-purple.btn:hover{border-color:#59339d;color:#ececec;background:#5e37a6 linear-gradient(180deg,#7655b4,#5e37a6) repeat-x!important}.bg-gradient-purple.btn.active,.bg-gradient-purple.btn:active,.bg-gradient-purple.btn:not(:disabled):not(.disabled).active,.bg-gradient-purple.btn:not(:disabled):not(.disabled):active{border-color:#533093;color:#fff;background:#59339d linear-gradient(180deg,#7252ab,#59339d) repeat-x!important}.bg-gradient-pink{color:#fff;background:#e83e8c linear-gradient(180deg,#eb5b9d,#e83e8c) repeat-x!important}.bg-gradient-pink.btn.disabled,.bg-gradient-pink.btn:disabled,.bg-gradient-pink.btn:not(:disabled):not(.disabled).active,.bg-gradient-pink.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-pink.btn.dropdown-toggle{background-image:none!important}.bg-gradient-pink.btn:hover{border-color:#d91a72;color:#ececec;background:#e41c78 linear-gradient(180deg,#e83e8c,#e41c78) repeat-x!important}.bg-gradient-pink.btn.active,.bg-gradient-pink.btn:active,.bg-gradient-pink.btn:not(:disabled):not(.disabled).active,.bg-gradient-pink.btn:not(:disabled):not(.disabled):active{border-color:#ce196c;color:#fff;background:#d91a72 linear-gradient(180deg,#df3c87,#d91a72) repeat-x!important}.bg-gradient-red{color:#fff;background:#dc3545 linear-gradient(180deg,#e15361,#dc3545) repeat-x!important}.bg-gradient-red.btn.disabled,.bg-gradient-red.btn:disabled,.bg-gradient-red.btn:not(:disabled):not(.disabled).active,.bg-gradient-red.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-red.btn.dropdown-toggle{background-image:none!important}.bg-gradient-red.btn:hover{border-color:#bd2130;color:#ececec;background:#c82333 linear-gradient(180deg,#d04451,#c82333) repeat-x!important}.bg-gradient-red.btn.active,.bg-gradient-red.btn:active,.bg-gradient-red.btn:not(:disabled):not(.disabled).active,.bg-gradient-red.btn:not(:disabled):not(.disabled):active{border-color:#b21f2d;color:#fff;background:#bd2130 linear-gradient(180deg,#c7424f,#bd2130) repeat-x!important}.bg-gradient-orange{color:#1f2d3d;background:#fd7e14 linear-gradient(180deg,#fd9137,#fd7e14) repeat-x!important}.bg-gradient-orange.btn.disabled,.bg-gradient-orange.btn:disabled,.bg-gradient-orange.btn:not(:disabled):not(.disabled).active,.bg-gradient-orange.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-orange.btn.dropdown-toggle{background-image:none!important}.bg-gradient-orange.btn:hover{border-color:#dc6502;color:#121a24;background:#e96b02 linear-gradient(180deg,#ec8128,#e96b02) repeat-x!important}.bg-gradient-orange.btn.active,.bg-gradient-orange.btn:active,.bg-gradient-orange.btn:not(:disabled):not(.disabled).active,.bg-gradient-orange.btn:not(:disabled):not(.disabled):active{border-color:#cf5f02;color:#fff;background:#dc6502 linear-gradient(180deg,#e17c28,#dc6502) repeat-x!important}.bg-gradient-yellow{color:#1f2d3d;background:#ffc107 linear-gradient(180deg,#ffca2c,#ffc107) repeat-x!important}.bg-gradient-yellow.btn.disabled,.bg-gradient-yellow.btn:disabled,.bg-gradient-yellow.btn:not(:disabled):not(.disabled).active,.bg-gradient-yellow.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-yellow.btn.dropdown-toggle{background-image:none!important}.bg-gradient-yellow.btn:hover{border-color:#d39e00;color:#121a24;background:#e0a800 linear-gradient(180deg,#e4b526,#e0a800) repeat-x!important}.bg-gradient-yellow.btn.active,.bg-gradient-yellow.btn:active,.bg-gradient-yellow.btn:not(:disabled):not(.disabled).active,.bg-gradient-yellow.btn:not(:disabled):not(.disabled):active{border-color:#c69500;color:#1f2d3d;background:#d39e00 linear-gradient(180deg,#daad26,#d39e00) repeat-x!important}.bg-gradient-green{color:#fff;background:#28a745 linear-gradient(180deg,#48b461,#28a745) repeat-x!important}.bg-gradient-green.btn.disabled,.bg-gradient-green.btn:disabled,.bg-gradient-green.btn:not(:disabled):not(.disabled).active,.bg-gradient-green.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-green.btn.dropdown-toggle{background-image:none!important}.bg-gradient-green.btn:hover{border-color:#1e7e34;color:#ececec;background:#218838 linear-gradient(180deg,#429a56,#218838) repeat-x!important}.bg-gradient-green.btn.active,.bg-gradient-green.btn:active,.bg-gradient-green.btn:not(:disabled):not(.disabled).active,.bg-gradient-green.btn:not(:disabled):not(.disabled):active{border-color:#1c7430;color:#fff;background:#1e7e34 linear-gradient(180deg,#409152,#1e7e34) repeat-x!important}.bg-gradient-teal{color:#fff;background:#20c997 linear-gradient(180deg,#41d1a7,#20c997) repeat-x!important}.bg-gradient-teal.btn.disabled,.bg-gradient-teal.btn:disabled,.bg-gradient-teal.btn:not(:disabled):not(.disabled).active,.bg-gradient-teal.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-teal.btn.dropdown-toggle{background-image:none!important}.bg-gradient-teal.btn:hover{border-color:#199d76;color:#ececec;background:#1ba87e linear-gradient(180deg,#3db592,#1ba87e) repeat-x!important}.bg-gradient-teal.btn.active,.bg-gradient-teal.btn:active,.bg-gradient-teal.btn:not(:disabled):not(.disabled).active,.bg-gradient-teal.btn:not(:disabled):not(.disabled):active{border-color:#17926e;color:#fff;background:#199d76 linear-gradient(180deg,#3bac8b,#199d76) repeat-x!important}.bg-gradient-cyan{color:#fff;background:#17a2b8 linear-gradient(180deg,#3ab0c3,#17a2b8) repeat-x!important}.bg-gradient-cyan.btn.disabled,.bg-gradient-cyan.btn:disabled,.bg-gradient-cyan.btn:not(:disabled):not(.disabled).active,.bg-gradient-cyan.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-cyan.btn.dropdown-toggle{background-image:none!important}.bg-gradient-cyan.btn:hover{border-color:#117a8b;color:#ececec;background:#138496 linear-gradient(180deg,#3697a6,#138496) repeat-x!important}.bg-gradient-cyan.btn.active,.bg-gradient-cyan.btn:active,.bg-gradient-cyan.btn:not(:disabled):not(.disabled).active,.bg-gradient-cyan.btn:not(:disabled):not(.disabled):active{border-color:#10707f;color:#fff;background:#117a8b linear-gradient(180deg,#358e9c,#117a8b) repeat-x!important}.bg-gradient-white{color:#1f2d3d;background:#fff linear-gradient(180deg,#fff,#fff) repeat-x!important}.bg-gradient-white.btn.disabled,.bg-gradient-white.btn:disabled,.bg-gradient-white.btn:not(:disabled):not(.disabled).active,.bg-gradient-white.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-white.btn.dropdown-toggle{background-image:none!important}.bg-gradient-white.btn:hover{border-color:#e6e6e6;color:#121a24;background:#ececec linear-gradient(180deg,#efefef,#ececec) repeat-x!important}.bg-gradient-white.btn.active,.bg-gradient-white.btn:active,.bg-gradient-white.btn:not(:disabled):not(.disabled).active,.bg-gradient-white.btn:not(:disabled):not(.disabled):active{border-color:#dfdfdf;color:#1f2d3d;background:#e6e6e6 linear-gradient(180deg,#e9e9e9,#e6e6e6) repeat-x!important}.bg-gradient-gray{color:#fff;background:#6c757d linear-gradient(180deg,#828a91,#6c757d) repeat-x!important}.bg-gradient-gray.btn.disabled,.bg-gradient-gray.btn:disabled,.bg-gradient-gray.btn:not(:disabled):not(.disabled).active,.bg-gradient-gray.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-gray.btn.dropdown-toggle{background-image:none!important}.bg-gradient-gray.btn:hover{border-color:#545b62;color:#ececec;background:#5a6268 linear-gradient(180deg,#73797f,#5a6268) repeat-x!important}.bg-gradient-gray.btn.active,.bg-gradient-gray.btn:active,.bg-gradient-gray.btn:not(:disabled):not(.disabled).active,.bg-gradient-gray.btn:not(:disabled):not(.disabled):active{border-color:#4e555b;color:#fff;background:#545b62 linear-gradient(180deg,#6e7479,#545b62) repeat-x!important}.bg-gradient-gray-dark{color:#fff;background:#343a40 linear-gradient(180deg,#52585d,#343a40) repeat-x!important}.bg-gradient-gray-dark.btn.disabled,.bg-gradient-gray-dark.btn:disabled,.bg-gradient-gray-dark.btn:not(:disabled):not(.disabled).active,.bg-gradient-gray-dark.btn:not(:disabled):not(.disabled):active,.show>.bg-gradient-gray-dark.btn.dropdown-toggle{background-image:none!important}.bg-gradient-gray-dark.btn:hover{border-color:#1d2124;color:#ececec;background:#23272b linear-gradient(180deg,#44474b,#23272b) repeat-x!important}.bg-gradient-gray-dark.btn.active,.bg-gradient-gray-dark.btn:active,.bg-gradient-gray-dark.btn:not(:disabled):not(.disabled).active,.bg-gradient-gray-dark.btn:not(:disabled):not(.disabled):active{border-color:#171a1d;color:#fff;background:#1d2124 linear-gradient(180deg,#3f4245,#1d2124) repeat-x!important}[class^=bg-].disabled{opacity:.65}a.text-muted:hover{color:#007bff!important}.link-muted{color:#5d6974}.link-muted:focus,.link-muted:hover{color:#464f58}.link-black{color:#6c757d}.link-black:focus,.link-black:hover{color:#e6e8ea}.accent-primary .btn-link,.accent-primary a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#007bff}.accent-primary .btn-link:hover,.accent-primary a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#0056b3}.accent-primary .dropdown-item.active,.accent-primary .dropdown-item:active{background:#007bff;color:#fff}.accent-primary .custom-control-input:checked~.custom-control-label:before{background:#007bff;border-color:#004a99}.accent-primary .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-primary .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-primary .custom-file-input:focus~.custom-file-label,.accent-primary .custom-select:focus,.accent-primary .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#80bdff}.accent-primary .page-item .page-link{color:#007bff}.accent-primary .page-item.active .page-link,.accent-primary .page-item.active a{background-color:#007bff;border-color:#007bff;color:#fff}.accent-primary .page-item.disabled .page-link,.accent-primary .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-primary [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-primary [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-primary [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-primary [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-secondary .btn-link,.accent-secondary a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#6c757d}.accent-secondary .btn-link:hover,.accent-secondary a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#494f54}.accent-secondary .dropdown-item.active,.accent-secondary .dropdown-item:active{background:#6c757d;color:#fff}.accent-secondary .custom-control-input:checked~.custom-control-label:before{background:#6c757d;border-color:#3d4246}.accent-secondary .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-secondary .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-secondary .custom-file-input:focus~.custom-file-label,.accent-secondary .custom-select:focus,.accent-secondary .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#afb5ba}.accent-secondary .page-item .page-link{color:#6c757d}.accent-secondary .page-item.active .page-link,.accent-secondary .page-item.active a{background-color:#6c757d;border-color:#6c757d;color:#fff}.accent-secondary .page-item.disabled .page-link,.accent-secondary .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-secondary [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-secondary [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-secondary [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-secondary [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-success .btn-link,.accent-success a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#28a745}.accent-success .btn-link:hover,.accent-success a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#19692c}.accent-success .dropdown-item.active,.accent-success .dropdown-item:active{background:#28a745;color:#fff}.accent-success .custom-control-input:checked~.custom-control-label:before{background:#28a745;border-color:#145523}.accent-success .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-success .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-success .custom-file-input:focus~.custom-file-label,.accent-success .custom-select:focus,.accent-success .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#71dd8a}.accent-success .page-item .page-link{color:#28a745}.accent-success .page-item.active .page-link,.accent-success .page-item.active a{background-color:#28a745;border-color:#28a745;color:#fff}.accent-success .page-item.disabled .page-link,.accent-success .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-success [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-success [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-success [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-success [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-info .btn-link,.accent-info a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#17a2b8}.accent-info .btn-link:hover,.accent-info a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#0f6674}.accent-info .dropdown-item.active,.accent-info .dropdown-item:active{background:#17a2b8;color:#fff}.accent-info .custom-control-input:checked~.custom-control-label:before{background:#17a2b8;border-color:#0c525d}.accent-info .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-info .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-info .custom-file-input:focus~.custom-file-label,.accent-info .custom-select:focus,.accent-info .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#63d9ec}.accent-info .page-item .page-link{color:#17a2b8}.accent-info .page-item.active .page-link,.accent-info .page-item.active a{background-color:#17a2b8;border-color:#17a2b8;color:#fff}.accent-info .page-item.disabled .page-link,.accent-info .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-info [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-info [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-info [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-info [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-warning .btn-link,.accent-warning a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#ffc107}.accent-warning .btn-link:hover,.accent-warning a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#ba8b00}.accent-warning .dropdown-item.active,.accent-warning .dropdown-item:active{background:#ffc107;color:#1f2d3d}.accent-warning .custom-control-input:checked~.custom-control-label:before{background:#ffc107;border-color:#a07800}.accent-warning .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%231F2D3D' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-warning .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-warning .custom-file-input:focus~.custom-file-label,.accent-warning .custom-select:focus,.accent-warning .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#ffe187}.accent-warning .page-item .page-link{color:#ffc107}.accent-warning .page-item.active .page-link,.accent-warning .page-item.active a{background-color:#ffc107;border-color:#ffc107;color:#fff}.accent-warning .page-item.disabled .page-link,.accent-warning .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-warning [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-warning [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-warning [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-warning [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-danger .btn-link,.accent-danger a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#dc3545}.accent-danger .btn-link:hover,.accent-danger a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#a71d2a}.accent-danger .dropdown-item.active,.accent-danger .dropdown-item:active{background:#dc3545;color:#fff}.accent-danger .custom-control-input:checked~.custom-control-label:before{background:#dc3545;border-color:#921925}.accent-danger .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-danger .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-danger .custom-file-input:focus~.custom-file-label,.accent-danger .custom-select:focus,.accent-danger .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#efa2a9}.accent-danger .page-item .page-link{color:#dc3545}.accent-danger .page-item.active .page-link,.accent-danger .page-item.active a{background-color:#dc3545;border-color:#dc3545;color:#fff}.accent-danger .page-item.disabled .page-link,.accent-danger .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-danger [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-danger [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-danger [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-danger [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-light .btn-link,.accent-light a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#f8f9fa}.accent-light .btn-link:hover,.accent-light a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#cbd3da}.accent-light .dropdown-item.active,.accent-light .dropdown-item:active{background:#f8f9fa;color:#1f2d3d}.accent-light .custom-control-input:checked~.custom-control-label:before{background:#f8f9fa;border-color:#bdc6d0}.accent-light .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%231F2D3D' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-light .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-light .custom-file-input:focus~.custom-file-label,.accent-light .custom-select:focus,.accent-light .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#fff}.accent-light .page-item .page-link{color:#f8f9fa}.accent-light .page-item.active .page-link,.accent-light .page-item.active a{background-color:#f8f9fa;border-color:#f8f9fa;color:#fff}.accent-light .page-item.disabled .page-link,.accent-light .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-light [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-light [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-light [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-light [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-dark .btn-link,.accent-dark a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#343a40}.accent-dark .btn-link:hover,.accent-dark a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#121416}.accent-dark .dropdown-item.active,.accent-dark .dropdown-item:active{background:#343a40;color:#fff}.accent-dark .custom-control-input:checked~.custom-control-label:before{background:#343a40;border-color:#060708}.accent-dark .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-dark .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-dark .custom-file-input:focus~.custom-file-label,.accent-dark .custom-select:focus,.accent-dark .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#6d7a86}.accent-dark .page-item .page-link{color:#343a40}.accent-dark .page-item.active .page-link,.accent-dark .page-item.active a{background-color:#343a40;border-color:#343a40;color:#fff}.accent-dark .page-item.disabled .page-link,.accent-dark .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-dark [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-dark [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-dark [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-dark [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-lightblue .btn-link,.accent-lightblue a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#3c8dbc}.accent-lightblue .btn-link:hover,.accent-lightblue a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#296282}.accent-lightblue .dropdown-item.active,.accent-lightblue .dropdown-item:active{background:#3c8dbc;color:#fff}.accent-lightblue .custom-control-input:checked~.custom-control-label:before{background:#3c8dbc;border-color:#23536f}.accent-lightblue .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-lightblue .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-lightblue .custom-file-input:focus~.custom-file-label,.accent-lightblue .custom-select:focus,.accent-lightblue .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#99c5de}.accent-lightblue .page-item .page-link{color:#3c8dbc}.accent-lightblue .page-item.active .page-link,.accent-lightblue .page-item.active a{background-color:#3c8dbc;border-color:#3c8dbc;color:#fff}.accent-lightblue .page-item.disabled .page-link,.accent-lightblue .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-lightblue [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-lightblue [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-lightblue [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-lightblue [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-navy .btn-link,.accent-navy a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#001f3f}.accent-navy .btn-link:hover,.accent-navy a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#000}.accent-navy .dropdown-item.active,.accent-navy .dropdown-item:active{background:#001f3f;color:#fff}.accent-navy .custom-control-input:checked~.custom-control-label:before{background:#001f3f;border-color:#000}.accent-navy .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-navy .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-navy .custom-file-input:focus~.custom-file-label,.accent-navy .custom-select:focus,.accent-navy .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#005ebf}.accent-navy .page-item .page-link{color:#001f3f}.accent-navy .page-item.active .page-link,.accent-navy .page-item.active a{background-color:#001f3f;border-color:#001f3f;color:#fff}.accent-navy .page-item.disabled .page-link,.accent-navy .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-navy [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-navy [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-navy [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-navy [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-olive .btn-link,.accent-olive a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#3d9970}.accent-olive .btn-link:hover,.accent-olive a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#276248}.accent-olive .dropdown-item.active,.accent-olive .dropdown-item:active{background:#3d9970;color:#fff}.accent-olive .custom-control-input:checked~.custom-control-label:before{background:#3d9970;border-color:#20503b}.accent-olive .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-olive .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-olive .custom-file-input:focus~.custom-file-label,.accent-olive .custom-select:focus,.accent-olive .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#87cfaf}.accent-olive .page-item .page-link{color:#3d9970}.accent-olive .page-item.active .page-link,.accent-olive .page-item.active a{background-color:#3d9970;border-color:#3d9970;color:#fff}.accent-olive .page-item.disabled .page-link,.accent-olive .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-olive [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-olive [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-olive [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-olive [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-lime .btn-link,.accent-lime a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#01ff70}.accent-lime .btn-link:hover,.accent-lime a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#00b44e}.accent-lime .dropdown-item.active,.accent-lime .dropdown-item:active{background:#01ff70;color:#1f2d3d}.accent-lime .custom-control-input:checked~.custom-control-label:before{background:#01ff70;border-color:#009a43}.accent-lime .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%231F2D3D' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-lime .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-lime .custom-file-input:focus~.custom-file-label,.accent-lime .custom-select:focus,.accent-lime .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#81ffb8}.accent-lime .page-item .page-link{color:#01ff70}.accent-lime .page-item.active .page-link,.accent-lime .page-item.active a{background-color:#01ff70;border-color:#01ff70;color:#fff}.accent-lime .page-item.disabled .page-link,.accent-lime .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-lime [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-lime [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-lime [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-lime [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-fuchsia .btn-link,.accent-fuchsia a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#f012be}.accent-fuchsia .btn-link:hover,.accent-fuchsia a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#ab0b87}.accent-fuchsia .dropdown-item.active,.accent-fuchsia .dropdown-item:active{background:#f012be;color:#fff}.accent-fuchsia .custom-control-input:checked~.custom-control-label:before{background:#f012be;border-color:#930974}.accent-fuchsia .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-fuchsia .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-fuchsia .custom-file-input:focus~.custom-file-label,.accent-fuchsia .custom-select:focus,.accent-fuchsia .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#f88adf}.accent-fuchsia .page-item .page-link{color:#f012be}.accent-fuchsia .page-item.active .page-link,.accent-fuchsia .page-item.active a{background-color:#f012be;border-color:#f012be;color:#fff}.accent-fuchsia .page-item.disabled .page-link,.accent-fuchsia .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-fuchsia [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-fuchsia [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-fuchsia [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-fuchsia [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-maroon .btn-link,.accent-maroon a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#d81b60}.accent-maroon .btn-link:hover,.accent-maroon a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#941342}.accent-maroon .dropdown-item.active,.accent-maroon .dropdown-item:active{background:#d81b60;color:#fff}.accent-maroon .custom-control-input:checked~.custom-control-label:before{background:#d81b60;border-color:#7d1038}.accent-maroon .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-maroon .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-maroon .custom-file-input:focus~.custom-file-label,.accent-maroon .custom-select:focus,.accent-maroon .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#f083ab}.accent-maroon .page-item .page-link{color:#d81b60}.accent-maroon .page-item.active .page-link,.accent-maroon .page-item.active a{background-color:#d81b60;border-color:#d81b60;color:#fff}.accent-maroon .page-item.disabled .page-link,.accent-maroon .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-maroon [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-maroon [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-maroon [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-maroon [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-blue .btn-link,.accent-blue a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#007bff}.accent-blue .btn-link:hover,.accent-blue a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#0056b3}.accent-blue .dropdown-item.active,.accent-blue .dropdown-item:active{background:#007bff;color:#fff}.accent-blue .custom-control-input:checked~.custom-control-label:before{background:#007bff;border-color:#004a99}.accent-blue .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-blue .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-blue .custom-file-input:focus~.custom-file-label,.accent-blue .custom-select:focus,.accent-blue .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#80bdff}.accent-blue .page-item .page-link{color:#007bff}.accent-blue .page-item.active .page-link,.accent-blue .page-item.active a{background-color:#007bff;border-color:#007bff;color:#fff}.accent-blue .page-item.disabled .page-link,.accent-blue .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-blue [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-blue [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-blue [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-blue [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-indigo .btn-link,.accent-indigo a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#6610f2}.accent-indigo .btn-link:hover,.accent-indigo a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#4709ac}.accent-indigo .dropdown-item.active,.accent-indigo .dropdown-item:active{background:#6610f2;color:#fff}.accent-indigo .custom-control-input:checked~.custom-control-label:before{background:#6610f2;border-color:#3d0894}.accent-indigo .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-indigo .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-indigo .custom-file-input:focus~.custom-file-label,.accent-indigo .custom-select:focus,.accent-indigo .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#b389f9}.accent-indigo .page-item .page-link{color:#6610f2}.accent-indigo .page-item.active .page-link,.accent-indigo .page-item.active a{background-color:#6610f2;border-color:#6610f2;color:#fff}.accent-indigo .page-item.disabled .page-link,.accent-indigo .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-indigo [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-indigo [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-indigo [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-indigo [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-purple .btn-link,.accent-purple a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#6f42c1}.accent-purple .btn-link:hover,.accent-purple a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#4e2d89}.accent-purple .dropdown-item.active,.accent-purple .dropdown-item:active{background:#6f42c1;color:#fff}.accent-purple .custom-control-input:checked~.custom-control-label:before{background:#6f42c1;border-color:#432776}.accent-purple .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-purple .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-purple .custom-file-input:focus~.custom-file-label,.accent-purple .custom-select:focus,.accent-purple .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#b8a2e0}.accent-purple .page-item .page-link{color:#6f42c1}.accent-purple .page-item.active .page-link,.accent-purple .page-item.active a{background-color:#6f42c1;border-color:#6f42c1;color:#fff}.accent-purple .page-item.disabled .page-link,.accent-purple .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-purple [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-purple [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-purple [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-purple [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-pink .btn-link,.accent-pink a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#e83e8c}.accent-pink .btn-link:hover,.accent-pink a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#c21766}.accent-pink .dropdown-item.active,.accent-pink .dropdown-item:active{background:#e83e8c;color:#fff}.accent-pink .custom-control-input:checked~.custom-control-label:before{background:#e83e8c;border-color:#ac145a}.accent-pink .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-pink .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-pink .custom-file-input:focus~.custom-file-label,.accent-pink .custom-select:focus,.accent-pink .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#f6b0d0}.accent-pink .page-item .page-link{color:#e83e8c}.accent-pink .page-item.active .page-link,.accent-pink .page-item.active a{background-color:#e83e8c;border-color:#e83e8c;color:#fff}.accent-pink .page-item.disabled .page-link,.accent-pink .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-pink [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-pink [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-pink [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-pink [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-red .btn-link,.accent-red a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#dc3545}.accent-red .btn-link:hover,.accent-red a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#a71d2a}.accent-red .dropdown-item.active,.accent-red .dropdown-item:active{background:#dc3545;color:#fff}.accent-red .custom-control-input:checked~.custom-control-label:before{background:#dc3545;border-color:#921925}.accent-red .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-red .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-red .custom-file-input:focus~.custom-file-label,.accent-red .custom-select:focus,.accent-red .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#efa2a9}.accent-red .page-item .page-link{color:#dc3545}.accent-red .page-item.active .page-link,.accent-red .page-item.active a{background-color:#dc3545;border-color:#dc3545;color:#fff}.accent-red .page-item.disabled .page-link,.accent-red .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-red [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-red [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-red [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-red [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-orange .btn-link,.accent-orange a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#fd7e14}.accent-orange .btn-link:hover,.accent-orange a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#c35a02}.accent-orange .dropdown-item.active,.accent-orange .dropdown-item:active{background:#fd7e14;color:#1f2d3d}.accent-orange .custom-control-input:checked~.custom-control-label:before{background:#fd7e14;border-color:#aa4e01}.accent-orange .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%231F2D3D' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-orange .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-orange .custom-file-input:focus~.custom-file-label,.accent-orange .custom-select:focus,.accent-orange .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#fec392}.accent-orange .page-item .page-link{color:#fd7e14}.accent-orange .page-item.active .page-link,.accent-orange .page-item.active a{background-color:#fd7e14;border-color:#fd7e14;color:#fff}.accent-orange .page-item.disabled .page-link,.accent-orange .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-orange [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-orange [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-orange [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-orange [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-yellow .btn-link,.accent-yellow a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#ffc107}.accent-yellow .btn-link:hover,.accent-yellow a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#ba8b00}.accent-yellow .dropdown-item.active,.accent-yellow .dropdown-item:active{background:#ffc107;color:#1f2d3d}.accent-yellow .custom-control-input:checked~.custom-control-label:before{background:#ffc107;border-color:#a07800}.accent-yellow .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%231F2D3D' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-yellow .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-yellow .custom-file-input:focus~.custom-file-label,.accent-yellow .custom-select:focus,.accent-yellow .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#ffe187}.accent-yellow .page-item .page-link{color:#ffc107}.accent-yellow .page-item.active .page-link,.accent-yellow .page-item.active a{background-color:#ffc107;border-color:#ffc107;color:#fff}.accent-yellow .page-item.disabled .page-link,.accent-yellow .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-yellow [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-yellow [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-yellow [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-yellow [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-green .btn-link,.accent-green a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#28a745}.accent-green .btn-link:hover,.accent-green a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#19692c}.accent-green .dropdown-item.active,.accent-green .dropdown-item:active{background:#28a745;color:#fff}.accent-green .custom-control-input:checked~.custom-control-label:before{background:#28a745;border-color:#145523}.accent-green .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-green .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-green .custom-file-input:focus~.custom-file-label,.accent-green .custom-select:focus,.accent-green .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#71dd8a}.accent-green .page-item .page-link{color:#28a745}.accent-green .page-item.active .page-link,.accent-green .page-item.active a{background-color:#28a745;border-color:#28a745;color:#fff}.accent-green .page-item.disabled .page-link,.accent-green .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-green [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-green [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-green [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-green [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-teal .btn-link,.accent-teal a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#20c997}.accent-teal .btn-link:hover,.accent-teal a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#158765}.accent-teal .dropdown-item.active,.accent-teal .dropdown-item:active{background:#20c997;color:#fff}.accent-teal .custom-control-input:checked~.custom-control-label:before{background:#20c997;border-color:#127155}.accent-teal .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-teal .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-teal .custom-file-input:focus~.custom-file-label,.accent-teal .custom-select:focus,.accent-teal .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#7eeaca}.accent-teal .page-item .page-link{color:#20c997}.accent-teal .page-item.active .page-link,.accent-teal .page-item.active a{background-color:#20c997;border-color:#20c997;color:#fff}.accent-teal .page-item.disabled .page-link,.accent-teal .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-teal [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-teal [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-teal [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-teal [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-cyan .btn-link,.accent-cyan a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#17a2b8}.accent-cyan .btn-link:hover,.accent-cyan a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#0f6674}.accent-cyan .dropdown-item.active,.accent-cyan .dropdown-item:active{background:#17a2b8;color:#fff}.accent-cyan .custom-control-input:checked~.custom-control-label:before{background:#17a2b8;border-color:#0c525d}.accent-cyan .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-cyan .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-cyan .custom-file-input:focus~.custom-file-label,.accent-cyan .custom-select:focus,.accent-cyan .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#63d9ec}.accent-cyan .page-item .page-link{color:#17a2b8}.accent-cyan .page-item.active .page-link,.accent-cyan .page-item.active a{background-color:#17a2b8;border-color:#17a2b8;color:#fff}.accent-cyan .page-item.disabled .page-link,.accent-cyan .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-cyan [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-cyan [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-cyan [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-cyan [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-white .btn-link,.accent-white a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#fff}.accent-white .btn-link:hover,.accent-white a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#d9d9d9}.accent-white .dropdown-item.active,.accent-white .dropdown-item:active{background:#fff;color:#1f2d3d}.accent-white .custom-control-input:checked~.custom-control-label:before{background:#fff;border-color:#ccc}.accent-white .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%231F2D3D' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-white .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-white .custom-file-input:focus~.custom-file-label,.accent-white .custom-select:focus,.accent-white .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#fff}.accent-white .page-item .page-link{color:#fff}.accent-white .page-item.active .page-link,.accent-white .page-item.active a{background-color:#fff;border-color:#fff;color:#fff}.accent-white .page-item.disabled .page-link,.accent-white .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-white [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-white [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-white [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-white [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-gray .btn-link,.accent-gray a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#6c757d}.accent-gray .btn-link:hover,.accent-gray a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#494f54}.accent-gray .dropdown-item.active,.accent-gray .dropdown-item:active{background:#6c757d;color:#fff}.accent-gray .custom-control-input:checked~.custom-control-label:before{background:#6c757d;border-color:#3d4246}.accent-gray .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-gray .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-gray .custom-file-input:focus~.custom-file-label,.accent-gray .custom-select:focus,.accent-gray .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#afb5ba}.accent-gray .page-item .page-link{color:#6c757d}.accent-gray .page-item.active .page-link,.accent-gray .page-item.active a{background-color:#6c757d;border-color:#6c757d;color:#fff}.accent-gray .page-item.disabled .page-link,.accent-gray .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-gray [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-gray [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-gray [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-gray [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}.accent-gray-dark .btn-link,.accent-gray-dark a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn){color:#343a40}.accent-gray-dark .btn-link:hover,.accent-gray-dark a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):not(.page-link):not(.btn):hover{color:#121416}.accent-gray-dark .dropdown-item.active,.accent-gray-dark .dropdown-item:active{background:#343a40;color:#fff}.accent-gray-dark .custom-control-input:checked~.custom-control-label:before{background:#343a40;border-color:#060708}.accent-gray-dark .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.accent-gray-dark .custom-control-input:focus:not(:checked)~.custom-control-label:before,.accent-gray-dark .custom-file-input:focus~.custom-file-label,.accent-gray-dark .custom-select:focus,.accent-gray-dark .form-control:focus:not(.is-invalid):not(.is-warning):not(.is-valid){border-color:#6d7a86}.accent-gray-dark .page-item .page-link{color:#343a40}.accent-gray-dark .page-item.active .page-link,.accent-gray-dark .page-item.active a{background-color:#343a40;border-color:#343a40;color:#fff}.accent-gray-dark .page-item.disabled .page-link,.accent-gray-dark .page-item.disabled a{background-color:#fff;border-color:#dee2e6;color:#6c757d}.accent-gray-dark [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#c2c7d0}.accent-gray-dark [class*=sidebar-dark-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#fff}.accent-gray-dark [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link){color:#343a40}.accent-gray-dark [class*=sidebar-light-] .sidebar a:not(.dropdown-item):not(.btn-app):not(.nav-link):not(.brand-link):hover{color:#212529}[class*=accent-] a.btn-info,[class*=accent-] a.btn-primary,[class*=accent-] a.btn-secondary,[class*=accent-] a.btn-success{color:#fff}[class*=accent-] a.btn-warning{color:#1f2d3d}[class*=accent-] a.btn-danger{color:#fff}[class*=accent-] a.btn-light{color:#1f2d3d}[class*=accent-] a.btn-dark{color:#fff}", ""]);

// exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(131);
exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "/*!\n * Font Awesome Free 5.13.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */.fa,.fab,.fad,.fal,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-500px:before{content:\"\\F26E\"}.fa-accessible-icon:before{content:\"\\F368\"}.fa-accusoft:before{content:\"\\F369\"}.fa-acquisitions-incorporated:before{content:\"\\F6AF\"}.fa-ad:before{content:\"\\F641\"}.fa-address-book:before{content:\"\\F2B9\"}.fa-address-card:before{content:\"\\F2BB\"}.fa-adjust:before{content:\"\\F042\"}.fa-adn:before{content:\"\\F170\"}.fa-adobe:before{content:\"\\F778\"}.fa-adversal:before{content:\"\\F36A\"}.fa-affiliatetheme:before{content:\"\\F36B\"}.fa-air-freshener:before{content:\"\\F5D0\"}.fa-airbnb:before{content:\"\\F834\"}.fa-algolia:before{content:\"\\F36C\"}.fa-align-center:before{content:\"\\F037\"}.fa-align-justify:before{content:\"\\F039\"}.fa-align-left:before{content:\"\\F036\"}.fa-align-right:before{content:\"\\F038\"}.fa-alipay:before{content:\"\\F642\"}.fa-allergies:before{content:\"\\F461\"}.fa-amazon:before{content:\"\\F270\"}.fa-amazon-pay:before{content:\"\\F42C\"}.fa-ambulance:before{content:\"\\F0F9\"}.fa-american-sign-language-interpreting:before{content:\"\\F2A3\"}.fa-amilia:before{content:\"\\F36D\"}.fa-anchor:before{content:\"\\F13D\"}.fa-android:before{content:\"\\F17B\"}.fa-angellist:before{content:\"\\F209\"}.fa-angle-double-down:before{content:\"\\F103\"}.fa-angle-double-left:before{content:\"\\F100\"}.fa-angle-double-right:before{content:\"\\F101\"}.fa-angle-double-up:before{content:\"\\F102\"}.fa-angle-down:before{content:\"\\F107\"}.fa-angle-left:before{content:\"\\F104\"}.fa-angle-right:before{content:\"\\F105\"}.fa-angle-up:before{content:\"\\F106\"}.fa-angry:before{content:\"\\F556\"}.fa-angrycreative:before{content:\"\\F36E\"}.fa-angular:before{content:\"\\F420\"}.fa-ankh:before{content:\"\\F644\"}.fa-app-store:before{content:\"\\F36F\"}.fa-app-store-ios:before{content:\"\\F370\"}.fa-apper:before{content:\"\\F371\"}.fa-apple:before{content:\"\\F179\"}.fa-apple-alt:before{content:\"\\F5D1\"}.fa-apple-pay:before{content:\"\\F415\"}.fa-archive:before{content:\"\\F187\"}.fa-archway:before{content:\"\\F557\"}.fa-arrow-alt-circle-down:before{content:\"\\F358\"}.fa-arrow-alt-circle-left:before{content:\"\\F359\"}.fa-arrow-alt-circle-right:before{content:\"\\F35A\"}.fa-arrow-alt-circle-up:before{content:\"\\F35B\"}.fa-arrow-circle-down:before{content:\"\\F0AB\"}.fa-arrow-circle-left:before{content:\"\\F0A8\"}.fa-arrow-circle-right:before{content:\"\\F0A9\"}.fa-arrow-circle-up:before{content:\"\\F0AA\"}.fa-arrow-down:before{content:\"\\F063\"}.fa-arrow-left:before{content:\"\\F060\"}.fa-arrow-right:before{content:\"\\F061\"}.fa-arrow-up:before{content:\"\\F062\"}.fa-arrows-alt:before{content:\"\\F0B2\"}.fa-arrows-alt-h:before{content:\"\\F337\"}.fa-arrows-alt-v:before{content:\"\\F338\"}.fa-artstation:before{content:\"\\F77A\"}.fa-assistive-listening-systems:before{content:\"\\F2A2\"}.fa-asterisk:before{content:\"\\F069\"}.fa-asymmetrik:before{content:\"\\F372\"}.fa-at:before{content:\"\\F1FA\"}.fa-atlas:before{content:\"\\F558\"}.fa-atlassian:before{content:\"\\F77B\"}.fa-atom:before{content:\"\\F5D2\"}.fa-audible:before{content:\"\\F373\"}.fa-audio-description:before{content:\"\\F29E\"}.fa-autoprefixer:before{content:\"\\F41C\"}.fa-avianex:before{content:\"\\F374\"}.fa-aviato:before{content:\"\\F421\"}.fa-award:before{content:\"\\F559\"}.fa-aws:before{content:\"\\F375\"}.fa-baby:before{content:\"\\F77C\"}.fa-baby-carriage:before{content:\"\\F77D\"}.fa-backspace:before{content:\"\\F55A\"}.fa-backward:before{content:\"\\F04A\"}.fa-bacon:before{content:\"\\F7E5\"}.fa-bacteria:before{content:\"\\F959\"}.fa-bacterium:before{content:\"\\F95A\"}.fa-bahai:before{content:\"\\F666\"}.fa-balance-scale:before{content:\"\\F24E\"}.fa-balance-scale-left:before{content:\"\\F515\"}.fa-balance-scale-right:before{content:\"\\F516\"}.fa-ban:before{content:\"\\F05E\"}.fa-band-aid:before{content:\"\\F462\"}.fa-bandcamp:before{content:\"\\F2D5\"}.fa-barcode:before{content:\"\\F02A\"}.fa-bars:before{content:\"\\F0C9\"}.fa-baseball-ball:before{content:\"\\F433\"}.fa-basketball-ball:before{content:\"\\F434\"}.fa-bath:before{content:\"\\F2CD\"}.fa-battery-empty:before{content:\"\\F244\"}.fa-battery-full:before{content:\"\\F240\"}.fa-battery-half:before{content:\"\\F242\"}.fa-battery-quarter:before{content:\"\\F243\"}.fa-battery-three-quarters:before{content:\"\\F241\"}.fa-battle-net:before{content:\"\\F835\"}.fa-bed:before{content:\"\\F236\"}.fa-beer:before{content:\"\\F0FC\"}.fa-behance:before{content:\"\\F1B4\"}.fa-behance-square:before{content:\"\\F1B5\"}.fa-bell:before{content:\"\\F0F3\"}.fa-bell-slash:before{content:\"\\F1F6\"}.fa-bezier-curve:before{content:\"\\F55B\"}.fa-bible:before{content:\"\\F647\"}.fa-bicycle:before{content:\"\\F206\"}.fa-biking:before{content:\"\\F84A\"}.fa-bimobject:before{content:\"\\F378\"}.fa-binoculars:before{content:\"\\F1E5\"}.fa-biohazard:before{content:\"\\F780\"}.fa-birthday-cake:before{content:\"\\F1FD\"}.fa-bitbucket:before{content:\"\\F171\"}.fa-bitcoin:before{content:\"\\F379\"}.fa-bity:before{content:\"\\F37A\"}.fa-black-tie:before{content:\"\\F27E\"}.fa-blackberry:before{content:\"\\F37B\"}.fa-blender:before{content:\"\\F517\"}.fa-blender-phone:before{content:\"\\F6B6\"}.fa-blind:before{content:\"\\F29D\"}.fa-blog:before{content:\"\\F781\"}.fa-blogger:before{content:\"\\F37C\"}.fa-blogger-b:before{content:\"\\F37D\"}.fa-bluetooth:before{content:\"\\F293\"}.fa-bluetooth-b:before{content:\"\\F294\"}.fa-bold:before{content:\"\\F032\"}.fa-bolt:before{content:\"\\F0E7\"}.fa-bomb:before{content:\"\\F1E2\"}.fa-bone:before{content:\"\\F5D7\"}.fa-bong:before{content:\"\\F55C\"}.fa-book:before{content:\"\\F02D\"}.fa-book-dead:before{content:\"\\F6B7\"}.fa-book-medical:before{content:\"\\F7E6\"}.fa-book-open:before{content:\"\\F518\"}.fa-book-reader:before{content:\"\\F5DA\"}.fa-bookmark:before{content:\"\\F02E\"}.fa-bootstrap:before{content:\"\\F836\"}.fa-border-all:before{content:\"\\F84C\"}.fa-border-none:before{content:\"\\F850\"}.fa-border-style:before{content:\"\\F853\"}.fa-bowling-ball:before{content:\"\\F436\"}.fa-box:before{content:\"\\F466\"}.fa-box-open:before{content:\"\\F49E\"}.fa-box-tissue:before{content:\"\\F95B\"}.fa-boxes:before{content:\"\\F468\"}.fa-braille:before{content:\"\\F2A1\"}.fa-brain:before{content:\"\\F5DC\"}.fa-bread-slice:before{content:\"\\F7EC\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-briefcase-medical:before{content:\"\\F469\"}.fa-broadcast-tower:before{content:\"\\F519\"}.fa-broom:before{content:\"\\F51A\"}.fa-brush:before{content:\"\\F55D\"}.fa-btc:before{content:\"\\F15A\"}.fa-buffer:before{content:\"\\F837\"}.fa-bug:before{content:\"\\F188\"}.fa-building:before{content:\"\\F1AD\"}.fa-bullhorn:before{content:\"\\F0A1\"}.fa-bullseye:before{content:\"\\F140\"}.fa-burn:before{content:\"\\F46A\"}.fa-buromobelexperte:before{content:\"\\F37F\"}.fa-bus:before{content:\"\\F207\"}.fa-bus-alt:before{content:\"\\F55E\"}.fa-business-time:before{content:\"\\F64A\"}.fa-buy-n-large:before{content:\"\\F8A6\"}.fa-buysellads:before{content:\"\\F20D\"}.fa-calculator:before{content:\"\\F1EC\"}.fa-calendar:before{content:\"\\F133\"}.fa-calendar-alt:before{content:\"\\F073\"}.fa-calendar-check:before{content:\"\\F274\"}.fa-calendar-day:before{content:\"\\F783\"}.fa-calendar-minus:before{content:\"\\F272\"}.fa-calendar-plus:before{content:\"\\F271\"}.fa-calendar-times:before{content:\"\\F273\"}.fa-calendar-week:before{content:\"\\F784\"}.fa-camera:before{content:\"\\F030\"}.fa-camera-retro:before{content:\"\\F083\"}.fa-campground:before{content:\"\\F6BB\"}.fa-canadian-maple-leaf:before{content:\"\\F785\"}.fa-candy-cane:before{content:\"\\F786\"}.fa-cannabis:before{content:\"\\F55F\"}.fa-capsules:before{content:\"\\F46B\"}.fa-car:before{content:\"\\F1B9\"}.fa-car-alt:before{content:\"\\F5DE\"}.fa-car-battery:before{content:\"\\F5DF\"}.fa-car-crash:before{content:\"\\F5E1\"}.fa-car-side:before{content:\"\\F5E4\"}.fa-caravan:before{content:\"\\F8FF\"}.fa-caret-down:before{content:\"\\F0D7\"}.fa-caret-left:before{content:\"\\F0D9\"}.fa-caret-right:before{content:\"\\F0DA\"}.fa-caret-square-down:before{content:\"\\F150\"}.fa-caret-square-left:before{content:\"\\F191\"}.fa-caret-square-right:before{content:\"\\F152\"}.fa-caret-square-up:before{content:\"\\F151\"}.fa-caret-up:before{content:\"\\F0D8\"}.fa-carrot:before{content:\"\\F787\"}.fa-cart-arrow-down:before{content:\"\\F218\"}.fa-cart-plus:before{content:\"\\F217\"}.fa-cash-register:before{content:\"\\F788\"}.fa-cat:before{content:\"\\F6BE\"}.fa-cc-amazon-pay:before{content:\"\\F42D\"}.fa-cc-amex:before{content:\"\\F1F3\"}.fa-cc-apple-pay:before{content:\"\\F416\"}.fa-cc-diners-club:before{content:\"\\F24C\"}.fa-cc-discover:before{content:\"\\F1F2\"}.fa-cc-jcb:before{content:\"\\F24B\"}.fa-cc-mastercard:before{content:\"\\F1F1\"}.fa-cc-paypal:before{content:\"\\F1F4\"}.fa-cc-stripe:before{content:\"\\F1F5\"}.fa-cc-visa:before{content:\"\\F1F0\"}.fa-centercode:before{content:\"\\F380\"}.fa-centos:before{content:\"\\F789\"}.fa-certificate:before{content:\"\\F0A3\"}.fa-chair:before{content:\"\\F6C0\"}.fa-chalkboard:before{content:\"\\F51B\"}.fa-chalkboard-teacher:before{content:\"\\F51C\"}.fa-charging-station:before{content:\"\\F5E7\"}.fa-chart-area:before{content:\"\\F1FE\"}.fa-chart-bar:before{content:\"\\F080\"}.fa-chart-line:before{content:\"\\F201\"}.fa-chart-pie:before{content:\"\\F200\"}.fa-check:before{content:\"\\F00C\"}.fa-check-circle:before{content:\"\\F058\"}.fa-check-double:before{content:\"\\F560\"}.fa-check-square:before{content:\"\\F14A\"}.fa-cheese:before{content:\"\\F7EF\"}.fa-chess:before{content:\"\\F439\"}.fa-chess-bishop:before{content:\"\\F43A\"}.fa-chess-board:before{content:\"\\F43C\"}.fa-chess-king:before{content:\"\\F43F\"}.fa-chess-knight:before{content:\"\\F441\"}.fa-chess-pawn:before{content:\"\\F443\"}.fa-chess-queen:before{content:\"\\F445\"}.fa-chess-rook:before{content:\"\\F447\"}.fa-chevron-circle-down:before{content:\"\\F13A\"}.fa-chevron-circle-left:before{content:\"\\F137\"}.fa-chevron-circle-right:before{content:\"\\F138\"}.fa-chevron-circle-up:before{content:\"\\F139\"}.fa-chevron-down:before{content:\"\\F078\"}.fa-chevron-left:before{content:\"\\F053\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-chevron-up:before{content:\"\\F077\"}.fa-child:before{content:\"\\F1AE\"}.fa-chrome:before{content:\"\\F268\"}.fa-chromecast:before{content:\"\\F838\"}.fa-church:before{content:\"\\F51D\"}.fa-circle:before{content:\"\\F111\"}.fa-circle-notch:before{content:\"\\F1CE\"}.fa-city:before{content:\"\\F64F\"}.fa-clinic-medical:before{content:\"\\F7F2\"}.fa-clipboard:before{content:\"\\F328\"}.fa-clipboard-check:before{content:\"\\F46C\"}.fa-clipboard-list:before{content:\"\\F46D\"}.fa-clock:before{content:\"\\F017\"}.fa-clone:before{content:\"\\F24D\"}.fa-closed-captioning:before{content:\"\\F20A\"}.fa-cloud:before{content:\"\\F0C2\"}.fa-cloud-download-alt:before{content:\"\\F381\"}.fa-cloud-meatball:before{content:\"\\F73B\"}.fa-cloud-moon:before{content:\"\\F6C3\"}.fa-cloud-moon-rain:before{content:\"\\F73C\"}.fa-cloud-rain:before{content:\"\\F73D\"}.fa-cloud-showers-heavy:before{content:\"\\F740\"}.fa-cloud-sun:before{content:\"\\F6C4\"}.fa-cloud-sun-rain:before{content:\"\\F743\"}.fa-cloud-upload-alt:before{content:\"\\F382\"}.fa-cloudscale:before{content:\"\\F383\"}.fa-cloudsmith:before{content:\"\\F384\"}.fa-cloudversify:before{content:\"\\F385\"}.fa-cocktail:before{content:\"\\F561\"}.fa-code:before{content:\"\\F121\"}.fa-code-branch:before{content:\"\\F126\"}.fa-codepen:before{content:\"\\F1CB\"}.fa-codiepie:before{content:\"\\F284\"}.fa-coffee:before{content:\"\\F0F4\"}.fa-cog:before{content:\"\\F013\"}.fa-cogs:before{content:\"\\F085\"}.fa-coins:before{content:\"\\F51E\"}.fa-columns:before{content:\"\\F0DB\"}.fa-comment:before{content:\"\\F075\"}.fa-comment-alt:before{content:\"\\F27A\"}.fa-comment-dollar:before{content:\"\\F651\"}.fa-comment-dots:before{content:\"\\F4AD\"}.fa-comment-medical:before{content:\"\\F7F5\"}.fa-comment-slash:before{content:\"\\F4B3\"}.fa-comments:before{content:\"\\F086\"}.fa-comments-dollar:before{content:\"\\F653\"}.fa-compact-disc:before{content:\"\\F51F\"}.fa-compass:before{content:\"\\F14E\"}.fa-compress:before{content:\"\\F066\"}.fa-compress-alt:before{content:\"\\F422\"}.fa-compress-arrows-alt:before{content:\"\\F78C\"}.fa-concierge-bell:before{content:\"\\F562\"}.fa-confluence:before{content:\"\\F78D\"}.fa-connectdevelop:before{content:\"\\F20E\"}.fa-contao:before{content:\"\\F26D\"}.fa-cookie:before{content:\"\\F563\"}.fa-cookie-bite:before{content:\"\\F564\"}.fa-copy:before{content:\"\\F0C5\"}.fa-copyright:before{content:\"\\F1F9\"}.fa-cotton-bureau:before{content:\"\\F89E\"}.fa-couch:before{content:\"\\F4B8\"}.fa-cpanel:before{content:\"\\F388\"}.fa-creative-commons:before{content:\"\\F25E\"}.fa-creative-commons-by:before{content:\"\\F4E7\"}.fa-creative-commons-nc:before{content:\"\\F4E8\"}.fa-creative-commons-nc-eu:before{content:\"\\F4E9\"}.fa-creative-commons-nc-jp:before{content:\"\\F4EA\"}.fa-creative-commons-nd:before{content:\"\\F4EB\"}.fa-creative-commons-pd:before{content:\"\\F4EC\"}.fa-creative-commons-pd-alt:before{content:\"\\F4ED\"}.fa-creative-commons-remix:before{content:\"\\F4EE\"}.fa-creative-commons-sa:before{content:\"\\F4EF\"}.fa-creative-commons-sampling:before{content:\"\\F4F0\"}.fa-creative-commons-sampling-plus:before{content:\"\\F4F1\"}.fa-creative-commons-share:before{content:\"\\F4F2\"}.fa-creative-commons-zero:before{content:\"\\F4F3\"}.fa-credit-card:before{content:\"\\F09D\"}.fa-critical-role:before{content:\"\\F6C9\"}.fa-crop:before{content:\"\\F125\"}.fa-crop-alt:before{content:\"\\F565\"}.fa-cross:before{content:\"\\F654\"}.fa-crosshairs:before{content:\"\\F05B\"}.fa-crow:before{content:\"\\F520\"}.fa-crown:before{content:\"\\F521\"}.fa-crutch:before{content:\"\\F7F7\"}.fa-css3:before{content:\"\\F13C\"}.fa-css3-alt:before{content:\"\\F38B\"}.fa-cube:before{content:\"\\F1B2\"}.fa-cubes:before{content:\"\\F1B3\"}.fa-cut:before{content:\"\\F0C4\"}.fa-cuttlefish:before{content:\"\\F38C\"}.fa-d-and-d:before{content:\"\\F38D\"}.fa-d-and-d-beyond:before{content:\"\\F6CA\"}.fa-dailymotion:before{content:\"\\F952\"}.fa-dashcube:before{content:\"\\F210\"}.fa-database:before{content:\"\\F1C0\"}.fa-deaf:before{content:\"\\F2A4\"}.fa-deezer:before{content:\"\\F977\"}.fa-delicious:before{content:\"\\F1A5\"}.fa-democrat:before{content:\"\\F747\"}.fa-deploydog:before{content:\"\\F38E\"}.fa-deskpro:before{content:\"\\F38F\"}.fa-desktop:before{content:\"\\F108\"}.fa-dev:before{content:\"\\F6CC\"}.fa-deviantart:before{content:\"\\F1BD\"}.fa-dharmachakra:before{content:\"\\F655\"}.fa-dhl:before{content:\"\\F790\"}.fa-diagnoses:before{content:\"\\F470\"}.fa-diaspora:before{content:\"\\F791\"}.fa-dice:before{content:\"\\F522\"}.fa-dice-d20:before{content:\"\\F6CF\"}.fa-dice-d6:before{content:\"\\F6D1\"}.fa-dice-five:before{content:\"\\F523\"}.fa-dice-four:before{content:\"\\F524\"}.fa-dice-one:before{content:\"\\F525\"}.fa-dice-six:before{content:\"\\F526\"}.fa-dice-three:before{content:\"\\F527\"}.fa-dice-two:before{content:\"\\F528\"}.fa-digg:before{content:\"\\F1A6\"}.fa-digital-ocean:before{content:\"\\F391\"}.fa-digital-tachograph:before{content:\"\\F566\"}.fa-directions:before{content:\"\\F5EB\"}.fa-discord:before{content:\"\\F392\"}.fa-discourse:before{content:\"\\F393\"}.fa-disease:before{content:\"\\F7FA\"}.fa-divide:before{content:\"\\F529\"}.fa-dizzy:before{content:\"\\F567\"}.fa-dna:before{content:\"\\F471\"}.fa-dochub:before{content:\"\\F394\"}.fa-docker:before{content:\"\\F395\"}.fa-dog:before{content:\"\\F6D3\"}.fa-dollar-sign:before{content:\"\\F155\"}.fa-dolly:before{content:\"\\F472\"}.fa-dolly-flatbed:before{content:\"\\F474\"}.fa-donate:before{content:\"\\F4B9\"}.fa-door-closed:before{content:\"\\F52A\"}.fa-door-open:before{content:\"\\F52B\"}.fa-dot-circle:before{content:\"\\F192\"}.fa-dove:before{content:\"\\F4BA\"}.fa-download:before{content:\"\\F019\"}.fa-draft2digital:before{content:\"\\F396\"}.fa-drafting-compass:before{content:\"\\F568\"}.fa-dragon:before{content:\"\\F6D5\"}.fa-draw-polygon:before{content:\"\\F5EE\"}.fa-dribbble:before{content:\"\\F17D\"}.fa-dribbble-square:before{content:\"\\F397\"}.fa-dropbox:before{content:\"\\F16B\"}.fa-drum:before{content:\"\\F569\"}.fa-drum-steelpan:before{content:\"\\F56A\"}.fa-drumstick-bite:before{content:\"\\F6D7\"}.fa-drupal:before{content:\"\\F1A9\"}.fa-dumbbell:before{content:\"\\F44B\"}.fa-dumpster:before{content:\"\\F793\"}.fa-dumpster-fire:before{content:\"\\F794\"}.fa-dungeon:before{content:\"\\F6D9\"}.fa-dyalog:before{content:\"\\F399\"}.fa-earlybirds:before{content:\"\\F39A\"}.fa-ebay:before{content:\"\\F4F4\"}.fa-edge:before{content:\"\\F282\"}.fa-edge-legacy:before{content:\"\\F978\"}.fa-edit:before{content:\"\\F044\"}.fa-egg:before{content:\"\\F7FB\"}.fa-eject:before{content:\"\\F052\"}.fa-elementor:before{content:\"\\F430\"}.fa-ellipsis-h:before{content:\"\\F141\"}.fa-ellipsis-v:before{content:\"\\F142\"}.fa-ello:before{content:\"\\F5F1\"}.fa-ember:before{content:\"\\F423\"}.fa-empire:before{content:\"\\F1D1\"}.fa-envelope:before{content:\"\\F0E0\"}.fa-envelope-open:before{content:\"\\F2B6\"}.fa-envelope-open-text:before{content:\"\\F658\"}.fa-envelope-square:before{content:\"\\F199\"}.fa-envira:before{content:\"\\F299\"}.fa-equals:before{content:\"\\F52C\"}.fa-eraser:before{content:\"\\F12D\"}.fa-erlang:before{content:\"\\F39D\"}.fa-ethereum:before{content:\"\\F42E\"}.fa-ethernet:before{content:\"\\F796\"}.fa-etsy:before{content:\"\\F2D7\"}.fa-euro-sign:before{content:\"\\F153\"}.fa-evernote:before{content:\"\\F839\"}.fa-exchange-alt:before{content:\"\\F362\"}.fa-exclamation:before{content:\"\\F12A\"}.fa-exclamation-circle:before{content:\"\\F06A\"}.fa-exclamation-triangle:before{content:\"\\F071\"}.fa-expand:before{content:\"\\F065\"}.fa-expand-alt:before{content:\"\\F424\"}.fa-expand-arrows-alt:before{content:\"\\F31E\"}.fa-expeditedssl:before{content:\"\\F23E\"}.fa-external-link-alt:before{content:\"\\F35D\"}.fa-external-link-square-alt:before{content:\"\\F360\"}.fa-eye:before{content:\"\\F06E\"}.fa-eye-dropper:before{content:\"\\F1FB\"}.fa-eye-slash:before{content:\"\\F070\"}.fa-facebook:before{content:\"\\F09A\"}.fa-facebook-f:before{content:\"\\F39E\"}.fa-facebook-messenger:before{content:\"\\F39F\"}.fa-facebook-square:before{content:\"\\F082\"}.fa-fan:before{content:\"\\F863\"}.fa-fantasy-flight-games:before{content:\"\\F6DC\"}.fa-fast-backward:before{content:\"\\F049\"}.fa-fast-forward:before{content:\"\\F050\"}.fa-faucet:before{content:\"\\F905\"}.fa-fax:before{content:\"\\F1AC\"}.fa-feather:before{content:\"\\F52D\"}.fa-feather-alt:before{content:\"\\F56B\"}.fa-fedex:before{content:\"\\F797\"}.fa-fedora:before{content:\"\\F798\"}.fa-female:before{content:\"\\F182\"}.fa-fighter-jet:before{content:\"\\F0FB\"}.fa-figma:before{content:\"\\F799\"}.fa-file:before{content:\"\\F15B\"}.fa-file-alt:before{content:\"\\F15C\"}.fa-file-archive:before{content:\"\\F1C6\"}.fa-file-audio:before{content:\"\\F1C7\"}.fa-file-code:before{content:\"\\F1C9\"}.fa-file-contract:before{content:\"\\F56C\"}.fa-file-csv:before{content:\"\\F6DD\"}.fa-file-download:before{content:\"\\F56D\"}.fa-file-excel:before{content:\"\\F1C3\"}.fa-file-export:before{content:\"\\F56E\"}.fa-file-image:before{content:\"\\F1C5\"}.fa-file-import:before{content:\"\\F56F\"}.fa-file-invoice:before{content:\"\\F570\"}.fa-file-invoice-dollar:before{content:\"\\F571\"}.fa-file-medical:before{content:\"\\F477\"}.fa-file-medical-alt:before{content:\"\\F478\"}.fa-file-pdf:before{content:\"\\F1C1\"}.fa-file-powerpoint:before{content:\"\\F1C4\"}.fa-file-prescription:before{content:\"\\F572\"}.fa-file-signature:before{content:\"\\F573\"}.fa-file-upload:before{content:\"\\F574\"}.fa-file-video:before{content:\"\\F1C8\"}.fa-file-word:before{content:\"\\F1C2\"}.fa-fill:before{content:\"\\F575\"}.fa-fill-drip:before{content:\"\\F576\"}.fa-film:before{content:\"\\F008\"}.fa-filter:before{content:\"\\F0B0\"}.fa-fingerprint:before{content:\"\\F577\"}.fa-fire:before{content:\"\\F06D\"}.fa-fire-alt:before{content:\"\\F7E4\"}.fa-fire-extinguisher:before{content:\"\\F134\"}.fa-firefox:before{content:\"\\F269\"}.fa-firefox-browser:before{content:\"\\F907\"}.fa-first-aid:before{content:\"\\F479\"}.fa-first-order:before{content:\"\\F2B0\"}.fa-first-order-alt:before{content:\"\\F50A\"}.fa-firstdraft:before{content:\"\\F3A1\"}.fa-fish:before{content:\"\\F578\"}.fa-fist-raised:before{content:\"\\F6DE\"}.fa-flag:before{content:\"\\F024\"}.fa-flag-checkered:before{content:\"\\F11E\"}.fa-flag-usa:before{content:\"\\F74D\"}.fa-flask:before{content:\"\\F0C3\"}.fa-flickr:before{content:\"\\F16E\"}.fa-flipboard:before{content:\"\\F44D\"}.fa-flushed:before{content:\"\\F579\"}.fa-fly:before{content:\"\\F417\"}.fa-folder:before{content:\"\\F07B\"}.fa-folder-minus:before{content:\"\\F65D\"}.fa-folder-open:before{content:\"\\F07C\"}.fa-folder-plus:before{content:\"\\F65E\"}.fa-font:before{content:\"\\F031\"}.fa-font-awesome:before{content:\"\\F2B4\"}.fa-font-awesome-alt:before{content:\"\\F35C\"}.fa-font-awesome-flag:before{content:\"\\F425\"}.fa-font-awesome-logo-full:before{content:\"\\F4E6\"}.fa-fonticons:before{content:\"\\F280\"}.fa-fonticons-fi:before{content:\"\\F3A2\"}.fa-football-ball:before{content:\"\\F44E\"}.fa-fort-awesome:before{content:\"\\F286\"}.fa-fort-awesome-alt:before{content:\"\\F3A3\"}.fa-forumbee:before{content:\"\\F211\"}.fa-forward:before{content:\"\\F04E\"}.fa-foursquare:before{content:\"\\F180\"}.fa-free-code-camp:before{content:\"\\F2C5\"}.fa-freebsd:before{content:\"\\F3A4\"}.fa-frog:before{content:\"\\F52E\"}.fa-frown:before{content:\"\\F119\"}.fa-frown-open:before{content:\"\\F57A\"}.fa-fulcrum:before{content:\"\\F50B\"}.fa-funnel-dollar:before{content:\"\\F662\"}.fa-futbol:before{content:\"\\F1E3\"}.fa-galactic-republic:before{content:\"\\F50C\"}.fa-galactic-senate:before{content:\"\\F50D\"}.fa-gamepad:before{content:\"\\F11B\"}.fa-gas-pump:before{content:\"\\F52F\"}.fa-gavel:before{content:\"\\F0E3\"}.fa-gem:before{content:\"\\F3A5\"}.fa-genderless:before{content:\"\\F22D\"}.fa-get-pocket:before{content:\"\\F265\"}.fa-gg:before{content:\"\\F260\"}.fa-gg-circle:before{content:\"\\F261\"}.fa-ghost:before{content:\"\\F6E2\"}.fa-gift:before{content:\"\\F06B\"}.fa-gifts:before{content:\"\\F79C\"}.fa-git:before{content:\"\\F1D3\"}.fa-git-alt:before{content:\"\\F841\"}.fa-git-square:before{content:\"\\F1D2\"}.fa-github:before{content:\"\\F09B\"}.fa-github-alt:before{content:\"\\F113\"}.fa-github-square:before{content:\"\\F092\"}.fa-gitkraken:before{content:\"\\F3A6\"}.fa-gitlab:before{content:\"\\F296\"}.fa-gitter:before{content:\"\\F426\"}.fa-glass-cheers:before{content:\"\\F79F\"}.fa-glass-martini:before{content:\"\\F000\"}.fa-glass-martini-alt:before{content:\"\\F57B\"}.fa-glass-whiskey:before{content:\"\\F7A0\"}.fa-glasses:before{content:\"\\F530\"}.fa-glide:before{content:\"\\F2A5\"}.fa-glide-g:before{content:\"\\F2A6\"}.fa-globe:before{content:\"\\F0AC\"}.fa-globe-africa:before{content:\"\\F57C\"}.fa-globe-americas:before{content:\"\\F57D\"}.fa-globe-asia:before{content:\"\\F57E\"}.fa-globe-europe:before{content:\"\\F7A2\"}.fa-gofore:before{content:\"\\F3A7\"}.fa-golf-ball:before{content:\"\\F450\"}.fa-goodreads:before{content:\"\\F3A8\"}.fa-goodreads-g:before{content:\"\\F3A9\"}.fa-google:before{content:\"\\F1A0\"}.fa-google-drive:before{content:\"\\F3AA\"}.fa-google-pay:before{content:\"\\F979\"}.fa-google-play:before{content:\"\\F3AB\"}.fa-google-plus:before{content:\"\\F2B3\"}.fa-google-plus-g:before{content:\"\\F0D5\"}.fa-google-plus-square:before{content:\"\\F0D4\"}.fa-google-wallet:before{content:\"\\F1EE\"}.fa-gopuram:before{content:\"\\F664\"}.fa-graduation-cap:before{content:\"\\F19D\"}.fa-gratipay:before{content:\"\\F184\"}.fa-grav:before{content:\"\\F2D6\"}.fa-greater-than:before{content:\"\\F531\"}.fa-greater-than-equal:before{content:\"\\F532\"}.fa-grimace:before{content:\"\\F57F\"}.fa-grin:before{content:\"\\F580\"}.fa-grin-alt:before{content:\"\\F581\"}.fa-grin-beam:before{content:\"\\F582\"}.fa-grin-beam-sweat:before{content:\"\\F583\"}.fa-grin-hearts:before{content:\"\\F584\"}.fa-grin-squint:before{content:\"\\F585\"}.fa-grin-squint-tears:before{content:\"\\F586\"}.fa-grin-stars:before{content:\"\\F587\"}.fa-grin-tears:before{content:\"\\F588\"}.fa-grin-tongue:before{content:\"\\F589\"}.fa-grin-tongue-squint:before{content:\"\\F58A\"}.fa-grin-tongue-wink:before{content:\"\\F58B\"}.fa-grin-wink:before{content:\"\\F58C\"}.fa-grip-horizontal:before{content:\"\\F58D\"}.fa-grip-lines:before{content:\"\\F7A4\"}.fa-grip-lines-vertical:before{content:\"\\F7A5\"}.fa-grip-vertical:before{content:\"\\F58E\"}.fa-gripfire:before{content:\"\\F3AC\"}.fa-grunt:before{content:\"\\F3AD\"}.fa-guitar:before{content:\"\\F7A6\"}.fa-gulp:before{content:\"\\F3AE\"}.fa-h-square:before{content:\"\\F0FD\"}.fa-hacker-news:before{content:\"\\F1D4\"}.fa-hacker-news-square:before{content:\"\\F3AF\"}.fa-hackerrank:before{content:\"\\F5F7\"}.fa-hamburger:before{content:\"\\F805\"}.fa-hammer:before{content:\"\\F6E3\"}.fa-hamsa:before{content:\"\\F665\"}.fa-hand-holding:before{content:\"\\F4BD\"}.fa-hand-holding-heart:before{content:\"\\F4BE\"}.fa-hand-holding-medical:before{content:\"\\F95C\"}.fa-hand-holding-usd:before{content:\"\\F4C0\"}.fa-hand-holding-water:before{content:\"\\F4C1\"}.fa-hand-lizard:before{content:\"\\F258\"}.fa-hand-middle-finger:before{content:\"\\F806\"}.fa-hand-paper:before{content:\"\\F256\"}.fa-hand-peace:before{content:\"\\F25B\"}.fa-hand-point-down:before{content:\"\\F0A7\"}.fa-hand-point-left:before{content:\"\\F0A5\"}.fa-hand-point-right:before{content:\"\\F0A4\"}.fa-hand-point-up:before{content:\"\\F0A6\"}.fa-hand-pointer:before{content:\"\\F25A\"}.fa-hand-rock:before{content:\"\\F255\"}.fa-hand-scissors:before{content:\"\\F257\"}.fa-hand-sparkles:before{content:\"\\F95D\"}.fa-hand-spock:before{content:\"\\F259\"}.fa-hands:before{content:\"\\F4C2\"}.fa-hands-helping:before{content:\"\\F4C4\"}.fa-hands-wash:before{content:\"\\F95E\"}.fa-handshake:before{content:\"\\F2B5\"}.fa-handshake-alt-slash:before{content:\"\\F95F\"}.fa-handshake-slash:before{content:\"\\F960\"}.fa-hanukiah:before{content:\"\\F6E6\"}.fa-hard-hat:before{content:\"\\F807\"}.fa-hashtag:before{content:\"\\F292\"}.fa-hat-cowboy:before{content:\"\\F8C0\"}.fa-hat-cowboy-side:before{content:\"\\F8C1\"}.fa-hat-wizard:before{content:\"\\F6E8\"}.fa-hdd:before{content:\"\\F0A0\"}.fa-head-side-cough:before{content:\"\\F961\"}.fa-head-side-cough-slash:before{content:\"\\F962\"}.fa-head-side-mask:before{content:\"\\F963\"}.fa-head-side-virus:before{content:\"\\F964\"}.fa-heading:before{content:\"\\F1DC\"}.fa-headphones:before{content:\"\\F025\"}.fa-headphones-alt:before{content:\"\\F58F\"}.fa-headset:before{content:\"\\F590\"}.fa-heart:before{content:\"\\F004\"}.fa-heart-broken:before{content:\"\\F7A9\"}.fa-heartbeat:before{content:\"\\F21E\"}.fa-helicopter:before{content:\"\\F533\"}.fa-highlighter:before{content:\"\\F591\"}.fa-hiking:before{content:\"\\F6EC\"}.fa-hippo:before{content:\"\\F6ED\"}.fa-hips:before{content:\"\\F452\"}.fa-hire-a-helper:before{content:\"\\F3B0\"}.fa-history:before{content:\"\\F1DA\"}.fa-hockey-puck:before{content:\"\\F453\"}.fa-holly-berry:before{content:\"\\F7AA\"}.fa-home:before{content:\"\\F015\"}.fa-hooli:before{content:\"\\F427\"}.fa-hornbill:before{content:\"\\F592\"}.fa-horse:before{content:\"\\F6F0\"}.fa-horse-head:before{content:\"\\F7AB\"}.fa-hospital:before{content:\"\\F0F8\"}.fa-hospital-alt:before{content:\"\\F47D\"}.fa-hospital-symbol:before{content:\"\\F47E\"}.fa-hospital-user:before{content:\"\\F80D\"}.fa-hot-tub:before{content:\"\\F593\"}.fa-hotdog:before{content:\"\\F80F\"}.fa-hotel:before{content:\"\\F594\"}.fa-hotjar:before{content:\"\\F3B1\"}.fa-hourglass:before{content:\"\\F254\"}.fa-hourglass-end:before{content:\"\\F253\"}.fa-hourglass-half:before{content:\"\\F252\"}.fa-hourglass-start:before{content:\"\\F251\"}.fa-house-damage:before{content:\"\\F6F1\"}.fa-house-user:before{content:\"\\F965\"}.fa-houzz:before{content:\"\\F27C\"}.fa-hryvnia:before{content:\"\\F6F2\"}.fa-html5:before{content:\"\\F13B\"}.fa-hubspot:before{content:\"\\F3B2\"}.fa-i-cursor:before{content:\"\\F246\"}.fa-ice-cream:before{content:\"\\F810\"}.fa-icicles:before{content:\"\\F7AD\"}.fa-icons:before{content:\"\\F86D\"}.fa-id-badge:before{content:\"\\F2C1\"}.fa-id-card:before{content:\"\\F2C2\"}.fa-id-card-alt:before{content:\"\\F47F\"}.fa-ideal:before{content:\"\\F913\"}.fa-igloo:before{content:\"\\F7AE\"}.fa-image:before{content:\"\\F03E\"}.fa-images:before{content:\"\\F302\"}.fa-imdb:before{content:\"\\F2D8\"}.fa-inbox:before{content:\"\\F01C\"}.fa-indent:before{content:\"\\F03C\"}.fa-industry:before{content:\"\\F275\"}.fa-infinity:before{content:\"\\F534\"}.fa-info:before{content:\"\\F129\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-instagram:before{content:\"\\F16D\"}.fa-instagram-square:before{content:\"\\F955\"}.fa-intercom:before{content:\"\\F7AF\"}.fa-internet-explorer:before{content:\"\\F26B\"}.fa-invision:before{content:\"\\F7B0\"}.fa-ioxhost:before{content:\"\\F208\"}.fa-italic:before{content:\"\\F033\"}.fa-itch-io:before{content:\"\\F83A\"}.fa-itunes:before{content:\"\\F3B4\"}.fa-itunes-note:before{content:\"\\F3B5\"}.fa-java:before{content:\"\\F4E4\"}.fa-jedi:before{content:\"\\F669\"}.fa-jedi-order:before{content:\"\\F50E\"}.fa-jenkins:before{content:\"\\F3B6\"}.fa-jira:before{content:\"\\F7B1\"}.fa-joget:before{content:\"\\F3B7\"}.fa-joint:before{content:\"\\F595\"}.fa-joomla:before{content:\"\\F1AA\"}.fa-journal-whills:before{content:\"\\F66A\"}.fa-js:before{content:\"\\F3B8\"}.fa-js-square:before{content:\"\\F3B9\"}.fa-jsfiddle:before{content:\"\\F1CC\"}.fa-kaaba:before{content:\"\\F66B\"}.fa-kaggle:before{content:\"\\F5FA\"}.fa-key:before{content:\"\\F084\"}.fa-keybase:before{content:\"\\F4F5\"}.fa-keyboard:before{content:\"\\F11C\"}.fa-keycdn:before{content:\"\\F3BA\"}.fa-khanda:before{content:\"\\F66D\"}.fa-kickstarter:before{content:\"\\F3BB\"}.fa-kickstarter-k:before{content:\"\\F3BC\"}.fa-kiss:before{content:\"\\F596\"}.fa-kiss-beam:before{content:\"\\F597\"}.fa-kiss-wink-heart:before{content:\"\\F598\"}.fa-kiwi-bird:before{content:\"\\F535\"}.fa-korvue:before{content:\"\\F42F\"}.fa-landmark:before{content:\"\\F66F\"}.fa-language:before{content:\"\\F1AB\"}.fa-laptop:before{content:\"\\F109\"}.fa-laptop-code:before{content:\"\\F5FC\"}.fa-laptop-house:before{content:\"\\F966\"}.fa-laptop-medical:before{content:\"\\F812\"}.fa-laravel:before{content:\"\\F3BD\"}.fa-lastfm:before{content:\"\\F202\"}.fa-lastfm-square:before{content:\"\\F203\"}.fa-laugh:before{content:\"\\F599\"}.fa-laugh-beam:before{content:\"\\F59A\"}.fa-laugh-squint:before{content:\"\\F59B\"}.fa-laugh-wink:before{content:\"\\F59C\"}.fa-layer-group:before{content:\"\\F5FD\"}.fa-leaf:before{content:\"\\F06C\"}.fa-leanpub:before{content:\"\\F212\"}.fa-lemon:before{content:\"\\F094\"}.fa-less:before{content:\"\\F41D\"}.fa-less-than:before{content:\"\\F536\"}.fa-less-than-equal:before{content:\"\\F537\"}.fa-level-down-alt:before{content:\"\\F3BE\"}.fa-level-up-alt:before{content:\"\\F3BF\"}.fa-life-ring:before{content:\"\\F1CD\"}.fa-lightbulb:before{content:\"\\F0EB\"}.fa-line:before{content:\"\\F3C0\"}.fa-link:before{content:\"\\F0C1\"}.fa-linkedin:before{content:\"\\F08C\"}.fa-linkedin-in:before{content:\"\\F0E1\"}.fa-linode:before{content:\"\\F2B8\"}.fa-linux:before{content:\"\\F17C\"}.fa-lira-sign:before{content:\"\\F195\"}.fa-list:before{content:\"\\F03A\"}.fa-list-alt:before{content:\"\\F022\"}.fa-list-ol:before{content:\"\\F0CB\"}.fa-list-ul:before{content:\"\\F0CA\"}.fa-location-arrow:before{content:\"\\F124\"}.fa-lock:before{content:\"\\F023\"}.fa-lock-open:before{content:\"\\F3C1\"}.fa-long-arrow-alt-down:before{content:\"\\F309\"}.fa-long-arrow-alt-left:before{content:\"\\F30A\"}.fa-long-arrow-alt-right:before{content:\"\\F30B\"}.fa-long-arrow-alt-up:before{content:\"\\F30C\"}.fa-low-vision:before{content:\"\\F2A8\"}.fa-luggage-cart:before{content:\"\\F59D\"}.fa-lungs:before{content:\"\\F604\"}.fa-lungs-virus:before{content:\"\\F967\"}.fa-lyft:before{content:\"\\F3C3\"}.fa-magento:before{content:\"\\F3C4\"}.fa-magic:before{content:\"\\F0D0\"}.fa-magnet:before{content:\"\\F076\"}.fa-mail-bulk:before{content:\"\\F674\"}.fa-mailchimp:before{content:\"\\F59E\"}.fa-male:before{content:\"\\F183\"}.fa-mandalorian:before{content:\"\\F50F\"}.fa-map:before{content:\"\\F279\"}.fa-map-marked:before{content:\"\\F59F\"}.fa-map-marked-alt:before{content:\"\\F5A0\"}.fa-map-marker:before{content:\"\\F041\"}.fa-map-marker-alt:before{content:\"\\F3C5\"}.fa-map-pin:before{content:\"\\F276\"}.fa-map-signs:before{content:\"\\F277\"}.fa-markdown:before{content:\"\\F60F\"}.fa-marker:before{content:\"\\F5A1\"}.fa-mars:before{content:\"\\F222\"}.fa-mars-double:before{content:\"\\F227\"}.fa-mars-stroke:before{content:\"\\F229\"}.fa-mars-stroke-h:before{content:\"\\F22B\"}.fa-mars-stroke-v:before{content:\"\\F22A\"}.fa-mask:before{content:\"\\F6FA\"}.fa-mastodon:before{content:\"\\F4F6\"}.fa-maxcdn:before{content:\"\\F136\"}.fa-mdb:before{content:\"\\F8CA\"}.fa-medal:before{content:\"\\F5A2\"}.fa-medapps:before{content:\"\\F3C6\"}.fa-medium:before{content:\"\\F23A\"}.fa-medium-m:before{content:\"\\F3C7\"}.fa-medkit:before{content:\"\\F0FA\"}.fa-medrt:before{content:\"\\F3C8\"}.fa-meetup:before{content:\"\\F2E0\"}.fa-megaport:before{content:\"\\F5A3\"}.fa-meh:before{content:\"\\F11A\"}.fa-meh-blank:before{content:\"\\F5A4\"}.fa-meh-rolling-eyes:before{content:\"\\F5A5\"}.fa-memory:before{content:\"\\F538\"}.fa-mendeley:before{content:\"\\F7B3\"}.fa-menorah:before{content:\"\\F676\"}.fa-mercury:before{content:\"\\F223\"}.fa-meteor:before{content:\"\\F753\"}.fa-microblog:before{content:\"\\F91A\"}.fa-microchip:before{content:\"\\F2DB\"}.fa-microphone:before{content:\"\\F130\"}.fa-microphone-alt:before{content:\"\\F3C9\"}.fa-microphone-alt-slash:before{content:\"\\F539\"}.fa-microphone-slash:before{content:\"\\F131\"}.fa-microscope:before{content:\"\\F610\"}.fa-microsoft:before{content:\"\\F3CA\"}.fa-minus:before{content:\"\\F068\"}.fa-minus-circle:before{content:\"\\F056\"}.fa-minus-square:before{content:\"\\F146\"}.fa-mitten:before{content:\"\\F7B5\"}.fa-mix:before{content:\"\\F3CB\"}.fa-mixcloud:before{content:\"\\F289\"}.fa-mixer:before{content:\"\\F956\"}.fa-mizuni:before{content:\"\\F3CC\"}.fa-mobile:before{content:\"\\F10B\"}.fa-mobile-alt:before{content:\"\\F3CD\"}.fa-modx:before{content:\"\\F285\"}.fa-monero:before{content:\"\\F3D0\"}.fa-money-bill:before{content:\"\\F0D6\"}.fa-money-bill-alt:before{content:\"\\F3D1\"}.fa-money-bill-wave:before{content:\"\\F53A\"}.fa-money-bill-wave-alt:before{content:\"\\F53B\"}.fa-money-check:before{content:\"\\F53C\"}.fa-money-check-alt:before{content:\"\\F53D\"}.fa-monument:before{content:\"\\F5A6\"}.fa-moon:before{content:\"\\F186\"}.fa-mortar-pestle:before{content:\"\\F5A7\"}.fa-mosque:before{content:\"\\F678\"}.fa-motorcycle:before{content:\"\\F21C\"}.fa-mountain:before{content:\"\\F6FC\"}.fa-mouse:before{content:\"\\F8CC\"}.fa-mouse-pointer:before{content:\"\\F245\"}.fa-mug-hot:before{content:\"\\F7B6\"}.fa-music:before{content:\"\\F001\"}.fa-napster:before{content:\"\\F3D2\"}.fa-neos:before{content:\"\\F612\"}.fa-network-wired:before{content:\"\\F6FF\"}.fa-neuter:before{content:\"\\F22C\"}.fa-newspaper:before{content:\"\\F1EA\"}.fa-nimblr:before{content:\"\\F5A8\"}.fa-node:before{content:\"\\F419\"}.fa-node-js:before{content:\"\\F3D3\"}.fa-not-equal:before{content:\"\\F53E\"}.fa-notes-medical:before{content:\"\\F481\"}.fa-npm:before{content:\"\\F3D4\"}.fa-ns8:before{content:\"\\F3D5\"}.fa-nutritionix:before{content:\"\\F3D6\"}.fa-object-group:before{content:\"\\F247\"}.fa-object-ungroup:before{content:\"\\F248\"}.fa-odnoklassniki:before{content:\"\\F263\"}.fa-odnoklassniki-square:before{content:\"\\F264\"}.fa-oil-can:before{content:\"\\F613\"}.fa-old-republic:before{content:\"\\F510\"}.fa-om:before{content:\"\\F679\"}.fa-opencart:before{content:\"\\F23D\"}.fa-openid:before{content:\"\\F19B\"}.fa-opera:before{content:\"\\F26A\"}.fa-optin-monster:before{content:\"\\F23C\"}.fa-orcid:before{content:\"\\F8D2\"}.fa-osi:before{content:\"\\F41A\"}.fa-otter:before{content:\"\\F700\"}.fa-outdent:before{content:\"\\F03B\"}.fa-page4:before{content:\"\\F3D7\"}.fa-pagelines:before{content:\"\\F18C\"}.fa-pager:before{content:\"\\F815\"}.fa-paint-brush:before{content:\"\\F1FC\"}.fa-paint-roller:before{content:\"\\F5AA\"}.fa-palette:before{content:\"\\F53F\"}.fa-palfed:before{content:\"\\F3D8\"}.fa-pallet:before{content:\"\\F482\"}.fa-paper-plane:before{content:\"\\F1D8\"}.fa-paperclip:before{content:\"\\F0C6\"}.fa-parachute-box:before{content:\"\\F4CD\"}.fa-paragraph:before{content:\"\\F1DD\"}.fa-parking:before{content:\"\\F540\"}.fa-passport:before{content:\"\\F5AB\"}.fa-pastafarianism:before{content:\"\\F67B\"}.fa-paste:before{content:\"\\F0EA\"}.fa-patreon:before{content:\"\\F3D9\"}.fa-pause:before{content:\"\\F04C\"}.fa-pause-circle:before{content:\"\\F28B\"}.fa-paw:before{content:\"\\F1B0\"}.fa-paypal:before{content:\"\\F1ED\"}.fa-peace:before{content:\"\\F67C\"}.fa-pen:before{content:\"\\F304\"}.fa-pen-alt:before{content:\"\\F305\"}.fa-pen-fancy:before{content:\"\\F5AC\"}.fa-pen-nib:before{content:\"\\F5AD\"}.fa-pen-square:before{content:\"\\F14B\"}.fa-pencil-alt:before{content:\"\\F303\"}.fa-pencil-ruler:before{content:\"\\F5AE\"}.fa-penny-arcade:before{content:\"\\F704\"}.fa-people-arrows:before{content:\"\\F968\"}.fa-people-carry:before{content:\"\\F4CE\"}.fa-pepper-hot:before{content:\"\\F816\"}.fa-percent:before{content:\"\\F295\"}.fa-percentage:before{content:\"\\F541\"}.fa-periscope:before{content:\"\\F3DA\"}.fa-person-booth:before{content:\"\\F756\"}.fa-phabricator:before{content:\"\\F3DB\"}.fa-phoenix-framework:before{content:\"\\F3DC\"}.fa-phoenix-squadron:before{content:\"\\F511\"}.fa-phone:before{content:\"\\F095\"}.fa-phone-alt:before{content:\"\\F879\"}.fa-phone-slash:before{content:\"\\F3DD\"}.fa-phone-square:before{content:\"\\F098\"}.fa-phone-square-alt:before{content:\"\\F87B\"}.fa-phone-volume:before{content:\"\\F2A0\"}.fa-photo-video:before{content:\"\\F87C\"}.fa-php:before{content:\"\\F457\"}.fa-pied-piper:before{content:\"\\F2AE\"}.fa-pied-piper-alt:before{content:\"\\F1A8\"}.fa-pied-piper-hat:before{content:\"\\F4E5\"}.fa-pied-piper-pp:before{content:\"\\F1A7\"}.fa-pied-piper-square:before{content:\"\\F91E\"}.fa-piggy-bank:before{content:\"\\F4D3\"}.fa-pills:before{content:\"\\F484\"}.fa-pinterest:before{content:\"\\F0D2\"}.fa-pinterest-p:before{content:\"\\F231\"}.fa-pinterest-square:before{content:\"\\F0D3\"}.fa-pizza-slice:before{content:\"\\F818\"}.fa-place-of-worship:before{content:\"\\F67F\"}.fa-plane:before{content:\"\\F072\"}.fa-plane-arrival:before{content:\"\\F5AF\"}.fa-plane-departure:before{content:\"\\F5B0\"}.fa-plane-slash:before{content:\"\\F969\"}.fa-play:before{content:\"\\F04B\"}.fa-play-circle:before{content:\"\\F144\"}.fa-playstation:before{content:\"\\F3DF\"}.fa-plug:before{content:\"\\F1E6\"}.fa-plus:before{content:\"\\F067\"}.fa-plus-circle:before{content:\"\\F055\"}.fa-plus-square:before{content:\"\\F0FE\"}.fa-podcast:before{content:\"\\F2CE\"}.fa-poll:before{content:\"\\F681\"}.fa-poll-h:before{content:\"\\F682\"}.fa-poo:before{content:\"\\F2FE\"}.fa-poo-storm:before{content:\"\\F75A\"}.fa-poop:before{content:\"\\F619\"}.fa-portrait:before{content:\"\\F3E0\"}.fa-pound-sign:before{content:\"\\F154\"}.fa-power-off:before{content:\"\\F011\"}.fa-pray:before{content:\"\\F683\"}.fa-praying-hands:before{content:\"\\F684\"}.fa-prescription:before{content:\"\\F5B1\"}.fa-prescription-bottle:before{content:\"\\F485\"}.fa-prescription-bottle-alt:before{content:\"\\F486\"}.fa-print:before{content:\"\\F02F\"}.fa-procedures:before{content:\"\\F487\"}.fa-product-hunt:before{content:\"\\F288\"}.fa-project-diagram:before{content:\"\\F542\"}.fa-pump-medical:before{content:\"\\F96A\"}.fa-pump-soap:before{content:\"\\F96B\"}.fa-pushed:before{content:\"\\F3E1\"}.fa-puzzle-piece:before{content:\"\\F12E\"}.fa-python:before{content:\"\\F3E2\"}.fa-qq:before{content:\"\\F1D6\"}.fa-qrcode:before{content:\"\\F029\"}.fa-question:before{content:\"\\F128\"}.fa-question-circle:before{content:\"\\F059\"}.fa-quidditch:before{content:\"\\F458\"}.fa-quinscape:before{content:\"\\F459\"}.fa-quora:before{content:\"\\F2C4\"}.fa-quote-left:before{content:\"\\F10D\"}.fa-quote-right:before{content:\"\\F10E\"}.fa-quran:before{content:\"\\F687\"}.fa-r-project:before{content:\"\\F4F7\"}.fa-radiation:before{content:\"\\F7B9\"}.fa-radiation-alt:before{content:\"\\F7BA\"}.fa-rainbow:before{content:\"\\F75B\"}.fa-random:before{content:\"\\F074\"}.fa-raspberry-pi:before{content:\"\\F7BB\"}.fa-ravelry:before{content:\"\\F2D9\"}.fa-react:before{content:\"\\F41B\"}.fa-reacteurope:before{content:\"\\F75D\"}.fa-readme:before{content:\"\\F4D5\"}.fa-rebel:before{content:\"\\F1D0\"}.fa-receipt:before{content:\"\\F543\"}.fa-record-vinyl:before{content:\"\\F8D9\"}.fa-recycle:before{content:\"\\F1B8\"}.fa-red-river:before{content:\"\\F3E3\"}.fa-reddit:before{content:\"\\F1A1\"}.fa-reddit-alien:before{content:\"\\F281\"}.fa-reddit-square:before{content:\"\\F1A2\"}.fa-redhat:before{content:\"\\F7BC\"}.fa-redo:before{content:\"\\F01E\"}.fa-redo-alt:before{content:\"\\F2F9\"}.fa-registered:before{content:\"\\F25D\"}.fa-remove-format:before{content:\"\\F87D\"}.fa-renren:before{content:\"\\F18B\"}.fa-reply:before{content:\"\\F3E5\"}.fa-reply-all:before{content:\"\\F122\"}.fa-replyd:before{content:\"\\F3E6\"}.fa-republican:before{content:\"\\F75E\"}.fa-researchgate:before{content:\"\\F4F8\"}.fa-resolving:before{content:\"\\F3E7\"}.fa-restroom:before{content:\"\\F7BD\"}.fa-retweet:before{content:\"\\F079\"}.fa-rev:before{content:\"\\F5B2\"}.fa-ribbon:before{content:\"\\F4D6\"}.fa-ring:before{content:\"\\F70B\"}.fa-road:before{content:\"\\F018\"}.fa-robot:before{content:\"\\F544\"}.fa-rocket:before{content:\"\\F135\"}.fa-rocketchat:before{content:\"\\F3E8\"}.fa-rockrms:before{content:\"\\F3E9\"}.fa-route:before{content:\"\\F4D7\"}.fa-rss:before{content:\"\\F09E\"}.fa-rss-square:before{content:\"\\F143\"}.fa-ruble-sign:before{content:\"\\F158\"}.fa-ruler:before{content:\"\\F545\"}.fa-ruler-combined:before{content:\"\\F546\"}.fa-ruler-horizontal:before{content:\"\\F547\"}.fa-ruler-vertical:before{content:\"\\F548\"}.fa-running:before{content:\"\\F70C\"}.fa-rupee-sign:before{content:\"\\F156\"}.fa-rust:before{content:\"\\F97A\"}.fa-sad-cry:before{content:\"\\F5B3\"}.fa-sad-tear:before{content:\"\\F5B4\"}.fa-safari:before{content:\"\\F267\"}.fa-salesforce:before{content:\"\\F83B\"}.fa-sass:before{content:\"\\F41E\"}.fa-satellite:before{content:\"\\F7BF\"}.fa-satellite-dish:before{content:\"\\F7C0\"}.fa-save:before{content:\"\\F0C7\"}.fa-schlix:before{content:\"\\F3EA\"}.fa-school:before{content:\"\\F549\"}.fa-screwdriver:before{content:\"\\F54A\"}.fa-scribd:before{content:\"\\F28A\"}.fa-scroll:before{content:\"\\F70E\"}.fa-sd-card:before{content:\"\\F7C2\"}.fa-search:before{content:\"\\F002\"}.fa-search-dollar:before{content:\"\\F688\"}.fa-search-location:before{content:\"\\F689\"}.fa-search-minus:before{content:\"\\F010\"}.fa-search-plus:before{content:\"\\F00E\"}.fa-searchengin:before{content:\"\\F3EB\"}.fa-seedling:before{content:\"\\F4D8\"}.fa-sellcast:before{content:\"\\F2DA\"}.fa-sellsy:before{content:\"\\F213\"}.fa-server:before{content:\"\\F233\"}.fa-servicestack:before{content:\"\\F3EC\"}.fa-shapes:before{content:\"\\F61F\"}.fa-share:before{content:\"\\F064\"}.fa-share-alt:before{content:\"\\F1E0\"}.fa-share-alt-square:before{content:\"\\F1E1\"}.fa-share-square:before{content:\"\\F14D\"}.fa-shekel-sign:before{content:\"\\F20B\"}.fa-shield-alt:before{content:\"\\F3ED\"}.fa-shield-virus:before{content:\"\\F96C\"}.fa-ship:before{content:\"\\F21A\"}.fa-shipping-fast:before{content:\"\\F48B\"}.fa-shirtsinbulk:before{content:\"\\F214\"}.fa-shoe-prints:before{content:\"\\F54B\"}.fa-shopify:before{content:\"\\F957\"}.fa-shopping-bag:before{content:\"\\F290\"}.fa-shopping-basket:before{content:\"\\F291\"}.fa-shopping-cart:before{content:\"\\F07A\"}.fa-shopware:before{content:\"\\F5B5\"}.fa-shower:before{content:\"\\F2CC\"}.fa-shuttle-van:before{content:\"\\F5B6\"}.fa-sign:before{content:\"\\F4D9\"}.fa-sign-in-alt:before{content:\"\\F2F6\"}.fa-sign-language:before{content:\"\\F2A7\"}.fa-sign-out-alt:before{content:\"\\F2F5\"}.fa-signal:before{content:\"\\F012\"}.fa-signature:before{content:\"\\F5B7\"}.fa-sim-card:before{content:\"\\F7C4\"}.fa-simplybuilt:before{content:\"\\F215\"}.fa-sink:before{content:\"\\F96D\"}.fa-sistrix:before{content:\"\\F3EE\"}.fa-sitemap:before{content:\"\\F0E8\"}.fa-sith:before{content:\"\\F512\"}.fa-skating:before{content:\"\\F7C5\"}.fa-sketch:before{content:\"\\F7C6\"}.fa-skiing:before{content:\"\\F7C9\"}.fa-skiing-nordic:before{content:\"\\F7CA\"}.fa-skull:before{content:\"\\F54C\"}.fa-skull-crossbones:before{content:\"\\F714\"}.fa-skyatlas:before{content:\"\\F216\"}.fa-skype:before{content:\"\\F17E\"}.fa-slack:before{content:\"\\F198\"}.fa-slack-hash:before{content:\"\\F3EF\"}.fa-slash:before{content:\"\\F715\"}.fa-sleigh:before{content:\"\\F7CC\"}.fa-sliders-h:before{content:\"\\F1DE\"}.fa-slideshare:before{content:\"\\F1E7\"}.fa-smile:before{content:\"\\F118\"}.fa-smile-beam:before{content:\"\\F5B8\"}.fa-smile-wink:before{content:\"\\F4DA\"}.fa-smog:before{content:\"\\F75F\"}.fa-smoking:before{content:\"\\F48D\"}.fa-smoking-ban:before{content:\"\\F54D\"}.fa-sms:before{content:\"\\F7CD\"}.fa-snapchat:before{content:\"\\F2AB\"}.fa-snapchat-ghost:before{content:\"\\F2AC\"}.fa-snapchat-square:before{content:\"\\F2AD\"}.fa-snowboarding:before{content:\"\\F7CE\"}.fa-snowflake:before{content:\"\\F2DC\"}.fa-snowman:before{content:\"\\F7D0\"}.fa-snowplow:before{content:\"\\F7D2\"}.fa-soap:before{content:\"\\F96E\"}.fa-socks:before{content:\"\\F696\"}.fa-solar-panel:before{content:\"\\F5BA\"}.fa-sort:before{content:\"\\F0DC\"}.fa-sort-alpha-down:before{content:\"\\F15D\"}.fa-sort-alpha-down-alt:before{content:\"\\F881\"}.fa-sort-alpha-up:before{content:\"\\F15E\"}.fa-sort-alpha-up-alt:before{content:\"\\F882\"}.fa-sort-amount-down:before{content:\"\\F160\"}.fa-sort-amount-down-alt:before{content:\"\\F884\"}.fa-sort-amount-up:before{content:\"\\F161\"}.fa-sort-amount-up-alt:before{content:\"\\F885\"}.fa-sort-down:before{content:\"\\F0DD\"}.fa-sort-numeric-down:before{content:\"\\F162\"}.fa-sort-numeric-down-alt:before{content:\"\\F886\"}.fa-sort-numeric-up:before{content:\"\\F163\"}.fa-sort-numeric-up-alt:before{content:\"\\F887\"}.fa-sort-up:before{content:\"\\F0DE\"}.fa-soundcloud:before{content:\"\\F1BE\"}.fa-sourcetree:before{content:\"\\F7D3\"}.fa-spa:before{content:\"\\F5BB\"}.fa-space-shuttle:before{content:\"\\F197\"}.fa-speakap:before{content:\"\\F3F3\"}.fa-speaker-deck:before{content:\"\\F83C\"}.fa-spell-check:before{content:\"\\F891\"}.fa-spider:before{content:\"\\F717\"}.fa-spinner:before{content:\"\\F110\"}.fa-splotch:before{content:\"\\F5BC\"}.fa-spotify:before{content:\"\\F1BC\"}.fa-spray-can:before{content:\"\\F5BD\"}.fa-square:before{content:\"\\F0C8\"}.fa-square-full:before{content:\"\\F45C\"}.fa-square-root-alt:before{content:\"\\F698\"}.fa-squarespace:before{content:\"\\F5BE\"}.fa-stack-exchange:before{content:\"\\F18D\"}.fa-stack-overflow:before{content:\"\\F16C\"}.fa-stackpath:before{content:\"\\F842\"}.fa-stamp:before{content:\"\\F5BF\"}.fa-star:before{content:\"\\F005\"}.fa-star-and-crescent:before{content:\"\\F699\"}.fa-star-half:before{content:\"\\F089\"}.fa-star-half-alt:before{content:\"\\F5C0\"}.fa-star-of-david:before{content:\"\\F69A\"}.fa-star-of-life:before{content:\"\\F621\"}.fa-staylinked:before{content:\"\\F3F5\"}.fa-steam:before{content:\"\\F1B6\"}.fa-steam-square:before{content:\"\\F1B7\"}.fa-steam-symbol:before{content:\"\\F3F6\"}.fa-step-backward:before{content:\"\\F048\"}.fa-step-forward:before{content:\"\\F051\"}.fa-stethoscope:before{content:\"\\F0F1\"}.fa-sticker-mule:before{content:\"\\F3F7\"}.fa-sticky-note:before{content:\"\\F249\"}.fa-stop:before{content:\"\\F04D\"}.fa-stop-circle:before{content:\"\\F28D\"}.fa-stopwatch:before{content:\"\\F2F2\"}.fa-stopwatch-20:before{content:\"\\F96F\"}.fa-store:before{content:\"\\F54E\"}.fa-store-alt:before{content:\"\\F54F\"}.fa-store-alt-slash:before{content:\"\\F970\"}.fa-store-slash:before{content:\"\\F971\"}.fa-strava:before{content:\"\\F428\"}.fa-stream:before{content:\"\\F550\"}.fa-street-view:before{content:\"\\F21D\"}.fa-strikethrough:before{content:\"\\F0CC\"}.fa-stripe:before{content:\"\\F429\"}.fa-stripe-s:before{content:\"\\F42A\"}.fa-stroopwafel:before{content:\"\\F551\"}.fa-studiovinari:before{content:\"\\F3F8\"}.fa-stumbleupon:before{content:\"\\F1A4\"}.fa-stumbleupon-circle:before{content:\"\\F1A3\"}.fa-subscript:before{content:\"\\F12C\"}.fa-subway:before{content:\"\\F239\"}.fa-suitcase:before{content:\"\\F0F2\"}.fa-suitcase-rolling:before{content:\"\\F5C1\"}.fa-sun:before{content:\"\\F185\"}.fa-superpowers:before{content:\"\\F2DD\"}.fa-superscript:before{content:\"\\F12B\"}.fa-supple:before{content:\"\\F3F9\"}.fa-surprise:before{content:\"\\F5C2\"}.fa-suse:before{content:\"\\F7D6\"}.fa-swatchbook:before{content:\"\\F5C3\"}.fa-swift:before{content:\"\\F8E1\"}.fa-swimmer:before{content:\"\\F5C4\"}.fa-swimming-pool:before{content:\"\\F5C5\"}.fa-symfony:before{content:\"\\F83D\"}.fa-synagogue:before{content:\"\\F69B\"}.fa-sync:before{content:\"\\F021\"}.fa-sync-alt:before{content:\"\\F2F1\"}.fa-syringe:before{content:\"\\F48E\"}.fa-table:before{content:\"\\F0CE\"}.fa-table-tennis:before{content:\"\\F45D\"}.fa-tablet:before{content:\"\\F10A\"}.fa-tablet-alt:before{content:\"\\F3FA\"}.fa-tablets:before{content:\"\\F490\"}.fa-tachometer-alt:before{content:\"\\F3FD\"}.fa-tag:before{content:\"\\F02B\"}.fa-tags:before{content:\"\\F02C\"}.fa-tape:before{content:\"\\F4DB\"}.fa-tasks:before{content:\"\\F0AE\"}.fa-taxi:before{content:\"\\F1BA\"}.fa-teamspeak:before{content:\"\\F4F9\"}.fa-teeth:before{content:\"\\F62E\"}.fa-teeth-open:before{content:\"\\F62F\"}.fa-telegram:before{content:\"\\F2C6\"}.fa-telegram-plane:before{content:\"\\F3FE\"}.fa-temperature-high:before{content:\"\\F769\"}.fa-temperature-low:before{content:\"\\F76B\"}.fa-tencent-weibo:before{content:\"\\F1D5\"}.fa-tenge:before{content:\"\\F7D7\"}.fa-terminal:before{content:\"\\F120\"}.fa-text-height:before{content:\"\\F034\"}.fa-text-width:before{content:\"\\F035\"}.fa-th:before{content:\"\\F00A\"}.fa-th-large:before{content:\"\\F009\"}.fa-th-list:before{content:\"\\F00B\"}.fa-the-red-yeti:before{content:\"\\F69D\"}.fa-theater-masks:before{content:\"\\F630\"}.fa-themeco:before{content:\"\\F5C6\"}.fa-themeisle:before{content:\"\\F2B2\"}.fa-thermometer:before{content:\"\\F491\"}.fa-thermometer-empty:before{content:\"\\F2CB\"}.fa-thermometer-full:before{content:\"\\F2C7\"}.fa-thermometer-half:before{content:\"\\F2C9\"}.fa-thermometer-quarter:before{content:\"\\F2CA\"}.fa-thermometer-three-quarters:before{content:\"\\F2C8\"}.fa-think-peaks:before{content:\"\\F731\"}.fa-thumbs-down:before{content:\"\\F165\"}.fa-thumbs-up:before{content:\"\\F164\"}.fa-thumbtack:before{content:\"\\F08D\"}.fa-ticket-alt:before{content:\"\\F3FF\"}.fa-tiktok:before{content:\"\\F97B\"}.fa-times:before{content:\"\\F00D\"}.fa-times-circle:before{content:\"\\F057\"}.fa-tint:before{content:\"\\F043\"}.fa-tint-slash:before{content:\"\\F5C7\"}.fa-tired:before{content:\"\\F5C8\"}.fa-toggle-off:before{content:\"\\F204\"}.fa-toggle-on:before{content:\"\\F205\"}.fa-toilet:before{content:\"\\F7D8\"}.fa-toilet-paper:before{content:\"\\F71E\"}.fa-toilet-paper-slash:before{content:\"\\F972\"}.fa-toolbox:before{content:\"\\F552\"}.fa-tools:before{content:\"\\F7D9\"}.fa-tooth:before{content:\"\\F5C9\"}.fa-torah:before{content:\"\\F6A0\"}.fa-torii-gate:before{content:\"\\F6A1\"}.fa-tractor:before{content:\"\\F722\"}.fa-trade-federation:before{content:\"\\F513\"}.fa-trademark:before{content:\"\\F25C\"}.fa-traffic-light:before{content:\"\\F637\"}.fa-trailer:before{content:\"\\F941\"}.fa-train:before{content:\"\\F238\"}.fa-tram:before{content:\"\\F7DA\"}.fa-transgender:before{content:\"\\F224\"}.fa-transgender-alt:before{content:\"\\F225\"}.fa-trash:before{content:\"\\F1F8\"}.fa-trash-alt:before{content:\"\\F2ED\"}.fa-trash-restore:before{content:\"\\F829\"}.fa-trash-restore-alt:before{content:\"\\F82A\"}.fa-tree:before{content:\"\\F1BB\"}.fa-trello:before{content:\"\\F181\"}.fa-tripadvisor:before{content:\"\\F262\"}.fa-trophy:before{content:\"\\F091\"}.fa-truck:before{content:\"\\F0D1\"}.fa-truck-loading:before{content:\"\\F4DE\"}.fa-truck-monster:before{content:\"\\F63B\"}.fa-truck-moving:before{content:\"\\F4DF\"}.fa-truck-pickup:before{content:\"\\F63C\"}.fa-tshirt:before{content:\"\\F553\"}.fa-tty:before{content:\"\\F1E4\"}.fa-tumblr:before{content:\"\\F173\"}.fa-tumblr-square:before{content:\"\\F174\"}.fa-tv:before{content:\"\\F26C\"}.fa-twitch:before{content:\"\\F1E8\"}.fa-twitter:before{content:\"\\F099\"}.fa-twitter-square:before{content:\"\\F081\"}.fa-typo3:before{content:\"\\F42B\"}.fa-uber:before{content:\"\\F402\"}.fa-ubuntu:before{content:\"\\F7DF\"}.fa-uikit:before{content:\"\\F403\"}.fa-umbraco:before{content:\"\\F8E8\"}.fa-umbrella:before{content:\"\\F0E9\"}.fa-umbrella-beach:before{content:\"\\F5CA\"}.fa-underline:before{content:\"\\F0CD\"}.fa-undo:before{content:\"\\F0E2\"}.fa-undo-alt:before{content:\"\\F2EA\"}.fa-uniregistry:before{content:\"\\F404\"}.fa-unity:before{content:\"\\F949\"}.fa-universal-access:before{content:\"\\F29A\"}.fa-university:before{content:\"\\F19C\"}.fa-unlink:before{content:\"\\F127\"}.fa-unlock:before{content:\"\\F09C\"}.fa-unlock-alt:before{content:\"\\F13E\"}.fa-unsplash:before{content:\"\\F97C\"}.fa-untappd:before{content:\"\\F405\"}.fa-upload:before{content:\"\\F093\"}.fa-ups:before{content:\"\\F7E0\"}.fa-usb:before{content:\"\\F287\"}.fa-user:before{content:\"\\F007\"}.fa-user-alt:before{content:\"\\F406\"}.fa-user-alt-slash:before{content:\"\\F4FA\"}.fa-user-astronaut:before{content:\"\\F4FB\"}.fa-user-check:before{content:\"\\F4FC\"}.fa-user-circle:before{content:\"\\F2BD\"}.fa-user-clock:before{content:\"\\F4FD\"}.fa-user-cog:before{content:\"\\F4FE\"}.fa-user-edit:before{content:\"\\F4FF\"}.fa-user-friends:before{content:\"\\F500\"}.fa-user-graduate:before{content:\"\\F501\"}.fa-user-injured:before{content:\"\\F728\"}.fa-user-lock:before{content:\"\\F502\"}.fa-user-md:before{content:\"\\F0F0\"}.fa-user-minus:before{content:\"\\F503\"}.fa-user-ninja:before{content:\"\\F504\"}.fa-user-nurse:before{content:\"\\F82F\"}.fa-user-plus:before{content:\"\\F234\"}.fa-user-secret:before{content:\"\\F21B\"}.fa-user-shield:before{content:\"\\F505\"}.fa-user-slash:before{content:\"\\F506\"}.fa-user-tag:before{content:\"\\F507\"}.fa-user-tie:before{content:\"\\F508\"}.fa-user-times:before{content:\"\\F235\"}.fa-users:before{content:\"\\F0C0\"}.fa-users-cog:before{content:\"\\F509\"}.fa-users-slash:before{content:\"\\F973\"}.fa-usps:before{content:\"\\F7E1\"}.fa-ussunnah:before{content:\"\\F407\"}.fa-utensil-spoon:before{content:\"\\F2E5\"}.fa-utensils:before{content:\"\\F2E7\"}.fa-vaadin:before{content:\"\\F408\"}.fa-vector-square:before{content:\"\\F5CB\"}.fa-venus:before{content:\"\\F221\"}.fa-venus-double:before{content:\"\\F226\"}.fa-venus-mars:before{content:\"\\F228\"}.fa-viacoin:before{content:\"\\F237\"}.fa-viadeo:before{content:\"\\F2A9\"}.fa-viadeo-square:before{content:\"\\F2AA\"}.fa-vial:before{content:\"\\F492\"}.fa-vials:before{content:\"\\F493\"}.fa-viber:before{content:\"\\F409\"}.fa-video:before{content:\"\\F03D\"}.fa-video-slash:before{content:\"\\F4E2\"}.fa-vihara:before{content:\"\\F6A7\"}.fa-vimeo:before{content:\"\\F40A\"}.fa-vimeo-square:before{content:\"\\F194\"}.fa-vimeo-v:before{content:\"\\F27D\"}.fa-vine:before{content:\"\\F1CA\"}.fa-virus:before{content:\"\\F974\"}.fa-virus-slash:before{content:\"\\F975\"}.fa-viruses:before{content:\"\\F976\"}.fa-vk:before{content:\"\\F189\"}.fa-vnv:before{content:\"\\F40B\"}.fa-voicemail:before{content:\"\\F897\"}.fa-volleyball-ball:before{content:\"\\F45F\"}.fa-volume-down:before{content:\"\\F027\"}.fa-volume-mute:before{content:\"\\F6A9\"}.fa-volume-off:before{content:\"\\F026\"}.fa-volume-up:before{content:\"\\F028\"}.fa-vote-yea:before{content:\"\\F772\"}.fa-vr-cardboard:before{content:\"\\F729\"}.fa-vuejs:before{content:\"\\F41F\"}.fa-walking:before{content:\"\\F554\"}.fa-wallet:before{content:\"\\F555\"}.fa-warehouse:before{content:\"\\F494\"}.fa-water:before{content:\"\\F773\"}.fa-wave-square:before{content:\"\\F83E\"}.fa-waze:before{content:\"\\F83F\"}.fa-weebly:before{content:\"\\F5CC\"}.fa-weibo:before{content:\"\\F18A\"}.fa-weight:before{content:\"\\F496\"}.fa-weight-hanging:before{content:\"\\F5CD\"}.fa-weixin:before{content:\"\\F1D7\"}.fa-whatsapp:before{content:\"\\F232\"}.fa-whatsapp-square:before{content:\"\\F40C\"}.fa-wheelchair:before{content:\"\\F193\"}.fa-whmcs:before{content:\"\\F40D\"}.fa-wifi:before{content:\"\\F1EB\"}.fa-wikipedia-w:before{content:\"\\F266\"}.fa-wind:before{content:\"\\F72E\"}.fa-window-close:before{content:\"\\F410\"}.fa-window-maximize:before{content:\"\\F2D0\"}.fa-window-minimize:before{content:\"\\F2D1\"}.fa-window-restore:before{content:\"\\F2D2\"}.fa-windows:before{content:\"\\F17A\"}.fa-wine-bottle:before{content:\"\\F72F\"}.fa-wine-glass:before{content:\"\\F4E3\"}.fa-wine-glass-alt:before{content:\"\\F5CE\"}.fa-wix:before{content:\"\\F5CF\"}.fa-wizards-of-the-coast:before{content:\"\\F730\"}.fa-wolf-pack-battalion:before{content:\"\\F514\"}.fa-won-sign:before{content:\"\\F159\"}.fa-wordpress:before{content:\"\\F19A\"}.fa-wordpress-simple:before{content:\"\\F411\"}.fa-wpbeginner:before{content:\"\\F297\"}.fa-wpexplorer:before{content:\"\\F2DE\"}.fa-wpforms:before{content:\"\\F298\"}.fa-wpressr:before{content:\"\\F3E4\"}.fa-wrench:before{content:\"\\F0AD\"}.fa-x-ray:before{content:\"\\F497\"}.fa-xbox:before{content:\"\\F412\"}.fa-xing:before{content:\"\\F168\"}.fa-xing-square:before{content:\"\\F169\"}.fa-y-combinator:before{content:\"\\F23B\"}.fa-yahoo:before{content:\"\\F19E\"}.fa-yammer:before{content:\"\\F840\"}.fa-yandex:before{content:\"\\F413\"}.fa-yandex-international:before{content:\"\\F414\"}.fa-yarn:before{content:\"\\F7E3\"}.fa-yelp:before{content:\"\\F1E9\"}.fa-yen-sign:before{content:\"\\F157\"}.fa-yin-yang:before{content:\"\\F6AD\"}.fa-yoast:before{content:\"\\F2B1\"}.fa-youtube:before{content:\"\\F167\"}.fa-youtube-square:before{content:\"\\F431\"}.fa-zhihu:before{content:\"\\F63F\"}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-family:Font Awesome\\ 5 Brands;font-style:normal;font-weight:400;font-display:block;src:url(" + escape(__webpack_require__(60)) + ");src:url(" + escape(__webpack_require__(60)) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(146)) + ") format(\"woff2\"),url(" + escape(__webpack_require__(145)) + ") format(\"woff\"),url(" + escape(__webpack_require__(144)) + ") format(\"truetype\"),url(" + escape(__webpack_require__(143)) + "#fontawesome) format(\"svg\")}.fab{font-family:Font Awesome\\ 5 Brands}@font-face{font-family:Font Awesome\\ 5 Free;font-style:normal;font-weight:400;font-display:block;src:url(" + escape(__webpack_require__(61)) + ");src:url(" + escape(__webpack_require__(61)) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(150)) + ") format(\"woff2\"),url(" + escape(__webpack_require__(149)) + ") format(\"woff\"),url(" + escape(__webpack_require__(148)) + ") format(\"truetype\"),url(" + escape(__webpack_require__(147)) + "#fontawesome) format(\"svg\")}.fab,.far{font-weight:400}@font-face{font-family:Font Awesome\\ 5 Free;font-style:normal;font-weight:900;font-display:block;src:url(" + escape(__webpack_require__(62)) + ");src:url(" + escape(__webpack_require__(62)) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(154)) + ") format(\"woff2\"),url(" + escape(__webpack_require__(153)) + ") format(\"woff\"),url(" + escape(__webpack_require__(152)) + ") format(\"truetype\"),url(" + escape(__webpack_require__(151)) + "#fontawesome) format(\"svg\")}.fa,.far,.fas{font-family:Font Awesome\\ 5 Free}.fa,.fas{font-weight:900}", ""]);

// exports


/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReCaptchaLoader_1 = __webpack_require__(134);
exports.load = ReCaptchaLoader_1.load;
exports.getInstance = ReCaptchaLoader_1.getInstance;
var ReCaptchaInstance_1 = __webpack_require__(59);
exports.ReCaptchaInstance = ReCaptchaInstance_1.ReCaptchaInstance;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReCaptchaInstance_1 = __webpack_require__(59);
var ELoadingState;
(function (ELoadingState) {
    ELoadingState[ELoadingState["NOT_LOADED"] = 0] = "NOT_LOADED";
    ELoadingState[ELoadingState["LOADING"] = 1] = "LOADING";
    ELoadingState[ELoadingState["LOADED"] = 2] = "LOADED";
})(ELoadingState || (ELoadingState = {}));
var ReCaptchaLoader = (function () {
    function ReCaptchaLoader() {
    }
    ReCaptchaLoader.load = function (siteKey, options) {
        if (options === void 0) { options = {}; }
        if (typeof document === 'undefined') {
            return Promise.reject(new Error('This is a library for the browser!'));
        }
        if (ReCaptchaLoader.getLoadingState() === ELoadingState.LOADED) {
            if (ReCaptchaLoader.instance.getSiteKey() === siteKey) {
                return Promise.resolve(ReCaptchaLoader.instance);
            }
            else {
                return Promise.reject(new Error('reCAPTCHA already loaded with different site key!'));
            }
        }
        if (ReCaptchaLoader.getLoadingState() === ELoadingState.LOADING) {
            if (siteKey !== ReCaptchaLoader.instanceSiteKey) {
                return Promise.reject(new Error('reCAPTCHA already loaded with different site key!'));
            }
            return new Promise(function (resolve, reject) {
                ReCaptchaLoader.successfulLoadingConsumers.push(function (instance) { return resolve(instance); });
                ReCaptchaLoader.errorLoadingRunnable.push(function (reason) { return reject(reason); });
            });
        }
        ReCaptchaLoader.instanceSiteKey = siteKey;
        ReCaptchaLoader.setLoadingState(ELoadingState.LOADING);
        var loader = new ReCaptchaLoader();
        return new Promise(function (resolve, reject) {
            loader.loadScript(siteKey, options.useRecaptchaNet || false, options.renderParameters ? options.renderParameters : {}, options.customUrl).then(function () {
                ReCaptchaLoader.setLoadingState(ELoadingState.LOADED);
                var widgetID = loader.doExplicitRender(grecaptcha, siteKey, options.explicitRenderParameters ? options.explicitRenderParameters : {});
                var instance = new ReCaptchaInstance_1.ReCaptchaInstance(siteKey, widgetID, grecaptcha);
                ReCaptchaLoader.successfulLoadingConsumers.forEach(function (v) { return v(instance); });
                ReCaptchaLoader.successfulLoadingConsumers = [];
                if (options.autoHideBadge) {
                    instance.hideBadge();
                }
                ReCaptchaLoader.instance = instance;
                resolve(instance);
            }).catch(function (error) {
                ReCaptchaLoader.errorLoadingRunnable.forEach(function (v) { return v(error); });
                ReCaptchaLoader.errorLoadingRunnable = [];
                reject(error);
            });
        });
    };
    ReCaptchaLoader.getInstance = function () {
        return ReCaptchaLoader.instance;
    };
    ReCaptchaLoader.setLoadingState = function (state) {
        ReCaptchaLoader.loadingState = state;
    };
    ReCaptchaLoader.getLoadingState = function () {
        if (ReCaptchaLoader.loadingState === null) {
            return ELoadingState.NOT_LOADED;
        }
        else {
            return ReCaptchaLoader.loadingState;
        }
    };
    ReCaptchaLoader.prototype.loadScript = function (siteKey, useRecaptchaNet, renderParameters, customUrl) {
        var _this = this;
        if (useRecaptchaNet === void 0) { useRecaptchaNet = false; }
        if (renderParameters === void 0) { renderParameters = {}; }
        if (customUrl === void 0) { customUrl = ''; }
        var scriptElement = document.createElement('script');
        scriptElement.setAttribute('recaptcha-v3-script', '');
        var scriptBase = 'https://www.google.com/recaptcha/api.js';
        if (useRecaptchaNet) {
            scriptBase = 'https://recaptcha.net/recaptcha/api.js';
        }
        if (customUrl) {
            scriptBase = customUrl;
        }
        if (renderParameters.render) {
            renderParameters.render = undefined;
        }
        var parametersQuery = this.buildQueryString(renderParameters);
        scriptElement.src = scriptBase + '?render=explicit' + parametersQuery;
        return new Promise(function (resolve, reject) {
            scriptElement.addEventListener('load', _this.waitForScriptToLoad(function () {
                resolve(scriptElement);
            }), false);
            scriptElement.onerror = function (error) {
                ReCaptchaLoader.setLoadingState(ELoadingState.NOT_LOADED);
                reject(error);
            };
            document.head.appendChild(scriptElement);
        });
    };
    ReCaptchaLoader.prototype.buildQueryString = function (parameters) {
        var parameterKeys = Object.keys(parameters);
        if (parameterKeys.length < 1) {
            return '';
        }
        return '&' + Object.keys(parameters)
            .filter(function (parameterKey) {
            return !!parameters[parameterKey];
        })
            .map(function (parameterKey) {
            return parameterKey + '=' + parameters[parameterKey];
        }).join('&');
    };
    ReCaptchaLoader.prototype.waitForScriptToLoad = function (callback) {
        var _this = this;
        return function () {
            if (window.grecaptcha === undefined) {
                setTimeout(function () {
                    _this.waitForScriptToLoad(callback);
                }, ReCaptchaLoader.SCRIPT_LOAD_DELAY);
            }
            else {
                window.grecaptcha.ready(function () {
                    callback();
                });
            }
        };
    };
    ReCaptchaLoader.prototype.doExplicitRender = function (grecaptcha, siteKey, parameters) {
        var augmentedParameters = {
            sitekey: siteKey,
            badge: parameters.badge,
            size: parameters.size,
            tabindex: parameters.tabindex
        };
        if (parameters.container) {
            return grecaptcha.render(parameters.container, augmentedParameters);
        }
        else {
            return grecaptcha.render(augmentedParameters);
        }
    };
    ReCaptchaLoader.loadingState = null;
    ReCaptchaLoader.instance = null;
    ReCaptchaLoader.instanceSiteKey = null;
    ReCaptchaLoader.successfulLoadingConsumers = [];
    ReCaptchaLoader.errorLoadingRunnable = [];
    ReCaptchaLoader.SCRIPT_LOAD_DELAY = 25;
    return ReCaptchaLoader;
}());
exports.load = ReCaptchaLoader.load;
exports.getInstance = ReCaptchaLoader.getInstance;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(136);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 136 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 137 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card card-success direct-chat direct-chat-success shadow"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "direct-chat-messages",
    attrs: {
      "id": "messageBody"
    }
  }, _vm._l((_vm.messages), function(message) {
    return _c('div', {
      staticClass: "direct-chat-msg",
      class: {
        'right': message.isMine
      }
    }, [_c('div', {
      staticClass: "direct-chat-text"
    }, [_c('div', {
      domProps: {
        "innerHTML": _vm._s(message.text)
      }
    }, [_vm._v("\n                            " + _vm._s(message.text) + "\n                        ")]), _vm._v(" "), (message.original.type === 'actions') ? _c('div', {
      staticStyle: {
        "display": "flex",
        "flex-flow": "column",
        "padding": "20px"
      }
    }, _vm._l((message.original.actions), function(action) {
      return _c('div', {
        staticClass: "btn btn-primary",
        staticStyle: {
          "margin-bottom": "10px"
        },
        on: {
          "click": function($event) {
            return _vm.performAction(action.value, message.original, action.captchaVerify)
          }
        }
      }, [(action.image_url) ? _c('img', {
        staticStyle: {
          "max-height": "25px"
        },
        attrs: {
          "src": action.image_url
        }
      }) : _vm._e(), _vm._v("\n                                " + _vm._s(action.text) + "\n                            ")])
    }), 0) : _vm._e(), _vm._v(" "), (message.attachment.type === 'image') ? _c('img', {
      staticClass: "ChatLog__message__image",
      attrs: {
        "src": message.attachment.url
      }
    }) : _vm._e(), _vm._v(" "), (message.attachment.type === 'video') ? _c('video', {
      staticClass: "ChatLog__message__image",
      attrs: {
        "controls": "",
        "height": "160",
        "autoplay": ""
      }
    }, [_c('source', {
      attrs: {
        "src": message.attachment.url,
        "type": "video/mp4"
      }
    })]) : _vm._e(), _vm._v(" "), (message.attachment.type === 'audio') ? _c('audio', {
      staticClass: "ChatLog__message__image",
      attrs: {
        "controls": "",
        "autoplay": ""
      }
    }, [_c('source', {
      attrs: {
        "src": message.attachment.url,
        "type": "audio/mp3"
      }
    })]) : _vm._e()])])
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "ChatAttachment",
    attrs: {
      "type": "file",
      "hidden": "",
      "id": "attachment",
      "value": "Attachment"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newMessage),
      expression: "newMessage"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "message",
      "placeholder": "Type Message ..."
    },
    domProps: {
      "value": (_vm.newMessage)
    },
    on: {
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.sendMessage($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newMessage = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-append"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "text"
    },
    on: {
      "click": function($event) {
        return _vm.sendMessage()
      }
    }
  }, [_vm._v("Send")])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("RDB® BOT")])])
}]}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(140)("17e5f50a", content, true, {});

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(141)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 141 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TinkerComponent__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TinkerComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_TinkerComponent__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "TinkerComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__components_TinkerComponent___default.a; });



/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "778b1f251bea7412048da95b87bf816f.svg";

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4c1da237bdae0773309df93b2cd48e09.ttf";

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5734d789b25228cbafc64a58ae971aca.woff";

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "91a23e8bf2b4b84c39311cb5eb23aaa0.woff2";

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "66578cdbb6dc01f527a53971051b3e85.svg";

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "260be4f29c0b2ce47480afb23f38f237.ttf";

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d44ad00c44e46fd29f6126fa7d888cde.woff";

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5c674c9216c06ede2f618aa58ae71116.woff2";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "486853107489520b3265b19b191626f8.svg";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c65d154888aa166982dac3e72e7380ec.ttf";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f3a7d3b5880544a91e9a7e6f8f35d4d2.woff";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "412a43d6840addd683665ec12c30f810.woff2";

/***/ })
/******/ ]);
});