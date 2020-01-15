import { combineReducers } from 'redux';
import AppReducer from './modules/App/reducer';
import RedditReaderReducer from './modules/RedditReader/reducer';

const reducers = combineReducers({
  app: AppReducer,
  reddit: RedditReaderReducer,
});

export default reducers;
