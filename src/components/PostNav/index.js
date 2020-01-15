import React, { useState } from 'react';
import { Box, Button, Text, Image } from 'grommet';
import { useTransition, animated } from 'react-spring';
import { Close, ChatOption } from 'grommet-icons';

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
      background: read ? 'none' : '#5DC8FD',
      width: 11,
      height: 11,
      minWidth: 11,
      minHeight: 11,
      marginRight: 8,
      display: 'inline-block',
      borderRadius: '50%',
      border: '2px solid #5DC8FD',
    }}
  ></div>
);

const PostNav = ({ post }) => {
  const [read, setRead] = useState(false);

  const transitions = useTransition(!read, null, {
    from: {
      opacity: 0,
      transform: 'translateX(0%)',
      zIndex: 10,
      position: 'relative',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
      zIndex: 10,
      position: 'relative',
    },
    leave: {
      width: 320,
      position: 'absolute',
      opacity: 0,
      transform: 'translateX(-100%)',
      zIndex: 100,
    },
    config: { duration: 450, tension: 100, friction: 50 },
  });

  return transitions.map(
    ({ item, props, key }) =>
      item && (
        <animated.div style={props} key={key}>
          <Box
            flex={false}
            height="250px"
            width="100%"
            style={{ background: '#282A36', ...props }}
          >
            <Box margin="small">
              <Box align="center" direction="row" style={{ marginBottom: 8 }}>
                <ReadIndicator />
                <Text truncate width="280px" weight={600}>
                  {post.data.title}
                </Text>
              </Box>
              <Box direction="row" overflow="hidden" style={{ maxHeight: 140 }}>
                <PostThumbnail post={post.data} />
                <Text size="small" style={{ marginLeft: 12 }}>
                  {post.data.description || post.data.title}
                </Text>
              </Box>
              <Box direction="row" justify="between" align="center">
                <Button
                  plain
                  color="#FB71BF"
                  icon={<Close color="#FB71BF" size="small" />}
                  label="Dismiss"
                  onClick={() => setRead(true)}
                  style={{ borderBottom: '1px solid currentColor' }}
                />
                <Box align="center" direction="row">
                  <ChatOption color="white" />
                  <Text>{post.data.num_comments}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </animated.div>
      )
  );
};

export default PostNav;
