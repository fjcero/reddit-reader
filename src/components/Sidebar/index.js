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
              <PostNav key={`${post.type}_${post.data.id}`} post={post} />
            ))}
        </Box>
        <Button primary label="Dismiss all" margin="small" />
      </Box>
    </Styles.Sidebar>
  );
}

export default Sidebar;
