import { FETCH_NEWS_FEED, SET_UPVOTE_COUNT, HIDE_NEWS_FEED, CLEAN_FEED} from '../actions/constants';

const initialState = {
  news: [],
  vote_count: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS_FEED: {
      const newState = {
        ...state,
        news: [...state.news, ...action.payload],
      };
      return newState;
    }
    case CLEAN_FEED: {
      const newState = {
        ...state,
        news: [],
      };
      return newState;
    }
    case HIDE_NEWS_FEED: {
        const newState = {
          ...state,
          news: state.news.filter(item => item.id !== action.payload) ,
        };
        return newState;
    }
    case SET_UPVOTE_COUNT: {
      const newState = {
        ...state,
        news: state.news.map(item => item.id == action.payload ? {...item, vote_count: item.vote_count + 1} : item) ,
      };
      return newState;
    }
    default:
      return state;
  }
};
