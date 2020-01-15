import { POSTS, MARK_AS_READ, DISMISS_POSTS } from './actions';

const initialState = {
  posts: [],
};

const RedditReaderReducer = (state = initialState, action) => {
  console.log('ASDASDASD')
  switch (action.type) {
    case POSTS:
      console.log('POSTS', { action });
      return { ...state, posts: action.posts };
    case MARK_AS_READ:
      return state;
    case DISMISS_POSTS:
      return state;
    default:
      return state;
  }
};

export default RedditReaderReducer;
