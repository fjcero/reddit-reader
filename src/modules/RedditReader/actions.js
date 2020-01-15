export const POSTS = 'REDDIT__POSTS';
export const MARK_AS_READ = 'REDDIT__MARKED_AS_READ';
export const DISMISS_POSTS = 'REDDIT__DISMISS_POSTS';

export const loadPosts = ({ limit } = { limit: 50 }) => dispatch => {
  return fetch(`https://www.reddit.com/top.json?limit=${limit}`)
    .then(res => res.json())
    .then(res => dispatch(setPosts(res.data.children)));
};

export const setPosts = posts => ({
  type: POSTS,
  posts,
});
