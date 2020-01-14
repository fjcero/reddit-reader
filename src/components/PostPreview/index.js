import React from 'react';
import { Box, Text, Image } from 'grommet';

const PostImage = ({ post }) => {
  if (!post) return null;

  let url = post.url || null;

  const isGifv = /gifv$/gi;

  if (isGifv.exec(url)) {
    url = post.url.replace(isGifv, 'gif');
  }

  return <Image src={url} a11yTitle={post.title} />;
};

const PostPreview = ({ post }) => (
  <Box flex>
    <Text>{post.data.title}</Text>
    <PostImage post={post.data} />
  </Box>
);

export default PostPreview;
