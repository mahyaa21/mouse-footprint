/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 32:0-14 */
/***/ ((module) => {

eval("let number = 0;\nlet container = document.getElementById(\"container\");\nlet newCircle;\n\nfunction myFunction(event) {\n    number++;\n    var x = event.pageX;     // Get the horizontal coordinate\n    var y = event.pageY;     // Get the vertical coordinate\n    newCircle = document.createElement(\"div\");\n    newCircle.setAttribute(\"id\", `node${number}`);\n    var node = document.createTextNode(number);\n    newCircle.appendChild(node);\n    let newStyle = (number % 5 === 0) ? \"orange-circle\" : \"circle\";\n    newCircle.classList.add(newStyle);\n    newCircle.style.cssText = `top:${y}px;left:${x}px;`\n    container.appendChild(newCircle);\n}\ncontainer.addEventListener(\"click\",myFunction);\nwindow.addEventListener(\"resize\", displayWindowSize);\nfunction displayWindowSize() {\n    let w = document.documentElement.clientWidth;\n    let h = document.documentElement.clientHeight;\n    let newWidth, newHeight;\n    for (let i = 1; i <= number; i++) {\n        let node = document.getElementById(`node${i}`);\n        newWidth = Math.floor(Math.random() * (w - 100));\n        newHeight = Math.floor(Math.random() * (h - 100));\n        node.style.top = `${newHeight}px`;\n        node.style.left = `${newWidth}px`;\n    }\n}\nmodule.exports = {\n    myFunction: myFunction,\n};\n\n//# sourceURL=webpack://Mouse-FingerPrint/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/main.js");
/******/ })()
;