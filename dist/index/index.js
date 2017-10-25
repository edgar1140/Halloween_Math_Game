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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

function checkAddition() {
    var num1 = Number($('#number1').val());
    var num2 = Number($('#number2').val());
    number1 = Math.floor(Math.random() * 10 + 1);
    number2 = Math.floor(Math.random() * 10 + 1);
    var answer = Number($('#answer').val());

    $('.form-group')
        .removeClass('has-error')
        .removeClass('has-success');

    $('#checkAnswer')
        .removeClass('btn-success')
        .removeClass('btn-danger')
        .removeClass('btn-primary');
    '<button onclick="document.location.reload()">' +
        ', Great Job! </br> Restart </button>';

    if (answer == num1 + num2) {
        number1 = Math.floor(Math.random() * 10 + 1);
        number2 = Math.floor(Math.random() * 10 + 1);
        $('.form-group').addClass('has-success');
        $('#checkAnswer').addClass('btn-success');
    } else {
        number1 = Math.floor(Math.random() * 10 + 1);
        number2 = Math.floor(Math.random() * 10 + 1);
        $('.form-group').addClass('has-error');
        $('#checkAnswer').addClass('btn-danger');
    }
}


/***/ })
/******/ ]);