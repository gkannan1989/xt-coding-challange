exports.ids = [1];
exports.modules = {

/***/ "./client/components/NewsFeed/NewsFeed.js":
/*!************************************************!*\
  !*** ./client/components/NewsFeed/NewsFeed.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/constants */ \"./client/actions/constants.js\");\n\n\n\nvar getDomain = url => {\n  if (url != undefined) return url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];\n};\n\nvar renderItem = (_ref) => {\n  var {\n    item,\n    index,\n    renderVoteCount,\n    setUpVoteCount,\n    hideNewsFeed\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    width: \"100%\",\n    height: \"30\",\n    border: \"0\",\n    bgcolor: index % 2 == 0 ? '#FFFFFF' : '#F2F2F2',\n    className: \"desktop-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    valign: \"middle\",\n    align: \"center\",\n    className: \"td-header-cloumn-width\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"comments-span\"\n  }, item.comments)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    valign: \"middle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"news-vote-count\"\n  }, renderVoteCount(item)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"news-arrow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\",\n    onClick: () => setUpVoteCount(item)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _actions_constants__WEBPACK_IMPORTED_MODULE_1__[\"UP_ARROW_ICON\"],\n    className: \"up-arrow-icon\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"news-details-span\"\n  }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: item.url,\n    className: \"news-url-span\",\n    target: \"_blank\"\n  }, \"(\", () => getDomain(item.url), \")\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"news-url-span\"\n  }, \"by\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"news-author-span\"\n  }, item.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"news-time-span\"\n  }, item.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"news-left-bracket\"\n  }, \"[\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\",\n    className: \"news-hide-label\",\n    onClick: () => hideNewsFeed(item)\n  }, \"hide\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"news-right-bracket\"\n  }, \"]\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    width: \"100%\",\n    border: \"0\",\n    bgcolor: index % 2 == 0 ? '#FFFFFF' : '#F2F2F2',\n    className: \"mobile-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    valign: \"middle\",\n    align: \"center\",\n    className: \"td-mobile-cloumn-width\"\n  }, () => renderVoteCount(item)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    valign: \"middle\",\n    align: \"center\",\n    className: \"td-mobile-cloumn-width\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\",\n    onClick: () => setUpVoteCount(item)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _actions_constants__WEBPACK_IMPORTED_MODULE_1__[\"UP_ARROW_ICON\"],\n    className: \"mobile-up-arrow-icon\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    valign: \"middle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mobile-news-details-span\"\n  }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: item.url,\n    className: \"mobile-news-url-span\",\n    target: \"_blank\"\n  }, \"(\", () => getDomain(item.url), \")\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mobile-news-footer-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mobile-news-by-span\"\n  }, \"by\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mobile-news-author-span\"\n  }, item.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mobile-news-time-span\"\n  }, item.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mobile-news-left-bracket\"\n  }, \"[\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\",\n    className: \"mobile-news-hide-label\",\n    onClick: () => hideNewsFeed(item)\n  }, \"hide\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mobile-news-right-bracket\"\n  }, \"]\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mobile-news-comments\"\n  }, item.comments, \" comments\"))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderItem);\n\n//# sourceURL=webpack:///./client/components/NewsFeed/NewsFeed.js?");

/***/ })

};;