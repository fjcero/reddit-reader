import React from 'react';
import { Box, Text, Image } from 'grommet';

const PostPreview = ({ post }) => (
  <Box flex>
    <Text>{post.data.title}</Text>
    <Image src={post.data.url} a11yTitle={post.data.title} />
  </Box>
);

export default PostPreview;
