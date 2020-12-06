import React from 'react';

const NewsFeedHeader = () => (
  <div className="news-feed-header">
    <table
      cellPadding="0"
      cellSpacing="0"
      width="100%"
      border="0"
      className="desktop-table"
    >
      <tr>
        <td valign="middle" align="center" className="td-header-cloumn-width">
          <span className="header-label">Top</span>
        </td>
        <td valign="middle" align="center" className="td-header-cloumn-width">
          <span className="header-label" />
        </td>
        <td valign="middle" align="center" className="td-header-cloumn-width">
          <span className="header-label" />
        </td>
        <td valign="middle">
          <span className="header-label" />
        </td>
      </tr>
    </table>
    <table
      cellPadding="0"
      cellSpacing="0"
      width="100%"
      border="0"
      className="mobile-table"
    >
      <tr>
        <td
          valign="middle"
          align="center"
          className="td-mobile-header-cloumn-width"
        >
          <span className="mobile-header-label" />
        </td>
        <td
          valign="middle"
          align="center"
          className="td-mobile-header-cloumn-width"
        >
          <span className="mobile-header-label" />
        </td>
        <td valign="middle">
          <span className="mobile-header-label" />
        </td>
      </tr>
    </table>
  </div>
);

export default NewsFeedHeader;
