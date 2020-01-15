import { combineReducers } from 'redux';
import AppReducer from './containers/App/reducer';
import RedditReaderReducer from './containers/RedditReader/reducer';

const reducers = combineReducers({
  app: AppReducer,
  reddit: RedditReaderReducer,
});

export default reducers;
