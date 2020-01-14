import React, { useState } from 'react';
import { Box, Button, Text, Image } from 'grommet';
import { useTransition, animated } from 'react-spring';

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

  return transitions.map(({ item, props, key }) => {
    console.log({ item, props });
    return (
      item && (
        <animated.div style={props} key={key}>
          <Box
            flex={false}
            height="250px"
            width="100%"
            style={{ background: '#282A36', ...props }}
          >
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
                <Button label="mark as read" onClick={() => setRead(true)} />
              </Box>
            </Box>
          </Box>
        </animated.div>
      )
    );
  });
};

export default PostNav;
