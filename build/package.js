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
/******/ 	__webpack_require__.p = "/build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/serve.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App.js":
/*!***********************!*\
  !*** ./client/App.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ \"./client/store/index.js\");\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Home */ \"./client/components/Home.js\");\n\n\n\n\n\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _components_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}];\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n      store: _store__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, routes.map((route, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      key: i\n    }, route)))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./client/App.js?");

/***/ }),

/***/ "./client/actions/constants.js":
/*!*************************************!*\
  !*** ./client/actions/constants.js ***!
  \*************************************/
/*! exports provided: API_URL, FETCH_NEWS_FEED, SET_UPVOTE_COUNT, NEWS_FEED_SHOW, NEWS_FEED_HIDE, NEWS_STORAGE_KEY, UP_ARROW_ICON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_NEWS_FEED\", function() { return FETCH_NEWS_FEED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_UPVOTE_COUNT\", function() { return SET_UPVOTE_COUNT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEWS_FEED_SHOW\", function() { return NEWS_FEED_SHOW; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEWS_FEED_HIDE\", function() { return NEWS_FEED_HIDE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEWS_STORAGE_KEY\", function() { return NEWS_STORAGE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UP_ARROW_ICON\", function() { return UP_ARROW_ICON; });\nvar API_URL = 'https://hn.algolia.com/api/v1/items/';\nvar FETCH_NEWS_FEED = 'FETCH_NEWS_FEED';\nvar SET_UPVOTE_COUNT = 'SET_UPVOTE_COUNT';\nvar NEWS_FEED_SHOW = 0;\nvar NEWS_FEED_HIDE = 1;\nvar NEWS_STORAGE_KEY = 'news_feed';\nvar UP_ARROW_ICON = 'https://assets.hackbotone.com/images/icons/up_arrow.png';\n\n//# sourceURL=webpack:///./client/actions/constants.js?");

/***/ }),

/***/ "./client/actions/index.js":
/*!*********************************!*\
  !*** ./client/actions/index.js ***!
  \*********************************/
/*! exports provided: dispatchNewsFeeds, fetchNewsFeed, dispatchVoteCount, setUpVoteCount, hideNewsFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchNewsFeeds\", function() { return dispatchNewsFeeds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchNewsFeed\", function() { return fetchNewsFeed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchVoteCount\", function() { return dispatchVoteCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpVoteCount\", function() { return setUpVoteCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideNewsFeed\", function() { return hideNewsFeed; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./client/actions/constants.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar dispatchNewsFeeds = data => ({\n  type: _constants__WEBPACK_IMPORTED_MODULE_2__[\"FETCH_NEWS_FEED\"],\n  payload: data\n});\nvar fetchNewsFeed = (start, end) => /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {\n    var feeds, i;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            feeds = [];\n            i = start;\n\n          case 2:\n            if (!(i < end)) {\n              _context.next = 8;\n              break;\n            }\n\n            _context.next = 5;\n            return fetch(_constants__WEBPACK_IMPORTED_MODULE_2__[\"API_URL\"] + parseInt(i)).then(response => response.json()).then(data => {\n              var results = JSON.parse(JSON.stringify(data));\n              var {\n                title,\n                id,\n                author,\n                url,\n                created_at_i,\n                points,\n                children\n              } = results;\n\n              if (title != null) {\n                var date = new Date(created_at_i * 1000);\n                var posted_time = \"\".concat(date.getMonth(), \"/\").concat(date.getDay(), \"/\").concat(date.getFullYear());\n                var storage_item = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__[\"NEWS_STORAGE_KEY\"] + id);\n                var parse_storage_item = JSON.parse(storage_item);\n                var vote_storage_count = parse_storage_item != null ? parse_storage_item.vote_count : 0;\n                var show_hide_status = parse_storage_item != null && parse_storage_item.hide && parse_storage_item.hide === _constants__WEBPACK_IMPORTED_MODULE_2__[\"NEWS_FEED_HIDE\"] ? _constants__WEBPACK_IMPORTED_MODULE_2__[\"NEWS_FEED_HIDE\"] : _constants__WEBPACK_IMPORTED_MODULE_2__[\"NEWS_FEED_SHOW\"];\n\n                if (show_hide_status === _constants__WEBPACK_IMPORTED_MODULE_2__[\"NEWS_FEED_SHOW\"]) {\n                  var news_results = {\n                    id,\n                    title,\n                    author,\n                    time: posted_time,\n                    url,\n                    vote_count: vote_storage_count > points ? vote_storage_count : points,\n                    comments: children.length,\n                    hide: show_hide_status\n                  };\n                  feeds.push(news_results);\n                  localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__[\"NEWS_STORAGE_KEY\"] + id, JSON.stringify(news_results));\n                  dispatch(dispatchNewsFeeds(feeds));\n                }\n              }\n            }).catch(error => {\n              console.log(\"Error Feed \".concat(i, \" == \").concat(JSON.stringify(error)));\n            });\n\n          case 5:\n            i++;\n            _context.next = 2;\n            break;\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar dispatchVoteCount = count => ({\n  type: _constants__WEBPACK_IMPORTED_MODULE_2__[\"SET_UPVOTE_COUNT\"],\n  payload: count\n});\nvar setUpVoteCount = vote => dispatch => {\n  dispatch(dispatchVoteCount(vote));\n};\nvar hideNewsFeed = (feeds, id) => dispatch => {\n  if (feeds != null) {\n    var parseHide = JSON.parse(JSON.stringify(feeds));\n\n    if (parseHide !== undefined) {\n      var {\n        news\n      } = parseHide;\n      var index = news.findIndex(el => el.id === id);\n      var item = news[index];\n      news.splice(index, 1);\n      var hide_results = {\n        \"id\": item.id,\n        \"title\": item.title,\n        \"author\": item.author,\n        \"time\": item.posted_time,\n        \"url\": item.url,\n        \"vote_count\": item.vote_count,\n        \"comments\": item.comments,\n        \"hide\": _constants__WEBPACK_IMPORTED_MODULE_2__[\"NEWS_FEED_HIDE\"]\n      };\n      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__[\"NEWS_STORAGE_KEY\"] + id, hide_results);\n      dispatch(dispatchNewsFeeds(news));\n    }\n  }\n};\n\n//# sourceURL=webpack:///./client/actions/index.js?");

/***/ }),

/***/ "./client/components/Chart/Chart.js":
/*!******************************************!*\
  !*** ./client/components/Chart/Chart.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartkick */ \"react-chartkick\");\n/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartkick__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/constants */ \"./client/actions/constants.js\");\n\n\n\n\nvar Chart = (_ref) => {\n  var {\n    results\n  } = _ref;\n  var statistics = [];\n\n  for (var i = 0; i < results.length; i++) {\n    var id = results[i].id.toString();\n    var storage_item = localStorage.getItem(_actions_constants__WEBPACK_IMPORTED_MODULE_2__[\"NEWS_STORAGE_KEY\"] + id);\n    var parse_storage_item = JSON.parse(storage_item);\n    var item = {\n      [id]: parse_storage_item != null ? parse_storage_item.vote_count : 0\n    };\n    statistics.push(item);\n  }\n\n  var graph_item = JSON.stringify(statistics);\n  graph_item = graph_item.replace(/[{}]/g, '');\n  graph_item = graph_item.replace('[', '{');\n  graph_item = graph_item.replace(']', '}');\n  var data = JSON.parse(graph_item);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartkick__WEBPACK_IMPORTED_MODULE_1__[\"LineChart\"], {\n    data: data\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\n//# sourceURL=webpack:///./client/components/Chart/Chart.js?");

/***/ }),

/***/ "./client/components/Home.js":
/*!***********************************!*\
  !*** ./client/components/Home.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ \"./client/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./client/actions/index.js\");\n/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/constants */ \"./client/actions/constants.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ \"chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flatlist-react */ \"flatlist-react\");\n/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flatlist_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Chart_Chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Chart/Chart */ \"./client/components/Chart/Chart.js\");\n/* harmony import */ var _components_NewsFeed_NewsFeed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NewsFeed/NewsFeed */ \"./client/components/NewsFeed/NewsFeed.js\");\n\n\n\n\n\n\n\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"setUpVoteCount\", item => {\n      var {\n        id,\n        title,\n        author,\n        posted_time,\n        url,\n        comments\n      } = item;\n      var storage_item = localStorage.getItem(_actions_constants__WEBPACK_IMPORTED_MODULE_5__[\"NEWS_STORAGE_KEY\"] + id);\n      var parse_storage_item = JSON.parse(storage_item);\n\n      if (title == parse_storage_item.title) {\n        var new_vote_count = parseInt(parse_storage_item.vote_count) + 1;\n        var news_results = {\n          \"id\": id,\n          \"title\": title,\n          \"author\": author,\n          \"time\": posted_time,\n          \"url\": url,\n          \"vote_count\": new_vote_count,\n          \"comments\": comments,\n          \"hide\": _actions_constants__WEBPACK_IMPORTED_MODULE_5__[\"NEWS_FEED_SHOW\"]\n        };\n        localStorage.setItem(_actions_constants__WEBPACK_IMPORTED_MODULE_5__[\"NEWS_STORAGE_KEY\"] + id, JSON.stringify(news_results));\n        this.props.setUpVoteCount(news_results);\n      }\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"renderVoteCount\", item => {\n      var id = item.id;\n      var votes;\n      var vote = JSON.parse(JSON.stringify(this.props.vote_count)).vote_count;\n\n      if (id == vote.id) {\n        votes = vote.vote_count;\n      } else {\n        var storage_item = localStorage.getItem(_actions_constants__WEBPACK_IMPORTED_MODULE_5__[\"NEWS_STORAGE_KEY\"] + id);\n        var parse_storage_item = JSON.parse(storage_item);\n        var vote_count = parse_storage_item != null ? parse_storage_item.vote_count : 0;\n        votes = vote_count;\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'vote-span'\n      }, votes);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"hideNewsFeed\", item => {\n      this.props.hideNewsFeed(this.props.news, item.id);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"renderItem\", (item, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"table\", {\n        width: \"100%\",\n        height: \"30\",\n        border: \"0\",\n        bgcolor: index % 2 == 0 ? '#FFFFFF' : '#F2F2F2',\n        className: 'desktop-table'\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n        valign: \"middle\",\n        align: \"center\",\n        className: 'td-header-cloumn-width'\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'comments-span'\n      }, item.comments)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n        valign: \"middle\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'news-vote-count'\n      }, this.renderVoteCount(item)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'news-arrow'\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n        href: \"#\",\n        onClick: this.setUpVoteCount.bind(this, item)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n        src: _actions_constants__WEBPACK_IMPORTED_MODULE_5__[\"UP_ARROW_ICON\"],\n        className: 'up-arrow-icon'\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'news-details-span'\n      }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n        href: item.url,\n        className: 'news-url-span',\n        target: \"_blank\"\n      }, \"(\", this.getDomain(item.url), \")\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'news-url-span'\n      }, \"by\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'news-author-span'\n      }, item.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'news-time-span'\n      }, item.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'news-left-bracket'\n      }, \"[\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n        href: \"#\",\n        className: 'news-hide-label',\n        onClick: this.hideNewsFeed.bind(this, item)\n      }, \"hide\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'news-right-bracket'\n      }, \"]\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"table\", {\n        width: \"100%\",\n        border: \"0\",\n        bgcolor: index % 2 == 0 ? '#FFFFFF' : '#F2F2F2',\n        className: 'mobile-table'\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n        valign: \"middle\",\n        align: \"center\",\n        className: 'td-mobile-cloumn-width'\n      }, this.renderVoteCount(item)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n        valign: \"middle\",\n        align: \"center\",\n        className: 'td-mobile-cloumn-width'\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n        href: \"#\",\n        onClick: this.setUpVoteCount.bind(this, item)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n        src: _actions_constants__WEBPACK_IMPORTED_MODULE_5__[\"UP_ARROW_ICON\"],\n        className: 'mobile-up-arrow-icon'\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n        valign: \"middle\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'mobile-news-details-span'\n      }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n        href: item.url,\n        className: 'mobile-news-url-span',\n        target: \"_blank\"\n      }, \"(\", this.getDomain(item.url), \")\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        className: 'mobile-news-footer-container'\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'mobile-news-by-span'\n      }, \"by\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'mobile-news-author-span'\n      }, item.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'mobile-news-time-span'\n      }, item.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'mobile-news-left-bracket'\n      }, \"[\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n        href: \"#\",\n        className: 'mobile-news-hide-label',\n        onClick: this.hideNewsFeed.bind(this, item)\n      }, \"hide\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'mobile-news-right-bracket'\n      }, \"]\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: 'mobile-news-comments'\n      }, item.comments, \" comments\"))))));\n    });\n\n    this.state = {\n      startPage: 1,\n      endPage: 31\n    };\n  }\n\n  componentDidMount() {\n    var {\n      startPage,\n      endPage\n    } = this.state;\n    this.props.fetchNewsFeed(startPage, endPage);\n  }\n\n  getDomain(url) {\n    if (url != undefined) return url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];\n  }\n\n  previousPage() {\n    var {\n      startPage,\n      endPage\n    } = this.state;\n    this.setState({\n      endPage: endPage > 61 ? endPage - 30 : 31,\n      startPage: startPage > 31 ? startPage - 30 : 1\n    });\n    this.props.fetchNewsFeed(startPage, endPage);\n  }\n\n  nextPage() {\n    var {\n      startPage,\n      endPage\n    } = this.state;\n    this.setState({\n      endPage: endPage + 30,\n      startPage: startPage + 30\n    });\n    this.props.fetchNewsFeed(startPage, endPage);\n  }\n\n  render() {\n    var results = JSON.parse(JSON.stringify(this.props.news)).news;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: 'parent-div-container'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: 'news-feed-container'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NewsFeed_NewsFeed__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, results.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(flatlist_react__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      list: results,\n      renderWhenEmpty: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, \"In progress!\"),\n      renderItem: this.renderItem,\n      extraData: this.state,\n      showsVerticalScrollIndicator: false,\n      showsHorizontalScrollIndicator: false\n    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: 'pagination-container'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: 'pagination-btn-container'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n      href: \"#\",\n      className: 'prev-btn-label',\n      onClick: this.previousPage.bind(this)\n    }, \"Previous\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: 'btn-separator-div'\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n      href: \"#\",\n      className: 'next-btn-label',\n      onClick: this.nextPage.bind(this)\n    }, \"Next\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: 'news-feed-bottom-div'\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: 'news-feed-line-chart-container'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", {\n      className: 'line-chart-votes-label'\n    }, \"Votes\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Chart_Chart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      results: results\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: 'line-chart-id-div'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", {\n      className: 'line-chart-id-label'\n    }, \"ID\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: 'news-feed-bottom-div'\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null));\n  }\n\n}\n\nvar stateProps = state => ({\n  news: state.news,\n  vote_count: state.vote_count\n});\n\nvar dispatchProps = dispatch => ({\n  fetchNewsFeed: (start, end) => dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"fetchNewsFeed\"])(start, end)),\n  setUpVoteCount: item => dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"setUpVoteCount\"])(item)),\n  hideNewsFeed: (feeds, id) => dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"hideNewsFeed\"])(feeds, id))\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(stateProps, dispatchProps)(Home));\n\n//# sourceURL=webpack:///./client/components/Home.js?");

/***/ }),

/***/ "./client/components/NewsFeed/NewsFeed.js":
/*!************************************************!*\
  !*** ./client/components/NewsFeed/NewsFeed.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NewsFeedHeader = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"news-feed-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    cellPadding: \"0\",\n    cellSpacing: \"0\",\n    width: \"100%\",\n    border: \"0\",\n    className: \"desktop-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    valign: \"middle\",\n    align: \"center\",\n    className: \"td-header-cloumn-width\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"header-label\"\n  }, \"Top\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    valign: \"middle\",\n    align: \"center\",\n    className: \"td-header-cloumn-width\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"header-label\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    valign: \"middle\",\n    align: \"center\",\n    className: \"td-header-cloumn-width\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"header-label\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    valign: \"middle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"header-label\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    cellPadding: \"0\",\n    cellSpacing: \"0\",\n    width: \"100%\",\n    border: \"0\",\n    className: \"mobile-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    valign: \"middle\",\n    align: \"center\",\n    className: \"td-mobile-header-cloumn-width\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mobile-header-label\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    valign: \"middle\",\n    align: \"center\",\n    className: \"td-mobile-header-cloumn-width\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mobile-header-label\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    valign: \"middle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mobile-header-label\"\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsFeedHeader);\n\n//# sourceURL=webpack:///./client/components/NewsFeed/NewsFeed.js?");

/***/ }),

/***/ "./client/css/index.css":
/*!******************************!*\
  !*** ./client/css/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body{\\n    margin: 0;\\n    font-family:Verdana, Geneva, sans-serif;\\n}\\n.parent-div-container {\\n    width: 100%;\\n    height: auto;\\n    display: grid;\\n    grid-template-columns: 5% 90% 5%;\\n}\\n.news-feed-container {\\n    width: 100%;\\n    height: auto;\\n    display: flex;\\n    flex-direction: column;\\n}\\n.news-feed-header {\\n    width: 100%;\\n    height: 1.5em;\\n    justify-content: center;\\n    background-color: #ff6600;\\n}\\n.desktop-table {\\n    display: block;\\n}\\n.mobile-table {\\n    display: none;\\n}\\n.header-label {\\n    font-size: 0.7rem;\\n    color: white;\\n    font-weight: bold;\\n}\\n.td-cloumn-width {\\n    width: 4.5em;\\n    height: 1.5em;\\n}\\n.td-header-cloumn-width {\\n    width: 4.8em;\\n}\\n.comments-span {\\n    font-size: 0.8rem;\\n    color: black;\\n    font-weight: 700;\\n}\\n.vote-span {\\n    font-size: 0.8rem;\\n    color: black;\\n    font-weight: 700;\\n}\\n.news-details-span {\\n    font-size: 0.9rem;\\n    color: black;\\n}\\n.up-arrow-icon {\\n    width: 0.5em;\\n    height: 0.5em;\\n}\\n.news-url-span {\\n    font-size: 0.65rem;\\n    color: #7a7979;\\n    margin-left: 1em;\\n    text-decoration: none;\\n}\\n.news-url-span:hover {\\n    font-size: 0.65rem;\\n    color: #7a7979;\\n    margin-left: 1em;\\n    text-decoration: underline;\\n}\\n.news-left-bracket {\\n    font-size: 0.65rem;\\n    color: #7a7979;\\n    margin-left: 1em;\\n}\\n.news-hide-label {\\n    font-size: 0.65rem;\\n    color: #000000;\\n    text-decoration: none;\\n    margin-left: 0.5em;\\n}\\n.news-right-bracket {\\n    font-size: 0.65rem;\\n    color: #7a7979;\\n    margin-left: 0.5em;\\n}\\n.news-author-span {\\n    font-size: 0.65rem;\\n    color: #000000;\\n    margin-left: 1em;\\n}\\n.news-time-span {\\n    font-size: 0.65rem;\\n    color: #7a7979;\\n    margin-left: 1em;\\n}\\n.news-feed-bottom-div {\\n    width: 100%;\\n    height: 0.3em;\\n    background-color: #ff6600;\\n}\\n.news-feed-line-chart-container {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    margin-top: 1em;\\n}\\n.line-chart-votes-label {\\n    font-size: 1.2rem;\\n    color: #000000;\\n    font-weight: bold;\\n    transform: rotate(-90deg);\\n}\\n.line-chart-id-div {\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.line-chart-id-label {\\n    font-size: 1.2rem;\\n    color: #000000;\\n    font-weight: bold;\\n}\\n.news-vote-count, .news-arrow {\\n    margin-right: 10px;\\n}\\n.pagination-container {\\n    width: 100%;\\n    height: 2.5em;\\n    display: grid;\\n    grid-template-columns: 80% 20%;\\n}\\n.pagination-btn-container {\\n    width: 95%;\\n    height: 2.5em;\\n    display: flex;\\n    justify-content: flex-end;\\n    align-items: center;\\n}\\n.prev-btn-label {\\n    font-size: 0.8rem;\\n    color: #ff6600;\\n    font-weight: bold;\\n    margin-right: 0.5em;\\n    text-decoration: none;\\n}\\n.next-btn-label {\\n    font-size: 0.8rem;\\n    color: #ff6600;\\n    font-weight: bold;\\n    margin-left: 0.5em;\\n    text-decoration: none;\\n}\\n.btn-separator-div {\\n    width: 0.15em;\\n    height: 1em;\\n    background-color: #ff6600;\\n}\\n@media only screen and (max-width: 1000px) {\\n    .desktop-table {\\n        display: none;\\n    }\\n    .parent-div-container {\\n        width: 100%;\\n        height: auto;\\n        display: grid;\\n        grid-template-columns: 100%;\\n    }\\n    .mobile-table {\\n        display: block;\\n    }\\n    .td-mobile-header-cloumn-width {\\n        width: 4em;\\n        height: 1.5em;\\n    }\\n    .mobile-header-label {\\n        font-size: 0.7rem;\\n        color: white;\\n        font-weight: bold;\\n    }\\n    .td-mobile-cloumn-width {\\n        width: 1.5em;\\n    }\\n    .mobile-up-arrow-icon {\\n        width: 0.5em;\\n        height: 0.5em;\\n    }\\n    .mobile-news-details-span {\\n        font-size: 0.8rem;\\n        color: black;\\n    }\\n    .mobile-news-url-span {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n        margin-left: 1em;\\n        text-decoration: none;\\n    }\\n    .mobile-news-url-span:hover {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n        margin-left: 1em;\\n        text-decoration: underline;\\n    }\\n    .mobile-news-footer-container {\\n        margin-top: 0.2em;\\n    }\\n    .mobile-news-by-span {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n    }\\n    .mobile-news-author-span {\\n        font-size: 0.6rem;\\n        color: #000000;\\n        margin-left: 1em;\\n    }\\n    .mobile-news-time-span {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n        margin-left: 1em;\\n    }\\n    .mobile-news-hide-label {\\n        font-size: 0.6rem;\\n        color: #000000;\\n        text-decoration: none;\\n        margin-left: 0.5em;\\n    }\\n    .mobile-news-left-bracket {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n        margin-left: 1em;\\n    }\\n    .mobile-news-right-bracket {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n        margin-left: 0.5em;\\n    }\\n    .mobile-news-comments {\\n        font-size: 0.6rem;\\n        color: #7a7979;\\n        margin-left: 1em;\\n    }\\n    .pagination-container {\\n        width: 100%;\\n        height: 2.5em;\\n        display: grid;\\n        grid-template-columns: 75% 25%;\\n    }\\n    .pagination-btn-container {\\n        width: 90%;\\n        height: 2.5em;\\n        display: flex;\\n        justify-content: flex-end;\\n        align-items: center;\\n    }\\n    .prev-btn-label {\\n        font-size: 0.8rem;\\n        color: #ff6600;\\n        font-weight: bold;\\n        margin-right: 0.5em;\\n        text-decoration: none;\\n    }\\n    .next-btn-label {\\n        font-size: 0.8rem;\\n        color: #ff6600;\\n        font-weight: bold;\\n        margin-left: 0.5em;\\n        text-decoration: none;\\n    }\\n    .btn-separator-div {\\n        width: 0.2em;\\n        height: 1em;\\n        background-color: #ff6600;\\n    }\\n    .line-chart-votes-label {\\n        font-size: 1rem;\\n        color: #000000;\\n        font-weight: bold;\\n        transform: rotate(-90deg);\\n    }\\n    .line-chart-id-div {\\n        width: 100%;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n    }\\n    .line-chart-id-label {\\n        font-size: 1rem;\\n        color: #000000;\\n        font-weight: bold;\\n    }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./client/css/index.css?");

/***/ }),

/***/ "./client/reducers/index.js":
/*!**********************************!*\
  !*** ./client/reducers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _newsFeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsFeed */ \"./client/reducers/newsFeed.js\");\n/* harmony import */ var _voteCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voteCount */ \"./client/reducers/voteCount.js\");\n\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  news: _newsFeed__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  vote_count: _voteCount__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./client/reducers/index.js?");

/***/ }),

/***/ "./client/reducers/newsFeed.js":
/*!*************************************!*\
  !*** ./client/reducers/newsFeed.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/constants */ \"./client/actions/constants.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialState = {\n  news: ''\n};\n\nvar newsFeedsReducer = function newsFeedsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_NEWS_FEED\"]:\n      {\n        var newState = _objectSpread(_objectSpread({}, state), {}, {\n          news: action.payload\n        });\n\n        return newState;\n      }\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newsFeedsReducer);\n\n//# sourceURL=webpack:///./client/reducers/newsFeed.js?");

/***/ }),

/***/ "./client/reducers/voteCount.js":
/*!**************************************!*\
  !*** ./client/reducers/voteCount.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/constants */ \"./client/actions/constants.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialState = {\n  vote_count: ''\n};\n\nvar voteCountReducer = function voteCountReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__[\"SET_UPVOTE_COUNT\"]:\n      {\n        var newState = _objectSpread(_objectSpread({}, state), {}, {\n          vote_count: action.payload\n        });\n\n        return newState;\n      }\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (voteCountReducer);\n\n//# sourceURL=webpack:///./client/reducers/voteCount.js?");

/***/ }),

/***/ "./client/store/index.js":
/*!*******************************!*\
  !*** ./client/store/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./client/reducers/index.js\");\n\n\n\n\nvar middle = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a);\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], middle);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./client/store/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./server/serve.js":
/*!*************************!*\
  !*** ./server/serve.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/App */ \"./client/App.js\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_4___default()();\nvar PORT = process.env.PORT || 4000;\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.static('build/public'));\napp.get('*', (req, res) => {\n  var title = 'XT-Assignment';\n  var description = 'Create a hacker news clone using React with Server Side Rendering and hydration';\n  var thumb = 'https://news.ycombinator.com/y18.gif';\n  var favicon = 'https://news.ycombinator.com/favicon.ico';\n  var link = '';\n  var markup = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.url,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n  var html = \"\\n        <!DOCTYPE html>\\n        <html>\\n        <head>\\n            <meta charset=\\\"utf-8\\\">\\n            <meta content=\\\"IE=edge\\\" http-equiv=\\\"X-UA-Compatible\\\">\\n            <meta content=\\\"width=device-width, initial-scale=1\\\" name=\\\"viewport\\\">\\n            <title>\".concat(title, \"</title>\\n            <meta name=\\\"description\\\" content=\\\"\").concat(description, \"\\\">\\n        \\n            <meta name=\\\"twitter:card\\\" content=\\\"summary_large_image\\\">\\n            <meta name=\\\"twitter:site\\\" content=\\\"@anspattnaik\\\">\\n            <meta name=\\\"twitter:title\\\" content=\\\"\").concat(title, \"\\\">\\n            <meta name=\\\"twitter:description\\\" content=\\\"\").concat(description, \"\\\">\\n            <meta name=\\\"twitter:creator\\\" content=\\\"@anspattnaik\\\">\\n            <meta name=\\\"twitter:image\\\" content=\\\"\").concat(thumb, \"\\\">\\n            <meta property=\\\"og:title\\\" content=\\\"\").concat(title, \"\\\" />\\n            <meta property=\\\"og:description\\\" content=\\\"\").concat(description, \"\\\">\\n            <meta property=\\\"og:type\\\" content=\\\"article\\\" />\\n            <meta property=\\\"og:url\\\" content=\\\"\").concat(link, \"\\\" />\\n            <meta property=\\\"og:image\\\" content=\\\"\").concat(thumb, \"\\\" />\\n            <meta property=\\\"og:site_name\\\" content=\\\"\").concat(title, \"\\\" />\\n            <link rel=\\\"canonical\\\" href=\\\"\").concat(link, \"\\\"/>\\n            <link rel=\\\"shortcut icon\\\" type=\\\"image/png\\\" href=\\\"\").concat(favicon, \"\\\"/>\\n            <link rel=\\\"apple-touch-icon-precomposed\\\" href=\\\"\").concat(thumb, \"\\\"/>\\n        </head>\\n        <body>\\n            <div id=\\\"root\\\">\").concat(markup, \"</div>\\n            <script src=\\\"bundle.js\\\"></script>\\n        </body>\\n        </html>\");\n  res.send(html);\n});\napp.listen(PORT, () => {\n  console.log(\"Server listening on \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/serve.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/extends\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/extends%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "chart.js":
/*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chart.js\");\n\n//# sourceURL=webpack:///external_%22chart.js%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "flatlist-react":
/*!*********************************!*\
  !*** external "flatlist-react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"flatlist-react\");\n\n//# sourceURL=webpack:///external_%22flatlist-react%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-chartkick":
/*!**********************************!*\
  !*** external "react-chartkick" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-chartkick\");\n\n//# sourceURL=webpack:///external_%22react-chartkick%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ })

/******/ });