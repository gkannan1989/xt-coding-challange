import React from 'react';
import { UP_ARROW_ICON } from '../../actions/constants'

const renderItem = ({
    item, 
    index,
    renderVoteCount, 
    setUpVoteCount,
    getDomain,
    hideNewsFeed
}) => (
    <div>
      <table
        width="100%"
        height="30"
        border="0"
        bgcolor={index % 2 == 0 ? '#FFFFFF' : '#F2F2F2'}
        className="desktop-table"
      >
        <tr>
          <td valign="middle" align="center" className="td-header-cloumn-width">
            <span className="comments-span">{item.comments}</span>
          </td>
          <td valign="middle">
            <span className="news-vote-count">{renderVoteCount(item)}</span>
            <span className="news-arrow">
              <a href="#" onClick={() => setUpVoteCount(item)}>
                <img src={UP_ARROW_ICON} className="up-arrow-icon" />
              </a>
            </span>
            <span className="news-details-span">{item.title}</span>
            <a href={item.url} className="news-url-span" target="_blank">
              ({() => getDomain(item.url)})
            </a>
            <span className="news-url-span">by</span>
            <span className="news-author-span">{item.author}</span>
            <span className="news-time-span">{item.time}</span>
            <span className="news-left-bracket">[</span>
            <a
              href="#"
              className="news-hide-label"
              onClick={() => hideNewsFeed(item)}
            >
              hide
            </a>
            <span className="news-right-bracket">]</span>
          </td>
        </tr>
      </table>
      <table
        width="100%"
        border="0"
        bgcolor={index % 2 == 0 ? '#FFFFFF' : '#F2F2F2'}
        className="mobile-table"
      >
        <tr>
          <td valign="middle" align="center" className="td-mobile-cloumn-width">
            {() => renderVoteCount(item)}
          </td>
          <td valign="middle" align="center" className="td-mobile-cloumn-width">
            <a href="#" onClick={() => setUpVoteCount(item)}>
              <img src={UP_ARROW_ICON} className="mobile-up-arrow-icon" />
            </a>
          </td>
          <td valign="middle">
            <span className="mobile-news-details-span">{item.title}</span>
            <a href={item.url} className="mobile-news-url-span" target="_blank">
              ({() => getDomain(item.url)})
            </a>
            <div className="mobile-news-footer-container">
              <span className="mobile-news-by-span">by</span>
              <span className="mobile-news-author-span">{item.author}</span>
              <span className="mobile-news-time-span">{item.time}</span>
              <span className="mobile-news-left-bracket">[</span>
              <a
                href="#"
                className="mobile-news-hide-label"
                onClick={() => hideNewsFeed(item)}
              >
                hide
              </a>
              <span className="mobile-news-right-bracket">]</span>
              <span className="mobile-news-comments">
                {item.comments} comments
              </span>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );

  export default renderItem;