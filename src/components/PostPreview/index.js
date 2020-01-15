import React from 'react';
import { Box, Text, Image } from 'grommet';
import { useSelector } from 'react-redux';

const PostPreview = () => {
  const post = useSelector(store => store.reddit.current);

  let url = post.url || null;

  const isGifvRegex = /gifv$/gi;

  if (isGifvRegex.test(url)) {
    url = url.replace(isGifvRegex, 'gif');
  }

  return (
    <Box flex margin="large">
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
    </Box>
  );
};

export default PostPreview;
