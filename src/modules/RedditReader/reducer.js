import {
  CURRENT,
  POSTS,
  TOGGLE_AS_READ,
  DISMISS_POST,
  DISMISS_ALL_POSTS,
} from './actions';

const initialState = {
  posts: {},
  read_posts: [],
};

const RedditReaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS:
      return { ...state, posts: action.posts };
    case CURRENT:
      return { ...state, current: action.current };
    case TOGGLE_AS_READ:
      return state;
    case DISMISS_POST:
      return state;
    case DISMISS_ALL_POSTS:
      return state;
    default:
      return state;
  }
};

export default RedditReaderReducer;
