import { FETCH_NEWS_FEED, SET_UPVOTE_COUNT, CLEAN_FEED} from '../actions/constants';

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
    case SET_UPVOTE_COUNT: {
        const newState = {
          ...state,
          vote_count: action.payload,
        };
        return newState;
    }
    default:
      return state;
  }
};
