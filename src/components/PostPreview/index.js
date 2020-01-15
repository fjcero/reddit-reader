import React from 'react';
import { Box, Text, Image } from 'grommet';
import { useSelector } from 'react-redux';

const PostPreview = () => {
  const post = useSelector(store => store.reddit.current);

  if (!post) return;

  // Cleanup URLs for gif files
  let url = post.url || null;
  const isGifvRegex = /gifv$/gi;
  if (isGifvRegex.test(url)) {
    url = url.replace(isGifvRegex, 'gif');
  }

  return (
    <Box flex margin="large" style={{ color: 'white' }}>
      <Text>{post.title}</Text>
      <Image
        src={url}
        a11yTitle={post.title}
        alignSelf="center"
        fill={false}
        fit="contain"
        width="500px"
        height="500px"
      />
      <Text>{post.description}</Text>
    </Box>
  );
};

export default PostPreview;
