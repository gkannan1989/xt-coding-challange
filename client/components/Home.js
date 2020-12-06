import React, { useState, useContext, useEffect } from 'react';
import Store from '../store/context';
import '../css/index.css';
import { modifyNewsFeed } from '../actions';
import {
  FETCH_NEWS_FEED,
  CLEAN_FEED,
  API_URL,
  HIDE_NEWS_FEED,
  SET_UPVOTE_COUNT
} from '../actions/constants';
import 'chart.js';
import FlatList from 'flatlist-react';
import Chart from '../components/Chart/Chart';
import NewsFeedHeader from '../components/NewsFeedHeader/NewsFeedHeader';
import NewsFeed from '../components/NewsFeed/NewsFeed';

const Home = () => {
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(31);
  const { state, dispatch } = useContext(Store);

  const fetchData = async () => {
    for (let i = startPage; i < endPage; i++) {
      await fetch(API_URL + i)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: FETCH_NEWS_FEED,
            payload: modifyNewsFeed(data),
          });
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getDomain = url => {
    if (url != undefined)
      return url
        .replace('http://', '')
        .replace('https://', '')
        .split(/[/?#]/)[0];
  };

  const setUpVoteCount = item => {
    dispatch({
      type: SET_UPVOTE_COUNT,
      payload: item.id,
    });
  };

  const renderVoteCount = item => (
    <span className="vote-span">{item.vote_count}</span>
  );

  const hideNewsFeed = item =>
    dispatch({ type: HIDE_NEWS_FEED, payload: item.id });

  const renderItem = (item, index) => (
    <NewsFeed 
        item = {item}
        index = {index}
        renderVoteCount = {renderVoteCount}
        setUpVoteCount = {setUpVoteCount}
        getDomain = {getDomain}
        hideNewsFeed = {hideNewsFeed}
      /> 
  );

  const previousPage = () => {
    dispatch({ type: CLEAN_FEED });
    setStartPage(startPage > 31 ? startPage - 30 : 1);
    setEndPage(endPage > 61 ? endPage - 30 : 31);
    fetchData();
  };

  const nextPage = () => {
    dispatch({ type: CLEAN_FEED });
    setStartPage(startPage + 30);
    setEndPage(endPage + 30);
    fetchData();
  };

  return (
    <div className="parent-div-container">
      <div />
      <div className="news-feed-container">
        <NewsFeedHeader />
        <div>
          {state.news.length > 0 ? (
            <FlatList
              list={state.news}
              renderWhenEmpty={() => <div>In progress!</div>}
              renderItem={renderItem}
              extraData={state}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          ) : null}
        </div>
        <div className="pagination-container">
          <div />
          <div className="pagination-btn-container">
            <a
              href="#"
              className="prev-btn-label"
              onClick={() => previousPage()}
            >
              Previous
            </a>
            <div className="btn-separator-div" />
            <a href="#" className="next-btn-label" onClick={() => nextPage()}>
              Next
            </a>
          </div>
        </div>
        <div className="news-feed-bottom-div" />
        <div className="news-feed-line-chart-container">
          <div>
            <p className="line-chart-votes-label">Votes</p>
          </div>
          <Chart results={state.news} />
        </div>
        <div className="line-chart-id-div">
          <p className="line-chart-id-label">ID</p>
        </div>
        <div className="news-feed-bottom-div" />
      </div>
      <div />
    </div>
  );
};

export default Home;
