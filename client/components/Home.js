import React from 'react';
import "../css/index.css";
import { connect } from 'react-redux';
import { fetchNewsFeed, setUpVoteCount, hideNewsFeed } from '../actions';
import { NEWS_STORAGE_KEY, NEWS_FEED_SHOW, UP_ARROW_ICON } from '../actions/constants';
import 'chart.js';
import FlatList from 'flatlist-react';
import Chart from '../components/Chart/Chart';
import NewsFeedHeader from '../components/NewsFeed/NewsFeed';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { startPage: 1,  endPage: 31 }
    }

    componentDidMount() {
        const { startPage, endPage } = this.state;
        this.props.fetchNewsFeed(startPage, endPage);
    }

    getDomain(url) {
        if (url != undefined)
        return url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
    }

    setUpVoteCount = (item) => {
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
            this.props.setUpVoteCount(news_results)
        }
    }

    renderVoteCount = (item) => {
        let id = item.id;
        var votes;
        let vote = JSON.parse(JSON.stringify(this.props.vote_count)).vote_count;

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

    hideNewsFeed = (item) => {
        this.props.hideNewsFeed(this.props.news, item.id);
    }

    renderItem = (item, index) => {
        return (
            <div>
                <table width="100%" height="30" border="0" bgcolor={index % 2 == 0 ? '#FFFFFF' : '#F2F2F2'} className={'desktop-table'}>
                    <tr>
                        <td valign="middle" align="center" className={'td-header-cloumn-width'}><span className={'comments-span'}>{item.comments}</span></td>
                        <td valign="middle">
                            <span className={'news-vote-count'}>{this.renderVoteCount(item)}</span> 
                            <span className={'news-arrow'}><a href="#" onClick={this.setUpVoteCount.bind(this, item)}><img src={UP_ARROW_ICON} className={'up-arrow-icon'} /></a></span>
                            <span className={'news-details-span'}>{item.title}</span>
                            <a href={item.url} className={'news-url-span'} target="_blank">({this.getDomain(item.url)})</a>
                            <span className={'news-url-span'}>by</span>
                            <span className={'news-author-span'}>{item.author}</span>
                            <span className={'news-time-span'}>{item.time}</span>
                            <span className={'news-left-bracket'}>[</span>
                            <a href="#" className={'news-hide-label'} onClick={this.hideNewsFeed.bind(this, item)}>hide</a>
                            <span className={'news-right-bracket'}>]</span>
                        </td>
                    </tr>
                </table>
                <table width="100%" border="0" bgcolor={index % 2 == 0 ? '#FFFFFF' : '#F2F2F2'} className={'mobile-table'}>
                    <tr>
                        <td valign="middle" align="center" className={'td-mobile-cloumn-width'}>{this.renderVoteCount(item)}</td>
                        <td valign="middle" align="center" className={'td-mobile-cloumn-width'}>
                            <a href="#" onClick={this.setUpVoteCount.bind(this, item)}><img src={UP_ARROW_ICON} className={'mobile-up-arrow-icon'} /></a>
                        </td>
                        <td valign="middle">
                            <span className={'mobile-news-details-span'}>{item.title}</span>
                            <a href={item.url} className={'mobile-news-url-span'} target="_blank">({this.getDomain(item.url)})</a>
                            <div className={'mobile-news-footer-container'}>
                                <span className={'mobile-news-by-span'}>by</span>
                                <span className={'mobile-news-author-span'}>{item.author}</span>
                                <span className={'mobile-news-time-span'}>{item.time}</span>
                                <span className={'mobile-news-left-bracket'}>[</span>
                                <a href="#" className={'mobile-news-hide-label'} onClick={this.hideNewsFeed.bind(this, item)}>hide</a>
                                <span className={'mobile-news-right-bracket'}>]</span>
                                <span className={'mobile-news-comments'}>{item.comments} comments</span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

    previousPage() {
        const { startPage, endPage  } = this.state;
 
        this.setState({
            endPage: endPage > 61 ? endPage - 30 : 31,
            startPage: startPage > 31 ? startPage - 30 : 1
        })
        this.props.fetchNewsFeed(startPage, endPage);
    }

    nextPage() {
        const { startPage, endPage  } = this.state;

        this.setState({
            endPage: endPage + 30,
            startPage: startPage + 30
        })
        this.props.fetchNewsFeed(startPage, endPage);
    }

    render() {
        var results = JSON.parse(JSON.stringify(this.props.news)).news;
        return (
            <div className={'parent-div-container'}>
                <div></div>
                <div className={'news-feed-container'}>
                    <NewsFeedHeader />
                    <div>
                        {results.length > 0 ?
                            <FlatList
                                list={results}
                                renderWhenEmpty={() => <div>In progress!</div>}
                                renderItem={this.renderItem}
                                extraData={this.state}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                            />
                            : null}
                    </div>
                    <div className={'pagination-container'}>
                        <div></div>
                        <div className={'pagination-btn-container'}>
                            <a href="#" className={'prev-btn-label'} onClick={this.previousPage.bind(this)}>Previous</a>
                            <div className={'btn-separator-div'}></div>
                            <a href="#" className={'next-btn-label'} onClick={this.nextPage.bind(this)}>Next</a>
                        </div>
                    </div>
                    <div className={'news-feed-bottom-div'}></div>
                    <div className={'news-feed-line-chart-container'}>
                        <div>
                            <p className={'line-chart-votes-label'}>Votes</p>
                        </div>
                        {<Chart results={results} />}
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
}

const stateProps = state => ({
    news: state.news,
    vote_count: state.vote_count
});

const dispatchProps = dispatch => ({
    fetchNewsFeed: (start, end) => dispatch(fetchNewsFeed(start, end)),
    setUpVoteCount: item => dispatch(setUpVoteCount(item)),
    hideNewsFeed: (feeds, id) => dispatch(hideNewsFeed(feeds, id))
});

export default connect(stateProps, dispatchProps)(Home);