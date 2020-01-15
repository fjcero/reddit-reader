import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Text } from 'grommet';
import { useTransition, animated } from 'react-spring';
import { Close, ChatOption } from 'grommet-icons';
import {
  setCurrent,
  dismissPost,
  togglePostAsRead,
} from '../../modules/RedditReader/actions';

import Thumbnail from './Thumbnail';
import ReadIndicator from './ReadIndicator';

const PostNav = ({ post }) => {
  const dispatch = useDispatch();

  const transitions = useTransition(!post.dismissed, null, {
    from: {
      opacity: 0,
      transform: 'translateX(0%)',
      zIndex: 10,
      position: 'relative',
      top: 0,
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
      zIndex: 100,
      position: 'relative',
      top: 0,
    },
    leave: {
      position: 'absolute',
      opacity: 0,
      transform: 'translateX(-100%)',
      zIndex: 101,
    },
    config: { duration: 1000, tension: 100, friction: 200 },
  });

  return transitions.map(
    ({ item, props, key }) =>
      item && (
        <div
          style={{ position: 'relative', height: 220, width: '100%' }}
          key={key}
        >
          <animated.div style={props}>
            <Box
              flex={false}
              style={{
                background: '#282A36',
                height: 220,
                minHeight: 220,
                width: 320,
                maxWidth: 320,
                zIndex: 200,
              }}
              onClick={() => dispatch(setCurrent(post.data))}
            >
              <Box margin="small">
                <Box align="center" direction="row" style={{ marginBottom: 8 }}>
                  <ReadIndicator
                    isRead={post.read}
                    onClick={e => {
                      e.stopPropagation();
                      dispatch(togglePostAsRead(post.data.id));
                    }}
                  />
                  <Text truncate width="280px" weight={600}>
                    {post.data.title}
                  </Text>
                </Box>
                <Box
                  direction="row"
                  overflow="hidden"
                  style={{ maxHeight: 140 }}
                >
                  <Thumbnail post={post.data} />
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
                    onClick={e => {
                      e.stopPropagation();
                      dispatch(dismissPost(post.data.id));
                    }}
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
        </div>
      )
  );
};

export default PostNav;
