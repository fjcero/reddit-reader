import React from 'react';
import { Box, Button } from 'grommet';
import { FormClose } from 'grommet-icons';
import Styles from './styles';
import PostNav from '../PostNav';

function Sidebar({ posts }) {
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
            posts.map(post => (
              <PostNav key={post.data.id + post.data.created_at} post={post} />
            ))}
        </Box>
        <Button primary label="Mark all as read" margin="small" />
      </Box>
    </Styles.Sidebar>
  );
}

export default Sidebar;
