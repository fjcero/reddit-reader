// import * as R from 'ramda';
export const CURRENT = 'REDDIT__CURRENT_POST';
export const POSTS = 'REDDIT__POSTS';
export const TOGGLE_AS_READ = 'REDDIT__TOGGLE_AS_READ';
export const DISMISS_POST = 'REDDIT__DISMISS_POST';
export const DISMISS_ALL_POSTS = 'REDDIT__DISMISS_ALL_POSTS';

export const loadPosts = ({ limit } = { limit: 50 }) => dispatch => {
  return fetch(`https://www.reddit.com/top.json?limit=${limit}`)
    .then(res => res.json())
    .then(res => dispatch(setPosts(res.data.children)));
};

export const setPosts = posts => ({
  type: POSTS,
  posts,
});

export const setCurrent = current => ({
  type: CURRENT,
  current,
});

export const dismissPost = postId => (dispatch, getState) => {
  const posts = getState().reddit.posts.slice();
  const postIdx = posts.findIndex(p => p.data.id === postId);
  const post = { ...posts[postIdx], dismissed: true };

  posts.splice(postIdx, 1, post);

  dispatch(setPosts(posts));
};

export const dismissAllPosts = () => (dispatch, getState) => {
  const posts = getState().reddit.posts.slice();
  const newPosts = posts.map(post => ({ ...post, dismissed: true }));

  dispatch(setPosts(newPosts));
  dispatch(setCurrent(null))
};


export const togglePostAsRead = postId => (dispatch, getState) => {
  const posts = getState().reddit.posts.slice();
  const postIdx = posts.findIndex(p => p.data.id === postId);
  const post = { ...posts[postIdx], read: !posts[postIdx].read };

  posts.splice(postIdx, 1, post);

  dispatch(setPosts(posts));
};
