/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("let number = 0;\nlet container = document.getElementById(\"container\");\nlet newCircle;\nfunction myFunction(event) {\n    number++;\n    var x = event.pageX;     // Get the horizontal coordinate\n    var y = event.pageY;     // Get the vertical coordinate\n    newCircle = document.createElement(\"div\");\n    newCircle.setAttribute(\"id\", `node${number}`);\n    var node = document.createTextNode(number);\n    newCircle.appendChild(node);\n    let newStyle = (number % 5 === 0) ? \"orange-circle\" : \"circle\";\n    newCircle.classList.add(newStyle);\n    newCircle.style.cssText = `top:${y}px;left:${x}px;`\n    container.appendChild(newCircle);\n}\n\nwindow.addEventListener(\"resize\", displayWindowSize);\nfunction displayWindowSize() {\n    let w = document.documentElement.clientWidth;\n    let h = document.documentElement.clientHeight;\n    let newWidth, newHeight;\n    for (let i = 1; i <= number; i++) {\n        let node = document.getElementById(`node${i}`);\n        newWidth = Math.floor(Math.random() * (w - 100));\n        newHeight = Math.floor(Math.random() * (h - 100));\n        node.style.top = `${newHeight}px`;\n        node.style.left = `${newWidth}px`;\n    }\n}\n\n//# sourceURL=webpack://Mouse-FingerPrint/./src/js/main.js?");
/******/ })()
;