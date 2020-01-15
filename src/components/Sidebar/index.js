import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button } from 'grommet';
import { FormClose } from 'grommet-icons';
import Styles from './styles';
import { dismissAllPosts } from '../../modules/RedditReader/actions';
import { PostNav } from '../PostNav';

function Sidebar({ posts }) {
  const dispatch = useDispatch();

  return (
    <Styles.Sidebar
      modal={false}
      onClickOutside={() => null}
      onEsc={() => null}
      plain
      position="left"
      fill="vertical"
    >
      <Box fill elevation="large">
        <Box>
          <Button icon={<FormClose />} />
        </Box>
        <Box flex overflow={{ vertical: 'scroll' }} alignContent="start">
          {posts &&
            posts.length > 0 &&
            posts.map(post => <PostNav post={post} key={post.data.id} />)}
        </Box>
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
