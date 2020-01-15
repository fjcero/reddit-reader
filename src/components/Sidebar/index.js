import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Text, InfiniteScroll } from 'grommet';
import { FormClose } from 'grommet-icons';
import Styles from './styles';
import {
  fetchMorePosts,
  dismissAllPosts,
} from '../../modules/RedditReader/actions';
import { PostNav } from '../PostNav';

function Sidebar({ posts }) {
  const dispatch = useDispatch();

  const onMore = () => {
    const latest = posts[posts.length - 1];
    const id = `${latest.kind}_${latest.data.id}`;
    dispatch(fetchMorePosts({ before: id }));
  };

  return (
    <Styles.Sidebar
      modal={false}
      onClickOutside={() => null}
      onEsc={() => null}
      plain
      position="left"
      fill="vertical"
    >
      <Box fill elevation="large" justify="start" style={{ height: '100vh' }}>
        <Box flex={false} direction="row" align="center" height="48px">
          <Button icon={<FormClose />} />
          <Text>Reddit Posts</Text>
        </Box>
        <Box fill overflow={{ vertical: 'scroll' }}>
          {posts && posts.length > 0 && (
            <InfiniteScroll items={posts} onMore={onMore}>
              {(item, idx) => <PostNav post={item} key={`${idx}_${item.data.id}`} />}
            </InfiniteScroll>
          )}
        </Box>
        {/* <Box flex overflow={{ vertical: 'scroll' }} alignContent="start">
          {posts &&
            posts.length > 0 &&
            posts.map(post => <PostNav post={post} key={post.data.id} />)}
        </Box> */}
        <Button
          primary
          label="Dismiss all"
          margin="small"
          onClick={() => dispatch(dismissAllPosts())}
        />
      </Box>
    </Styles.Sidebar>
  );
}

export default Sidebar;
