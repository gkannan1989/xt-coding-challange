import {
  API_URL,
  FETCH_NEWS_FEED,
  SET_UPVOTE_COUNT,
  NEWS_STORAGE_KEY,
  NEWS_FEED_SHOW,
  NEWS_FEED_HIDE,
} from './constants';

import 'regenerator-runtime/runtime';

export const dispatchNewsFeeds = data => ({
  type: FETCH_NEWS_FEED,
  payload: data,
});

export const fetchNewsFeed = (start, end) => async dispatch => {
  const feeds = [];
  for (var i = start; i < end; i++) {
    await fetch(API_URL + parseInt(i))
      .then(response => response.json())
      .then(data => {
        const results = JSON.parse(JSON.stringify(data));
        const {
          title,
          id,
          author,
          url,
          created_at_i,
          points,
          children,
        } = results;
        if (title != null) {
          const date = new Date(created_at_i * 1000);
          const posted_time = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;

          const storage_item = localStorage.getItem(NEWS_STORAGE_KEY + id);
          const parse_storage_item = JSON.parse(storage_item);

          const vote_storage_count =
            parse_storage_item != null ? parse_storage_item.vote_count : 0;
          const show_hide_status =
            parse_storage_item != null &&
            parse_storage_item.hide &&
            parse_storage_item.hide === NEWS_FEED_HIDE
              ? NEWS_FEED_HIDE
              : NEWS_FEED_SHOW;

          if (show_hide_status === NEWS_FEED_SHOW) {
            const news_results = {
              id,
              title,
              author,
              time: posted_time,
              url,
              vote_count:
                vote_storage_count > points ? vote_storage_count : points,
              comments: children.length,
              hide: show_hide_status,
            };
            feeds.push(news_results);
            localStorage.setItem(
              NEWS_STORAGE_KEY + id,
              JSON.stringify(news_results),
            );
            dispatch(dispatchNewsFeeds(feeds));
          }
        }
      })
      .catch(error => {
        console.log(`Error Feed ${i} == ${JSON.stringify(error)}`);
      });
  }
};

export const dispatchVoteCount = count => ({
  type: SET_UPVOTE_COUNT,
  payload: count,
});

export const setUpVoteCount = vote => dispatch => {
  dispatch(dispatchVoteCount(vote));
};

export const hideNewsFeed = (feeds, id) => dispatch => {
  if (feeds != null) {
    const parseHide = JSON.parse(JSON.stringify(feeds));
    if (parseHide !== undefined) {
      const { news } = parseHide;
      const index = news.findIndex(el => el.id === id);
      const item = news[index];
      news.splice(index, 1);
      var hide_results = {
        "id": item.id,
        "title": item.title,
        "author": item.author,
        "time": item.posted_time,
        "url": item.url,
        "vote_count": item.vote_count,
        "comments": item.comments,
        "hide": NEWS_FEED_HIDE
      } 
      localStorage.setItem(NEWS_STORAGE_KEY + id, hide_results);
      dispatch(dispatchNewsFeeds(news));
    }
  }
};
