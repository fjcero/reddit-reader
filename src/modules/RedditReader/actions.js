export const LOAD_MORE = 'REDDIT__LOAD_MORE_POSTS';
export const CURRENT = 'REDDIT__CURRENT_POST';
export const POSTS = 'REDDIT__POSTS';
export const TOGGLE_AS_READ = 'REDDIT__TOGGLE_AS_READ';
export const DISMISS_POST = 'REDDIT__DISMISS_POST';
export const DISMISS_ALL_POSTS = 'REDDIT__DISMISS_ALL_POSTS';

export const loadPosts = ({ limit, before } = { limit: 50 }) => dispatch => {
  const params = new URLSearchParams();
  params.append('limit', limit || 50);
  if (before) {
    params.append('before', before);
  }

  return fetch(`https://www.reddit.com/top.json?${params.toString()}`)
    .then(res => res.json())
    .then(res => dispatch(setPosts(res.data.children)));
};

export const fetchMorePosts = ({ limit, before } = { limit: 50 }) => dispatch => {
  const params = new URLSearchParams();
  params.append('limit', limit || 50);
  if (before) {
    params.append('before', before);
  }

  return fetch(`https://www.reddit.com/top.json?${params.toString()}`)
    .then(res => res.json())
    .then(res => dispatch(loadMorePosts(res.data.children)));
};

export const loadMorePosts = posts => {
  return {
    type: LOAD_MORE,
    posts,
  };
};

export const setPosts = posts => {
  return {
    type: POSTS,
    posts,
  };
};

export const setCurrent = current => dispatch => {
  if (current) {
    dispatch(markPostAsRead(current.id));
  }

  dispatch({
    type: CURRENT,
    current,
  });
};

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
  dispatch(setCurrent());
};

export const togglePostAsRead = postId => (dispatch, getState) => {
  const posts = getState().reddit.posts.slice();
  const postIdx = posts.findIndex(p => p.data.id === postId);
  const post = { ...posts[postIdx], read: !posts[postIdx].read };

  posts.splice(postIdx, 1, post);

  dispatch(setPosts(posts));
};

export const markPostAsRead = postId => (dispatch, getState) => {
  const posts = getState().reddit.posts.slice();
  const postIdx = posts.findIndex(p => p.data.id === postId);
  const post = { ...posts[postIdx], read: true };

  posts.splice(postIdx, 1, post);

  dispatch(setPosts(posts));
};
