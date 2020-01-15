import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Main, Box } from 'grommet';

import { loadPosts } from './actions';

import Sidebar from '../../components/Sidebar';
import PostPreview from '../../components/PostPreview';

function RedditReader({ showSidebar }) {
  const dispatch = useDispatch();
  const posts = useSelector(store => store.reddit.posts);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  return (
    <Main>
      {showSidebar ? <Sidebar posts={posts} /> : null}
      <Box
        style={{
          width: showSidebar ? 'calc(100% - 320px)' : '100%',
          marginLeft: showSidebar ? 320 : 0,
        }}
      >
        {posts && posts.length > 0 && <PostPreview post={posts[0]} />}
      </Box>
    </Main>
  );
}
export default RedditReader;
