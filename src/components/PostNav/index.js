import React from 'react';
import { Box, Button, Text, Image } from 'grommet';

const PostThumbnail = ({ post }) => {
  // if (!post) return null;

  // let url = post.url || null;

  // const isGifv = /gifv$/gi;

  // if (isGifv.exec(url)) {
  //   url = post.url.replace(isGifv, 'gif');
  // }

  return <Image src={post.thumbnail} a11yTitle={post.title} />;
};

const PostNav = ({ post }) => (
  <Box flex={false} height="250px" width="100%">
    <Box margin="small">
      <Box direction="row">
        <PostThumbnail post={post.data} />
        <Box>
          <Text truncate width="100px">
            {post.data.title}
          </Text>
          <Text>{post.data.description}</Text>
        </Box>
      </Box>
      <Box>
        <Text>{post.data.num_comments}</Text>
        <Button label="mark as read" />
      </Box>
    </Box>
  </Box>
);

export default PostNav;
