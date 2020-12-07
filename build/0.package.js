exports.ids = [0];
exports.modules = {

/***/ "./client/components/Chart/Chart.js":
/*!******************************************!*\
  !*** ./client/components/Chart/Chart.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartkick */ \"react-chartkick\");\n/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartkick__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/constants */ \"./client/actions/constants.js\");\n\n\n\n\nvar Chart = (_ref) => {\n  var {\n    results\n  } = _ref;\n  var statistics = [];\n\n  for (var i = 0; i < results.length; i++) {\n    var id = results[i].id && results[i].id.toString();\n    var item = {\n      [id]: results[i].vote_count\n    };\n    statistics.push(item);\n  }\n\n  var graph_item = JSON.stringify(statistics);\n  graph_item = graph_item.replace(/[{}]/g, '');\n  graph_item = graph_item.replace('[', '{');\n  graph_item = graph_item.replace(']', '}');\n  var data = JSON.parse(graph_item);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartkick__WEBPACK_IMPORTED_MODULE_1__[\"LineChart\"], {\n    data: data\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\n//# sourceURL=webpack:///./client/components/Chart/Chart.js?");

/***/ })

};;