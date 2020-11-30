import { combineReducers } from 'redux';

import newsFeedsReducer from './newsFeed';
import voteCountReducer from './voteCount';

const rootReducer = combineReducers({
  news: newsFeedsReducer,
  vote_count: voteCountReducer,
});

export default rootReducer;
