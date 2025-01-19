/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("var _createDOM = function createDOM(node) {\n  if (typeof node === \"string\") {\n    return document.createTextNode(node);\n  }\n  var element = document.createElement(node.tag);\n  node.children.map(_createDOM).forEach(element.appendChild.bind(element));\n  return element;\n};\nvar vdom = {\n  tag: \"p\",\n  props: {},\n  children: [{\n    tag: \"h1\",\n    props: {},\n    children: [\"React 만들기\"]\n  }, {\n    tag: \"ul\",\n    props: {},\n    children: [{\n      tag: \"li\",\n      props: {},\n      children: [\"First item\"]\n    }, {\n      tag: \"li\",\n      props: {},\n      children: [\"Second item\"]\n    }, {\n      tag: \"li\",\n      props: {},\n      children: [\"Third item\"]\n    }]\n  }]\n};\ndocument.querySelector(\"#root\").appendChild(_createDOM(vdom));\n\n//# sourceURL=webpack://fast-campus-cra/./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"]();
/******/ 	
/******/ })()
;