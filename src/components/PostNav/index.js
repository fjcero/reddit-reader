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

const ReadIndicator = ({ read }) => (
  <div
    style={{
      background: read ? 'none' : 'red',
      width: 18,
      height: 18,
      minWidth: 18,
      minHeight: 18,
      marginRight: 8,
      display: 'inline-block',
      borderRadius: '50%',
      border: '2px solid red',
    }}
  ></div>
);

const PostNav = ({ post }) => (
  <Box flex={false} height="250px" width="100%">
    <Box margin="small">
      <Box align="center" direction="row">
        <ReadIndicator />
        <Text truncate width="280px">
          {post.data.title}
        </Text>
      </Box>
      <Box direction="row">
        <PostThumbnail post={post.data} />
        <Text>{post.data.description}</Text>
      </Box>
      <Box>
        <Text>{post.data.num_comments}</Text>
        <Button label="mark as read" />
      </Box>
    </Box>
  </Box>
);

export default PostNav;
