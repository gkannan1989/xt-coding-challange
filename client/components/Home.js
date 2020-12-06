import React, { useState, useContext, useEffect } from 'react';
import Store from '../store/context'; 
import "../css/index.css";
import { connect } from 'react-redux';
import { fetchNewsFeed, setUpVoteCount, hideNewsFeed, modifyNewsFeed } from '../actions';
import { FETCH_NEWS_FEED, CLEAN_FEED, API_URL, SET_UPVOTE_COUNT, NEWS_STORAGE_KEY, NEWS_FEED_SHOW, UP_ARROW_ICON } from '../actions/constants';
import 'chart.js';
import FlatList from 'flatlist-react';
import Chart from '../components/Chart/Chart';
import NewsFeedHeader from '../components/NewsFeedHeader/NewsFeedHeader';

const Home = () => {
    const [ startPage, setStartPage ] = useState(1);
    const [ endPage, setEndPage ] = useState(31);
    const { state, dispatch } = useContext(Store);

    const fetchData = async () => {
        for (var i = startPage; i < endPage; i++) {
            await fetch(API_URL + i)
            .then(response => response.json())
            .then(data => { 
                dispatch({
                    type: FETCH_NEWS_FEED,
                    payload: modifyNewsFeed(data)
                })
            });
        }
    }
    
    useEffect(() => {
       fetchData();
    }, []);

    const getDomain = (url) => {
        if (url != undefined)
        return url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
    }

    const setUpVoteCount = (item) => {
        const { id, title, author, posted_time, url, comments } = item;

        let storage_item = localStorage.getItem(NEWS_STORAGE_KEY + id);
        let parse_storage_item = JSON.parse(storage_item);

        if (title == parse_storage_item.title) {
            let new_vote_count = parseInt(parse_storage_item.vote_count) + 1;
            let news_results = {
                "id": id,
                "title": title,
                "author": author,
                "time": posted_time,
                "url": url,
                "vote_count": new_vote_count,
                "comments": comments,
                "hide": NEWS_FEED_SHOW
            }
            localStorage.setItem(NEWS_STORAGE_KEY + id, JSON.stringify(news_results));
            setUpVoteCount(news_results)
        }
    }

    const renderVoteCount = (item) => {
        let id = item.id;
        var votes;
        let vote = state.vote_count;

        debugger
        if (id == vote.id) {
            votes = vote.vote_count;
        } else {
            let storage_item = localStorage.getItem(NEWS_STORAGE_KEY + id);
            let parse_storage_item = JSON.parse(storage_item);
            let vote_count = parse_storage_item != null ? parse_storage_item.vote_count : 0;
            votes = vote_count;
        }
        return (
            <span className={'vote-span'}>{votes}</span>
        );
    }

    const renderItem = (item, index) => {
        return (
            <div>
                <table width="100%" height="30" border="0" bgcolor={index % 2 == 0 ? '#FFFFFF' : '#F2F2F2'} className={'desktop-table'}>
                    <tr>
                        <td valign="middle" align="center" className={'td-header-cloumn-width'}><span className={'comments-span'}>{item.comments}</span></td>
                        <td valign="middle">
                            <span className={'news-vote-count'}>{renderVoteCount(item)}</span> 
                            <span className={'news-arrow'}><a href="#" onClick={() => setUpVoteCount(item)}><img src={UP_ARROW_ICON} className={'up-arrow-icon'} /></a></span>
                            <span className={'news-details-span'}>{item.title}</span>
                            <a href={item.url} className={'news-url-span'} target="_blank">({() => getDomain(item.url)})</a>
                            <span className={'news-url-span'}>by</span>
                            <span className={'news-author-span'}>{item.author}</span>
                            <span className={'news-time-span'}>{item.time}</span>
                            <span className={'news-left-bracket'}>[</span>
                            <a href="#" className={'news-hide-label'} onClick={() => hideNewsFeed(item)}>hide</a>
                            <span className={'news-right-bracket'}>]</span>
                        </td>
                    </tr>
                </table>
                <table width="100%" border="0" bgcolor={index % 2 == 0 ? '#FFFFFF' : '#F2F2F2'} className={'mobile-table'}>
                    <tr>
                        <td valign="middle" align="center" className={'td-mobile-cloumn-width'}>{() => renderVoteCount(item)}</td>
                        <td valign="middle" align="center" className={'td-mobile-cloumn-width'}>
                            <a href="#" onClick={() => setUpVoteCount(item)}><img src={UP_ARROW_ICON} className={'mobile-up-arrow-icon'} /></a>
                        </td>
                        <td valign="middle">
                            <span className={'mobile-news-details-span'}>{item.title}</span>
                            <a href={item.url} className={'mobile-news-url-span'} target="_blank">({() => getDomain(item.url)})</a>
                            <div className={'mobile-news-footer-container'}>
                                <span className={'mobile-news-by-span'}>by</span>
                                <span className={'mobile-news-author-span'}>{item.author}</span>
                                <span className={'mobile-news-time-span'}>{item.time}</span>
                                <span className={'mobile-news-left-bracket'}>[</span>
                                <a href="#" className={'mobile-news-hide-label'} onClick={() => hideNewsFeed(item)}>hide</a>
                                <span className={'mobile-news-right-bracket'}>]</span>
                                <span className={'mobile-news-comments'}>{item.comments} comments</span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

    const previousPage = () => {
        dispatch({
            type: CLEAN_FEED 
        })
        setStartPage(startPage > 31 ? startPage - 30 : 1);
        setEndPage(endPage > 61 ? endPage - 30 : 31);
        fetchData();
    }

    const nextPage = () => {
        dispatch({
            type: CLEAN_FEED 
        })
        setStartPage(startPage + 30);
        setEndPage(endPage + 30);
        fetchData();
    }

    return (
        <div className={'parent-div-container'}>
            <div></div>
            <div className={'news-feed-container'}>
                <NewsFeedHeader />
                <div>
                    {state.news.length > 0 ?
                        <FlatList
                            list={state.news}
                            renderWhenEmpty={() => <div>In progress!</div>}
                            renderItem={renderItem}
                            extraData={state}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                        />
                        : null}
                </div>
                <div className={'pagination-container'}>
                    <div></div>
                    <div className={'pagination-btn-container'}>
                        <a href="#" className={'prev-btn-label'} onClick={() => previousPage()}>Previous</a>
                        <div className={'btn-separator-div'}></div>
                        <a href="#" className={'next-btn-label'} onClick={() => nextPage()}>Next</a>
                    </div>
                </div>
                <div className={'news-feed-bottom-div'}></div>
                <div className={'news-feed-line-chart-container'}>
                    <div>
                        <p className={'line-chart-votes-label'}>Votes</p>
                    </div>
                    {<Chart results={state.news} />}
                </div>
                <div className={'line-chart-id-div'}>
                    <p className={'line-chart-id-label'}>ID</p>
                </div>
                <div className={'news-feed-bottom-div'}></div>
            </div>
            <div></div>
        </div>
    );

}
 

export default Home;