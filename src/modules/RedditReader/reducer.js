import {
  CURRENT,
  POSTS,
  TOGGLE_AS_READ,
  DISMISS_POST,
  DISMISS_ALL_POSTS,
} from './actions';

const initialState = {
  posts: [],
  read_posts: [],
};

const RedditReaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS:
      return { ...state, posts: action.posts };
    case CURRENT:
      console.log('CURRENT', { action });
      return { ...state, current: action.current };
    case TOGGLE_AS_READ:
      console.log({ action });
      return state;
    case DISMISS_POST:
      console.log({ action });
      return state;
    case DISMISS_ALL_POSTS:
      console.log({ action });
      return state;
    default:
      return state;
  }
};

export default RedditReaderReducer;
