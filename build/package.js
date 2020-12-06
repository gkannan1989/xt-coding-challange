/** *** */ (function (modules) {
  // webpackBootstrap
  /** *** */ // The module cache
  /** *** */ const installedModules = {}; // The require function
  /** *** */
  /** *** */ /** *** */ function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ // Check if module is in cache
    /** *** */ if (installedModules[moduleId]) {
      /** *** */ return installedModules[moduleId].exports;
      /** *** */
    } // Create a new module (and put it into the cache)
    /** *** */ /** *** */ const module = (installedModules[moduleId] = {
      /** *** */ i: moduleId,
      /** *** */ l: false,
      /** *** */ exports: {},
      /** *** */
    }); // Execute the module function
    /** *** */
    /** *** */ /** *** */ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__,
    ); // Flag the module as loaded
    /** *** */
    /** *** */ /** *** */ module.l = true; // Return the exports of the module
    /** *** */
    /** *** */ /** *** */ return module.exports;
    /** *** */
  } // expose the modules object (__webpack_modules__)
  /** *** */
  /** *** */
  /** *** */ /** *** */ __webpack_require__.m = modules; // expose the module cache
  /** *** */
  /** *** */ /** *** */ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /** *** */
  /** *** */ /** *** */ __webpack_require__.d = function (
    exports,
    name,
    getter,
  ) {
    /** *** */ if (!__webpack_require__.o(exports, name)) {
      /** *** */ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /** *** */
    }
    /** *** */
  }; // define __esModule on exports
  /** *** */
  /** *** */ /** *** */ __webpack_require__.r = function (exports) {
    /** *** */ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** *** */ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /** *** */
    }
    /** *** */ Object.defineProperty(exports, '__esModule', { value: true });
    /** *** */
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /** *** */
  /** *** */ /** *** */ /** *** */ /** *** */ /** *** */ /** *** */ __webpack_require__.t = function (
    value,
    mode,
  ) {
    /** *** */ if (mode & 1) value = __webpack_require__(value);
    /** *** */ if (mode & 8) return value;
    /** *** */ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /** *** */ const ns = Object.create(null);
    /** *** */ __webpack_require__.r(ns);
    /** *** */ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value,
    });
    /** *** */ if (mode & 2 && typeof value !== 'string')
      for (const key in value)
        __webpack_require__.d(ns, key, (key => value[key]).bind(null, key));
    /** *** */ return ns;
    /** *** */
  }; // getDefaultExport function for compatibility with non-harmony modules
  /** *** */
  /** *** */ /** *** */ __webpack_require__.n = function (module) {
    /** *** */ const getter =
      module && module.__esModule
        ? /** *** */ function getDefault() {
            return module.default;
          }
        : /** *** */ function getModuleExports() {
            return module;
          };
    /** *** */ __webpack_require__.d(getter, 'a', getter);
    /** *** */ return getter;
    /** *** */
  }; // Object.prototype.hasOwnProperty.call
  /** *** */
  /** *** */ /** *** */ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /** *** */
  /** *** */ /** *** */ __webpack_require__.p = '/build'; // Load entry module and return exports
  /** *** */
  /** *** */
  /** *** */ /** *** */ return __webpack_require__(
    (__webpack_require__.s = './server/serve.js'),
  );
  /** *** */
})(
  /** ********************************************************************* */
  /** *** */ {
    /***/ './client/App.js':
      /*! ***********************!*\
  !*** ./client/App.js ***!
  \********************** */
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_usePersist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/usePersist */ "./client/store/usePersist.js");\n/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/context */ "./client/store/context.js");\n/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducer */ "./client/store/reducer.js");\n/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/config */ "./client/routes/config.js");\n\n\n\n\n\n\n\n\nfunction App() {\n  var globalStore = Object(_store_usePersist__WEBPACK_IMPORTED_MODULE_3__["usePersistedContext"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_4__["default"]), \'state\');\n  var [state, dispatch] = Object(_store_usePersist__WEBPACK_IMPORTED_MODULE_3__["usePersistedReducer"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_store_reducer__WEBPACK_IMPORTED_MODULE_5__["default"], globalStore), \'state\');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_store_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {\n    value: {\n      state,\n      dispatch\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, _routes_config__WEBPACK_IMPORTED_MODULE_6__["default"].map((route, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    key: i\n  }, route)))));\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (App);\n\n//# sourceURL=webpack:///./client/App.js?',
        );

        /***/
      },

    /***/ './client/actions/constants.js':
      /*! *************************************!*\
  !*** ./client/actions/constants.js ***!
  \************************************ */
      /*! exports provided: API_URL, FETCH_NEWS_FEED, CLEAN_FEED, SET_UPVOTE_COUNT, HIDE_NEWS_FEED, NEWS_FEED_SHOW, NEWS_FEED_HIDE, NEWS_STORAGE_KEY, UP_ARROW_ICON */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWS_FEED", function() { return FETCH_NEWS_FEED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FEED", function() { return CLEAN_FEED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_UPVOTE_COUNT", function() { return SET_UPVOTE_COUNT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_NEWS_FEED", function() { return HIDE_NEWS_FEED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWS_FEED_SHOW", function() { return NEWS_FEED_SHOW; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWS_FEED_HIDE", function() { return NEWS_FEED_HIDE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWS_STORAGE_KEY", function() { return NEWS_STORAGE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP_ARROW_ICON", function() { return UP_ARROW_ICON; });\nvar API_URL = \'https://hn.algolia.com/api/v1/items/\';\nvar FETCH_NEWS_FEED = \'FETCH_NEWS_FEED\';\nvar CLEAN_FEED = \'CLEAN_FEED\';\nvar SET_UPVOTE_COUNT = \'SET_UPVOTE_COUNT\';\nvar HIDE_NEWS_FEED = \'HIDE_NEWS_FEED\';\nvar NEWS_FEED_SHOW = 0;\nvar NEWS_FEED_HIDE = 1;\nvar NEWS_STORAGE_KEY = \'news_feed\';\nvar UP_ARROW_ICON = \'https://assets.hackbotone.com/images/icons/up_arrow.png\';\n\n//# sourceURL=webpack:///./client/actions/constants.js?',
        );

        /***/
      },

    /***/ './client/actions/index.js':
      /*! *********************************!*\
  !*** ./client/actions/index.js ***!
  \******************************** */
      /*! exports provided: modifyNewsFeed */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyNewsFeed", function() { return modifyNewsFeed; });\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar modifyNewsFeed = data => {\n  var results = JSON.parse(JSON.stringify(data));\n  var feeds = [];\n  var {\n    title,\n    id,\n    author,\n    url,\n    created_at_i,\n    points,\n    children\n  } = results;\n\n  if (title != null) {\n    var date = new Date(created_at_i * 1000);\n    var posted_time = "".concat(date.getMonth(), "/").concat(date.getDay(), "/").concat(date.getFullYear());\n    var news_results = {\n      id,\n      title,\n      author,\n      time: posted_time,\n      url,\n      vote_count: points,\n      comments: children.length\n    };\n    feeds.push(news_results);\n  }\n\n  return feeds;\n};\n\n//# sourceURL=webpack:///./client/actions/index.js?',
        );

        /***/
      },

    /***/ './client/components/Chart/Chart.js':
      /*! ******************************************!*\
  !*** ./client/components/Chart/Chart.js ***!
  \***************************************** */
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartkick */ "react-chartkick");\n/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartkick__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/constants */ "./client/actions/constants.js");\n\n\n\n\nvar Chart = (_ref) => {\n  var {\n    results\n  } = _ref;\n  var statistics = [];\n\n  for (var i = 0; i < results.length; i++) {\n    var id = results[i].id && results[i].id.toString();\n    var item = {\n      [id]: results[i].vote_count\n    };\n    statistics.push(item);\n  }\n\n  var graph_item = JSON.stringify(statistics);\n  graph_item = graph_item.replace(/[{}]/g, \'\');\n  graph_item = graph_item.replace(\'[\', \'{\');\n  graph_item = graph_item.replace(\']\', \'}\');\n  var data = JSON.parse(graph_item);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartkick__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {\n    data: data\n  });\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (Chart);\n\n//# sourceURL=webpack:///./client/components/Chart/Chart.js?',
        );

        /***/
      },

    /***/ './client/components/Home.js':
      /*! ***********************************!*\
  !*** ./client/components/Home.js ***!
  \********************************** */
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./client/store/context.js");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.css */ "./client/css/index.css");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./client/actions/index.js");\n/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/constants */ "./client/actions/constants.js");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js */ "chart.js");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flatlist-react */ "flatlist-react");\n/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flatlist_react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Chart_Chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Chart/Chart */ "./client/components/Chart/Chart.js");\n/* harmony import */ var _components_NewsFeedHeader_NewsFeedHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/NewsFeedHeader/NewsFeedHeader */ "./client/components/NewsFeedHeader/NewsFeedHeader.js");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = () => {\n  var [startPage, setStartPage] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1);\n  var [endPage, setEndPage] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(31);\n  var {\n    state,\n    dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_3__["default"]);\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var i;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              i = startPage;\n\n            case 1:\n              if (!(i < endPage)) {\n                _context.next = 7;\n                break;\n              }\n\n              _context.next = 4;\n              return fetch(_actions_constants__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + i).then(response => response.json()).then(data => {\n                dispatch({\n                  type: _actions_constants__WEBPACK_IMPORTED_MODULE_7__["FETCH_NEWS_FEED"],\n                  payload: Object(_actions__WEBPACK_IMPORTED_MODULE_6__["modifyNewsFeed"])(data)\n                });\n              });\n\n            case 4:\n              i++;\n              _context.next = 1;\n              break;\n\n            case 7:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {\n    fetchData();\n  }, []);\n\n  var getDomain = url => {\n    if (url != undefined) return url.replace(\'http://\', \'\').replace(\'https://\', \'\').split(/[/?#]/)[0];\n  };\n\n  var setUpVoteCount = item => {\n    dispatch({\n      type: _actions_constants__WEBPACK_IMPORTED_MODULE_7__["SET_UPVOTE_COUNT"],\n      payload: item.id\n    });\n  };\n\n  var renderVoteCount = item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n    className: \'vote-span\'\n  }, item.vote_count);\n\n  var hideNewsFeed = item => dispatch({\n    type: _actions_constants__WEBPACK_IMPORTED_MODULE_7__["HIDE_NEWS_FEED"],\n    payload: item.id\n  });\n\n  var renderItem = (item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {\n      width: "100%",\n      height: "30",\n      border: "0",\n      bgcolor: index % 2 == 0 ? \'#FFFFFF\' : \'#F2F2F2\',\n      className: \'desktop-table\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {\n      valign: "middle",\n      align: "center",\n      className: \'td-header-cloumn-width\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'comments-span\'\n    }, item.comments)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {\n      valign: "middle"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'news-vote-count\'\n    }, renderVoteCount(item)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'news-arrow\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {\n      href: "#",\n      onClick: () => setUpVoteCount(item)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {\n      src: _actions_constants__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW_ICON"],\n      className: \'up-arrow-icon\'\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'news-details-span\'\n    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {\n      href: item.url,\n      className: \'news-url-span\',\n      target: "_blank"\n    }, "(", () => getDomain(item.url), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'news-url-span\'\n    }, "by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'news-author-span\'\n    }, item.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'news-time-span\'\n    }, item.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'news-left-bracket\'\n    }, "["), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {\n      href: "#",\n      className: \'news-hide-label\',\n      onClick: () => hideNewsFeed(item)\n    }, "hide"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'news-right-bracket\'\n    }, "]")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {\n      width: "100%",\n      border: "0",\n      bgcolor: index % 2 == 0 ? \'#FFFFFF\' : \'#F2F2F2\',\n      className: \'mobile-table\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {\n      valign: "middle",\n      align: "center",\n      className: \'td-mobile-cloumn-width\'\n    }, () => renderVoteCount(item)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {\n      valign: "middle",\n      align: "center",\n      className: \'td-mobile-cloumn-width\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {\n      href: "#",\n      onClick: () => setUpVoteCount(item)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {\n      src: _actions_constants__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW_ICON"],\n      className: \'mobile-up-arrow-icon\'\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {\n      valign: "middle"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'mobile-news-details-span\'\n    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {\n      href: item.url,\n      className: \'mobile-news-url-span\',\n      target: "_blank"\n    }, "(", () => getDomain(item.url), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n      className: \'mobile-news-footer-container\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'mobile-news-by-span\'\n    }, "by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'mobile-news-author-span\'\n    }, item.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'mobile-news-time-span\'\n    }, item.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'mobile-news-left-bracket\'\n    }, "["), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {\n      href: "#",\n      className: \'mobile-news-hide-label\',\n      onClick: () => hideNewsFeed(item)\n    }, "hide"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'mobile-news-right-bracket\'\n    }, "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {\n      className: \'mobile-news-comments\'\n    }, item.comments, " comments"))))));\n  };\n\n  var previousPage = () => {\n    dispatch({\n      type: _actions_constants__WEBPACK_IMPORTED_MODULE_7__["CLEAN_FEED"]\n    });\n    setStartPage(startPage > 31 ? startPage - 30 : 1);\n    setEndPage(endPage > 61 ? endPage - 30 : 31);\n    fetchData();\n  };\n\n  var nextPage = () => {\n    dispatch({\n      type: _actions_constants__WEBPACK_IMPORTED_MODULE_7__["CLEAN_FEED"]\n    });\n    setStartPage(startPage + 30);\n    setEndPage(endPage + 30);\n    fetchData();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: \'parent-div-container\'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: \'news-feed-container\'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NewsFeedHeader_NewsFeedHeader__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, state.news.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(flatlist_react__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    list: state.news,\n    renderWhenEmpty: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "In progress!"),\n    renderItem: renderItem,\n    extraData: state,\n    showsVerticalScrollIndicator: false,\n    showsHorizontalScrollIndicator: false\n  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: \'pagination-container\'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: \'pagination-btn-container\'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {\n    href: "#",\n    className: \'prev-btn-label\',\n    onClick: () => previousPage()\n  }, "Previous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: \'btn-separator-div\'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {\n    href: "#",\n    className: \'next-btn-label\',\n    onClick: () => nextPage()\n  }, "Next"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: \'news-feed-bottom-div\'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: \'news-feed-line-chart-container\'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {\n    className: \'line-chart-votes-label\'\n  }, "Votes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Chart_Chart__WEBPACK_IMPORTED_MODULE_10__["default"], {\n    results: state.news\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: \'line-chart-id-div\'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {\n    className: \'line-chart-id-label\'\n  }, "ID")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: \'news-feed-bottom-div\'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (Home);\n\n//# sourceURL=webpack:///./client/components/Home.js?',
        );

        /***/
      },

    /***/ './client/components/NewsFeedHeader/NewsFeedHeader.js':
      /*! ************************************************************!*\
  !*** ./client/components/NewsFeedHeader/NewsFeedHeader.js ***!
  \*********************************************************** */
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NewsFeedHeader = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n  className: "news-feed-header"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {\n  cellPadding: "0",\n  cellSpacing: "0",\n  width: "100%",\n  border: "0",\n  className: "desktop-table"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n  valign: "middle",\n  align: "center",\n  className: "td-header-cloumn-width"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n  className: "header-label"\n}, "Top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n  valign: "middle",\n  align: "center",\n  className: "td-header-cloumn-width"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n  className: "header-label"\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n  valign: "middle",\n  align: "center",\n  className: "td-header-cloumn-width"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n  className: "header-label"\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n  valign: "middle"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n  className: "header-label"\n})))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {\n  cellPadding: "0",\n  cellSpacing: "0",\n  width: "100%",\n  border: "0",\n  className: "mobile-table"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n  valign: "middle",\n  align: "center",\n  className: "td-mobile-header-cloumn-width"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n  className: "mobile-header-label"\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n  valign: "middle",\n  align: "center",\n  className: "td-mobile-header-cloumn-width"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n  className: "mobile-header-label"\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n  valign: "middle"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n  className: "mobile-header-label"\n})))));\n\n/* harmony default export */ __webpack_exports__["default"] = (NewsFeedHeader);\n\n//# sourceURL=webpack:///./client/components/NewsFeedHeader/NewsFeedHeader.js?',
        );

        /***/
      },

    /***/ './client/css/index.css':
      /*! ******************************!*\
  !*** ./client/css/index.css ***!
  \***************************** */
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          '// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, "body{\\n    margin: 0;\\n    font-family:Verdana, Geneva, sans-serif;\\n}\\n.parent-div-container {\\n    width: 100%;\\n    height: auto;\\n    display: grid;\\n    grid-template-columns: 5% 90% 5%;\\n}\\n.news-feed-container {\\n    width: 100%;\\n    height: auto;\\n    display: flex;\\n    flex-direction: column;\\n}\\n.news-feed-header {\\n    width: 100%;\\n    height: 1.5em;\\n    justify-content: center;\\n    background-color: #ff6600;\\n}\\n.desktop-table {\\n    display: block;\\n}\\n.mobile-table {\\n    display: none;\\n}\\n.header-label {\\n    font-size: 0.7rem;\\n    color: white;\\n    font-weight: bold;\\n}\\n.td-cloumn-width {\\n    width: 4.5em;\\n    height: 1.5em;\\n}\\n.td-header-cloumn-width {\\n    width: 4.8em;\\n}\\n.comments-span {\\n    font-size: 0.8rem;\\n    color: black;\\n    font-weight: 700;\\n}\\n.vote-span {\\n    font-size: 0.8rem;\\n    color: black;\\n    font-weight: 700;\\n}\\n.news-details-span {\\n    font-size: 0.9rem;\\n    color: black;\\n}\\n.up-arrow-icon {\\n    width: 0.5em;\\n    height: 0.5em;\\n}\\n.news-url-span {\\n    font-size: 0.65rem;\\n    color: #7a7979;\\n    margin-left: 1em;\\n    text-decoration: none;\\n}\\n.news-url-span:hover {\\n    font-size: 0.65rem;\\n    color: #7a7979;\\n    margin-left: 1em;\\n    text-decoration: underline;\\n}\\n.news-left-bracket {\\n    font-size: 0.65rem;\\n    color: #7a7979;\\n    margin-left: 1em;\\n}\\n.news-hide-label {\\n    font-size: 0.65rem;\\n    color: #000000;\\n    text-decoration: none;\\n    margin-left: 0.5em;\\n}\\n.news-right-bracket {\\n    font-size: 0.65rem;\\n    color: #7a7979;\\n    margin-left: 0.5em;\\n}\\n.news-author-span {\\n    font-size: 0.65rem;\\n    color: #000000;\\n    margin-left: 1em;\\n}\\n.news-time-span {\\n    font-size: 0.65rem;\\n    color: #7a7979;\\n    margin-left: 1em;\\n}\\n.news-feed-bottom-div {\\n    width: 100%;\\n    height: 0.3em;\\n    background-color: #ff6600;\\n}\\n.news-feed-line-chart-container {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    margin-top: 1em;\\n}\\n.line-chart-votes-label {\\n    font-size: 1.2rem;\\n    color: #000000;\\n    font-weight: bold;\\n    transform: rotate(-90deg);\\n}\\n.line-chart-id-div {\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.line-chart-id-label {\\n    font-size: 1.2rem;\\n    color: #000000;\\n    font-weight: bold;\\n}\\n.news-vote-count, .news-arrow {\\n    margin-right: 10px;\\n}\\n.pagination-container {\\n    width: 100%;\\n    height: 2.5em;\\n    display: grid;\\n    grid-template-columns: 80% 20%;\\n}\\n.pagination-btn-container {\\n    width: 95%;\\n    height: 2.5em;\\n    display: flex;\\n    justify-content: flex-end;\\n    align-items: center;\\n}\\n.prev-btn-label {\\n    font-size: 0.8rem;\\n    color: #ff6600;\\n    font-weight: bold;\\n    margin-right: 0.5em;\\n    text-decoration: none;\\n}\\n.next-btn-label {\\n    font-size: 0.8rem;\\n    color: #ff6600;\\n    font-weight: bold;\\n    margin-left: 0.5em;\\n    text-decoration: none;\\n}\\n.btn-separator-div {\\n    width: 0.15em;\\n    height: 1em;\\n    background-color: #ff6600;\\n}\\n@media only screen and (max-width: 1000px) {\\n    .desktop-table {\\n        display: none;\\n    }\\n    .parent-div-container {\\n        width: 100%;\\n        height: auto;\\n        display: grid;\\n        grid-template-columns: 100%;\\n    }\\n    .mobile-table {\\n        display: block;\\n    }\\n    .td-mobile-header-cloumn-width {\\n        width: 4em;\\n        height: 1.5em;\\n    }\\n    .mobile-header-label {\\n        font-size: 0.7rem;\\n        color: white;\\n        font-weight: bold;\\n    }\\n    .td-mobile-cloumn-width {\\n        width: 1.5em;\\n    }\\n    .mobile-up-arrow-icon {\\n        width: 0.5em;\\n        height: 0.5em;\\n    }\\n    .mobile-news-details-span {\\n        font-size: 0.8rem;\\n        color: black;\\n    }\\n    .mobile-news-url-span {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n        margin-left: 1em;\\n        text-decoration: none;\\n    }\\n    .mobile-news-url-span:hover {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n        margin-left: 1em;\\n        text-decoration: underline;\\n    }\\n    .mobile-news-footer-container {\\n        margin-top: 0.2em;\\n    }\\n    .mobile-news-by-span {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n    }\\n    .mobile-news-author-span {\\n        font-size: 0.6rem;\\n        color: #000000;\\n        margin-left: 1em;\\n    }\\n    .mobile-news-time-span {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n        margin-left: 1em;\\n    }\\n    .mobile-news-hide-label {\\n        font-size: 0.6rem;\\n        color: #000000;\\n        text-decoration: none;\\n        margin-left: 0.5em;\\n    }\\n    .mobile-news-left-bracket {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n        margin-left: 1em;\\n    }\\n    .mobile-news-right-bracket {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n        margin-left: 0.5em;\\n    }\\n    .mobile-news-comments {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n        margin-left: 1em;\\n    }\\n    .pagination-container {\\n        width: 100%;\\n        height: 2.5em;\\n        display: grid;\\n        grid-template-columns: 75% 25%;\\n    }\\n    .pagination-btn-container {\\n        width: 90%;\\n        height: 2.5em;\\n        display: flex;\\n        justify-content: flex-end;\\n        align-items: center;\\n    }\\n    .prev-btn-label {\\n        font-size: 0.8rem;\\n        color: #ff6600;\\n        font-weight: bold;\\n        margin-right: 0.5em;\\n        text-decoration: none;\\n    }\\n    .next-btn-label {\\n        font-size: 0.8rem;\\n        color: #ff6600;\\n        font-weight: bold;\\n        margin-left: 0.5em;\\n        text-decoration: none;\\n    }\\n    .btn-separator-div {\\n        width: 0.2em;\\n        height: 1em;\\n        background-color: #ff6600;\\n    }\\n    .line-chart-votes-label {\\n        font-size: 1rem;\\n        color: #000000;\\n        font-weight: bold;\\n        transform: rotate(-90deg);\\n    }\\n    .line-chart-id-div {\\n        width: 100%;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n    }\\n    .line-chart-id-label {\\n        font-size: 1rem;\\n        color: #000000;\\n        font-weight: bold;\\n    }\\n}", ""]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./client/css/index.css?',
        );

        /***/
      },

    /***/ './client/routes/config.js':
      /*! *********************************!*\
  !*** ./client/routes/config.js ***!
  \******************************** */
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Home */ "./client/components/Home.js");\n\nvar routes = [{\n  path: \'/\',\n  exact: true,\n  component: _components_Home__WEBPACK_IMPORTED_MODULE_0__["default"]\n}];\n/* harmony default export */ __webpack_exports__["default"] = (routes);\n\n//# sourceURL=webpack:///./client/routes/config.js?',
        );

        /***/
      },

    /***/ './client/store/context.js':
      /*! *********************************!*\
  !*** ./client/store/context.js ***!
  \******************************** */
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Store = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({\n  news: [],\n  vote_count: \'\'\n});\n/* harmony default export */ __webpack_exports__["default"] = (Store);\n\n//# sourceURL=webpack:///./client/store/context.js?',
        );

        /***/
      },

    /***/ './client/store/reducer.js':
      /*! *********************************!*\
  !*** ./client/store/reducer.js ***!
  \******************************** */
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/constants */ "./client/actions/constants.js");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialState = {\n  news: [],\n  vote_count: \'\'\n};\nfunction reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_NEWS_FEED"]:\n      {\n        var newState = _objectSpread(_objectSpread({}, state), {}, {\n          news: [...state.news, ...action.payload]\n        });\n\n        return newState;\n      }\n\n    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["CLEAN_FEED"]:\n      {\n        var _newState = _objectSpread(_objectSpread({}, state), {}, {\n          news: []\n        });\n\n        return _newState;\n      }\n\n    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["HIDE_NEWS_FEED"]:\n      {\n        var _newState2 = _objectSpread(_objectSpread({}, state), {}, {\n          news: state.news.filter(item => item.id !== action.payload)\n        });\n\n        return _newState2;\n      }\n\n    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["SET_UPVOTE_COUNT"]:\n      {\n        var _newState3 = _objectSpread(_objectSpread({}, state), {}, {\n          news: state.news.map(item => item.id == action.payload ? _objectSpread(_objectSpread({}, item), {}, {\n            vote_count: item.vote_count + 1\n          }) : item)\n        });\n\n        return _newState3;\n      }\n\n    default:\n      return state;\n  }\n}\n;\n\n//# sourceURL=webpack:///./client/store/reducer.js?',
        );

        /***/
      },

    /***/ './client/store/usePersist.js':
      /*! ************************************!*\
  !*** ./client/store/usePersist.js ***!
  \*********************************** */
      /*! exports provided: usePersistedContext, usePersistedReducer */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePersistedContext", function() { return usePersistedContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePersistedReducer", function() { return usePersistedReducer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction usePersistedContext(context) {\n  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \'state\';\n\n  /** to play with the JSON temprorly commentting */\n  var persistedContext = \'\';\n  return persistedContext ? JSON.parse(persistedContext) : context; // return context;\n}\nfunction usePersistedReducer(_ref) {\n  var [state, dispatch] = _ref;\n  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \'state\';\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => \'\');\n  return [state, dispatch];\n}\n\n//# sourceURL=webpack:///./client/store/usePersist.js?',
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          '\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join(\'\');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \'string\') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \'\']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || \'\'; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === \'function\') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot || \'\').concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n  }\n\n  return [content].join(\'\\n\');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n  return "/*# ".concat(data, " */");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?',
        );

        /***/
      },

    /***/ './server/serve.js':
      /*! *************************!*\
  !*** ./server/serve.js ***!
  \************************ */
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "react-router");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ "body-parser");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/App */ "./client/App.js");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_4___default()();\nvar PORT = process.env.PORT || 4000;\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.static(\'build/public\'));\napp.get(\'*\', (req, res) => {\n  var title = \'XT-Assignment\';\n  var description = \'Create a hacker news clone using React with Server Side Rendering and hydration\';\n  var thumb = \'https://news.ycombinator.com/y18.gif\';\n  var favicon = \'https://news.ycombinator.com/favicon.ico\';\n  var link = \'\';\n  var markup = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {\n    location: req.url,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_6__["default"], null)));\n  var html = "\\n        <!DOCTYPE html>\\n        <html>\\n        <head>\\n            <meta charset=\\"utf-8\\">\\n            <meta content=\\"IE=edge\\" http-equiv=\\"X-UA-Compatible\\">\\n            <meta content=\\"width=device-width, initial-scale=1\\" name=\\"viewport\\">\\n            <title>".concat(title, "</title>\\n            <meta name=\\"description\\" content=\\"").concat(description, "\\">\\n        \\n            <meta name=\\"twitter:card\\" content=\\"summary_large_image\\">\\n            <meta name=\\"twitter:site\\" content=\\"@anspattnaik\\">\\n            <meta name=\\"twitter:title\\" content=\\"").concat(title, "\\">\\n            <meta name=\\"twitter:description\\" content=\\"").concat(description, "\\">\\n            <meta name=\\"twitter:creator\\" content=\\"@anspattnaik\\">\\n            <meta name=\\"twitter:image\\" content=\\"").concat(thumb, "\\">\\n            <meta property=\\"og:title\\" content=\\"").concat(title, "\\" />\\n            <meta property=\\"og:description\\" content=\\"").concat(description, "\\">\\n            <meta property=\\"og:type\\" content=\\"article\\" />\\n            <meta property=\\"og:url\\" content=\\"").concat(link, "\\" />\\n            <meta property=\\"og:image\\" content=\\"").concat(thumb, "\\" />\\n            <meta property=\\"og:site_name\\" content=\\"").concat(title, "\\" />\\n            <link rel=\\"canonical\\" href=\\"").concat(link, "\\"/>\\n            <link rel=\\"shortcut icon\\" type=\\"image/png\\" href=\\"").concat(favicon, "\\"/>\\n            <link rel=\\"apple-touch-icon-precomposed\\" href=\\"").concat(thumb, "\\"/>\\n        </head>\\n        <body>\\n            <div id=\\"root\\">").concat(markup, "</div>\\n            <script src=\\"bundle.js\\"></script>\\n        </body>\\n        </html>");\n  res.send(html);\n});\napp.listen(PORT, () => {\n  console.log("Server listening on ".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/serve.js?',
        );

        /***/
      },

    /***/ '@babel/polyfill':
      /*! **********************************!*\
  !*** external "@babel/polyfill" ***!
  \********************************* */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@babel/polyfill");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?',
        );

        /***/
      },

    /***/ '@babel/runtime/helpers/asyncToGenerator':
      /*! **********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \********************************************************* */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@babel/runtime/helpers/asyncToGenerator");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?',
        );

        /***/
      },

    /***/ '@babel/runtime/helpers/defineProperty':
      /*! ********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \******************************************************* */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@babel/runtime/helpers/defineProperty");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?',
        );

        /***/
      },

    /***/ '@babel/runtime/helpers/extends':
      /*! *************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \************************************************ */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@babel/runtime/helpers/extends");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/extends%22?',
        );

        /***/
      },

    /***/ '@babel/runtime/regenerator':
      /*! *********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \******************************************** */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@babel/runtime/regenerator");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?',
        );

        /***/
      },

    /***/ 'body-parser':
      /*! ******************************!*\
  !*** external "body-parser" ***!
  \***************************** */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("body-parser");\n\n//# sourceURL=webpack:///external_%22body-parser%22?',
        );

        /***/
      },

    /***/ 'chart.js':
      /*! ***************************!*\
  !*** external "chart.js" ***!
  \************************** */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("chart.js");\n\n//# sourceURL=webpack:///external_%22chart.js%22?',
        );

        /***/
      },

    /***/ 'express':
      /*! **************************!*\
  !*** external "express" ***!
  \************************* */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("express");\n\n//# sourceURL=webpack:///external_%22express%22?',
        );

        /***/
      },

    /***/ 'flatlist-react':
      /*! *********************************!*\
  !*** external "flatlist-react" ***!
  \******************************** */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("flatlist-react");\n\n//# sourceURL=webpack:///external_%22flatlist-react%22?',
        );

        /***/
      },

    /***/ 'react':
      /*! ************************!*\
  !*** external "react" ***!
  \*********************** */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react");\n\n//# sourceURL=webpack:///external_%22react%22?',
        );

        /***/
      },

    /***/ 'react-chartkick':
      /*! **********************************!*\
  !*** external "react-chartkick" ***!
  \********************************* */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-chartkick");\n\n//# sourceURL=webpack:///external_%22react-chartkick%22?',
        );

        /***/
      },

    /***/ 'react-dom/server':
      /*! ***********************************!*\
  !*** external "react-dom/server" ***!
  \********************************** */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-dom/server");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?',
        );

        /***/
      },

    /***/ 'react-redux':
      /*! ******************************!*\
  !*** external "react-redux" ***!
  \***************************** */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-redux");\n\n//# sourceURL=webpack:///external_%22react-redux%22?',
        );

        /***/
      },

    /***/ 'react-router':
      /*! *******************************!*\
  !*** external "react-router" ***!
  \****************************** */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-router");\n\n//# sourceURL=webpack:///external_%22react-router%22?',
        );

        /***/
      },

    /***/ 'react-router-dom':
      /*! ***********************************!*\
  !*** external "react-router-dom" ***!
  \********************************** */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-router-dom");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?',
        );

        /***/
      },

    /***/ 'regenerator-runtime/runtime':
      /*! **********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \********************************************* */
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("regenerator-runtime/runtime");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?',
        );

        /***/
      },

    /** *** */
  },
);
