!(function (e) {
  const n = {};
  function t(a) {
    if (n[a]) return n[a].exports;
    const r = (n[a] = { i: a, l: !1, exports: {} });
    return e[a].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, a) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: a });
    }),
    (t.r = function (e) {
      typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && typeof e === 'object' && e && e.__esModule) return e;
      const a = Object.create(null);
      if (
        (t.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & n && typeof e !== 'string')
      )
        for (const r in e)
          t.d(
            a,
            r,
            function (n) {
              return e[n];
            }.bind(null, r),
          );
      return a;
    }),
    (t.n = function (e) {
      const n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, 'a', n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = '/build'),
    t((t.s = 21));
})([
  function (e, n) {
    e.exports = require('react');
  },
  function (e, n) {
    e.exports = require('@babel/runtime/helpers/defineProperty');
  },
  function (e, n) {
    e.exports = require('redux');
  },
  function (e, n) {
    e.exports = require('react-redux');
  },
  function (e, n) {
    e.exports = require('express');
  },
  function (e, n) {
    e.exports = require('react-router-dom');
  },
  function (e, n) {
    e.exports = require('@babel/runtime/regenerator');
  },
  function (e, n) {
    e.exports = require('body-parser');
  },
  function (e, n) {
    e.exports = require('react-dom/server');
  },
  function (e, n) {
    e.exports = require('react-router');
  },
  function (e, n) {
    e.exports = require('@babel/runtime/helpers/extends');
  },
  function (e, n) {
    e.exports = require('flatlist-react');
  },
  function (e, n) {
    e.exports = require('@babel/runtime/helpers/asyncToGenerator');
  },
  function (e, n) {
    e.exports = require('react-chartkick');
  },
  function (e, n) {
    e.exports = require('redux-thunk');
  },
  function (e, n) {
    e.exports = require('redux-logger');
  },
  function (e, n) {
    e.exports = require('@babel/polyfill');
  },
  function (e, n, t) {
    (n = t(18)(!1)).push([
      e.i,
      'body{\n    margin: 0;\n    font-family:Verdana, Geneva, sans-serif;\n}\n.parent-div-container {\n    width: 100%;\n    height: auto;\n    display: grid;\n    grid-template-columns: 5% 90% 5%;\n}\n.news-feed-container {\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n}\n.news-feed-header {\n    width: 100%;\n    height: 1.5em;\n    justify-content: center;\n    background-color: #ff6600;\n}\n.desktop-table {\n    display: block;\n}\n.mobile-table {\n    display: none;\n}\n.header-label {\n    font-size: 0.7rem;\n    color: white;\n    font-weight: bold;\n}\n.td-cloumn-width {\n    width: 4.5em;\n    height: 1.5em;\n}\n.td-header-cloumn-width {\n    width: 4.8em;\n}\n.comments-span {\n    font-size: 0.8rem;\n    color: black;\n    font-weight: 700;\n}\n.vote-span {\n    font-size: 0.8rem;\n    color: black;\n    font-weight: 700;\n}\n.news-details-span {\n    font-size: 0.9rem;\n    color: black;\n}\n.up-arrow-icon {\n    width: 0.5em;\n    height: 0.5em;\n}\n.news-url-span {\n    font-size: 0.65rem;\n    color: #7a7979;\n    margin-left: 1em;\n    text-decoration: none;\n}\n.news-url-span:hover {\n    font-size: 0.65rem;\n    color: #7a7979;\n    margin-left: 1em;\n    text-decoration: underline;\n}\n.news-left-bracket {\n    font-size: 0.65rem;\n    color: #7a7979;\n    margin-left: 1em;\n}\n.news-hide-label {\n    font-size: 0.65rem;\n    color: #000000;\n    text-decoration: none;\n    margin-left: 0.5em;\n}\n.news-right-bracket {\n    font-size: 0.65rem;\n    color: #7a7979;\n    margin-left: 0.5em;\n}\n.news-author-span {\n    font-size: 0.65rem;\n    color: #000000;\n    margin-left: 1em;\n}\n.news-time-span {\n    font-size: 0.65rem;\n    color: #7a7979;\n    margin-left: 1em;\n}\n.news-feed-bottom-div {\n    width: 100%;\n    height: 0.3em;\n    background-color: #ff6600;\n}\n.news-feed-line-chart-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin-top: 1em;\n}\n.line-chart-votes-label {\n    font-size: 1.2rem;\n    color: #000000;\n    font-weight: bold;\n    transform: rotate(-90deg);\n}\n.line-chart-id-div {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.line-chart-id-label {\n    font-size: 1.2rem;\n    color: #000000;\n    font-weight: bold;\n}\n.pagination-container {\n    width: 100%;\n    height: 2.5em;\n    display: grid;\n    grid-template-columns: 80% 20%;\n}\n.pagination-btn-container {\n    width: 95%;\n    height: 2.5em;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n.prev-btn-label {\n    font-size: 0.8rem;\n    color: #ff6600;\n    font-weight: bold;\n    margin-right: 0.5em;\n    text-decoration: none;\n}\n.next-btn-label {\n    font-size: 0.8rem;\n    color: #ff6600;\n    font-weight: bold;\n    margin-left: 0.5em;\n    text-decoration: none;\n}\n.btn-separator-div {\n    width: 0.15em;\n    height: 1em;\n    background-color: #ff6600;\n}\n@media only screen and (max-width: 1000px) {\n    .desktop-table {\n        display: none;\n    }\n    .parent-div-container {\n        width: 100%;\n        height: auto;\n        display: grid;\n        grid-template-columns: 100%;\n    }\n    .mobile-table {\n        display: block;\n    }\n    .td-mobile-header-cloumn-width {\n        width: 4em;\n        height: 1.5em;\n    }\n    .mobile-header-label {\n        font-size: 0.7rem;\n        color: white;\n        font-weight: bold;\n    }\n    .td-mobile-cloumn-width {\n        width: 1.5em;\n    }\n    .mobile-up-arrow-icon {\n        width: 0.5em;\n        height: 0.5em;\n    }\n    .mobile-news-details-span {\n        font-size: 0.8rem;\n        color: black;\n    }\n    .mobile-news-url-span {\n        font-size: 0.6rem;\n        color: #7a7979;\n        margin-left: 1em;\n        text-decoration: none;\n    }\n    .mobile-news-url-span:hover {\n        font-size: 0.6rem;\n        color: #7a7979;\n        margin-left: 1em;\n        text-decoration: underline;\n    }\n    .mobile-news-footer-container {\n        margin-top: 0.2em;\n    }\n    .mobile-news-by-span {\n        font-size: 0.6rem;\n        color: #7a7979;\n    }\n    .mobile-news-author-span {\n        font-size: 0.6rem;\n        color: #000000;\n        margin-left: 1em;\n    }\n    .mobile-news-time-span {\n        font-size: 0.6rem;\n        color: #7a7979;\n        margin-left: 1em;\n    }\n    .mobile-news-hide-label {\n        font-size: 0.6rem;\n        color: #000000;\n        text-decoration: none;\n        margin-left: 0.5em;\n    }\n    .mobile-news-left-bracket {\n        font-size: 0.6rem;\n        color: #7a7979;\n        margin-left: 1em;\n    }\n    .mobile-news-right-bracket {\n        font-size: 0.6rem;\n        color: #7a7979;\n        margin-left: 0.5em;\n    }\n    .mobile-news-comments {\n        font-size: 0.6rem;\n        color: #7a7979;\n        margin-left: 1em;\n    }\n    .pagination-container {\n        width: 100%;\n        height: 2.5em;\n        display: grid;\n        grid-template-columns: 75% 25%;\n    }\n    .pagination-btn-container {\n        width: 90%;\n        height: 2.5em;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n    }\n    .prev-btn-label {\n        font-size: 0.8rem;\n        color: #ff6600;\n        font-weight: bold;\n        margin-right: 0.5em;\n        text-decoration: none;\n    }\n    .next-btn-label {\n        font-size: 0.8rem;\n        color: #ff6600;\n        font-weight: bold;\n        margin-left: 0.5em;\n        text-decoration: none;\n    }\n    .btn-separator-div {\n        width: 0.2em;\n        height: 1em;\n        background-color: #ff6600;\n    }\n    .line-chart-votes-label {\n        font-size: 1rem;\n        color: #000000;\n        font-weight: bold;\n        transform: rotate(-90deg);\n    }\n    .line-chart-id-div {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .line-chart-id-label {\n        font-size: 1rem;\n        color: #000000;\n        font-weight: bold;\n    }\n}',
      '',
    ]),
      (e.exports = n);
  },
  function (e, n, t) {
    e.exports = function (e) {
      const n = [];
      return (
        (n.toString = function () {
          return this.map(function (n) {
            const t = (function (e, n) {
              const t = e[1] || '';
              const a = e[3];
              if (!a) return t;
              if (n && typeof btoa === 'function') {
                const r =
                  ((i = a),
                  (l = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                  (c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                    l,
                  )),
                  '/*# '.concat(c, ' */'));
                const o = a.sources.map(function (e) {
                  return '/*# sourceURL='
                    .concat(a.sourceRoot || '')
                    .concat(e, ' */');
                });
                return [t].concat(o).concat([r]).join('\n');
              }
              let i;
              let l;
              let c;
              return [t].join('\n');
            })(n, e);
            return n[2] ? '@media '.concat(n[2], ' {').concat(t, '}') : t;
          }).join('');
        }),
        (n.i = function (e, t, a) {
          typeof e === 'string' && (e = [[null, e, '']]);
          const r = {};
          if (a)
            for (let o = 0; o < this.length; o++) {
              const i = this[o][0];
              i != null && (r[i] = !0);
            }
          for (let l = 0; l < e.length; l++) {
            const c = [].concat(e[l]);
            (a && r[c[0]]) ||
              (t &&
                (c[2]
                  ? (c[2] = ''.concat(t, ' and ').concat(c[2]))
                  : (c[2] = t)),
              n.push(c));
          }
        }),
        n
      );
    };
  },
  function (e, n) {
    e.exports = require('regenerator-runtime/runtime');
  },
  function (e, n) {
    e.exports = require('chart.js');
  },
  function (e, n, t) {
    t.r(n);
    const a = t(4);
    const r = t.n(a);
    const o = t(7);
    const i = t.n(o);
    const l = (t(16), t(0));
    const c = t.n(l);
    const s = t(8);
    const m = t.n(s);
    const d = t(9);
    const u = t(10);
    const p = t.n(u);
    const h = t(5);
    const f = t(1);
    const g = t.n(f);
    const b = (t(17), t(3));
    const w = t(11);
    const v = t.n(w);
    const y = t(6);
    const E = t.n(y);
    const N = t(12);
    const x = t.n(N);
    const O = 'https://assets.hackbotone.com/images/icons/up_arrow.png';
    const S = (t(19), e => ({ type: 'FETCH_NEWS_FEED', payload: e }));
    const j = (e, n) =>
      (function () {
        const t = x()(
          E.a.mark(function t(a) {
            let r;
            let o;
            return E.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    console.log(`fetchNewsFeed....${e} == ${n}`),
                      (r = []),
                      (o = e);
                  case 3:
                    if (!(o < n)) {
                      t.next = 9;
                      break;
                    }
                    return (
                      (t.next = 6),
                      fetch(
                        `https://hn.algolia.com/api/v1/items/${parseInt(o)}`,
                      )
                        .then(e => e.json())
                        .then(e => {
                          const n = JSON.parse(JSON.stringify(e));
                          const t = n.title;
                          if (t != null) {
                            const o = n.id;
                            const i = n.author;
                            const l = n.url;
                            const c = n.created_at_i;
                            const s = n.points;
                            const m = n.children.length;
                            const d = new Date(1e3 * c);
                            const u = `${d.getMonth()}/${d.getDay()}/${d.getFullYear()}`;
                            const p = localStorage.getItem(`news_feed${o}`);
                            const h = JSON.parse(p);
                            const f = h != null ? h.vote_count : 0;
                            const g =
                              h != null && h.hide && h.hide === 1 ? 1 : 0;
                            if (g === 0) {
                              const b = {
                                id: o,
                                title: t,
                                author: i,
                                time: u,
                                url: l,
                                vote_count: f > s ? f : s,
                                comments: m,
                                hide: g,
                              };
                              r.push(b),
                                localStorage.setItem(
                                  `news_feed${o}`,
                                  JSON.stringify(b),
                                ),
                                a(S(r));
                            }
                          }
                        })
                        .catch(e => {
                          console.log(
                            `Error Feed -- ${o} == ${JSON.stringify(e)}`,
                          );
                        })
                    );
                  case 6:
                    o++, (t.next = 3);
                    break;
                  case 9:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
    const k = t(13);
    t(20);
    class P extends c.a.Component {
      constructor(e) {
        super(e),
          g()(this, 'setUpVoteCount', e => {
            const n = e.id;
            const t = e.title;
            const a = e.author;
            const r = e.posted_time;
            const o = e.url;
            const i = e.comments;
            const l = localStorage.getItem(`news_feed${n}`);
            const c = JSON.parse(l);
            const s = c.title;
            const m = c.vote_count;
            if (t == s) {
              const d = {
                id: n,
                title: t,
                author: a,
                time: r,
                url: o,
                vote_count: parseInt(m) + 1,
                comments: i,
                hide: 0,
              };
              localStorage.setItem(`news_feed${n}`, JSON.stringify(d)),
                this.props.setUpVoteCount(d);
            }
          }),
          g()(this, 'renderVoteCount', e => {
            let n;
            const t = e.id;
            const a = JSON.parse(JSON.stringify(this.props.vote_count))
              .vote_count;
            if (t == a.id) n = a.vote_count;
            else {
              const r = localStorage.getItem(`news_feed${t}`);
              const o = JSON.parse(r);
              n = o != null ? o.vote_count : 0;
            }
            return c.a.createElement('span', { className: 'vote-span' }, n);
          }),
          g()(this, 'hideNewsFeed', e => {
            this.props.hideNewsFeed(this.props.news, e.id);
          }),
          g()(this, 'renderItem', (e, n) =>
            c.a.createElement(
              'div',
              null,
              c.a.createElement(
                'table',
                {
                  width: '100%',
                  height: '30',
                  border: '0',
                  bgcolor: n % 2 == 0 ? '#FFFFFF' : '#F2F2F2',
                  className: 'desktop-table',
                },
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement(
                    'td',
                    {
                      valign: 'middle',
                      align: 'center',
                      className: 'td-header-cloumn-width',
                    },
                    c.a.createElement(
                      'span',
                      { className: 'comments-span' },
                      e.comments,
                    ),
                  ),
                  c.a.createElement(
                    'td',
                    {
                      valign: 'middle',
                      align: 'center',
                      className: 'td-cloumn-width',
                    },
                    this.renderVoteCount(e),
                  ),
                  c.a.createElement(
                    'td',
                    {
                      valign: 'middle',
                      align: 'center',
                      className: 'td-cloumn-width',
                    },
                    c.a.createElement(
                      'a',
                      { href: '#', onClick: this.setUpVoteCount.bind(this, e) },
                      c.a.createElement('img', {
                        src: O,
                        className: 'up-arrow-icon',
                      }),
                    ),
                  ),
                  c.a.createElement(
                    'td',
                    { valign: 'middle' },
                    c.a.createElement(
                      'span',
                      { className: 'news-details-span' },
                      e.title,
                    ),
                    c.a.createElement(
                      'a',
                      {
                        href: e.url,
                        className: 'news-url-span',
                        target: '_blank',
                      },
                      '(',
                      this.getDomain(e.url),
                      ')',
                    ),
                    c.a.createElement(
                      'span',
                      { className: 'news-url-span' },
                      'by',
                    ),
                    c.a.createElement(
                      'span',
                      { className: 'news-author-span' },
                      e.author,
                    ),
                    c.a.createElement(
                      'span',
                      { className: 'news-time-span' },
                      e.time,
                    ),
                    c.a.createElement(
                      'span',
                      { className: 'news-left-bracket' },
                      '[',
                    ),
                    c.a.createElement(
                      'a',
                      {
                        href: '#',
                        className: 'news-hide-label',
                        onClick: this.hideNewsFeed.bind(this, e),
                      },
                      'hide',
                    ),
                    c.a.createElement(
                      'span',
                      { className: 'news-right-bracket' },
                      ']',
                    ),
                  ),
                ),
              ),
              c.a.createElement(
                'table',
                {
                  width: '100%',
                  border: '0',
                  bgcolor: n % 2 == 0 ? '#FFFFFF' : '#F2F2F2',
                  className: 'mobile-table',
                },
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement(
                    'td',
                    {
                      valign: 'middle',
                      align: 'center',
                      className: 'td-mobile-cloumn-width',
                    },
                    this.renderVoteCount(e),
                  ),
                  c.a.createElement(
                    'td',
                    {
                      valign: 'middle',
                      align: 'center',
                      className: 'td-mobile-cloumn-width',
                    },
                    c.a.createElement(
                      'a',
                      { href: '#', onClick: this.setUpVoteCount.bind(this, e) },
                      c.a.createElement('img', {
                        src: O,
                        className: 'mobile-up-arrow-icon',
                      }),
                    ),
                  ),
                  c.a.createElement(
                    'td',
                    { valign: 'middle' },
                    c.a.createElement(
                      'span',
                      { className: 'mobile-news-details-span' },
                      e.title,
                    ),
                    c.a.createElement(
                      'a',
                      {
                        href: e.url,
                        className: 'mobile-news-url-span',
                        target: '_blank',
                      },
                      '(',
                      this.getDomain(e.url),
                      ')',
                    ),
                    c.a.createElement(
                      'div',
                      { className: 'mobile-news-footer-container' },
                      c.a.createElement(
                        'span',
                        { className: 'mobile-news-by-span' },
                        'by',
                      ),
                      c.a.createElement(
                        'span',
                        { className: 'mobile-news-author-span' },
                        e.author,
                      ),
                      c.a.createElement(
                        'span',
                        { className: 'mobile-news-time-span' },
                        e.time,
                      ),
                      c.a.createElement(
                        'span',
                        { className: 'mobile-news-left-bracket' },
                        '[',
                      ),
                      c.a.createElement(
                        'a',
                        {
                          href: '#',
                          className: 'mobile-news-hide-label',
                          onClick: this.hideNewsFeed.bind(this, e),
                        },
                        'hide',
                      ),
                      c.a.createElement(
                        'span',
                        { className: 'mobile-news-right-bracket' },
                        ']',
                      ),
                      c.a.createElement(
                        'span',
                        { className: 'mobile-news-comments' },
                        e.comments,
                        ' comments',
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
          g()(this, 'renderLineChart', e => {
            for (var n = [], t = 0; t < e.length; t++) {
              const a = e[t].id.toString();
              const r = localStorage.getItem(`news_feed${a}`);
              const o = JSON.parse(r);
              const i = { [a]: o != null ? o.vote_count : 0 };
              n.push(i);
            }
            let l = JSON.stringify(n);
            l = (l = (l = l.replace(/[{}]/g, '')).replace('[', '{')).replace(
              ']',
              '}',
            );
            const s = JSON.parse(l);
            return c.a.createElement(k.LineChart, { data: s });
          }),
          (this.state = { newsFeeds: [], startPage: 1, endPage: 31 });
      }

      componentDidMount() {
        this.props.fetchNewsFeed(this.state.startPage, this.state.endPage);
      }

      getDomain(e) {
        if (e != null)
          return e
            .replace('http://', '')
            .replace('https://', '')
            .split(/[/?#]/)[0];
      }

      previousPage() {
        const e = this.state.endPage > 61 ? this.state.endPage - 30 : 31;
        const n = this.state.startPage > 31 ? this.state.startPage - 30 : 1;
        this.setState({ endPage: e, startPage: n }),
          this.props.fetchNewsFeed(n, e);
      }

      nextPage() {
        const e = this.state.endPage + 30;
        const n = this.state.startPage + 30;
        this.setState({ endPage: e, startPage: n }),
          this.props.fetchNewsFeed(n, e);
      }

      render() {
        const e = JSON.parse(JSON.stringify(this.props.news)).news;
        return c.a.createElement(
          'div',
          { className: 'parent-div-container' },
          c.a.createElement('div', null),
          c.a.createElement(
            'div',
            { className: 'news-feed-container' },
            c.a.createElement(
              'div',
              { className: 'news-feed-header' },
              c.a.createElement(
                'table',
                {
                  cellPadding: '0',
                  cellSpacing: '0',
                  width: '100%',
                  border: '0',
                  className: 'desktop-table',
                },
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement(
                    'td',
                    {
                      valign: 'middle',
                      align: 'center',
                      className: 'td-header-cloumn-width',
                    },
                    c.a.createElement(
                      'span',
                      { className: 'header-label' },
                      'Comments',
                    ),
                  ),
                  c.a.createElement(
                    'td',
                    {
                      valign: 'middle',
                      align: 'center',
                      className: 'td-header-cloumn-width',
                    },
                    c.a.createElement(
                      'span',
                      { className: 'header-label' },
                      'Vote Count',
                    ),
                  ),
                  c.a.createElement(
                    'td',
                    {
                      valign: 'middle',
                      align: 'center',
                      className: 'td-header-cloumn-width',
                    },
                    c.a.createElement(
                      'span',
                      { className: 'header-label' },
                      'UpVote',
                    ),
                  ),
                  c.a.createElement(
                    'td',
                    { valign: 'middle' },
                    c.a.createElement(
                      'span',
                      { className: 'header-label' },
                      'News Details',
                    ),
                  ),
                ),
              ),
              c.a.createElement(
                'table',
                {
                  cellPadding: '0',
                  cellSpacing: '0',
                  width: '100%',
                  border: '0',
                  className: 'mobile-table',
                },
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement(
                    'td',
                    {
                      valign: 'middle',
                      align: 'center',
                      className: 'td-mobile-header-cloumn-width',
                    },
                    c.a.createElement(
                      'span',
                      { className: 'mobile-header-label' },
                      'Vote Count',
                    ),
                  ),
                  c.a.createElement(
                    'td',
                    {
                      valign: 'middle',
                      align: 'center',
                      className: 'td-mobile-header-cloumn-width',
                    },
                    c.a.createElement(
                      'span',
                      { className: 'mobile-header-label' },
                      'UpVote',
                    ),
                  ),
                  c.a.createElement(
                    'td',
                    { valign: 'middle' },
                    c.a.createElement(
                      'span',
                      { className: 'mobile-header-label' },
                      'News Details',
                    ),
                  ),
                ),
              ),
            ),
            c.a.createElement(
              'div',
              null,
              e.length > 0
                ? c.a.createElement(v.a, {
                    list: e,
                    renderItem: this.renderItem,
                    extraData: this.state,
                    showsVerticalScrollIndicator: !1,
                    showsHorizontalScrollIndicator: !1,
                  })
                : null,
            ),
            c.a.createElement(
              'div',
              { className: 'pagination-container' },
              c.a.createElement('div', null),
              c.a.createElement(
                'div',
                { className: 'pagination-btn-container' },
                c.a.createElement(
                  'a',
                  {
                    href: '#',
                    className: 'prev-btn-label',
                    onClick: this.previousPage.bind(this),
                  },
                  'Previous',
                ),
                c.a.createElement('div', { className: 'btn-separator-div' }),
                c.a.createElement(
                  'a',
                  {
                    href: '#',
                    className: 'next-btn-label',
                    onClick: this.nextPage.bind(this),
                  },
                  'Next',
                ),
              ),
            ),
            c.a.createElement('div', { className: 'news-feed-bottom-div' }),
            c.a.createElement(
              'div',
              { className: 'news-feed-line-chart-container' },
              c.a.createElement(
                'div',
                null,
                c.a.createElement(
                  'p',
                  { className: 'line-chart-votes-label' },
                  'Votes',
                ),
              ),
              this.renderLineChart(e),
            ),
            c.a.createElement(
              'div',
              { className: 'line-chart-id-div' },
              c.a.createElement(
                'p',
                { className: 'line-chart-id-label' },
                'ID',
              ),
            ),
            c.a.createElement('div', { className: 'news-feed-bottom-div' }),
          ),
          c.a.createElement('div', null),
        );
      }
    }
    const _ = [
      {
        path: '/',
        exact: !0,
        component: Object(b.connect)(
          e => ({ news: e.news, vote_count: e.vote_count }),
          e => ({
            fetchNewsFeed: (n, t) => e(j(n, t)),
            setUpVoteCount: n => {
              return e(
                ((t = n),
                e => {
                  console.log(
                    `Vote : setUpVoteCount Redux = ${JSON.stringify(t)}`,
                  ),
                    e({ type: 'SET_UPVOTE_COUNT', payload: t });
                }),
              );
              let t;
            },
            hideNewsFeed: (n, t) =>
              e(
                ((e, n) => t => {
                  if (e != null) {
                    const a = JSON.parse(JSON.stringify(e));
                    if (void 0 !== a) {
                      const r = a.news;
                      const o = r.findIndex(e => e.id === n);
                      const i = r[o];
                      r.splice(o, 1);
                      const l = {
                        id: i.id,
                        title: i.title,
                        author: i.author,
                        time: i.posted_time,
                        url: i.url,
                        vote_count: i.vote_count,
                        comments: i.comments,
                        hide: 1,
                      };
                      localStorage.setItem(`news_feed${n}`, l), t(S(r));
                    }
                  }
                })(n, t),
              ),
          }),
        )(P),
      },
    ];
    const F = t(2);
    const z = t(14);
    const C = t.n(z);
    const D = t(15);
    const q = t.n(D);
    function J(e, n) {
      const t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let a = Object.getOwnPropertySymbols(e);
        n &&
          (a = a.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, a);
      }
      return t;
    }
    function V(e) {
      for (let n = 1; n < arguments.length; n++) {
        var t = arguments[n] != null ? arguments[n] : {};
        n % 2
          ? J(Object(t), !0).forEach(function (n) {
              g()(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : J(Object(t)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(t, n),
              );
            });
      }
      return e;
    }
    const I = { news: '' };
    const U = function () {
      const e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I;
      const n = arguments.length > 1 ? arguments[1] : void 0;
      switch (n.type) {
        case 'FETCH_NEWS_FEED':
          var t = V(V({}, e), {}, { news: n.payload });
          return t;
        default:
          return e;
      }
    };
    function T(e, n) {
      const t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let a = Object.getOwnPropertySymbols(e);
        n &&
          (a = a.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, a);
      }
      return t;
    }
    function R(e) {
      for (let n = 1; n < arguments.length; n++) {
        var t = arguments[n] != null ? arguments[n] : {};
        n % 2
          ? T(Object(t), !0).forEach(function (n) {
              g()(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : T(Object(t)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(t, n),
              );
            });
      }
      return e;
    }
    const M = { vote_count: '' };
    const L = function () {
      const e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M;
      const n = arguments.length > 1 ? arguments[1] : void 0;
      switch (n.type) {
        case 'SET_UPVOTE_COUNT':
          var t = R(R({}, e), {}, { vote_count: n.payload });
          return t;
        default:
          return e;
      }
    };
    const H = Object(F.combineReducers)({ news: U, vote_count: L });
    const G = Object(F.applyMiddleware)(C.a, q.a);
    const W = Object(F.createStore)(H, G);
    class Y extends c.a.Component {
      render() {
        return c.a.createElement(
          b.Provider,
          { store: W },
          c.a.createElement(
            h.Switch,
            null,
            _.map((e, n) => c.a.createElement(h.Route, p()({ key: n }, e))),
          ),
        );
      }
    }
    const A = Y;
    const X = r()();
    const B = process.env.PORT || 3e3;
    X.use(i.a.json()),
      X.use(r.a.static('build/public')),
      X.get('*', (e, n) => {
        const t = 'React Hacker News Clone';
        const a =
          'The idea behind this project is to design the clone of hacker news website using react.js';
        const r =
          'https://jayclouse.com/wp-content/uploads/2019/06/hacker_news-1000x525-1.jpg';
        const o = m.a.renderToString(
          c.a.createElement(
            d.StaticRouter,
            { location: e.url, context: {} },
            c.a.createElement(A, null),
          ),
        );
        const i = '\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <meta charset="utf-8">\n            <meta content="IE=edge" http-equiv="X-UA-Compatible">\n            <meta content="width=device-width, initial-scale=1" name="viewport">\n            <title>'
          .concat(t, '</title>\n            <meta name="description" content="')
          .concat(
            a,
            '">\n        \n            <meta name="twitter:card" content="summary_large_image">\n            <meta name="twitter:site" content="@anspattnaik">\n            <meta name="twitter:title" content="',
          )
          .concat(
            t,
            '">\n            <meta name="twitter:description" content="',
          )
          .concat(
            a,
            '">\n            <meta name="twitter:creator" content="@anspattnaik">\n            <meta name="twitter:image" content="',
          )
          .concat(r, '">\n            <meta property="og:title" content="')
          .concat(
            t,
            '" />\n            <meta property="og:description" content="',
          )
          .concat(
            a,
            '">\n            <meta property="og:type" content="article" />\n            <meta property="og:url" content="',
          )
          .concat('', '" />\n            <meta property="og:image" content="')
          .concat(
            r,
            '" />\n            <meta property="og:site_name" content="',
          )
          .concat(t, '" />\n            <link rel="canonical" href="')
          .concat(
            '',
            '"/>\n            <link rel="shortcut icon" type="image/png" href="',
          )
          .concat(
            'https://news.ycombinator.com/favicon.ico',
            '"/>\n            <link rel="apple-touch-icon-precomposed" href="',
          )
          .concat(
            r,
            '"/>\n        </head>\n        <body>\n            <div id="root">',
          )
          .concat(
            o,
            '</div>\n            <script src="bundle.js"></script>\n        </body>\n        </html>',
          );
        n.send(i);
      }),
      X.listen(B, () => {
        console.log('Server listening on '.concat(B));
      });
  },
]);
